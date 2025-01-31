import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import Head from 'next/head';
import './map.scss';

const Map = ({ setList, confirmRegister, lati, longi }) => {
  const [zooms, setZooms] = useState([]);
  
  // const [zoomIn, zoomOut] = zooms;

  // const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);

  // const [coords, setCoords] = useState({
  //   lat: null, 
  //   long: null
  // })
 
  // useEffect(() => {
  //   setCoords({
  //     lat: latitude, 
  //     long: longitude
  //   })
  // }, [latitude, longitude])

  useEffect(() => {
    // document.getElementById('category').children[0].className='on';
    // onClickCategory();
    // searchPlaces();

    // let script = document.createElement('script');
    // script.type = "text/javascript";
    // script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_MAP_KEY}&libraries=services`;
    // document.head.appendChild(script);
    // 여기서 비동기적 요소가 있나? 안되는 이유?

    // console.log('map');
    // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
    var placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 }),
      contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
      markers = [], // 마커를 담을 배열입니다
      currCategory = ''; // 현재 선택된 카테고리를 가지고 있을 변수입니다

    // console.log(1, coords.lat, coords.long)
    // console.log(2, latitude, longitude)
    // 첨엔 제대로 바로 넘어오는데 새로고침을 하면 undefined가 첨에 들어가 버림. 

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(lati, longi), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(map);

    // 지도에 idle 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'idle', searchPlaces);
    // kakao.maps.event.addListener(map, 'center_changed', searchPlaces);

    // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다
    contentNode.className = 'placeinfo_wrap';

    // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
    // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
    addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
    addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

    // 커스텀 오버레이 컨텐츠를 설정합니다
    placeOverlay.setContent(contentNode);
    // console.log(placeOverlay);

    // 각 카테고리에 클릭 이벤트를 등록합니다
    addCategoryClickEvent();

    // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
    function addEventHandle(target, type, callback) {
      if (target.addEventListener) {
        target.addEventListener(type, callback);
      } else {
        target.attachEvent('on' + type, callback);
      }
    }

    // 카테고리 검색을 요청하는 함수입니다
    function searchPlaces() {
      if (!currCategory) {
        return;
      }

        // 커스텀 오버레이를 숨깁니다
        placeOverlay.setMap(null);
        // 지도에 표시되고 있는 마커를 제거합니다
        removeMarker();
  
      // var ps = new kakao.maps.services.Places(map)
      ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
        setList(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        console.log('여긴 카페가 없군요')
        // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
      } else if (status === kakao.maps.services.Status.ERROR) {
        // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
      }
    }

    // 지도에 마커를 표출하는 함수입니다
    function displayPlaces(places) {
      // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
      // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다

      // console.log(document
        // .getElementById(currCategory))

      var order = document
        .getElementById(currCategory)
        .getAttribute('data-order');

      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        var marker = addMarker(
          new kakao.maps.LatLng(places[i].y, places[i].x),
          order,
        );

        // 마커와 검색결과 항목을 클릭 했을 때
        // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
        (function(marker, place) {
          kakao.maps.event.addListener(marker, 'click', function() {
            displayPlaceInfo(place);
            document.querySelector('.conquerInMap').onclick = () => {
              confirmRegister(place);
            };
          });
        })(marker, places[i]);
      }
    }


    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position, order) {
      var imageSrc =
          'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(27, 28), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(11, 28), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions,
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker); // 배열에 생성된 마커를 추가합니다

      return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
    function displayPlaceInfo(place) {
      var content =
        '<div class="placeinfo">' +
        '   <a class="title" href="' +
        place.place_url +
        '" target="_blank" title="' +
        place.place_name +
        '">' +
        place.place_name +
        '</a>' +
        '<button class="conquerInMap">점령하기</button>';

      if (place.road_address_name) {
        content +=
          '    <span title="' +
          place.road_address_name +
          '">' +
          place.road_address_name +
          '</span>' +
          '  <span class="jibun" title="' +
          place.address_name +
          '">(지번 : ' +
          place.address_name +
          ')</span>';
      } else {
        content +=
          '    <span title="' +
          place.address_name +
          '">' +
          place.address_name +
          '</span>';
      }

      content +=
        '    <span class="tel">' +
        place.phone +
        '</span>' +
        '</div>' +
        '<div class="after"></div>';

      contentNode.innerHTML = content;
      placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
      placeOverlay.setMap(map);
    }

    // 각 카테고리에 클릭 이벤트를 등록합니다
    function addCategoryClickEvent() {
      var category = document.getElementById('category'),
        children = category.children;

      for (var i = 0; i < children.length; i++) {
        children[i].onclick = onClickCategory;
      }
    }

    

    // 카테고리를 클릭했을 때 호출되는 함수입니다
    function onClickCategory() {
      var id = this.id,
       className = this.className;
        placeOverlay.setMap(null);

      if (className === 'on') {
        currCategory = '';
        changeCategoryClass();
        removeMarker();
      } else {
        currCategory = id;
        changeCategoryClass(this);
        searchPlaces();
      }
    }

    if (document.getElementById('category').children[0].className==='') {
      currCategory = 'CE7'
      changeCategoryClass(document.getElementById('category').children[0]);
      searchPlaces();
    }
    
    // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
    function changeCategoryClass(el) {
      var category = document.getElementById('category'),
        children = category.children,
        i;

      for (i = 0; i < children.length; i++) {
        children[i].className = '';
      }

      if (el) {
        el.className = 'on';
      }
    }

    // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    function zoomIn() {
      map.setLevel(map.getLevel() - 1);
    }

    // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    function zoomOut() {
      map.setLevel(map.getLevel() + 1);
    }

    setZooms([zoomIn, zoomOut]);
  }, []);

  return (
    <div>
      <Head>
        {/* <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_MAP_KEY}&libraries=services`}
        ></script> */}
      </Head>

      <div style={{ margin: '12px' }}>
        점령할 카페를 선택해주세요.
        <br />
        점령할 카페가 보이지 않으면 해당 카페의 위치 부근에서 지도 확대를
        눌러주세요
      </div>
      <div className="map_wrap">
        <div
          id="map"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        ></div>
        <ul id="category">
          <li id="CE7" data-order="4">
            <span className="category_bg cafe"></span>
            카페 보기
          </li>
        </ul>
        <div className="custom_zoomcontrol radius_border">
          <span onClick={zooms[0]}>
            <img
              src="http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
              alt="확대"
            />
          </span>
          <span onClick={zooms[1]}>
            <img
              src="http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
              alt="축소"
            />
          </span>
        </div>
        {/* 여기 좀 더 의미론적으로 바꾸기. zooms[0] 이런식으로 말고.  */}
      </div>
    </div>
  );
};

//jsx도 render를 한번 하면 딱 한번만 불리나?

export { Map };

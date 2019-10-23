// fix: 카페 점령된것/점령 안된것 모양, 숫자,
// todo: 기본으로 카페 목록들 클릭이 돼서 나오게
// todo: 현위치 버튼.
// todo:Link href와 a href 로 /register로 가게 될 때의 차이?
// 노란 라인 없애기, warning 없애기. styled components랑 관련 있는듯??? 
// prettier가 됐다, 안됐다 하는 이유?? 
// console이 서버에 떴다가 , 클라이언트쪽에 떴다가 왔다갔다 뜨는건 왜 그러나
// 검색으로도 찾을 수 있게 만들어야 함. 

// https://github.com/zeit/next-plugins/tree/master/packages/next-css 깃헙 설명에 css module이 있다는 것과 없다는 것의 차이가 뭔지 모르겠음. 
// css 파일을 map에만 import하니까 안됨. 오히려 index.js에만 넣으면 됨. 하나에서 scss랑 css를 동시에 못 쓰는 듯. 
// 클릭할때 뜨는 레이아웃 보이는 파란 선 뭐지?? 

// 클릭시 등록하겠습니까? confirm 창 디자인 변경  
// 등록하기 누르면 modal로 선택할 수 있게 (반응형 앱?).
// 
// modal을 팝업처럼 튀어나오게 하는 방법 & modal이면 다른 키가 안 눌려야 하는데 눌리네. 주변 약간 어둡게 바꾸면서... 
// map api 다시 완전 파악하고, 내 입맛에 맞게 수정을 좀 해야 함. 
// styled components 적용시키기 - 안되는 부분. 너무 하나에만 매달려 있었음. 이게 왜 되는지 모르겠음. 



import React, { useEffect, useState, useMemo, useCallback } from 'react';

// import Link from 'next/link';
import { Map } from './map';
import RegisterList from './registerList';
import "../style.scss"
import "../map.scss"
import "../modal.scss"
import RenderModal from './modal'
import styled from 'styled-components'

const Index = () => {
  const [list, setList] = useState([]);
  const changeList = useCallback((data) => {
    setList(data);
  }, [])

  const [showed, setShowed] = useState(false);
  const showModal = (boolean) => {
    setShowed(boolean)
  }

  const [cafeInfo, setCafeInfo] = useState({
    name:'',
    phone:'',
    address:''
  });

  const confirmRegister = (name, phone, address) => {
    if (confirm('등록하시겠습니까?')) {
      // showModal(true);
      // setCafeInfo({name, phone, address})
      RenderModal({showModal, cafeInfo})
    }
  }

  // console.log('index')

	return (
		<div className="grid-container">
      <HH1> cafe & conquer </HH1>
      <div className="grid-map">
        <Map setList={changeList} confirmRegister={confirmRegister}/>
      </div>
      <div className="grid-register">
        <RegisterList list={list} confirmRegister={confirmRegister}
       />
      </div>
      <div id="modal">
        {/* {showed? <RenderModal showModal={showModal} cafeInfo={cafeInfo}/>: null} */}
      </div>
		</div>
	);
};

const HH1 = styled.h2`
  font-size: 30px;
  color: gray;
`

export default Index;

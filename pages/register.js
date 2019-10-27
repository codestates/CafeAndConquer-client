import { useState, useCallback, useEffect } from 'react';
import { Map } from '../components/map';
import RegisterList from './registerList';
import Modal from '../components/modal';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import axios from 'axios';
// import { AST_Yield } from 'terser';

const Register = () => {
  const [list, setList] = useState([]);
  const changeList = useCallback((data) => {
    setList(data);
  }, []);

  const [showed, setShowed] = useState(false);
  const showModal = (boolean) => {
    setShowed(boolean);
  };

  const [cafeInfo, setCafeInfo] = useState({
    name: '',  
    open24Hour: null,
    priceIceAmericano: null, 
    enoughOutlets: '', 
    // pioneer:
  });

  useEffect(()=> {
    if (cafeInfo.name !== '') {
      showModal(true);
    }
  }, [cafeInfo])

  const confirmRegister = (place) => {
    if (confirm(`${place.place_name} 카페를 점령하시겠습니까?`)) {
      setCafeInfo({...cafeInfo, name: place.place_name})      

      const {address_name, id, phone, place_name, x, y} = place
      const {open24Hour, priceIceAmericano, enoughOutlets} = cafeInfo
      axios.post('http://18.221.57.226:8080/api/cafe', {
        cafeId: id,
        phone: phone, 
        cafeName: place_name, 
        address: address_name, 
        latitude: y, 
        longitude: x, 
        open24Hour: Number(open24Hour), 
        priceIceAmericano: Number(priceIceAmericano), 
        enoughOutlets: enoughOutlets, 
        // pioneer: 로그인 정보도 받아와야 함. 
      }).then(res => alert(res.message))
    }
  };
  const confirmDelete = (place) => {
    if (
      confirm(
        '정복한 카페 정보를 삭제하시겠습니까? (해당카페의 정복자만 가능합니다)',
      )
    ) {
      axios.delete('http://18.221.57.226:8080/api/cafe', {
        cafeId: place.id
      }).then(res => alert(res.message))
      // 일단 유저가 정복한 사람이 맞는지 확인
      // 맞으면 삭제 처리 , 아니면 이 카페의 정복자가 아니므로 삭제할 수 없습니다.
    }
  };

  const confirmEdit = (place) => {
    if (confirm('정복한 카페 정보를 수정하시겠습니까?')) {
      setCafeInfo({...cafeInfo, name: place.place_name})      

      const {address_name, id, phone, place_name, x, y} = place
      const {open24Hour, priceIceAmericano, enoughOutlets} = cafeInfo
      axios.post('http://18.221.57.226:8080/api/cafe', {
        cafeId: id,
        phone: phone, 
        cafeName: place_name, 
        address: address_name, 
        latitude: y, 
        longitude: x, 
        open24Hour: Number(open24Hour), 
        priceIceAmericano: Number(priceIceAmericano), 
        enoughOutlets: enoughOutlets, 
        // pioneer: 로그인 정보도 받아와야 함. 
      }).then(res => alert(res.message))
    }
  }


  const router = useRouter();
  // console.log('lat : ', router.query.lat);
  // console.log('lng : ', router.query.lng);

  return (
    <div>
      {showed ? <Modal showModal={showModal} cafeInfo={cafeInfo} setCafeInfo={setCafeInfo} /> : null}
      <div className="grid-container">
        <Subject> cafe & conquer </Subject>
        <div className="grid-map">
          <Map setList={changeList} confirmRegister={confirmRegister}  lati={router.query.lat} longi={router.query.lng}/>
        </div>
        <div className="grid-register">
          <RegisterList
            list={list}
            confirmRegister={confirmRegister}
            confirmEdit={confirmEdit}
            confirmDelete={confirmDelete}
          />
        </div>
      </div>
    </div>
  );
};

const Subject = styled.h2`
  font-size: 30px;
  color: #eccc68;
`;
// 왜 여기서 matching이 틀렸다는 문구가 뜨는지 잘 모르겠음.

export default Register;

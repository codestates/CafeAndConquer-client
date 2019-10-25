<<<<<<< HEAD
import { useState, useCallback } from 'react';
import { Map } from './map';
import RegisterList from './registerList';
import "../style.scss"
import "../map.scss"
import "../modal.scss"
import Modal from './modal'
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

  const confirmRegister = (place) => {
    if (confirm('등록하시겠습니까?')) {
      showModal(true);
      setCafeInfo({name: place.place_name, phone: place.phone, address: place.address_name})

      // 여기에 등록시키는 정보 전달하면서 API에 따라 등록. 
    }
  }
  const confirmDelete = (place) => {
    if (confirm('정복한 카페 정보를 삭제하시겠습니까? (해당카페의 정복자만 가능합니다)')) {
      // 일단 유저가 정복한 사람이 맞는지 확인 
      // 맞으면 삭제 처리 , 아니면 이 카페의 정복자가 아니므로 삭제할 수 없습니다. 
      // 삭제용 모달 필요?? 
      // 여기에 삭제시키는 정보 전달하면서 API에 따라 등록. 
    }
  }

  const confirmEdit = (place) => {
    if (confirm('정복한 카페 정보를 수정하시겠습니까?')) {
      // 수정용 모달은 등록용과 비슷하게 띄워야 할듯. 디폴트값 선택된 채로 ?  
      // 여기에 수정시키는 정보 전달하면서 API에 따라 등록. 
    }
  }

	return (
    <div>
      {showed? <Modal showModal={showModal} cafeInfo={cafeInfo}/>: null}
      <div className="grid-container">        
        <Subject> cafe & conquer </Subject>
        <div className="grid-map">
          <Map setList={changeList} confirmRegister={confirmRegister} />
        </div>
        <div className="grid-register">
          <RegisterList list={list} confirmRegister={confirmRegister} confirmEdit={confirmEdit} confirmDelete={confirmDelete}
        />
        </div>
      </div>
    </div>
	);
};

const Subject = styled.h2`
  font-size: 30px;
  color: #eccc68;
`
// 왜 여기서 matching이 틀렸다는 문구가 뜨는지 잘 모르겠음. 
=======
import Link from 'next/link';
import Header from '../components/Header';
import BasicInfo from '../components/BasicInfo';

const Index = () => (
  <div>
    <Header />
    <BasicInfo />
  </div>
);
>>>>>>> develop

export default Index;

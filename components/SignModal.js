import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const MyModal = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: auto;
`;


const modal = (props) => {
  // modal 공부
  // if 문으로 

 

  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };
  if (!props.show) {
    return null;
  }
  return (
    <MyModal>
      <Content>
        <h3>신규 회원가입</h3>
        <p>{props.children}</p>
        <a id="kakao-login-btn"></a>
        <a href="http://developers.kakao.com/logout"></a>
        <button
          onClick={(e) => {
            onClose(e);
          }}
        >
          Close
        </button>
      </Content>
    </MyModal>
  );
};

export default modal;

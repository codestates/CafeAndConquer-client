import React, { useEffect } from 'react';
import styled from 'styled-components';
const SIGN_API_KEY = require('../Secret').SIGN_API_KEY;

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

const SignModal = (props) => {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };
  if (!props.show) {
    return null;
  }

  useEffect(() => {
    Kakao.init(SIGN_API_KEY);
    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function(authObj) {
        alert(JSON.stringify(authObj));
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      },
    });
  }, []);

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

export default SignModal;

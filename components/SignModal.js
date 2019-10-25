import React, { useEffect } from 'react';
import styled from 'styled-components';
let alReadyCalled;


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
    alReadyCalled = true;
    console.log(alReadyCalled);
    props.onClose && props.onClose(e);
  };
  if (!props.show) {
    return null;
  }

  useEffect(() => {
    if (!alReadyCalled) {
      Kakao.init(process.env.KAKAO_LOGIN_KEY);
    }

    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function(authObj) {
        // a
        // let auth = JSON.stringify(authObj)
      
        alert(JSON.stringify(authObj));
        
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      },
    });
  }, []);

  const closeKakao = () => {
    setTimeout(onClose, 1000);
  };

  
  return (
    <MyModal>
      <Content>
        <h3>신규 회원가입</h3>
        <p>{props.children}</p>
        <a onClick={closeKakao} id="kakao-login-btn"></a>
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

import React from 'react';
import Link from 'next/link';
import HeaderLogin from '../components/HeaderLogin';
import styled from 'styled-components';

const MainFrame = styled.div`
  position: absolute;
  font-family: Monospace, Helvetica, sans-serif;
  top: 100px;
  left: 0px;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  overflow: scroll;
`;

const LoginSignup = styled.div`
  position: relative;
  top: 50px;
  width: 350px;
  height: 50px;
  font-size: 1.5rem;
  border-bottom: 1px solid gray;
  display: inline-block;
`;

const LoginInfo = styled.p`
  position: relative;
  top: 60px;
`;

const InputFrame = styled.div`
  position: relative;
  top: 80px;
  width: 350px;
  height: 300px;
  display: inline-block;
`;

const InputEmail = styled.input.attrs({ placeholder: '이메일을 입력해주세요' })`
  position: relative;
  height: 30px;
  width: 350px;
`;

const InputPassword = styled.input.attrs({
  placeholder: '비밀번호를 입력해주세요',
})`
  position: relative;
  top: 3px;
  height: 30px;
  width: 350px;
`;

const LoginBtn = styled.button`
  position: relative;
  top: 0px;
  height: 40px;
  width: 350px;
`;
const FaceLoginBtn = styled.button`
  position: relative;
  top: 10px;
  height: 40px;
  width: 350px;
`;

const LoginHandler = () => {
  console.log('LoginHandler is ok');
};

const FaceBookHandler = () => {
  console.log('FaceBook is ok');
};

const login = (props) => {
  return (
    <div>
      <HeaderLogin />
      <MainFrame>
        <LoginSignup>로그인 및 회원가입</LoginSignup>
        <LoginInfo>로그인을 통해 다양한 혜택을 누리세요.</LoginInfo>
        <InputFrame>
          <InputEmail />
          <InputPassword />
          <p style={{ position: 'relative', left: '90px' }}>비밀번호찾기</p>
          <LoginBtn onClick={() => LoginHandler()}>LOGIN</LoginBtn>
          <FaceLoginBtn onClick={() => FaceBookHandler()}>
            kakao 로그인
          </FaceLoginBtn>
        </InputFrame>
      </MainFrame>
    </div>
  );
};

export default login;
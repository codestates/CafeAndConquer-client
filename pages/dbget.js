import axios from 'axios';
import styled from 'styled-components';

const MainFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  display: block;
  overflow: hidden;
`;

const ButtonFrame = styled.div`
  position: absolute;
  top: 150px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 60%;
  height: 30%;
  font-size: x-large;
  background: #f00;
  margin: auto;
  text-align: center;
`;

const InnerP = styled.p`
  position: relative;
  top: 10px;
`;

const CurrentLocation = styled.a`
  position: relative;
  display: inline-block;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 100px;
  padding: 8px;
  margin: 0px 40px;
  color: #fff;
  border: 3px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  &hover :active {
    background-color: #fff;
    color: #000;
  }
`;

const RegisterCafe = styled.a`
  position: relative;
  display: inline-block;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 100px;
  padding: 8px;
  margin: 0px 40px;
  color: #fff;
  border: 3px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  &hover :active {
    background-color: #fff;
    color: #000;
  }
`;
const Index = (props) => {
  console.log(props.cafes);
  return (
    <MainFrame>
      <ButtonFrame>
        <CurrentLocation>
          <InnerP>안녕하세요</InnerP>
        </CurrentLocation>
        <RegisterCafe>
          <InnerP>반습니다</InnerP>
        </RegisterCafe>
      </ButtonFrame>
    </MainFrame>
  );
};

export default Index;

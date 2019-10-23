import React from 'react';
import styled from 'styled-components';

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
        <p>
          <button>카카오톡 회원가입</button>
        </p>
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

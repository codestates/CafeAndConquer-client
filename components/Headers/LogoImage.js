import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
const Logo = styled.a`
  position: relative;
  top: 18%;
  left: 3%;
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 3.4rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const BacktoHome = () => {
  console.log('BTH is Ok');
  setInterval(() => {
    console.log('a');
    Router.push('/');
  }, 100);
};

const LogoImage = () => {
  return (
    <Link href="/">
      <Logo onClick={BacktoHome}>C&C</Logo>
    </Link>
  );
};

export default LogoImage;

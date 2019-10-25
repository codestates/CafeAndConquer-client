import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const Logo = styled.a`
  position: relative;
  top: 18%;
  left: 3%;
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 3.4rem;
  text-decoration: none;
`;
const LogoImage = () => {
  return (
    <Link href="/">
      <Logo>C&C</Logo>
    </Link>
  );
};

export default LogoImage;

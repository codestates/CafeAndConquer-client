import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled.a`
  position: relative;
  top: 10px;
  left: 3%;
  font-family: Monospace, Helvetica, sans-serif;
  position: absolute;
  font-size: 3.4rem;
  text-decoration: none;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  &:hover {
    cursor: pointer;
  }
`;

const LogoImage = () => {
  return (
    <Link href="/">
      <Logo>C&C</Logo>
    </Link>
  );
};

export default LogoImage;

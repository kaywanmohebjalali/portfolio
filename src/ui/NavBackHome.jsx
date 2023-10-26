import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import styled from "styled-components"


const Back=styled.a`
  display: flex;
  align-items: center;
  color: var(--hover-color);
  font-size: 1.2rem;
  text-shadow: 0 0 10px rgba(18, 247, 255, 0.6),
  0 0 20px rgba(18, 247, 255, 0.6),
  0 0 30px rgba(18, 247, 255, 0.6),
  0 0 40px rgba(18, 247, 255, 0.6),
  0 0 70px rgba(18, 247, 255, 0.6),
  0 0 80px rgba(18, 247, 255, 0.6),
  0 0 100px rgba(18, 247, 255, 0.6),
  0 0 150px rgba(18, 247, 255, 0.6);
`
const Logo =styled.h1`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
`

const SpanStyle=styled.span`
color: var(--hover-color);
`

const Nav=styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

const NavBackHome = () => {
  return (
    <Nav>
    <Logo><SpanStyle>k</SpanStyle>aywan.</Logo>
    <Back href="/home">
    <HiOutlineArrowNarrowLeft/>
    <span>Home</span>
     </Back>
    </Nav>
  )
}

export default NavBackHome
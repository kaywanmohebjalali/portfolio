import styled from "styled-components";
import { HiMenu, HiX } from "react-icons/hi";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useGetContext} from "../context/modeAndMenuProvider";
import { ShowAnimate } from "../style/ShowAnimate";
import DarkModeToggle from "./DarkModeToggle";
const StyleHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10005;
  background-color: var(--color-bg);
  border-bottom: 2px solid var(--color-bg);
`;
const Logo = styled.h1`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 2;
`;

const SpanStyle = styled.span`
  color: var(--hover-color);
`;
const HiMenuStyle = styled(HiMenu)`
  background-color: var(--hover-color);
  font-size: 1.8rem;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  z-index: 2000;
  transition: 0.5s;
  color: var(--second-bg-color);
  @media screen and (min-width: 761px) {
    display: none;
  }
`;

const HixStyle = styled(HiX)`
  background-color: var(--hover-color);
  font-size: 1.8rem;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  z-index: 2000;
  transition: 0.5s;
  color: var(--second-bg-color);
  @media screen and (min-width: 761px) {
    display: none;
  }
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;
let elementHeader = "";

const Header = () => {
  const { showNavbar, setShowNavbar } = useGetContext();

  function handleScroll() {
    if (window.scrollY > 0) {
      elementHeader.classList.add("sticky");
    } else {
      elementHeader.classList.remove("sticky");
    }
  }

  useEffect(() => {
    elementHeader = document.querySelector("header");
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleClickMenu() {
    setShowNavbar((show) => !show);
    setTimeout(() => {
      const icon = document.querySelector(".menuBar");
      icon.style.transform = `rotate(${showNavbar ? 180 : -180}deg)`;
    }, 1);
  }

  return (
    <StyleHeader>
      <ShowAnimate  direction='left' speed="3.2" name="header"></ShowAnimate>
      <LeftHeader>
        <DarkModeToggle />
        <Logo>
          <SpanStyle>k</SpanStyle>aywan
        </Logo>
      </LeftHeader>
      <Navbar />

      {showNavbar ? (
        <HixStyle className="menuBar" onClick={handleClickMenu} />
      ) : (
        <HiMenuStyle className="menuBar" onClick={handleClickMenu} />
      )}
    </StyleHeader>
  );
};

export default Header;

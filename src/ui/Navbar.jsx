import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetContext } from "../context/modeAndMenuProvider";

const UlStyle = styled.ul`
  display: flex;
  gap: 30px;

  @media screen and (min-width: 640px) {
    font-size: 1.1rem;
    gap: 20px;
  }
  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
    gap: 28px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.3rem;
    gap: 45px;
  }
  @media screen and (max-width: 760px) {
    position: absolute;


    left: 0;
    right: 0;
    top: -500px;
    padding-bottom: 3rem;
    flex-direction: column;
    width: 100%;
    text-align: center;
    background-color: var(--color-bg);
    transition: all 0.5s ease;
    border-bottom: 3px solid var(--navbar-bottom-color);

    top: ${(prop) => (prop?.open ? "100%" : "-500px")};
  }
`;

const StyleLink = styled.a`
  font-weight: 700;
  &:hover {
    color: var(--hover-color);
    text-shadow: var(--text-header-shadow);
  }
`;

const Nav = styled.nav`

`;

const Li = styled.li`
  color: ${(prop) => prop?.color};
`;

let elements = "";
let [HOME, ABOUT, SERVICES, SKILLS, PROJECTS, CONTACT] = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const Navbar = () => {
  const { showNavbar, setShowNavbar } = useGetContext();
  const [active, setActive] = useState("#home");

  function handlerClick(result) {
    const ulElement = document.querySelector("ul");
    if (window.innerWidth < 760) {
      !showNavbar ? (ulElement.style.marginTop = "-500px") : "";
    }
    setActive(result);
    setShowNavbar(false);
  }

  function handleScroll() {
    if (window.scrollY < HOME) setActive("#home");
    else if (window.scrollY > CONTACT - (window.innerWidth * 5) / 100)
      setActive("#contact");
    else if (window.scrollY > PROJECTS - (window.innerWidth * 5) / 100)
      setActive("#projects");
    else if (window.scrollY > SKILLS - (window.innerWidth * 5) / 100)
      setActive("#skills");
    else if (window.scrollY > SERVICES - (window.innerWidth * 5) / 100)
      setActive("#services");
    else if (window.scrollY > ABOUT - (window.innerWidth * 5) / 100)
      setActive("#about");
  }

  useEffect(() => {
    elements = document.querySelectorAll("section");
    CONTACT =
      elements[0].offsetHeight +
      elements[1].offsetHeight +
      elements[2].offsetHeight +
      elements[3].offsetHeight +
      elements[4].offsetHeight;
    PROJECTS =
      elements[0].offsetHeight +
      elements[1].offsetHeight +
      elements[2].offsetHeight +
      elements[3].offsetHeight;
    SKILLS =
      elements[0].offsetHeight +
      elements[1].offsetHeight +
      elements[2].offsetHeight;
    SERVICES = elements[0].offsetHeight + elements[1].offsetHeight;
    ABOUT = elements[0].offsetHeight;
    HOME = elements[0].offsetHeight;
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      setShowNavbar(false);
      const ulElement = document.querySelector("ul");
      if (window.innerWidth < 760) {
        ulElement.style.opacity = "0";
        setTimeout(() => {
          ulElement.style.opacity = "1";
        }, 700);
      } else {
        setShowNavbar(false);
      }
    });
  }, []);

  return (
    <Nav open={showNavbar}>

      <UlStyle open={showNavbar}>
        <Li
          onClick={() => handlerClick("#home")}
          color={active == "#home" ? "var(--hover-color)" : "var(--text-color)"}
        >
          <StyleLink href="#home">Home</StyleLink>
        </Li>
        <Li
          onClick={() => handlerClick("#about")}
          color={
            active == "#about" ? "var(--hover-color)" : "var(--text-color)"
          }
        >
          <StyleLink href="#about">About</StyleLink>
        </Li>
        <Li
          onClick={() => handlerClick("#services")}
          color={
            active == "#services" ? "var(--hover-color)" : "var(--text-color)"
          }
        >
          <StyleLink href="#services">Services</StyleLink>
        </Li>
        <Li
          onClick={() => handlerClick("#skills")}
          color={
            active == "#skills" ? "var(--hover-color)" : "var(--text-color)"
          }
        >
          <StyleLink href="#skills">Skills</StyleLink>
        </Li>
        <Li
          onClick={() => handlerClick("#projects")}
          color={
            active == "#projects" ? "var(--hover-color)" : "var(--text-color)"
          }
        >
          <StyleLink href="#projects">Projects</StyleLink>
        </Li>
        <Li
          onClick={() => handlerClick("#contact")}
          color={
            active == "#contact" ? "var(--hover-color)" : "var(--text-color)"
          }
        >
          <StyleLink href="#contact">Contact</StyleLink>
        </Li>
      </UlStyle>
    </Nav>
  );
};

export default Navbar;

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import styled from "styled-components";
import { useGetContext } from "../context/modeAndMenuProvider";

const Icon = styled.button`
  background: none;
  border: none;
  padding:0  0.1rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  transform: translate(-50%, 4px);
  z-index: 2000;
  cursor: pointer;



  &:hover {
    color: var(--hover-color);
  }
`;

const DarkModeToggle = () => {
  const { isDarkMode, darkModeToggle } =useGetContext();
  return (
    <Icon onClick={darkModeToggle}>
      
      {isDarkMode ? (
        <HiOutlineSun size="1.7rem" />
      ) : (
        <HiOutlineMoon size="1.7rem" />
      )}
    </Icon>
  );
};

export default DarkModeToggle;

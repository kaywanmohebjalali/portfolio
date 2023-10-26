import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  font-size: 1rem;
  padding: 0.8rem 0;
  background-color: var(--hover-color);
  border-radius: 5px;
  color: var(--second-bg-color);
 
  font-weight: 700;
  transition: 0.6s;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  border: none;
  box-shadow: var(--neon-box-shadow);
  overflow: hidden;

  cursor: pointer;
  &:hover {
    color: var(--text-color-button);
  }

  &::before {
    content: "";
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    background-color: var(--third-bg-color);
    color: var(--hover-color);
    top: 0;
    left: 0;
    transition: 0.6s;
    border-radius: 5px;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
  }

  @media screen and (max-width:420px){
  &{
      width: 120px;
  }
  
}
`;



export default Button
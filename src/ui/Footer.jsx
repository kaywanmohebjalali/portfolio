import { ImArrowUp2 } from "react-icons/im";
import styled from "styled-components";


const Section = styled.section`
  
  position: absolute;
  left: 0;
background-color: var(--third-bg-color);

  width: 100%;
  color: #fff;


  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;
  gap: 1rem;
`;

const P=styled.p` 
font-size: 1rem;
font-weight: 600;
`



const Icon=styled(ImArrowUp2)`
 color: var(--color-bg);
 transition: 0.5s;

`


const IconParent=styled.a`

 background-color: var(--hover-color);
 padding: 0.5rem 0.7rem;
 border-radius: 5px;
 display: flex;
 align-items: center;
 justify-content: center;
 box-shadow: var(--neon-box-shadow);
 transition: 0.6s;
 &:hover ${Icon}{
    transform: translateY(-4px);

 }
`

const Footer = () => {
  return (
    <Section>
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, consequuntur?</P>
        <IconParent href="#home"><Icon size='1.2rem'/></IconParent>
    </Section>
  )
}

export default Footer
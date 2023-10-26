import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DataProjects } from "../data/projects";
import { useState } from "react";
import Aos from "aos"
import { ShowAnimate } from "../style/ShowAnimate";
const Section = styled.section`

  padding-top: 200px;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  color: var(--text-color-button);
`;

const Title = styled.div`
  text-align: center;
`;
const Span = styled.span`
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-color);
`;
const H2 = styled.h2`
  margin: 1rem 0 2rem 0;

  font-size: var(--big-font);
  font-weight: 600;
  color: var(--hover-color);
`;

const Container = styled.div``;
const FilterButtons = styled.div`
  margin: 2rem 0;
  text-align: center;
  position: relative;
`;
const Button = styled.button`
  background-color: var(--color-bg);
  border: none;
  margin-left: 1rem;
  font-weight: 600;
  transition: 0.5s;
  letter-spacing: 0.4px;
  color: ${prop=>prop.color};

  &:hover {
    color: var(--hover-color);
  }
`;

const Portfolio = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 380px));
  grid-auto-rows: 270px;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:550px) {
    grid-template-columns: minmax(270px, 90%);

  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 2px solid var(--hover-color);
  box-shadow: var(--neon-box-shadow);
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:hover ${ImgContainer} {
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  transition: 0.5s;
`;

const Content = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.8s;
  opacity: 0;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1.5em;
  background: linear-gradient(rgba(0, 0, 0, 0.2) 10%, var(--hover-color));
  display: flex;
  &:hover {
    opacity: 1;
  }
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;
const P = styled.p`
  font-size: 1rem;
  margin: 5px 0 15px 0;
`;
const Link = styled.a`
  width: 50px;
  height: 50px;
  background-color:  #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--hover-color);
  outline: 2px solid  var(--text-color);
`;
const Projects = () => {
  const [state, setState] = useState("all");
  Aos.init();
  let filterData;
  if (state === "all") filterData = DataProjects;
  else if (state === state)
    filterData = DataProjects.filter((item) => item.group == state);

    
  return (
    <Section id="projects"  >
      <Title className=""
       data-aos="zoom-in"
       data-aos-delay="50"
       data-aos-duration="2000"
      >
        <Span>what i will do for you</Span>
        <H2>Latest Project</H2>
      </Title>

      <Container>
        <FilterButtons>
        <ShowAnimate direction='center'  speed='2.5' name='filterButtons'></ShowAnimate>
          <Button 
          
          color={state=='all'?'var(--hover-color)':' var(--text-color)'}
           onClick={()=>{
            setState('null')
            setTimeout(() => {
                setState('all')
            }, 1);
          }}>All</Button>
           <Button
           
           color={state=='frontend'?'var(--hover-color)':' var(--text-color)'} 
          onClick={()=>{
            setState('null')
            setTimeout(() => {
                setState('frontend')
            }, 1);
          }}>Frontend</Button>
           <Button
           
           color={state=='backend'?'var(--hover-color)':' var(--text-color)'} 
          onClick={()=>{
            setState('null')
            setTimeout(() => {
                setState('backend')
            }, 1);
          }}>Backend</Button>
          <Button
           
          color={state=='ai'?'var(--hover-color)':' var(--text-color)'}
          onClick={()=>{
            setState('null')
            setTimeout(() => {
                setState('ai')
            }, 1);
          }}>AI</Button>
          <Button
          
          color={state=='security'?'var(--hover-color)':' var(--text-color)'}
          onClick={()=>{
            setState('null')
            setTimeout(() => {
                setState('security')
            }, 1);
          }}>Cyber security</Button>
        </FilterButtons>

        <Portfolio>
          {filterData &&
            filterData.map((item) => (
              <Box  key={item.id} data-aos="zoom-in-up" data-aos-duration='800' 
              data-aos-delay="100">
                <ImgContainer>
                  
                  <Img src={`ImgProjects/${item?.src}`}/>
                </ImgContainer>
                <Content>
                  <H3>{item?.title}</H3>
                  <P>{item?.description}</P>
                  <Link href={item?.href}  target="_blank">
                    <FaExternalLinkAlt size="1.1rem" color="#3b3737" />
                  </Link>
                </Content>
              </Box>
            ))}
        </Portfolio>
      </Container>
    </Section>
  );
};

export default Projects;

import styled from "styled-components";

import { HiOutlineCode } from "react-icons/hi";
import { FaSearchDollar, FaUserShield } from "react-icons/fa";
import Button from "../style/Button";
const Section = styled.section`

  padding: 120px 0;

  min-height: 100vh;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const Span=styled.span`


letter-spacing: 2px;
text-transform: uppercase;
`
const H2=styled.h2`
color: var(--hover-color);
font-size: var(--normal-font);
font-weight: 800;
margin: 0.5rem 0;

`

const Carts=styled.div`
width: 100%;
margin-top: 3rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
grid-auto-rows:400px;
gap: 2rem;
justify-content: center;
color: #fff;
@media screen and (max-width:768px){
  grid-template-columns: repeat(auto-fit, minmax(300px,450px));
}

`


const Cart=styled.div`

display: flex;
flex-direction: column;

align-items: center;
background-color: var(--third-bg-color);;
padding: 1rem 0.8rem;
border-radius: 10px;
gap: 0.8rem;


transition: 0.6s!important;
&:hover{
  transform: translateY(-20px)!important;
}


`


const H3=styled.h3`
  font-weight: 700;
font-size: 1.5rem;

`
const Icon=styled.div`

width: 55px;
height: 55px; 
color: var(--hover-color);

display: flex;
justify-content: center;
align-items: center;
background-color: var(--color-bg);
border-radius: 100%;
border: 3px solid var(--hover-color);

outline: 2px solid var(--color-bg);
box-shadow: var(--neon-box-shadow);

`
const Description=styled.p`

font-size: 1.1rem;
  margin: 0.5rem 0;
`

const Services = () => {


  return (
    <Section id="services">
      <div className=""
       data-aos="zoom-in"
       data-aos-delay="50"
       data-aos-duration="2000"
      >
        <Span>what i will do for you</Span>
        <H2>Our Services</H2>
      </div>

      <Carts >

        <Cart
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          <Icon><HiOutlineCode size='35px'/></Icon>
          <H3>Frontend Development</H3>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
            incidunt, sed ut laudantium labore soluta, esse nesciunt fuga,
            doloribus consequuntur mollitia voluptates quam nam molestiae
            excepturi beatae architecto molestias!
          </Description>
          <div className="">
            <Button>Read more!</Button>
          </div>
        </Cart>


        <Cart
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="2000"
        >
          <Icon><FaSearchDollar size='30px' /></Icon>
          <H3>SEO Site</H3>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
            incidunt, sed ut laudantium labore soluta, esse nesciunt fuga,
            doloribus consequuntur mollitia voluptates quam nam molestiae
            excepturi beatae architecto molestias!
          </Description>
          <div className="">
            <Button>Read more!</Button>
          </div>
        </Cart>


        <Cart
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="2000"
        >
          <Icon><FaUserShield size='30px'/></Icon>
          <H3>Site Security</H3>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
            incidunt, sed ut laudantium labore soluta, esse nesciunt fuga,
            doloribus consequuntur mollitia voluptates quam nam molestiae
            excepturi beatae architecto molestias!
          </Description>
          <div className="">
            <Button>Read more!</Button>
          </div>
        </Cart>

      </Carts>
    </Section>
  );
};

export default Services;

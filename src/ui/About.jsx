import styled from "styled-components";
import Button from "../style/Button";

const Section = styled.section`

  padding-top: 100px ;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: relative;
  
  @media screen and (min-width:900px) {
    
    
    display: flex;

    /* align-items: center; */

    /* margin-top: -150px; */
  }
`;
const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  padding: 4rem 0;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: var(--h2-font);
  }
`;

const Span = styled.span`
  color: var(--hover-color);
`;

const ImgContainer = styled.div`
  width: 30%;
  margin: auto;

  position: relative;
  transform: translateX(6%);

  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width:900px) {
    width: 50%
    
  }
  `

const BoxImg = styled.span`
  display: inline-flex;
  width: 100%;
  height: 110%;
  position: absolute;
  top: -5%;
  left: -5%;

  border-radius: 100%;
  border-bottom: 3px solid var(--hover-color);
  border-top: 3px solid var(--hover-color);
  border-right: 2px solid var(--color-bg);
  border-left: 2px solid var(--color-bg);
  transition: 0.6s;

  animation: cir 7s linear infinite;

  @keyframes cir {
    to {
      transform: rotate(0);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
const Img = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 100%;
  border: 2px solid var(--hover-color);
`;

const Self = styled.div`
  text-align: center;

  margin-top: 2rem;

  @media screen and (min-width:900px) {
    margin-top: 8rem;

    font-size: 1.2rem;
    
  }
`;

const P = styled.p`
  font-size: 0.7rem;
  margin-top: 5rem;
`;
const H2 = styled.h2`
  color: var(--hover-color);
  font-size: 1.5rem;

  font-weight: 700;
  margin: 0.5rem 0;
`;
const H3 = styled.h3`
  font-weight: 700;
`;
const Description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.8rem;

  font-weight: 500;
`;

const InfoExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: var(--third-bg-color);
  font-size: 0.9rem;
  color: #fff;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 69% 31% 66% 34% / 21% 30% 70% 79%;
  box-shadow: var(--neon-box-shadow);
  border: 2px solid var(--hover-color);
  outline: 2px solid var(--color-bg);
  left: 60px;
  bottom: 50%;

  z-index: 100;
  animation: morph 6s linear infinite;

  @keyframes morph {
    0% {
      border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }
    30% {
      border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }

    60% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    }

    80% {
      border-radius: 69% 31% 66% 34% / 21% 30% 70% 79%;
    }

    100% {
      border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }
  }

  @media screen and (max-width: 768px) {
  left:40px;
  bottom: 46%;
  
transform: translateY(50px);
  }

  @media screen and (min-width:900px) {
    
    bottom: 20%;
  }
`;

const InfoProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color:  var(--third-bg-color);
  font-size: 0.9rem;
  position: absolute;
  width: 100px;
  height: 100px;
  color: #fff;
  border-radius: 69% 31% 66% 34% / 21% 30% 70% 79%;
  box-shadow: var(--neon-box-shadow);
  border: 2px solid var(--hover-color);
  outline: 2px solid var(--color-bg);
  top: 200px;
  
  z-index: 100;
  animation: morph 6s linear infinite;
  @keyframes morph {
    0% {
      border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }
    30% {
      border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }

    60% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    }

    80% {
      border-radius: 69% 31% 66% 34% / 21% 30% 70% 79%;
    }

    100% {
      border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }
  }

  @media screen and (max-width: 768px) {
  top: 230px;
  transform: translateY(100px);
  }

  @media screen and (min-width:900px) {
    top: 50%;
    
  }
`;
const Count=styled.span`
 color: var(--text-color-about);
 font-size: 1.2rem;
 font-weight: 700;
`

const About = () => {
  return (
    <Section id="about">

      <div className=""
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="2000"
      >

      <H1>
        About <Span>Me</Span>
      </H1>
      <ImgContainer>
        <Img src="/p3.jpg" />
        <BoxImg></BoxImg>
      </ImgContainer>

      <InfoExperience>
        <Count>1+</Count>
        <p>Years of Experience</p>
      </InfoExperience>

      <InfoProject>
        <Count>6+</Count>
        <p>Project Complete</p>
      </InfoProject>

      </div>
      <Self 
       data-aos="zoom-in"
       data-aos-delay="50"
       data-aos-duration="2000">
        <P>LET ME INTRODUCE MYSELF</P>
        <H2>About Me</H2>
        <H3>Frontend Developer!</H3>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          consequuntur alias dicta soluta animi sit, non veniam enim inventore
          nulla voluptas adipisci! Earum, distinctio tenetur? Illum beatae omnis
          iste ducimus! Cupiditate eum facilis, quasi fuga tenetur suscipit
          dolor magnam iste.
        </Description>
        <Button href="/myself">Read More!</Button>
      </Self>
    </Section>
  );
};

export default About;

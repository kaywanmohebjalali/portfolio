/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Typed from "typed.js";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Button from "../style/Button";
import { ShowAnimate } from "../style/ShowAnimate";

const Section = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 100px 0;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  @media screen and (max-width: 768px) {
    bottom: -180px;
  }
`;

const Img = styled.img`
  width: 60%;
  border-radius: 100%;
  margin-right: auto;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    margin-top: 6rem;
  }
`;

const ImgBox = styled.div`

  position: relative;


  display: flex;
  align-items: center;

  height: 100vh;
  @media screen and (max-width: 768px) {
    height: auto;
    margin-top: 200px;
  }

  @media screen and (max-width: 390px) {
    margin-top: 150px;
  }
`;

const Shape = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 50%;
  z-index: -1;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 100px;
    width: 70%;

    right: 100px;
  }

  @media screen and (max-width: 533px) {


    right: 60px;
  }
`;

const ShapeBlur = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 50%;
  z-index: -1;
  width: 100%;
  height: 100%;

  filter: blur(30px);

  @media screen and (max-width: 768px) {
    margin-top: 100px;
    width: 70%;
    right: 100px;
  }

  @media screen and (max-width: 533px) {
    right: 60px;
  }
`;

const Left = styled.div`
  max-width: 600px;
`;
const Fullname = styled.h1`
  font-size: var(--big-font);
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
`;
const H1 = styled.h1`
  font-size: var(--normal-font);
  font-weight: 700;
  margin: 0.5rem 0;
  display: inline;
  position: relative;
  z-index: 2000;
`;

const H3 = styled.h3`
  display: inline-block;
  color: var(--hover-color);
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-flex;
  margin: 0;
  margin-left: 4px;

  position: absolute;
  transform: translateY(6px);
`;

const P = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  line-height: 1.5;
  position: relative;
  z-index: 2000;
`;

const H5 = styled.h5`
  font-weight: 700;
`;

const ParentEmail = styled.h5`
  position: relative;
  z-index: 2000;
`;

const Email = styled.h5`
  color: var(--hover-color);
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
`;

const Icons = styled.div`
  z-index: 2000;
  width: 220px;
  height: 40px;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin-top: 8rem;
  @media screen and (max-width: 768px) {
    margin-top: 0rem;
  }
`;

const Icon = styled.a`
  width: 45px;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid var(--hover-color);
  box-shadow: var(--neon-box-shadow);
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 0.6s;
  &:hover {
    color: var(--second-bg-color);
  }

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    z-index: -1;
    background-color: var(--hover-color);
    transition: 0.6s;
  }

  &:hover::before {
    width: 100%;
  }
`;

const FooterHome = styled.div`
  position: relative;
  z-index: 2000;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 390px) {
    flex-direction: column;

    align-items: start;
    gap: 2rem;
    /* padding-bottom: 100px; */
  }
`;

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer"
      ],

      typeSpeed: 40,
      loop: true,
      backDelay: 2000,

      startDelay: 200,
      backSpeed: 20,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Section id="home">
      <Left>
        <Fullname>
          Hi! I'm kaywan mohebjalali
          <ShowAnimate direction="left" speed="2.5" name="Fullname"></ShowAnimate>
        </Fullname>

        <H1>
          and I'm
          <ShowAnimate direction="left" speed="2" name="h1"></ShowAnimate>
        </H1>
        <H3 ref={el}></H3>

        <P>
          My work is front-end development and artificial intelligence, and I
          specialize in cyber security, and I have been working in this position
          for 2 years.
          <ShowAnimate direction="left" speed="2.5" name="p"></ShowAnimate>
        </P>

        <div>
          <ParentEmail>
            <H5>Email:</H5>
            <Email>mohebjalali5282@gmail.com</Email>
            <ShowAnimate direction="left" speed="2.5" name="Email"></ShowAnimate>
          </ParentEmail>
          <FooterHome>
            <Button href="">Download Cv</Button>
            <ShowAnimate
              bottom="-10"
              left="-20"
              top="-10"
              direction="left"
              speed="2.5"
              name="FooterHome"
            ></ShowAnimate>

            <Icons>
              <Icon href="">
                <FaGithub size="1.3rem" />
              </Icon>
              <Icon href="">
                <FaInstagram size="1.3rem" />
              </Icon>
              <Icon href="">
                <FaLinkedinIn size="1.3rem" />
              </Icon>
            </Icons>
          </FooterHome>
        </div>
      </Left>
      <ImgBox data-aos="zoom-in" data-aos-delay="0" data-aos-duration="3000">
        <ImgContainer>
          <Img src="/p4.png" alt="" />
        </ImgContainer>

        <Shape>
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path id="blob" fill="var(--hover-color)">
              <animate
                attributeName="d"
                dur="40000ms"
                repeatCount="indefinite"
                values="
             M360,278.5Q349,307,346.5,360Q344,413,297,384Q250,355,197,394Q144,433,113.5,389.5Q83,346,115,298Q147,250,94.5,190Q42,130,90.5,94.5Q139,59,194.5,35.5Q250,12,305.5,34.5Q361,57,383,109Q405,161,388,205.5Q371,250,360,278.5Z;
             M440.5,312Q465,374,401.5,388Q338,402,294,394Q250,386,205,396Q160,406,129,372Q98,338,79,294Q60,250,86,210Q112,170,144.5,147Q177,124,213.5,122.5Q250,121,291,115Q332,109,380.5,128Q429,147,422.5,198.5Q416,250,440.5,312Z;
             M420.5,287Q377,324,354,357.5Q331,391,290.5,373.5Q250,356,219,356.5Q188,357,114.5,364Q41,371,75,310.5Q109,250,95.5,201.5Q82,153,105,96Q128,39,189,54.5Q250,70,290,91Q330,112,384,127Q438,142,451,196Q464,250,420.5,287Z;
              M377,287.5Q379,325,341,333Q303,341,276.5,378.5Q250,416,201.5,417Q153,418,105,390Q57,362,36.5,306Q16,250,77.5,218Q139,186,136.5,117Q134,48,192,33.5Q250,19,287,70Q324,121,355,146Q386,171,380.5,210.5Q375,250,377,287.5Z;
              M421.5,283Q364,316,333.5,329Q303,342,276.5,360.5Q250,379,222.5,362.5Q195,346,120.5,357Q46,368,83.5,309Q121,250,133,219.5Q145,189,167.5,167.5Q190,146,220,113.5Q250,81,305,70Q360,59,374,114.5Q388,170,433.5,210Q479,250,421.5,283Z;
              M413,312.5Q466,375,394,375Q322,375,286,400.5Q250,426,191.5,439.5Q133,453,94.5,407.5Q56,362,99.5,306Q143,250,141.5,218Q140,186,152,143Q164,100,207,101Q250,102,298.5,92Q347,82,382.5,117.5Q418,153,389,201.5Q360,250,413,312.5Z;
              M404,306.5Q446,363,388.5,376.5Q331,390,290.5,407Q250,424,205.5,414.5Q161,405,155,356.5Q149,308,131.5,279Q114,250,78.5,190Q43,130,95,101Q147,72,198.5,75Q250,78,303,72.5Q356,67,352.5,130Q349,193,355.5,221.5Q362,250,404,306.5Z;
              M422,298Q417,346,392,399Q367,452,308.5,414Q250,376,199.5,400.5Q149,425,103,393.5Q57,362,80.5,306Q104,250,127.5,221.5Q151,193,138.5,113.5Q126,34,188,70.5Q250,107,305.5,82.5Q361,58,413,92Q465,126,446,188Q427,250,422,298Z;
              M465,308.5Q453,367,378,354.5Q303,342,276.5,395.5Q250,449,221,400Q192,351,172,329Q152,307,139,278.5Q126,250,110,205Q94,160,110.5,98.5Q127,37,188.5,42Q250,47,280.5,95.5Q311,144,385.5,136.5Q460,129,468.5,189.5Q477,250,465,308.5Z;
              M423,291.5Q394,333,384,399Q374,465,312,437.5Q250,410,223.5,375.5Q197,341,162,331Q127,321,114.5,285.5Q102,250,71.5,189.5Q41,129,101,112.5Q161,96,205.5,103.5Q250,111,292.5,107Q335,103,339.5,149.5Q344,196,398,223Q452,250,423,291.5Z;
              M401.86639,276.90775Q343.68189,303.8155,352.80277,373.33776Q361.92365,442.86003,305.96183,406.80595Q250,370.75187,202.86957,392.10498Q155.73915,413.45808,145.39502,364.71313Q135.0509,315.96819,124.06044,282.98409Q113.06998,250,74.01591,187.99046Q34.96183,125.98091,97.98091,110.48728Q161,94.99364,205.5,94.94592Q250,94.8982,291.49364,100.45865Q332.98728,106.01909,347.5509,145.47455Q362.11452,184.93002,411.08271,217.46501Q460.0509,250,401.86639,276.90775Z;
              M422.5,306.5Q446,363,402,400.5Q358,438,304,434Q250,430,189,446Q128,462,98,408.5Q68,355,108,302.5Q148,250,110.5,199Q73,148,135,153Q197,158,223.5,149.5Q250,141,305.5,99Q361,57,371.5,115.5Q382,174,390.5,212Q399,250,422.5,306.5Z;
              M471,311.5Q462,373,388.5,368Q315,363,282.5,424Q250,485,217.5,423.5Q185,362,116.5,364.5Q48,367,63.5,308.5Q79,250,66,193Q53,136,96,97Q139,58,194.5,41Q250,24,305,42Q360,60,384.5,109Q409,158,444.5,204Q480,250,471,311.5Z;
              M471,311.5Q462,373,388.5,368Q315,363,282.5,424Q250,485,217.5,423.5Q185,362,116.5,364.5Q48,367,63.5,308.5Q79,250,66,193Q53,136,96,97Q139,58,194.5,41Q250,24,305,42Q360,60,384.5,109Q409,158,444.5,204Q480,250,471,311.5Z;
              M402.79317,287.75381Q380.88835,325.50763,369.81727,381.52115Q358.74619,437.53467,304.37309,443.3913Q250,449.24792,221.61633,398.91245Q193.23266,348.57698,134.4154,349.90482Q75.59813,351.23266,97.87777,300.61633Q120.15742,250,86.59518,192.92892Q53.03294,135.85784,122.1328,141.62985Q191.23266,147.40187,220.61633,118.58755Q250,89.77323,291.56345,97.77029Q333.12691,105.76734,343.57403,147.87309Q354.02115,189.97885,389.35957,219.98942Q424.69799,250,402.79317,287.75381Z;
              M399,305.5Q442,361,380,364Q318,367,284,407.5Q250,448,201.5,433Q153,418,140,369.5Q127,321,68,285.5Q9,250,32.5,194Q56,138,114.5,127.5Q173,117,211.5,86Q250,55,298,69Q346,83,380,119Q414,155,385,202.5Q356,250,399,305.5Z;
              "
              ></animate>
            </path>
          </svg>
        </Shape>

        <ShapeBlur>
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path id="blob" fill="var(--hover-color)">
              <animate
                attributeName="d"
                dur="40000ms"
                repeatCount="indefinite"
                values="
             M360,278.5Q349,307,346.5,360Q344,413,297,384Q250,355,197,394Q144,433,113.5,389.5Q83,346,115,298Q147,250,94.5,190Q42,130,90.5,94.5Q139,59,194.5,35.5Q250,12,305.5,34.5Q361,57,383,109Q405,161,388,205.5Q371,250,360,278.5Z;
             M440.5,312Q465,374,401.5,388Q338,402,294,394Q250,386,205,396Q160,406,129,372Q98,338,79,294Q60,250,86,210Q112,170,144.5,147Q177,124,213.5,122.5Q250,121,291,115Q332,109,380.5,128Q429,147,422.5,198.5Q416,250,440.5,312Z;
             M420.5,287Q377,324,354,357.5Q331,391,290.5,373.5Q250,356,219,356.5Q188,357,114.5,364Q41,371,75,310.5Q109,250,95.5,201.5Q82,153,105,96Q128,39,189,54.5Q250,70,290,91Q330,112,384,127Q438,142,451,196Q464,250,420.5,287Z;
              M377,287.5Q379,325,341,333Q303,341,276.5,378.5Q250,416,201.5,417Q153,418,105,390Q57,362,36.5,306Q16,250,77.5,218Q139,186,136.5,117Q134,48,192,33.5Q250,19,287,70Q324,121,355,146Q386,171,380.5,210.5Q375,250,377,287.5Z;
              M421.5,283Q364,316,333.5,329Q303,342,276.5,360.5Q250,379,222.5,362.5Q195,346,120.5,357Q46,368,83.5,309Q121,250,133,219.5Q145,189,167.5,167.5Q190,146,220,113.5Q250,81,305,70Q360,59,374,114.5Q388,170,433.5,210Q479,250,421.5,283Z;
              M413,312.5Q466,375,394,375Q322,375,286,400.5Q250,426,191.5,439.5Q133,453,94.5,407.5Q56,362,99.5,306Q143,250,141.5,218Q140,186,152,143Q164,100,207,101Q250,102,298.5,92Q347,82,382.5,117.5Q418,153,389,201.5Q360,250,413,312.5Z;
              M404,306.5Q446,363,388.5,376.5Q331,390,290.5,407Q250,424,205.5,414.5Q161,405,155,356.5Q149,308,131.5,279Q114,250,78.5,190Q43,130,95,101Q147,72,198.5,75Q250,78,303,72.5Q356,67,352.5,130Q349,193,355.5,221.5Q362,250,404,306.5Z;
              M422,298Q417,346,392,399Q367,452,308.5,414Q250,376,199.5,400.5Q149,425,103,393.5Q57,362,80.5,306Q104,250,127.5,221.5Q151,193,138.5,113.5Q126,34,188,70.5Q250,107,305.5,82.5Q361,58,413,92Q465,126,446,188Q427,250,422,298Z;
              M465,308.5Q453,367,378,354.5Q303,342,276.5,395.5Q250,449,221,400Q192,351,172,329Q152,307,139,278.5Q126,250,110,205Q94,160,110.5,98.5Q127,37,188.5,42Q250,47,280.5,95.5Q311,144,385.5,136.5Q460,129,468.5,189.5Q477,250,465,308.5Z;
              M423,291.5Q394,333,384,399Q374,465,312,437.5Q250,410,223.5,375.5Q197,341,162,331Q127,321,114.5,285.5Q102,250,71.5,189.5Q41,129,101,112.5Q161,96,205.5,103.5Q250,111,292.5,107Q335,103,339.5,149.5Q344,196,398,223Q452,250,423,291.5Z;
              M401.86639,276.90775Q343.68189,303.8155,352.80277,373.33776Q361.92365,442.86003,305.96183,406.80595Q250,370.75187,202.86957,392.10498Q155.73915,413.45808,145.39502,364.71313Q135.0509,315.96819,124.06044,282.98409Q113.06998,250,74.01591,187.99046Q34.96183,125.98091,97.98091,110.48728Q161,94.99364,205.5,94.94592Q250,94.8982,291.49364,100.45865Q332.98728,106.01909,347.5509,145.47455Q362.11452,184.93002,411.08271,217.46501Q460.0509,250,401.86639,276.90775Z;
              M422.5,306.5Q446,363,402,400.5Q358,438,304,434Q250,430,189,446Q128,462,98,408.5Q68,355,108,302.5Q148,250,110.5,199Q73,148,135,153Q197,158,223.5,149.5Q250,141,305.5,99Q361,57,371.5,115.5Q382,174,390.5,212Q399,250,422.5,306.5Z;
              M471,311.5Q462,373,388.5,368Q315,363,282.5,424Q250,485,217.5,423.5Q185,362,116.5,364.5Q48,367,63.5,308.5Q79,250,66,193Q53,136,96,97Q139,58,194.5,41Q250,24,305,42Q360,60,384.5,109Q409,158,444.5,204Q480,250,471,311.5Z;
              M471,311.5Q462,373,388.5,368Q315,363,282.5,424Q250,485,217.5,423.5Q185,362,116.5,364.5Q48,367,63.5,308.5Q79,250,66,193Q53,136,96,97Q139,58,194.5,41Q250,24,305,42Q360,60,384.5,109Q409,158,444.5,204Q480,250,471,311.5Z;
              M402.79317,287.75381Q380.88835,325.50763,369.81727,381.52115Q358.74619,437.53467,304.37309,443.3913Q250,449.24792,221.61633,398.91245Q193.23266,348.57698,134.4154,349.90482Q75.59813,351.23266,97.87777,300.61633Q120.15742,250,86.59518,192.92892Q53.03294,135.85784,122.1328,141.62985Q191.23266,147.40187,220.61633,118.58755Q250,89.77323,291.56345,97.77029Q333.12691,105.76734,343.57403,147.87309Q354.02115,189.97885,389.35957,219.98942Q424.69799,250,402.79317,287.75381Z;
              M399,305.5Q442,361,380,364Q318,367,284,407.5Q250,448,201.5,433Q153,418,140,369.5Q127,321,68,285.5Q9,250,32.5,194Q56,138,114.5,127.5Q173,117,211.5,86Q250,55,298,69Q346,83,380,119Q414,155,385,202.5Q356,250,399,305.5Z;
              "
              ></animate>
            </path>
          </svg>
        </ShapeBlur>
      </ImgBox>
    </Section>
  );
};

export default Home;

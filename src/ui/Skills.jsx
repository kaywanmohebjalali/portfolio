import styled from "styled-components";

const Section = styled.section`
  padding: 120px 0;

  min-height: 100vh;
  height: 100%;
  width: 100%;


`;

const Title = styled.div`
  text-align: center;
`;
const Span = styled.span`

  letter-spacing: 2px;
  text-transform: uppercase;
`;
const H2 = styled.h2`
  margin: 1rem 0 2rem 0;

  font-size: var(--big-font);
  font-weight: 600;
  color: var(--hover-color);
`;

const SkillStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 80%;
    margin: auto;
  }
`;
const Left = styled.div``;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;
  text-align: center;
`;

const SkillBar = styled.div`
  margin: 2.3rem 0;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const P = styled.p``;
const Bar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  margin-top: 10px;

  background-color:  var(--third-bg-color);
  position: relative;
`;
const SpanBar = styled.span`
  position: absolute;
  width: ${(prop) => prop?.percent + "%"};
  height: 100%;
  left: 0;
  background-color: var(--hover-color);
  border-radius: 10px;
  box-shadow: var(--neon-box-shadow);

  animation: ${(prop) => prop?.animate} ${(prop) => prop?.time + "s"};

  @keyframes ${(prop) => prop?.animate} {
    0% {
      width: 0%;
    }
    100% {
      width: ${(prop) => prop?.percent + "%"};
    }
  }
`;

const Right = styled.div``;
const Professional = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 0;
`;
const Box = styled.div`
  position: relative;
  margin: 10px 0;
`;
const Circle = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Points = styled.div`
  width: 3px;
  height: 10px;
  background-color:  var(--third-bg-color);
  position: absolute;
  border-radius: 3px;
  transform: rotate(${(prop) => prop?.i + "deg"}) translateY(-45px);
  animation: glow 0.04s linear forwards;
  animation-delay: ${(prop) => (prop?.i / 8) * 0.06 + "s"};

  @keyframes glow {
    0% {
      background-color:  var(--third-bg-color);
      box-shadow: none;
    }

    100% {
      background-color: var(--hover-color);
      box-shadow: var(--neon-box-shadow);
    }
  }
`;

const PointsAll = styled.div`
  width: 2.5px;
  height: 10px;
  background-color:  var(--third-bg-color);
  position: absolute;
  border-radius: 3px;
  transform: rotate(${(prop) => prop?.i + "deg"}) translateY(-45px);
  animation-delay: ${(prop) => prop?.i * 0.05 + "s"};
  animation: glowAll 0.04s linear forwards;
  @keyframes glowAll {
    0% {
      background-color:  var(--third-bg-color);
      box-shadow: none;
    }

    100% {
      background-color:  var(--third-bg-color);
      box-shadow: none;
    }
  }
`;
const Text = styled.div`
  text-align: center;
  font-size: 1rem;
`;
const Big = styled.big`
  border-radius: 100%;
  letter-spacing: 1px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Small = styled.small`
  display: block;
  margin-top: 0.8rem;
  font-weight: 600;
`;

const Skills = () => {
  return (
    <Section id="skills">
      <Title className="">
        <Span>technical and professional</Span>
        <H2>My Skills</H2>
      </Title>

      <SkillStyle>
        <Left 
         data-aos="zoom-in"
         data-aos-delay="50"
         data-aos-duration="2000">
          <H3>Technical Skills</H3>

          <SkillBar>
            <Info>
              <P>HTML</P>
              <P>90%</P>
            </Info>

            <Bar>
              <SpanBar percent={95} time={1} animate={"html"}></SpanBar>
            </Bar>
          </SkillBar>

          <SkillBar>
            <Info>
              <P>CSS</P>
              <P>85%</P>
            </Info>
            <Bar>
              <SpanBar percent={88} time={2} animate={"css"}></SpanBar>
            </Bar>
          </SkillBar>

          <SkillBar>
            <Info>
              <P>JAVASCRIPT</P>
              <P>80%</P>
            </Info>

            <Bar>
              <SpanBar percent={85} time={3} animate={"javascript"}></SpanBar>
            </Bar>
          </SkillBar>

          <SkillBar>
            <Info>
              <P>REACT</P>
              <P>90%</P>
            </Info>

            <Bar>
              <SpanBar percent={80} time={4} animate={"react"}></SpanBar>
            </Bar>
          </SkillBar>

          <SkillBar>
            <Info>
              <P>TYPESCRIPT</P>
              <P>78%</P>
            </Info>

            <Bar>
              <SpanBar percent={75} time={5} animate={"typescript"}></SpanBar>
            </Bar>
          </SkillBar>

          <SkillBar>
            <Info>
              <P>TAILWIND</P>
              <P>80%</P>
            </Info>

            <Bar>
              <SpanBar percent={80} time={6} animate={"tailwind"}></SpanBar>
            </Bar>
          </SkillBar>
        </Left>

        <Right
         data-aos="zoom-in"
         data-aos-delay="50"
         data-aos-duration="2000"
        >
          <H3>Professional Skills</H3>
          <Professional>
            <Box>
              <Circle>
                {Array.from({ length: 45 }, (v, k) => k).map((item) => {
                  return <PointsAll key={item} i={item * 8}></PointsAll>;
                })}

                {Array.from(
                  { length: Math.round((45 * 90) / 100) },
                  (v, k) => k
                ).map((item) => {
                  return <Points key={item} i={item * 8}></Points>;
                })}
              </Circle>

              <Text>
                <Big>90%</Big>
                <Small>Team Work</Small>
              </Text>
            </Box>

            <Box>
              <Circle>
                {Array.from({ length: 45 }, (v, k) => k).map((item) => {
                  return <PointsAll key={item} i={item * 8}></PointsAll>;
                })}
                {Array.from(
                  { length: Math.round((45 * 80) / 100) },
                  (v, k) => k
                ).map((item) => {
                  return <Points key={item} i={item * 8}></Points>;
                })}
              </Circle>

              <Text>
                <Big>80%</Big>
                <Small>Creativity</Small>
              </Text>
            </Box>

            <Box>
              <Circle>
                {Array.from({ length: 45 }, (v, k) => k).map((item) => {
                  return <PointsAll key={item} i={item * 8}></PointsAll>;
                })}
                {Array.from(
                  { length: Math.round((45 * 30) / 100) },
                  (v, k) => k
                ).map((item) => {
                  return <Points key={item} i={item * 8}></Points>;
                })}
              </Circle>

              <Text>
                <Big>30%</Big>
                <Small>Project Management</Small>
              </Text>
            </Box>

            <Box>
              <Circle>
                {Array.from({ length: 45 }, (v, k) => k).map((item) => {
                  return <PointsAll key={item} i={item * 8}></PointsAll>;
                })}
                {Array.from(
                  { length: Math.round((45 * 55) / 100) },
                  (v, k) => k
                ).map((item) => {
                  return <Points key={item} i={item * 8}></Points>;
                })}
              </Circle>

              <Text>
                <Big>55%</Big>
                <Small>Communication</Small>
              </Text>
            </Box>
          </Professional>
        </Right>
      </SkillStyle>
    </Section>
  );
};

export default Skills;

import styled from "styled-components";
import Button from "../style/Button";
const Section = styled.section`
  padding-top: 200px;
  min-height: 100vh;
  height: 100%;
  width: 100%;

`;

const Title = styled.div`
  text-align: center;
`;
const Span = styled.span`
  color:   var(--text-color);
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const H2 = styled.h2`
  margin: 1rem 0 2rem 0;
  font-size: var(--big-font);
  font-weight: 600;
  color: var(--hover-color);
`;

const Form = styled.form`
  width: 80%;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem 0rem;

  @media screen and (max-width: 768px) {
    gap: 0;
  }
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const TwoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: var(--color-bg);
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid var(--hover-color);
  font-size: 1.1rem;
  font-weight: 500;
  outline: none;
  transition: background-color 0.4s;

  &:focus {
    box-shadow: 0 0 10px rgba(18, 247, 255, 0.6);
  }

  &::placeholder {
    color:  var(--text-color);
  }
  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
const TextArea = styled.textarea`
  width: 100%;

  background-color: var(--color-bg);
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid var(--hover-color);
  outline: none;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  &:focus {
    box-shadow: var(--neon-box-shadow);
  }

  &::placeholder {
    color:  var(--text-color);
  }
  @media screen and (max-width: 768px) {
    margin-top: 0.6rem;
    margin-bottom: 2rem;
  }
`;

const Contact = () => {
  function ChangeColor(e) {
    {
      if (e.target.value.length) {
        e.target.style.backgroundColor = "var(--third-bg-color)";
        e.target.style.color = "#fff";
      } else {
        e.target.style.backgroundColor = "var(--color-bg)";
        e.target.style.color = "var(--text-color)";
      }
    }
  }

  return (
    <Section id="contact">

      <Title 
               data-aos="zoom-in"
               data-aos-delay="250"
               data-aos-duration="1000"
      >
        <Span>ask me question</Span>
        <H2>Contact Me</H2>
      </Title>

      <Form 
         data-aos="zoom-in"
         data-aos-delay="400"
         data-aos-duration="1000" 

         action="#"
      >
        <FirstRow>
          <Input
                   
            onChange={ChangeColor}
            type="text"
            placeholder="Your Name"
            required
          />
          <Input
       
            onChange={ChangeColor}
            type="email"
            placeholder="Your Email"
            required
          />
        </FirstRow>
        <TwoRow>
          <Input
  
            onChange={ChangeColor}
            type="text"
            placeholder="Your Address"
            required
          />
          <Input
         
            onChange={ChangeColor}
            type="text"
            placeholder="Phone Number"
            required
          />
        </TwoRow>

        <TextArea
           
          onChange={ChangeColor}
          placeholder="Your Message"
          rows={10}
          cols={30}
          required
        />
        <Button 
                
        type="submit">send message</Button>
      </Form>
    </Section>
  );
};

export default Contact;

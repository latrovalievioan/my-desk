import React, {FormEvent} from 'react';
import { Section } from '../styled/Section';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

const Card = styled(Tilt)`
  // performance
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0,0,0);
  transform: translateZ(0);

  background: rgba(61,61,91, 0.6);
  background: -moz-linear-gradient(135deg, rgba(61,61,91,0.5) 0%, rgba(73,115,126,0.5) 100%);
  background: -webkit-linear-gradient(135deg, rgba(61,61,91,0.5) 0%, rgba(73,115,126,0.5) 100%);
  background: linear-gradient(135deg, rgba(61,61,91,0.5) 0%, rgba(73,115,126,0.5) 100%);
  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 50px;
  width: 700px;
`;

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 600px;
  gap: 20px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    input {
      width: 100%;
      height: 40px;
      padding: 10px;
      outline: none;
      border-radius: 20px;
      border: 1px solid rgb(220, 220, 220);
      transition: 0.5s;

      &:focus {
        border: 4px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 10px;
      outline: none;
      border-radius: 20px;
      border: 1px solid rgb(220, 220, 220);
      transition: 0.5s;
      &:focus {
        border: 4px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      margin-bottom: 2px;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #5185DB;
      color: white;
      border: none;
      font-size: 20px;
      transition: 0.5s;

      &:hover {
        background: rgb(0, 206, 158);
      }
    }
  }
`;

export const Contacts = ({ ...props }, ref: any) => {
  const form = React.useRef<any>();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.current &&
    emailjs.sendForm('service_8cja93c', 'template_rx78fci', form.current, '3_T8sooweebROJ-QQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Section>
      <ContentStack>
        <h1>CONTACT ME</h1>
        <Card tiltReverse tiltMaxAngleX={6} tiltMaxAngleY={6}>
          <h2>Don't be shy...</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" />
            <label>Your Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </Card>
      </ContentStack>
    </Section>
  );
};

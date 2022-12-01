import React, { FormEvent } from 'react';
import { Section } from '../styled/Section';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

const Card = styled(Tilt)`
  // performance
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
  transform: translateZ(0);

  background: rgba(61, 61, 91, 0.6);
  background: -moz-linear-gradient(
    135deg,
    rgba(61, 61, 91, 0.5) 0%,
    rgba(73, 115, 126, 0.5) 100%
  );
  background: -webkit-linear-gradient(
    135deg,
    rgba(61, 61, 91, 0.5) 0%,
    rgba(73, 115, 126, 0.5) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(61, 61, 91, 0.5) 0%,
    rgba(73, 115, 126, 0.5) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 50px;
  width: 700px;
`;

const ContentStack = styled.div<{
  status: 'initial' | 'sending' | 'sent'
  missing: {
    name: boolean;
    email: boolean;
    message: boolean;
  }
}>`
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
      transition: 0.5s;
    }

    input[type='text'] {
      border: ${({ missing }) => missing.name ? '4px solid #ff1919' : '1px solid #dcdcdc'};

      &:focus {
        border: ${({ missing }) => missing.name ? '4px solid #ff1919' : '4px solid #00ce9e'};
      }
    }

    input[type='email'] {
      border: ${({ missing }) => missing.email ? '4px solid #ff1919' : '1px solid #dcdcdc'};

      &:focus {
        border: ${({ missing }) => missing.email ? '4px solid #ff1919' : '4px solid #00ce9e'};
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
      transition: 0.5s;

      border: ${({ missing }) => missing.message ? '4px solid #ff1919' : '1px solid #dcdcdc'};

      &:focus {
        border: ${({ missing }) => missing.message ? '4px solid #ff1919' : '4px solid #00ce9e'};
      }
    }
    label {
      margin-top: 1rem;
      margin-bottom: 2px;
    }
    input[type='submit'] {
      margin-top: 2rem;
      cursor: ${({ status }) => (status === 'initial' ? 'pointer' : 'auto')};
      background: ${({ status }) => {
        switch (status) {
          case 'initial':
            return '#5185db';
          case 'sending':
            return '#808080';
          case 'sent':
            return '#00ce9e';
        }
      }};
      color: white;
      border: none;
      font-size: 20px;
      transition: 0.5s;

      &:hover {
        background: ${({ status }) => {
          switch (status) {
            case 'initial':
              return '#00ce9e';
            case 'sending':
              return '#808080';
            case 'sent':
              return '#00ce9e';
          }
        }};
      }
    }
  }
`;

enum ButtonMessage {
  initial = 'Send',
  sending = 'Sending...',
  sent = 'Email sent',
}

export const Contacts = ({ ...props }, ref: any) => {
  const form = React.useRef<any>();
  const [status, setStatus] = React.useState<'initial' | 'sending' | 'sent'>(
    'initial'
  );

  const [missing, setMissing] = React.useState<{
    name: boolean;
    message: boolean;
    email: boolean;
  }>({
    name: false, message: false, email: false
  });

  const handleInputChange = (e: any, target: 'name' | 'email' | 'message') => {
    if(e.target.value.trim() === '') setMissing({...missing, [target]: true})
    else setMissing({...missing, [target]: false})
  }

  const sendEmail = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);

    setMissing({
      name: formProps['user_name'] === '',
      message: formProps.message === '',
      email: formProps['user_email'] === '',
    })
    
    if (status !== 'initial' || Object.values(formProps).includes('')) return;

    setStatus('sending');

    form.current &&
      emailjs
        .sendForm(
          'service_8cja93c',
          'template_rx78fci',
          form.current,
          '3_T8sooweebROJ-QQ'
        )
        .then(() => {
          setStatus('sent');
        })
        .catch(() => {
          setStatus('initial');
        });
  };

  return (
    <Section>
      <ContentStack status={status} missing={missing}>
        <h1>CONTACT ME</h1>
        <Card tiltReverse tiltMaxAngleX={6} tiltMaxAngleY={6}>
          <h2>Don't be shy...</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" onChange={(e) => handleInputChange(e, 'name')}/>
            <label>Your Email</label>
            <input type="email" name="user_email" onChange={(e) => handleInputChange(e, 'email')}/>
            <label>Message</label>
            <textarea name="message" onChange={(e) => handleInputChange(e, 'message')}/>
            <input type="submit" value={ButtonMessage[status]} />
          </form>
        </Card>
      </ContentStack>
    </Section>
  );
};

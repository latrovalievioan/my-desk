import React, {FormEvent} from 'react';
import { Section } from '../styled/Section';
import emailjs from '@emailjs/browser';

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
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </Section>
  );
};

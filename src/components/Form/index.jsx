import { useRef } from 'react';
import { FormComponent, Label, Input } from './styles'
import emailjs from '@emailjs/browser';
import { ButtonComponent } from '../Button/styles';

function Form() {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('inscricaoConfirmada', 'template_xlrdq4v', form.current, 'm_RuEWABjf_u9SLMP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setTimeout(() => window.location.href = '/', 1000);
  }

  return (
    <>
      <FormComponent ref={form} onSubmit={sendEmail}>
        <Label>Seu nome</Label>
        <Input type='text' name='name' />

        <Label>E-mail</Label>
        <Input type='email' name='email' />

        <Label>Telefone</Label>
        <Input type='text' name='telefone' />

        <ButtonComponent type='submit' fullWidth>
          Garantir minha vaga
        </ButtonComponent>

      </FormComponent>
    </>
  );
}

export default Form;

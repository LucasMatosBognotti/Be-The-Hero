import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { signUpRequest } from '../../store/modules/ong/actions'; 

import Input from '../../components/Input/index';

import { Container, Content, Section } from './styles';
import logoImg from '../../assets/logo.svg';

export default function Register() {
  const dispatch = useDispatch();

  function handleRegister(data, { reset }) {
    console.log(data);
    dispatch(signUpRequest(data));
    reset();
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>

          <Link to="/"> <FiArrowLeft size={16} color="#E02041" /> Voltar para o Login </Link>
        </Section>
        <Form onSubmit={handleRegister}>
          <Input name="name" type="text" placeholder="Nome da ONG" />
          <Input name="email" type="text" placeholder="E-mail" />
          <Input name="whatsapp" type="text" placeholder="WhatsApp" />

          <div>
            <Input name="city" type="text" placeholder="Cidede" />
            <Input name="uf" type="text" placeholder="UF" style={{width: 80}} />
          </div>
          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
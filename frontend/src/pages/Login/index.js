import React from 'react';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { signInRequest } from '../../store/modules/ong/actions';

import Input from '../../components/Input/index';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png'

export default function Login() {
  const dispatch = useDispatch();

  function handleLogin(data) {
    dispatch(signInRequest(data));
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo"/>

        <Form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <Input name="id" type="text" placeholder="Sua ID" />
          <button type="submit">Entrar</button>
          <Link to="/register"> <FiLogIn size={16} color="#E02041" /> Não tenho cadastro</Link>
        </Form>
      </Content>
      <img src={heroesImg} alt="Heroes"/>
    </Container>
  );
}
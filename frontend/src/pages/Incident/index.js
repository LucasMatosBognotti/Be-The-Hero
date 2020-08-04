import React from 'react';
import { Form } from '@unform/web';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { incidentRequest } from '../../store/modules/incident/actions';

import Input from '../../components/Input/index';

import { Container, Content, Section } from './styles';

import logoImg from '../../assets/logo.svg';

export default function Incident() {
  const ong_id = useSelector(state => state.ong.ong.id);
  const dispatch = useDispatch();

  function handleIncident(e, { reset }) {
    const data = ({ ...e, ong_id: ong_id });
    dispatch(incidentRequest(data));
    reset();
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhamente para encotrar um heroi para revolver isso.</p>

          <Link to="/dashboard"> <FiArrowLeft size={16} color="#E02041" /> Voltar para a Home </Link>
        </Section>
        <Form onSubmit={handleIncident}>
          <Input name="title" type="text" placeholder="Titulo do caso" />
          <Input name="description" type="text" placeholder="Descrição" />
          <Input name="value" type="number" placeholder="Valor em reais" />
          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
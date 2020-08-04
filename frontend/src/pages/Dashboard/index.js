import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { signOut } from '../../store/modules/ong/actions';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, Header } from './styles';

export default function Dashboard() {
  const ong = useSelector(state => state.ong.ong);
  const [ incids, setIncid ] = useState([]); 
  const dispatch = useDispatch();

  useEffect(() => {
    async function list() {
      const response = await api.get('incident', { headers: { Authorization: ong.id } }); 
      
      const incident = response.data.map(incid => ({
        ...incid,
        priceFormatted: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(incid.value)
      }));

      setIncid(incident);
    }
    list();
  }, [ong.id]);

  async function handleDelete(id) {
    await api.delete(`/incidents/${id}`, { headers: { Authorization: ong.id } });
  
    setIncid(incids.filter(incid => incid.id !== id));
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem Vinda, {ong.name}</span>

        <Link to="/incident/new">Cadastrar novo caso</Link>
        <button type="button" onClick={() => dispatch(signOut())} ><FiPower size={18} color="#E02041" /></button>
      </Header>

      <h1>CASOS CADASTRADOS</h1>

      <ul>
        {incids.map(incid => (
          <li key={incid.id}>
            <strong>CASO</strong>
            <p>{incid.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incid.description}</p>

            <strong>VALOR</strong>
            <p>{incid.priceFormatted}</p>
            <button type="button" onClick={() => handleDelete(incid.id)}> <FiTrash2 size={20} color="#A8A8B3" /></button>
          </li>
        ))}
      </ul>

    </Container>
  );
}
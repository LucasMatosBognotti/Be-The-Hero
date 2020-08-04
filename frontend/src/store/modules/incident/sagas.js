import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify'; 

import api from '../../../services/api';

export function* incident({ payload }) {
  
  try {
    const { title, description, value, ong_id } = payload.data;

    yield call(api.post, 'incidents', {
      title,
      description,
      value
    }, { headers: { Authorization: ong_id } });

    toast.success('Incidente cadastrado com sucesso !!!');

  } catch(err) {
    toast.error('Falha ao cadastrar o incidente !!!');
  } 

}

export default all([
  takeLatest('@incident/INCIDENT_REQUEST', incident)
]);
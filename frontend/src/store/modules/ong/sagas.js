import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signFailure, signInSuccess } from './actions';

export function* signUp({ payload }) {
  try {
    const { name, email, whatsapp, city, uf } = payload.data;

    const response = yield call(api.post, 'ongs', {
      name,
      email,
      whatsapp,
      city,
      uf
    });

    toast.success('ONG Cadastrada com sucesso !!!');

    alert(`Copie seu ID para fazer Login ${response.data.id}`);

    history.push('/');

  } catch(err) {
    toast.error('Falha no cadastro, verifique seus dados !!!');

    yield put(signFailure());
  }
}

export function* signIn ({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.post, 'sessions', {
      id,
    });

    const { ong } = response.data;

    yield put(signInSuccess(ong));

    history.push('/dashboard');

  } catch(err) {
    toast.error('Falha na autentificação, Verifique seu o dado');
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@ong/SIGN_UP_REQUEST', signUp),
  takeLatest('@ong/SIGN_IN_REQUEST', signIn),
  takeLatest('@ong/SIGN_OUT', signOut),
]);
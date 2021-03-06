import * as Yup from 'yup';
import generateUniqueId from '../utils/generateUniqueId';

import connection from '../database/index';

class OngController {
  async store(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      whatsapp: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string().required().length(2)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, whatsapp, city, uf} = req.body;
    
    const id = generateUniqueId();

    const [ ong ] = await connection('ongs').where('email', email);
    
    if (ong) {
      return res.json({ error: 'Email already exist' });
    }

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  }

  async index(req, res) {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
  }
}

export default new OngController();
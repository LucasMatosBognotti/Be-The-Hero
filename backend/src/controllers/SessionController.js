import * as Yup from 'yup';

import connection from '../database/index';

class SessionController {
  async store(req, res) {

    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    if (!(schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('id','name').first();

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this ID' });
    }

    return res.json({ ong });
  }
}

export default new SessionController();
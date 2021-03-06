import * as Yup from 'yup';

import connection from '../database/index';

class IncidentController {
  async store(req, res) {

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const ong_id = req.headers.authorization;
    const { title, description, value } = req.body;

    if (!ong_id) {
      return res.json({ error: 'Authorization invalid' });
    }

    const [ ong ] = (await connection('ongs').select('id')).filter((ong) => {
      return ong.id === ong_id;
    });


    if (ong === undefined) {
      return res.status(400).json({ error: 'Operation not permitted' });
    }
    
    const [ id ] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents);
  }

  async show(req, res) {
    const ong_id = req.headers.authorization;

    if (!ong_id) {
      return res.status(400).json({ error: 'Authorization invalid' });
    }

    const incidents = await connection('incidents').where('ong_id', ong_id).orderBy('id', 'desc').select('*');
    
    return res.json(incidents);
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    
    const incident = await connection('incidents').where('id', id).select('ong_id').first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted' });
    }

    await connection('incidents').where('id', id).delete();

    return res.status(201).json({ success: 'Incident deleted succefully' });
  }
}

export default new IncidentController();
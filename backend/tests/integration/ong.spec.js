import request from 'supertest';

import app from '../../src/app';
import connection from '../../src/database/index';


describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const create = await request(app)
      .post('/ongs')
      .send({
        name: "PDF",
        email: "ong1@gmail.com",
        whatsapp: "16999999999",
        city: "Franca",
        uf: "SP"
      });

    expect(create.body).toHaveProperty('id');
    expect(create.body.id).toHaveLength(8);
  });

  it('shuold be able to list ONGs', async() => {
    await request(app)
      .post('/ongs')
      .send({
        name: "ONG:1",
        email: "ong1@gmail.com",
        whatsapp: "16999999999",
        city: "Franca",
        uf: "SP"
      });

      await request(app)
      .post('/ongs')
      .send({
        name: "ONG:2",
        email: "ong2@gmail.com",
        whatsapp: "16999999999",
        city: "Franca",
        uf: "SP"
      });

    const list = await request(app).get('/ongs')

    console.log(list.body);
  
  });

});
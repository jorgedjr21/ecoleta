import express, { response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (req, res) => {
  const items = await knex('items').select('*');
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3000/uploads/${item.image}`
    }
  })

  return res.json(serializedItems);
});

routes.post('/points', async (request, response) => {
  try {
    await knex.transaction( async trx => { 
      const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
      } = request.body;

      const insertedIds = await trx('points').returning('id').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
      });

      const point_id = insertedIds[0];

      const point_items = items.map((item_id: number) => {
        return {
          item_id,
          point_id
        }
      });

      await trx('point_items').insert(point_items);
      return response.json({ success: true });
    });
  } catch (error) {
    return response.json(error);
  }

});

export default routes;
import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {

  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const point = await knex('points').where('id', id).first();
      if(!point){
        return response.status(404).json({message: 'Point not found'})
      }

      const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title', 'items.image');

      return response.json({point, items});
    } catch(error) {
      return response.status(503).json({error: error});
    }
  }

  async create(request: Request, response: Response) {
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


        const point = { 
          image: 'image-fake',
          name,
          email,
          whatsapp,
          latitude,
          longitude,
          city,
          uf
        }
        const insertedIds = await trx('points').returning('id').insert(point);
        const point_id = insertedIds[0];
        const point_items = items.map((item_id: number) => {
          return {
            item_id,
            point_id
          }
        });
  
        await trx('point_items').insert(point_items);
        return response.json({
          id: point_id,
          ...point
        });
      });
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}

export default PointsController;
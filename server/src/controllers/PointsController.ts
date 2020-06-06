import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items} = request.query;
    let parsedItems = ['-1']

    if(items != undefined && items != '') {
      parsedItems = String(items)
      .split(',')
      .map(item => item.trim())
    }

    try {
      const points = await knex('points')
        .join('point_items','points.id','=', 'point_items.point_id')
        .whereIn('point_items.item_id', parsedItems)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*')
      
      const serializedPoints = points.map(point => {
        return {
          ...point,
          image_url: `http://192.168.1.3:3001/uploads/${point.image}`
        }
      });
  
      return response.json(serializedPoints)
    } catch (error) {
      return response.status(503).json({error: error});
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const point = await knex('points').where('id', id).first();
      if(!point){
        return response.status(404).json({message: 'Point not found'})
      }

      const serializedPoint = {
        ...point,
        image_url: `http://192.168.1.3:3001/uploads/${point.image}`
      }

      const selectedItems = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.id', 'items.title', 'items.image');

      const items = selectedItems.map(item => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://192.168.1.3:3001/uploads/${item.image}`
        }
      })
      return response.json({point: serializedPoint, items});
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
          image: request.file.filename,
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

        const point_items = items
          .split(',')
          .map((item: string) => Number(item.trim()))
          .map((item_id: number) => {
            return {
              item_id,
              point_id
            }
        });
  
        await trx('point_items').insert(point_items);

        trx.commit();
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
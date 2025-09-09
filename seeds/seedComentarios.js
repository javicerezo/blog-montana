import { Comentario } from '../models/Comentario.js';

const comentarios = [
  {
    alias: 'javi',
    comentario: 'Excelente vía de escalada',
    comentarioId: 21
  },
  {
    alias: 'marian',
    comentario: 'demasiado fácil',
    comentarioId: 21
  },
  {
    alias: 'Pedro',
    comentario: 'No me ha gustado',
    comentarioId: 22
  },
  {
    alias: 'Prueba1',
    comentario: 'Muy bonita la llegada arriba. La recomiendo',
    comentarioId: 22
  },
  {
    alias: 'Marian',
    comentario: 'Muy interesante- Ese Urriellu',
    comentarioId: 17
  },
  {
    alias: 'Javi',
    comentario: 'Menuda cordada ...aupa!!',
    comentarioId: 17
  },
  {
    alias: 'Javi',
    comentario: 'Peztl siempre sabe lo que los clientes necesitamos.',
    comentarioId: 9
  },
  {
    alias: 'Antonia',
    comentario: 'Que buena pinta tiene. Proyecto a la vista.',
    comentarioId: 23
  }
];

export default async function seedComentarios() {
    console.log('Insertando comentarios');

    await Comentario.bulkCreate(comentarios);

    console.log('Comentarios insertados.');
}
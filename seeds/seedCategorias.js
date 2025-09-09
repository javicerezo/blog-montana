import { Categoria } from '../models/Categoria.js';

const categorias = [
  { categoria: 'rutas' },
  { categoria: 'noticias' },
  { categoria: 'consejos' },
  { categoria: 'test' },
  { categoria: 'reportajes' },
  { categoria: 'preparacion fisica' }
];

export default async function seedCategorias() {
    console.log('Insertando categorías');

    await Categoria.bulkCreate(categorias);

    console.log('Categorías insertadas correctamente'); 
}

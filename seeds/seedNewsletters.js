import { Newsletter } from '../models/Newsletter.js';

const newsletters = [
  { email: 'javi@javi.es' },
  { email: 'marian@marian.es' },
  { email: 'prueba1@prueba1.es' },
  { email: 'pedro@pedro.es' },
  { email: 'prueba2@prueba2.es' }
];

export default async function seedNewsletters() {
    console.log('Insertando newsletters');

    await Newsletter.bulkCreate(newsletters);

    console.log('Newsletters insertados.');
}
import { Entrada } from '../models/Entrada.js';

const entradas = [
  {
    titulo: 'Cómo organizar tu mochila para trekkings de varios dias',
    desarrollo: 'Te proponemos en este artículo la mejor manera de elegir tu material y organizar tu mochila para hacer una excursión de varios días. Pasar varias noches en la montaña implica llevar material extra, pero no excesivo, muy bien organizado.',
    imagen: '23007.jpg',
    tipoId: 3
  },
  {
    titulo: 'Travesías de varios días en la montaña.',
    desarrollo: 'Con la llegada del buen tiempo vuelven los sueños de los largos días y noches en la montaña. Os contamos todo sobre el material necesario para las travesías en el Pirineo, Picos de Europa, o cualquiera otra cordillera cercana.',
    imagen: '23010.jpg',
    tipoId: 3
  },
  {
    titulo: 'Seguridad en escalada deportiva III: peligros subjetivos',
    desarrollo: 'En este tercer artículo sobre seguridad en escalada deportiva tratamos de la diferencia entre peligro y riesgo, y explicamos los peligros subjetivos a los que podemos estar expuestos, y cómo evitarlos.',
    imagen: '22975.JPG',
    tipoId: 3
  },
  {
    titulo: 'Nutrición y montaña. Particularidades de la escalada',
    desarrollo: 'Peculiaridades de la nutrición específicas del caso de la escalada y los escaladores, un deporte en el que la incidencia del peso corporal tiene papel relevante.',
    imagen: '10476.jpg',
    tipoId: 6
  },
  {
    titulo: 'Aneto: guías y rescatistas recomiendan la ruta de Salterillo',
    desarrollo: 'Las fuertes precipitaciones del último mes y la subida de temperaturas hacen desde ya recomendable la subida al Aneto por la ruta del Ibón de Salterillo, evitando los Portillones.',
    imagen: '22945.jpg',
    tipoId: 2
  },
  {
    titulo: 'Della Bordella, Cazzanelli, Schüpbach y Welfringer, al Ogro',
    desarrollo: 'El Baintha Brakk, también conocido como el Ogro, legendaria montaña de Pakistán, va a ser intentada por Matteo Della Bordella, François Cazzanelli, Silvan Schüpbach y Symon Welfringer esta temporada.',
    imagen: '22869.jpg',
    tipoId: 2
  },
  {
    titulo: 'Himalayan Database deja de documentar expediciones',
    desarrollo: 'Los tiempos han cambiado, y con el nuevo estilo comercial, muchas de las cumbres en ochomiles adquieren el carácter de irrelevantes para la mayoría. Himalayan Database decide dejar de documentarlas, después de 60 años.',
    imagen: '22803.jpg',
    tipoId: 2
  },
  {
    titulo: 'Cómo preparar una excursión con niños',
    desarrollo: 'Conocemos la ilusión que hace que nuestros hijos e hijas compartan nuestras aficiones. Sin embargo podemos echar a perder el gusto por la montaña de los más pequeños si les llevamos a actividades tediosas, peligrosas o en condiciones no favorables.',
    imagen: '22947.jpg',
    tipoId: 3
  },
  {
    titulo: 'Nueva versión de los piolets Quark de Petzl',
    desarrollo: 'Llega el nuevo modelo con algunas mejoras muy interesantes. Los piolets Quark de Petzl tienen nueva versión, con algunas mejoras muy interesantes.',
    imagen: '16797.jpg',
    tipoId: 4
  },
  {
    titulo: 'OHM de Edelrid. Seguridad en una cordada de diferentes pesos',
    desarrollo: 'Edelrid presenta una solución a los problemas para el aseguramiento en aquellas cordadas con diferencias de peso de entre 10 y 40kg.',
    imagen: '15380.jpg',
    tipoId: 4
  },
  {
    titulo: 'Mochila antiavalanchas Scott Backcountry',
    desarrollo: 'La mochila antiavalanchas Scott Backcountry Patrol AP30, con Airbag Alpride E1 es una gran innovación de la marca Scott para el invierno 2018-2019.',
    imagen: '16063.jpg',
    tipoId: 4
  },
  {
    titulo: 'Intento alpino al Nanga Parbat',
    desarrollo: 'Puro y ligero estilo alpino". Así define David Goettler el intento que va a realizar en el Nanga Parbat (8.126m) junto al alpinista francés Benjamin Védrines.',
    imagen: '22780.jpg',
    tipoId: 2
  },
  {
    titulo: 'Entrenamiento para escalada: Fatiga y recuperación',
    desarrollo: 'En el anterior artículo, se habló de qué era la fatiga y de cómo debía ser entendida en el contexto del deporte…',
    imagen: '8318.jpg',
    tipoId: 6
  },
  {
    titulo: 'Entrenamiento para alpinismo. ¿Un contrasentido?',
    desarrollo: 'Entrenamiento y alpinismo son dos términos que, hasta hace "no mucho", parecía que costaba pronunciar en la misma frase.',
    imagen: '7824.jpg',
    tipoId: 6
  },
  {
    titulo: 'Entrenamiento para escalada; especial manos y dedos',
    desarrollo: 'Los dedos y las manos son la herramienta básica del escalador. Fuente de alegrías, pero también de problemas.',
    imagen: '7671.jpg',
    tipoId: 6
  },
  {
    titulo: '60 años de la Rabadá-Navarro a la oeste del Pico Urriellu',
    desarrollo: 'Tal día como hoy hace 60 años, los escaladores Alberto Rabadá y Ernesto Navarro se encontraban en plena apertura de la primera vía en la cara oeste del Naranjo de Bulnes.',
    imagen: '21852.jpg',
    tipoId: 5
  },
  {
    titulo: 'Porteadores y sherpas: la otra cara del Himalaya',
    desarrollo: 'En el Khumbu, en los valles de Nepal, en Pakistán...la labor de los porteadores que abastecen trekkings, aproximaciones y expediciones es fundamental y, por desgracia, desapercibida.',
    imagen: '20982.jpg',
    tipoId: 5
  },
  {
    titulo: 'Los Glaciares Pirenaicos. Estudio del estado actual',
    desarrollo: 'Los glaciares pirenaicos son un resto de otras épocas climáticas y geológicas que, si las cosas no cambian, caminan hacia su desaparición.',
    imagen: '19902.jpg',
    tipoId: 5
  },
  {
    titulo: 'Escalada en Riglos los problemas de los reequipamientos',
    desarrollo: 'Muchas de las vías de los Mallos han sufrido severas modificaciones en su equipamiento a lo largo de los años…',
    imagen: '18392.jpg',
    tipoId: 5
  },
  {
    titulo: 'Espolon elegante',
    desarrollo: 'Salimos la víspera desde la Sarra y vivac por el camino. Al día siguiente aproximación corta y bonita escalada.',
    imagen: 'espolon-elegante.jpg',
    tipoId: 1
  },
  {
    titulo: 'Espolon de los muchachos',
    desarrollo: 'Desde el aparcamiento descenderemos por una pista que se dirige al oeste. Después de cruzar el río…',
    imagen: 'espolon-muchachos.jpg',
    tipoId: 1
  },
  {
    titulo: 'Norte Clásica al Vignemale, 900m (MD+)',
    desarrollo: 'Sin lugar a dudas, la cara Norte del Vignemale es uno los lugares más "tope clásicos" de todo el Pirineo.',
    imagen: 'norte-vignemale.jpg',
    tipoId: 1
  },
  {
    titulo: 'Los balcones del Anayet, 350m (D+)',
    desarrollo: 'El Pico del Anayet se alza sobre los lagos del Anayet un lugar idílico de los Pirineos.',
    imagen: 'balcones-anayet.jpg',
    tipoId: 1
  },
  {
    titulo: 'GriGri+. ¿Mejorando el GriGri?.',
    desarrollo: 'El nuevo GriGri+ de Petzl incorpora dos innovaciones muy interensantes.',
    imagen: '15143.jpg',
    tipoId: 4
  }
];

export default async function seedEntradas() {
    console.log('Insertando entradas');

    await Entrada.bulkCreate(entradas);
    
    console.log('✅ Entradas insertadas.');
}
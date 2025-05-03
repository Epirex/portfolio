import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';
import { instagram } from '../helpers/links';
const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Perfil',
    slug: 'perfil',
    visible: true,
  },
  image: import('@/assets/yop.png'),
  fullName: 'Esteban Guzzo',
  role: 'Programador Android - Full Stack',
  details: [
    { label: 'Teléfono', value: '3834711120', url: 'tel:3834711120' },
    { label: 'Email', value: 'estebanguzzo@gmail.com', url: 'mailto:estebanguzzo@gmail.com' },
    { label: 'De', value: 'Catamarca, Argentina' },
  ],
  description: 'Soy Esteban Guzzo, programador con experiencia en desarrollo web, mobile y tecnologías inmersivas. Me especializo en Android usando Kotlin. También uso Unity para crear experiencias en realidad aumentada y virtual. Tengo formación autodidacta y académica. Me gusta resolver problemas con soluciones a medida y seguir aprendiendo constantemente.',
  tags: [{ name: 'Abierto a freelance' }, { name: 'Disponible para empresas' }, { name: 'Trabajando en proyectos propios' }],
  action: {
    label: 'Descargar CV',
    url: '/cv.pdf',
    downloadedFileName: 'estebanguzzo.pdf',
  },
  links: [instagram({ url: 'https://www.instagram.com/estebanguzzo/', target:'_blank' }), github({ url: 'https://github.com/Epirex' }), linkedin({ url: 'https://www.linkedin.com/in/estebanguzzo/' }), twitter({ url: 'https://x.com/EstebanGuzzo' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

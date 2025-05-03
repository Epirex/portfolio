import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Educación',
    slug: 'educacion',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
    screenshots: {
      title: 'Capturas de pantalla',
      icon: 'fa6-solid:images',
    },
  },
  diplomas: [
    {
      title: 'Diplomatura en Fullstack Developer',
      institution: 'Nodo Tecnologico',
      image: import('@/assets/logos/nodo.png'),
      dates: [new Date('2024.05'), new Date('2025.05')],
      description: "Durante el 2024 realicé una diplomatura intensiva de 1 año en desarrollo Fullstack, dictada por el Nodo Tecnológico y respaldada por la Universidad Nacional de Catamarca (UNCA). La formación abarcó tanto tecnologías de frontend como backend, preparando perfiles integrales para el desarrollo web moderno.",
      links: [website({ url: 'https://nodotecnologico.com.ar/' })],
      screenshots: [
        { src: import('@/assets/portfolio/primermodulo.jpg'), alt: 'Modulo 1' },
        { src: import('@/assets/portfolio/segundomodulo.jpg'), alt: 'Modulo 2' },
      ],
    },
    {
      title: 'Quality Assurance Manual',
      institution: 'Egg Cooperation',
      image: import('@/assets/logos/egg.png'),
      dates: [new Date('2022.04'), new Date('2022.10')],
      description: "Durante el año 2022 obtuve una beca para estudiar en Egg Cooperation, donde completé un bootcamp intensivo de más de 400 horas enfocado en Quality Assurance manual. Esta formación me permitió adquirir herramientas clave para la detección de errores, pruebas funcionales, metodologías ágiles y documentación de procesos, todo dentro de un entorno colaborativo y profesional. El programa contó con el aval de la UTN (Universidad Tecnológica Nacional).",
      links: [website({ url: 'https://egg.live/es/home' })],
      screenshots: [
        { src: import('@/assets/portfolio/diplomaegg.jpg'), alt: 'Diploma' },
      ],
    },
    {
      title: 'Android Developer',
      institution: 'Autodidacta',
      image: import('@/assets/logos/android.jpg'),
      dates: [new Date('2014.01'), new Date('2017.12')],
      description: "Desde mi adolescencia comencé a explorar el mundo de la programación compilando ROMs personalizadas de Android directamente desde el código fuente. Esta experiencia fue mi primer contacto profundo con la tecnología y despertó en mí una fuerte pasión por el ecosistema Android y el desarrollo de software en general. Años más tarde, orienté mi aprendizaje hacia el desarrollo de aplicaciones móviles con Kotlin, consolidando mis conocimientos en programación moderna y arquitectura de apps para Android.",
      links: [website({ url: 'https://xdaforums.com/m/epirex.5371721/#recent-content' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

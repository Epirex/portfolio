import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  cSharp,
  chakraUi,
  eslint,
  firebase,
  htmlAndCss,
  kotlin,
  nextJs,
  nodeJs,
  nx,
  php,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
  sql,
  postgreSql,
  javaScript,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experiencia Laboral',
    slug: 'experiencia',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Programador',
      company: 'Supranet.ar',
      image: import('@/assets/logos/supranetar.png'),
      dates: [new Date('2023-03'), new Date('2025-04')],
      description: `
        - Desarrollo Android: Desarrolle Aplicaciones en lenguaje Kotlin para dispositivos moviles, TVBOX y Android TV.
        - Diseño y desarrollo de sitios web modernos y responsivos, tanto en HTML/CSS/JS como en WordPress. También trabajé en aplicaciones web con React.js y Node.js enfocadas en funcionalidad y rendimiento.
        - Desarrollo de aplicaciones en Unity (VR/AR): Diseño de experiencias inmersivas para realidad virtual y aumentada, incluyendo el uso de modelos gaussianos para efectos avanzados.
        - Proyectos en Python: Desarrollo de software para entornos Windows.
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [kotlin(), cSharp(), php(), sql(), htmlAndCss(), javaScript(), react(), nodeJs()],
      },
      links: [instagram({ url: 'https://www.instagram.com/supranet.ar/' }), website({ url: 'https://supranet.ar/' })],
    },
    {
      role: 'Repartidor',
      company: 'PedidosYa!',
      image: import('@/assets/logos/pedidosya.png'),
      dates: [new Date('2020-09'), new Date('2023-02')],
      description: `
        - Entrega eficiente de alimentos y productos en tiempo y forma.
        - Gestión de rutas óptimas para cumplir con los plazos de entrega en zonas urbanas.
        - Atención al cliente en la resolución de consultas y problemas relacionados con pedidos.
        - Manejo responsable de dinero en efectivo y pagos digitales.
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [],
    },
    {
      role: 'Operario de Depósito y Digitalización',
      company: 'Inter-File',
      image: import('@/assets/logos/interfile.png'),
      dates: [new Date('2018-07'), new Date('2021-04')],
      description: `
        - Clasificación y organización: Manejo y clasificación de cajas en depósitos.
        - Chofer: Transporte de documentos y cajas.
        - Búsqueda de documentos: Localización eficiente de archivos específicos en depósitos.
        - Digitalización: Escaneo y registro digital de documentos físicos.
      `,
      tagsList: {
        tags: [],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

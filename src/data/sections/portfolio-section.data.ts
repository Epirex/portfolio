import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, video, website } from '../helpers/links';
import {
  astro,
  cSharp,
  chakraUi,
  eslint,
  firebase,
  htmlAndCss,
  javaScript,
  jest,
  kotlin,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Proyectos',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Capturas de pantalla',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Catamarca Ghibli',
      image: import('@/assets/portfolio/catghibli.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: 'Yo solito' },
        { label: 'Mi rol', value: ['Desarrollador fullstack'] },
        { label: 'Compañía', value: 'Proyecto propio' },
        { label: 'Categoría', value: ['WebApp'] },
      ],
      description:
        'Catamarca Ghibli es mi proyecto más reciente, una propuesta visual que imagina cómo se vería la Provincia de Catamarca si formara parte de una película del Studio Ghibli. Desarrollado con Astro, este sitio combina tecnología y sensibilidad artística para rendir homenaje a los paisajes catamarqueños desde una mirada fantástica. Las fotografías fueron tomadas por mí mismo con una Samsung Gear 360, buscando capturar la esencia única de cada lugar. Luego, las imágenes fueron procesadas con la tecnología DALL·E a través de ChatGPT, logrando transformar las escenas reales en interpretaciones visuales con estética Ghibli. Es un proyecto muy personal que fusiona tecnología, territorio y arte.',
      tagsList: {
        title: 'Tecnologías',
        tags: [htmlAndCss(), javaScript(), astro()]
      },
      links: [demo({ url: 'https://estebanguzzo.com.ar/catamarcaghibli/' }), github({ url: 'https://github.com/Epirex/catamarcaghibli' })],
    },
    {
      name: 'Psicologos Catamarca',
      image: import('@/assets/portfolio/psicologoscat.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: 'Yo solito' },
        { label: 'Mi rol', value: ['Desarrollador fullstack'] },
        { label: 'Compañía', value: 'Proyecto propio' },
        { label: 'Categoría', value: ['WebApp'] },
      ],
      description:
        'Psicólogos Catamarca es una WebApp desarrollada como demo técnica, cuyo objetivo principal es mostrar un listado de psicólogos de la provincia de Catamarca. La aplicación consume una API personalizada que centraliza la información de los profesionales y la presenta de manera ordenada y accesible. Actualmente, la demo se limita al listado básico, pero está planificada una segunda etapa en la que se integrará la API de Google Maps para visualizar la ubicación geográfica de cada psicólogo y mejorar la experiencia del usuario.',
      tagsList: {
        title: 'Tecnologías',
        tags: [htmlAndCss(), javaScript()]
      },
      links: [demo({ url: 'https://estebanguzzo.com.ar/psicologosapp/' }), github({ url: 'https://github.com/Epirex/psicologosapp' })],
    },
    {
      name: 'Pueblo Perdido de la Quebrada',
      image: import('@/assets/portfolio/ppq.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '5 personas' },
        { label: 'Mi rol', value: ['Desarrollador Unity'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['Windows App'] },
      ],
      description:
        'Pueblo Perdido de la Quebrada fue el proyecto más ambicioso en el que participé durante mi tiempo en Supranet. Se trató del desarrollo de una aplicación para Windows que recrea de forma realista las ruinas del sitio arqueológico conocido como "Pueblo Perdido", integrando tecnologías como puntos gaussianos, fotogrametría, modelado 3D y fotografías 360°, todo unificado en una única experiencia interactiva. Además, se desarrollaron versiones paralelas para realidad virtual (VR) y una variante minimalista en realidad aumentada (AR). Mi rol principal fue en la versión de escritorio para Windows con Unity, donde me encargué de casi todo el desarrollo desde cero, liderando la implementación técnica de la experiencia.',
      tagsList: {
        title: 'Tecnologías',
        tags: [cSharp()]
      },
      links: [video({ url: 'https://www.youtube.com/watch?v=N_HG2h_6_K8' })],
    },
    {
      name: 'Billetes Argentinos (AR)',
      image: import('@/assets/portfolio/milei.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: 'Yo solito' },
        { label: 'Mi rol', value: ['Desarrollador Unity'] },
        { label: 'Compañía', value: 'Proyecto propio' },
        { label: 'Categoría', value: ['Android App'] },
      ],
      description:
        'Billetes Argentinos es una aplicación de Realidad Aumentada (AR) para Android, desarrollada como una demo técnica experimental en el mundo de la AR. Al enfocar la cámara sobre un billete argentino de 1000 pesos, la app proyecta una animación de Milei bailando. Fue construida en Unity utilizando el SDK de Vuforia, como parte de una exploración personal en tecnologías inmersivas aplicadas a objetos cotidianos.',
      tagsList: {
        title: 'Tecnologías',
        tags: [cSharp()]
      },
      links: [video({ url: 'https://www.youtube.com/shorts/W7sqxxDqJ7o' })],
    },
    {
      name: 'Camyen 360º (VR)',
      image: import('@/assets/portfolio/camyen360.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '3 personas' },
        { label: 'Mi rol', value: ['Desarrollador Unity'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['VR App'] },
      ],
      description:
        'Camyen 360° es un mini-juego inmersivo desarrollado para los Oculus Quest 2, cuya principal característica es que todo el entorno fue creado mediante fotogrametría, ofreciendo un nivel de realismo visual impresionante. La mecánica del juego consiste en recoger piezas de rodocrosita del suelo y colocarlas en un carrito minero para sumar puntos, todo dentro de un límite de tiempo. Además, el entorno es altamente interactivo: la mayoría de los elementos, incluidos los mineros, responden a las acciones del jugador, haciendo que la experiencia sea dinámica y envolvente.',
      tagsList: {
        title: 'Tecnologías',
        tags: [cSharp()]
      },
      links: [video({ url: 'https://www.youtube.com/shorts/YqAcPiX5Qj8' })],
    },
    {
      name: 'Belen 360º (VR)',
      image: import('@/assets/portfolio/belen360.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '1 persona' },
        { label: 'Mi rol', value: ['Desarrollador Unity'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['VR App'] },
      ],
      description:
        'Belén 360° es una aplicación desarrollada específicamente para los Oculus Quest 2, diseñada para ofrecer una experiencia inmersiva mediante la visualización de videos en 360°. La app incluye una funcionalidad tipo Kiosco, lo que la hace ideal para eventos y exposiciones interactivas. Creada en Unity utilizando C#, la aplicación permite explorar contenido grabado con la Insta360 X2, aprovechando la capacidad de los videos en 360° para sumergir al usuario en una experiencia única.',
      tagsList: {
        title: 'Tecnologías',
        tags: [cSharp()]
      },
      links: [video({ url: 'https://www.youtube.com/shorts/3dFKBwL3ICI' })],
    },
    {
      name: 'Pucara 360º',
      image: import('@/assets/portfolio/pucara360.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '1 persona' },
        { label: 'Mi rol', value: ['Desarrollador Frontend'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['Web App'] },
      ],
      description:
        'Pucará 360° es una WebApp interactiva inspirada en el proyecto Catamarca 360°, pero con enfoque temático en el Pucará de Aconquija, ubicado en la provincia de Catamarca. Desarrollada utilizando tecnologías web como HTML, CSS, JavaScript y jQuery, esta demo técnica tenía como objetivo ofrecer una experiencia visual envolvente e inmersiva. Lamentablemente, el proyecto no pudo avanzar debido a limitaciones de financiamiento, quedando en una versión preliminar que muestra el potencial de un recorrido virtual por uno de los sitios históricos más emblemáticos de la región.',
      tagsList: {
        title: 'Tecnologías',
        tags: [htmlAndCss(), javaScript()]
      },
      links: [demo({ url: 'https://estebanguzzo.com.ar/pucara360/' }), github({ url: 'https://github.com/Epirex/pucara360' })],
    },
    {
      name: 'Catamarca 360º',
      image: import('@/assets/portfolio/catamarca360.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '3 personas' },
        { label: 'Mi rol', value: ['Desarrollador Frontend'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['Web App'] },
      ],
      description:
        'Catamarca 360° es una WebApp interactiva que permite explorar panoramas en 360° de distintos paisajes y puntos turísticos de la provincia de Catamarca, organizados por regiones. Fue desarrollada utilizando HTML, CSS, JavaScript y jQuery, ofreciendo una experiencia inmersiva y accesible desde cualquier navegador.',
      tagsList: {
        title: 'Tecnologías',
        tags: [htmlAndCss(), javaScript()]
      },
      links: [demo({ url: 'https://estebanguzzo.com.ar/catamarca360/' }), github({ url: 'https://github.com/Epirex/catamarca360' })],
    },
    {
      name: 'TVBar',
      image: import('@/assets/portfolio/tvbar.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '1 persona' },
        { label: 'Mi rol', value: ['Desarrollador Android'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['Android App'] },
      ],
      description:
        'TVBar es una app de cartelería digital que transmite canales de TV por Internet y muestra publicidad personalizada. Tiene tres modos configurables: Publicidad Base, que muestra una franja inferior cada cierto tiempo; Publicidad Mixta, que alterna entre la TV y anuncios a pantalla completa; y Publicidad Total, que muestra publicidad en pantalla completa sin límite de tiempo. Todo se controla fácilmente desde el control remoto del televisor, sin necesidad de periféricos. Ideal para bares, tótems y pantallas publicitarias.',
      tagsList: {
        title: 'Tecnologías',
        tags: [kotlin()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/tvbar1.png'), alt: 'Primera captura de pantalla' },
        { src: import('@/assets/portfolio/tvbar2.png'), alt: 'Segunda captura de pantalla' },
      ],
      links: [github({ url: 'https://github.com/Epirex/com.supranet.tvbar' })],
    },
    {
      name: 'AIMA',
      image: import('@/assets/portfolio/aima.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '1 persona' },
        { label: 'Mi rol', value: ['Desarrollador Android'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['Android App'] },
      ],
      description:
        'AIMA es un chatbot desarrollado con integración a la API de OpenAI, diseñado y entrenado específicamente para desempeñarse como experta en Marketing Digital. Fue un desarrollo solicitado por el Ministerio de Ciencia y Tecnología de la Provincia de Catamarca, con el objetivo de brindar asistencia automatizada en temas de marketing. AIMA puede guardar el historial de conversación y enviarlo por correo electrónico, facilitando el seguimiento y análisis de las consultas realizadas.',
      tagsList: {
        title: 'Tecnologías',
        tags: [kotlin()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/aima1.jpeg'), alt: 'Primera captura de pantalla' },
        { src: import('@/assets/portfolio/aima2.jpeg'), alt: 'Segunda captura de pantalla' },
        { src: import('@/assets/portfolio/aima3.jpeg'), alt: 'Tercera captura de pantalla' },
      ],
      links: [github({ url: 'https://github.com/Epirex/com.supranet.aima' })],
    },
    {
      name: 'SupraControl',
      image: import('@/assets/portfolio/supracontrol.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '1 persona' },
        { label: 'Mi rol', value: ['Desarrollador Android'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['Android App'] },
      ],
      description:
        'SupraControl es una aplicación complementaria a SupraKiosk, desarrollada para gestionar de forma centralizada el contenido que se muestra en múltiples dispositivos. Funciona como un panel de control que se comunica con SupraKiosk a través de WebSocket utilizando una dirección IP. Gracias a esta arquitectura, es posible controlar varios tótems o pantallas desde una única app, enviando contenido dinámicamente con solo un botón. Es la herramienta ideal para manejar entornos con múltiples puntos de visualización de manera eficiente, simple y en tiempo real.',
      tagsList: {
        title: 'Tecnologías',
        tags: [kotlin()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/supracontrol1.jpeg'), alt: 'Primera captura de pantalla' },
        { src: import('@/assets/portfolio/supracontrol2.jpeg'), alt: 'Segunda captura de pantalla' },
        { src: import('@/assets/portfolio/supracontrol3.jpeg'), alt: 'Tercera captura de pantalla' },
      ],
      links: [github({ url: 'https://github.com/Epirex/com.supranet.supracontrol' })],
    },
    {
      name: 'SupraKiosk',
      image: import('@/assets/portfolio/webview.png'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Tamaño del equipo', value: '1 persona' },
        { label: 'Mi rol', value: ['Desarrollador Android'] },
        { label: 'Compañía', value: 'Supranet.ar' },
        { label: 'Categoría', value: ['Android App'] },
      ],
      description:
        'SupraKiosk es una aplicación desarrollada en Kotlin pensada para funcionar en modo kiosco, ideal para tótems interactivos y cartelería digital. Está diseñada para bloquear el acceso del usuario al sistema y restringir completamente la salida de la app, garantizando una experiencia controlada y segura. Ofrece un alto nivel de personalización: permite configurar el color de fondo, establecer un temporizador para refrescar automáticamente la página, conectarse a APIs externas, e incluso cargar URLs locales almacenadas en el dispositivo. Es una solución robusta para mostrar contenido exclusivo del cliente de forma confiable y profesional.',
      tagsList: {
        title: 'Tecnologías',
        tags: [kotlin()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/webview1.png'), alt: 'Primera captura de pantalla' },
        { src: import('@/assets/portfolio/webview2.png'), alt: 'Segunda captura de pantalla' },
        { src: import('@/assets/portfolio/webview3.png'), alt: 'Tercera captura de pantalla' },
      ],
      links: [github({ url: 'https://github.com/Epirex/com.supranet.webview' })],
    },
    {
      name: 'Android Developer',
      image: import('@/assets/portfolio/novathor.png'),
      dates: [new Date('2016-05'), new Date('2018-07')],
      details: [
        { label: 'Tamaño del equipo', value: 'Yo solito' },
        { label: 'Mi rol', value: 'Desarrollador Android' },
        { label: 'Compañía', value: 'CyanogenMod'},
        { label: 'Categoría', value: ['Custom ROMs', 'Open Source'] },
      ],
      description:
        'Durante mi adolescencia me dediqué al porte de distintas versiones de Android para varios dispositivos, trabajando directamente con el código fuente original de cada equipo. En particular, porté múltiples versiones de Android para dispositivos con chipsets NovaThor, optimizando el sistema para hardware con soporte limitado y resolviendo problemas de compatibilidad a nivel kernel y HAL. Todos mis trabajos fueron publicados en XDA Developers, y esta etapa fue clave para enamorarme del mundo de la programación y encaminarme hacia una carrera en tecnología.',
      tagsList: {
        title: 'Tecnologías',
        tags: [],
      },
      links: [website({ url: 'https://xdaforums.com/m/epirex.5371721/#recent-content' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;

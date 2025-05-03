import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Mis favoritos',
    slug: 'favoritos',
    icon: 'fa6-solid:star',
    visible: true,
  },
  videos: {
    title: 'Videos que me inspiran',
    data: [
      {
        image: import('@/assets/favorites/videos/video1.jpg'),
        title: 'Todo el mundo debería aprender a programar - con Mark Zuckerberg, Bill Gates y Gabe Newell',
        url: 'https://www.youtube.com/watch?v=haAmfl4qajs',
      },
      {
        image: import('@/assets/favorites/videos/video2.jpg'),
        title: '¿Por qué me cuesta tanto llegar?: Roberto Musso at TEDxJoven@Montevideo',
        url: 'https://www.youtube.com/watch?v=myr23mynyOs',
      },
      {
        image: import('@/assets/favorites/videos/video3.jpg'),
        title: "Fabricando Oportunidades | Jonatan Ariste | TEDxRecoleta",
        url: 'https://www.youtube.com/watch?v=YajPEQUVrMU',
      },
    ],
  },
  /*
   medias: {
   title: 'Otras cositas interesantes de mi vida',
   data: [
   {
   image: import('@/assets/favorites/media/media-1.jpeg'),
   title: 'Fireship.io',
   type: 'YouTube channel',
   url: 'https://www.youtube.com/c/Fireship',
   },
   {
   image: import('@/assets/favorites/media/media-2.jpeg'),
   title: 'Healthy Software Developer',
   type: 'YouTube channel',
   url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
   },
   {
   image: import('@/assets/favorites/media/media-3.png'),
   title: 'Bytes',
   type: 'Newsletter',
   url: 'https://bytes.dev/',
   },
   {
   image: import('@/assets/favorites/media/media-4.png'),
   title: 'TypeScript Weekly',
   type: 'Newsletter',
   url: 'https://typescript-weekly.com/',
   },
   {
   image: import('@/assets/favorites/media/media-5.jpeg'),
   title: 'Front End Happy Hour',
   type: 'Podcast',
   url: 'https://www.frontendhappyhour.com/',
   },
   {
   image: import('@/assets/favorites/media/media-6.webp'),
   title: '.cult by Honeypot',
   type: 'Blog',
   url: 'https://cult.honeypot.io/',
   },
   ],
   },
   */
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;

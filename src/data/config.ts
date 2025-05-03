import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Esteban Guzzo',
    description:
      'El portafolio de Esteban.',
    faviconPath: '/src/assets/esteban.jpeg',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;

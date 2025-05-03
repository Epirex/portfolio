import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  htmlAndCss,
  javaScript,
  nodeJs,
  laravel,
  php,
  cSharp,
  python,
  sql,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
  kotlin,
  astro
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Habilidades',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Tecnologías',
      skills: [
        kotlin({
          level: 5,
        }),
        react({
          level: 3,
        }),
        typescript({
          level: 3,
        }),
        sass({
          level: 4,
        }),
        tailwindCss({ level: 3 }),
        htmlAndCss({
          level: 5,
        }),
        javaScript({
          level: 5,
        }),
        nodeJs({
          level: 4,
        }),
        laravel({
          level: 4,
        }),
        php({
          level: 5,
        }),
        cSharp({
          level: 5,
        }),
        python({
          level: 5,
        }),
        sql({
          level: 5,
        }),
        astro({
 level: 5,
 }),
        firebase({ level: 3 }),
      ],
    },
    {
      title: 'Hablo',
      skills: [
        { icon: 'circle-flags:us', name: 'Inglés - B1' },
        { icon: 'circle-flags:es-variant', name: 'Español' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;

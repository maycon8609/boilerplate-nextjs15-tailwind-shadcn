'use server';

import type { Locale } from './i18n-config';

const dictionaries = {
  'pt-BR': () =>
    import('./dictionaries/pt-BR.json').then(module => module.default),
  'en-US': () =>
    import('./dictionaries/en-US.json').then(module => module.default),
  'es-ES': () =>
    import('./dictionaries/es-ES.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries['pt-BR']();

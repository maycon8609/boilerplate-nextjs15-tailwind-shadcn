import { getDictionary } from '@/features/internationalization/get-dictionaries';
import { Locale } from '@/features/internationalization/i18n-config';

import { CounterComponent } from './counter-component';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>This text is rendered on the server: {dictionary.landing.welcome}</p>
      <CounterComponent dictionary={dictionary.counter} />
    </div>
  );
}

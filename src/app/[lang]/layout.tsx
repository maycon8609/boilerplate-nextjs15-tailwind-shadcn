import '../globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Locale } from '@/features/internationalization/i18n-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boilerplate Next.js 15',
  description: 'Boilerplate Next.js 15 + Tailwind + Shadcn UI',
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { lang: Locale };
  }>,
) {
  const { children } = props;
  const params = await props.params;

  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

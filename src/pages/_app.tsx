import '../globalStyles.scss';
import 'tailwindcss/tailwind.css';

import {Analytics} from '@vercel/analytics/react';
import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
});

export default MyApp;

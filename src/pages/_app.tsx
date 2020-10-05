import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="/img/logo.svg" />
        <link rel="apple-touch-icon" href="/img/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="The best Game Stores in the world!" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default App;

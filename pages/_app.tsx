import type { AppProps } from 'next/app';

// @ts-ignore
const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;

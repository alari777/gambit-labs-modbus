import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from '@/components/Layout/Layout';
import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </UserProvider>
  );
};

export default MyApp;

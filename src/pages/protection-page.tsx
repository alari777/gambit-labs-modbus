import Head from 'next/head';
import { FC } from 'react';
import RegistersTables from '@/components/Index/RegistersTable/RegistersTables';
import { useUser } from '@auth0/nextjs-auth0/client';

// @ts-ignore
const ProtectedHomePage: FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <Head>
          <title>Gambit Labs Modbus project</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <main className='main'>
          <RegistersTables />
        </main>
      </>
    );
  }
};

export default ProtectedHomePage;
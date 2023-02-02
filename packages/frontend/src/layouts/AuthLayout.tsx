import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AuthContext } from 'src/store/auth';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

const AuthLayout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
}) => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!authCtx?.isLoggedIn) {
      router.replace('/');
    } else {
      setIsMounted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authCtx?.isLoggedIn]);

  if (!isMounted) {
    return (
      <p
        sx={{
          variant: 'text.h3',
          position: 'absolute',
          top: '40%',
          left: '50%',
          translate: '-50% -50%',
        }}
      >
        Loading...
      </p>
    );
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description || 'Generated by create next app'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main sx={{ minHeight: '100vh' }}>{children}</main>
    </>
  );
};

export default AuthLayout;

import { FC } from 'react';
import styles from '@/components/Header/Header.module.scss';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const Header: FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <header className={styles.header}>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link
              data-testid='nav-home'
              className='nav-item nav-link active'
              href='/'
            >
              Home
            </Link>
            {user && (
              <>
                <Link
                  data-testid='nav-protection-page'
                  className='nav-item nav-link'
                  href='/protection-page'
                >
                  Protection Home Page
                </Link>
                <Link
                  data-testid='nav-logout'
                  className='nav-item nav-link'
                  href='/api/auth/logout'
                >
                  Logout ({user.name})
                </Link>
              </>
            )}
            {!user && (
              <Link
                data-testid='nav-login'
                className='nav-item nav-link'
                href='/api/auth/login'
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { FC } from 'react';
import styles from '@/components/Header/Header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link
              data-testid='nav-trips'
              className='nav-item nav-link active'
              href='/'
            >
              Home
            </Link>
            <Link
              data-testid='nav-stations'
              className='nav-item nav-link'
              href='/protection-page'
            >
              Protection page (?)
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { FC } from 'react';
import styles from '@/components/Footer/Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      Gambit Labs Modbus project. Created at NextJS. 2023
    </footer>
  );
};

export default Footer;

import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('should render header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('should render home link in header navbar', () => {
    const navHome = screen.getByTestId('nav-home');
    expect(navHome).toBeInTheDocument();
    expect(navHome).toMatchSnapshot();
  });

  test('should render protection page link in header navbar', () => {
    const navProtectionPage = screen.getByTestId('nav-protection-page');
    expect(navProtectionPage).toBeInTheDocument();
    expect(navProtectionPage).toMatchSnapshot();
  });
});

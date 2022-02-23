import { render, screen } from '@testing-library/react';
import App from './App';
import GameProvider from './GameProvider';

test('renders learn react link', () => {
  render(<GameProvider><App /></GameProvider>);
  const linkElement = screen.getByText(/Card Game/i);
  expect(linkElement).toBeInTheDocument();
});

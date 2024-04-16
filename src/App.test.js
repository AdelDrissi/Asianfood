import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  // Vérifie si le texte "learn react" est présent dans le rendu de <App />
  const linkElement = screen.getByText(/learn react/i);

  // Assurez-vous que l'élément contenant le texte est bien dans le document
  expect(linkElement).toBeInTheDocument();
});

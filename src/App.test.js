import { render, screen } from '@testing-library/react';
import App from './App'

test('renders heading', () => {
  render(<App />)

  const heading = screen.getByRole('heading', {
      name: /hello, world 123!/i
  })  
  expect(heading).toBeInTheDocument()  
});

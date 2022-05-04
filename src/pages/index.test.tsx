import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // add custom jest matchers from jest-dom
import Home from './index';

// Test example
// by default global afterEach calls cleanup()
describe('boiler plate homepage', () => {
  it('displays title', async () => {
    render(<Home />);
    const text = 'Welcome to the Next.js';
    const title = screen.getByText(text);
    expect(title).toHaveTextContent(text);
  });

  it('displays links', () => {
    render(<Home />);
    const link = screen.getByText('boiler plate');
    expect(link).toHaveAttribute('href', 'https://nextjs.org');
  });
});

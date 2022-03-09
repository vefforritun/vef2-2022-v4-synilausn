import { render, screen } from '@testing-library/react';
import { Login } from './Login';

describe('LoginContainer', () => {
  it('renders a link', () => {
    render(<Login to="/">test</Login>);
    const link = screen.getByText('test');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('does not a render a link if empty to', () => {
    render(<Login to="">test</Login>);
    const link = screen.queryByRole('link');
    expect(link).not.toBeInTheDocument();
  });
})

import { render, screen } from '@testing-library/react'

import Home from './page'

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /hello/i })
    expect(heading).toBeInTheDocument()
  })
})

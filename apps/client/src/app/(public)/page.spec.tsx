import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './page'

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /hello/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the button', () => {
    render(<Home />)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })
})

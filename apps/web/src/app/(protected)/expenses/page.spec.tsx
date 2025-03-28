import { render, screen } from '@testing-library/react'

import ExpensesPage from './page'

describe('ExpensesPage', () => {
  it('renders the heading', () => {
    render(<ExpensesPage />)
    const heading = screen.getByRole('heading', { name: /expenses/i })
    expect(heading).toBeInTheDocument()
  })
})

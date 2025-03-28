import { render, screen } from '@testing-library/react'

import UserBillingPage from './page'

describe('UserBillingPage', () => {
  it('renders the heading', () => {
    render(<UserBillingPage />)
    const heading = screen.getByRole('heading', { name: /user billing/i })
    expect(heading).toBeInTheDocument()
  })
})

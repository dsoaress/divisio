import { render, screen } from '@testing-library/react'

import UserAccountPage from './page'

describe('UserAccountPage', () => {
  it('renders the heading', () => {
    render(<UserAccountPage />)
    const heading = screen.getByRole('heading', { name: /user account/i })
    expect(heading).toBeInTheDocument()
  })
})

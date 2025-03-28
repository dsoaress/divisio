import { render, screen } from '@testing-library/react'

import DashboardPage from './page'

describe('DashboardPage', () => {
  it('renders the heading', () => {
    render(<DashboardPage />)
    const heading = screen.getByRole('heading', { name: /dashboard/i })
    expect(heading).toBeInTheDocument()
  })
})

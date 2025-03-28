import { render, screen } from '@testing-library/react'

import SettlementsPage from './page'

describe('SettlementsPage', () => {
  it('renders the heading', () => {
    render(<SettlementsPage />)
    const heading = screen.getByRole('heading', { name: /settlement/i })
    expect(heading).toBeInTheDocument()
  })
})

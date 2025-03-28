import { render, screen } from '@testing-library/react'

import UpgradeToProPage from './page'

describe('UpgradeToProPage', () => {
  it('renders the heading', () => {
    render(<UpgradeToProPage />)
    const heading = screen.getByRole('heading', { name: /upgrade to pro/i })
    expect(heading).toBeInTheDocument()
  })
})

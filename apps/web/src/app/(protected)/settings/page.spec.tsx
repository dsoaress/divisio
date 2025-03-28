import { render, screen } from '@testing-library/react'

import SettingsPage from './page'

describe('SettingsPage', () => {
  it('renders the heading', () => {
    render(<SettingsPage />)
    const heading = screen.getByRole('heading', { name: /settings/i })
    expect(heading).toBeInTheDocument()
  })
})

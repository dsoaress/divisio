import { render } from '@testing-library/react'

import { Button } from './button'

describe('Button component', () => {
  it('renders correctly with default props', () => {
    const { getByRole } = render(<Button>Click me</Button>)
    const button = getByRole('button')
    expect(button).toHaveTextContent('Click me')
    expect(button).toHaveClass('bg-primary text-primary-foreground')
  })

  it('renders correctly with variant prop', () => {
    const { getByRole } = render(<Button variant="destructive">Delete</Button>)
    const button = getByRole('button')
    expect(button).toHaveTextContent('Delete')
    expect(button).toHaveClass('bg-destructive text-white')
  })

  it('renders correctly with size prop', () => {
    const { getByRole } = render(<Button size="lg">Large Button</Button>)
    const button = getByRole('button')
    expect(button).toHaveTextContent('Large Button')
    expect(button).toHaveClass('h-10 px-6')
  })

  it('renders correctly with asChild prop', () => {
    const { getByText } = render(
      <Button asChild>
        <a href="/link">Link Button</a>
      </Button>
    )
    const link = getByText('Link Button')
    expect(link).toHaveAttribute('href', '/link')
    expect(link).toHaveAttribute('data-slot', 'button')
  })

  it('applies additional class names', () => {
    const { getByRole } = render(<Button className="extra-class">Click me</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('extra-class')
  })
})

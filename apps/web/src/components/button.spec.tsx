import { render } from '@testing-library/react'

import { Button } from './button'

describe('Button', () => {
  it('should render with default styles', () => {
    const { getByRole } = render(<Button>Click Me</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-primary text-primary-foreground shadow-xs')
  })

  it('should apply the "destructive" variant styles', () => {
    const { getByRole } = render(<Button variant="destructive">Delete</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-destructive text-white shadow-xs')
  })

  it('should apply the "outline" variant styles', () => {
    const { getByRole } = render(<Button variant="outline">Outline</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('border bg-background shadow-xs')
  })

  it('should apply the "sm" size styles', () => {
    const { getByRole } = render(<Button size="sm">Small</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('h-8 rounded-md gap-1.5 px-3')
  })

  it('should apply the "lg" size styles', () => {
    const { getByRole } = render(<Button size="lg">Large</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('h-10 rounded-md px-6')
  })

  it('should render as a child component when "asChild" is true', () => {
    const { getByText } = render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>
    )
    const link = getByText('Link')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('should apply custom class names', () => {
    const { getByRole } = render(<Button className="custom-class">Custom</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('should be disabled when the "disabled" prop is set', () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>)
    const button = getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:pointer-events-none disabled:opacity-50')
  })
})

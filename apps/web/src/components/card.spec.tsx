import { render } from '@testing-library/react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './card'

describe('Card', () => {
  it('should render the Card component with default styles', () => {
    const { getByTestId } = render(<Card data-testid="card">Content</Card>)
    const card = getByTestId('card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass(
      'flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm'
    )
  })

  it('should apply custom class names to the Card component', () => {
    const { getByTestId } = render(<Card className="custom-class" data-testid="card" />)
    const card = getByTestId('card')
    expect(card).toHaveClass('custom-class')
  })

  it('should render the CardHeader component with default styles', () => {
    const { getByTestId } = render(<CardHeader data-testid="card-header">Header</CardHeader>)
    const header = getByTestId('card-header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass(
      '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'
    )
  })

  it('should render the CardTitle component with default styles', () => {
    const { getByTestId } = render(<CardTitle data-testid="card-title">Title</CardTitle>)
    const title = getByTestId('card-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('font-semibold leading-none')
  })

  it('should render the CardDescription component with default styles', () => {
    const { getByTestId } = render(
      <CardDescription data-testid="card-description">Description</CardDescription>
    )
    const description = getByTestId('card-description')
    expect(description).toBeInTheDocument()
    expect(description).toHaveClass('text-muted-foreground text-sm')
  })

  it('should render the CardAction component with default styles', () => {
    const { getByTestId } = render(<CardAction data-testid="card-action">Action</CardAction>)
    const action = getByTestId('card-action')
    expect(action).toBeInTheDocument()
    expect(action).toHaveClass('col-start-2 row-span-2 row-start-1 self-start justify-self-end')
  })

  it('should render the CardContent component with default styles', () => {
    const { getByTestId } = render(<CardContent data-testid="card-content">Content</CardContent>)
    const content = getByTestId('card-content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('px-6')
  })

  it('should render the CardFooter component with default styles', () => {
    const { getByTestId } = render(<CardFooter data-testid="card-footer">Footer</CardFooter>)
    const footer = getByTestId('card-footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('flex items-center px-6 [.border-t]:pt-6')
  })
})

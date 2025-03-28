import { render } from '@testing-library/react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

vi.mock('@radix-ui/react-avatar', () => ({
  Root: 'span',
  Image: 'img',
  Fallback: 'span'
}))

describe('Avatar', () => {
  it('should render the Avatar component with default styles', () => {
    const { getByTestId } = render(<Avatar data-testid="avatar" />)
    const avatar = getByTestId('avatar')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass('relative flex size-8 shrink-0 overflow-hidden rounded-full')
  })

  it('should apply custom class names to the Avatar component', () => {
    const { getByTestId } = render(<Avatar className="custom-class" data-testid="avatar" />)
    const avatar = getByTestId('avatar')
    expect(avatar).toHaveClass('custom-class')
  })

  it('should render the AvatarImage component with default styles', () => {
    const { getByTestId } = render(
      <AvatarImage src="image.jpg" alt="Avatar" data-testid="avatar-image" />
    )
    const avatarImage = getByTestId('avatar-image')
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveClass('aspect-square size-full')
    expect(avatarImage).toHaveAttribute('src', 'image.jpg')
    expect(avatarImage).toHaveAttribute('alt', 'Avatar')
  })

  it('should apply custom class names to the AvatarImage component', () => {
    const { getByTestId } = render(
      <AvatarImage className="custom-class" data-testid="avatar-image" />
    )
    const avatarImage = getByTestId('avatar-image')
    expect(avatarImage).toHaveClass('custom-class')
  })

  it('should render the AvatarFallback component with default styles', () => {
    const { getByTestId } = render(
      <AvatarFallback data-testid="avatar-fallback">AB</AvatarFallback>
    )
    const avatarFallback = getByTestId('avatar-fallback')
    expect(avatarFallback).toBeInTheDocument()
    expect(avatarFallback).toHaveClass(
      'flex size-full items-center justify-center rounded-full bg-muted'
    )
    expect(avatarFallback).toHaveTextContent('AB')
  })

  it('should apply custom class names to the AvatarFallback component', () => {
    const { getByTestId } = render(
      <AvatarFallback className="custom-class" data-testid="avatar-fallback">
        AB
      </AvatarFallback>
    )
    const avatarFallback = getByTestId('avatar-fallback')
    expect(avatarFallback).toHaveClass('custom-class')
  })
})

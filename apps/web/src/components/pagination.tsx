import type { ClassValue } from 'clsx'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import Link, { type LinkProps } from 'next/link'

import { cn } from '@/lib/cn'

import { type ButtonProps, buttonVariants } from './button'

export function Pagination({
  className,
  ...props
}: Readonly<React.ComponentProps<'nav'>>): React.JSX.Element {
  return (
    <nav
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

export function PaginationContent({
  className,
  ...props
}: Readonly<React.ComponentProps<'ul'>>): React.JSX.Element {
  return <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />
}

export function PaginationItem({
  className,
  ...props
}: Readonly<React.ComponentProps<'li'>>): React.JSX.Element {
  return <li className={cn('', className)} {...props} />
}

interface PaginationLinkProps extends LinkProps, Pick<ButtonProps, 'size'> {
  className?: ClassValue
  isActive?: boolean
  children?: React.ReactNode
}

export function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: Readonly<PaginationLinkProps>): React.JSX.Element {
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(buttonVariants({ variant: isActive ? 'outline' : 'ghost', size }), className)}
      {...props}
    />
  )
}

export function PaginationPrevious({
  className,
  ...props
}: Readonly<React.ComponentProps<typeof PaginationLink>>): React.JSX.Element {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  )
}

export function PaginationNext({
  className,
  ...props
}: Readonly<React.ComponentProps<typeof PaginationLink>>): React.JSX.Element {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  )
}

export function PaginationEllipsis({
  className,
  ...props
}: Readonly<React.ComponentProps<'span'>>): React.JSX.Element {
  return (
    <span
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

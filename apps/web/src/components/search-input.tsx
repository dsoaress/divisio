'use client'

import { Input } from '@/components/input'
import { useSearch } from '@/hooks/use-search'

export function SearchInput(): React.JSX.Element {
  const { search, setSearch } = useSearch()

  return (
    <Input
      type="text"
      placeholder="Search"
      defaultValue={search}
      onChange={(e): void => setSearch(e.target.value)}
    />
  )
}

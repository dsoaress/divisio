'use client'

import { CONSTANTS } from '@/config/constants'
import { usePagination } from '@/hooks/use-pagination'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './select'

export function ItemsPerPage(): React.JSX.Element {
  const { perPage, setPerPage } = usePagination()

  return (
    <div className="flex w-[200px] items-center space-x-4">
      <p className="whitespace-nowrap font-medium text-sm">Items per page</p>
      <Select value={perPage} onValueChange={(value: string): void => setPerPage(value)}>
        <SelectTrigger className="w-[84px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {CONSTANTS.PER_PAGE_OPTIONS.map(value => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

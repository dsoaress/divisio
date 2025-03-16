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
    <div className="flex items-center space-x-4">
      <p className="font-medium text-sm">Items per page</p>
      <Select defaultValue={perPage} onValueChange={(value: string): void => setPerPage(value)}>
        <SelectTrigger className="w-[120px]">
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

'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/select'
import { CONSTANTS } from '@/core/constantes'
import { usePagination } from '@/hooks/use-pagination'

function createOptions(length: number): string[] {
  return Array.from({ length }).map((_, i) => String(+CONSTANTS.DEFAULT_PER_PAGE * (i + 1)))
}

export function ItensPerPage(): React.JSX.Element {
  const { perPage, setPerPage } = usePagination()

  return (
    <Select defaultValue={perPage} onValueChange={(value: string): void => setPerPage(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Itens per page</SelectLabel>
          {createOptions(4).map(value => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

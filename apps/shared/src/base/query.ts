import type { Command } from './command'

export interface Query<I, O> extends Command<I, O> {}

export interface QueryResult<O> {
  data: O
}

export interface PaginatedQueryResult<O> extends QueryResult<O> {
  pages: number
  total: number
}

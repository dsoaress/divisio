export function paginate(total: number, perPage: number): { total: number; pages: number } {
  return {
    total,
    pages: Math.ceil(total / perPage) || 1
  }
}

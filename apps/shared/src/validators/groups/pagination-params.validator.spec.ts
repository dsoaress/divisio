import { paginationParamsValidator } from './pagination-params.validator'

describe('paginationParamsValidator', () => {
  it.each([
    [{ page: '1', 'per-page': '10' }, true],
    [{ page: '0', 'per-page': '10' }, false],
    [{ page: '-1', 'per-page': '10' }, false],
    [{ page: '1', 'per-page': '0' }, false],
    [{ page: '1', 'per-page': '-5' }, false],
    [{ page: 'abc', 'per-page': '10' }, false],
    [{ page: '1', 'per-page': 'xyz' }, false],
    [{ page: '1' }, false],
    [{ 'per-page': '10' }, false],
    [{}, false]
  ])('should validate the schema: %o (valid: %j)', (data, expected) => {
    const result = paginationParamsValidator.safeParse(data)
    expect(result.success).toBe(expected)
  })
})

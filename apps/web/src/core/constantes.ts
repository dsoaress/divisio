export const CONSTANTS = {
  PAGE: 'p',
  PER_PAGE: 'pp',
  PER_PAGE_OPTIONS: Array.from({ length: 4 }, (_, i): string => String(25 * (i + 1))),
  ORDER: 'o',
  DIR: 'd',
  DIR_OPTIONS: ['desc', 'asc'],
  SEARCH: 's',
  DEFAULT_PAGE: '1',
  DEFAULT_PER_PAGE: '25',
  DEFAULT_DIR: 'desc',
  GROUP_ID: {
    ORDER_OPTIONS: ['date', 'name', 'amount'],
    DEFAULT_ORDER: 'date'
  }
} as const

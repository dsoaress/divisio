import { GLOBAL_CONSTANTS } from 'shared'

const DEFAULT_PER_PAGE = '15'

export const CONSTANTS = {
  PAGE: 'p',
  PER_PAGE: 'pp',
  PER_PAGE_OPTIONS: Array.from({ length: 4 }, (_, i): string =>
    String(+DEFAULT_PER_PAGE * (i + 1))
  ),
  ORDER: 'o',
  DIR: 'd',
  DIR_OPTIONS: ['desc', 'asc'],
  SEARCH: 's',
  DEFAULT_PAGE: '1',
  DEFAULT_PER_PAGE,
  DEFAULT_DIR: 'desc',
  GROUP_ID: {
    ORDER_OPTIONS: ['date', 'name', 'amount'],
    DEFAULT_ORDER: 'date'
  },
  PRIVATE_ROUTES: ['/groups', '/friends', '/settings'],
  STAGING_TOKEN:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3dTQweXBpa215bHFvaGg1andxeGJzaTQiLCJpYXQiOjE5MjA1MTQ1MzV9.jyIUrbCLoNjQnhX8FzzN7nk6GqIx_MIkiI6z-KTOZZE',
  ...GLOBAL_CONSTANTS
} as const

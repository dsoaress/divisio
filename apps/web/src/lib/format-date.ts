export function formatDate(date: string, locale = 'en-US'): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return new Intl.DateTimeFormat(locale, options).format(new Date(date))
}

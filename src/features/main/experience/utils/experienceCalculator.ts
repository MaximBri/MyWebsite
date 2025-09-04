export type ExperienceItemModel = {
  name: string
  description: string
  stack: string[]
  period: { start: string; end: string }
  role: string
  imagePath?: string
}

function parseDMY(dateStr: string): Date {
  const [d, m, y] = dateStr.split('.').map((x) => parseInt(x, 10))
  return new Date(y, (m || 1) - 1, d || 1)
}

function monthsBetween(start: Date, end: Date): number {
  const yearDiff = end.getFullYear() - start.getFullYear()
  const monthDiff = end.getMonth() - start.getMonth()
  let months = yearDiff * 12 + monthDiff

  if (end.getDate() < start.getDate()) {
    months -= 1
  }

  return Math.max(0, months)
}

export function getTotalExperienceMonths(list: ExperienceItemModel[]): number {
  const now = new Date()
  return list.reduce((acc, item) => {
    try {
      const start = parseDMY(item.period.start)
      const end =
        item.period.end === 'now' || item.period.end.toLowerCase() === 'now'
          ? now
          : parseDMY(item.period.end)

      const months = monthsBetween(start, end)
      return acc + months
    } catch {
      return acc
    }
  }, 0)
}

export function formatMonths(monthsTotal: number) {
  const years = Math.floor(monthsTotal / 12)
  const months = monthsTotal % 12
  if (years === 0) return `${months} мес.`
  if (months === 0)
    return `${years} ${declOfNum(years, ['год', 'года', 'лет'])}`
  return `${years} ${declOfNum(years, ['год', 'года', 'лет'])} ${months} мес.`
}

function declOfNum(n: number, titles: [string, string, string]) {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[Math.min(n % 10, 5)]]
}

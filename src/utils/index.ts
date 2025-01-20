import { ReportsFilter, Report } from "@/queries";
import { Random } from './random'
import { maleNames } from './names'
import { tags } from './tags'

const generateReport = (i, j, date, random) => {
  const allTags = [...tags]
  const reportTags = []
  const countTags = random.next(0, tags.length - 1)

  for (let i = 0; i < countTags; i++) {
    const index = random.next(0, allTags.length - 1)
    reportTags.push(allTags[index])
    allTags.splice(index, 1);
  }

  return {
    key: `${i}_${j}`,
    client: maleNames[random.next(0, maleNames.length - 1)],
    duration: `${random.next(1, 45)} мин. ${random.next(1, 59)} сек.`,
    operator: maleNames[random.next(0, maleNames.length - 1)],
    rating: random.next(1, 5),
    tags: reportTags,
    date
  }
}

const generateByStartDate = (end: Date) => {
  let date = new Date(end.valueOf());
  const result = []

  const random = Random(9)
  const dayCount = 385

  for (let i = 0; i < dayCount; i++) {
    const callsPerDay = random.next(15, 55)
    for (let j = 0; j < callsPerDay; j++) {
      result.push(generateReport(i, j, date, random))
    }
    date = new Date(date.valueOf())
    date.setDate(date.getDate() - 1)
  }

  return result
}

export const generateReports = (filter: ReportsFilter, page: number): Promise<{ reports: Report[], total: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = generateByStartDate(new Date())

      if (filter.client) {
        result = result
          .filter((r) => r.client.toLocaleLowerCase().indexOf(filter?.client || '') !== -1)
      }

      if (filter.operator) {
        result = result
          .filter((r) => r.operator.toLocaleLowerCase().indexOf(filter?.operator || '') !== -1)
      }

      if (filter.rating) {
        result = result.filter((r) => r.rating === filter.rating)
      }

      if (filter.start) {
        result = result.filter((r) => new Date(
          r.date.getFullYear(),
          r.date.getMonth(),
          r.date.getDate())
           >= new Date(
            filter.start.getFullYear(),
            filter.start.getMonth(),
            filter.start.getDate()
          )
        )
      }

      if (filter.end) {
        result = result.filter((r) =>
          new Date(
            r.date.getFullYear(),
            r.date.getMonth(),
            r.date.getDate()
          ) <= new Date(
            filter.end.getFullYear(),
            filter.end.getMonth(),
            filter.end.getDate()
          )
        )
      }

      const total = result.length

      const perPage = 16

      result = result.slice((page - 1) * perPage, (page - 1) * perPage + perPage - 1)

      resolve({ reports: result, total })
    }, Random().new(50, 350))
  })
}

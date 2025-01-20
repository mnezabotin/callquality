import { generateReports } from '@/utils';
import { useQuery } from 'react-query'

export type Report = {
  key: React.Key;
  client: string
  duration: string
  operator: string
  rating: number
  tags: string[]
  date: Date
}

type Data = {
  reports: Report[]
  total: number
}

export type ReportsFilter = {
  start?: Date | null
  end?: Date | null
  client?: string
  operator?: string
  rating?: number
}

const endpoint = '/reports'

export const queryKeyReports = (filter: ReportsFilter, page: number) => [
  endpoint,
  page.toString(),
  filter.start ? filter.start.toLocaleString() : '',
  filter.end ? filter.end.toLocaleString() : '',
  filter.client || '',
  filter.operator || '',
  filter.rating,
]

const fetchReports = async (filter: ReportsFilter, page: number): Promise<Data> => {
  const data = await generateReports(filter, page)

  return data
}

export const useQueryReports = (filter: ReportsFilter, page: number) => useQuery({
  queryKey: queryKeyReports(filter, page),
  queryFn: () => fetchReports(filter, page),
  enabled: true
})

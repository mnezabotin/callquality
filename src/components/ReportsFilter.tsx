import { Badge, Button, Flex, Rate, Space, DatePicker } from "antd"
import { FilterFilled } from '@ant-design/icons'
import { useMemo, useState } from 'react'
import type { ReportsFilter as ReportsFilterType } from "@/queries"
import { DebounceInput } from "./DebounceInput"
import { Box } from "@/styles"

const { RangePicker } = DatePicker;

type Props = {
  filter: ReportsFilterType
  setFilter: (filter: ReportsFilterType) => void
}

export const ReportsFilter = ({
  filter,
  setFilter
}: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  const filterCount = useMemo(() => {
    let count = 0
    for (const [_, value] of Object.entries(filter || {})) {
      count += value ? 1 : 0
    }

    return count
  }, [filter])

  const onFilter = (name: string, value: string | Date | null | number) => {
    const newFilter = { ...filter }
    if (name === 'range') {
      newFilter['start'] = value ? value[0]?.$d : null
      newFilter['end'] = value ? value[1].$d : null
    } else {
      newFilter[name] = value
    }
    setFilter(newFilter)
  }

  return (
    <>
      <Flex justify="space-between" align="center">
        <Box fontSize="16px" fontWeight='bold'>
          {isOpen ? 'Фильтры:' : ''}
        </Box>
        <Badge count={filterCount}>
          <Button
            type={isOpen ? 'default' : 'primary'}
            shape="circle"
            icon={<FilterFilled />}
            size='large'
            onClick={() => setIsOpen(!isOpen)}
          />
        </Badge>
      </Flex>
      {isOpen && (
        <Box p='8px 0'>
          <Space wrap size='large'>
            <DebounceInput
              placeholder='Клиент'
              value={filter.client}
              onChange={(value) => onFilter('client', value)}
            />
            <DebounceInput
              placeholder='Оператор'
              value={filter.operator}
              onChange={(value) => onFilter('operator', value)}
            />
            <Rate value={filter.rating} onChange={(value) => onFilter('rating', value)} />
            <RangePicker placeholder={['Отчеты с', 'Отчеты по']} onChange={(value) => onFilter('range', value)} />
          </Space>
        </Box>
      )}
    </>
  )
}
import { ReportsTable, ReportsFilter } from '@/components'
import { useQueryReports } from "@/queries";
import { Box, Flex } from '@/styles';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';

export const Reports = (): JSX.Element => {
  const [filter, setFilter] = useState({})
  const [page, setPage] = useState(1)
  const { data } = useQueryReports(filter, page)

  useEffect(() => {
    setPage(1)
  }, [filter])

  return (
    <>
      <ReportsFilter filter={filter} setFilter={setFilter} />
      <br />
      <ReportsTable filter={filter} page={page} />
      <Flex p='16px' justifyContent='center' mt='32px'>
        <Pagination
          current={page}
          onChange={setPage}
          total={data?.total || 0}
          showSizeChanger={false}
          pageSize={16}
        />
      </Flex>
    </>
  )
}

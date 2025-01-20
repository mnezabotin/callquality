import { useQueryReports, type ReportsFilter } from "@/queries";
import { Empty, Rate, Table, Tag } from "antd"
import styled from "styled-components";

const { Column } = Table

type Props = {
  page?: number
  filter?: ReportsFilter
}

const StyledTable = styled(Table)`
  .ant-table {
    .ant-table-thead {
      position: sticky;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
`

export const ReportsTable = ({
  filter = {},
  page = 1
}: Props): JSX.Element => {
  const { data, isFetching } = useQueryReports(filter, page)

  return (
    <StyledTable
      dataSource={data?.reports}
      pagination={false}
      locale={{ emptyText: <Empty description='Отчеты отсутсвуют' image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}
      loading={isFetching}
      // scroll={{ y: 55 * 5 }}
    >
      <Column title="Клиент" dataIndex="client" key="client" />
      <Column title="Продолжительность звонка" dataIndex="duration" key="duration" />
      <Column title="Оператор" dataIndex="operator" key="operator" />
      <Column
        title="Качество звонка"
        key="rating"
        render={(_, record) => (
          <Rate value={record?.rating || 0} disabled />
        )}
      />
      <Column
        title="Оценка оператора"
        dataIndex="tags"
        key="tags"
        render={(tags: string[]) => (
          <>
            {tags?.map((tag) => {
              let color = tag.length > 10 ? 'geekblue' : 'green';
              if (tag === 'Вежливость') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )}
      />
      <Column
        title="Дата звонка"
        key="date"
        render={(_, record) => record?.date?.toLocaleDateString()}
      />
    </StyledTable>
  )
}

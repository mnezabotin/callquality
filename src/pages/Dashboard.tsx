import { Flex, Skeleton, Space } from 'antd'
import { PieChartFilled } from '@ant-design/icons'

export const Dashboard = (): JSX.Element => {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Flex gap="middle" vertical>
        <Space wrap>
          <Skeleton.Button />
          <Skeleton.Avatar  />
          <Skeleton.Input />
        </Space>
        <Skeleton.Input />
        <Space wrap>
          <Skeleton.Image />
          <Skeleton.Node style={{ width: 160 }} />
          <Skeleton.Node>
            <PieChartFilled style={{ fontSize: 40, color: '#bfbfbf' }} />
          </Skeleton.Node>
          <Skeleton.Image />
          <Skeleton.Node style={{ width: 160 }} />
          <Skeleton.Node>
            <PieChartFilled style={{ fontSize: 40, color: '#bfbfbf' }} />
          </Skeleton.Node>
          <Skeleton.Image />
          <Skeleton.Node style={{ width: 160 }} />
          <Skeleton.Node>
            <PieChartFilled style={{ fontSize: 40, color: '#bfbfbf' }} />
          </Skeleton.Node>
        </Space>
      </Flex>
      <Skeleton />
      <Skeleton />
    </>
  )
}

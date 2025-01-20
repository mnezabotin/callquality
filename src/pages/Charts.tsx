import { Flex, Skeleton, Space } from 'antd'
import { PieChartFilled } from '@ant-design/icons'

export const Charts = (): JSX.Element => {
  return (
    <>
      <Skeleton />
      <Flex gap="middle" vertical>
        <Space wrap>
          <Skeleton.Button />
          <Skeleton.Avatar  />
          <Skeleton.Input />
        </Space>
        <Skeleton.Button />
        <Skeleton.Input />
        <Space wrap>
          <Skeleton.Image />
          <Skeleton.Node style={{ width: 120 }} />
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
      <Flex gap="middle" vertical>
        <Space wrap>
          <Skeleton.Button />
          <Skeleton.Avatar  />
          <Skeleton.Input />
        </Space>
        <Skeleton.Button />
        <Skeleton.Input />
        <Space wrap>
          <Skeleton.Image />
          <Skeleton.Node style={{ width: 120 }} />
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
    </>
  )
}

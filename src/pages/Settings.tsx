import { Button, Flex, Space, Switch } from 'antd'
import { useContext } from 'react'
import { AppContextType, appContext } from '@/contexts'

export const Settings = (): JSX.Element => {
  const { theme, setTheme, setToken } = useContext(appContext) as AppContextType

  return (
    <Flex vertical gap={24}>
      <Flex align='center' gap={16}>
        <Switch
          value={theme === 'dark'}
          onChange={(value) => setTheme(value ? 'dark' : 'light')}
        />
        <span>Темная тема</span>
      </Flex>
      <Space>
        <Button
          color="primary"
          variant="filled"
        >
          Сбросить пароль
        </Button>
      </Space>
      <Space>
        <Button
          color="danger"
          variant="filled"
          onClick={() => setToken('')}
        >
          Выйти
        </Button>
      </Space>
    </Flex>
  )
}

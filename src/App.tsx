import { useContext, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutFilled,
  PieChartFilled,
  DatabaseFilled,
  SlidersFilled,
} from '@ant-design/icons'
import { ConfigProvider, Layout, Menu, theme } from 'antd'

import './index.css'
import { Logo } from '@/components'
import { AppContextType, appContext } from '@/contexts'
import { Charts, Dashboard, Reports, Settings } from './pages'

const { Sider, Content, Footer } = Layout

export default (): JSX.Element => {
  const { theme: selectedTheme } = useContext(appContext) as AppContextType

  const navigate= useNavigate()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(true)

  const routes = useMemo(() => [
    {
      key: '1',
      icon: <LayoutFilled />,
      label: 'Главная',
      path: '/dashboard',
    },
    {
      key: '2',
      icon: <PieChartFilled />,
      label: 'Графики',
      path: '/charts',
    },
    {
      key: '3',
      icon: <DatabaseFilled />,
      label: 'Отчеты',
      path: '/',
    },
    {
      key: '4',
      icon: <SlidersFilled />,
      label: 'Настройки',
      path: '/settings',
    }
  ], [])

  const defaultSelectedKeys = useMemo(() => {
    const route = routes.find((r) => r.path === location.pathname)

    return route ? [route.key] : ['1']
  }, [routes, location.pathname])

  const onNavigate = ({ key }: { key: string }) => {
    const route = routes.find((r) => r.key === key)
    navigate(route?.path || '/')
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: selectedTheme === 'dark' ? theme.darkAlgorithm : theme.compactAlgorithm
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme={selectedTheme}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            top: 0,
            left: 0,
          }}
        >
          <Logo />
          <Menu
            mode="inline"
            defaultSelectedKeys={defaultSelectedKeys}
            items={routes}
            theme={selectedTheme}
            onClick={onNavigate}
          />
        </Sider>
        <Layout style={{ background: selectedTheme === 'light' ? '#f5f5f5' : '#111' }}>
          <Content
            style={{
              margin: '24px 16px 0',
              padding: 24,
              minHeight: 280,
              background: selectedTheme === 'light' ? '#fff' : '#001529',
              borderRadius: '8px',
            }}
          >
            <Routes>
              <Route path='/' element={<Reports />} />
              <Route path='/charts' element={<Charts />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/settings'  element={<Settings />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              background: selectedTheme === 'light' ? '#f5f5f5' : '#111',
              color: selectedTheme === 'light' ? '#000' : '#fff'
            }}
          >
            Качество Звонков ©{new Date().getFullYear()} создано Максимом Незаботиным
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

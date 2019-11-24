import React from 'react'
import { SideMenu } from './SideMenu'
import { Layout } from 'antd'
import { variable } from '../variable'
const { Sider, Content } = Layout

export const Global: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <SideMenu />
      </Sider>
      <Content style={{ padding: 24, minHeight: '100vh', background: variable['@dark'] }}>{children}</Content>
    </Layout>
  )
}

import React from 'react'
import { SideMenu } from './SideMenu'
import { Layout } from 'antd'
const { Sider, Content } = Layout

export const Global: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <SideMenu />
      </Sider>
      <Content>{children}</Content>
    </Layout>
  )
}

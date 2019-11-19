import React from 'react'
import { SideMenu } from './SideMenu'
import { Layout } from 'antd'
const { Sider } = Layout

export const Global = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <SideMenu />
      </Sider>
    </Layout>
  )
}

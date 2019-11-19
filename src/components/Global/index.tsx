import React from 'react'
import { SideMenu } from './SideMenu'
import { Layout } from 'antd'
const { Sider } = Layout

interface Props {
  tableList: string[]
}

export const Global = ({ tableList }: Props) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <SideMenu tableList={tableList} />
      </Sider>
    </Layout>
  )
}

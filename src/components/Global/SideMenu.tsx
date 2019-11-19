import React from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu

interface Props {
  tableList: string[]
}

export const SideMenu = ({ tableList }: Props) => {
  return (
    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="appstore" />
            <span>Database 1</span>
          </span>
        }
      >
        {tableList.map((tableName, index) => (
          <Menu.Item key={index}>{tableName}</Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  )
}

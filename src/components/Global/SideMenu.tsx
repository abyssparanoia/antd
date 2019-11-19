import React, { useEffect } from 'react'
import { Menu, Icon } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTableList } from '../../modules/table'
import { ReduxStore } from '../../modules/reducer'

const { SubMenu } = Menu

interface Props {}

export const SideMenu = (_: Props) => {
  const table = useSelector<ReduxStore, ReduxStore['table']>((state: ReduxStore) => state.table)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTableList())
  }, [dispatch])

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
        {table.list.map((tableName, index) => (
          <Menu.Item key={index}>{tableName}</Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  )
}

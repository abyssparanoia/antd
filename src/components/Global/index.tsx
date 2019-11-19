import React from 'react'
import { SideMenu } from './SideMenu'

interface Props {
  tableList: string[]
}

export const Global = ({ tableList }: Props) => {
  return <SideMenu tableList={tableList} />
}

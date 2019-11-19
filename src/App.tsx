import React, { useEffect } from 'react'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTableList } from './modules/table'
import { ReduxStore } from './modules/reducer'

const App: React.FC = () => {
  const table = useSelector<ReduxStore, ReduxStore['table']>((state: ReduxStore) => state.table)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTableList())
  }, [dispatch])

  return (
    <div>
      <Button>テスト</Button>
      {table.list.map((tableName, index) => (
        <div key={index}>{tableName}</div>
      ))}
    </div>
  )
}

export default App

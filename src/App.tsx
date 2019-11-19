import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTableList } from './modules/table'
import { ReduxStore } from './modules/reducer'
import { Global } from './components/Global'

const App: React.FC = () => {
  const table = useSelector<ReduxStore, ReduxStore['table']>((state: ReduxStore) => state.table)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTableList())
  }, [dispatch])

  return (
    <div>
      <Global tableList={table.list} />
    </div>
  )
}

export default App

import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { State as TableState, reducer as tableReducer } from './table'

export interface ReduxStore {
  router: RouterState
  table: TableState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    table: tableReducer
  })

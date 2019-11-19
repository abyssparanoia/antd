import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

export interface ReduxStore {
  router: RouterState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  })

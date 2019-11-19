import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { createRootReducer } from './modules/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(thunk, logger, routerMiddleware(history)))
)

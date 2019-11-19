import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Dispatch } from 'redux'

const actionCreator = actionCreatorFactory('table')

export const actions = {
  list: actionCreator.async<void, { list: string[] }, Error>('list')
}

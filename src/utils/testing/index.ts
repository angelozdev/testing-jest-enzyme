import { ReactWrapper, ShallowWrapper } from 'enzyme'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../../redux/reducers'
import { State } from '../../redux/redux.store'
import Thunk from 'redux-thunk'

export const findByTestAttr = (
   wrapper: ShallowWrapper | ReactWrapper,
   value: string | number
) => {
   if (typeof value === 'number') {
      return wrapper.find(`[data-test=${value}]`)
   }

   return wrapper.find(`[data-test="${value}"]`)
}

export const storeFactory = (initialState: State) => {
   return createStore(reducer, initialState, applyMiddleware(Thunk))
}

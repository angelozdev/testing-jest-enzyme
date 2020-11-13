import { ReactWrapper, ShallowWrapper } from 'enzyme'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../../redux/reducers'
import { State } from '../../redux/redux.store'
import Thunk from 'redux-thunk'
import { status } from '../../redux/reducers/guessWord.reducer'

export const findByTestAttr = (
   wrapper: ShallowWrapper | ReactWrapper,
   value: string | number
) => {
   if (typeof value === 'number') {
      return wrapper.find(`[data-test=${value}]`)
   }

   return wrapper.find(`[data-test="${value}"]`)
}

const initialState: State = {
   guessWord: {
      data: {
         guessedWords: [],
         isCorrectWord: false
      },
      error: null,
      status: status.IDLE
   },
   secretWord: {
      data: {
         secretWord: null
      },
      error: null,
      status: status.IDLE
   }
}

export const storeFactory = (i: State = initialState) => {
   return createStore(reducer, i, applyMiddleware(Thunk))
}

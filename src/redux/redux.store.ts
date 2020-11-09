import { compose, createStore } from 'redux'
import reducer from './reducers'
import { GuessWordState } from './reducers/guessWord.reducer'

/* Types */
export interface State {
   guessWord: GuessWordState
}

const composeEnhancers =
   (typeof window !== 'undefined' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose

const store = createStore(reducer, composeEnhancers())

export default store

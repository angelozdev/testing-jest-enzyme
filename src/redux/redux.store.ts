import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducers'
import { GuessWordState } from './reducers/guessWord.reducer'
import { SecretWordState } from './reducers/secretWord.reducer'
import Thunk from 'redux-thunk'

/* Types */
export interface State {
   guessWord: GuessWordState
   secretWord: SecretWordState
}

const composeEnhancers =
   (typeof window !== 'undefined' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose

const store = createStore(
   reducer,
   compose(applyMiddleware(Thunk), composeEnhancers())
)

export default store

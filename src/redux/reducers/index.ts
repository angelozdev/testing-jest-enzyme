import { combineReducers } from 'redux'
import guessWord from './guessWord.reducer'
import secretWord from './secretWord.reducer'

const reducer = combineReducers({
   guessWord,
   secretWord
})

export default reducer

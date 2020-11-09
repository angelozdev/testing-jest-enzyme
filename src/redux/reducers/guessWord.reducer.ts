import { actionTypes, Action } from '../actions/guessWord.action'

/* Types */
export enum status {
   IDLE = 'idle',
   LOADING = 'loading',
   SUCCESS = 'success',
   FAILED = 'failed'
}

export interface GuessWordState {
   status: status
   data: {
      isCorrectWord: boolean
   }
   error: null | Error
}

/* Initial state */
const initialState: GuessWordState = {
   status: status.IDLE,
   data: {
      isCorrectWord: false
   },
   error: null
}

/* Reducer */
function guessWord(
   state: GuessWordState = initialState,
   action?: Action
): GuessWordState {
   switch (action?.type) {
      case actionTypes.GUESS_WORD_REQUEST:
         return {
            ...state,
            status: status.LOADING
         }

      case actionTypes.GUESS_WORD_FAILED:
         return {
            ...state,
            status: status.FAILED,
            error: action.error
         }

      case actionTypes.GUESS_WORD_SUCCESS:
         return {
            ...state,
            status: status.SUCCESS,
            data: {
               isCorrectWord: true
            }
         }

      case actionTypes.GUESS_WORD_IDLE:
         return {
            ...state,
            status: status.IDLE,
            error: null
         }

      default:
         return state
   }
}

export default guessWord

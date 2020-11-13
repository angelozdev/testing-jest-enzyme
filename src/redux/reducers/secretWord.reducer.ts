import { AxiosError } from 'axios'
import { actionTypes, secretWordActions } from '../actions/secretWord.action'
import { status } from './guessWord.reducer'

/* Types */
export interface SecretWordState {
   data: {
      secretWord: string | null
   }
   status: status
   error: AxiosError | null
}

const localState: SecretWordState = {
   data: {
      secretWord: null
   },
   status: status.IDLE,
   error: null
}

function secretWordReducer(
   state: SecretWordState = localState,
   action: secretWordActions
): SecretWordState {
   switch (action.type) {
      case actionTypes.SECRET_WORD_IDLE:
         return {
            ...state,
            status: status.IDLE
         }
      case actionTypes.SECRET_WORD_REQUEST:
         return {
            ...state,
            status: status.LOADING
         }
      case actionTypes.SECRET_WORD_FAILED:
         return {
            ...state,
            status: status.FAILED,
            error: action.error
         }
      case actionTypes.SECRET_WORD_SUCCESS:
         return {
            ...state,
            status: status.SUCCESS,
            data: {
               secretWord: action.word
            }
         }
      default:
         return state
   }
}

export default secretWordReducer

import { Dispatch } from 'redux'
import { State } from '../redux.store'

/* Types */
export enum actionTypes {
   GUESS_WORD_IDLE = 'GUESS_WORD_IDLE',
   GUESS_WORD_REQUEST = 'GUESS_WORD_REQUEST',
   GUESS_WORD_FAILED = 'GUESS_WORD_FAILED',
   GUESS_WORD_SUCCESS = 'GUESS_WORD_SUCCESS'
}

interface guessWordIdleAction {
   type: typeof actionTypes.GUESS_WORD_IDLE
}

interface guessWordRequestAction {
   type: typeof actionTypes.GUESS_WORD_REQUEST
}

interface guessWordFailedAction {
   type: typeof actionTypes.GUESS_WORD_FAILED
   error: null | Error
   guessedWord: string
}

interface guessWordSuccessAction {
   type: typeof actionTypes.GUESS_WORD_SUCCESS
}

export type GuessWordAction =
   | guessWordIdleAction
   | guessWordRequestAction
   | guessWordFailedAction
   | guessWordSuccessAction

/* Actions */
export const guessWordIdle = (): guessWordIdleAction => ({
   type: actionTypes.GUESS_WORD_IDLE
})

export const guessWordRequest = (): guessWordRequestAction => ({
   type: actionTypes.GUESS_WORD_REQUEST
})

export const guessWordFailed = (
   error: Error,
   guessedWord: string
): guessWordFailedAction => ({
   type: actionTypes.GUESS_WORD_FAILED,
   error,
   guessedWord
})

export const guessWordSuccess = (): guessWordSuccessAction => ({
   type: actionTypes.GUESS_WORD_SUCCESS
})

export const guessedWord = (guessedWord: string) => {
   return (dispatch: Dispatch, getState: () => State) => {
      dispatch(guessWordIdle())
      dispatch(guessWordRequest())

      const {
         guessWord: { data }
      } = getState()

      if (guessedWord !== data.secretWord) {
         return dispatch(guessWordFailed(new Error('No equal'), guessedWord))
      }

      dispatch(guessWordSuccess())
   }
}

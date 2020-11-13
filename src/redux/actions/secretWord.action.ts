import axios, { AxiosError } from 'axios'
import { url } from 'inspector'
import { Dispatch } from 'redux'

/* Types */
export enum actionTypes {
   SECRET_WORD_IDLE = 'SECRET_WORD_IDLE',
   SECRET_WORD_REQUEST = 'SECRET_WORD_REQUEST',
   SECRET_WORD_FAILED = 'SECRET_WORD_FAILED',
   SECRET_WORD_SUCCESS = 'SECRET_WORD_SUCCESS'
}

interface secretWordIdleAction {
   type: typeof actionTypes.SECRET_WORD_IDLE
}

interface secretWordRequestAction {
   type: typeof actionTypes.SECRET_WORD_REQUEST
}

interface secretWordFailedAction {
   type: typeof actionTypes.SECRET_WORD_FAILED
   error: AxiosError | null
}

interface secretWordSuccessAction {
   type: typeof actionTypes.SECRET_WORD_SUCCESS
   word: string
}

export type secretWordActions =
   | secretWordIdleAction
   | secretWordRequestAction
   | secretWordFailedAction
   | secretWordSuccessAction

/* Actions */
export const secretWordIdle = (): secretWordIdleAction => ({
   type: actionTypes.SECRET_WORD_IDLE
})

export const secretWordRequest = (): secretWordRequestAction => ({
   type: actionTypes.SECRET_WORD_REQUEST
})

export const secretWordFailed = (
   error: AxiosError
): secretWordFailedAction => ({
   type: actionTypes.SECRET_WORD_FAILED,
   error
})

export const secretWordSuccess = (word: string): secretWordSuccessAction => ({
   type: actionTypes.SECRET_WORD_SUCCESS,
   word
})

export function secretWord() {
   return async (dispatch: Dispatch): Promise<void> => {
      dispatch(secretWordIdle())
      dispatch(secretWordRequest())

      return axios({
         method: 'GET',
         baseURL: 'http://localhost:3030',
         url: '/'
      })
         .then(({ data: word }) => {
            console.log(word)
            dispatch(secretWordSuccess(word))
         })
         .catch((error) => {
            dispatch(secretWordFailed(error))
         })
   }
}

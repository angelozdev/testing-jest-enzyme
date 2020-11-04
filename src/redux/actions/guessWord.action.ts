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
}

interface guessWordSuccessAction {
   type: typeof actionTypes.GUESS_WORD_SUCCESS
}

/* Actions */
export const guessWordIdle = (): guessWordIdleAction => ({
   type: actionTypes.GUESS_WORD_IDLE
})

export const guessWordRequest = (): guessWordRequestAction => ({
   type: actionTypes.GUESS_WORD_REQUEST
})

export const guessWordFailed = (): guessWordFailedAction => ({
   type: actionTypes.GUESS_WORD_FAILED
})

export const guessWordSuccess = (): guessWordSuccessAction => ({
   type: actionTypes.GUESS_WORD_SUCCESS
})

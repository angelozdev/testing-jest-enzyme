import {
   actionTypes,
   guessWordIdle,
   guessWordSuccess,
   guessWordRequest,
   guessWordFailed
} from '../../../redux/actions/guessWord.action'

describe('Actions return correct type', () => {
   test("returns the action with type 'GUESS_WORD_IDLE'", () => {
      const action = guessWordIdle()
      const expectedAction = {
         type: actionTypes.GUESS_WORD_IDLE
      }

      expect(action).toEqual(expectedAction)
   })

   test("returns the action with type 'GUESS_WORD_SUCCESS'", () => {
      const action = guessWordSuccess()
      const expectedAction = {
         type: actionTypes.GUESS_WORD_SUCCESS
      }

      expect(action).toEqual(expectedAction)
   })

   test("returns the action with type 'GUESS_WORD_REQUEST'", () => {
      const action = guessWordRequest()
      const expectedAction = {
         type: actionTypes.GUESS_WORD_REQUEST
      }

      expect(action).toEqual(expectedAction)
   })

   test("returns the action with type 'GUESS_WORD_FAILED'", () => {
      const action = guessWordFailed()
      const expectedAction = {
         type: actionTypes.GUESS_WORD_FAILED
      }

      expect(action).toEqual(expectedAction)
   })
})

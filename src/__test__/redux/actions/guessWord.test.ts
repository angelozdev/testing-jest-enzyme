import {
   actionTypes,
   guessWordIdle,
   guessWordSuccess,
   guessWordRequest,
   guessWordFailed
} from '../../../redux/actions/guessWord.action'
import getLetterMatchCount from '../../../utils/getLetterMatchCount'

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
      const errorMock = new Error('Testing')
      const wordMock = 'train'
      const secretWordMock = 'party'
      const letterMock = getLetterMatchCount(wordMock, secretWordMock)

      const action = guessWordFailed(errorMock, wordMock, letterMock)
      const expectedAction = {
         type: actionTypes.GUESS_WORD_FAILED,
         error: errorMock,
         letterMatchCount: letterMock,
         guessedWord: wordMock
      }

      expect(action).toEqual(expectedAction)
   })
})

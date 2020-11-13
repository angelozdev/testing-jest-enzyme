import {
   actionTypes,
   secretWordSuccess,
   secretWordFailed,
   secretWordIdle,
   secretWordRequest,
   secretWord
} from '../../../redux/actions/secretWord.action'

import { AxiosError } from 'axios'
import moxios from 'moxios'
import { storeFactory } from '../../../utils/testing'

describe('secretWord action creator', () => {
   /* Setup */
   beforeEach(() => {
      moxios.install()
   })

   afterEach(() => {
      moxios.uninstall()
   })

   /* Tests */
   test('adds response word to the state', (done) => {
      const secretWordMock = 'party'
      const store = storeFactory()

      moxios.wait(() => {
         let request = moxios.requests.mostRecent()
         request.respondWith({
            status: 200,
            response: secretWordMock
         })
      })

      store
         .dispatch(secretWord())
         .then(() => {
            const newState = store.getState()
            expect(newState.secretWord.data.secretWord).toEqual(secretWordMock)
            done()
         })
         .catch((err: AxiosError) => {
            done(err)
         })
   })
})

describe('Actions return correct type', () => {
   test("Returns the action with type 'SECRET_WORD_SUCCESS'", () => {
      const wordMock = 'hola'
      const action = secretWordSuccess(wordMock)

      const expectedAction = {
         type: actionTypes.SECRET_WORD_SUCCESS,
         word: wordMock
      }

      expect(action).toEqual(expectedAction)
   })

   test("Returns the action with type 'SECRET_WORD_IDLE'", () => {
      const action = secretWordIdle()

      const expectedAction = {
         type: actionTypes.SECRET_WORD_IDLE
      }

      expect(action).toEqual(expectedAction)
   })

   test("Returns the action with type 'SECRET_WORD_REQUEST'", () => {
      const action = secretWordRequest()

      const expectedAction = {
         type: actionTypes.SECRET_WORD_REQUEST
      }

      expect(action).toEqual(expectedAction)
   })

   test("Returns the action with type 'SECRET_WORD_FAILED'", () => {
      const errorMock = new Error('Testing')
      const action = secretWordFailed(errorMock as AxiosError)

      const expectedAction = {
         type: actionTypes.SECRET_WORD_FAILED,
         error: errorMock
      }

      expect(action).toEqual(expectedAction)
   })
})

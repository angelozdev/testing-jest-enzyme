import {
   actionTypes,
   secretWordSuccess,
   secretWordFailed,
   secretWordIdle,
   secretWordRequest,
   secretWord
} from '../../../redux/actions/secretWord.action'

import axios, { AxiosError } from 'axios'
/* import moxios from 'moxios' */
import { storeFactory } from '../../../utils/testing'
jest.mock('axios')

describe('secretWord action creator', () => {
   /* Setup */
   /* beforeEach(() => {
      moxios.install()
   })

   afterEach(() => {
      moxios.uninstall()
   }) */

   /* Tests */
   test('adds response word to the state', (done) => {
      const dataMock = { data: 'party' }
      const store = storeFactory()

      const mockAxios = {
         get: axios.get as jest.Mock
      }

      mockAxios.get.mockImplementationOnce(() => {
         return Promise.resolve(dataMock)
      })

      store
         .dispatch(secretWord())
         .then(() => {
            const newState = store.getState()
            expect(newState.secretWord.data.secretWord).toEqual(dataMock.data)
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

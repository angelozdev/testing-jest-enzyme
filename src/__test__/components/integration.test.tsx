import { storeFactory } from '../../utils/testing'
import { guessedWord } from '../../redux/actions/guessWord.action'
import { status } from '../../redux/reducers/guessWord.reducer'
import { Store } from 'redux'
import { State } from '../../redux/redux.store'

describe('guessedWord action dispatcher', () => {
   const secretWord = 'party'
   const unsuccessfulGuess = 'train'

   describe('no guessed words', () => {
      /* Setup */
      let store: Store
      const initialState: State = {
         guessWord: {
            data: {
               secretWord,
               isCorrectWord: false,
               guessedWords: []
            },
            error: null,
            status: status.IDLE
         }
      }
      beforeEach(() => {
         store = storeFactory(initialState)
      })

      /* Tests */
      test('updates state correctly for unsuccessful guess', () => {
         store.dispatch(guessedWord(unsuccessfulGuess))

         const expectedState: State = {
            ...initialState,
            guessWord: {
               ...initialState.guessWord,
               error: Error('No equal'),
               status: status.FAILED,
               data: {
                  ...initialState.guessWord.data,
                  guessedWords: [
                     {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                     }
                  ]
               }
            }
         }
         const newState = store.getState()
         expect(newState).toEqual(expectedState)
      })

      test('updates state correctly for successful guess', async () => {
         store.dispatch(guessedWord(secretWord))

         const expectedState: State = {
            ...initialState,
            guessWord: {
               ...initialState.guessWord,
               status: status.SUCCESS,
               data: {
                  ...initialState.guessWord.data,
                  isCorrectWord: true
               }
            }
         }

         const newState = store.getState()
         expect(newState).toEqual(expectedState)
      })
   })

   describe('some guessed words', () => {
      const guessedWordsMock = [
         {
            guessedWord: 'agile',
            letterMatchCount: 1
         }
      ]

      /* Setup */
      let store: Store
      const initialState: State = {
         guessWord: {
            data: {
               secretWord,
               isCorrectWord: false,
               guessedWords: guessedWordsMock
            },
            error: null,
            status: status.IDLE
         }
      }

      beforeEach(() => {
         store = storeFactory(initialState)
      })

      test('updates state correctly for unsuccessful guess', () => {
         store.dispatch(guessedWord(unsuccessfulGuess))

         const expectedStore: State = {
            ...initialState,
            guessWord: {
               ...initialState.guessWord,
               data: {
                  ...initialState.guessWord.data,
                  guessedWords: [
                     ...initialState.guessWord.data.guessedWords,
                     {
                        letterMatchCount: 3,
                        guessedWord: unsuccessfulGuess
                     }
                  ]
               },
               error: new Error('No equal'),
               status: status.FAILED
            }
         }
         const newState = store.getState()
         expect(newState).toEqual(expectedStore)
      })

      test('updates state correctly for successful guess', () => {
         store.dispatch(guessedWord(secretWord))

         const expectedStore: State = {
            ...initialState,
            guessWord: {
               ...initialState.guessWord,
               data: {
                  ...initialState.guessWord.data,
                  isCorrectWord: true
               },
               status: status.SUCCESS,
               error: null
            }
         }
         const newState = store.getState()
         expect(newState).toEqual(expectedStore)
      })
   })
})

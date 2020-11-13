import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { findByTestAttr, storeFactory } from '../../utils/testing'
import { GuessedWords } from '../../components'
import { TestId } from '../../components/GuessedWords'
import { Provider } from 'react-redux'
import { State } from '../../redux/redux.store'
import { status } from '../../redux/reducers/guessWord.reducer'

const initialState: State = {
   secretWord: {
      data: {
         secretWord: null
      },
      error: null,
      status: status.IDLE
   },
   guessWord: {
      data: {
         guessedWords: [],
         isCorrectWord: false
      },
      error: null,
      status: status.IDLE
   }
}

const setup = (i: State = initialState) => {
   const store = storeFactory(i)
   return mount(
      <Provider store={store}>
         <GuessedWords />
      </Provider>
   )
}

describe('if there are no words guessed', () => {
   /* Setup */
   let wrapper: ReactWrapper

   beforeEach(() => {
      wrapper = setup()
   })

   /* Tests */
   test('renders without error', () => {
      const component = findByTestAttr(wrapper, TestId.COMPONENT_GUESSED_WORDS)

      expect(component).toHaveLength(1)
   })

   test('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, TestId.GUESS_INSTRUCTIONS)

      expect(instructions).not.toHaveLength(0)
   })

   test('no renders "guessed words" section', () => {
      const guessedWordsSection = findByTestAttr(wrapper, TestId.GUESSED_WORDS)

      expect(guessedWordsSection).toHaveLength(0)
   })
})

describe('if there are words guessed', () => {
   /* Mocks */
   const guessedWordsMock = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 }
   ]

   /* Setup */
   let wrapper: ReactWrapper

   beforeEach(() => {
      const i: State = {
         ...initialState,
         guessWord: {
            ...initialState.guessWord,
            data: {
               ...initialState.guessWord.data,
               guessedWords: guessedWordsMock
            }
         }
      }
      wrapper = setup(i)
   })

   /* Tests */
   test('renders without errors', () => {
      const component = findByTestAttr(wrapper, TestId.COMPONENT_GUESSED_WORDS)

      expect(component).toHaveLength(1)
   })

   test('renders "guessed words" section', () => {
      const guessedWordsSection = findByTestAttr(wrapper, TestId.GUESSED_WORDS)

      expect(guessedWordsSection).toHaveLength(1)
   })

   test('renders correct of guessed words', () => {
      const guessedWordsItems = findByTestAttr(wrapper, TestId.GUESSED_WORD)

      expect(guessedWordsItems).toHaveLength(guessedWordsMock.length)
   })

   test('no renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, TestId.GUESS_INSTRUCTIONS)

      expect(instructions).toHaveLength(0)
   })
})

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr } from '../../utils/testing'
import { GuessedWords } from '../../components'
import { Props, TestId } from '../../components/GuessedWords'

const defaultProps: Props = {
   guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

const setup = (props: Props = defaultProps) => {
   return shallow(<GuessedWords {...props} />)
}

describe('if there are no words guessed', () => {
   /* Setup */
   let wrapper: ShallowWrapper

   beforeEach(() => {
      wrapper = setup({ guessedWords: [] })
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
})

describe('if there are words guessed', () => {
   /* Setup */
   let wrapper: ShallowWrapper

   beforeEach(() => {
      wrapper = setup({ guessedWords })
   })

   /* Mocks */
   const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 }
   ]

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

      expect(guessedWordsItems).toHaveLength(guessedWords.length)
   })
})

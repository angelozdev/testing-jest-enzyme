import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr } from '../../utils/testing'
import { GuessedWords } from '../../components'
import { Props } from '../../components/GuessedWords'

const defaultProps: Props = {
   guessedWords: [
      {
         guessedWord: 'train',
         letterMatchCount: 3
      }
   ]
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
      const component = findByTestAttr(wrapper, 'component-guessed-words')

      expect(component).toHaveLength(1)
   })

   test('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions')

      expect(instructions).not.toHaveLength(0)
   })
})
describe('if there are words guessed', () => {})

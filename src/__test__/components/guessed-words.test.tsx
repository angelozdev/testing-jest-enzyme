import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../utils/testing'
import { GuessedWords } from '../../components'
import { Props } from '../../components/GuessedWords'

const defaultProps: Props = {
   geuessedWords: [
      {
         guessedWord: 'train',
         letterMatchCount: 3
      }
   ]
}

const setup = (props: Props = defaultProps) => {
   return shallow(<GuessedWords {...props} />)
}

describe('<GuessedWords />', () => {
   test('renders without error', () => {
      const wrapper = setup()

      expect(wrapper).toHaveLength(1)
   })
})

describe('if there are no words guessed', () => {})
describe('if there are words guessed', () => {})

import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import { findByTestAttr, storeFactory } from '../../utils/testing'
import { Input } from '../../components'
import { Provider } from 'react-redux'
import { Components } from '../../components/Input'
import { State } from '../../redux/redux.store'
import { status } from '../../redux/reducers/guessWord.reducer'

/* Types */
const initialState: State = {
   guessWord: {
      status: status.IDLE,
      data: {
         isCorrectWord: false
      },
      error: null
   }
}

const setup = (i: State = initialState): ReactWrapper => {
   const store = storeFactory(i)
   const wrapper = mount(
      <Provider store={store}>
         <Input />
      </Provider>
   )

   return wrapper
}

setup()

describe('render', () => {
   describe('word has not been guessed', () => {
      let wrapper: ReactWrapper

      /* Setup */
      beforeEach(() => {
         wrapper = setup(initialState)
      })

      /* Test */
      test('renders component without error', () => {
         const container = findByTestAttr(wrapper, Components.CONTAINER)

         expect(container).toHaveLength(1)
      })
      test('renders input box', () => {
         const input = findByTestAttr(wrapper, Components.INPUT)

         expect(input).toHaveLength(1)
      })

      test('renders submit button', () => {
         const button = findByTestAttr(wrapper, Components.BUTTON)

         expect(button).toHaveLength(1)
      })
   })

   describe('word has been guessed', () => {
      test('renders component without error', () => {})
      test('does not renders input box', () => {})
      test('does not renders submit button', () => {})
   })
})

describe('update state', () => {})

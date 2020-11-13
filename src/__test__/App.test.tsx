import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from '../App'
import { Provider } from 'react-redux'
import { storeFactory } from '../utils/testing'

describe('<App />', () => {
   let wrapper: ShallowWrapper

   beforeEach(() => {
      const store = storeFactory()
      wrapper = shallow(
         <Provider store={store}>
            <App />
         </Provider>
      )
   })
   it('renders without crashing', () => {
      expect(wrapper).toHaveLength(1)
   })
})

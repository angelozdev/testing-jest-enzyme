import React from 'react'
import { shallow } from 'enzyme'
import { Congrats } from '../../components/'

describe('<Congrats />', () => {
   test('renders without crashing', () => {
      const wrapper = shallow(<Congrats />)

      expect(wrapper).toHaveLength(1)
   })
})

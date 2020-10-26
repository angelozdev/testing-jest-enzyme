import React from 'react'
import { shallow } from 'enzyme'
import { Congrats } from '../../components/'
import { Props } from '../../components/congrats'

const setup = (props: Props) => shallow(<Congrats {...props} />)

describe('<Congrats />', () => {
   test('renders without crashing', () => {
      const wrapper = setup({ success: false })

      expect(wrapper).toHaveLength(1)
   })
})

test('renders no text when success prop is false', () => {})

test('renders non-empty congrats message when success prop is true', () => {})

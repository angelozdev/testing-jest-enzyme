import React from 'react'
import { shallow } from 'enzyme'
import { Congrats } from '../../components/'
import { Props } from '../../components/congrats'
import { findByTestAttr } from '../../utils/testing'

const setup = (props?: Props) => shallow(<Congrats {...props} />)

describe('<Congrats />', () => {
   test('renders without crashing', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'component-congrats')

      expect(component).toHaveLength(1)
   })
})

test('renders no text when success prop is false', () => {
   const wrapper = setup({ success: false })
   const component = findByTestAttr(wrapper, 'component-congrats')

   expect(component.prop('hidden')).toBe(false)
})

test('renders non-empty congrats message when success prop is true', () => {
   const wrapper = setup({ success: true })
   const component = findByTestAttr(wrapper, 'component-congrats')

   expect(component.prop('hidden')).toBe(true)
})

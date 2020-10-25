import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

test('renders without crashing', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.text()).toMatch(/world/i)
  expect(wrapper).toBeTruthy()
})

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('renders without crashing', () => {
  const wrapper = shallow(<App />)

  const app = wrapper.find('[data-test="app"]')

  expect(app).toBeTruthy()
})

test('renders button', () => {})

test('renders counter display', () => {})

test('counter starts at 0', () => {})

test('clicking on button increments counter display', () => {})

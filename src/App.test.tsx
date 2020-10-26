import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('renders without crashing', () => {
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find('[data-test="component-app"]')

  expect(appComponent).toHaveLength(1)
})

test('renders button', () => {
  const wrapper = shallow(<App />)
  const counterDisplay = wrapper.find('[data-test="counter-display"]')

  expect(counterDisplay).toHaveLength(1)
})

test('renders counter display', () => {
  const wrapper = shallow(<App />)
  const incrementButton = wrapper.find('[data-test="increment-button"]')

  expect(incrementButton).toHaveLength(1)
})

test('counter starts at 0', () => {})

test('clicking on button increments counter display', () => {})

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'

/** Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 **/
const setup = (): ShallowWrapper => shallow(<App />)

/** Find a react component by data-test attribute
 * @function findByTestAttribute
 * @returns {ShallowWrapper}
 **/
const findByTestAttribute = (
  wrapper: ShallowWrapper,
  value: string
): ShallowWrapper => {
  return wrapper.find(`[data-test='${value}']`)
}

test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttribute(wrapper, 'component-app')

  expect(appComponent).toHaveLength(1)
})

test('renders button', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttribute(wrapper, 'counter-display')

  expect(counterDisplay).toHaveLength(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const incrementButton = findByTestAttribute(wrapper, 'increment-button')

  expect(incrementButton).toHaveLength(1)
})

test('counter starts at 0', () => {
  const wrapper = setup()
  const counter = findByTestAttribute(wrapper, 'counter')

  expect(counter.text()).toBe('0')
})

test('clicking on button increments counter display', () => {})

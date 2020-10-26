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

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttribute(wrapper, 'counter-display')

  expect(counterDisplay).toHaveLength(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const incrementButton = findByTestAttribute(wrapper, 'increment-button')

  expect(incrementButton).toHaveLength(1)
})

test('renders decrement button', () => {
  const wrapper = setup()
  const decrementButton = findByTestAttribute(wrapper, 'decrement-button')

  expect(decrementButton).toHaveLength(1)
})

test('counter starts at 0', () => {
  const wrapper = setup()
  const counter = findByTestAttribute(wrapper, 'counter')

  expect(counter.text()).toBe('0')
})

test('clicking on button increment counter display', () => {
  const wrapper = setup()

  // Find the button
  const button = findByTestAttribute(wrapper, 'increment-button')

  // click th ebutton
  button.simulate('click')

  // find the display and test that the number has been incremented
  const counter = findByTestAttribute(wrapper, 'counter')

  expect(counter.text()).toBe('1')
})

test('clicking on button decrement counter display', () => {
  const wrapper = setup()

  // Find the button
  const button = findByTestAttribute(wrapper, 'decrement-button')

  // click th ebutton
  button.simulate('click')

  // find the display and test that the number has been decrement
  const counter = findByTestAttribute(wrapper, 'counter')

  expect(counter.text()).toBe('-1')
})

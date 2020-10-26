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
 * @param {ShallowWrapper} wrapper - Enzyme shallow
 * @param {string} value - Value of data-test
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

test('counter starts at 0', () => {
  const wrapper = setup()
  const counter = findByTestAttribute(wrapper, 'counter')

  expect(counter.text()).toBe('0')
})

describe('Increment Button', () => {
  test('renders increment button', () => {
    const wrapper = setup()
    const incrementButton = findByTestAttribute(wrapper, 'increment-button')

    expect(incrementButton).toHaveLength(1)
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
})

describe('Decrement Button', () => {
  test('renders decrement button', () => {
    const wrapper = setup()
    const decrementButton = findByTestAttribute(wrapper, 'decrement-button')

    expect(decrementButton).toHaveLength(1)
  })

  test('clicking on button decrements when the counter is greater than 0', () => {
    const wrapper = setup()

    // click the increment button
    const incButton = findByTestAttribute(wrapper, 'increment-button')
    incButton.simulate('click')

    // click the decrement button
    const decButton = findByTestAttribute(wrapper, 'decrement-button')
    decButton.simulate('click')

    // find the display and test that the number has been decrement
    const counter = findByTestAttribute(wrapper, 'counter')

    expect(counter.text()).toBe('0')
  })
})

describe('Error message', () => {
  test("The error doesn't show when not needed", () => {
    const wrapper = setup()

    const errorDiv = findByTestAttribute(wrapper, 'error-message')

    expect(errorDiv.prop('hidden')).toBeTruthy()
  })
})

describe('Counter is 0 and decrement button is clicked', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = setup()

    const decButton = findByTestAttribute(wrapper, 'decrement-button')
    decButton.simulate('click')
  })

  test('Show message error when decrement button is clicked when the counter is 0', () => {
    const errorMessage = findByTestAttribute(wrapper, 'error-message')

    expect(errorMessage.prop('hidden')).toBe(false)
  })

  test('Increment button hidden message error', () => {
    const incButton = findByTestAttribute(wrapper, 'increment-button')
    incButton.simulate('click')

    const errorMessage = findByTestAttribute(wrapper, 'error-message')
    expect(errorMessage.prop('hidden')).toBe(true)
  })

  test("Counter display doesn't change", () => {
    const counter = findByTestAttribute(wrapper, 'counter').text()

    expect(counter).toBe('0')
  })
})

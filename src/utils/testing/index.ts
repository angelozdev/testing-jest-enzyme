import { ShallowWrapper } from 'enzyme'

export const findByTestAttr = (
   wrapper: ShallowWrapper,
   value: string | number
) => {
   if (typeof value === 'number') {
      return wrapper.find(`[data-test=${value}]`)
   }

   return wrapper.find(`[data-test="${value}"]`)
}

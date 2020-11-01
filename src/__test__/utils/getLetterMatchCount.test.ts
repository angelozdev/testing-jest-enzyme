import getLetterMatchCount from '../../utils/getLetterMatchCount'

describe('getLetterMatchCount function', () => {
   const secretWord = 'party'

   test('renders the correct count when are no matching letters', () => {
      const letterMatchCount = getLetterMatchCount('bones', secretWord)

      expect(letterMatchCount).toBe(0)
   })

   test('renders the correct count when there are 3 matching letters', () => {
      const letterMatchCount = getLetterMatchCount('train', secretWord)

      expect(letterMatchCount).toBe(3)
   })

   test('renders the correct count when are duplicate in the guess', () => {
      const letterMatchCount = getLetterMatchCount('parka', secretWord)

      expect(letterMatchCount).toBe(3)
   })
})

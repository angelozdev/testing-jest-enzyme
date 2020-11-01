function getLetterMatchCount(guessedWord: string, secretWord: string): number {
   const secretLetterSet = new Set(secretWord)
   const gussedLetterSet = new Set(guessedWord)

   const count = Array.from(secretLetterSet).filter((word) => {
      return gussedLetterSet.has(word)
   }).length

   return count
}
export default getLetterMatchCount

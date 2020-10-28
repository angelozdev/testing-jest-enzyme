import React from 'react'

export interface Props {
   guessedWords: Array<{
      guessedWord: string
      letterMatchCount: number
   }>
}

const GuessedWords = ({ guessedWords }: Props): JSX.Element => {
   const hasGuessedWords = guessedWords.length !== 0
   return (
      <div data-test="component-guessed-words">
         {!hasGuessedWords && (
            <span data-test="guess-instructions">
               Try to guess the secrect word!
            </span>
         )}
      </div>
   )
}

export default GuessedWords

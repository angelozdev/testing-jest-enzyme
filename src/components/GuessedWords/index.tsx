import React from 'react'

export interface Props {
   guessedWords: Array<{
      guessedWord: string
      letterMatchCount: number
   }>
}
export enum TestId {
   COMPONENT_GUESSED_WORDS,
   GUESS_INSTRUCTIONS,
   GUESSED_WORDS,
   GUESSED_WORD
}

const GuessedWords = ({ guessedWords }: Props): JSX.Element => {
   const hasGuessedWords = guessedWords.length !== 0
   return (
      <div data-test={TestId.COMPONENT_GUESSED_WORDS}>
         {!hasGuessedWords && (
            <span data-test={TestId.GUESS_INSTRUCTIONS}>
               Try to guess the secrect word!
            </span>
         )}

         <div data-test={TestId.GUESSED_WORDS}>
            {guessedWords.map((item, index) => {
               return (
                  <li key={index} data-test={TestId.GUESSED_WORD}>
                     {item.guessedWord}
                  </li>
               )
            })}
         </div>
      </div>
   )
}

export default GuessedWords

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
   /* Destructuruing */
   const { Fragment } = React

   /* States */
   let content: JSX.Element
   const hasGuessedWords = guessedWords.length !== 0

   /* Views */
   const guessedWordRows = guessedWords.map((item, index) => {
      const { guessedWord, letterMatchCount } = item

      return (
         <tr data-test={TestId.GUESSED_WORD} key={index}>
            <th>{guessedWord}</th>
            <th>{letterMatchCount}</th>
         </tr>
      )
   })

   if (hasGuessedWords) {
      content = (
         <Fragment>
            <h3>Guessed Words</h3>

            <table data-test={TestId.GUESSED_WORDS}>
               <thead>
                  <tr>
                     <th>Guess</th>
                     <th>Matching Letters</th>
                  </tr>
               </thead>
               <tbody>{guessedWordRows}</tbody>
            </table>
         </Fragment>
      )
   } else {
      content = (
         <span data-test={TestId.GUESS_INSTRUCTIONS}>
            Try to guess the secrect word!
         </span>
      )
   }

   return <div data-test={TestId.COMPONENT_GUESSED_WORDS}>{content}</div>
}

export default GuessedWords

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
         <tr
            className="bg-gray-200"
            data-test={TestId.GUESSED_WORD}
            key={index}
         >
            <td className="border px-4 py-2">{guessedWord}</td>
            <td className="border px-4 py-2">{letterMatchCount}</td>
         </tr>
      )
   })

   if (hasGuessedWords) {
      content = (
         <Fragment>
            <h3 className="text-2xl mb-2">Guessed Words</h3>

            <table
               className="table-auto mx-auto"
               data-test={TestId.GUESSED_WORDS}
            >
               <thead className="bg-gray-300">
                  <tr>
                     <th className="px-4 py-2 border border-gray-400">Guess</th>
                     <th className="px-4 py-2 border border-gray-400">
                        Matching Letters
                     </th>
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

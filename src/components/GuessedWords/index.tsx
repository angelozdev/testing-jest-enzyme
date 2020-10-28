import React from 'react'

export interface Props {
   geuessedWords: Array<{
      guessedWord: string
      letterMatchCount: number
   }>
}

const GuessedWords = ({ geuessedWords }: Props): JSX.Element => {
   return <div></div>
}

export default GuessedWords

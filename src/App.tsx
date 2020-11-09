import React from 'react'
import { Congrats, GuessedWords, Input } from './components/'
import './App.css'

const App = () => {
   return (
      <div className="container mx-auto text-center" data-test="component-app">
         <h1 className="text-4xl">Jotto Game</h1>
         <Input />
         <Congrats success={false} />
         <GuessedWords
            guessedWords={[
               {
                  guessedWord: 'train',
                  letterMatchCount: 3
               }
            ]}
         />
      </div>
   )
}

export default App

import React from 'react'
import { Congrats, GuessedWords, Input } from './components/'
import './App.css'
import { useDispatch } from 'react-redux'
import { secretWord } from './redux/actions/secretWord.action'

const App = () => {
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(secretWord())
   }, [])

   return (
      <div className="container mx-auto text-center" data-test="component-app">
         <h1 className="text-4xl">Jotto Game</h1>
         <Input />
         <Congrats success={false} />
         <GuessedWords />
      </div>
   )
}

export default App

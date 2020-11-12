import React from 'react'

/* Redux */
import { useDispatch, useSelector } from 'react-redux'
import { guessedWord } from '../../redux/actions/guessWord.action'
import { status as st } from '../../redux/reducers/guessWord.reducer'
import { State } from '../../redux/redux.store'

/* types */
export enum Components {
   CONTAINER,
   INPUT,
   BUTTON
}

function Input(): JSX.Element | null {
   /* States */
   const [word, setWord] = React.useState<string>('')
   const {
      data: { isCorrectWord },
      status
   } = useSelector((state: State) => state.guessWord)
   const dispatch = useDispatch()

   /* Methods */
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setWord('')
      dispatch(guessedWord(word))
   }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setWord(e.target.value)
   }

   if (isCorrectWord) {
      return null
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="p-4"
         data-test={Components.CONTAINER}
      >
         <input
            onChange={handleChange}
            className="border py-1 px-3"
            data-test={Components.INPUT}
            type="text"
            placeholder="Enter guess"
            value={word}
         />
         <button
            disabled={!word}
            className={`border py-1 px-3 bg-green-500 text-white ${
               (status === st.LOADING || !word) &&
               'opacity-50 cursor-not-allowed'
            }`}
            data-test={Components.BUTTON}
            type="submit"
         >
            {status === st.LOADING ? 'Loading...' : 'Submit'}
         </button>
      </form>
   )
}

export default Input

import React from 'react'

/* Redux */
import { useSelector } from 'react-redux'
import { State } from '../../redux/redux.store'

/* types */
export enum Components {
   CONTAINER,
   INPUT,
   BUTTON
}

function Input(): JSX.Element | null {
   const { isCorrectWord } = useSelector((state: State) => state.guessWord.data)

   if (isCorrectWord) {
      return null
   }

   return (
      <form className="p-4" data-test={Components.CONTAINER}>
         <input
            className="border py-1 px-3"
            data-test={Components.INPUT}
            type="text"
            placeholder="Enter guess"
         />
         <button
            className="border py-1 px-3 bg-green-400 text-white"
            data-test={Components.BUTTON}
            type="submit"
         >
            SUBMIT
         </button>
      </form>
   )
}

export default Input

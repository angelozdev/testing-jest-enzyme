import React from 'react'

/* Types */
export interface Props {
   readonly success: boolean
}

const Congrats = ({ success = false }: Props): JSX.Element => {
   return (
      <div
         className="my-8 bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
         data-test="component-congrats"
         hidden={!success}
      >
         <p>Congrats! You guessed the word!</p>
      </div>
   )
}

export default Congrats

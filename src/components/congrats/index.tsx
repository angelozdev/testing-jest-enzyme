import React from 'react'

/* Types */
export interface Props {
   success: boolean
}

const Congrats = ({ success = false }: Partial<Props>): JSX.Element => {
   return (
      <div data-test="component-congrats" hidden={success}>
         <p>Congrats!</p>
      </div>
   )
}

export default Congrats

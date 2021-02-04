import React from 'react'
import { StepperContext } from '../Stepper.Provider'

const NextBtn = () => {
  const { handleClick } = React.useContext(StepperContext)

  return <button onClick={handleClick}>Next</button>
}

export default NextBtn

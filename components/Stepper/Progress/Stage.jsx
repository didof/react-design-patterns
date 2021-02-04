import { StepperContext } from '../Stepper.Provider'
import React from 'react'

const Stage = ({ num, text }) => {
  const { stage } = React.useContext(StepperContext)
  if (stage !== num) return null

  return (
    <div>
      <h3>stage {stage}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Stage

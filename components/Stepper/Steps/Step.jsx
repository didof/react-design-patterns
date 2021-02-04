import React from 'react'
import { StepperContext } from '../Stepper.Provider'

const Step = ({ num }) => {
  const { stage } = React.useContext(StepperContext)

  if (num < stage) {
    return <div>done</div>
  }
  if (num === stage) {
    return <div>stage {stage}</div>
  } else {
    return <div>to do</div>
  }
}

export default Step

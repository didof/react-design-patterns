// core
import React from 'react'

// children
import Progress from './Progress/Progress'
import Stage from './Progress/Stage'
import Steps from './Steps/Steps'
import Step from './Steps/Step'
import NextBtn from './Buttons/NextBtn'

import StepperProvider from './Stepper.Provider'

// style
import { Box, Column } from 'styles'

class Stepper extends React.Component {
  // children
  static Progress = Progress
  static Stage = Stage
  static Steps = Steps
  static Step = Step
  static NextBtn = NextBtn

  render() {
    return (
      <StepperProvider>
        <Box width={500} padding={20}>
          <Column>
            <h1>Stepper</h1>
            {this.props.children}
          </Column>
        </Box>
      </StepperProvider>
    )
  }
}

export default Stepper

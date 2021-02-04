// core
import React from 'react'

// children
import Progress from './Progress/Progress'
import Stage from './Progress/Stage'
import Steps from './Steps/Steps'
import Step from './Steps/Step'

import NextBtn from '../NextBtn'

// style
import { Box, Column } from 'styles'

class Stepper extends React.Component {
  // children
  static Progress = Progress
  static Stage = Stage
  static Steps = Steps
  static Step = Step
  static NextBtn = NextBtn

  // state
  state = { stage: this.props.stage }
  static defaultProps = { stage: 1 }

  // methods
  handleClick = () => {
    const progressChild = this._findChildrenByName('Progress')
    if (this.state.stage >= this._getChildrenLength(progressChild)) {
      this.setState({ stage: this.props.stage || this.defaultProps.stage })
    } else {
      this.setState({ stage: this.state.stage + 1 })
    }
  }

  _findChildrenByName = name => {
    return this.props.children.find(child => child.type.name === name)
  }

  _getChildrenLength = reactElement => {
    return reactElement.props.children.length
  }

  render() {
    const enrichedChildren = React.Children.map(this.props.children, child => {
      const props = {}
      const { name } = child.type

      switch (name) {
        case 'Progress':
        case 'Stage':
        case 'Steps':
        case 'Step':
          props.stage = this.state.stage
          break
        case 'NextBtn':
          props.handleClick = this.handleClick
          break
        default:
          props.stage = this.state.stage
          props.handleClick = this.props.handleClick
      }

      return React.cloneElement(child, props)
    })

    return (
      <Box width={500} padding={20}>
        <Column>
          <h1>Stepper</h1>
          {enrichedChildren}
        </Column>
      </Box>
    )
  }
}

export default Stepper

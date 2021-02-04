import React from 'react'

class Steps extends React.Component {
  render() {
    const { stage } = this.props

    const enanchedChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { stage })
    })

    return (
      <div>
        <h2>Steps</h2>
        {enanchedChildren}
      </div>
    )
  }
}

export default Steps

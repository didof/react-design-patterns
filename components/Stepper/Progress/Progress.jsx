import React from 'react'

class Progress extends React.Component {
  render() {
    const { stage } = this.props

    const enanchedChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { stage })
    })

    return (
      <div>
        <h2>Progress</h2>
        {enanchedChildren}
      </div>
    )
  }
}

export default Progress

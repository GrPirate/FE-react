import React, { Component } from 'react'
import './style.less'

class Title extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="small-title">
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}

export default Title

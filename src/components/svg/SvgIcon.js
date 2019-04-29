import React, { Component } from 'react'
import './style.less'

class SvgIcon extends Component {
  render () {
    return (
      <svg className="svg-icon"
        aria-hidden="true">
        <use xlinkHref={'#svg-' + this.props.icon}></use>
      </svg>
    )
  }
}

export default SvgIcon
import React, { Component } from 'react'
import './style.less'
import Author from '@/components/author/author'
import Instagram from '@/components/instagram/instagram'
import Categories from '@/components/categories/categories'
import Recent from '@/components/recent/recent'

class LeftBar extends Component {
  render () {
    return (
      <div className="left-bar">
        <div className="left-content-wrap">
          <Author />
          <Instagram />
          <Recent />
          <Categories />
        </div>
      </div>
    )
  }
}

export default LeftBar
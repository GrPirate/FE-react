import React, { Component } from 'react'
import './style.less'
import { Icon } from 'antd'
import SearchItem from '@/components/layout/SearchItem/SearchItem.js'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItem: 'Home'
    }
    this.click = this.click.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.onRef = this.onRef.bind(this)
  }

  handleClick (key) {
    this.setState({
      ...this.state,
      activeItem: key
    })
  }

  onRef (ref) {
    this.child = ref
  }

  click (e) {
    e.stopPropagation()
    e.preventDefault()
    this.child.handleVisible()
  }

  handleMouseOver () {
    this.child.handleMouseOver()
  }

  handleMouseOut () {
    this.child.handleMouseOut()
  }

  render () {
    const menuList = ['Home', 'About', 'Food', 'Drinks', 'Healthy', 'Travel']
    return (
      <section className="container-menu-wrap">
        <div className="menu-wrap_gradient">
          <div className="main-menu">
            <div className="header-menu">
              <div>
                <ul>
                  {menuList.map(v => {
                    return (
                      <li className="menu-item" key={v}>
                        <span
                         className={this.state.activeItem === v ? "active" : ""}
                         onClick={this.handleClick.bind(this, v)}>{v}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div
              className="menu-search"
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}>
              <div
                className="menu-search_wrap"
                onClick={this.click}>
                <Icon type="search"/>
              </div>
              <SearchItem onRef={this.onRef}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
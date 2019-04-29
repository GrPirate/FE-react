import React, { Component } from 'react'
import './style.less'
import logobg from '../../../assets/img/timg.jpg'
import logoicon from '../../../assets/img/海盗船.svg'
import Menu from '../Menu/Menu'

class Header extends Component {
  render () {
    return (
      <header className="header-wrap">
        <section className="logo-wrap">
          <h1 className="logo">
            <a className="main-logo" href="/">
              <img className="logo-bg" src={logobg} alt="logo"/>
              <img className="logo-icon" src={logoicon} alt="dahaizeisft" />
              <div className="logo-title"></div>
            </a>
          </h1>
        </section>
        <Menu />
      </header>
    )
  }
}

export default Header

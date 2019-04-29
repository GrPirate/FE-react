import React, { Component } from 'react'
import './style.less'
import Header from '@/components/layout/Header/Header'
import Main from '@/components/layout/Main/Main'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react'
import './style.less'
import LeftBar from '../LeftBar/LeftBar'
import Content from '../Content/Content'

class Main extends Component {
  render () {
    return (
      <main className="main-content-wrap">
        <div className="content-wrap">
          <div className="content-row">
            <div className="content-row-pd">
              <LeftBar />
              <Content />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Main

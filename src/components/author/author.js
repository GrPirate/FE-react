import React, { Component } from 'react'
import './style.less'
import { Icon } from 'antd'
import Title from '../common/Title/Title'

class Author extends Component {
  render () {
    return (
      <div className="author-wrap">
        <Title title="author" />
        {/* <div className="author-title">
          <h3>author</h3>
        </div> */}
        <div className="author-header-wrap">
          {/* eslint-disable-next-line*/}
          <a className="author-header_img" href="#" alt="author"></a>
        </div>
        <div className="author-name">
          <h3>Grpirate's</h3>
        </div>
        <div className="author-introduce">
          <p>There I was in a hot yoga studio with plenty of bright natural light and bending myself into pretzel like positions for the very first time.</p>
        </div>
        <div className="author-linebg">
          <span></span>
        </div>
        <div className="other-links">
          <div className="author-icon">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" alt="gitHub">
              <Icon type="github" style={{ fontSize: '16px'}} />
            </a>
          </div>
          <div className="author-icon">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" alt="gitHub">
              <Icon type="wechat" style={{ fontSize: '16px'}} />
            </a>
          </div>
          <div className="author-icon">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" alt="gitHub">
              <Icon type="twitter" style={{ fontSize: '16px'}} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Author

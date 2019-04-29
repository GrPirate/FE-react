import React, { Component } from 'react'
import './style.less'
import Title from '../common/Title/Title'
import yz from '../../assets/img/yz.jpg'

class Instagram extends Component {
  constructor (props) {
    super(props)
    this.state = {
      instagramDatas: [{
        cover: yz,
        title: '我想吃掉你的胰脏'
      }, {
        cover: yz,
        title: '我想吃掉你的胰脏'
      }, {
        cover: yz,
        title: '我想吃掉你的胰脏'
      }, {
        cover: yz,
        title: '我想吃掉你的胰脏'
      }, {
        cover: yz,
        title: '我想吃掉你的胰脏'
      }, {
        cover: yz,
        title: '我想吃掉你的胰脏'
      }, {
        cover: yz,
        title: '我想吃掉你的胰脏'
      }, {
        cover: yz,
        title: '我想吃掉你的胰脏'
      }]
    }
  }
  render () {
    const { instagramDatas } = this.state
    return (
      <div className="instagram-wrap">
        <Title title="instagram" />
        <div className="instagram-main">
          <div className="instagram-main_wrap">
          {
            instagramDatas && instagramDatas.map((item, index) => (
              <div className="instagram-item" key={index}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" target="_blank">
                  <img src={item.cover} alt={item.title} />
                </a>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Instagram

import React, { Component } from 'react'
import './style.less'
import Title from '../common/Title/Title'
import yz from '../../assets/img/yz.jpg'

class Recent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      recentDatas: [{
        cover: yz,
        imgAlt: 'yz',
        title: 'Delicious Fruit Croissants in Paris'
      }, {
        cover: yz,
        imgAlt: 'yz',
        title: 'Delicious Fruit Croissants in Paris'
      }, {
        cover: yz,
        imgAlt: 'yz',
        title: 'Delicious Fruit Croissants in Paris'
      }, {
        cover: yz,
        imgAlt: 'yz',
        title: 'Delicious Fruit Croissants in Paris'
      }, {
        cover: yz,
        imgAlt: 'yz',
        title: 'Delicious Fruit Croissants in Paris'
      }]
    }
  }
  render () {
    const { recentDatas } = this.state
    return (
      <div className="recent-wrap">
        <Title title="recent" />
        <div className="recent-main-wrap">
        {
          recentDatas.map((item, index) => (
            <div className="recent-item" key={index}>
              <div className="item-wrap">
                <div className="item-img-container">
                  <div className="item-thumb">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                      <img src={item.cover} alt={item.imgAlt} />
                    </a>
                  </div>
                </div>
                <div className="item-info">
                  <h3 className="item-info_title">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>{item.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default Recent

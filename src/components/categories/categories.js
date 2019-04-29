import React, { Component } from 'react'
import './style.less'
import Title from '../common/Title/Title'

class Categories extends Component {
  constructor () {
    super()
    this.state = {
      cateDatas: [{
        name: 'Main Dishes',
        num: '12'
      }, {
        name: 'Pasta',
        num: '12'
      }, {
        name: 'Salads',
        num: '12'
      }, {
        name: 'Deserts',
        num: '12'
      }, {
        name: 'Drinks',
        num: '12'
      }, {
        name: 'Healthy',
        num: '12'
      }]
    }
  }
  render () {
    const { cateDatas } = this.state
    return (
      <div className="categories-wrap">
        <Title title="categories" />
        <div className="cate-main-wrap">
          <ul>
            {
              cateDatas.map((item, index) => (
                <li key={index}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">
                    <span className="item-name">{item.name}</span>
                    <span className="item-no">{item.num}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Categories

import React, { Component } from 'react'
import './style.less'
import { Icon } from 'antd';
import yz from '../../../assets/img/yz.jpg'

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      datas: [{
        cover: yz,
        coverAlt: 'yz',
        mainTitle: 'Coffee & Delicious Macaroons in Paris',
        category: 'Travel',
        author: 'Emma Hayes',
        date: 'November 2, 2018',
        mainContent: 'Prepare time: 20 min Cook: 2 hr 30 min Ready in: 2 hr 50 min Pair this delicious dish with a risotto and a nice bottle of wine. This Italian favorite is easy to make and sure to impress your guests. Ingredients 2 cups half and half 1/4 cup limoncello ...',
        comments: 23
      }, {
        cover: yz,
        coverAlt: 'yz',
        mainTitle: 'Coffee & Delicious Macaroons in Paris',
        category: 'Travel',
        author: 'Emma Hayes',
        date: 'November 2, 2018',
        mainContent: 'Prepare time: 20 min Cook: 2 hr 30 min Ready in: 2 hr 50 min Pair this delicious dish with a risotto and a nice bottle of wine. This Italian favorite is easy to make and sure to impress your guests. Ingredients 2 cups half and half 1/4 cup limoncello ...',
        comments: 23
      }, {
        cover: yz,
        coverAlt: 'yz',
        mainTitle: 'Coffee & Delicious Macaroons in Paris',
        category: 'Travel',
        author: 'Emma Hayes',
        date: 'November 2, 2018',
        mainContent: 'Prepare time: 20 min Cook: 2 hr 30 min Ready in: 2 hr 50 min Pair this delicious dish with a risotto and a nice bottle of wine. This Italian favorite is easy to make and sure to impress your guests. Ingredients 2 cups half and half 1/4 cup limoncello ...',
        comments: 23
      }, {
        cover: yz,
        coverAlt: 'yz',
        mainTitle: 'Coffee & Delicious Macaroons in Paris',
        category: 'Travel',
        author: 'Emma Hayes',
        date: 'November 2, 2018',
        mainContent: 'Prepare time: 20 min Cook: 2 hr 30 min Ready in: 2 hr 50 min Pair this delicious dish with a risotto and a nice bottle of wine. This Italian favorite is easy to make and sure to impress your guests. Ingredients 2 cups half and half 1/4 cup limoncello ...',
        comments: 23
      }, {
        cover: yz,
        coverAlt: 'yz',
        mainTitle: 'Coffee & Delicious Macaroons in Paris',
        category: 'Travel',
        author: 'Emma Hayes',
        date: 'November 2, 2018',
        mainContent: 'Prepare time: 20 min Cook: 2 hr 30 min Ready in: 2 hr 50 min Pair this delicious dish with a risotto and a nice bottle of wine. This Italian favorite is easy to make and sure to impress your guests. Ingredients 2 cups half and half 1/4 cup limoncello ...',
        comments: 23
      }]
    }
  }
  render () {
    const { datas } = this.state
    return (
      <div className="main-content">
        <div className="main-wrap">
          <div className="main-block-wrap">
          {
            datas.map((item, index) => (
              <div className="main-content-wrap" key={index}>
                <div className="info-wrap">
                  <div className="info-title">
                    <h3>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#">{item.mainTitle}</a>
                    </h3>
                  </div>
                  <div className="info-img-wrap">
                    <div className="img-thumb">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#">
                        <img src={item.cover} alt={item.coverAlt} />
                      </a>
                    </div>
                  </div>
                  <div className="info-main-wrap">
                    <div className="editor-date">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="post-category">{item.category}</a>
                      <div className="author-date">
                        <span className="post-author-name">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href="#">{item.author}<span>{" - "}</span></a>
                        </span>
                        <span className="post-date">
                          <time>{item.date}</time>
                        </span>
                        <div className="post-comments">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href="#">{item.comments}</a>
                        </div>
                      </div>
                    </div>
                    <div className="excerpt">
                      {item.mainContent}
                    </div>
                    <div className="read-more">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
            <div className="main-content-wrap">
              <div className="info-wrap">
                <div className="info-title">
                  <h3>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">{'Coffee & Delicious Macaroons in Paris'}</a>
                  </h3>
                </div>
                <div className="info-img-wrap">
                  <div className="img-thumb">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">
                      <img src={yz} alt="" />
                    </a>
                  </div>
                </div>
                <div className="info-main-wrap">
                  <div className="editor-date">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="post-category">Travel</a>
                    <div className="author-date">
                      <span className="post-author-name">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">Emma Hayes<span>{" - "}</span></a>
                      </span>
                      <span className="post-date">
                        <time>November 2, 2018</time>
                      </span>
                      <div className="post-comments">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">0</a>
                      </div>
                    </div>
                  </div>
                  <div className="excerpt">
                  Prepare time: 20 min Cook: 2 hr 30 min Ready in: 2 hr 50 min Pair this delicious dish with a risotto and a nice bottle of wine. This Italian favorite is easy to make and sure to impress your guests. Ingredients 2 cups half and half 1/4 cup limoncello ...
                  </div>
                  <div className="read-more">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="load-more-wrap">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">
                Load more
                <Icon type="down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Content
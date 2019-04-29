import React, { Component } from 'react'
import './style.less'
import yz from '@/assets/img/yz.jpg'

class SearchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      overAction: false,
      value: '',
      searchResults: [{
        cover: yz,
        title: 'about',
        time: 'November 5, 2018'
      }, {
        cover: yz,
        title: 'JavaScript入门',
        time: '2019 4.23'
      }, {
        cover: yz,
        title: '海贼王',
        time: '2019 4.23'
      }, {
        cover: yz,
        title: '对酒当歌，人生几何',
        time: '2019 4.23'
      }]
    }
    this.props.onRef(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleVisible = this.handleVisible.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }
  componentWillMount () {
    document.documentElement.addEventListener('click', this.handleClick)
  }

  componentWillUnmount () {
    document.documentElement.removeEventListener('click', this.handleClick)
  }
  handleClick (e) {
    if (this.state.overAction) return
    this.setState({
      show: false
    })
  }

  handleChange (e) {
    let value = e.target.value
    this.setState({
      value
    })
  }

  handleVisible () {
    let show = !this.state.show
    this.setState({
      show
    })
  }

  handleMouseOver () {
    this.setState({
      overAction: true
    })
  }

  handleMouseOut () {
    this.setState({
      overAction: false
    })
  }

  render () {
    let { value, searchResults, show } = this.state
    // let { visible } = this.props
    return (
      <div
        className={show ? 'dropdown-search active' : 'dropdown-search'}>
        <div className="search-form">
          <div className="search-wrap">
            <input className="search-text" type="text" value={value} onChange={this.handleChange}/>
            <input className="search-btn" type="submit" value="Search"/>
          </div>
        </div>
        {/* search content */}
        {
          !!value && (
            <div className="search-content">
              <div className="search-result">
              {
                searchResults.map((item, index) => (
                  <div className="search-result_wrap" key={index}>
                    <div className= "search-result_thumb">
                      {/* eslint-disable-next-line*/}
                      <a className="search-img_wrap" href="#" alt="">
                        {/* eslint-disable-next-line*/}
                        <img src={item.cover} />
                      </a>
                    </div>
                    <div className= "search-result_details">
                      <h3>
                        {/* eslint-disable-next-line*/}
                        <a href="#" alt={item.title}>{item.title}</a>
                      </h3>
                      <div className="search-result_info">
                        <span>
                          <time>{item.time}</time>
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              }
              </div>
              <div className="result-msg">
                {/* eslint-disable-next-line*/}
                <a href="#">View all results</a>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default SearchItem
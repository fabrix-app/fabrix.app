import React, { Component, PropTypes } from 'react'

export default class OtherFeatureImage extends Component {
  static get propTypes () {
    return {
      image: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      text: PropTypes.string,
      location: PropTypes.string
    }
  }

  render() {
    return (
      <div className="fabrix-vertical-feature">
        <div className="left">
          <a href={this.props.url} target="_blank">
            <img src={this.props.image} />
            <h2>{this.props.title}</h2>
          </a>
        </div>
        <div className="right">
          {this.props.text}
          <p>Location: {this.props.location}</p>
        </div>
      </div>
    )
  }
}



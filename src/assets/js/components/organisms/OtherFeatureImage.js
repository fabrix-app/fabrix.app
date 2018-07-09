import React, { Component, PropTypes } from 'react'

export default class OtherFeatureImage extends Component {
  static get propTypes () {
    return {
      image: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string
    }
  }

  render() {
    return (
      <div className="fabrix-other-feature">
        <a href={this.props.url} target="_blank">
          <img src={this.props.image} />
          <h2>{this.props.title}</h2>
        </a>
      </div>
    )
  }
}


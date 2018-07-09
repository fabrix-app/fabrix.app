import React, { Component, PropTypes } from 'react'

export default class OtherFeature extends Component {
  static get propTypes () {
    return {
      text: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string
    }
  }

  render() {
    return (
      <div className="fabrix-other-feature">
        <a href={this.props.url} target="_blank">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </a>
      </div>
    )
  }
}

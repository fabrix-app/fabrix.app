import React, { Component, PropTypes } from 'react'

class Feature extends Component {

  render() {
    return (
      <section data-reverse={this.props.reverse} className="fabrix-feature">
        <div className="fabrix-feature-text">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
        <div className="fabrix-feature-image">
          <img src={this.props.image} alt={this.props.title} />
        </div>
      </section>
    )
  }

}

Feature.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
}

export default Feature

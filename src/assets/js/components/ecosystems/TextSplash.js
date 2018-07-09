import React, { Component } from 'react'

export default class Splash extends Component {

  static get propTypes () {
    return {
      title: React.PropTypes.string,
      subtitle: React.PropTypes.string
    }
  }

  render() {
    return (
      <section className="fabrix-splash">
        <div className="container small">
          <h1 className="fabrix-splash-title">{this.props.title}</h1>
          <h2 className="fabrix-splash-description">{this.props.subtitle}</h2>
        </div>
      </section>
    )
  }
}

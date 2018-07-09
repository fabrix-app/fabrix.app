import React, { Component } from 'react'

import Button from './../atoms/Button'

export default class Splash extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="fabrix-splash">
        <a className="ribbon github-fork-ribbon left-top"
            href="https://github.com/fabrixjs/fabrix"
            title="Fork me on Github"
            target="_blank">
          Fork me on Github
        </a>
        <div className="container">
        <img className="fabrix-logo" src="/dist/img/fabrix-logo.svg" alt="fabrix-logo" />
          <h2 className="fabrix-splash-description">A Modern Web Application Framework for Node.js</h2>
          <div className="fabrix-splash-button-tray">
            <a href="/doc"><Button label="View Docs" /></a>
            <a href="/start"><Button label="Get Started" /></a>
          </div>
        </div>
      </section>
    )
  }

}

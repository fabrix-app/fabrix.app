import React, { Component } from 'react'

export default class Colophon extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="fabrix-colophon">
        <div className="container">
          <div className="left single">
            <img src="/dist/img/fabrix-horiz-logo-green.svg" />
            <div className="caption">
              The Fabrix framework, including all code and other materials contained therein,
              is free and open-source under the <a href="https://github.com/fabrixjs/fabrix/blob/master/LICENSE" target="_blank">MIT license</a>.
            </div>
            <h3>Follow Us</h3>
            <div className="social">
              <a href="https://github.com/fabrixjs/fabrix" target="_blank" title="Fabrix on Github">
                <img src="/dist/img/github-icon.png" title="Fabrix on Github" />
              </a>
              <a href="https://stackshare.io/fabrix" target="_blank" title="Fabrix on Stackshare.io">
                <img src="/dist/img/stackshare-icon.svg" title="Fabrix on Stackshare" />
              </a>
              <a href="https://twitter.com/fabrixjs" target="_blank" title="Fabrix on Twitter">
                <img src="/dist/img/twitter-icon.png" title="Fabrix on Twitter" />
              </a>
            </div>
          </div>
          <div className="right double">
            <div className="single">
              <ul><h3>Website</h3>
                <li><a href="/">Home</a></li>
                <li><a href="/start">Get Started</a></li>
                <li><a href="/doc">Documentation</a></li>
                <li><a href="/plugins">Plugins</a></li>
                <li><a href="/support">Help and Support</a></li>
              </ul>
            </div>
            <div className="single">
              <ul><h3>About</h3>
                <li><a href="https://github.com/fabrixjs/art" target="_blank">Brand Materials</a></li>
                <li><a href="https://github.com/fabrixjs" target="_blank">Source Code</a></li>
                <li><a href="https://travis-ci.org/fabrixjs" target="_blank">Build Status</a></li>
                <li><a href="https://github.com/fabrixjs/fabrix/wiki/FAQ" target="_blank">FAQ</a></li>
                <li><a href="https://github.com/fabrixjs/fabrix/wiki/Contact" target="_blank">Contact the Team</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

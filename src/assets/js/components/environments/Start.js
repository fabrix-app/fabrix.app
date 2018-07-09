import React, { Component } from 'react'
import {
  Header,
  Colophon,
  TextSplash
} from '../ecosystems'

export default class Start extends Component {

  static get propTypes () {
    return {
      docHtml: React.PropTypes.string
    }
  }

  render() {
    return (
      <div className="start">
        <Header />
        <TextSplash title="Get Started" subtitle="You'll be on your way in no time" />
        <article className="container">
          <div dangerouslySetInnerHTML={{ __html: this.props.docHtml }}></div>
        </article>
        <Colophon />
      </div>
    )
  }
}


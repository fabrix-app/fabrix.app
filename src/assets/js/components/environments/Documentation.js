import React, { Component } from 'react'
import {
  Header,
  Colophon
} from '../ecosystems'

export default class Documentation extends Component {

  static get propTypes () {
    return {
      docHtml: React.PropTypes.string
    }
  }

  render() {
    return (
      <div className="doc">
        <Header />
        <article className="container">
          <div dangerouslySetInnerHTML={{ __html: this.props.docHtml }}></div>
        </article>
        <Colophon />
      </div>
    )
  }
}

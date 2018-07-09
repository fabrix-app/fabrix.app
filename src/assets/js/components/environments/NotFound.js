import React, { Component } from 'react'
import {
  Header,
  Colophon,
  TextSplash
} from '../ecosystems'

export default class NotFound extends Component {

  static get propTypes () {
    return {
      docHtml: React.PropTypes.string
    }
  }

  render() {
    return (
      <div className="doc">
        <Header />
        <TextSplash title="Sorry :(" subtitle="We can't find that. Let us know: hello@fabrixjs.io" />
        <Colophon />
      </div>
    )
  }
}


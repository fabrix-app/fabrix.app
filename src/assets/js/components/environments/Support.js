import React, { Component } from 'react'

import {
  CommunitySupportFeatures,
  ProfessionalSupportFeatures,
  Header,
  Colophon,
  TextSplash
} from '../ecosystems'

export default class Support extends Component {
  static get propTypes () {
    return { }
  }

  render () {
    return (
      <div className="support">
        <Header />
        <TextSplash title="Support" subtitle="We'll walk with you on your Journey" />
        <article className="container">
          <header className="fabrix-section-header">
            <h1>Community Support</h1>
            <p><b>Free support</b> is always available from the Fabrix community</p>
          </header>
          <CommunitySupportFeatures />

          <header className="fabrix-section-header">
            <h1>Professional Support</h1>
            <p>Commercial support is available from these experts</p>
          </header>
          <ProfessionalSupportFeatures />
        </article>
        <Colophon />
      </div>
    )
  }
}



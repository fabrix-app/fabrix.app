import React, { Component } from 'react'

import OtherFeature from './../organisms/OtherFeatureImage'

const features = [
  {
    title: 'Live Chat on Gitter',
    image: 'dist/img/gitter-logo-square.png',
    url: 'https://gitter.im/fabrixjs/fabrix'
  },
  {
    title: 'File Issues on Github',
    image: 'dist/img/github-logo-square.png',
    url: 'https://github.com/fabrixjs/fabrix/issues'
  },
  {
    title: 'Follow us on Twitter',
    image: 'dist/img/twitter-logo-square.png',
    url: 'https://twitter.com/fabrixjs'
  }
]

export default class CommunitySupportFeatures extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="fabrix-more-features">
        <div className="container">
          <header className="fabrix-section-header">
          </header>
          <div className="fabrix-more-features-content">
            {features.map((feature, i) => (<OtherFeature key={i} {...feature} />))}
          </div>

        </div>
      </section>
    )
  }
}


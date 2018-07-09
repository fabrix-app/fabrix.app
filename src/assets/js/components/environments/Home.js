import React, { Component } from 'react'

import Splash from '../ecosystems/Splash'
import Header from '../ecosystems/Header'
import Colophon from '../ecosystems/Colophon'
import Console from '../ecosystems/Console'
import Features from '../ecosystems/Features'
import OtherFeatures from '../ecosystems/OtherFeatures'
import CallToAction from '../ecosystems/CallToAction'

export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <Header />
        <Splash />
        <Console />
        <Features />
        <OtherFeatures {...this.props} />
        <CallToAction />
        <Colophon />
      </div>
    )
  }
}

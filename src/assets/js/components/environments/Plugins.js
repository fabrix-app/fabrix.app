import React, { Component } from 'react'

//import Trailmix from 'trailmix/src/components/ecosystems/Takeahike'
import {
  Header,
  Colophon,
  TextSplash
} from '../ecosystems'

export default class Plugins extends Component {

  render() {
    return (
      <div className="plugins">
        <Header />
        <TextSplash title="Plugins" subtitle="We call them Trailpacks :)" />
        <article className="container">
          <header className="fabrix-section-header">
            <p>
              We're working hard on an excellent search interface for community Trailpacks!
              If you want to help out, check out the project here:
            </p>
            <h2>
              <a href="https://github.com/fabrixjs/trailmix">github.com/fabrixjs/trailmix</a>
            </h2>
            <p>
              In the meantime, you can find many of the trailpacks on npm:
            </p>
            <h2>
              <a href="https://npms.io/search?q=trailpack">npms.io/search?q=trailpack</a>
            </h2>
          </header>
        </article>
        <Colophon />
      </div>
    )
  }
}


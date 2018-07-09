import React, { Component } from 'react'
import Feature from './../organisms/Feature'

const features = [
  {
    title: 'Modern, Concise',
    text: `
      Fabrix represents a new, advanced generation of Node.js framework,
      unencumbered by the tumultuous legacy of Javascript. Designed around the
      microservices pattern, its unreasonably concise codebase is entirely
      in the ES6/ES7 dialect, which improves performance, testability, stability,
      and security.
    `,
    image: '/dist/img/fabrix-features-modern.svg'
  },
  {
    title: 'Hyper-Modular, Un-Opinionated',
    text: `
      Take the path less traveled. Or don't. With Fabrix, there's no cargo cult.
      Your team can use the design patterns and existing Node modules they already know.
      The capability of the framework itself is up to you, the developer, by
      choosing precisely the modules you need to make your application great.
    `,
    image: '/dist/img/fabrix-features-modular.svg'
  },
  {
    title: 'Community Driven',
    text: `
      Fabrix presents a modern, coherent design surrounded by a thriving
      and diverse open-source ecosystem. Hundreds of Fabrix addons and
      integrations, published and maintained by the community and corporate
      sponsors alike, are immediately available for use in your project.
    `,
    image: '/dist/img/fabrix-features-community.svg'
  }
]

export default class Features extends Component {

  static get propTypes () {
    return { }
  }

  render () {
    return (
      <section className="fabrix-features">
        <div className="container">
          <header className="fabrix-section-header">
            <h1>Blaze your own fabrix</h1>
          </header>
          {
            features.map((feature, index) => {
              return (
                <Feature
                  reverse={index % 2 !== 0}
                  key={index}
                  title={feature.title}
                  text={feature.text}
                  image={feature.image} />
              )
            })
          }
        </div>
      </section>
    )
  }
}

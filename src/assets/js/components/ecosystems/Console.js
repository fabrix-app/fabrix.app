import React, { Component } from 'react'

class Console extends Component {

  render() {
    return (
      <section className="fabrix-console">
        <div className="container">
          <pre>$ npm install -g yo generator-fabrix</pre>
          <pre>$ yo fabrix</pre>
          <pre>$ node server.js</pre>
        </div>
      </section>
    )
  }

}

Console.propTypes = {}

export default Console

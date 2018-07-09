'use strict'

const FabrixApp = require('@fabrix/fabrix').FabrixApp
const App = require('../dist')

before(() => {
  global.app = new FabrixApp(App)
  return global.app.start().catch(global.app.stop)
})

after(() => {
  return global.app.stop()
})

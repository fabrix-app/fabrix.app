#!/usr/bin/env node
/*eslint no-process-env: "off"*/
/*eslint no-console: "off"*/

const fs = require('fs')
const path = require('path')
const vars = require('./process.env.js').vars

const envVars = {}
vars.forEach(x => {
  if (vars.indexOf(x) !== -1) {
    envVars[x] = process.env[x]
  }
})


const envPath = path.join(__dirname, 'process.env.ts')
const envStr = JSON.stringify(envVars, null, ' ')

console.log('PREBUILD process_env:', envStr)

fs.writeFileSync(envPath, `export const process_env = ${envStr}`)

process.exit(0)

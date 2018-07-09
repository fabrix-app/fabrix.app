# fabrix.app

[![Gitter][gitter-image]][gitter-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

:evergreen_tree: Fabrix website hosted on Fabrix

## Features
 - Angular 5 (+ Angular CLI)
 - Server Side Rendering (Universal)
 - Advanced Node.js Backend (Fabrix)
 - Advanced Angular Configuration (NgEngine + NgPacks)
 - Angular Material
 - Service Workers (PWA)

## NgEngine and NgPacks
NgEngine is an Environment Configuration. NgPacks are Lazy loaded routes that mimic the core design schema.

# Development Guidelines
## Routes
Lazy Loaded are imperative for small initial file size. Routes that are not lazy loaded should be only used in the event that there is no other way.

## Containers
Containers are entryComponents (Routed to) or "smart" components. They will provide the brains to other "dumb" components.

## Components
Components in a component directory should all be presentational or "dumb" components. This means that they should receive inputs and fire outputs only. They should work with `ChangeDetection.OnPush`.

## Store
Most stores will be loaded as "feature" stores so that their state can be destroyed when the feature is.

## Config
Configs in a module should be exported and combined in `appConfig/main`, so that their configuration can be changed from the root of the app.

# Configuring your Application
## Fabrix
For Fabrix documentation see the [Fabrix Website](https://fabrixjs.io).  The only difference is that we are extending fabrix with Typescript and bundling it with webpack. You can configure Fabrix through `src/apiConfig`.

## Angular
For Angular documentation see the [Angular Website](https://angular.io).  You can configure your NgEngine Angular app through `src/appConfig`. 

# Running your Application

## Fabrix server
run `npm run build && node dist/server.js` for the fabrix server to start. Navigate to `http://localhost:3000/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm start` for a dev server that expects the API server at `http://localhost:3000`.  

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Quick Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Alternatively run `npm run build`. The build artifacts will be stored in the `dist/` directory.

## Production Build
Run `npm run serve:prod:ngsw` for a production build with Service Workers and PWA. To just build the service worker build, run `npm run build:prod:ngsw` and then start it with `node dist/server`

Run `npm run build:prod` for a production build. The build artifacts will be stored in the `dist/` directory. To start the server run `node dist/server`.

## Running CI tests
Run `npm test` to execute the unit test, end to end tests, and mocha spec test for node.js.

## Running unit tests

Run `ng test` or `npm run test:ng` to execute the unit tests via [Karma](https://karma-runner.github.io). To continuously run unit tests, run `npm run test:ng:watch`

## Running end-to-end tests

Run `ng e2e` or `npm run test:e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploying to Heroku
First you will need to create a Heroku app. The package.json includes a "heroku-postbuild" script that will build the app. The Procfile includes the location to start the node server which will serve the app on Heroku.


# Using the Proxy Config
This allows local development against the staging environment.

`ng serve --proxy-config proxy.conf.json`

# Deploying to Docker Heroku
Make sure you have the heroku toolbelt installed.

Then use the docker compose:

`docker-compose up -d --build web`

Then deploy the container

` heroku container:push ngadmin --app=vintage-cellars-staging-admin --arg API_URL=<api_url>
`

## Known Issues
The Fabrix REPL (spool-repl) includes some characters that production webpack builds (`webpack -p`) can not parse and fails during the uglify process.  Currently, we use the normal webpack build which is faster but has a larger slug. If you can fix this, we would love a PR!

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/fabrix.app/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/fabrix.app/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/fabrix.app.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/fabrix.app
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/fabrix.app.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/fabrix.app/coverage

# verbose-dashboard
API GraphQL API for verbose cms [express](https://github.com/verbosejs/verbose-express) for [node](http://nodejs.org).

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Test Coverage][coveralls-image]][coveralls-url]
  [![Known Vulnerabilities](https://snyk.io/test/github/verbosejs/verbose-dashboard/badge.svg)](https://snyk.io/test/github/verbosejs/verbose-dashboard)

```js
const express = require('express');
const verboseDashboard = require('verbose-dashboard');
const app = express();

app.use(verboseDashboard());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(3000);
```

## Installation

```bash
$ yarn add verbose-dashboard
# or
$ npm install verbose-dashboard
```

## Features

  * Graph QL
  
## API

### verboseDashboard(options)

Boots up the API, routes and connects to database.

- `options` an object that is passed to `verbose-dashboard` on setup 

### verboseDashboard.version

Returns the current version of the verbose api you are using

## Options

```js
var express = require('express')
var verboseDashboard = require('verbose-dashboard')

var app = express()
app.use(verboseDashboard({options}))
```

#### options.something
Type: `Boolean`
Default value: true

A boolean value to turn off something special off


## Docs & Community

  * [Verbose CMS for Express](https://github.com/verbosejs/verbose-express)
  * [Verbose CMS Admin Dashboard](https://github.com/verbosejs/verbose-dashboard)

## Development Guide

Below it a quick start guide to development on `verbose-dashboard`.  The following will spawn a demo express app with the app
intergrated using [nodemon](https://github.com/remy/nodemon).  Any changes to the app code will restart the app.

You can use either a local build or a docker-compose build.  The docker-compose build is useful if you want to target different node versions

  Clone the Repo

```bash
$ git clone git@github.com:verbosejs/verbose-dashboard.git
```

  Install dependecies 

```bash
$ yarn install
# or
$ npm install
```

Run the development express app

```bash
$ npm run dev
# or
$ docker-compose up
```
You should now be able to see the app on http://locahost:3000

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ yarn install
$ npm test
```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/verbose-dashboard.svg
[npm-url]: https://npmjs.org/package/verbose-dashboard
[downloads-image]: https://img.shields.io/npm/dm/verbose-dashboard.svg
[downloads-url]: https://npmjs.org/package/verbose-dashboard
[travis-image]: https://img.shields.io/travis/verbosejs/verbose-dashboard/master.svg
[travis-url]: https://travis-ci.org/verbosejs/verbose-dashboard
[coveralls-image]: https://img.shields.io/coveralls/verbosejs/verbose-dashboard/master.svg
[coveralls-url]: https://coveralls.io/r/verbosejs/verbose-dashboard?branch=master

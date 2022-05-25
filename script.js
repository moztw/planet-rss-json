const { stdout } = require('node:process')
const { parse } = require('rss-to-json')

const rssUrl = 'https://planet.moztw.org/atom.xml'

parse(rssUrl)
  .then(rss => JSON.stringify(rss))
  .then(json => stdout.write(json))

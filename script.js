const rssUrl = 'https://planet.moztw.org/atom.xml'

require('rss-to-json')
  .parse(rssUrl)
  .then(rss => {
    const json = JSON.stringify(rss)
    process.stdout.write(json)
  })

var express = require('express')
var app = express()
var port = process.env.PORT || 8080
const path = require('path')

var shows = {}

function createShow (show) {
  var id = Object.keys(shows).length
  show.createdAt = new Date()
  shows[id] = show
}

createShow({
  name: 'Hasbin Hotel',
  about: 'Hazbin Hotel is an American adult animated web series created, directed, written and produced by Vivienne "Vivziepop" Medrano. The official pilot was released on YouTube on October 28, 2019. On November 6, 2019, Medrano stated on Patreon that there was no stated release date for a second episode',
  airdate: 'October 28, 2019',
  like: 'The animation itself is top-notch.',
  dislike: 'The storyline itself is a bit much to follow and they introduce too many characters for a pilot episode but I found it humerous and ejoyable nonetheless',
  imgurl: '/images/hasbin.jpg',
  route: '/hasbin-hotel'
})

createShow({
  name: 'Rick and Morty',
  about: 'After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth\'s doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn\'t as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that\'s not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.',
  airdate: 'December 2, 2013',
  like: 'The animation itself is top-notch. Each episode as well is stand alone for the mostpart.',
  dislike: 'They need to release episodes more often so I can watch them.',
  imgurl: '/images/rick-morty.jpg',
  route: '/rick-and-morty'
})

createShow({
  name: 'Aggretsuko',
  about: 'Aggretsuko, also known by its original Japanese title Aggressive Retsuko, is a Japanese anime musical comedy franchise based on the eponymous character created by "Yeti" for the mascot company Sanrio.',
  airdate: 'April 20, 2018',
  like: 'Just look at it. Have you ever seen anything cuter??',
  dislike: 'They need to release episodes more often so I can watch them.',
  imgurl: '/images/aggretsuko.jpg',
  route: '/aggretsuko'
})

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index', { shows: shows }))

// generate paths for each show
for (const id in shows) {
  app.get(shows[id].route, (req, res) => res.render('pages/show', { shows: shows, show: shows[id] }))
}

app.listen(port)
console.log(`listening on port: ${port}`)

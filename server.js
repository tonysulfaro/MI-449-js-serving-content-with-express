const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

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
  imgurl: '/images/space.jpg'
})

createShow({
  name: 'Rick and Morty',
  about: 'After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth\'s doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn\'t as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that\'s not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer.',
  airdate: 'December 2, 2013',
  imgurl: 'https://ib4.hulu.com/user/v3/artwork/d76d6361-3fbf-4842-8dd7-e05520557280?base_image_bucket_name=image_manager&base_image=557550d6-2916-4c92-88df-ab4ba4882821&region=US&format=jpeg&size=952x536'
})

createShow({
  name: 'Aggretsuko',
  about: 'Aggretsuko, also known by its original Japanese title Aggressive Retsuko, is a Japanese anime musical comedy franchise based on the eponymous character created by "Yeti" for the mascot company Sanrio.',
  airdate: 'April 20, 2018',
  imgurl: '/images/space.jpg'
})

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', { shows: shows }))
  .get('/hasbin-hotel', (req, res) => res.render('pages/hasbin-hotel', { shows: shows }))
  .get('/rick-and-morty', (req, res) => res.render('pages/rick-and-morty', { shows: shows }))
  .get('/aggretsuko', (req, res) => res.render('pages/aggretsuko', { shows: shows }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

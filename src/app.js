// npm modules and node core module
const express = require('express')
const path = require('path')
const hbs = require('hbs')

// setup
const app = express()
const publicDirectory = path.join(__dirname, '../public')
const viewDirectory = path.join(__dirname, '../public/template')
const partialsDirectory = path.join(__dirname, '../public/template/partials')
const partialsNavbarDirectory = path.join(__dirname, '../public/template/partials/navbar')
const partialsAsideDirectory = path.join(__dirname, '../public/template/partials/aside')

// middleware
app.use(express.static(publicDirectory))
hbs.registerPartials(partialsDirectory)
hbs.registerPartials(partialsNavbarDirectory)
hbs.registerPartials(partialsAsideDirectory)

// setup express
app.set('view engine', 'hbs')
app.set('views', viewDirectory)

// get method
app.get('/', (request, response) => {
  response.render('index')
})

app.get('/homepagestatistic', (request, response) => {
  response.render('homepagestatistic')
})

app.listen(process.env.PORT || 3300)

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
const partialsTttleDirectory = path.join(__dirname, '../public/template/partials/title')

// middleware
app.use(express.static(publicDirectory))
hbs.registerPartials(partialsDirectory)
hbs.registerPartials(partialsNavbarDirectory)
hbs.registerPartials(partialsAsideDirectory)
hbs.registerPartials(partialsTttleDirectory)

// setup express
app.set('view engine', 'hbs')
app.set('views', viewDirectory)

// get method
app.get('/', (request, response) => {
  const data = {
    title: 'dashboard'
  }
  response.render('index', { data })
})

app.get('/homepagestatistic', (request, response) => {
  const data = {
    title: 'statistic page home'
  }
  response.render('homepagestatistic', { data })
})

app.get('/homeloginstatistic', (request, response) => {
  const data = {
    title: 'statistic user login home page'
  }
  response.render('homeloginstatistic', { data })
})

app.get('/homeregisterstatistic', (request, response) => {
  const data = {
    title: 'statistic user register home page'
  }
  response.render('homeregisterstatistic', { data })
})

app.get('/productbestsell', (request, response) => {
  const data = {
    title: 'Product best sell'
  }
  response.render('productbestsell', { data })
})

app.get('/productpotential', (request, response) => {
  const data = {
    title: 'Product potential in the future'
  }
  response.render('productpotential', { data })
})

app.listen(process.env.PORT || 3300)

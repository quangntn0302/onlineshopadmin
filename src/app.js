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
const renderPartialsDirectory = path.join(__dirname, '../public/template/renderpartials')
const renderPartialsAsideBarDirectory = path.join(__dirname, '../public/template/renderpartials/aside_bar')
const renderPartialsNavBarDirectory = path.join(__dirname, '../public/template/renderpartials/nav_header')
const renderPartialsContentDirectory = path.join(__dirname, '../public/template/renderpartials/content')

// middleware
app.use(express.static(publicDirectory))
hbs.registerPartials(partialsDirectory)
hbs.registerPartials(partialsNavbarDirectory)
hbs.registerPartials(partialsAsideDirectory)
hbs.registerPartials(partialsTttleDirectory)
hbs.registerPartials(renderPartialsDirectory)
hbs.registerPartials(renderPartialsAsideBarDirectory)
hbs.registerPartials(renderPartialsNavBarDirectory)
hbs.registerPartials(renderPartialsContentDirectory)

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

app.get('/productbestsellstatistic', (request, response) => {
  const data = {
    title: 'Product best sell'
  }
  response.render('productbestsellstatistic', { data })
})

app.get('/productpotentialstatistic', (request, response) => {
  const data = {
    title: 'Product potential in the future'
  }
  response.render('productpotentialstatistic', { data })
})

app.get('/usermanagement', (request, response) => {
  const data = {
    title: 'User management'
  }
  response.render('usermanagement', { data })
})

app.get('/rolemanagement', (request, response) => {
  const data = {
    title: 'Role management'
  }
  response.render('rolemanagement', { data })
})

app.get('/customermanagementbasic', (request, response) => {
  const data = {
    title: 'Customer account'
  }
  response.render('customermanagementbasic', { data })
})

app.get('/customermanagementadvance', (request, response) => {
  const data = {
    title: 'Customer band'
  }
  response.render('customermanagementadvance', { data })
})

app.get('/eventmanagementbasis', (request, response) => {
  const data = {
    title: 'Basic event'
  }
  response.render('eventmanagementbasis', { data })
})

app.get('/eventmanagementadvance', (request, response) => {
  const data = {
    title: 'Advance event'
  }
  response.render('eventmanagementadvance', { data })
})

app.get('/categorymanagementbasis', (request, response) => {
  const data = {
    title: 'basis category'
  }
  response.render('categorymanagementbasis', { data })
})

app.get('/categorymanagementadvance', (request, response) => {
  const data = {
    title: 'Advance category'
  }
  response.render('categorymanagementadvance', { data })
})

app.get('/productmanagementbasis', (request, response) => {
  const data = {
    title: 'basis product'
  }
  response.render('productmanagementbasis', { data })
})

app.get('/productmanagementadvance', (request, response) => {
  const data = {
    title: 'Advance product'
  }
  response.render('productmanagementadvance', { data })
})

app.get('/newmanagementbasis', (request, response) => {
  const data = {
    title: 'basis new'
  }
  response.render('newmanagementbasis', { data })
})

app.get('/newmanagementadvance', (request, response) => {
  const data = {
    title: 'Advance new'
  }
  response.render('newmanagementadvance', { data })
})

app.get('/login', (request, response) => {
  response.render('login')
})

app.get('/notifications', (request, response) => {
  const data = {
    title: 'Notification'
  }
  response.render('notifications', { data })
})

app.get('/notificationsbasis', (request, response) => {
  const data = {
    title: 'Notification basis'
  }
  response.render('notificationsbasis', { data })
})

app.get('/notificationsadvance', (request, response) => {
  const data = {
    title: 'Notification advance'
  }
  response.render('notificationsadvance', { data })
})

app.get('/profilepersonal', (request, response) => {
  const data = {
    title: 'profile'
  }
  response.render('profilepersonal', { data })
})

app.listen(process.env.PORT || 3300)

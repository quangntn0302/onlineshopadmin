const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('start server success')
})

app.listen(process.env.PORT || 3300)

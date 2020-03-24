const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('start server success')
})

console.log('Listening at port 3300 ...')
app.listen(process.env.PORT || 3300)

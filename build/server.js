var express = require('express')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || 80

var app = express()

// serve pure static assets
app.use('/dist', express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})

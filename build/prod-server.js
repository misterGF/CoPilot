var express = require('express')
var port = process.env.PORT || 80 // Might have some issues running it from your local machine. Best to run this on server
var baseConfig = require('./webpack.base.conf')

var app = express(),
  path = baseConfig.output.distPath
  console.log(path)

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// server webpack outputs
app.set('appPath', path)
app.use(express.static(baseConfig.output.path))

app.route('/*')
  .get(function(req, res){
    res.sendFile(app.get('appPath') + '/index.html')
  })

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})

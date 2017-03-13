var express = require('express')
var app = express()
//app.use(express.static('public'))

app.get('/health', function (req, res) {
  res.send('Developer-UI: ' + Date.now())
})

app.listen(3000, function () {
  console.log('Developer-UI service listening on port 3000!')
})
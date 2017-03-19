var express = require('express')
var app = express()

app.use("/",express.static('./src/main/home/public'))
app.use("/home",express.static('./src/main/home/public'))
app.use("/common",express.static('./src/main/common'))
app.use("/console",express.static('./src/main/console/public'))

app.get('/health', function (req, res) {
  res.send('Developer-UI: ' + Date.now())
})

app.listen(3000, function () {
  console.log('Developer-UI service listening on port 3000!')
})

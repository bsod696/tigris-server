const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.raw({type: '*/*'}))

app.post('/api/tigris', (req, res) => {
  console.log(req.headers)
  console.log(req.body.toString())
  res.send('Hello World!')
})

app.listen(3200, () => console.log('Example app listening on port 3200!'))

//     "url": "https://coinatmradar.info/api/tigris/"

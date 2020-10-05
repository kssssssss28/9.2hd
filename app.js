const express = require("express")
const app = express()
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const mineType = require('mime-types')
const multiparty = require('multiparty')
app.use(cors())
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost/users'

app.get('/', function (req, res)
 {
 
})



app.post('/', async function (req, res) {

  let form = new multiparty.Form()
  form.parse(req, function (err, fields, file) {
    console.log(fields)
    console.log(file)
    const tags = fields.tags
    const pictures = file.pictures.map((files, index) => {
      files.tag = tags[index]
      let data = fs.readFileSync(files.path)
      data = new Buffer(data).toString('base64')
      files.base64 = 'data:' + mineType.lookup(files.path) + ';base64,' + data
      return files
    })
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      var DB = db.db("pic")
      var obj = pictures
      DB.collection("pictures").insertMany(obj, function (err, res) {
        db.close()
      })
    })
  
  })

})


app.listen("3006", () => {
  console.log("listenning at port 3006")
})

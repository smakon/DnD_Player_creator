const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'dnd_player_creator'
}
)

conn.connect(err => {
   if (err) {
      console.log(err);
      return err
   } else {
      console.log('Connected to MySQL')
   }
})
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/getUser/id=:id', async (req, res) => {
   let sql = `select * from users where id = ${req.params.id}`
   conn.query(sql, (err, result) => {
      if (err) {
         console.log(err);
      }
      res.send(result)
   })
})


const PORT = 2205
app.listen(PORT, () => {
	console.log(`listening on port: http://localhost:${PORT}`)
})

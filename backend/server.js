const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcryptjs')

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

app.get('/', (req, res) => { 
   res.send('All done')
})

app.post('/getUser/id=:id', async (req, res) => {
   let sql = `select * from users where id = "${req.params.id}"`
   conn.query(sql, (err, result) => {
      if (err) {
         console.log(err);
      }
      res.send(result)
   })
})

app.post('/findUser/name=:name/password=:password', async (req, res) => {
	let sql = `select * from users where name = "${req.params.name}"`
	conn.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		}
		const password = bcrypt.compareSync(req.params.password, result[0].password)
      console.log(password);
      
		if (password == true) {
			res.send(result)
		} else {
			res.send(false)
		}
	})
})

app.post('/createUser/:name/:password', async (req, requestResult) => {
   let isUserSqlReq = `SELECT * FROM users WHERE name = "${req.params.name}"`
   const salt = await bcrypt.genSalt(10)
   const password = await bcrypt.hash(req.params.password, salt)
   let sql = `INSERT INTO users (name,password) VALUES ("${req.params.name}", "${password}");`
   conn.query(isUserSqlReq, (err, result) => {
      let resArr = []
      resArr.push(result)
      if (resArr[0].length == 0) {
         conn.query(sql, (err, res) => {
            if (err) {
               throw err
            } else {
               requestResult.send(true)
            }
         })
      } else {
         requestResult.send(false)
      }
	})
})

app.post('/getUserCharacters/id=:id', async (req, res) => {
   let sql = `SELECT * FROM characters WHERE user_id = ${req.params.id}`
   conn.query(sql, (err, result) => {
      if (err) {
         console.log(err);
      }
      res.send(result)
   })
})

app.post('/getUserBook/id=:id', async (req, res) => { 
   let sql = `SELECT * FROM user_ms_book WHERE user_id = ${req.params.id}`
   conn.query(sql, (err, result) => {
      if (err) {
         console.log(err);
      }
      res.send(result)
   })
})

app.post('/getUserData/id=:id', async (req, res) => { 
   let sql = `SELECT * FROM user_data WHERE user_id = ${req.params.id}`
   conn.query(sql, (err, result) => { 
      if (err) {
         console.log(err);
      }
      console.log(result);
      
      res.send(result)
   })
})

const PORT = 2205
app.listen(PORT, () => {
   console.debug(`listening on port: http://localhost:${PORT}`)
   console.debug(`listening on Network: http://192.168.1.249:${PORT}`)
})

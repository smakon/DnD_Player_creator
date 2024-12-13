// Server
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcryptjs')

// Cloud DB
const conn = mysql.createConnection({
	host: 'jufirjigoop.beget.app',
	user: 'dnd_player_builder',
	password: '12345678Sas)',
	database: 'dnd_player_builder',
})
// setInterval(() => {
// 	conn.query('select 1')
// 	console.log('select')
// }, 2900)

// DB
// const conn = mysql.createConnection({
// 	host: 'ssamikm6.beget.tech',
// 	user: 'ssamikm6_dnd',
// 	password: '12345678Sas)',
// 	database: 'ssamikm6_dnd',
// })

conn.connect(err => {
	if (err) {
		console.log(err)
		return err
	} else {
		conn.query('set session wait_timeout=28800;')
		console.log('Connected to MySQL')
	}
})

conn.wa

app.use(cors())

app.get('/', (req, res) => {
	res.send('All done')
})

app.post('/getUser/:id', async (req, res) => {
	let sql = `select * from users where id = ?`
	conn.query(sql, [req.params.id], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.post('/findUser/:name/:password', async (req, res) => {
	let sql = `select * from users where name = ?`
	conn.query(sql, [req.params.name], (err, result) => {
		if (err) {
			console.log('err')
			res.send(false)
		} else if (result.length == 0) {
			res.send('No user found')
		} else {
			const password = bcrypt.compareSync(
				req.params.password,
				result[0].password
			)

			if (password == true) {
				res.send(result)
			} else {
				res.send(false)
			}
		}
	})
})

app.post('/createUser/:name/:password', async (req, requestResult) => {
	let isUserSqlReq = `SELECT * FROM users WHERE name = ?`
	const salt = await bcrypt.genSalt(10)
	const password = await bcrypt.hash(req.params.password, salt)
	let sql = `INSERT INTO users (name,password) VALUES (?, ?);`
	conn.query(isUserSqlReq, [req.params.name], (err, result) => {
		let resArr = []
		resArr.push(result)
		if (resArr[0].length == 0) {
			conn.query(sql, [req.params.name, password], (err, res) => {
				if (err) {
					throw err
				} else {
					conn.query(isUserSqlReq, [req.params.name], (err, result) => {
						conn.query(
							`INSERT INTO user_data (user_id) VALUES (?)`,
							[result[0].id],
							(err, result) => {
								requestResult.send(true)
							}
						)
					})
				}
			})
		} else {
			requestResult.send(false)
		}
	})
})

app.post('/getUserCharacters/:id', async (req, res) => {
	let sql = `SELECT * FROM characters WHERE user_id = ? order by id DESC`
	conn.query(sql, [req.params.id], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.post('/getUserBook/:id', async (req, res) => {
	let sql = `SELECT * FROM user_ms_book WHERE user_id = ?`
	conn.query(sql, [req.params.id], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.post('/getUserData/:id', async (req, res) => {
	let sql = `SELECT * FROM user_data WHERE user_id = ?`
	conn.query(sql, [req.params.id], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.post(
	'/updateUserData/:id/:dice/:theme/:vibration/:language',
	async (req, res) => {
		let sql = `UPDATE user_data SET theme = ?, vibration = ?, language = ?, dice_count = ? WHERE user_id = ?`
		conn.query(
			sql,
			[
				req.params.theme,
				req.params.vibration,
				req.params.language,
				req.params.dice,
				req.params.id,
			],
			(err, result) => {
				if (err) {
					console.log(err)
				}
				res.send(result)
			}
		)
	}
)

app.post('/createCharacter/:userId', async (req, res) => {
	let sql = `INSERT INTO characters (user_id, create_date) VALUES (?, CURRENT_DATE)`
	conn.query(sql, req.params.userId, (err, result) => {
		if (err) {
			console.log(err)
		}
		const lastIdCharacter = result.insertId

		let sql2 = `INSERT INTO character_secondary_info () VALUES();`
		conn.query(sql2, (err, result2) => {
			if (err) {
				console.log(err)
			} else {
				const lastIdSecondInfo = result2.insertId
				let sql3 = `INSERT INTO character_money () VALUES ();`
				conn.query(sql3, (err, result3) => {
					if (err) {
						console.log(err)
					} else {
						const lastIdMoney = result3.insertId
						let sql4 = `
						INSERT INTO character_info (character_id, character_secondary_info_id, character_money_id) 
						VALUES(?, ?, ?);`
						conn.query(
							sql4,
							[lastIdCharacter, lastIdSecondInfo, lastIdMoney],
							(err, result4) => {
								if (err) {
									console.log(err)
								} else {
									res.send('success')
								}
							}
						)
					}
				})
			}
		})
	})
})

app.get('/passwords', async (req, res) => {
	let sql = `SELECT * FROM users)"`
	conn.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.get('/allCharacters', async (req, res) => {
	let sql = `SELECT * FROM characters order by id DESC`
	conn.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.get('/getCharacter/:id', async (req, res) => {
	let sql = `SELECT * FROM characters WHERE id = ?`
	conn.query(sql, [req.params.id], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.post('/updateCharacter/:id/:level/:race/:class/:name/:hp', async (req, res) => {
	let sql =
		'UPDATE characters SET level = ?, race = ?, class = ?, name = ?, hp = ? WHERE id = ?'
	conn.query(
		sql,
		[
			req.params.level,
			req.params.race,
			req.params.class,
			req.params.name,
			req.params.hp,
			req.params.id,
		],
		(err, result) => {
			if (err) {
				console.log(err)
			}
			res.send(result)
		}
	)
})

app.get('/getCharacterInfo/:character_id', async (req, res) => {
	let sql = 'SELECT * FROM character_info WHERE character_id = ?'
	conn.query(sql, [req.params.character_id], (err, result) => {
		if (err) {
			console.log(err)
		}

		res.send(result)
	})
})

app.get('/getCharacterSecondaryInfo/:id', async (req, res) => {
	let sql = 'SELECT * FROM character_secondary_info WHERE id =?'
	conn.query(sql, [req.params.id], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.get('/getCharacterMoney/:id', async (req, res) => {
	let sql = `SELECT * FROM character_money WHERE id = ?`
	conn.query(sql, [req.params.id], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

app.post(
	'/updateCharacterMoney/:id/:gold/:silver/:platinum/:electrum/:copper',
	async (req, res) => {
		let sql = `UPDATE character_money SET 
						golden_coin = ?, 
						silver_coin = ?, 
						platinum_coin = ?, 
						electrum_coin = ?, 
						copper_coin =? 
						WHERE id = ?`
		conn.query(
			sql,
			[
				req.params.gold,
				req.params.silver,
				req.params.platinum,
				req.params.electrum,
				req.params.copper,
				req.params.id,
			],
			(err, result) => {
				if (err) {
					console.log(err)
				}
				res.send(result)
			}
		)
	}
)

app.post('/updateCharacterSecondaryInfo/:id/:armor/:speed', async (req, res) => {
	let sql = `UPDATE character_secondary_info SET armor = ?, speed = ? WHERE id = ?`
	conn.query(
		sql,
		[req.params.armor, req.params.speed, req.params.id],
		(err, result) => {
			if (err) {
				console.log(err)
			}
			res.send(result)
		}
	)
})


const port = 2205
app.listen(port, (err, result) => {
	console.debug('listening on port %d', port)
})

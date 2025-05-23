
/**
 * GENERATED FILE FROM THE TYPESCRIPT-WORKSHEET EXTENSION
*/

import * as __fs from 'node:fs';
import os from 'node:os';
const dataFile: any[] = [];

async function __tsrun() {
try {

const express =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'express',  called: () => (require('express')), line: 2});
const app =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'app',  called: () => (express()), line: 3});
const mysql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'mysql',  called: () => (require('mysql')), line: 4});
const cors =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'cors',  called: () => (require('cors')), line: 5});
const bcrypt =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'bcrypt',  called: () => (require('bcryptjs')), line: 6});

// Cloud DB
// const conn = mysql.createConnection({
// 	host: 'jufirjigoop.beget.app',
// 	user: 'dnd_player_builder',
// 	password: '12345678Sas)',
// 	database: 'dnd_player_builder',
// })

// local db
const conn =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'conn',  called: () => (mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'dnd_player_creator',
})), line: 17});

// DB
// const conn = mysql.createConnection({
// 	host: 'ssamikm6.beget.tech',
// 	user: 'ssamikm6_dnd',
// 	password: '12345678Sas)',
// 	database: 'ssamikm6_dnd',
// })

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.connect(err => {
	if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 33})) {
		mylog(console.log, {type: 'log', called: [err], line: 34})
		return err
	} else {
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query('set session wait_timeout=28800;')), line: 37})
		mylog(console.log, {type: 'log', called: ['Connected to MySQL'], line: 38})
	}
})), line: 32})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.wa), line: 42})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.use(cors())), line: 44})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/', (req, res) => {
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send('All done')), line: 47})
})), line: 46})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post('/getUser/:id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`select * from users where id = ?`), line: 51})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 53})) {
    			mylog(console.log, {type: 'log', called: [err], line: 54})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 56})
    	})), line: 52})
})), line: 50})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post('/findUser/:name/:password', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`select * from users where name = ?`), line: 61})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.name], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 63})) {
    			mylog(console.log, {type: 'log', called: ['err'], line: 64})
    			 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(false)), line: 65})
    		} else if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (result.length == 0), line: 66})) {
    			 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send('No user found')), line: 67})
    		} else {
    			const password =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'password',  called: () => (bcrypt.compareSync(
                				req.params.password,
                				result[0].password
                			)), line: 69})

    			if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (password == true), line: 74})) {
    				 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 75})
    			} else {
    				 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(false)), line: 77})
    			}
    		}
    	})), line: 62})
})), line: 60})

await tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: async () => (app.post('/createUser/:name/:password', async (req, requestResult) => {
	let isUserSqlReq =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'isUserSqlReq',  called: () => (`SELECT * FROM users WHERE name = ?`), line: 84})
	const salt = await tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'salt',  called: async () => (await tsWorksheetWatch({stringed: 'empty', type: 'expression', hide: true,  called: async () => (await bcrypt.genSalt(10)), line: 85})), line: 85})
	const password = await tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'password',  called: async () => (await tsWorksheetWatch({stringed: 'empty', type: 'expression', hide: true,  called: async () => (await bcrypt.hash(req.params.password, salt)), line: 86})), line: 86})
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`INSERT INTO users (name,password) VALUES (?, ?);`), line: 87})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(isUserSqlReq, [req.params.name], (err, result) => {
    		let resArr =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'resArr',  called: () => ([]), line: 89})
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (resArr.push(result)), line: 90})
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (resArr[0].length == 0), line: 91})) {
    			 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.name, password], (err, res) => {
                				if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 93})) {
                					tsWorksheetWatch({type: 'throw', stringed: 'empty', variable: undefined, called: () => (err), line: 94})
                				} else {
                					 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(isUserSqlReq, [req.params.name], (err, result) => {
                                    						 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(
                                                            							`INSERT INTO user_data (user_id) VALUES (?)`,
                                                            							[result[0].id],
                                                            							(err, result) => {
                                                            								 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (requestResult.send(true)), line: 101})
                                                            							}
                                                            						)), line: 97})
                                    					})), line: 96})
                				}
                			})), line: 92})
    		} else {
    			 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (requestResult.send(false)), line: 108})
    		}
    	})), line: 88})
})), line: 83})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post('/getUserCharacters/:id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM characters WHERE user_id = ? order by id DESC`), line: 114})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 116})) {
    			mylog(console.log, {type: 'log', called: [err], line: 117})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 119})
    	})), line: 115})
})), line: 113})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post('/getUserBook/:id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM user_ms_book WHERE user_id = ?`), line: 124})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 126})) {
    			mylog(console.log, {type: 'log', called: [err], line: 127})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 129})
    	})), line: 125})
})), line: 123})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post('/getUserData/:id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM user_data WHERE user_id = ?`), line: 134})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 136})) {
    			mylog(console.log, {type: 'log', called: [err], line: 137})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 139})
    	})), line: 135})
})), line: 133})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post(
	'/updateUserData/:id/:dice/:theme/:vibration/:language',
	async (req, res) => {
		let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`UPDATE user_data SET theme = ?, vibration = ?, language = ?, dice_count = ? WHERE user_id = ?`), line: 146})
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(
        			sql,
        			[
        				req.params.theme,
        				req.params.vibration,
        				req.params.language,
        				req.params.dice,
        				req.params.id,
        			],
        			(err, result) => {
        				if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 157})) {
        					mylog(console.log, {type: 'log', called: [err], line: 158})
        				}
        				 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 160})
        			}
        		)), line: 147})
	}
)), line: 143})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post('/createCharacter/:userId', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`INSERT INTO characters (user_id, create_date) VALUES (?, CURRENT_DATE)`), line: 167})
	let sql2 =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql2',  called: () => (`INSERT INTO character_secondary_info () VALUES();`), line: 168})
	let sql3 =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql3',  called: () => (`INSERT INTO character_money () VALUES ();`), line: 169})
	let sql4 =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql4',  called: () => (`INSERT INTO character_modify () VALUES();`), line: 170})
	let sql5 =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql5',  called: () => (`INSERT INTO character_skills () VALUES();`), line: 171})
	let sql6 =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql6',  called: () => (`INSERT INTO character_info (character_id,character_secondary_info_id,character_money_id,character_modify_id, character_skills_id) VALUES(?, ?, ?, ?, ?);`), line: 172})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, req.params.userId, (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 174})) {
    			mylog(console.log, {type: 'log', called: [err], line: 175})
    		}
    		const lastIdCharacter =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'lastIdCharacter',  called: () => (result.insertId), line: 177})
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql2, (err, result2) => {
            			if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 179})) {
            				mylog(console.log, {type: 'log', called: [err], line: 180})
            			} else {
            				const lastIdSecondInfo =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'lastIdSecondInfo',  called: () => (result2.insertId), line: 182})
            				 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql3, (err, result3) => {
                            					if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 184})) {
                            						mylog(console.log, {type: 'log', called: [err], line: 185})
                            					} else {
                            						const lastIdMoney =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'lastIdMoney',  called: () => (result3.insertId), line: 187})

                            						 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql4, (err, result4) => {
                                                    							if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 190})) {
                                                    								mylog(console.log, {type: 'log', called: [err], line: 191})
                                                    							} else {
                                                    								const lastIdMod =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'lastIdMod',  called: () => (result3.insertId), line: 193})

                                                    								 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(
                                                                                    									sql5,
                                                                                    									(err, result5) => {
                                                                                    										if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 198})) {
                                                                                    											mylog(console.log, {type: 'log', called: [err], line: 199})
                                                                                    										} else {
                                                                                    											const lastIdSkills =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'lastIdSkills',  called: () => (result5.insertId), line: 201})
                                                                                    											 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(
                                                                                                                                												sql6,
                                                                                                                                												[
                                                                                                                                													lastIdCharacter,
                                                                                                                                													lastIdSecondInfo,
                                                                                                                                													lastIdMoney,
                                                                                                                                													lastIdMod,
                                                                                                                                													lastIdSkills
                                                                                                                                												],
                                                                                                                                												(err, result6) => { 
                                                                                                                                													if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 212})) {
                                                                                                                                														mylog(console.log, {type: 'log', called: [err], line: 213})
                                                                                                                                													} else {
                                                                                                                                														 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(true)), line: 215})
                                                                                                                                													}
                                                                                                                                                                    }
                                                                                                                                											)), line: 202})
                                                                                                                  }
                                                                                    									}
                                                                                    								)), line: 195})
                                                    							}
                                                    						})), line: 189})
                            					}
                            				})), line: 183})
            			}
            		})), line: 178})
    	})), line: 173})
})), line: 166})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/passwords', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM users)"`), line: 232})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 234})) {
    			mylog(console.log, {type: 'log', called: [err], line: 235})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 237})
    	})), line: 233})
})), line: 231})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/allCharacters', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM characters order by id DESC`), line: 242})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 244})) {
    			mylog(console.log, {type: 'log', called: [err], line: 245})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 247})
    	})), line: 243})
})), line: 241})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/getCharacter/:id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM characters WHERE id = ?`), line: 252})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 254})) {
    			mylog(console.log, {type: 'log', called: [err], line: 255})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 257})
    	})), line: 253})
})), line: 251})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post(
	'/updateCharacter/:id/:level/:race/:class/:name/:hp',
	async (req, res) => {
		let sql =
			 tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => ('UPDATE characters SET level = ?, race = ?, class = ?, name = ?, hp = ? WHERE id = ?'), line: 265})
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(
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
        				if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 277})) {
        					mylog(console.log, {type: 'log', called: [err], line: 278})
        				}
        				 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 280})
        			}
        		)), line: 266})
	}
)), line: 261})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/getCharacterInfo/:character_id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => ('SELECT * FROM character_info WHERE character_id = ?'), line: 287})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.character_id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 289})) {
    			mylog(console.log, {type: 'log', called: [err], line: 290})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 292})
    	})), line: 288})
})), line: 286})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/getCharacterSecondaryInfo/:id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => ('SELECT * FROM character_secondary_info WHERE id =?'), line: 297})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 299})) {
    			mylog(console.log, {type: 'log', called: [err], line: 300})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 302})
    	})), line: 298})
})), line: 296})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/getCharacterMoney/:id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM character_money WHERE id = ?`), line: 307})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 309})) {
    			mylog(console.log, {type: 'log', called: [err], line: 310})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 312})
    	})), line: 308})
})), line: 306})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post(
	'/updateCharacterMoney/:id/:gold/:silver/:platinum/:electrum/:copper',
	async (req, res) => {
		let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`UPDATE character_money SET 
						golden_coin = ?, 
						silver_coin = ?, 
						platinum_coin = ?, 
						electrum_coin = ?, 
						copper_coin =? 
						WHERE id = ?`), line: 319})
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(
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
        				if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 337})) {
        					mylog(console.log, {type: 'log', called: [err], line: 338})
        				}
        				 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 340})
        			}
        		)), line: 326})
	}
)), line: 316})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post(
	'/updateCharacterSecondaryInfo/:id/:armor/:speed',
	async (req, res) => {
		let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`UPDATE character_secondary_info SET armor = ?, speed = ? WHERE id = ?`), line: 349})
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(
        			sql,
        			[req.params.armor, req.params.speed, req.params.id],
        			(err, result) => {
        				if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 354})) {
        					mylog(console.log, {type: 'log', called: [err], line: 355})
        				}
        				 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 357})
        			}
        		)), line: 350})
	}
)), line: 346})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/getCharacterModify/:id', async (req, res) => { 
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => ('SELECT * FROM character_modify WHERE id = ?'), line: 364})
    tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
          if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 366})) {
             mylog(console.log, {type: 'log', called: [err], line: 367})
          }
           tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 369})
       })), line: 365})
})), line: 363})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post('/updateCharacterModify/:id/:strength/:dexterity/:physique/:intelligence/:wisdom/:charisma',async (req, res) => { 
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`UPDATE character_modify SET Strength = ?, Dexterity = ?, Physique = ?, Intelligence = ?, Wisdom = ?, Charisma = ? WHERE id = ?`), line: 374})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(
    		sql,
    		[
    			req.params.strength,
    			req.params.dexterity,
    			req.params.physique,
    			req.params.intelligence,
    			req.params.wisdom,
    			req.params.charisma,
    			req.params.id,
    		],
    		(err, result) => {
    			if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 387})) {
    				mylog(console.log, {type: 'log', called: [err], line: 388})
    			}
    			 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 390})
    		}
    	)), line: 375})
})), line: 373})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/getCharacterSkills/:id', async (req, res) => {
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => ('SELECT * FROM character_skills WHERE id = ?'), line: 396})
	 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.id], (err, result) => {
    		if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 398})) {
    			mylog(console.log, {type: 'log', called: [err], line: 399})
    		}
    		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 401})
    	})), line: 397})
})), line: 395})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.post('/updateCharacterSkills/:id/:skills', async (req, res) => { 
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => ('UPDATE character_skills SET skills = ? WHERE id = ?'), line: 406})
    tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.skills, req.params.id], (err, result) => {
          if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 408})) {
             mylog(console.log, {type: 'log', called: [err], line: 409})
          }
           tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 411})
       })), line: 407})
})), line: 405})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/getCharactersOfName/:string/:user_id', async (req, res) => { 
	let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM characters WHERE name LIKE '%${req.params.string}%' AND user_id = ? order by id DESC`), line: 416})
    tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.user_id],(err, result) => {
          if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 418})) {
             mylog(console.log, {type: 'log', called: [err], line: 419})
          }
           tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 421})
       })), line: 417})
})), line: 415})

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.get('/filter/:race/:class/:user_id', async (req, res) => { 
	if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (req.params.class !== 'none' && req.params.race !== 'none'), line: 426})) {
		let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM characters WHERE race = ? AND class = ? AND user_id = ? order by id DESC`), line: 427})
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.race, req.params.class, req.params.user_id], (err, result) => { 
        			if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 429})) {
                    mylog(console.log, {type: 'log', called: [err], line: 430})
                 }
                  tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 432})
        		})), line: 428})
	} else if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (req.params.race == 'none'), line: 434})) {
		let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM characters WHERE class = ? AND user_id = ? order by id DESC`), line: 435})
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.class, req.params.user_id], (err, result) => {
        			if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 437})) {
        				mylog(console.log, {type: 'log', called: [err], line: 438})
        			}
        			 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 440})
        		})), line: 436})
	} else if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (req.params.class == 'none'), line: 442})) {
		let sql =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'sql',  called: () => (`SELECT * FROM characters WHERE race = ? AND user_id = ? order by id DESC`), line: 443})
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (conn.query(sql, [req.params.race, req.params.user_id], (err, result) => {
        			if ( tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (err), line: 445})) {
        				mylog(console.log, {type: 'log', called: [err], line: 446})
        			}
        			 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(result)), line: 448})
        		})), line: 444})
	} else {
		 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (res.send(false)), line: 451})
	}
})), line: 425})

const port =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'port',  called: () => (2205), line: 455});
 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (app.listen(port, (err, result) => {
	mylog(console.debug, {type: 'log', called: ['listening on port %d', port], line: 457})
})), line: 456})

} catch(error) {

  
}
}

__tsrun().then()

let ___done_ts_worksheet = "";
___done_ts_worksheet = "asdf";


function stringify(obj: any) {
  let cache: any = [];
  let str = JSON.stringify(obj, function(key, value) {
    if(typeof value === 'function') {
      const fn = __tsGetFn(value.toString()) ?? __tsGetArrowFn(value.toString());
      return fn;
    }
    if(value === undefined) {
      return '__TS_WORKSHEET_UNDEFINED__'
    }
    if (typeof value === "object" && value !== null) {
      if(value?.then) {
        return 'Promise';
      }
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
      return value === undefined ? '__TS_WORKSHEET_UNDEFINED__' : value;
    }
    return value;
  });
  cache = null; // reset the cache
  return str;
}



function __tsGetFn(str: string) {
  const noSpaces = str.replaceAll(' ', '');
  const __tsFnWithArgs = /(function.*\(.*\))/
  const result = __tsFnWithArgs.exec(noSpaces);
  if(result?.length) {
    
    const fn = result.at(-1);
    const afterKey = fn.substring('function'.length);
    return 'function ' + afterKey;
  }
  return undefined;
}

function __tsGetArrowFn(str: string) {
  const noSpaces = str.replaceAll(' ', '');
  const __tsArrowWithArgs= /(\({0,1}[A-Za-z]{1}[A-Za-z0-9_,]*\){0,1})=>/;
const __tsArrorWithoutArgs = /\(\){1}=>/;
  const arrowWithArgsResult = __tsArrowWithArgs.exec(noSpaces);
  if(arrowWithArgsResult?.length) {
    const args =  arrowWithArgsResult.at(-1);
    return 'arrow fn(' + args + ')';
  }
  const arrowWithoutArgsResult = __tsArrorWithoutArgs.exec(noSpaces);
  if(arrowWithoutArgsResult?.length) {
    return 'arrow fn()';
  }
  return undefined;
}

function tryToStringify(value: any) {
    let res = '';
    try {
        switch(typeof value) {
            case 'object':
                res = stringify(value);
                break;
            case 'function':
                res = __tsGetFn(value.toString()) ?? __tsGetArrowFn(value.toString());
                break;
            case 'bigint':
                res = value?.toString();
                break;    
            default: 
                // isNaN
                if(value !== value) {
                  res = value?.toString();
                } else {
                  res = value === undefined ? '__TS_WORKSHEET_UNDEFINED__' : value;
                }
        }
    } catch(err: any) {
        return err?.message.startsWith('Convert') ? 'Non displayable' : err?.message;
    }
    return res?.length > 2000 ? res?.substring(0, 2000) : res;
}

function __onError(error: any, dataValue: any) {
  const fixedError = error?.stack ?? error;
  const stringError = JSON.stringify(fixedError, Object.getOwnPropertyNames(fixedError));

  dataValue.type = 'error';
  dataValue.called = [error.message , stringError];
}
function save(hide: boolean, dataValue?: any) {
  if(hide) {
    return;
  }
  const isIpcCompatible = !false && typeof Bun === 'undefined' && !globalThis?.Deno && !os.platform().startsWith('win');
  if(dataValue) {
    dataFile.push(dataValue);
  }

  if(isIpcCompatible) {
    process.send(dataValue);
  }

  if(!dataValue && !isIpcCompatible) {
    __fs.writeFileSync('c:\\Users\\s-sam\\OneDrive\\Документы\\GitHub\\DnD_Player_creator\\backend\\.ws.data.json', JSON.stringify(dataFile));  
  }
}

function tsWorksheetWatch(data: {stringed: string, hide?: boolean, type: string, variable?: string, called: () => any, line: number }) {
  const dataValue = {...data, called: 'Failed Promise. Please use a .catch to display it'};
  let called: any;
  try {
      called = data.called();
  } catch(error) {
      __onError(error, dataValue);
      save(data.hide, dataValue);
      throw error;
  }

  if(data.type === 'throw') {
      __onError(called, dataValue);
      save(data.hide, dataValue);
      throw called;
  }

  if(called?.then) {
     data.called = called.then((r: any) => {
      dataValue.prefix = 'Resolved Promise: ';
        dataValue.called = tryToStringify(r);
         save(data.hide, dataValue);
         return r;
     }).catch((err: any) => {
      dataValue.prefix = 'Rejected Promise: ';
      dataValue.called = tryToStringify(err);
      dataValue.type = 'error';
      save(data.hide, dataValue);
      throw err;
     });
  } else {
      dataValue.called = tryToStringify(called);
      save(data.hide, dataValue);
  }

  return called;
}

function mylog(logFn: any, data: {type: string, called: any[], line: number }) {
    logFn(...data.called);
    data.called = data.called.map(entry => tryToStringify(entry)); 
    save(false, data);
}

if (globalThis?.Deno) {

  addEventListener("error", (event) => {
    event.preventDefault();
  });
  
  addEventListener("unhandledrejection", (e) => {
    e.preventDefault();
  });
  
  addEventListener("unload", () => {
    save(false);
  });
  }
  process?.on('uncaughtException', (error: Error) => {   
  });
  
  process?.on('unhandledRejection', () => {})
  
  process?.on('beforeExit', e => {
    if(typeof Bun !== 'undefined' && dataFile.some(e => e.type === 'error')) {
      process.exit(0);
    }
  })
  
  process?.on('exit', function() {
    save(false);
  });
      
    
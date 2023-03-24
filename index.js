const Pool = require('pg').Pool
const pool = new Pool({
  user: 'susanamunoz',
  host: 'localhost',
  database: 'vespertino',
  password: '',
  port: 5432,
})


pool.query('SELECT * FROM usuario', (error, results) => {
    if (error) {
      throw error
    }
    console.table(results.rows);
})

let nombre = 'usuario1'
pool.query('SELECT * FROM usuario where nombre = $1', [nombre], (error, results) => {
    if (error) {
      throw error
    }
    console.table(results.rows);
})


let nombre2 = "usuario1' or 1=1--"
pool.query('SELECT * FROM usuario where nombre = $1', [nombre2], (error, results) => {
    if (error) {
      throw error
    }
    console.table(results.rows);
})

let nombre3 = "usuario1'; select * from sbo.master -- "

console.log("SELECT * FROM usuario where nombre = '" + nombre3 +"'")
pool.query("SELECT * FROM usuario where nombre = '" + nombre3 +"'",  (error, results) => {
    if (error) {
      throw error
    }
    console.table(results.rows);
})

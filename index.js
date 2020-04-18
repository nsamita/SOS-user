const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "12345",
    host:"localhost",
    port: 5432,
    database: "postgres"
})

client.connect()
.then(() => console.log("Connected successfully"))
.catch(e => console.log(e))
.finally(()=> client.end())


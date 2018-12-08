const express= require ('express')
const bodyParser = require ('body-parser')
const PORT = 4040
const app = express()
const controller = require('./controller')

app.use(express.json())

app.get('/api/allRuns', controller.getAll)

app.post('/api/newRun', controller.createRun)

app.listen(PORT, ()=>console.log( `listening on port ${PORT}`))
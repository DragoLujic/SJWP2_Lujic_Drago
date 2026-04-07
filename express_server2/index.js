import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'       
import bodyParser from 'body-parser'
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/login', (req, res) => {
    const street_name = req.body.street_name
    const pet_name = req.body.pet_name  

    console.log("Street Name:", street_name)
    console.log("Pet Name:", pet_name)
    res.send(`Street Name: ${street_name}, Pet Name: ${pet_name}`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})  
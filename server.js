const express = require('express')
const config = require('dotenv')
const http = require('http')
const { ConnectDB } = require('./config/ConnectDB')
const app = express()
const expressLayout = require('express-ejs-layouts')


const server = http.createServer(app)
config.config({ path: './config/settings.env' })

app.use(express.static('public'))

app.use(expressLayout)
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')

app.get('/', (req, res) => {

  console.log('here')
  res.render('home/home')
})

ConnectDB()

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
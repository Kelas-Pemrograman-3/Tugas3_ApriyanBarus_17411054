const server = require('express')()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const port = 5000
const mongooURI='mongodb://localhost:port:27017/dbtugas'

mongoose.connect(mongooURI,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
}).then (()=>{
  console.log('connect to db Success')
}).catch(err=>{
  console.log('error: '+err)
})

server.use(bodyParser.json({
  extended:'true',
  limit:'50mb'
}))

server.use(bodyParser.urlencoded({
  extended:'true',
  limit:'50mb'
}))

server.use('/mahasiswa',require('./router/mahasiswa'))
server.use('/matakuliah',require('./router/matakuliah'))

server.listen(port, function(){
  console.log('Server Started on port ' +port)
})
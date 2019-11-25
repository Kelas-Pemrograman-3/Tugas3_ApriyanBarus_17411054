const mongoose=require('mongoose')
const Schema=mongoose.Schema
const matakuliahSchema=new Schema({
NamaMatkul:{
  type:String
},
Jam :{
  type:String
},
Ruang :{
  type:String
},
IdDosen :{
  type:String
},
NamaDosen :{
  type:String
}
})

module.exports = mongoose.model('matakuliah',matakuliahSchema)
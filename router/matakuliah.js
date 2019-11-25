const matakuliah=require('express')()
const matakuliahcontroler =require('../controler/matakuliah')

matakuliah.post('/input',(req,res)=>{
  matakuliahcontroler.inputMatakuliah(req.body)
  .then(result=>{
    res.json(result)
  })
  .catch(err =>{
    res.json(err)
  })
})

module.exports=matakuliah
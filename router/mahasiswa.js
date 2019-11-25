const mahasiswa=require('express')()
const mahasiswacontroler =require('../controler/mahasiswa')

mahasiswa.post('/input',(req,res)=>{
  mahasiswacontroler.inputMahasiwa(req.body)
  .then(result=>{
    res.json(result)
  })
  .catch(err =>{
    res.json(err)
  })
})

module.exports=mahasiswa
const mahasiswamodel=require('../model/mahasiswa')

exports.inputMahasiwa = (data) =>
new Promise((resolve, reject)=> {
  mahasiswamodel.create(data)
  .then(res => {
    resolve({
      error: false,
      pesan:'Data Berhasil Di Input'
    })
  })
  .catch(()=>{
    reject({
      error: true,
      pesan:'Data Gagal Di Input'
    })
  })
})
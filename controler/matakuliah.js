const matakuliahmodel=require('../model/matakuliah')

exports.inputMatakuliah = (data) =>
new Promise((resolve, reject)=> {
  matakuliahmodel.create(data)
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
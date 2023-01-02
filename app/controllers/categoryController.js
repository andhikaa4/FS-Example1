const db = require('../models')
const Category = db.category

exports.create = (req,res) => {
    Category.create(req.body)
        .then(() => res.send({ message :'data berhasil dibuat'}))
        .catch(err => res.status(500).send({message:err.message}))
}
exports.update = (req,res) => {
    const id = req.params.id
    Category.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({message:'Tdak dapat mengubah data'})
            }
            res.send({message:"data berhasil diubah"})
        })
        .catch(err => res.status(500).send({message:res.message}))
}
exports.findAll = (req,res) => {
    Category.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message:err.message}))
}
exports.delete = (req,res) => {
    const id = req.params.id

    Category.findByIdAndRemove(id)
    .then(data => {
        if (!data){
            res.status(404).send({message:"Tidak dapat menghapus data dihapus"})
        }
        res.send({message:"Data Berhasil dihapus"})
    })
    .catch(err => res.status(500).send({message:err.message}))
}
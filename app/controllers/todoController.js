const db = require('../models')
const todo = db.todo

exports.create = (req,res) => {
    todo.create(req.body)
        .then(() => res.send({ message :'data berhasil dibuat'}))
        .catch(err => res.status(500).send({message:err.message}))
}
exports.update = (req,res) => {
    const id = req.params.id
    todo.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({message:'Tdak dapat mengubah data'})
            }
            res.send({message:"data berhasil diubah"})
        })
        .catch(err => res.status(500).send({message:res.message}))
}
exports.findAll = (req,res) => {
    todo.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message:err.message}))
}

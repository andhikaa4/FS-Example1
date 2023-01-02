const db = require('../models')
const User = db.user

exports.Register = (req,res) => {
    User.create(req.body)
        .then(() => res.send({ message :'data berhasil dibuat'}))
        .catch(err => res.status(500).send({message:err.message}))
}
exports.Login = (req,res) => {
    User.find()
        .then(data => {
          const resp =  data.filter(p => p.username === req.body.username)
            if(resp[0].password === req.body.password){
                res.send({message:resp[0].name})
            }
        })
        .catch(err => res.status(500).send({message:err.message}))
}


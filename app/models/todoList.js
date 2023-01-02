module.exports = mongoose => {
    const schema = mongoose.Schema({
        todo:String,
        status:String,
        category:String,
        color:String,
        user:String,
    });

    schema.method('toJSON', function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object
    })

    return mongoose.model("todo", schema)
};

module.exports = mongoose => {
    const schema = mongoose.Schema({
        category: String,
        user: String,
    });

    schema.method('toJSON', function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object
    })

    return mongoose.model("category", schema)
};
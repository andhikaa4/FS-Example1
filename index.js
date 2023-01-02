const express = require("express")
const cors = require("cors");
const db = require('./app/models')

const app = express()

const corsOptions = {
    origin:"*",
};

app.use(cors(corsOptions));
app.use(express.json());

db.mongoose.connect(db.url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("database Connected"))
.catch(err => console.log(err.message))

require('./app/routes/category')(app);
require('./app/routes/user')(app);
require('./app/routes/todo')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`))

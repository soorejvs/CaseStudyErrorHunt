const mongoose = require('mongoose');
//const uri = "mongodb+srv://soorej:Un6cp@cluster0.zy0kvtv.mongodb.net/Library?retryWrites=true&w=majority";
//mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(`mongodb+srv://soorej:Un6cp@cluster0.zy0kvtv.mongodb.net/Library?retryWrites=true&w=majority`).then(()=>{console.log('Database Connected')});

//mongoose.connect('mongodb://localhost:27017/Library');

const Schema = mongoose.Schema;
//mongoose.set('useFindAndModify', false);


const User = new Schema({
    uid : String,
    pwd : String
});

const userdata = mongoose.model('userdata',User);

module.exports = userdata;
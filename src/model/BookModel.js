const mongoose = require('mongoose');
const uri = "mongodb+srv://soorej:Un6cp@cluster0.zy0kvtv.mongodb.net/Library?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true,useNewUrlParser: true  });
//mongoose.connect(`mongodb+srv://soorej:Un6cp@cluster0.zy0kvtv.mongodb.net/Library?retryWrites=true&w=majority`).then(()=>{console.log('Database Connected')});

//mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;

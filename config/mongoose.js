const mongoose = require('mongoose');

mongoose.connect('mongodb://FadhilGanteng:programmersenja@localhost:27017?authSource=admin');

const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', () => console.log('server database terhubung'));
const { MongoClient } = require('mongodb');

const url = 'mongodb://FadhilGanteng:programmersenja@localhost:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('koneksi berhasill')
    } catch (error) {
        console.log(error)
    }
})();

const db = client.db('eduwork-bljr');

module.exports = db;
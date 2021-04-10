
const config = require('./conf');
const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://${config.users.readOnly.user}:${config.users.readOnly.password}@${config.hostlist}`;

exports.select = async function select(collectionName, query) {
    let promise = new Promise(function(resolve) {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(async function(err) {
            const collection = client.db(config.database).collection(collectionName).find(query).toArray(function(err, result) {
            resolve(result);
            client.close();
          });
        });
    })

    return promise;
}

exports.selectAll = async function selectAll(collectionName) {
    let promise = new Promise(function(resolve) {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(async function(err) {
            const collection = client.db(config.database).collection(collectionName).find({}).toArray(function(err, result) {
            resolve(result);
            client.close();
          });
        });
    })

    return promise;
}
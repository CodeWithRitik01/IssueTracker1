const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://IssueTracker:<issue123>@cluster0.grlkjtq.mongodb.net/?retryWrites=true&w=majority'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;
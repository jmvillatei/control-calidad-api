import { connect } from 'mongoose';

const URI = 'mongodb+srv://jmvillatei:1234@crud-mongo-v77na.mongodb.net/testcalidad?retryWrites=true&w=majority';

export async function startConnection(){
    await connect(URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
        .then(function (db) { // <- db as first argument
            console.log('Base conectada')
        })
        .catch(function (err) {
            console.log('Error, BD no conectada');
        });
}

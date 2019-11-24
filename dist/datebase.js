"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const URI = 'mongodb+srv://jmvillatei:1234@crud-mongo-v77na.mongodb.net/testcalidad?retryWrites=true&w=majority';
async function startConnection() {
    await mongoose_1.connect(URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
        .then(function (db) {
        console.log('Base conectada');
    })
        .catch(function (err) {
        console.log('Error, BD no conectada');
    });
}
exports.startConnection = startConnection;

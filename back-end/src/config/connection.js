import mongoose  from 'mongoose';

function connection() {
    mongoose.connect("mongodb://localhost/fullstackeletro",
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB conectou com sucesso!");
    }).catch((error) => {
        console.log(error)
    });
}

export default connection();

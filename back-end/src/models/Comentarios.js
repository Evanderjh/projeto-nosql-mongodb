import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ComentarioSchema = new Schema({
    nome: {
        type: String
    }, msg: {
        type: String
    }, data: {
        type: Date,
        default: new Date()
    }
});

const modelo = model("comentarios", ComentarioSchema);

export default modelo;

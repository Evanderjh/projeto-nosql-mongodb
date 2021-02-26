import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProdutoSchema = new Schema({
    categoria: {
        type: String
    },nome: {
        type: String
    }, preco: {
        type: Number
    }, preco_final: {
        type: Number
    }, img: {
        type: String
    }
});

const modelo = model("produtos", ProdutoSchema);

export default modelo;

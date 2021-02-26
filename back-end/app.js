import app from './src/config/server.js';
import connection from './src/config/connection.js';

import Produtos from './src/models/Produtos.js'
import Comentarios from './src/models/Comentarios.js';

app.get("/produtos", async (req, res) => {
    const resultado = await Produtos.find();
    res.json(resultado);
});

app.post("/produtos", async (req, res) => {
    const { categoria, nome, preco, preco_final, img } = req.body;
    let resultado = await Produtos.create({ categoria, nome, preco, preco_final, img });
    res.json(resultado);
});

app.get("/comentarios", async (req, res) => {
    const resultado = await Comentarios.find();
    res.json(resultado);
});

app.post("/comentarios", async (req, res) => {
    const { nome, msg } = req.body;
    let resultado = await Comentarios.create({ nome, msg });
    res.json(resultado);
});

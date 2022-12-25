import express from "express";
import db from "./config/dbconnect.js"
//import { Express } from "express";

db.on("error", console.log.bind(console, "Erro de conexao"));
db.once("open", () =>{
    console.log("Conecxao estabelecida");
})
const app = express();

app.use(express.json());

/*const linha = [
    {id: 1, "Linha": "UEMA-IPASE"},
    {id: 2, "Linha": "TROPICAL-SAO-FRANCISCO"}
]*/

app.get('/', (req,res) => {
    res.status(200).send('BUSSSS');
})

app.get('/linhas', (req,res) =>{
    res.status(200).json(linha);
})

app.post('/linhas', (req,res) =>{
    linha.push(req.body);
    res.status(201).send('Linha cadastrada');
})

app.get('/linhas/:id', (req,res)=>{
    let index = buscaLinhas(req.params.id);
    res.json(linha[index]);
})

app.put('/linhas/:id', (req, res) =>{
    let index = buscaLinhas(req.params.id);
    linha[index].Linha = req.body.Linha;
    res.json(linha)
})

app.delete('/linhas/:id', (req, res) =>{
    let {id} = req.params;
    let index = buscaLinhas(id);
    linha.splice(index, 1);
    res.send(`Livre ${id} removido`);
})

function buscaLinhas(id){
    return linha.findIndex(linha => {
        return linha.id == id;
    });
}

export default app
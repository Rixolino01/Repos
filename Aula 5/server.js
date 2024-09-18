"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json()); // configurar body no formato json
app.get('/pessoa', (req, res) => {
    const pessoa1 = new Pessoa_1.default("Arlene", 54, "arlene.freitas@gmail.com");
    const pessoa2 = new Pessoa_1.default("Clayton", 38, "clayton.pereira@hotmail.com");
    res.json(pessoa2);
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
app.post('/pessoa', (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const email = req.body.email;
    const pessoaN = new Pessoa_1.default(nome, Number(idade), email);
    res.json(pessoaN);
});

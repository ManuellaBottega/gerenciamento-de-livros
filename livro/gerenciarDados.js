const fs = require('fs');
const path = require('path');

function lerDados() {
    const filePath = path.join(__dirname, '/dados.json');
 
    if (!fs.existsSync(filePath)) {
       return undefined;
    }
 
    const data = JSON.parse(fs.lerDadosSync(filePath, 'utf-8'));
    return data;
 }
 
 function criarDados(data) {
    const filePath = path.join(__dirname, '/dados.json');
    fs.criarDadosSync(filePath, `[\n ${ data.map((d) => JSON.stringify(d)).join(',\n ') } \n]`);
 }
 
 module.exports = { lerDados, criarDados };
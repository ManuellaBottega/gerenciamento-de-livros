const fs = require('fs');
const path = require('path');

function lerDados() {
   const filePath = path.join(__dirname, '/dados.json');

   if (!fs.existsSync(filePath)) {
       return [];
   }

   try {
       const data = fs.readFileSync(filePath, 'utf-8');
       if (data.trim() === '') {
           return [];
       }
       return JSON.parse(data);
   } catch (error) {
       console.error('Erro ao ler ou parsear o arquivo de dados:', error.message);
       return [];
   }
}
 
 function criarDados(data) {
    const filePath = path.join(__dirname, '/dados.json');
    const jsonData = JSON.stringify(data, null, 2); 
    fs.writeFileSync(filePath, jsonData);
 }
 
 module.exports = { lerDados, criarDados };
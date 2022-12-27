const fs = require("fs");

let archivo = fs.readFileSync('./info.json', 'utf-8');

archivo = JSON.parse(archivo);
module.exports = {
    archivo
}

function ListarA(){
    const info = require("./Parsear.js");
    let midName_arr = Object.values(info.archivo)

    for(el of midName_arr){
        console.log(el.Apellido)
        }
}
module.exports = {
    ListarA
}
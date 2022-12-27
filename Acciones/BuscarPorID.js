

function BPID(){
    const info = require("./Parsear.js");
    const val_arr = Object.values(info.archivo)
    const id_ = process.argv[3]
for(el of val_arr){
    if(el.id == id_){
        return el;
    }
}
}
module.exports = {
    BPID
}
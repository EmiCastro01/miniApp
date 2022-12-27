const A1 = require("./Acciones/ListarNombres.js")
const A2 = require("./Acciones/ListarApellidos.js")
const A3 = require("./Acciones/BuscarPorNombre.js")
const A4 = require("./Acciones/BuscarPorID.js")

let accion = process.argv[2]

switch(accion){
    case 'ListarNombres':
        A1.ListarN();
        break;
    case 'ListarApellidos':
        A2.ListarA();
        break;
    case 'BuscarPorNombre':
        console.log(A3.BPN());
        break;
    case 'BuscarPorID':
        console.log(A4.BPID());
        break;
    default:
        console.log("Comando Incorrecto")

}


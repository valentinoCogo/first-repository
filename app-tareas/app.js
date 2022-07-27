//

//
const fs = require("fs");
const funcionesTarea = require("./funcionesTareas");

const tareasJson = fs.readFileSync("./tareas.json", "utf-8");

const tareas = JSON.parse(tareasJson);

const accion = process.argv[2];

const funcion = require("./funcionesTareas");

switch (accion) {
  case "listar":
    {
      console.log(`listado de tareas \n------------------------`);
      funcion.listarTareas();
    }
    break;
  case undefined:
    {
      console.log(
        `Atención - Tienes que pasar una acción. \nLas acciones disponibles son listar \n--------------------------------------`
      );
    }
    break;
  default:
    {
      console.log(
        `-----------------------------------\nEsa accion no esta permitida\nLas acciones disponibles son listar\n-----------------------------------`
      );
    }
    break;
}

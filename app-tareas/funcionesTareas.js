//

//

//

const fs = require("fs");

let funcionesTarea = {
  //
  archivoJson: "./tareas.json",
  //
  leerArchivo: function () {
    const tareasJson = fs.readFileSync(this.archivoJson);
    const tareas = JSON.parse(tareasJson);
    return tareas;
  },
  //
  listarTareas: function () {
    const tareas = this.leerArchivo();
    tareas.forEach((el, i) => {
      console.log(`${i + 1}- ${el.titulo} - Estado: ${el.estado} `);
    });
  },
};

module.exports = funcionesTarea;

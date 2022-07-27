const autos = require("./autos");

const concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    let result = autos.find((el) => el.patente === patente);
    if (result == undefined) {
      return null;
    }
    return result;
  },
  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
    auto.vendido = true;
    return auto;
  },
  autosParaLaVenta: function () {
    let autosVender = this.autos.filter((el) => el.vendido === false);
    return autosVender;
  },
  autosNuevos: function () {
    autosParaVender = this.autosParaLaVenta();
    const autosNuevos = autosParaVender.filter((el) => el.km < 100);
    return autosNuevos;
  },
  listaDeVentas: function () {
    let precios = [];
    this.autos.forEach(function (auto) {
      if (auto.vendido === true) {
        precios.push(auto.precio);
      }
    });
    return precios;
  },
  totalDeVentas: function () {
    const gananciaTotal = this.listaDeVentas();
    const total = gananciaTotal.reduce((acc, el) => acc + el, 0);
    return total;
  },
  puedeComprar: function (persona, auto) {
    if (
      auto.precio <= persona.capacidadDePagoTotal &&
      auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
    ) {
      return true;
    } else {
      return false;
    }
    // console.log(puedeComprar);
  },
};

// console.log(concesionaria.buscarAuto("APL123t"))
// console.log(concesionaria.venderAuto("JJK116", "APL123"));
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());
console.log(
  concesionaria.puedeComprar(
    {
      nombre: "Juan",
      capacidadDePagoEnCuotas: 20000,
      capacidadDePagoTotal: 100000,
    },
    autos
  )
);

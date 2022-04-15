const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"  },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"  },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"  },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"  },
    { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
    { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
    { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
    { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
    { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro"},
    { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
    { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
  ],

  
  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};

// #PARTE 1
const {vendedoras, sucursales,ventas,precios} = local

//precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes,
//que es la suma de los precios de cada componente incluido.

//Funcion auxiliar - devuelve el precio de un solo componente
const precioComponente = (componente) => {
  const {precios} = local
  for (const precio of precios){
  if (precio.componente === componente){
    return precio.precio
  }
 }
}
//console.log(precioComponente("Motherboard ASUS 1500"))

const precioMaquina = (arrayComponente) => {
  let acc = 0
  for (const componente of arrayComponente){
    acc += precioComponente(componente)
  }
   return acc
}
//console.log(precioMaquina(["Motherboard MZI", "RAM Quinston Fury"]))

//cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido,
//o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro,
//se asume que está identificada por la variable ventas

const cantidadVentasComponente = (nombreComponente) => {
let acc = 0
const {ventas} = local
  for (const venta of ventas){
    for (const componente of venta.componentes){
      if (nombreComponente === componente){
        acc ++
      }
    }
  }
  return acc
}
//console.log(cantidadVentasComponente("RAM Quinston Fury"));

//vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que
//más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. 
//El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde
//el 1 (enero) hasta el 12 (diciembre).

// funcion auxiliar - filtra ventas por fecha
const ventasDelMes = (mes, anio) => {
  return ventas.filter (venta => venta.fecha.getMonth() === mes -1 && venta.fecha.getFullYear() === anio
  )
}

//console.log(ventasDelMes(2, 2019))

// funcion auxiliar - cuenta la cantidad de ventas y lo suma en $$
const contadorDeVentas = (array) => {
  let acc = 0
  for (const arr of array){
    acc += precioMaquina(arr.componentes)
  }
  return acc
}

//console.log(contadorDeVentas(ventas));

const vendedoraDelMes = (mes, anio) => {
  let acc = 0
  let vendedoraQueMasVendio = ""

  const {vendedoras} = local
  for (const vendedora of vendedoras){
    if (acc < contadorDeVentas((ventasDelMes(mes, anio)).filter(venta => venta.nombreVendedora === vendedora))){
        acc = contadorDeVentas((ventasDelMes(mes, anio)).filter(venta => venta.nombreVendedora === vendedora))
       vendedoraQueMasVendio = vendedora

    }
  }
  return vendedoraQueMasVendio
}

//console.log(vendedoraDelMes(2,2019));

//ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre)

const ventasMes = (mes, anio) => contadorDeVentas(ventasDelMes(mes, anio))

//console.log(ventasMes(2,2019))


//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
const ventasVendedora = (vendedora) => contadorDeVentas(ventas.filter(venta => venta.nombreVendedora === vendedora))
  
//console.log(ventasVendedora("Ada")); //Importe en pesos

const ventasPorVendedora = (nombreVendedora)=> ventas.filter(venta => venta.nombreVendedora === nombreVendedora)

//console.log(ventasPorVendedora("Grace")) //todas las ventas de cada vendedora

//componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente.
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
const componenteMasVendido = () => {
  let masVendido = ""
  let acc = 0

  for (const precio of precios){
   if (acc < cantidadVentasComponente(precio.componente)){
     acc = cantidadVentasComponente(precio.componente)
     masVendido = precio.componente
   }
   
  }
  return masVendido
}
//console.log(componenteMasVendido());


//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. 
//El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const huboVentas = (mes, anio) => ventasDelMes(mes, anio).length > 0 
//console.log(huboVentas(3,2019))


// #PARTE 2

//Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

const ventasSucursal = (sucursal) => contadorDeVentas(ventas.filter(venta => venta.sucursal === sucursal))
//console.log(ventasSucursal("Centro")) // en peeesos

//Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve
//el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas.
//El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero)
//hasta el 12 (diciembre).

const sucursalDelMes = (mes, anio) => {
let sucursalQueMasVendio = ""
let acc = 0

for (const sucursal of sucursales){
  if (acc < (contadorDeVentas(ventasDelMes(mes,anio).filter(venta => venta.sucursal === sucursal)))){
     acc =  (contadorDeVentas(ventasDelMes(mes,anio).filter(venta => venta.sucursal === sucursal)))
     sucursalQueMasVendio = sucursal
  } 
}
  return sucursalQueMasVendio
}

//console.log(sucursalDelMes(2,2019));

//renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
const renderPorMes = (anio) => {
let meses = []
for (const venta of ventas) {
  !meses.includes(venta.fecha.getMonth()+1) ? meses.push(venta.fecha.getMonth()+1) : false
}
meses.sort((a,b) => {return a-b})

let acc = ""
for (const mes of meses) {
  acc += `<li>En ${mes}/${anio} las ganacias fueron de $${ventasMes(mes,anio)}</li>`
} 
   return acc
}
//console.log(renderPorMes(2019));

//renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
const renderPorSucursal = () => {
let acc = ""
for (const sucursal of sucursales) {
  acc += `<li>En ${sucursal} las ganacias fueron de ${ventasSucursal(sucursal)}</li>`
}
  return acc
}
//console.log(renderPorSucursal());


const vendedoraHistorica = () => {
  let acc = 0
  let vendedoraMasVendio = ""

  for (const vendedora of vendedoras) {
    if(acc < contadorDeVentas(ventasPorVendedora(vendedora))){
      acc = contadorDeVentas(ventasPorVendedora(vendedora))
      vendedoraMasVendio = vendedora
    }
  }
  return vendedoraMasVendio
}
//console.log(vendedoraHistorica());


//render(): Tiene que mostrar la unión de los dos reportes anteriores,
//cual fue el producto más vendido y la vendedora que más ingresos generó


const render = () => {
  return {
     renderMes: renderPorMes(2019),
     reporteSucursal: renderPorSucursal(),
     productoEstrella: componenteMasVendido(),
     vendedoraQueMasVendio: vendedoraHistorica()
  }
}
//console.log(render());



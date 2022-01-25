//       ----------       ARRAYS    -------------       //
const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const componentes = ["Monitor GPRS 3000","Motherboard ASUS 1500", "Monitor ASC 543","Motherboard ASUS 1200", "Motherboard MZI", "HDD Toyiva", "HDD Wezter Dishital", "RAM Quinston", "RAM Quinston Fury"]


const ventas = [
  [
    1,
   new Date(2019, 1, 4),
   "Grace",
   "Centro",
   ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
  ],
  [
    2, 
   new Date(2019, 0, 1), 
   "Ada", 
   "Centro", 
   ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
  ], 
  [
    3, 
    new Date(2019, 0, 2), 
    "Grace", 
    "Caballito", 
    ["Monitor ASC 543", "Motherboard MZI"]
  ], 
  [
    4, 
    new Date(2019, 0, 10), 
    "Ada", 
    "Centro", 
    ["Monitor ASC 543", "Motherboard ASUS 1200"]
  ], 
  [
    5, 
    new Date(2019, 0, 12), 
    "Grace", 
    "Caballito", 
    ["Monitor GPRS 3000", "Motherboard ASUS 1200"]
]]


const precios = [
["Monitor GPRS 3000", 200], 
["Motherboard ASUS 1500", 120], 
["Monitor ASC 543", 250], 
["Motherboard ASUS 1200", 100],
["Motherboard MZI", 30], 
["HDD Toyiva", 90], 
["HDD Wezter Dishital", 75], 
["RAM Quinston", 110], 
["RAM Quinston Fury", 230]
];

const sucursales = ["Centro", "Caballito"];

//  -------------------------CARGAR ARRAY EN TABLA  -------------------- //
const table = document.querySelector('#table-2')
const crearTabla = () => {
  for (let i = 0; i < ventas.length; i++){
    let newTr = document.createElement('tr')
    table.appendChild(newTr)

    for (let j = 0; j < ventas[i].length; j++) {

      const fechaVentas = ventas[i][1]
      //console.log (fechaVentas)
      const nombreVenta = ventas[i][2]
      //console.log(nombreVenta)
      const sucursalVenta = ventas[i][3]
      //console.log(sucursalVenta)
      const componentesVenta = ventas[i][4]
      //console.log(componentesVenta)

    
       newTr.innerHTML = `<td>${fechaVentas},</td><td>${nombreVenta}</td><td>${sucursalVenta}</td><td>${componentesVenta}</td> <td>precio</td> <td><img src="..//Proyecto/Iconos/pen.svg" class="pen  icon"> <img src="..//Proyecto/Iconos/trash.svg" class="trash   icon"></td>`
    
      } }

    
}

crearTabla(ventas)


//  ---------- AGREGAR VENTA ---------- //
const btnModal = document.querySelector('#btnVenta');
const btnClose = document.querySelector('.close');
const btnCancel = document.querySelector('#cancelar');
const modal = document.querySelector('.modal-container');


//      ------   ABRIR MODAL  -----      // 
btnModal.addEventListener('click', () => {
    modal.style.display = "block"
})

btnClose.addEventListener('click', () => {
    modal.style.display = "none"
})

//  ---- OPTIONS AGREGAR VENTA ------ //
const selectVendedora = document.querySelector('.select-vendedora');

const agregarVendedoras = () => {
  for (let i = 0; i < vendedoras.length; i++){
    const selectVend = document.createElement('option')
    selectVendedora.appendChild(selectVend)
    selectVend.innerHTML = `${vendedoras[i]}`
  }
}

agregarVendedoras()

const selectComponentes = document.querySelector('.multiple');

const agregarComponentes = () => {
  for (let i = 0; i < precios.length; i++){
    const compo = document.createElement('option')
    selectComponentes.appendChild(compo)
    compo.innerHTML = `${precios[i][0]}`
  
  }
}
agregarComponentes()

const selectSucursal = document.querySelector('.sede');

const agregarSucursal = () => {
  for (let i = 0; i < sucursales.length; i++){
    const sucursal = document.createElement('option')
    selectSucursal.appendChild(sucursal)
    sucursal.innerHTML = `${sucursales[i]}`
  
  }
}
agregarSucursal()


//     ---------------  EDITAR VENTA -------------------- //
const btnEditar = document.querySelector('.pen')
const editarModal = document.querySelector('.edit')
const closebtn = document.querySelector('#xcloser')

btnEditar.addEventListener('click', () => {
  editarModal.style.display = "block"
})
closebtn.addEventListener('click', () => {
  editarModal.style.display = "none"
})



//       AGREGAR OPTIONS  //  EDITAR  VENTA   ///

const selectSeller = document.querySelector('.select-seller');

const addVendedoras = () => {
  for (let i = 0; i < vendedoras.length; i++){
    const sellers = document.createElement('option')
    selectSeller.appendChild(sellers)
    sellers.innerHTML = `${vendedoras[i]}`
  }
}
addVendedoras()

const componenteSelect = document.querySelector('.componenteSelect');

const componenteOptions = () => {
for (let i = 0; i < precios.length; i++){
    const optionComponente = document.createElement('option')
    componenteSelect.appendChild(optionComponente)
    optionComponente.innerHTML = `${precios[i][0]}`
}
}
componenteOptions()

const optionSucursal = document.querySelector('.optionSucursal');

const sucursalSelect = () => {
    for (let i = 0; i < sucursales.length; i++){
        const sucursalesOp = document.createElement('option')
        optionSucursal.appendChild(sucursalesOp)
        sucursalesOp.innerHTML = `${sucursales[i]}`
    }
}
sucursalSelect()



//     --------------------  ELIMINAR VENTA  ------------------------------ //
const closer = document.querySelector('#xclose');
const modalDelete = document.querySelector('.modalDelete');
const trash = document.querySelector('.trash');
const btnDelete = document.querySelector('#delete');
const cancelarDelete = document.querySelector('#cancelarDelete');

trash.addEventListener('click', () => {
  modalDelete.style.display = "block"
})

closer.addEventListener('click', () => {
  modalDelete.style.display = "none"
})

cancelarDelete.addEventListener('click', () => {
  modalDelete.style.display = "none"
})

// -------------- TABLA DE VENTAS POR SUCURSAL -------------------------- //


const tablaPorSucursal = document.querySelector('#table-1');
const ventasPorSucursal = () => {
    for (let i = 0; i < sucursales.length; i++){
        const nuevaTr = document.createElement('tr')
        tablaPorSucursal.appendChild(nuevaTr)

        for (let j = 0; j < sucursales[i].length; j++){
            const tablaSucursal = `${sucursales[i]}`

            nuevaTr.innerHTML = `<td>${tablaSucursal}</td>`
        }
    }
}
ventasPorSucursal()

//     ----------------  FUNCIONES --------------------- //

const precioMaquina = (componentes) => {
  let suma = 0
   for (let precio of precios){
     for (let arr of componentes){
       if (precio.includes(arr)){
         suma += precio[1]}
       }
     }
       
     return suma
   }

//console.log(precioMaquina(["Monitor GPRS 3000","Motherboard ASUS 1500"]))
//console.log(precioMaquina(["Monitor ASC 543", "Motherboard MZI"]))

const cantidadVentasComponente = (componente) => {
  let sumaComponentes = 0
  for (let venta of ventas){
    if(venta[4].includes(componente)){
      sumaComponentes++
    }
  }
    return sumaComponentes
}
//console.log(cantidadVentasComponente("Motherboard MZI"))

const vendedoraDelMes = (mes, anio) => {

}


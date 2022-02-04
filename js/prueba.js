//  ---------- AGREGAR VENTA ---------- //
const btnModal = document.querySelector('#btnVenta');
const btnClose = document.querySelector('.close');
const btnCancel = document.querySelector('#cancelar');
const modal = document.querySelector('.modal-container');


//            EVENTOS           // 
btnModal.addEventListener('click', () => {
    modal.style.display = "block"
})

btnClose.addEventListener('click', () => {
    modal.style.display = "none"
})

//  ----------- EDITAR VENTA ----------- //
const btnEditar = document.querySelector('.pen')
const editarModal = document.querySelector('.edit')
const closebtn = document.querySelector('#xcloser')

btnEditar.addEventListener('click', () => {
  editarModal.style.display = "block"
})
closebtn.addEventListener('click', () => {
  editarModal.style.display = "none"
})


// ---------- ELIMINAR VENTA ----------- // 
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


// ARRAYS //
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

// ---------------------------------------------------------- // 

//  IMPRIMIR EL ARRAY EN LA TABLA //

const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);

const tabla = document.getElementById('tables')
const tablaVentas = () => {


  for (let i = 0; i < ventas.length; i++){
    const newTr = document.createElement('tr');
    tabla.appendChild(newTr)

    for (let j = 0; j < ventas[i].length; j++) {

      const fechaVentas = format(ventas[i][1] ,'es')
      console.log (fechaVentas)
      const nombreVenta = ventas[i][2]
      console.log(nombreVenta)
      const sucursalVenta = ventas[i][3]
      console.log(sucursalVenta)
      const componentesVenta = ventas[i][4]
      console.log(componentesVenta)
    
       
       newTr.innerHTML = `<td>${fechaVentas},</td><td>${nombreVenta}</td><td>${sucursalVenta}</td><td>${componentesVenta}</td> <td>precio</td>`
    
    
      } }

  }


tablaVentas()
// ------------------------------------------------------------ // 


//      AGREGAR SELECTS  // AGREGAR VENTA  //

const selectVendedora = document.querySelector('.select-vendedora');

const agregarVendedoras = () => {
  for (let i = 0; i < vendedoras.length; i++){
    const selectVend = document.createElement('option')
    /*selectVend.classList.add('selects')*/
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


//       AGREGAR SELECTS  //  EDITAR  VENTA   ///

const selectSeller = document.querySelector('.select-seller');

const addVendedoras = () => {
  for (let i = 0; i < vendedoras.length; i++){
    const sellers = document.createElement('option')
    selectSeller.appendChild(sellers)
    sellers.innerHTML = `${vendedoras[i]}`
  }
}
 
addVendedoras()



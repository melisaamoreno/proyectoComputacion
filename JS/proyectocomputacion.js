//Agregar venta //
const btnModal = document.querySelector('#btnVenta');
const btnClose = document.querySelector('.close');
const btnCancel = document.querySelector('#cancelar');
const modal = document.querySelector('.modal-container');

btnModal.addEventListener('click', () => {
    modal.style.display = "block"
})

btnClose.addEventListener('click', () => {
    modal.style.display = "none"
})

// Editar venta //  ** falta btn de guardar el edit **
const btnEditar = document.querySelector('.pen')
const editarModal = document.querySelector('.edit')
const closebtn = document.querySelector('#xcloser')

btnEditar.addEventListener('click', () => {
  editarModal.style.display = "block"
})
closebtn.addEventListener('click', () => {
  editarModal.style.display = "none"
})


// Eliminar venta // **falta btn de eliminar **
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


// Insertar los datos en tablas //
const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const componentes = ["Monitor GPRS 3000","Motherboard ASUS 1500", "Monitor ASC 543","Motherboard ASUS 1200", "Motherboard MZI", "HDD Toyiva", "HDD Wezter Dishital", "RAM Quinston", "RAM Quinston Fury"]



const ventas = [[1, new Date(2019, 1, 4), "Grace", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [2, new Date(2019, 0, 1), "Ada", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [3, new Date(2019, 0, 2), "Grace", "Caballito", ["Monitor ASC 543", "Motherboard MZI"]], [4, new Date(2019, 0, 10), "Ada", "Centro", ["Monitor ASC 543", "Motherboard ASUS 1200"]], [5, new Date(2019, 0, 12), "Grace", "Caballito", ["Monitor GPRS 3000", "Motherboard ASUS 1200"]]];









const precios = [["Monitor GPRS 3000", 200], ["Motherboard ASUS 1500", 120], ["Monitor ASC 543", 250], ["Motherboard ASUS 1200", 100],["Motherboard MZI", 30], ["HDD Toyiva", 90], ["HDD Wezter Dishital", 75], ["RAM Quinston", 110], ["RAM Quinston Fury", 230]];


//obtener valor de un Select //
function selectValue (){
  let selectedValue = document.querySelector('componentes').value;

  console.log(selectedValue)
}

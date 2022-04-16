// Agregar ventas
let btnsubmit = document.querySelector('#guardar')
let btnsubmitEdit = document.querySelector('#guardarEdit')

btnsubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let componentesSeleccionados = []
    let listaDeComponentes = document.querySelectorAll('.option-componente')
    listaDeComponentes.forEach ( componente => 
    componente.selected && componentesSeleccionados.push(componente.value))
    console.log(componentesSeleccionados);


    let nuevaVenta = {
    fecha : document.querySelector('#datetime').value,
    nombreVendedora : document.querySelector('#vendedoras').value,
    sucursal : document.querySelector('#sucursal').value,
    componentes : componentesSeleccionados,
    }

    local.ventas.push(nuevaVenta)

    table.innerHTML = ""
    crearTabla()
    modal.style.display = "none"

})


//Eliminar venta

const btnEliminar = document.querySelectorAll('.icono-eliminado')
const confirmarDelete = document.querySelector('#delete')

const asignarId = () => {
  btnEliminar.forEach(btn => {
    btn.addEventListener('click', () => {
      let idBotoncito = parseInt(btn.getAttribute('id')) //ID del Tachito
      confirmarDelete.setAttribute('confirmarId', idBotoncito) //ID del tachito al boton de confirmar Delete
      console.log(idBotoncito);
    })
  })
}
asignarId()

//const confirmarDelete = document.querySelector('#delete')
const eliminar = () => {
  const {ventas} = local
  modalDelete.style.display = 'none'

  ventas.forEach((venta, index) => {
    if (index === parseInt(confirmarDelete.getAttribute('confirmarId'))) {
      ventas.splice(index, 1)
      table.innerHTML = ""
      crearTabla()
    }
  })
}

confirmarDelete.addEventListener('click', eliminar)

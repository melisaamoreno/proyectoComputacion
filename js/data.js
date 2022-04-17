const actualizarTabla = () => {
  table.innerHTML = ""
  crearTabla()
  botonEditar()
  botonEliminar()
}

// Agregar ventas
let btnsubmit = document.querySelector('#guardar')

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

    actualizarTabla()
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

const eliminar = () => {
  const {ventas} = local
  modalDelete.style.display = 'none'

  ventas.forEach((venta, index) => {
    if (index === parseInt(confirmarDelete.getAttribute('confirmarId'))) {
      ventas.splice(index, 1)
      
      
      actualizarTabla()
    }
  })
}

confirmarDelete.addEventListener('click', eliminar)


// Editar Venta
const btnEditado = document.querySelectorAll('.icono-editado')
const guardarEdit = document.querySelector('#guardarEdit')

const asignarIdEditar = () => {
  btnEditado.forEach(btn => {
    btn.addEventListener('click', () => {
      let idIconEditar = parseInt(btn.getAttribute('id'))
      guardarEdit.setAttribute('guardarId', idIconEditar)
      console.log(idIconEditar);

    })
  })
}
asignarIdEditar()

const editarModal = document.querySelector('.edit')


let btnsubmitEdit = document.querySelector('#guardarEdit')
btnsubmitEdit.addEventListener('click', (e) => {
  e.preventDefault()
  const {ventas} = local

    let componentesSeleccionadosEdit = []
    let listaDeComponentesEdit = document.querySelectorAll('.option-componente-editar')
    listaDeComponentesEdit.forEach ( componente => 
    componente.selected && componentesSeleccionadosEdit.push(componente.value))
    console.log(componentesSeleccionadosEdit);


   let editarEstaVenta = {
    fecha : document.querySelector('#datetime-editar').value,
    nombreVendedora : document.querySelector('#vendedoras-editar').value,
    sucursal : document.querySelector('#sucursal-editar').value,
    componentes : componentesSeleccionadosEdit
    } 

    ventas.forEach((venta, index) => {
    if (index === parseInt(guardarEdit.getAttribute('guardarId'))){
      ventas.splice(index, 1, editarEstaVenta)
    }
    
    actualizarTabla()
    editarModal.style.display = "none"
  })
})

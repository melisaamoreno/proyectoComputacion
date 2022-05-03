let actualizarTabla = () => {
  table.innerHTML = ""
  tablaPorSucursal.innerHTML = ""
  crearTabla()
  ventasPorSucursal()
  botonEliminar()
  asignarId()
  botonEditar()
  asignarIdEditar()
  productoMasVendido()
  vendedoraMayor()
}

//Agregar nueva venta
const btnsubmit = document.querySelector('#guardar')

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

  modal.style.display = "none"
  actualizarTabla()
})

//Eliminar venta

const asignarId = () => {
  const btnEliminar = document.querySelectorAll('.icono-eliminado')
  btnEliminar.forEach(btn => {
    btn.addEventListener('click', () => {
      let idBotoncito = parseInt(btn.getAttribute('id')) //ID del Tachito
      confirmarDelete.setAttribute('confirmarId', idBotoncito) //ID del tachito al boton de confirmar Delete
      console.log(idBotoncito);
    })
  })
}
asignarId()

const confirmarDelete = document.querySelector('#delete')

const confirmarEliminar = () => {
  const {ventas} = local
  ventas.forEach((venta, index) => {
    if (index === parseInt(confirmarDelete.getAttribute('confirmarId'))) {
      ventas.splice(index, 1)

      modalDelete.style.display = 'none'
      actualizarTabla()
    }
  })
}
confirmarDelete.addEventListener('click', confirmarEliminar)


// Editar Venta
const guardarEdit = document.querySelector('#guardarEdit')

const asignarIdEditar = () => {
  const btnEditado = document.querySelectorAll('.icono-editado')
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

guardarEdit.addEventListener('click', (e) => {
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


      editarModal.style.display = "none"
      actualizarTabla()
    }
  })
})

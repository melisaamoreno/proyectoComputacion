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
    //editar : `<td><i class="fa-solid fa-pen"></i><i class="fa-solid fa-trash"></i></td>`
    }

    local.ventas.push(nuevaVenta)


    table.innerHTML = ""
    crearTabla()
    modal.style.display = "none"
    console.log(local.ventas);
})







//Eliminar venta

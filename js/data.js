// Obtener data, crear, editar, eliminar

// Agregar ventas
let btnsubmit = document.querySelector('#guardar')
let btnsubmitEdit = document.querySelector('#guardarEdit')

let obtenerData = () => {
    let nuevaVenta = {}
    nuevaVenta["fecha"] = document.querySelector('#datetime').value
    nuevaVenta["vendedora"] = document.querySelector('#vendedoras').value 
    nuevaVenta["sucursal"] = document.querySelector('#sucursal').value
    nuevaVenta["componentes"] = document.querySelector('#componentes').value

      local.ventas.push(nuevaVenta);
      limpiarTabla()
      crearTabla()
      console.log(local.ventas);
}

btnsubmit.addEventListener('click', obtenerData)
//btnsubmitEdit.addEventListener('click', obtenerData)








//Eliminar venta

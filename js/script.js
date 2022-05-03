// Funcionalidad
// ---- agregar data a la tabla
const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date)

const table = document.querySelector('#table')

const crearTabla = () => {
    const { ventas } = local
        ventas.forEach((venta, index) => {
        const trs = document.createElement('tr')
        table.appendChild(trs)
        
        trs.innerHTML = 
        `<td>${format(new Date (venta.fecha),'es')}</td>
        <td>${venta.nombreVendedora}</td>
        <td>${venta.sucursal}</td>
        <td>${venta.componentes}</td>
        <td>${precioMaquina(venta.componentes)}</td>
        <td><button class="icono-editado" id=${index}><i class="fas fa-pencil-alt"></i></button>
        <button class="icono-eliminado" id=${index}"><i class="fas fa-trash-alt"></i></button></td>`

    })
    
}
crearTabla()

//  ---------- AGREGAR VENTA ---------- //
const btnModal = document.querySelector('#btnVenta');
const btnClose = document.querySelector('.btnClose');
const btnCancel = document.querySelector('#cancelar');
const modal = document.querySelector('.modal-container');


//      ------   ABRIR MODAL  -----      // 
btnModal.addEventListener('click', () => {
    modal.style.display = "block"
})

btnClose.addEventListener('click', () => {
    modal.style.display = "none"
})

//     ---------------  EDITAR VENTA -------------------- //
const botonEditar = () => {
    const editarModal = document.querySelector('.edit')
    const btnEditar = document.querySelectorAll('.icono-editado')
    
    btnEditar.forEach(btn => {
        btn.addEventListener('click', () => {
            editarModal.style.display= "block"
        })
    })
}
botonEditar()

const cerrarModal = () => {
    const editarModal = document.querySelector('.edit')
   const closebtn = document.querySelector('.btnCloseEdit')
     closebtn.addEventListener('click', (e) => {
       e.preventDefault()
     editarModal.style.display = "none"
 })
}
cerrarModal()

 
//     --------------------  ELIMINAR VENTA  ------------------------------ //


const botonEliminar = () => {
 const modalDelete = document.querySelector('.modalDelete');
 const trash = document.querySelectorAll('.icono-eliminado');

     trash.forEach(boton => {
       boton.addEventListener('click', () => {
       modalDelete.style.display = "block"
     })
   })
  }
botonEliminar()

const cancelarDelete = document.querySelector('#cancelarDelete');
const modalDelete = document.querySelector('.modalDelete');

cancelarDelete.addEventListener('click', () => {
    modalDelete.style.display = "none"
})

// -------- tabla Ventas por Sucursal / Reportes --------- //
const tablaPorSucursal = document.querySelector('#table-1');

const ventasPorSucursal = () => {
    for (const sucursal of sucursales) {
        const trs = document.createElement('tr')
        tablaPorSucursal.appendChild(trs)
    
        trs.innerHTML = `<td>${sucursal}</td>
                     <td>${ventasSucursal(sucursal)}</td>`

    }  

}
ventasPorSucursal()


const productoEstrella = document.querySelector('.estrella')

const productoMasVendido = () => {
    productoEstrella.innerHTML = `Producto estrella: ${componenteMasVendido()}`
}
productoMasVendido()

const vendedoraEstrella = document.querySelector('.vendedoraEstrella')

const vendedoraMayor = () => {
    vendedoraEstrella.innerHTML = `Vendedora que más ingresos generó: ${vendedoraHistorica()}` 
}
vendedoraMayor()

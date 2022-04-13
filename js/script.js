// Funcionalidad

// ---- agregar data a la tabla
const table = document.querySelector('#table')

const crearTabla = (ventas) => {
    
    for (const venta of local.ventas) {
        const trs = document.createElement('tr')
        table.appendChild(trs)
        
        trs.innerHTML = 
        `<td>${venta.fecha}</td>
        <td>${venta.nombreVendedora}</td>
        <td>${venta.sucursal}</td>
        <td>${venta.componentes}</td>
        <td>${precioMaquina(venta.componentes)}</td>
        <td><i class="fa-solid fa-pen"></i><i class="fa-solid fa-trash"></i></td>`
    
    }
}
crearTabla(ventas)

const limpiarTabla = () => {
    table.innerHTML = ""
    crearTabla()
}
limpiarTabla()

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

//     ---------------  EDITAR VENTA -------------------- //
const btnEditar = document.querySelectorAll('.fa-pen')
const editarModal = document.querySelector('.edit')
const closebtn = document.querySelector('#xcloser')

btnEditar.forEach(item => {
  item.addEventListener('click', () => {
  editarModal.style.display= "block"
  })
})

closebtn.addEventListener('click', () => {
  editarModal.style.display = "none"
})
 
//     --------------------  ELIMINAR VENTA  ------------------------------ //
const closer = document.querySelector('#xclose');
const modalDelete = document.querySelector('.modalDelete');
const trash = document.querySelectorAll('.fa-trash');
const btnDelete = document.querySelector('#delete');
const cancelarDelete = document.querySelector('#cancelarDelete');

trash.forEach(element => {
  element.addEventListener('click', () => {
  modalDelete.style.display = "block"
  })
})

closer.addEventListener('click', () => {
    modalDelete.style.display = "none"
})
  
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


const productoMasVendido = () => {
    const productoEstrella = document.querySelector('.estrella')
    productoEstrella.innerHTML += componenteMasVendido()
}
productoMasVendido()

const vendedoraMayor = () => {
    const vendedoraEstrella = document.querySelector('.vendedoraEstrella')
    vendedoraEstrella.innerHTML += vendedoraHistorica()
}
vendedoraMayor()


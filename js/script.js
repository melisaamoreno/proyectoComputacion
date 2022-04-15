// Funcionalidad


// ---- agregar data a la tabla

const table = document.querySelector('#table')

const crearTabla = (id) => {
    const { ventas } = local
    for (const venta of ventas) {
        const { fecha, nombreVendedora, sucursal, componentes } = venta
        const trs = document.createElement('tr')
        table.appendChild(trs)
        
        trs.innerHTML = 
        `<td>${fecha}</td>
        <td>${nombreVendedora}</td>
        <td>${sucursal}</td>
        <td>${componentes}</td>
        <td>${precioMaquina(componentes)}</td>
        <td> <button class="icono-editado" ><i class="fas fa-pencil-alt"></i></button>
        <button class="icono-eliminado"  ><i class="fas fa-trash-alt"></i></button></td>`
    }
}
crearTabla()

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
const btnEditar = document.querySelectorAll('.fa-pencil-alt')
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
const trash = document.querySelectorAll('.fa-trash-alt');
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


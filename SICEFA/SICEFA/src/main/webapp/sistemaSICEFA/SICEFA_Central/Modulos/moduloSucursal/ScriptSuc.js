
let numeroCliente = 4;

export function generarCodigoCliente() {
    numeroCliente++;
    let numeroConCeros = ("00000" + numeroCliente).slice(-5);
    let codigoCliente = "C" + numeroConCeros;
    return codigoCliente.replace("C", "S"); // Reemplazar la "C" por "S"
}


let contadorSucursales = 0;
let indexSucursalSeleccionada;
let sucursales = [];

export function addSucursal() {
    let nombre, titular, rfc, ciudad, colonia, estado, codigoPostal, telefono, longitud, latitud;

    nombre = document.getElementById("nombre1").value;
    titular = document.getElementById("titular1").value;
    rfc = document.getElementById("rfc1").value;
    ciudad = document.getElementById("ciudad1").value;
    colonia = document.getElementById("colonia1").value;
    estado = document.getElementById("estado1").value;
    codigoPostal = document.getElementById("codigo-postal1").value;
    telefono = document.getElementById("telefono1").value;
    longitud = document.getElementById("longitud1").value;
    latitud = document.getElementById("latitud1").value;

    // Verificar que los campos requeridos estén completos
    if (
        nombre.trim() === "" ||
        titular.trim() === "" ||
        rfc.trim() === "" ||
        ciudad.trim() === "" ||
        colonia.trim() === "" ||
        estado.trim() === "" ||
        codigoPostal.trim() === "" ||
        telefono.trim() === "" ||
        longitud.trim() === "" ||
        latitud.trim() === ""
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has ingresado la información de todos los campos requeridos.'
        });
    } else {
        let sucursal = {
            id: generarCodigoCliente(),
            nombre: nombre,
            titular: titular,
            rfc: rfc,
            ciudad: ciudad,
            colonia: colonia,
            estado: estado,
            codigoPostal: codigoPostal,
            telefono: telefono,
            longitud: longitud,
            latitud: latitud,
            estatus: "Activo"
        };
        sucursales.push(sucursal);
        clean();
        loadTabla();
    }
}

export function loadTabla(sucursalesToDisplay) {
    let tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    let data = sucursalesToDisplay || sucursales;
    data.forEach(function (sucursal) {
        let row = tableBody.insertRow();

        row.onclick = function () {
            selectSucursal(sucursales.indexOf(sucursal));
        };

        let cellIndex = row.insertCell();
        cellIndex.textContent = sucursal.id;

        let cellNombre = row.insertCell();
        cellNombre.textContent = sucursal.nombre;

        let cellTitular = row.insertCell();
        cellTitular.textContent = sucursal.titular;

        let cellRFC = row.insertCell();
        cellRFC.textContent = sucursal.rfc;

        let cellCodigoPostal = row.insertCell();
        cellCodigoPostal.textContent = sucursal.codigoPostal;

        let cellTelefono = row.insertCell();
        cellTelefono.textContent = sucursal.telefono;

        let cellEstatus = row.insertCell();
        cellEstatus.textContent = sucursal.estatus;

        let cellAcciones = row.insertCell();
        let estatusBtn = document.createElement("button");
        estatusBtn.type = "button";
        estatusBtn.className = "btn btn-outline-danger btn-sm";
        estatusBtn.onclick = function () {
            changeEstatus(sucursales.indexOf(sucursal));
        };
        estatusBtn.innerHTML = '<i class="fas fa-check"></i> ' + (sucursal.estatus === "Activo" ? "Inactivo" : "Activo");
        cellAcciones.appendChild(estatusBtn);

        let detallesBtn = document.createElement("button");
        detallesBtn.type = "button";
        detallesBtn.className = "btn btn-outline-primary btn-sm mx-1";
        detallesBtn.setAttribute("data-id", sucursales.indexOf(sucursal)); // Agregar el atributo data-id
        detallesBtn.onclick = function () {
            openMapPopup(sucursal); // Pasar la sucursal como parámetro
        };
        detallesBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i> Ubicación';
        cellAcciones.appendChild(detallesBtn);
    });
}

function selectSucursal(index) {
    document.getElementById("nombre1").value = sucursales[index].nombre;
    document.getElementById("titular1").value = sucursales[index].titular;
    document.getElementById("rfc1").value = sucursales[index].rfc;
    document.getElementById("ciudad1").value = sucursales[index].ciudad;
    document.getElementById("colonia1").value = sucursales[index].colonia;
    document.getElementById("estado1").value = sucursales[index].estado;
    document.getElementById("codigo-postal1").value = sucursales[index].codigoPostal;
    document.getElementById("telefono1").value = sucursales[index].telefono;
    document.getElementById("longitud1").value = sucursales[index].longitud;
    document.getElementById("latitud1").value = sucursales[index].latitud;

    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnGuardar").disabled = true; // Bloquear el botón de guardar
    indexSucursalSeleccionada = index;
    fillUsuarioField(index);
}

export function clean() {
    document.getElementById("nombre1").value = "";
    document.getElementById("titular1").value = "";
    document.getElementById("rfc1").value = "";
    document.getElementById("ciudad1").value = "";
    document.getElementById("colonia1").value = "";
    document.getElementById("estado1").value = "";
    document.getElementById("codigo-postal1").value = "";
    document.getElementById("telefono1").value = "";
    document.getElementById("longitud1").value = "";
    document.getElementById("latitud1").value = "";
    document.getElementById("usuario").value = "";

    document.getElementById("btnGuardar").disabled = false; // Habilitar el botón de guardar
    document.getElementById("btnModificar").classList.add("disabled");
    indexSucursalSeleccionada = 0;
}

export function changeEstatus(index) {
    let estatus = sucursales[index].estatus;
    let nuevoEstatus = estatus === "Activo" ? "Inactivo" : "Activo";

    Swal.fire({
        title: `¿Deseas poner en estado ${nuevoEstatus.toLowerCase()} esta sucursal?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Sí, ${nuevoEstatus.toLowerCase()}`,
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            sucursales[index].estatus = nuevoEstatus;

            // Actualizar la tabla con el filtro actual
            filterSucursales();
        }
    });
}

export function updateSucursal() {
    if (indexSucursalSeleccionada !== undefined) {
        Swal.fire({
            title: '¿Deseas realizar la modificación de la sucursal?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, modificar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                sucursales[indexSucursalSeleccionada].nombre = document.getElementById("nombre1").value;
                sucursales[indexSucursalSeleccionada].titular = document.getElementById("titular1").value;
                sucursales[indexSucursalSeleccionada].rfc = document.getElementById("rfc1").value;
                sucursales[indexSucursalSeleccionada].ciudad = document.getElementById("ciudad1").value;
                sucursales[indexSucursalSeleccionada].colonia = document.getElementById("colonia1").value;
                sucursales[indexSucursalSeleccionada].estado = document.getElementById("estado1").value;
                sucursales[indexSucursalSeleccionada].codigoPostal = document.getElementById("codigo-postal1").value;
                sucursales[indexSucursalSeleccionada].telefono = document.getElementById("telefono1").value;
                sucursales[indexSucursalSeleccionada].longitud = document.getElementById("longitud1").value;
                sucursales[indexSucursalSeleccionada].latitud = document.getElementById("latitud1").value;
                loadTabla();
                clean();
            }
        });
    }
}

export function filterSucursales() {
    let filtroEstatus = document.getElementById("filtroSucursales").value;
    let textoBusqueda = document.getElementById("inputBuscar").value.toLowerCase().trim();

    // Filtra las sucursales que coinciden con el texto de búsqueda en cualquier campo y el estatus seleccionado
    let filteredSucursales = sucursales.filter(function (sucursal) {
        return (
            (filtroEstatus === "Todos" || sucursal.estatus === filtroEstatus) &&
            (
                sucursal.nombre.toLowerCase().includes(textoBusqueda) ||
                sucursal.titular.toLowerCase().includes(textoBusqueda) ||
                sucursal.rfc.toLowerCase().includes(textoBusqueda) ||
                sucursal.ciudad.toLowerCase().includes(textoBusqueda) ||
                sucursal.colonia.toLowerCase().includes(textoBusqueda) ||
                sucursal.estado.toLowerCase().includes(textoBusqueda) ||
                sucursal.codigoPostal.toLowerCase().includes(textoBusqueda) ||
                sucursal.telefono.toLowerCase().includes(textoBusqueda) ||
                sucursal.longitud.toLowerCase().includes(textoBusqueda) ||
                sucursal.latitud.toLowerCase().includes(textoBusqueda)
            )
        );
    });

    // Vuelve a cargar la tabla con las sucursales filtradas
    loadTabla(filteredSucursales);
}

export function openMapPopup(sucursal) {
    const mapModal = new bootstrap.Modal(document.getElementById('mapModal'));
    mapModal.show();

    const lat = parseFloat(sucursal.latitud);
    const lng = parseFloat(sucursal.longitud);

    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat, lng },
        zoom: 15,
    });

    new google.maps.Marker({
        position: { lat, lng },
        map,
        title: sucursal.nombre,
    });
}

export function initializePage() {
    loadTabla();
    document.getElementById("btnGuardar").disabled = true;
    document.getElementById("btnModificar").classList.add("disabled");
}
export function confirmarModificar() {
    if (indexSucursalSeleccionada !== undefined) {
        Swal.fire({
            title: '¿Deseas realizar la modificación de la sucursal?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, modificar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                updateSucursal();
            }
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Primero debes seleccionar una sucursal para modificar.'
        });
    }
}

function fillUsuarioField(sucursalID) {
    // Aquí debemos obtener el ID de la sucursal en la que se hizo clic y agregar "AdminsX" al campo "Usuario".
    let usuarioField = document.getElementById("usuario");
    usuarioField.value = "Admins" + sucursales[sucursalID].id.substr(1);
}

fetch("Modulos/moduloSucursal/dataSucursal.json")
.then(function(response){
    return response.json();
})
.then(function(jsondata){
    sucursales = jsondata;
    console.log(sucursales);
    loadTabla(); 
});


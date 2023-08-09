
let indexProductoSeleccionado;
let modoEdicion = false;
let productos = [];

    fetch("Modulos/moduloProducto/dataProductosCentral.json")
    .then(function(response){
        return response.json();
    })
    .then(function(jsondata){
        productos = jsondata;
        console.log(productos);
        loadTabla(); 
    });



function addProducto() {
    let nombre, nombreGen, formaFar, unidadMed, presentacion, indicacion, contraInd, concent, envase, precioUnit, codigoBarras, foto;

    nombre = document.getElementById("nombre1").value;
    nombreGen = document.getElementById("nombreGen1").value;
    formaFar = document.getElementById("formaFar1").value;
    unidadMed = document.getElementById("unidadMed1").value;
    presentacion = document.getElementById("presentacion1").value;
    indicacion = document.getElementById("indicacion1").value;
    contraInd = document.getElementById("contraInd1").value;
    concent = document.getElementById("concent1").value;
    envase = document.getElementById("envase1").value;
    precioUnit = document.getElementById("precioUnit1").value;
    codigoBarras = document.getElementById("codigoBarras1").value;
    foto = document.getElementById("imgMedicamento").files[0];

    if (!modoEdicion) {
        if (!nombre || !nombreGen || !formaFar || !unidadMed || !presentacion || !indicacion || !contraInd || !concent || !envase || !precioUnit || !codigoBarras) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Es necesario llenar todos los campos obligatorios del cuestionario.'
            });
            return; // No continúa si faltan campos
        }
        let producto = {
            nombre: nombre,
            nombreGen: nombreGen,
            formaFar: formaFar,
            unidadMed: unidadMed,
            presentacion: presentacion,
            indicacion: indicacion,
            contraInd: contraInd,
            concent: concent,
            envase: envase,
            precioUnit: precioUnit,
            codigoBarras: codigoBarras,
            foto: foto,
            estatus: "Activo"
        };
        productos.push(producto);
    } 

    clean();
    loadTabla();
}


function loadTabla() {
    let filter = document.getElementById("filterProductos").value;
    let productosActivos = productos.filter(producto => producto.estatus === "Activo");
    let productosInactivos = productos.filter(producto => producto.estatus === "Inactivo");

    if (filter === "Todos") {
        showTabla(productos);
    } else if (filter === "Activo") {
        showTabla(productosActivos);
    } else if (filter === "Inactivo") {
        showTabla(productosInactivos);
    }
}

function showTabla(productosToDisplay) {
    let tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    let data = productosToDisplay;
    data.forEach(function (producto) {
        let row = tableBody.insertRow();

        row.onclick = function () {
            selectProducto(productos.indexOf(producto));
        };

        let cellIndex = row.insertCell();
        cellIndex.textContent = productos.indexOf(producto) + 1;

        let cellNombre = row.insertCell();
        cellNombre.textContent = producto.nombre;

        let cellNombreGen = row.insertCell();
        cellNombreGen.textContent = producto.nombreGen;

        let cellPresentacion = row.insertCell();
        cellPresentacion.textContent = producto.presentacion;

        let cellEnvase = row.insertCell();
        cellEnvase.textContent = producto.envase;

        let cellPrecioUnit = row.insertCell();
        cellPrecioUnit.textContent = producto.precioUnit;


        let cellFoto = row.insertCell();
        cellFoto.innerHTML = '<img class="img" src="' + (producto.foto ? URL.createObjectURL(producto.foto) : '') + '" alt="' + (producto.foto ? producto.foto.name : 'Sin imagen') + '">';

        let cellEstatus = row.insertCell();
        cellEstatus.textContent = producto.estatus;



    });
}

function selectProducto(index) {
    document.getElementById("nombre1").value = productos[index].nombre;
    document.getElementById("nombreGen1").value = productos[index].nombreGen;
    document.getElementById("formaFar1").value = productos[index].formaFar;
    document.getElementById("unidadMed1").value = productos[index].unidadMed;
    document.getElementById("presentacion1").value = productos[index].presentacion;
    document.getElementById("indicacion1").value = productos[index].indicacion;
    document.getElementById("contraInd1").value = productos[index].contraInd;
    document.getElementById("concent1").value = productos[index].concent;
    document.getElementById("envase1").value = productos[index].envase;
    document.getElementById("precioUnit1").value = productos[index].precioUnit;
    document.getElementById("codigoBarras1").value = productos[index].codigoBarras;


    document.getElementById("btnModificar").classList.remove("disabled");
    indexProductoSeleccionado = index;
    modoEdicion = true;
    document.getElementById("btnEliminar").classList.remove("disabled");
    indexProductoSeleccionado = index;
    modoEdicion = true

}

function clean() {
    document.getElementById("nombre1").value = "";
    document.getElementById("nombreGen1").value = " ";
    document.getElementById("formaFar1").value = "";
    document.getElementById("unidadMed1").value = "";
    document.getElementById("presentacion1").value = "";
    document.getElementById("indicacion1").value = "";
    document.getElementById("contraInd1").value = "";
    document.getElementById("concent1").value = "";
    document.getElementById("envase1").value = "";
    document.getElementById("precioUnit1").value = "";
    document.getElementById("codigoBarras1").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");

    indexProductoSeleccionado = undefined;
    modoEdicion = false;

}

function changeEstatus(index) {
    if (productos[index].estatus === "Activo") {
        productos[index].estatus = "Inactivo";
    } else if (productos[index].estatus === "Inactivo") {
        productos[index].estatus = "Activo";
    }
    loadTabla();
}







function updateProducto() {
    if (indexProductoSeleccionado !== undefined) {
        productos[indexProductoSeleccionado].nombre = document.getElementById("nombre1").value;
        productos[indexProductoSeleccionado].nombreGen = document.getElementById("nombreGen1").value;
        productos[indexProductoSeleccionado].formaFar = document.getElementById("formaFar1").value;
        productos[indexProductoSeleccionado].unidadMed = document.getElementById("unidadMed1").value;
        productos[indexProductoSeleccionado].presentacion = document.getElementById("presentacion1").value;
        productos[indexProductoSeleccionado].indicacion = document.getElementById("indicacion1").value;
        productos[indexProductoSeleccionado].contraInd = document.getElementById("contraInd1").value;
        productos[indexProductoSeleccionado].concent = document.getElementById("concent1").value;
        productos[indexProductoSeleccionado].envase = document.getElementById("envase1").value;
        productos[indexProductoSeleccionado].precioUnit = document.getElementById("precioUnit1").value;
        productos[indexProductoSeleccionado].codigoBarras = document.getElementById("codigoBarras1").value;

        modoEdicion = false;
        loadTabla();
        clean();
    }
}

function filterProductos() {
    let filtro = document.getElementById("filterProductos").value;
    let filteredProductos = productos.filter(function (producto) {
        return filtro === "Todos" || producto.estatus === filtro;
    });
    loadTabla(filteredProductos);
}



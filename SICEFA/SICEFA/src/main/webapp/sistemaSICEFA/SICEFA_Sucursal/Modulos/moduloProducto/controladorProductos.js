let indexProductoSeleccionado = undefined;
let modoEdicion = false;
let productos = [];

fetch("Modulos/moduloProducto/dataProductos.json")
.then(function(response){
    return response.json();
})
.then(function(jsondata){
    productos = jsondata;
    console.log(productos);
    loadTabla(); 
});

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
        cellFoto.innerHTML = '<img class="img" src="' + (producto.foto ? URL.createObjectURL(producto.foto) : 'ruta_a_la_imagen_por_defecto') + '" alt="' + (producto.foto ? producto.foto.name : 'Sin imagen') + '">';

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

    indexProductoSeleccionado = index;
    modoEdicion = true

}




function filterProductos() {
    let filtro = document.getElementById("filterProductos").value;
    let filteredProductos = productos.filter(function (producto) {
        return filtro === "Todos" || producto.estatus === filtro;
    });
    loadTabla(filteredProductos);
}

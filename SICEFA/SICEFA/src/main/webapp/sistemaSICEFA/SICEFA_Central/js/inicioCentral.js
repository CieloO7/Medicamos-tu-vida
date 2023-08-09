
function inicioCentral(){
    window.location.href ="../SICEFA_Central/inicioCentral.html";
}

function salir(){
    window.location.href ="../../index.html";
}

let moduloProducto;
function cargarModuloProducto() {
    fetch("Modulos/moduloProducto/vistaProductos.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            document.getElementById("contenedorPrincipal").innerHTML = html;
            import("../Modulos/moduloProducto/controladorProductosCentral.js").then(
                function (controller) {
                    moduloProducto = controller;
                }
            );
        })
        .catch(function (error) {
            console.error("Error al cargar el módulo de Productos:", error);
        });
}

let moduloPedido;
function cargarModuloPedido() {
    fetch("Modulos/moduloPedido/vistaPedido.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            document.getElementById("contenedorPrincipal").innerHTML = html;
        })
        .catch(function (error) {
            console.error("Error al cargar el módulo de Pedido:", error);
        });
}

let moduloSucursal;
function cargarModuloSucursal() {
    fetch("Modulos/moduloSucursal/Sucursales.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            document.getElementById("contenedorPrincipal").innerHTML = html;
            import("../Modulos/moduloSucursal/ScriptSuc.js").then(
                function (controller) {
                    moduloSucursal = controller;
                }
            );
        })
        .catch(function (error) {
            console.error("Error al cargar el módulo de Sucursales:", error);
        });
}
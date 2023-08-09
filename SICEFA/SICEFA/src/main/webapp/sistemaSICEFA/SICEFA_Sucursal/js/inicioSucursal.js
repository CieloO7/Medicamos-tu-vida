/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function inicioSucursal(){
    window.location.href ="../SICEFA_Sucursal/inicioSucursal.html";
}

function salir(){
    window.location.href ="../../index.html";
}

let moduloCliente;

function cargarModuloClientes() {
    fetch("Modulos/moduloCliente/vistaCliente.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            document.getElementById("contenedorPrincipal").innerHTML = html;
            import("../Modulos/moduloCliente/controladorCliente.js").then(
                function (controller) {
                    moduloCliente = controller;
                }
            );
        })
        .catch(function (error) {
            console.error("Error al cargar el módulo de clientes:", error);
        });
}

let moduloEmpleado;

function cargarModuloEmpleados() {
    fetch("Modulos/moduloEmpleado/vistaEmpleado.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            document.getElementById("contenedorPrincipal").innerHTML = html;
            import("../Modulos/moduloEmpleado/controladorEmpleado.js").then(
                function (controller) {
                    moduloEmpleado = controller;
                }
            );
        })
        .catch(function (error) {
            console.error("Error al cargar el módulo de empleados:", error);
        });
}

let moduloProducto;
function cargarModuloProducto() {
    fetch("Modulos/moduloProducto/vistaProductos.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            document.getElementById("contenedorPrincipal").innerHTML = html;
            import("../Modulos/moduloProducto/controladorProductos.js").then(
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
    fetch("Modulos/moduloPedido/vistaPedidos.html")
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



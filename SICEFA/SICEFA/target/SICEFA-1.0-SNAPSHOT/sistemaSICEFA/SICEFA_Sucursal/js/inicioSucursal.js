/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//No funciona
function inicioCentral(){
    window.location.href ="../inicioSucursal.html";
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

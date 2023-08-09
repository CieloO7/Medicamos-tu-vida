/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let indexClienteSeleccionado;
let clientes = [];

let numeroCliente = 0;

function generarCodigoCliente() {
  numeroCliente++;
  let numeroConCeros = ("00000" + numeroCliente).slice(-5);
  return "C" + numeroConCeros;
}

export function agregarCliente(){
            let numCliente, fechRegis, nom, apeP, apeM, gen, fechNac, domic, codPos, ciu, esta, curp, rfc, numTel,correo, estatus;
            
            numCliente = document.getElementById("txtNumUnico").value,
            fechRegis = document.getElementById("txtFechRegistro").value,
            nom = document.getElementById("txtNombre").value,
            apeP = document.getElementById("txtApeP").value,
            apeM = document.getElementById("txtApeM").value,
            gen = document.getElementById("secGenero").value,
            fechNac = document.getElementById("dateNacimiento").value,
            domic = document.getElementById("txtDomicilio").value,
            codPos = document.getElementById("numCodPostal").value,
            ciu = document.getElementById("txtCiudad").value,
            esta = document.getElementById("txtEstado").value,
            curp = document.getElementById("txtCurp").value,
            rfc = document.getElementById("txtRfc").value,
            numTel = document.getElementById("numTel").value,
            correo = document.getElementById("txtEmail").value;


            let cliente = {};
            cliente.numCliente = generarCodigoCliente();
            cliente.fechRegis = new Date().toISOString().slice(0, 10);
            cliente.nom = nom;
            cliente.apeP = apeP;
            cliente.apeM = apeM;
            cliente.gen = gen;
            cliente.fechNac = fechNac;
            cliente.domic = domic;
            cliente.codPos = codPos;
            cliente.ciu = ciu;
            cliente.esta = esta;
            cliente.curp = curp;
            cliente.rfc = rfc;
            cliente.numTel = numTel;
            cliente.correo = correo;
            cliente.estatus = 1;
            clientes.push(cliente);
            nuevo();
            loadTabla();
            
            
            console.log("Fecha de registro:", cliente.fechRegis);


        }
        
    export function loadTabla(){
            let cuerpo = "";
            clientes.forEach(function (cliente){
                let registro = 
                        '<tr onclick="moduloCliente.selectCliente('+ clientes.indexOf(cliente) +');">'+
                        '<td>' + cliente.numCliente + '</td>' +
                        '<td>' + cliente.nom + '</td>' +
                        '<td>' + cliente.apeP +  ' '+ cliente.apeM +'</td>' +
                        '<td>' + cliente.numTel + '</td>' +
                        '<td>' + cliente.estatus + '</td></tr>'; 
                cuerpo += registro;
            });
            console.log(cuerpo);
            document.getElementById("tblClientes").innerHTML = cuerpo;
        }

        export function selectCliente (index){
            document.getElementById("txtNumUnico").value = clientes[index].numCliente;
            document.getElementById("txtFechRegistro").value = clientes[index].fechRegis;
            document.getElementById("txtNombre").value = clientes[index].nom;
            document.getElementById("txtApeP").value = clientes[index].apeP;
            document.getElementById("txtApeM").value = clientes[index].apeM;
            document.getElementById("rbtGenero").value = clientes[index].gen;
            document.getElementById("dateNacimiento").value = clientes[index].fechNac;
            document.getElementById("txtDomicilio").value = clientes[index].domic;
            document.getElementById("numCodPostal").value = clientes[index].codPos;
            document.getElementById("txtCiudad").value = clientes[index].ciu;
            document.getElementById("txtEstado").value = clientes[index].esta;
            document.getElementById("txtCurp").value = clientes[index].curp;
            document.getElementById("txtRfc").value = clientes[index].rfc;
            document.getElementById("numTel").value = clientes[index].numTel;
            document.getElementById("txtEmail").value = clientes[index].correo;
            
            document.getElementById("btnModificar").disabled = false;
            document.getElementById("btnEliminar").disabled = false;
            document.getElementById("btnGuardar").disabled = true;
            document.getElementById("btnNuevo").disabled = false;
            indexClienteSeleccionado = index;
        }

        export function nuevo(){
            document.getElementById("txtNombre").value = "";
            document.getElementById("txtApeP").value = "";
            document.getElementById("txtApeM").value = "";
            document.getElementById("rbtGenero").value = "";
            document.getElementById("dateNacimiento").value = "";
            document.getElementById("txtDomicilio").value = "";
            document.getElementById("numCodPostal").value = "";
            document.getElementById("txtCiudad").value = "";
            document.getElementById("txtEstado").value = "";
            document.getElementById("txtCurp").value = "";
            document.getElementById("txtRfc").value = "";
            document.getElementById("numTel").value = "";
            document.getElementById("txtEmail").value = "";
            
            document.getElementById("btnModificar").disabled = true;
            document.getElementById("btnEliminar").disabled = true;
            document.getElementById("btnGuardar").disabled = false;
            document.getElementById("btnNuevo").disabled = false;
            indexClienteSeleccionado = 0;
        }

        export function modificarCliente(){
            let numCliente, fechRegis, nom, apeP, apeM, gen, fechNac, domic, codPos, ciu, esta, curp, rfc, numTel,correo;
            
            numCliente = document.getElementById("txtNumUnico").value,
            fechRegis = document.getElementById("txtFechRegistro").value,
            nom = document.getElementById("txtNombre").value,
            apeP = document.getElementById("txtApeP").value,
            apeM = document.getElementById("txtApeM").value,
            gen = document.getElementById("rbtGenero").value,
            fechNac = document.getElementById("dateNacimiento").value,
            domic = document.getElementById("txtDomicilio").value,
            codPos = document.getElementById("numCodPostal").value,
            ciu = document.getElementById("txtCiudad").value,
            esta = document.getElementById("txtEstado").value,
            curp = document.getElementById("txtCurp").value,
            rfc = document.getElementById("txtRfc").value,
            numTel = document.getElementById("numTel").value,
            correo = document.getElementById("txtEmail").value;

            let cliente = {};
            cliente.numCliente = numCliente;
            cliente.fechRegis = fechRegis;
            cliente.nom = nom;
            cliente.apeP = apeP;
            cliente.apeM = apeM;
            cliente.gen = gen;
            cliente.fechNac = fechNac;
            cliente.domic = domic;
            cliente.codPos = codPos;
            cliente.ciu = ciu;
            cliente.esta = esta;
            cliente.curp = curp;
            cliente.rfc = rfc;
            cliente.numTel = numTel;
            cliente.correo = correo;
            cliente.estatus = 1;
             
            clientes[indexClienteSeleccionado] = cliente;
            nuevo();
            loadTabla();
        }

        export function eliminarCliente (){
            clientes[indexClienteSeleccionado].estatus = 0;
            nuevo();
            loadTabla();
        }
        
        
        fetch("Modulos/moduloCliente/dataCliente.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(jsondata){
                    clientes = jsondata;
                    console.log(clientes);
                    loadTabla(); 
            });

        export function buscarCliente() {
                let filtro = document.getElementById("inputCliente").value.toLowerCase();
                let filteredCliente = clientes.filter(function (cliente) {
                    for (let campo in cliente) {
                        if (cliente[campo].toString().toLowerCase().includes(filtro)) {
                            return true;
                        }
                    }
                    return false;
                });
                loadTabla(filteredCliente);
            }

        export function filtroCliente() {
                let filtro = document.getElementById("secFiltro").value;
                if (filtro === "2") {
                    loadTabla(clientes); 
                } else {
                    let filteredCliente = clientes.filter(function (cliente) {
                        return cliente.estatus === filtro;
                    });
                    loadTabla(filteredCliente);
                }
            }
           
        export function validarFormulario() {
            const formulario = document.getElementById("formularioCliente");
            if (formulario.checkValidity()) {
              agregarCliente();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No has ingresado correctamente la información de todos los campos requeridos.'
                  })
            }
          }
          


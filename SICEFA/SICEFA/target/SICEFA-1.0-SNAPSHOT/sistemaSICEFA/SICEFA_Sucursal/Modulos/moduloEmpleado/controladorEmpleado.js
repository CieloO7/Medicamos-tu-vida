var apikey = 'l7fuZFFzZaYKU2UyXDRluACPUQ-rYie2py_-4OgqGEM';

let indexEmpleadoSeleccionado;
        let empleados = [];
        let consecutivo = 1;

        function addEmpleado() {
            const formulario = document.getElementById("empleadoForm");
            
            
            if (formulario.checkValidity()) {
            let nombre, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento, RFC, CURP, foto, domicilio, codigoPostal, ciudad, estado, telefono;
            let fechaIngreso, puesto, salarioBrutoMensual, email, codigoEmpleado;

            nombre = document.getElementById("nombre1").value;
            apellidoPaterno = document.getElementById("apellido-paterno1").value;
            apellidoMaterno = document.getElementById("apellido-materno1").value;
            genero = document.getElementById("genero1").value;
            fechaNacimiento = document.getElementById("fecha-nacimiento1").value;
            RFC = document.getElementById("rfc1").value;
            CURP = document.getElementById("curp1").value;
            foto = document.getElementById("foto1").value;
            domicilio = document.getElementById("domicilio1").value;
            codigoPostal = document.getElementById("codigo-postal1").value;
            ciudad = document.getElementById("ciudad1").value;
            estado = document.getElementById("estado1").value;
            telefono = document.getElementById("telefono1").value;
            fechaIngreso = document.getElementById("fecha-ingreso1").value;
            puesto = document.getElementById("puesto1").value;
            salarioBrutoMensual = document.getElementById("salario-bruto-mensual1").value;
            email = document.getElementById("email1").value;
            codigoEmpleado = generarCodigoEmpleado();
            

            let empleado = {
                nombre: nombre,
                apellidoPaterno: apellidoPaterno,
                apellidoMaterno: apellidoMaterno,
                genero: genero,
                fechaNacimiento: fechaNacimiento,
                RFC: RFC,
                CURP: CURP,
                foto: foto,
                domicilio: domicilio,
                codigoPostal: codigoPostal,
                ciudad: ciudad,
                estado: estado,
                telefono: telefono,
                fechaIngreso: fechaIngreso,
                puesto: puesto,
                salarioBrutoMensual: salarioBrutoMensual,
                email: email,
                codigoEmpleado: codigoEmpleado,
                estatus: "Activo"
            };
             
            
    


            empleados.push(empleado);
            clean();
            loadTabla();
        }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has ingresado la información de todos los campos requeridos.'
        });
    }
}
        
        
        

        function loadTabla(empleadosToDisplay) {
            let tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
            tableBody.innerHTML = "";

            let data = empleadosToDisplay || empleados;
            data.forEach(function (empleado) {
                let row = tableBody.insertRow();

                row.onclick = function () {
                    selectEmpleado(empleados.indexOf(empleado));
                };

                let cellIndex = row.insertCell();
                cellIndex.textContent = empleados.indexOf(empleado) + 1;

                let cellNombre = row.insertCell();
                cellNombre.textContent = empleado.nombre;

                let cellApellidoPaterno = row.insertCell();
                cellApellidoPaterno.textContent = empleado.apellidoPaterno;

                let cellApellidoMaterno = row.insertCell();
                cellApellidoMaterno.textContent = empleado.apellidoMaterno;

                let cellGenero = row.insertCell();
                cellGenero.textContent = empleado.genero;

                let cellFechaNacimiento = row.insertCell();
                cellFechaNacimiento.textContent = empleado.fechaNacimiento;

                let cellRFC = row.insertCell();
                cellRFC.textContent = empleado.RFC;

                let cellCURP = row.insertCell();
                cellCURP.textContent = empleado.CURP;

               



                let cellDomicilio = row.insertCell();
                cellDomicilio.textContent = empleado.domicilio;

                let cellCodigoPostal = row.insertCell();
                cellCodigoPostal.textContent = empleado.codigoPostal;

                let cellCiudad = row.insertCell();
                cellCiudad.textContent = empleado.ciudad;

                let cellEstado = row.insertCell();
                cellEstado.textContent = empleado.estado;

                let cellTelefono = row.insertCell();
                cellTelefono.textContent = empleado.telefono;

                let cellFechaIngreso = row.insertCell();
                cellFechaIngreso.textContent = empleado.fechaIngreso;

                let cellPuesto = row.insertCell();
                cellPuesto.textContent = empleado.puesto;

                let cellSalarioBrutoMensual = row.insertCell();
                cellSalarioBrutoMensual.textContent = empleado.salarioBrutoMensual;

                let cellEmail = row.insertCell();
                cellEmail.textContent = empleado.email;

                let cellCodigoEmpleado = row.insertCell();
                cellCodigoEmpleado.textContent = empleado.codigoEmpleado;

                let cellAcciones = row.insertCell();
                let estatusBtn = document.createElement("button");
                estatusBtn.type = "button";
                estatusBtn.className = "btn btn-outline-danger btn-sm";
                estatusBtn.onclick = function () {
                    changeEstatus(empleados.indexOf(empleado));
                };
                estatusBtn.innerHTML = '<i class="fas fa-check"></i> ' + (empleado.estatus === "Activo" ? "Activo" : "Inactivo");
                cellAcciones.appendChild(estatusBtn);

                let detallesBtn = document.createElement("button");
                detallesBtn.type = "button";
                detallesBtn.className = "btn btn-outline-primary btn-sm mx-1";
                detallesBtn.setAttribute("data-id", empleados.indexOf(empleado));
                detallesBtn.onclick = function () {
                    showDetails(empleado);
                };
                detallesBtn.innerHTML = ' Detalles';
                cellAcciones.appendChild(detallesBtn);
            });
        }

        function selectEmpleado(index) {
            document.getElementById("nombre1").value = empleados[index].nombre;
            document.getElementById("apellido-paterno1").value = empleados[index].apellidoPaterno;
            document.getElementById("apellido-materno1").value = empleados[index].apellidoMaterno;
            document.getElementById("genero1").value = empleados[index].genero;
            document.getElementById("fecha-nacimiento1").value = empleados[index].fechaNacimiento;
            document.getElementById("rfc1").value = empleados[index].RFC;
            document.getElementById("curp1").value = empleados[index].CURP;
            document.getElementById("foto1").value = empleados[index].foto;
            document.getElementById("domicilio1").value = empleados[index].domicilio;
            document.getElementById("codigo-postal1").value = empleados[index].codigoPostal;
            document.getElementById("ciudad1").value = empleados[index].ciudad;
            document.getElementById("estado1").value = empleados[index].estado;
            document.getElementById("telefono1").value = empleados[index].telefono;
            document.getElementById("fecha-ingreso1").value = empleados[index].fechaIngreso;
            document.getElementById("puesto1").value = empleados[index].puesto;
            document.getElementById("salario-bruto-mensual1").value = empleados[index].salarioBrutoMensual;
            document.getElementById("email1").value = empleados[index].email;
            document.getElementById("codigo-empleado1").value = empleados[index].codigoEmpleado;

              // Enable the modification button
    document.getElementById("btnModificar").classList.remove("disabled");
    
    // Store the selected index for later use
    indexEmpleadoSeleccionado = index;

        }

        function clean() {
            document.getElementById("nombre1").value = "";
            document.getElementById("apellido-paterno1").value = "";
            document.getElementById("apellido-materno1").value = "";
            document.getElementById("genero1").value = "";
            document.getElementById("fecha-nacimiento1").value = "";
            document.getElementById("rfc1").value = "";
            document.getElementById("curp1").value = "";
            document.getElementById("foto1").value = "";
            document.getElementById("domicilio1").value = "";
            document.getElementById("codigo-postal1").value = "";
            document.getElementById("ciudad1").value = "";
            document.getElementById("estado1").value = "";
            document.getElementById("telefono1").value = "";
            document.getElementById("fecha-ingreso1").value = "";
            document.getElementById("puesto1").value = "";
            document.getElementById("salario-bruto-mensual1").value = "";
            document.getElementById("email1").value = "";
            document.getElementById("codigo-empleado1").value = "";

         
        indexEmpleadoSeleccionado = -1;
        document.getElementById("btnModificar").classList.add("disabled");

     
        loadTabla();

       
        clean()
        }

        function changeEstatus(index) {
    empleados[index].estatus = empleados[index].estatus === "Activo" ? "Inactivo" : "Activo";
    loadTabla();
}

        function updateEmpleado() {
    if (indexEmpleadoSeleccionado !== undefined) {
        empleados[indexEmpleadoSeleccionado].nombre = document.getElementById("nombre1").value;
        empleados[indexEmpleadoSeleccionado].apellidoPaterno = document.getElementById("apellido-paterno1").value;
        empleados[indexEmpleadoSeleccionado].apellidoMaterno = document.getElementById("apellido-materno1").value;
        empleados[indexEmpleadoSeleccionado].genero = document.getElementById("genero1").value;
        empleados[indexEmpleadoSeleccionado].fechaNacimiento = document.getElementById("fecha-nacimiento1").value;
        empleados[indexEmpleadoSeleccionado].RFC = document.getElementById("rfc1").value;
        empleados[indexEmpleadoSeleccionado].CURP = document.getElementById("curp1").value;
        empleados[indexEmpleadoSeleccionado].foto = document.getElementById("foto1").value;
        empleados[indexEmpleadoSeleccionado].domicilio = document.getElementById("domicilio1").value;
        empleados[indexEmpleadoSeleccionado].codigoPostal = document.getElementById("codigo-postal1").value;
        empleados[indexEmpleadoSeleccionado].ciudad = document.getElementById("ciudad1").value;
        empleados[indexEmpleadoSeleccionado].estado = document.getElementById("estado1").value;
        empleados[indexEmpleadoSeleccionado].telefono = document.getElementById("telefono1").value;
        empleados[indexEmpleadoSeleccionado].fechaIngreso = document.getElementById("fecha-ingreso1").value;
        empleados[indexEmpleadoSeleccionado].puesto = document.getElementById("puesto1").value;
        empleados[indexEmpleadoSeleccionado].salarioBrutoMensual = document.getElementById("salario-bruto-mensual1").value;
        empleados[indexEmpleadoSeleccionado].email = document.getElementById("email1").value;
        empleados[indexEmpleadoSeleccionado].codigoEmpleado = document.getElementById("codigo-empleado").value;
        
        
        loadTabla();
        clean();
    }
}


        function filterEmpleados() {
    let filtro = document.getElementById("filtroEmpleados").value;
    if (filtro === "Todos") {
        loadTabla(empleados); // Aqui muestra a todos los empleados
    } else {
        let filteredEmpleados = empleados.filter(function (empleado) {
            return empleado.estatus === filtro;
        });
        loadTabla(filteredEmpleados);
    }
}

function mostrarTodosEmpleados() {
    loadTabla(empleados);
}
        
        
        function buscarEmpleados() {
    let filtro = document.getElementById("campoBusqueda").value.toLowerCase();
    let filteredEmpleados = empleados.filter(function (empleado) {
        for (let campo in empleado) {
            if (empleado[campo].toString().toLowerCase().includes(filtro)) {
                return true;
            }
        }
        return false;
    });
    loadTabla(filteredEmpleados);
}


        // Función para mostrar los detalles del empleado en la ventana emergente
        function showDetails(empleado) {
            document.getElementById("detailsModalLabel").textContent = "Detalles de Empleado: " + empleado.nombre;
            document.getElementById("modalNombre").textContent = empleado.nombre;
            document.getElementById("modalApellidoPaterno").textContent = empleado.apellidoPaterno;
            document.getElementById("modalApellidoMaterno").textContent = empleado.apellidoMaterno;
            document.getElementById("modalGenero").textContent = empleado.genero;
            document.getElementById("modalFechaNacimiento").textContent = empleado.fechaNacimiento;
            document.getElementById("modalRFC").textContent = empleado.RFC;
            document.getElementById("modalCURP").textContent = empleado.CURP;
            document.getElementById("imagenMostrada").src = empleado.foto;
            document.getElementById("modalDomicilio").textContent = empleado.domicilio;
            document.getElementById("modalCodigoPostal").textContent = empleado.codigoPostal;
            document.getElementById("modalCiudad").textContent = empleado.ciudad;
            document.getElementById("modalEstado").textContent = empleado.estado;
            document.getElementById("modalTelefono").textContent = empleado.telefono;
            document.getElementById("modalFechaIngreso").textContent = empleado.fechaIngreso;
            document.getElementById("modalPuesto").textContent = empleado.puesto;
            document.getElementById("modalSalarioBrutoMensual").textContent = empleado.salarioBrutoMensual;
            document.getElementById("modalEmail").textContent = empleado.email;
            document.getElementById("modalCodigoEmpleado").textContent = empleado.codigoEmpleado;

            // Mostrar la ventana emergente de detalles
            $('#detailsModal').modal('show');
        }
        
        
        function generarCodigoEmpleado() {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear().toString().slice(-2); // Últimas dos cifras del año
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Número de mes con dos dígitos
    const codigoEmpleado = anio + mes + consecutivo.toString().padStart(3, '0'); // Código completo

    consecutivo++; // Incrementar el número consecutivo para el siguiente empleado

    return codigoEmpleado;
}

function mostrarFoto() {
    const fotoInput = document.getElementById("foto1");
    const imagenMostrada = document.getElementById("imagenMostrada");
    
    if (fotoInput.files && fotoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagenMostrada.src = e.target.result;
            imagenMostrada.width = 120; 
            imagenMostrada.height = 140; 
        };

        reader.readAsDataURL(fotoInput.files[0]);
    }
}

       

    
        empleados = [
            {
                nombre: "Vicente",
                apellidoPaterno: "Gómez",
                apellidoMaterno: "Aguiar",
                genero: "Masculino",
                fechaNacimiento: "2004-03-18",
                RFC: "PERJ900515ABC",
                CURP: "GOAA040318HGTMGNA9",
                foto: "vicente.jpg",
                domicilio: "Av. Reforma #123",
                codigoPostal: "12345",
                ciudad: "Ciudad de Mexico",
                estado: "Ciudad de Mexico",
                telefono: "4774834787",
                fechaIngreso: "2020-01-15",
                puesto: "Gerente",
                salarioBrutoMensual: "30000",
                email: "Vicengomez571@gmail.com",
                codigoEmpleado: "2008001",
                estatus: "Activo"
            },
            {
                nombre: "Fatima de la luz",
                apellidoPaterno: "Gómez",
                apellidoMaterno: "Aguiar",
                genero: "Femenino",
                fechaNacimiento: "2005-05-21",
                RFC: "LOMR851025XYZ",
                CURP: "GOAF010530MGTMGTA2",
                foto: "vale.jpg",
                domicilio: "Calle Juarez #456",
                codigoPostal: "54321",
                ciudad: "Guadalajara",
                estado: "Jalisco",
                telefono: "4773128422",
                fechaIngreso: "2018-06-20",
                puesto: "Supervisor",
                salarioBrutoMensual: "25000",
                email: "Fatima@gmail.com",
                codigoEmpleado: "1808001",
                estatus: "Activo"
            }
        ];

        loadTabla();
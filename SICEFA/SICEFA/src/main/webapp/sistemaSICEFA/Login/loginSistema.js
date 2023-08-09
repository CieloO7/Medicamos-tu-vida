/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function regresarCentral(){
    window.location.href = "../Login/loginCentral.html";
}

function regresarSucursal(){
    window.location.href = "../Login/loginSucursal.html";
}

function validarLoginCentral() {
    let usuario = document.getElementById("txtUsuario").value;
    let contrasenia = document.getElementById("txtContrasena").value;
    if (usuario !== "" && contrasenia !== "") {
        if (usuario !== 'Administrador' || contrasenia !== 'Administrador') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos.'
            });
        } else {
            window.location.href = "../../sistemaSICEFA/SICEFA_Central/inicioCentral.html";
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese su usuario y contraseña.'
        });
    }
}

function validarLoginSucursal() {
    let usuario = document.getElementById("txtUsuario").value;
    let contrasenia = document.getElementById("txtContrasena").value;
    if (usuario !== "" && contrasenia !== "") {
        if (usuario !== 'AdministradorS' || contrasenia !== 'AdministradorS') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos.'
            });
        } else {
            window.location.href = "../../sistemaSICEFA/SICEFA_Sucursal/inicioSucursal.html";
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese su usuario y contraseña.'
        });
    }
}
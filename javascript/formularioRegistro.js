
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


function registroUsuarios(){
    llamarUsuarios();
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let usuario = document.getElementById('usuario');
    let contraseña = document.getElementById('contraseña');
    let repetirContraseña = document.getElementById('repetir-contraseña');
    let guardar = document.getElementById('guardar');

guardar.addEventListener('click', function(){
    let formUsuario = document.getElementById('form-usuario');
    let nombreRegistro = nombre.value.trim();
    let apellidoRegistro = apellido.value.trim();
    let usuarioRegistro = usuario.value.trim();
    let contraseñaRegistro = contraseña.value;

    if(nombreRegistro === '' || apellidoRegistro === '' || usuarioRegistro  === '' || contraseña.value === '' || repetirContraseña.value === ''){
        Swal.fire({
            icon: "error",
            title: "Debe completar todos los campos",
            showConfirmButton: false,
            timer: 3000
          });
        return;
    }else if(contraseña.value === repetirContraseña.value){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario Creado Exitosamente",
            showConfirmButton: false,
            timer: 3500, // Ajusta el tiempo de espera a 5 segundos
            didClose: () => {
                let nuevoUsuario = {
                    nombre: nombreRegistro,
                    apellido: apellidoRegistro,
                    usuario: usuarioRegistro,
                    contraseña: contraseñaRegistro,
                }

                usuarios.push(nuevoUsuario);
                formUsuario.reset();
                usuariosLocalStore();
                window.location.href = '../index.html';
            }
        });
    }else{
        Swal.fire({
            icon: "error",
            title: "Las contraseñas no son iguales",
            showConfirmButton: false,
            timer: 3000
          });
    }
 })
}

function llamarUsuarios(){
    JSON.parse(localStorage.getItem('usuarios')) || []
}
//Guardar en el local
function usuariosLocalStore(){
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }

llamarUsuarios();
registroUsuarios();


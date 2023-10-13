
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
console.log(usuarios)

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
        alert('debe llenar todos los campos')
        return;
    }else if(contraseña.value === repetirContraseña.value){
        alert('usuario registrado')

        let nuevoUsuario = {
            nombre: nombreRegistro,
            apellido: apellidoRegistro,
            usuario: usuarioRegistro,
            contraseña: contraseñaRegistro,
        }
        usuarios.push(nuevoUsuario);
        formUsuario.reset();
        console.log(usuarios);
        usuariosLocalStore();
    }else{
        alert('Las contraseñas ingresadas no son iguales')
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


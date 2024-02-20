function ValidarUsuario(){
    let usuarios        =   JSON.parse(localStorage.getItem('usuarios')) || [];
    let loginUsuario    =   document.getElementById('login-usuario');
    let loginContraseña =   document.getElementById('login-contraseña');
    let btnIniciar      =   document.getElementById('iniciar');
    let formLogin       =   document.getElementById('form-login');

    btnIniciar.addEventListener('click', function(){
        
        let validarUsuario = loginUsuario.value;
        let validarContraseña = loginContraseña.value;

        if (validarUsuario !== '' || validarContraseña !== ""){     
            let buscarUsuario = usuarios.find(function(user) {
                return user.usuario === validarUsuario && user.contraseña === validarContraseña;
              });
              if(buscarUsuario){
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-start",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "success",
                  title: "Bienvenido - "  + buscarUsuario.nombre + " " + buscarUsuario.apellido,
                });
                formLogin.reset() 
              }else{
                Swal.fire({
                  icon: "error",
                  title: "Usuario o contraseña incorrecta",
                  text: "Verifica los datos y vuelve a intentarlo",
                  showConfirmButton: false,
                  timer: 3000
                });
                formLogin.reset() 
              }

        }else{
          const Toast = Swal.mixin({
            toast: true,
            position: "top-start",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Ingrese los datos"
          });
        }
    
    })
}

ValidarUsuario();
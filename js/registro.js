
function registro(){    
    var campos = [
        {campo:'reg-nombre',valido:false,etiqueta:"nombre"},
        {campo:'reg-apellido',valido:false,etiqueta:"apellido"},
        {campo:'reg-email',valido:false,etiqueta:"correo"},
        {campo:'reg-password',valido:false,etiqueta:"contraseña"}
    ];
    for (var i=0; i<campos.length;i++){
        campos[i].valido = validarCampo(campos[i].campo);
    }

    for (var i=0; i<campos.length;i++){
        if (!campos[i].valido){
            document.getElementById('-error').innerHTML=
            `<div id="error">
            <label><i class="far fa-times-circle"> </i>  Introduce tú ${campos[i].etiqueta}</label>    
        </div>
        `;            
            return;
        }
    }
    
    if (!validarCorreo(document.getElementById('reg-email').value))
        return;   
    
    registrar();
}

function validarCorreo(correo){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(correo)){
        return true;
    }
    else{
        document.getElementById('-error').innerHTML=
            `<div id="error">
            <label><i class="far fa-times-circle"> </i>  Introduzca un correo electronico valido</label>    
            </div>
            `;
        return false;
    }    
}

function validarCampo(id){
    if (document.getElementById(id).value == ''){
        return false;    
    }
    return true;    
}

function registrar(){
    console.log("si entra");
    var registro='nombre='+$("#reg-nombre").val()+"&"+'apellido='+$("#reg-apellido").val()+"&"+'correo='+$("#reg-email").val()+"&"+'contrasena='+$("#reg-password").val();

    $.ajax({
        url:"procesos/registro.php?accion=verificarCorreo",
        method:"POST",
        data:registro,
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
        },
        error:function(error){
            console.error(error);
        }
        
    });

    console.log(registro);

}


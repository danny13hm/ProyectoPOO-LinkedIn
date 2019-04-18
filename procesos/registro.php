<?php
    include("../procesos/usuario.php");
    switch($_GET["accion"]){
        case "verificarCorreo":
            $p=new Usuario(
                $_POST['nombre'],
                $_POST['apellido'],
                $_POST['correo'],
                $_POST['contrasena']
            );

            echo $p->guardar();
            break;
        default:
            echo "Error";
        break;    
    }

?>
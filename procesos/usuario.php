<?php
    class Usuario{

        private $nombre;
        private $apellido;
        private $correo;
        private $contrasena;

        public function __construct($nombre,$apellido, $correo, $contrasena){
            $this->nombre=$nombre;
            $this->apellido=$apellido;
            $this->correo=$correo;
            $this->contrasena=$contrasena;
        }
        
        public function setNombre($nombre){
            $this->nombre=$nombre;
        }

        public function getNombre(){
            return $this->nombre;
        }
        
        public function setApellido($apellido){
            $this->apellido=$apellido;
        }

        public function getApellido(){
            return $this->apellido;
        }

        public function setCorreo($correo){
            $this->correo=$correo;
        }

        public function getCorreo(){
            return $this->correo;
        }

        public function setContrasena($contrasena){
            $this->contrasena=$contrasena;
        }

        public function getcontrasena(){
            return $this->contrasena;
        }

        public function __toString(){
            $a["nombre"] = $this->nombre;
            $a["apellido"] = $this->apellido;
            $a["correo"] = $this->correo;
            $a["contrasena"] = $this->contrasena;
            return json_encode($a);
        }
        
        public function guardar(){
            $archivo = fopen('../data/usuarios.json','a+'); //r Lectura, w Escritura, a+ Anexar
            fwrite($archivo,$this->__toString()."\n"); //Convertir arreglo a cadena JSON
            fclose($archivo);
            return $this->__toString();
        }
    

    }





?>
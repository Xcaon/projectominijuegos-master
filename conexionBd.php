<?php


 function crearBaseDeDatos(){

    $servidor = 'localhost';
    $usuario = 'root';
    $password = '';
    $database = 'notas';

    // Sintaxis para la conexion a la base de datos
    $db = mysqli_connect($servidor, $usuario, $password, $database);
    mysqli_query($db, "SET NAMES 'utf8");

    return $db;
}

?>
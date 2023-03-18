<?php
 include 'validacionUsuario.php';
 $formulario_activado = false;

 if ( isset($_POST['usuario']) && isset($_POST['password']) ){
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
    $formulario_activado = true;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilos/estilosloginRegistro.css" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

<div class="padre">
    <div class="contenedorLogin">
        <a class="volver" href="login.php"><img src="imagenes/flecha.svg" width="20" height="20"><p class="mover"> Volver al Login</p> </a>
        <img class="logo" src="imagenes/register.png" width="100" height="100">
        <h1>Registrate</h1>
        <form action="registro.php" method="POST">
            <label class="labelLogin" aria-placeholder="Introduce tu nombre de usuario.." for="usuario">Nombre de usuario</label>
            <input class="inputsEntrada" type="text" name="usuario">
            <label class="labelLogin" for="password">Tu nueva contraseña</label>
            <input class="inputsEntrada" type="password" name="password">
            <input class="login" type="submit" value="Registrate">
            <?php if ( $formulario_activado ):  ?>
                <?php registro($usuario, $password) ?>
                <?php endif; ?>

        </form>
        </div>
    </div>
    
    
</body>
</html>
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
    
</head>
<body>

<div class="padre">
    <div class="contenedorLogin">
        <img class="logo" src="imagenes/imagen.png" width="100" height="100">
        <h1>Iniciar Sesión</h1>
        <form action="login.php" method="POST">
            <label class="labelLogin" aria-placeholder="Introduce tu nombre de usuario.." for="usuario">Usuario</label>
            <input class="inputsEntrada" type="text" name="usuario">
            <label class="labelLogin" for="password">Contraseña</label>
            <input class="inputsEntrada" type="password" name="password">
            <a href="registro.php">¿No tienes cuentas? Registrate aquí</a>
            <input class="login" type="submit" value="Login">
            <?php if ( $formulario_activado ):  ?>
                <?php validar($usuario, $password) ?>
                <?php endif; ?>

        </form>
        </div>
    </div>
    
    <script src="javascript/alerta.js"></script>
</body>
</html>
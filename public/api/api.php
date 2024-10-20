<?php
cors();
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));
date_default_timezone_set('America/Bogota');
$_POST = json_decode(file_get_contents("php://input"), true);
if (isset($_GET["accion"])) {
  $accion = $_GET["accion"];
  switch ($accion) {
    case "cargar":
      if (isset($_GET["target"])) {
        $target = ".." . DIRECTORY_SEPARATOR . "modelo" . DIRECTORY_SEPARATOR . "views" . DIRECTORY_SEPARATOR . $_GET["target"];
        $contenido = file_get_contents($target);
        enviaRespuesta($contenido, false);
      } else {
        enviaRespuesta("Para cargar una vista se debe indicar el target.");
      }
      break;
  }
} else {
  enviaRespuesta("No se ha solicitado ninguna acción.");
}
// Funciones
function enviaRespuesta(string $cadena, bool $error = true, string $tipo = "json"): void
{
  $respuesta = ["error" => $error ? $cadena : null];
  if (!$error) $respuesta["datos"] = $cadena;
  switch ($tipo) {
    case "json":
      header('Content-Type: application/json; charset=utf-8');
      print json_encode($respuesta, JSON_PRETTY_PRINT);
      break;
  }
}
function cors() // Genera acceso a todo CORS
{
  if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
  }
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
  }
}

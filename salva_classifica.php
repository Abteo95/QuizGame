<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = isset($_POST['nome']) ? trim($_POST['nome']) : '';
    $punteggio = isset($_POST['punteggio']) ? intval($_POST['punteggio']) : 0;

    if ($nome !== '') {
        $linea = $nome . ';' . $punteggio . PHP_EOL;
        $result = file_put_contents('classifica.txt', $linea, FILE_APPEND | LOCK_EX);
        if ($result === false) {
            echo "Errore nella scrittura del file.";
        } else {
            echo "Salvataggio avvenuto con successo.";
        }
    } else {
        http_response_code(400);
        echo "Nome non valido.";
    }
} else {
    http_response_code(405);
    echo "Metodo non consentito.";
}
?>

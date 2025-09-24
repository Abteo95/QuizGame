<?php
// salva_classifica.php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$file = 'classifica.txt';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo "Metodo non permesso";
  exit;
}

$nome = isset($_POST['nome']) ? trim($_POST['nome']) : '';
$punteggio = isset($_POST['punteggio']) ? floatval($_POST['punteggio']) : 0.0;

if ($nome === '' || $punteggio < 0) {
  http_response_code(400);
  echo "Dati non validi";
  exit;
}

// Leggi classifica esistente
$righe = [];
if (file_exists($file)) {
  $righe = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
}

$classe = []; // assoc: nome => punteggio

foreach ($righe as $riga) {
  list($utente, $punt) = explode(';', $riga);
  $classe[$utente] = floatval($punt);
}

// Se utente già presente
if (isset($classe[$nome])) {
  // Richiedi sovrascrittura: puoi usare un parametro “force” nel POST
  $force = isset($_POST['force']) && $_POST['force'] === 'true';
  if (!$force) {
    // Rispondi che esiste già
    echo "Esiste già";
    exit;
  }
}

// Aggiorna o inserisci
$classe[$nome] = $punteggio;

// Ordina discendente per punteggio
arsort($classe, SORT_NUMERIC);

// Prepara righe da scrivere
$linesOut = [];
foreach ($classe as $u => $p) {
  $linesOut[] = $u . ';' . $p;
}

// Scrivi su file, sovrascrivendo
file_put_contents($file, implode(PHP_EOL, $linesOut) . PHP_EOL, LOCK_EX);

echo "Salvataggio effettuato";
?>

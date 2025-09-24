let nomeGiocatore = "";
let domandaCorrente = 0;
let punteggio = 0;
let punteggio_totale = 0;
let tempo = 0;
let timerInterval;
let domandePerGiocatore = [];

// Funzioni di navigazione
function mostraSezione(id) {
  document.querySelectorAll(".container").forEach(sezione => {
    sezione.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

// Vai alla schermata per inserire il nome
function vaiASceltaNome() {
  mostraSezione("sceltaNome");
}

// Torna alla schermata principale
function tornaHome() {
  mostraSezione("home");
}

// Mostra classifica (da implementare)
function mostraClassifica() {
  mostraSezione("classifica");
  // TODO: Caricare la classifica da file/php/localStorage
  document.getElementById("listaClassifica").innerHTML = `
    <li>Mario - 9</li>
    <li>Luigi - 8</li>
    <li>Peach - 7</li>
  `;
}

// Inizia il quiz
function iniziaQuiz() {
  const input = document.getElementById("nomeGiocatore");
  nomeGiocatore = input.value.trim();

  if (nomeGiocatore.length < 3) {
    alert("Inserisci un nome valido (almeno 3 caratteri).");
    input.focus();
    return;
  }
  if (nomeGiocatore.length > 9) {
    alert("Accorcia sto nome fenomeno!");
    input.focus();
    return;
  }

  document.getElementById("giocatoreNome").textContent = nomeGiocatore;

  mostraSezione("quiz");

  // Reset variabili per partita nuova
  domandaCorrente = 0;
  punteggio = 0;
  tempo = 0;
  //document.getElementById("score").textContent = punteggio;

  // Seleziona 20 domande casuali per il giocatore
  domandePerGiocatore = seleziona20Domande();

  mostraDomanda();
  startTimer();
}

// Fisher-Yates shuffle
function mescolaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Seleziona 20 domande casuali
function seleziona20Domande() {
  const copia = [...domande];
  mescolaArray(copia);
  return copia.slice(0, 20);
}

// Mostra la domanda corrente
function mostraDomanda() {
  const domanda = domandePerGiocatore[domandaCorrente];
  console.log("Domanda attuale:", domanda);  // 🔍 DEBUG

  if (!domanda) {
    fineQuiz();
    return;
  }

  document.getElementById("domanda").textContent = domanda.domanda;
  document.getElementById("domandaAttuale").textContent = domandaCorrente + 1;

  const risposteContainer = document.getElementById("risposte");
  risposteContainer.innerHTML = "";

  domanda.risposte.forEach(risposta => {
    const btn = document.createElement("button");
    btn.textContent = risposta;
    btn.onclick = () => selezionaRisposta(btn, risposta);
    risposteContainer.appendChild(btn);
  });

  document.getElementById("nextBtn").style.display = "none";
}


// Seleziona risposta
function selezionaRisposta(bottone, rispostaSelezionata) {
  const domanda = domandePerGiocatore[domandaCorrente];
  const corretta = domanda.corretta;

  const bottoni = document.querySelectorAll("#risposte button");
  bottoni.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === corretta) {
      btn.classList.add("corretta");
    }
  });

  if (rispostaSelezionata === corretta) {
    punteggio++;
    bottone.classList.add("corretta");
  } else {
    bottone.classList.add("errata");
  }

  document.getElementById("nextBtn").style.display = "block";
}

// Passa alla prossima domanda
function vaiAvanti() {
  domandaCorrente++;
  if (domandaCorrente >= domandePerGiocatore.length) {
    fineQuiz();
  } else {
    mostraDomanda();
  }
}

// Timer
function startTimer() {
  tempo = 0;
  document.getElementById("tempo").textContent = tempo;

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    tempo++;
    document.getElementById("tempo").textContent = tempo;
  }, 1000);
}

// Fine del quiz
function fineQuiz() {
  clearInterval(timerInterval);
  mostraSezione("fine");

  document.getElementById("risposteCorrette").textContent = punteggio;
  punteggio_totale = punteggio * 300;
  let err = 20-punteggio;
  punteggio_totale = punteggio_totale - err * 50;
  punteggio_totale = punteggio_totale * 0.7 * tempo;
  if (punteggio_totale < 0) punteggio_totale = 0;

  let messaggio = "";
  if (punteggio <= 3) {
    messaggio = "Un cieco avrebbe fatto meglio..";
	} else if (punteggio <= 6) {
	messaggio = "Vomitevole..";
	} else if (punteggio <= 9) {
    messaggio = "Provo imbarazzo per te..";
	} else if (punteggio <= 12) {
    messaggio = "Prossima volta prova a leggere le domande";
	} else if (punteggio <= 15) {
    messaggio = "Rispetto ad altri almeno sai leggere, GG!";
	} else if (punteggio <= 18) {
    messaggio = "2 parole, Professionista";
	} else if (punteggio <= 19) {
    messaggio = "Di secchioni qua non ne vogliamo!";
  } else {
    messaggio = "Nulla da dire, CAVALLO!";
  }

  document.getElementById("messaggioFinale").textContent = messaggio;

  inviaClassifica();
}

// Salva la classifica (su file/PHP - opzionale)
function inviaClassifica() {
  const formData = new FormData();
  formData.append("nome", nomeGiocatore);
  formData.append("punteggio", punteggio_totale);  // punteggio calcolato
  formData.append("tempo", tempo);               // tempo impiegato

  fetch("https://abteo.gt.tc/salva_classifica.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(text => {
      console.log("✅ Risposta dal server:", text);
    })
    .catch(err => {
      console.error("❌ Errore nel salvataggio della classifica:", err);
    });
}

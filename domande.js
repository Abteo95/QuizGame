const domande = [
  {
    domanda: "Ho una M rossa sul cappello, salto sui funghi e corro contro il tempo. Chi sono?",
    risposte: ["Luigi", "Bowser", "Yoshi", "Mario"],
    corretta: "Mario"
  },
  {
    domanda: "Mio fratello veste di verde ed è spesso il “giocatore 2”. Chi è?",
    risposte: ["Mario", "Wario", "Bowser", "Luigi"],
    corretta: "Luigi"
  },
  {
    domanda: "Ha il cappello verde e la spada, ma non è Zelda. Chi è?",
    risposte: ["Ganon", "Zelda", "Toon Link", "Link"],
    corretta: "Link"
  },
  {
    domanda: "Non vuole stare nella PokéBall. Chi è?",
    risposte: ["Bulbasaur", "Charmander", "Pikachu", "Snorlax"],
    corretta: "Pikachu"
  },
  {
    domanda: "“It’s me, …!”",
    risposte: ["Luigi", "Wario", "Mario", "Bowser"],
    corretta: "Mario"
  },
  {
    domanda: "Ho un occhio solo, esplodo senza preavviso e non piaccio ai costruttori. Chi sono?",
    risposte: ["Enderman", "Zombie", "Creeper", "Skeleton"],
    corretta: "Creeper"
  },
  {
    domanda: "Il Pokémon iniziale di tipo fuoco della prima generazione. Chi è?",
    risposte: ["Squirtle", "Bulbasaur", "Charmander", "Pikachu"],
    corretta: "Charmander"
  },
  {
    domanda: "In Mario Kart, è l’oggetto più temuto: è blu e prende sempre il primo. Cos’è?",
    risposte: ["Banana", "Fungo", "Guscio blu", "Stella"],
    corretta: "Guscio blu"
  },
  {
    domanda: "Il pezzo più ambito in Tetris. Cos’è?",
    risposte: ["Quello a L", "Quello a T", "Quello lungo", "Quello a quadrato"],
    corretta: "Quello lungo"
  },
  {
    domanda: "In Street Fighter, cos’è l’Hadouken?",
    risposte: ["Una presa", "Un pugno", "Un’onda di energia", "Un calcio"],
    corretta: "Un’onda di energia"
  },
  {
    domanda: "Primo videogioco con una pallina che colpisce una barra. Qual è?",
    risposte: ["Breakout", "Pong", "Arkanoid", "Tennis"],
    corretta: "Pong"
  },
  {
    domanda: "Nome del gioco dove mangi puntini e scappi dai fantasmini. Qual è?",
    risposte: ["Snake", "Pac-Man", "Space Invaders", "Donkey Kong"],
    corretta: "Pac-Man"
  },
  {
    domanda: "Arcade con l’alieno pixelato che scende dall’alto. Qual è?",
    risposte: ["Galaga", "Space Invaders", "Asteroids", "Defender"],
    corretta: "Space Invaders"
  },
  {
    domanda: "In quale gioco compaiono le tetromino?",
    risposte: ["Dr. Mario", "Tetris", "Columns", "Puyo Puyo"],
    corretta: "Tetris"
  },
  {
    domanda: "“Finish Him!” da quale saga viene?",
    risposte: ["Street Fighter", "Mortal Kombat", "Tekken", "Soul Calibur"],
    corretta: "Mortal Kombat"
  },
  {
    domanda: "“You died” in rosso seguto da bestemmia: in quale saga?",
    risposte: ["Dark Souls", "Fifa", "Sekiro", "Demon's Souls"],
    corretta: "Dark Souls"
  },
  {
    domanda: "Un simulatore di vita dove puoi costruire case e famiglie. Qual è?",
    risposte: ["SimCity", "Minecraft", "The Sims", "Second Life"],
    corretta: "The Sims"
  },
  {
    domanda: "In quale gioco cucini panini e gestisci ordini in cucina?",
    risposte: ["Cooking Mama", "Overcooked", "Diner Dash", "BurgerTime"],
    corretta: "Overcooked"
  },
  {
    domanda: "In quale battle royale atterri da un bus volante?",
    risposte: ["PUBG", "Apex Legends", "Fortnite", "Call of Duty Warzone"],
    corretta: "Fortnite"
  },
  {
    domanda: "“Hadouken!” da quale gioco?",
    risposte: ["Tekken", "Street Fighter", "Mortal Kombat", "King of Fighters"],
    corretta: "Street Fighter"
  },
  {
    domanda: "“Heavy Machine Gun!” da quale gioco?",
    risposte: ["Contra", "Metal Slug", "Call of Duty", "Doom"],
    corretta: "Metal Slug"
  },
  {
    domanda: "In quale gioco devi fuggire da un imposter nello spazio?",
    risposte: ["Among Us", "Fall Guys", "Fortnite", "Rocket League"],
    corretta: "Among Us"
  },
  {
    domanda: "Se Mario prende 30 monete, quanto manca per una vita extra?",
    risposte: ["50", "60", "70", "80"],
    corretta: "70"
  },
  {
    domanda: "Se Pac-Man mangia 30 pallini di fila, quanti fantasmini lo inseguono?",
    risposte: ["2", "3", "4", "Nessuno"],
    corretta: "4"
  },
  {
    domanda: "Nel mondo dei videogiochi, chi è la principessa di Hyrule, ma molti la confondono con l’eroe?",
    risposte: ["Peach", "Zelda", "Daisy", "Midna"],
    corretta: "Zelda"
  },
  {
    domanda: "Nel Marvel Cinematic Universe, chi è il Dio del Tuono?",
    risposte: ["Loki", "Thor", "Hulk", "Odin"],
    corretta: "Thor"
  },
  {
    domanda: "Quale supereroe usa uno scudo di metallo e combatte per la giustizia?",
    risposte: ["Iron Man", "Capitan America", "Thor", "Hawkeye"],
    corretta: "Capitan America"
  },
  {
    domanda: "Chi diventa verde e incredibilmente forte quando si arrabbia?",
    risposte: ["Thor", "Hulk", "Loki", "Iron Man"],
    corretta: "Hulk"
  },
  {
    domanda: "Quale supereroe adolescente lancia ragnatele dai polsi?",
    risposte: ["Deadpool", "Spider-Man", "Ant-Man", "Black Panther"],
    corretta: "Spider-Man"
  },
  {
    domanda: "Chi, miliardario e geniale, pronuncia la famosa frase “I am Iron Man”?",
    risposte: ["Tony Stark", "Bruce Wayne", "Steve Rogers", "Peter Parker"],
    corretta: "Tony Stark"
  },
  {
    domanda: "Quale villain cerca di distruggere metà dell’universo nel film Avengers: Infinity War?",
    risposte: ["Loki", "Thanos", "Ultron", "Hela"],
    corretta: "Thanos"
  },
  {
    domanda: "Quali quattro personaggi formano i Fantastici 4?",
    risposte: [
      "Mister Fantastic, Torcia, Donna Invisibile, La Cosa",
      "Spider-Man, Deadpool, Wolverine, Iron Man",
      "Captain America, Thor, Hulk, Iron Man",
      "Batman, Superman, Wonder Woman, Flash"
    ],
    corretta: "Mister Fantastic, Torcia, Donna Invisibile, La Cosa"
  },
  {
    domanda: "Chi è il supereroe miliardario che costruisce un’armatura hi-tech per combattere il crimine?",
    risposte: ["Bruce Wayne", "Tony Stark", "Clark Kent", "Peter Parker"],
    corretta: "Tony Stark"
  },
  {
    domanda: "Quale eroe Marvel è noto per l’ironia, le armi e la tuta rossa e nera?",
    risposte: ["Spider-Man", "Deadpool", "Iron Man", "Wolverine"],
    corretta: "Deadpool"
  },
  {
    domanda: "Nel mondo dei ninja, chi è il ragazzo biondo che sogna di diventare Hokage?",
    risposte: ["Sasuke Uchiha", "Kakashi Hatake", "Naruto Uzumaki", "Itachi Uchiha"],
    corretta: "Naruto Uzumaki"
  },
  {
    domanda: "Nel villaggio di Konoha, chi è il maestro della squadra 7?",
    risposte: ["Jiraiya", "Kakashi Hatake", "Naruto Uzumaki", "Sasuke Uchiha"],
    corretta: "Kakashi Hatake"
  },
  {
    domanda: "In Naruto, quale potente demone è sigillato dentro il protagonista?",
    risposte: ["Kyubi", "Shukaku", "Matatabi", "Isobu"],
    corretta: "Kyubi"
  },
  {
    domanda: "Chi è il fratello maggiore di Sasuke Uchiha, noto per il suo sharingan?",
    risposte: ["Madara Uchiha", "Itachi Uchiha", "Kakashi Hatake", "Obito Uchiha"],
    corretta: "Itachi Uchiha"
  },
  {
    domanda: "Quale organizzazione di ninja criminali viaggia in tutto il mondo per i propri piani malvagi?",
    risposte: ["Akatsuki", "Anbu", "Konoha 11", "Team-Pallino"],
    corretta: "Akatsuki"
  },
  {
    domanda: "Da chi è composta la prima squadra 7?",
    risposte: [
      "Naruto, Sasuke, Sakura, Kakashi",
      "Naruto, Sasuke, Sai, Kakashi",
      "Sasuke, Sakura, Sai, Yamato",
      "Naruto, Sakura, Sai, Kakashi"
    ],
    corretta: "Naruto, Sasuke, Sakura, Kakashi"
  },
  {
    domanda: "Quale tecnica permette a Naruto di creare più copie di se stesso durante i combattimenti?",
    risposte: [
      "Kage Bunshin no Jutsu",
      "Shadow Clone Jutsu",
      "Henge no Jutsu",
      "Rasengan"
    ],
    corretta: "Kage Bunshin no Jutsu"
  },
  {
    domanda: "Chi è l’amico e rivale di Naruto che viene spesso sfidato in allenamenti e missioni?",
    risposte: ["Sasuke Uchiha", "Kakashi Hatake", "Shikamaru Nara", "Neji Hyuga"],
    corretta: "Sasuke Uchiha"
  },
  {
    domanda: "Chi è il ninja leggendario maestro di Naruto?",
    risposte: ["Jiraiya", "Orochimaru", "Tsunade", "Kakashi"],
    corretta: "Jyraiya"
  },
  {
    domanda: "Il suo nome indica dolore e ne infligge parecchio al villaggio della foglia, chi è?",
    risposte: ["Pain", "Konan", "Jiraiya", "Tobirama"],
    corretta: "Pain"
  },
  {
    domanda: "In quale Call of Duty, devi sopravvivere agli zombie in “Kino der Toten”?",
    risposte: ["Call of Duty: Modern Warfare", "Call of Duty: Black Ops", "Call of Duty: WWII", "Call of Duty: Ghosts"],
    corretta: "Call of Duty: Black Ops"
  },
  {
    domanda: "Call of Duty è un gioco di che tipo?",
    risposte: [
      "Sparatutto in terza persona",
      "Sparatutto in prima persona - FPS",
      "Gioco di ruolo",
      "Simulatore di guida"
    ],
    corretta: "Sparatutto in prima persona - FPS"
  },
  {
    domanda: "Quale arma da fuoco è considerata iconica in quasi tutti i titoli della serie?",
    risposte: ["Desert Eagle", "M4", "AK74-u", "Spas12"],
    corretta: "M4"
  },
  {
    domanda: "In Call of Duty, cosa significa “killstreak”?",
    risposte: [
      "Serie di uccisioni consecutive senza morire",
      "Numero di morti totali",
      "Numero di obiettivi completati",
      "Tempo giocato"
    ],
    corretta: "Serie di uccisioni consecutive senza morire"
  },
  {
    domanda: "Chi è lo scienziato nerd che vive accanto a Penny nel condominio di Pasadena?",
    risposte: ["Leonard Hofstadter", "Howard Wolowitz", "Sheldon Cooper", "Raj Koothrappali"],
    corretta: "Sheldon Cooper"
  },
  {
    domanda: "Come si chiama il coinquilino di Sheldon Cooper?",
    risposte: ["Raj Koothrappali", "Howard Wolowitz", "Leonard Hofstadter", "Penny"],
    corretta: "Leonard Hofstadter"
  },
  {
    domanda: "Chi è l’ingegnere aerospaziale che va nello spazio nella serie “The Big Bang Theory”?",
    risposte: ["Raj Koothrappali", "Leonard Hofstadter", "Sheldon Cooper", "Howard Wolowitz"],
    corretta: "Howard Wolowitz"
  },
  {
    domanda: "Quale personaggio è vegetariano e ha difficoltà a parlare con le donne in “The Big Bang Theory”?",
    risposte: ["Leonard Hofstadter", "Raj Koothrappali", "Sheldon Cooper", "Howard Wolowitz"],
    corretta: "Raj Koothrappali"
  },
  {
    domanda: "Chi è ossessionato dalle regole, dalle routine e dagli orari precisi in “The Big Bang Theory”?",
    risposte: ["Leonard Hofstadter", "Sheldon Cooper", "Raj Koothrappali", "Howard Wolowitz"],
    corretta: "Sheldon Cooper"
  },
  {
  domanda: "Qual è la capitale della Nuova Zelanda?",
  risposte: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
  corretta: "Wellington"
},
{
  domanda: "Chi ha scritto 'Il Principe'?",
  risposte: ["Niccolò Machiavelli", "Dante Alighieri", "Giovanni Boccaccio", "Leonardo da Vinci"],
  corretta: "Niccolò Machiavelli"
},
{
  domanda: "In quale anno è caduto il Muro di Berlino?",
  risposte: ["1985", "1991", "1989", "1993"],
  corretta: "1989"
},
{
  domanda: "Qual è il pianeta più grande del sistema solare?",
  risposte: ["Saturno", "Nettuno", "Urano", "Giove"],
  corretta: "Giove"
},
{
  domanda: "Chi è considerato il padre della psicoanalisi?",
  risposte: ["Carl Jung", "Sigmund Freud", "Alfred Adler", "Ivan Pavlov"],
  corretta: "Sigmund Freud"
},
{
  domanda: "Qual è la lingua ufficiale del Brasile?",
  risposte: ["Francese", "Spagnolo", "Inglese", "Portoghese"],
  corretta: "Portoghese"
},
{
  domanda: "In quale città si trova il famoso museo del Louvre?",
  risposte: ["Londra", "Roma", "Parigi", "Madrid"],
  corretta: "Parigi"
},
{
  domanda: "Quale gas è più abbondante nell'atmosfera terrestre?",
  risposte: ["Ossigeno", "Azoto", "Anidride carbonica", "Idrogeno"],
  corretta: "Azoto"
},
{
  domanda: "Chi ha dipinto la 'Gioconda'?",
  risposte: ["Michelangelo", "Raffaello", "Leonardo da Vinci", "Donatello"],
  corretta: "Leonardo da Vinci"
},
{
  domanda: "Qual è la valuta ufficiale del Giappone?",
  risposte: ["Won", "Yuan", "Yen", "Dollar"],
  corretta: "Yen"
},
{
  domanda: "Qual è il fiume più lungo del mondo?",
  risposte: ["Nilo", "Amazzoni", "Yangtze", "Mississippi"],
  corretta: "Amazzoni"
},
{
  domanda: "Quale elemento chimico ha simbolo 'Fe'?",
  risposte: ["Ferro", "Fluoro", "Fosforo", "Francio"],
  corretta: "Ferro"
},
{
  domanda: "Chi ha scritto 'Romeo e Giulietta'?",
  risposte: ["William Shakespeare", "Geoffrey Chaucer", "John Milton", "Charles Dickens"],
  corretta: "William Shakespeare"
},
{
  domanda: "Quale nazione ha ospitato le Olimpiadi del 2016?",
  risposte: ["Russia", "Cina", "Regno Unito", "Brasile"],
  corretta: "Brasile"
},
{
  domanda: "Qual è la montagna più alta del mondo?",
  risposte: ["K2", "Everest", "Kangchenjunga", "Lhotse"],
  corretta: "Everest"
},
{
  domanda: "Quale città è conosciuta come la 'Città delle Luci'?",
  risposte: ["New York", "Parigi", "Londra", "Tokyo"],
  corretta: "Parigi"
},
{
  domanda: "In che anno Cristoforo Colombo scoprì l’America?",
  risposte: ["1492", "1500", "1482", "1472"],
  corretta: "1492"
},
{
  domanda: "Chi ha scritto 'La Divina Commedia'?",
  risposte: ["Dante Alighieri", "Petrarca", "Boccaccio", "Manzoni"],
  corretta: "Dante Alighieri"
},
{
  domanda: "Quale fisico è famoso per la teoria della relatività?",
  risposte: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
  corretta: "Albert Einstein"
},
{
  domanda: "Qual è il colore della 'stella rossa' sulla bandiera della Cina?",
  risposte: ["Rosso", "Giallo", "Bianco", "Nero"],
  corretta: "Giallo"
},
{
  domanda: "Quale pianeta è noto come il 'Pianeta Rosso'?",
  risposte: ["Venere", "Marte", "Mercurio", "Giove"],
  corretta: "Marte"
},
{
  domanda: "In quale anno è stata fondata Roma, secondo la leggenda?",
  risposte: ["753 a.C.", "500 a.C.", "1000 a.C.", "44 a.C."],
  corretta: "753 a.C."
},
{
  domanda: "Qual è la più grande isola del mondo?",
  risposte: ["Groenlandia", "Madagascar", "Borneo", "Nuova Guinea"],
  corretta: "Groenlandia"
},
{
  domanda: "Chi ha scoperto la penicillina?",
  risposte: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Gregor Mendel"],
  corretta: "Alexander Fleming"
},
{
  domanda: "Quale nazione ha la più grande popolazione al mondo?",
  risposte: ["India", "Stati Uniti", "Cina", "Russia"],
  corretta: "Cina"
},
{
  domanda: "Qual è il nome del più grande oceano della Terra?",
  risposte: ["Oceano Atlantico", "Oceano Indiano", "Oceano Pacifico", "Oceano Artico"],
  corretta: "Oceano Pacifico"
},
{
  domanda: "Quale inventore è famoso per aver sviluppato la lampadina elettrica?",
  risposte: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Guglielmo Marconi"],
  corretta: "Thomas Edison"
},
{
  domanda: "Quale animale è il simbolo nazionale dell’Australia?",
  risposte: ["Koala", "Canguro", "Emu", "Dingo"],
  corretta: "Canguro"
},
{
  domanda: "Chi ha composto la Nona Sinfonia?",
  risposte: ["Mozart", "Beethoven", "Bach", "Chopin"],
  corretta: "Beethoven"
},
{
  domanda: "Qual è il numero atomico dell’ossigeno?",
  risposte: ["6", "8", "12", "16"],
  corretta: "8"
},
{
  domanda: "Qual è il nome del fiume che attraversa Londra?",
  risposte: ["Danubio", "Senna", "Reno", "Tamigi"],
  corretta: "Tamigi"
},
{
  domanda: "Chi è il celebre pittore spagnolo noto per il cubismo?",
  risposte: ["Salvador Dalí", "Pablo Picasso", "Francisco Goya", "Diego Velázquez"],
  corretta: "Pablo Picasso"
},
{
  domanda: "Qual è il continente più piccolo per superficie?",
  risposte: ["Europa", "Oceania", "Antartide", "America"],
  corretta: "Oceania"
},
{
  domanda: "Quale presidente degli Stati Uniti pronunciò il discorso 'I have a dream'?",
  risposte: ["John F. Kennedy", "Theodore Roosevelt", "Abraham Lincoln", "Martin Luther King Jr."],
  corretta: "Martin Luther King Jr."
},
{
  domanda: "Qual è il nome della materia che studia gli insetti?",
  risposte: ["Ornitologia", "Entomologia", "Biologia marina", "Botanica"],
  corretta: "Entomologia"
},
{
  domanda: "Quale scienziato ha formulato le tre leggi del moto?",
  risposte: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Nikola Tesla"],
  corretta: "Isaac Newton"
},
{
  domanda: "In quale anno è stata firmata la Dichiarazione di Indipendenza degli Stati Uniti?",
  risposte: ["1776", "1789", "1492", "1804"],
  corretta: "1776"
},
{
  domanda: "Quale elemento ha il simbolo chimico 'Au'?",
  risposte: ["Argento", "Alluminio", "Oro", "Arsenico"],
  corretta: "Oro"
},
{
  domanda: "Chi ha scritto il romanzo '1984'?",
  risposte: ["Jules Verne", "Aldous Huxley", "Ray Bradbury", "George Orwell"],
  corretta: "George Orwell"
},
{
  domanda: "Quale sport è giocato durante il Super Bowl?",
  risposte: ["Baseball", "Football americano", "Basket", "Hockey su ghiaccio"],
  corretta: "Football americano"
},
{
  domanda: "Quale metallo è liquido a temperatura ambiente?",
  risposte: ["Alluminio", "Piombo", "Mercurio", "Rame"],
  corretta: "Mercurio"
},
{
  domanda: "Qual è il nome del famoso muro costruito dai Romani in Gran Bretagna?",
  risposte: ["Muraglia cinese", "Vallo di Adriano", "Grande Muraglia", "Muro di Berlino"],
  corretta: "Vallo di Adriano"
},
{
  domanda: "Qual è il simbolo chimico del sodio?",
  risposte: ["So", "Sd", "Na", "Si"],
  corretta: "Na"
},
{
  domanda: "Quale autore ha scritto 'Harry Potter'?",
  risposte: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
  corretta: "J.K. Rowling"
},
{
  domanda: "Quale metropoli è chiamata 'La Grande Mela'?",
  risposte: ["Los Angeles", "Chicago", "New York", "Miami"],
  corretta: "New York"
},
{
  domanda: "Qual è il nome del satellite naturale della Terra?",
  risposte: ["Luna", "Phobos", "Deimos", "Europa"],
  corretta: "Luna"
},
{
  domanda: "Chi è il padre della teoria dell’evoluzione?",
  risposte: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Carl Linnaeus"],
  corretta: "Charles Darwin"
},
{
  domanda: "Qual è la capitale del Canada?",
  risposte: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
  corretta: "Ottawa"
},
{
  domanda: "Qual è il simbolo chimico del carbonio?",
  risposte: ["C", "Ca", "Co", "Cr"],
  corretta: "C"
},
{
  domanda: "Quale fiume attraversa la città di Roma?",
  risposte: ["Tevere", "Arno", "Po", "Adige"],
  corretta: "Tevere"
}
];
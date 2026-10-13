const questionSets = {
  en: [
    ["age", "Age", "How old are the children?", "Choose the age of the youngest player.", [["2-3","🐣","2–3 years","Little explorers"],["4-5","🧸","4–5 years","Curious creators"],["6-8","🦊","6–8 years","Big imaginations"],["9-12","🚀","9–12 years","Confident players"]]],
    ["players", "Children", "How many children are playing?", "We’ll choose games that work for your group.", [["1","🌟","One child","Solo play"],["2","🙌","Two children","A playful pair"],["3-4","🎈","3–4 children","A small group"],["5+","🎉","5+ children","Party or class"]]],
    ["place", "Setting", "Where will they play?", "Pick the space available right now.", [["indoors","🏠","Indoors","Home or classroom"],["outdoors","🌿","Outdoors","Garden, park or beach"],["either","🌤️","Either one","We’re flexible"]]],
    ["duration", "Time", "How much time do you have?", "We’ll prioritize games that fit your play window.", [["5","⚡","Up to 5 min","A quick reset"],["15","⏱️","Up to 15 min","A play break"],["30","🕰️","Up to 30 min","Time to create"],["60","🌈","Up to 1 hour","A bigger adventure"]]],
    ["material", "Materials", "What can they use?", "Games with no materials are always a good fit.", [["none","🙌","Nothing","Just imagination"],["paper","🖍️","Paper & pencils","Simple craft supplies"],["household","📦","Household items","Cups, cushions and more"],["ball","⚽","A ball","Any safe ball"]]],
    ["activity", "Energy", "What activity level feels right?", "Match the game to their energy.", [["calm","☁️","Calm","Quiet and focused"],["medium","🪁","Playful","Some movement"],["active","⚡","Very active","Lots of energy"]]],
    ["skill", "Goal", "What would you like to encourage?", "We’ll prioritize games that gently practice this skill.", [["speech","💬","Speech & communication","Words, stories and listening"],["problem","🧩","Problem solving","Logic, memory and discovery"],["movement","🏃","Movement & motor skills","Balance, coordination and strength"],["creativity","🎨","Creativity","Imagination and self-expression"],["social","🤝","Cooperation","Sharing, turn-taking and teamwork"],["calm","🌿","Focus & calm","Attention and emotional regulation"]]]
  ],
  sr: [
    ["age", "Uzrast", "Koliko godina imaju deca?", "Izaberite uzrast najmlađeg igrača.", [["2-3","🐣","2–3 godine","Mali istraživači"],["4-5","🧸","4–5 godina","Radoznali kreativci"],["6-8","🦊","6–8 godina","Velika mašta"],["9-12","🚀","9–12 godina","Samostalni igrači"]]],
    ["players", "Deca", "Koliko dece se igra?", "Izabraćemo igre koje odgovaraju vašoj grupi.", [["1","🌟","Jedno dete","Samostalna igra"],["2","🙌","Dvoje dece","Razigrani par"],["3-4","🎈","3–4 deteta","Mala grupa"],["5+","🎉","5+ dece","Zabava ili odeljenje"]]],
    ["place", "Mesto", "Gde će se igrati?", "Izaberite prostor koji vam je dostupan.", [["indoors","🏠","Unutra","Kuća ili učionica"],["outdoors","🌿","Napolju","Dvorište, park ili plaža"],["either","🌤️","Svejedno","Obe opcije odgovaraju"]]],
    ["duration", "Vreme", "Koliko vremena imate?", "Prednost imaju igre koje se uklapaju u vaše vreme.", [["5","⚡","Do 5 min","Brza razbibriga"],["15","⏱️","Do 15 min","Kratka igra"],["30","🕰️","Do 30 min","Vreme za kreativnost"],["60","🌈","Do 1 sata","Veća avantura"]]],
    ["material", "Materijali", "Šta mogu da koriste?", "Igre bez materijala su uvek dobar izbor.", [["none","🙌","Ništa","Samo mašta"],["paper","🖍️","Papir i olovke","Jednostavan pribor"],["household","📦","Kućni predmeti","Čaše, jastuci i drugo"],["ball","⚽","Lopta","Bilo koja bezbedna lopta"]]],
    ["activity", "Energija", "Koji nivo aktivnosti odgovara?", "Uskladite igru sa njihovom energijom.", [["calm","☁️","Mirno","Tiho i fokusirano"],["medium","🪁","Razigrano","Malo kretanja"],["active","⚡","Veoma aktivno","Mnogo energije"]]],
    ["skill", "Cilj", "Šta želite da podstaknete?", "Prednost ćemo dati igrama koje nežno vežbaju ovu veštinu.", [["speech","💬","Govor i komunikacija","Reči, priče i slušanje"],["problem","🧩","Rešavanje problema","Logika, pamćenje i otkrivanje"],["movement","🏃","Kretanje i motorika","Ravnoteža, koordinacija i snaga"],["creativity","🎨","Kreativnost","Mašta i izražavanje"],["social","🤝","Saradnja","Deljenje, čekanje reda i timski rad"],["calm","🌿","Fokus i smirenost","Pažnja i regulacija emocija"]]]
  ]
};

const copy = {
  en: {
    pageTitle:"Play Picks — 100 unique games", description:"Find screen-free children's games for every moment.", home:"Play Picks home", language:"Language",
    nav:["For you","Explore","Popular","Saved"], profile:"Profile", reset:"Start over", eyebrow:"Less scrolling. More playing.", hero:"Find their next <span>favorite game.</span>",
    heroCopy:"Answer seven quick questions and discover at least 50 unique, screen-free games.", progress:"Setup progress", resultsEye:"Your play picks",
    ready:"50 ideas, picked for you", popular:"Most loved by families", saved:"Your saved games", edit:"Edit filters", step:(a,b)=>`Step ${a} of ${b}`,
    next:"Continue", show:"Show 50 games", back:"Back", matches:"The 50 closest matches from 100 unique games, ranked for this moment.",
    popularSummary:"Games ranked by demo community likes and play count.", savedSummary:n=>n ? `${n} game${n===1?"":"s"} saved in your local profile.` : "Like a game to save it here.",
    emptySaved:"No saved games yet", emptySavedCopy:"Tap the heart on a game you love and it will appear here.", change:"Explore games", footer:"Made for little moments and big imaginations.",
    footerMeta:"100 unique games · saved on this device", profileTitle:"Your profile", profileCopy:"Enter a name to save games and keep favorites on this device.", name:"Name",
    saveProfile:"Save profile", deleteProfile:"Delete profile", likes:"likes", played:"plays", play:"We played this!", loginLike:"Create a local profile to save games.",
    place:{either:"Inside or outside",indoors:"Indoors",outdoors:"Outdoors"}, ages:(a,b)=>`Ages ${a}–${b}`, min:"min", image:t=>`Children playing ${t}`,
    noProfile:"Profile"
    ,parentBadge:"Made with parents in mind", findGame:"Find a game", familyLove:"See what families love",
    trust:["✓ No sign-up needed","✓ Screen-free ideas","✓ Ages 2–12"], visualTitle:"Ready for play?", visualCopy:"One minute to the right idea",
    parentEyebrow:"A little help for grown-ups", parentTitle:"Play that fits real family life.",
    parentIntro:"No complicated preparation. Choose what you have, how much time is available and how energetic everyone feels.",
    dailyLabel:"TODAY’S EASY WIN", dailyTitle:"Five-minute connection", dailyCopy:"Short play still counts. A few focused minutes can turn an ordinary pause into a warm family memory.",
    dailyButton:"Find a quick game →", benefitOneTitle:"Supports development", benefitOneCopy:"Discover ideas for movement, creativity, cooperation and calm focus.",
    benefitTwoTitle:"Less decision fatigue", benefitTwoCopy:"Seven simple choices turn “what should we do?” into a useful shortlist.",
    safetyTitle:"A note for safe, happy play", safetyCopy:"Stay nearby, adapt every activity to your child and space, and use age-appropriate, safe materials.", bottomStart:"Let’s find a game",
    top:"Top", resultCount:n=>`${n} games ready to explore`, liked:"Saved to your profile ♥", unliked:"Removed from saved games", playedMessage:"Nice! We added one play to this game.",
    exploreEyebrow:"Browse by moment", exploreTitle:"There’s a game for every kind of day.", exploreCopy:"Choose a season, setting or developmental goal and start exploring.",
    momentTitle:"Ideas for the moment", momentCopy:"Pick the kind of day you are having.", skillTitle:"What would you like to encourage?", skillCopy:"Explore games through the skill they help children practice.",
    details:"Details & examples", categorySummary:n=>`${n} ideas selected for this collection.`, guide:"Game guide", prepareTitle:"Before you start", stepsTitle:"How to play",
    exampleTitle:"Try this example", parentTipTitle:"Parent tip", closeDetails:"Back to games", dailyButton:"Open today’s game →"
  },
  sr: {
    pageTitle:"Play Picks — 100 jedinstvenih igara", description:"Pronađite dečje igre bez ekrana za svaki trenutak.", home:"Početna Play Picks", language:"Jezik",
    nav:["Za vas","Istraži","Popularno","Sačuvano"], profile:"Profil", reset:"Počni ponovo", eyebrow:"Manje listanja. Više igranja.", hero:"Pronađite njihovu novu <span>omiljenu igru.</span>",
    heroCopy:"Odgovorite na sedam kratkih pitanja i otkrijte najmanje 50 jedinstvenih igara bez ekrana.", progress:"Napredak izbora", resultsEye:"Vaš izbor igara",
    ready:"50 ideja izabranih za vas", popular:"Najomiljenije među porodicama", saved:"Vaše sačuvane igre", edit:"Promeni filtere", step:(a,b)=>`Korak ${a} od ${b}`,
    next:"Nastavi", show:"Prikaži 50 igara", back:"Nazad", matches:"50 najboljih od 100 jedinstvenih igara, rangiranih prema vašem izboru.",
    popularSummary:"Igre su rangirane prema demo lajkovima i broju korišćenja.", savedSummary:n=>n ? `${n} ${n===1?"igra je sačuvana":n<5?"igre su sačuvane":"igara je sačuvano"} u lokalnom profilu.` : "Lajkujte igru da je sačuvate ovde.",
    emptySaved:"Još nema sačuvanih igara", emptySavedCopy:"Dodirnite srce na igri koja vam se sviđa i pojaviće se ovde.", change:"Istraži igre", footer:"Za male trenutke i veliku maštu.",
    footerMeta:"100 jedinstvenih igara · čuvanje na ovom uređaju", profileTitle:"Vaš profil", profileCopy:"Unesite ime da sačuvate igre i omiljene stavke na ovom uređaju.", name:"Ime",
    saveProfile:"Sačuvaj profil", deleteProfile:"Obriši profil", likes:"lajkova", played:"igranja", play:"Igrali smo ovo!", loginLike:"Napravite lokalni profil da sačuvate igre.",
    place:{either:"Unutra ili napolju",indoors:"Unutra",outdoors:"Napolju"}, ages:(a,b)=>`Uzrast ${a}–${b}`, min:"min", image:t=>`Deca igraju igru ${t}`,
    noProfile:"Profil"
    ,parentBadge:"Napravljeno imajući roditelje na umu", findGame:"Pronađi igru", familyLove:"Pogledaj šta porodice vole",
    trust:["✓ Bez obavezne prijave","✓ Ideje bez ekrana","✓ Uzrast 2–12"], visualTitle:"Spremni za igru?", visualCopy:"Jedan minut do prave ideje",
    parentEyebrow:"Mala pomoć za roditelje", parentTitle:"Igra koja se uklapa u stvarni porodični život.",
    parentIntro:"Bez komplikovane pripreme. Izaberite šta imate, koliko vremena je dostupno i koliko energije svi imaju.",
    dailyLabel:"DANAŠNJA LAKA POBEDA", dailyTitle:"Pet minuta povezivanja", dailyCopy:"I kratka igra se računa. Nekoliko posvećenih minuta može običnu pauzu pretvoriti u lepu porodičnu uspomenu.",
    dailyButton:"Pronađi brzu igru →", benefitOneTitle:"Podstiče razvoj", benefitOneCopy:"Otkrijte ideje za kretanje, kreativnost, saradnju i miran fokus.",
    benefitTwoTitle:"Manje umora od odlučivanja", benefitTwoCopy:"Sedam lakih izbora pretvara „šta ćemo sada?“ u koristan izbor igara.",
    safetyTitle:"Napomena za bezbednu i veselu igru", safetyCopy:"Budite u blizini, prilagodite svaku aktivnost detetu i prostoru i koristite bezbedne materijale primerene uzrastu.", bottomStart:"Pronađimo igru",
    top:"Vrh", resultCount:n=>`${n} igara čeka na istraživanje`, liked:"Sačuvano u vašem profilu ♥", unliked:"Uklonjeno iz sačuvanih igara", playedMessage:"Odlično! Dodato je jedno korišćenje ove igre.",
    exploreEyebrow:"Istražite po trenutku", exploreTitle:"Postoji igra za svaku vrstu dana.", exploreCopy:"Izaberite godišnje doba, priliku ili razvojni cilj i počnite da istražujete.",
    momentTitle:"Ideje za ovaj trenutak", momentCopy:"Izaberite kakav dan imate.", skillTitle:"Šta želite da podstaknete?", skillCopy:"Istražite igre prema veštini koju pomažu deci da vežbaju.",
    details:"Detalji i primeri", categorySummary:n=>`${n} ideja je izabrano za ovu kolekciju.`, guide:"Vodič za igru", prepareTitle:"Pre nego što počnete", stepsTitle:"Kako se igra",
    exampleTitle:"Probajte ovaj primer", parentTipTitle:"Savet za roditelje", closeDetails:"Nazad na igre", dailyButton:"Otvori današnju igru →"
  }
};

const gameIdeas = [
["Rainbow Hunt","Lov na dugu","Find one safe object in every rainbow color and arrange them in order.","Pronađite po jedan bezbedan predmet u svakoj boji duge i poređajte ih.","search"],
["Animal Parade","Parada životinja","Cross the room walking and sounding like a different animal each round.","Pređite prostor hodajući i oglašavajući se kao druga životinja u svakom krugu.","pretend"],
["Story Circle","Krug priča","Build a story one sentence at a time and add a surprise on every turn.","Gradite priču rečenicu po rečenicu i dodajte iznenađenje u svakom krugu.","story"],
["Color Dash","Trka boja","Call a color and race to safely touch something that matches.","Izgovorite boju i požurite da bezbedno dodirnete nešto takvo.","run"],
["Mystery Drawing","Tajanstveni crtež","Draw a secret object while everyone else guesses what is appearing.","Nacrtajte tajni predmet dok ostali pogađaju šta nastaje.","draw"],
["Cushion Islands","Ostrva od jastuka","Cross a path of cushions without touching the imaginary water.","Pređite stazu od jastuka bez dodirivanja zamišljene vode.","balance"],
["Balloon Breaths","Balonski dah","Use slow breaths to mime inflating a giant balloon, then gently pop.","Sporim dahom zamišljajte da naduvavate veliki balon, pa ga nežno probušite.","pretend"],
["Target Toss","Pogodi metu","Toss a soft ball toward safe targets worth different points.","Bacajte meku loptu ka bezbednim metama koje nose različite poene.","ball"],
["Shadow Zoo","Zoološki vrt senki","Make animal shadows with hands or bodies for others to identify.","Rukama ili telom pravite senke životinja koje ostali pogađaju.","pretend"],
["Robot Guide","Vodič za robota","Guide a robot player using precise step-by-step instructions.","Vodite igrača robota preciznim uputstvima korak po korak.","pretend"],
["Paper Tower","Kula od papira","Fold and balance paper to build the tallest freestanding tower.","Savijajte i balansirajte papir da napravite najvišu samostojeću kulu.","build"],
["Nature Faces","Lica iz prirode","Arrange leaves, stones and twigs into an expressive face.","Od lišća, kamenčića i grančica složite lice sa izrazom.","nature"],
["Freeze Dance","Ples i zaleđivanje","Dance freely and freeze in a funny pose whenever the leader calls stop.","Plešite slobodno i ukočite se u smešnoj pozi kada vođa kaže stop.","dance"],
["Cup Castle","Dvorac od čaša","Stack reusable cups into a castle with towers and a gate.","Složite čaše u dvorac sa kulama i kapijom.","build"],
["Secret Sound","Tajni zvuk","Make a hidden sound and let players identify its source.","Napravite skriveni zvuk i neka igrači otkriju odakle dolazi.","story"],
["Adventure Path","Staza avanture","Create a route with turns, jumps and balance challenges.","Napravite stazu sa okretima, skokovima i izazovima ravnoteže.","balance"],
["Ball Balance","Balansiranje lopte","Carry a ball between two points using a new body part each round.","Prenesite loptu između dve tačke drugim delom tela u svakom krugu.","ball"],
["Funny Portrait","Smešni portret","Draw a portrait without lifting the pencil from the paper.","Nacrtajte portret bez podizanja olovke sa papira.","draw"],
["Cloud Detective","Detektiv za oblake","Spot pictures in clouds and connect them in a short adventure.","Pronađite slike u oblacima i povežite ih u kratku avanturu.","nature"],
["Movement Memory","Pamćenje pokreta","Add one movement to a growing sequence and repeat it together.","Dodajte pokret nizu koji raste i ponovite ga zajedno.","dance"],
["Paper Air Lab","Laboratorija papirnih aviona","Fold a paper flyer, test it and improve one feature.","Napravite papirni avion, testirajte ga i poboljšajte jednu osobinu.","build"],
["Mini Bowling","Mini kuglanje","Roll a ball to knock down safe household pins.","Kotrljajte loptu da oborite bezbedne kućne čunjeve.","ball"],
["Yes, Let's","Da, hajde","Suggest imaginary actions; everyone says yes and acts them out.","Predlažite zamišljene radnje; svi kažu da i izvode ih.","pretend"],
["Garden Relay","Baštenska štafeta","Complete playful movement tasks between two outdoor markers.","Izvršavajte zabavne zadatke kretanja između dve spoljne oznake.","run"],
["Treasure Map","Mapa blaga","Draw a map with landmarks, hazards and hidden treasure.","Nacrtajte mapu sa znamenitostima, preprekama i skrivenim blagom.","draw"],
["Sock Basketball","Košarka čarapama","Toss rolled socks into a basket from marked distances.","Bacajte urolane čarape u korpu sa označenih udaljenosti.","ball"],
["Mirror Moves","Pokreti u ogledalu","Copy a partner’s slow movements as accurately as possible.","Kopirajte spore pokrete partnera što preciznije.","dance"],
["Texture Safari","Safari tekstura","Find something smooth, rough, soft and bumpy.","Pronađite nešto glatko, hrapavo, meko i kvrgavo.","search"],
["Cardboard City","Grad od kartona","Turn boxes into roads, homes and landmarks for a tiny city.","Pretvorite kutije u puteve, kuće i znamenitosti malog grada.","build"],
["Whisper Chain","Lanac šapata","Pass a funny message around and compare the final version.","Prenesite smešnu poruku šapatom i uporedite završnu verziju.","story"],
["Leaf Race","Trka listova","Blow leaves across a finish line without touching them.","Duvanjem pomerajte lišće do cilja bez dodirivanja.","nature"],
["Statue Museum","Muzej statua","Pose as themed statues while a visitor tours the museum.","Pozirajte kao tematske statue dok posetilac obilazi muzej.","pretend"],
["Shape Explorer","Istraživač oblika","Find circles, triangles and squares in the space around you.","Pronađite krugove, trouglove i kvadrate u prostoru oko sebe.","search"],
["Floor Is Lava","Pod je lava","Travel across safe stepping spots without touching the floor.","Pređite preko bezbednih tačaka bez dodirivanja poda.","balance"],
["Name That Mime","Pogodi pantomimu","Act out everyday actions without words for others to guess.","Bez reči odglumite svakodnevne radnje koje ostali pogađaju.","pretend"],
["Paper Maze","Lavirint na papiru","Draw a maze and swap with a friend to solve it.","Nacrtajte lavirint i zamenite ga sa prijateljem za rešavanje.","draw"],
["Backyard Olympics","Dvorišna olimpijada","Create three simple events for speed, aim and balance.","Napravite tri jednostavne discipline brzine, ciljanja i ravnoteže.","run"],
["Rolling Goal","Kotrljanje u gol","Build two goals and roll a ball past a defender.","Napravite dva gola i otkotrljajte loptu pored odbrane.","ball"],
["Sound Orchestra","Orkestar zvukova","Assign each player a sound and conduct a group performance.","Dodelite svakom igraču zvuk i dirigujte grupnim nastupom.","story"],
["Nature Crown","Kruna iz prirode","Collect fallen nature pieces and arrange a royal crown.","Sakupite otpale delove prirode i složite kraljevsku krunu.","nature"],
["Tape-Line Balance","Balans po liniji","Follow a safe floor line heel-to-toe with playful poses.","Pratite bezbednu liniju na podu korak po korak uz zabavne poze.","balance"],
["Monster Steps","Koraci čudovišta","Invent giant, tiny and wobbly monster walks.","Osmislite džinovske, sićušne i klimave korake čudovišta.","dance"],
["Memory Tray","Poslužavnik pamćenja","Study several objects, hide one and identify what changed.","Pogledajte nekoliko predmeta, sakrijte jedan i pogodite šta se promenilo.","search"],
["Bridge Builders","Graditelji mosta","Build a bridge that can hold a small toy.","Napravite most koji može da izdrži malu igračku.","build"],
["Compliment Ball","Lopta lepih reči","Pass a ball and share one kind thought with each catch.","Dodajte loptu i uz svako hvatanje podelite lepu misao.","ball"],
["Weather Reporter","Vremenski reporter","Present today’s weather with dramatic gestures and predictions.","Predstavite današnje vreme dramatičnim pokretima i prognozom.","pretend"],
["Dot-to-Doodle","Od tačke do crteža","Place random dots, connect them and turn the shape into art.","Postavite nasumične tačke, spojite ih i pretvorite oblik u crtež.","draw"],
["Quiet Detective","Tihi detektiv","Notice five tiny details others may have missed.","Primetite pet sitnih detalja koje su drugi možda propustili.","search"],
["Obstacle Mission","Misija sa preprekama","Crawl, step and weave through a safe homemade course.","Puzite, koračajte i provlačite se kroz bezbedan kućni poligon.","run"],
["Story Dice Without Dice","Priča bez kockica","Point to three nearby objects and make them story heroes.","Izaberite tri predmeta u blizini i učinite ih junacima priče.","story"],
["Pebble Patterns","Šare od kamenčića","Arrange stones in repeating patterns, spirals or pictures.","Složite kamenčiće u ponavljajuće šare, spirale ili slike.","nature"],
["Ball Tunnel","Tunel za loptu","Build a human tunnel and gently roll a ball through it.","Napravite tunel od ljudi i nežno provucite loptu kroz njega.","ball"],
["Copycat Clap","Kopiraj pljesak","Create clap rhythms that others echo and extend.","Napravite ritam pljeskanja koji ostali ponavljaju i produžavaju.","dance"],
["Paper Costume","Kostim od papira","Design wearable paper accessories for an imaginary character.","Napravite papirne dodatke za kostim zamišljenog junaka.","build"],
["Blindfold-Free Guide","Vodič zatvorenih očiju bez poveza","Close eyes briefly while a trusted partner guides with words.","Nakratko zatvorite oči dok vas partner vodi rečima.","balance"],
["Alphabet Hunt","Lov na slova","Find objects beginning with as many letters as possible.","Pronađite predmete koji počinju na što više različitih slova.","search"],
["Emotion Charades","Pantomima osećanja","Act out an emotion and discuss clues that revealed it.","Odglumite osećanje i razgovarajte o znacima koji su ga otkrili.","pretend"],
["Chalk River","Reka od krede","Draw a winding river path and jump between its banks.","Nacrtajte krivudavu reku i skačite između njenih obala.","run"],
["Pass the Sketch","Prosledi crtež","Each player adds one detail before passing the picture.","Svaki igrač dodaje jedan detalj pre nego što prosledi crtež.","draw"],
["Tiny Garden Design","Dizajn male bašte","Plan a miniature garden using leaves, sticks and stones.","Osmislite malu baštu od lišća, grančica i kamenčića.","nature"],
["Hot and Cold Hunt","Toplo-hladno potraga","Guide a seeker toward a hidden object using hot and cold clues.","Vodite tragača ka skrivenom predmetu uz tragove toplo i hladno.","search"],
["Balloon Keep-Up","Balon ne sme pasti","Keep a light balloon in the air using gentle taps.","Održavajte lagani balon u vazduhu nežnim udarcima.","ball"],
["Living Room Camp","Kamp u dnevnoj sobi","Build a cozy den and invent a campfire story.","Napravite udobnu kućicu i osmislite priču uz zamišljenu vatru.","build"],
["Slow-Motion Race","Usporena trka","Race to the finish while moving as slowly as possible.","Trkajte se do cilja krećući se što sporije.","balance"],
["Rhythm Leader","Vođa ritma","Lead a repeating body-percussion pattern for the group.","Vodite ponavljajući ritam pljeskanjem i tapkanjem po telu.","dance"],
["What Changed","Šta se promenilo","Study a player, turn away and spot one changed detail.","Pogledajte igrača, okrenite se i otkrijte jedan promenjen detalj.","search"],
["Paper Puppet Show","Predstava papirnih lutaka","Create simple paper characters and perform a tiny play.","Napravite papirne junake i izvedite kratku predstavu.","story"],
["Cone-Free Slalom","Slalom bez čunjeva","Use safe objects as markers and weave through the course.","Koristite bezbedne predmete kao oznake i vijugajte kroz stazu.","run"],
["Seed and Tree","Seme i drvo","Grow from a tiny curled seed into a swaying tree.","Izrastite iz malog sklupčanog semena u drvo koje se njiše.","nature"],
["Goalkeeper Challenge","Izazov za golmana","Take turns rolling and safely stopping gentle shots.","Naizmenično kotrljajte i bezbedno zaustavljajte lagane udarce.","ball"],
["One-Line Creature","Biće iz jedne linije","Draw a creature using one continuous looping line.","Nacrtajte biće jednom neprekidnom vijugavom linijom.","draw"],
["Museum Guide","Muzejski vodič","Choose household treasures and give visitors a guided tour.","Izaberite kućna blaga i vodite posetioce kroz izložbu.","pretend"],
["Balance Delivery","Dostava u ravnoteži","Carry a light object on a tray through a simple route.","Prenesite lagan predmet na poslužavniku kroz jednostavnu stazu.","balance"],
["Category Countdown","Odbrojavanje pojmova","Name five things in a category before time runs out.","Nabrojte pet stvari iz kategorije pre isteka vremena.","story"],
["Spider Web Route","Staza paukove mreže","Step over and under safe lines arranged like a web.","Prekoračite i provucite se ispod bezbednih linija poput mreže.","run"],
["Nature Bingo","Bingo iz prirode","Look for a bird, a smooth stone, a leaf and a tiny sound.","Potražite pticu, gladak kamen, list i tihi zvuk.","nature"],
["Bounce and Catch","Odbij i uhvati","Bounce a ball once and add a movement before catching.","Odbijte loptu jednom i dodajte pokret pre hvatanja.","ball"],
["Dance Traffic Lights","Plesni semafor","Move on green, slowly on yellow and freeze on red.","Krećite se na zeleno, sporo na žuto i stanite na crveno.","dance"],
["Box Invention","Izum od kutije","Transform a box into a useful imaginary machine.","Pretvorite kutiju u korisnu zamišljenu mašinu.","build"],
["Scent Explorer","Istraživač mirisa","Safely compare familiar scents and describe their memories.","Bezbedno uporedite poznate mirise i opišite uspomene.","search"],
["Superhero Training","Trening superheroja","Complete kind, strong and clever superhero missions.","Izvršite ljubazne, snažne i pametne superherojske misije.","pretend"],
["Symmetry Art","Simetrična umetnost","Draw half a picture and complete its matching side.","Nacrtajte polovinu slike i dovršite odgovarajuću stranu.","draw"],
["Jumping Numbers","Brojevi u skoku","Place number markers and jump through a called sequence.","Postavite brojeve i skačite kroz izgovoreni niz.","run"],
["Twig Letters","Slova od grančica","Form letters or short words using fallen twigs.","Napravite slova ili kratke reči od opalih grančica.","nature"],
["Corner Goals","Golovi u uglovima","Roll a ball toward different corner goals for points.","Kotrljajte loptu ka golovima u uglovima za poene.","ball"],
["Human Sculpture","Ljudska skulptura","Work together to form a named object with body poses.","Zajedno telima napravite oblik zadatog predmeta.","balance"],
["Sound Map","Mapa zvukova","Sit quietly and draw where each surrounding sound comes from.","Sedite mirno i nacrtajte odakle dolazi svaki zvuk.","draw"],
["Kitchen Band","Kuhinjski bend","Use safe utensils as instruments for a family rhythm.","Koristite bezbedan pribor kao instrumente za porodični ritam.","dance"],
["Indoor Picnic Quest","Potraga za kućni piknik","Gather pretend picnic items through a clue trail.","Sakupite zamišljene stvari za piknik prateći tragove.","search"],
["Build a Creature","Napravi biće","Combine safe objects into a creature and explain its powers.","Spojite bezbedne predmete u biće i objasnite njegove moći.","build"],
["Captain Says","Kapetan kaže","Follow commands only when they begin with the captain’s phrase.","Izvršite komande samo kada počnu kapetanovom rečenicom.","pretend"],
["Hopscotch Remix","Nove školice","Create a hopscotch path with special actions in each square.","Napravite školice sa posebnim radnjama u svakom polju.","run"],
["Leaf Shadow Trace","Crtanje senke lista","Place a leaf in sunlight and trace its changing shadow.","Postavite list na sunce i pratite njegovu promenljivu senku.","nature"],
["Ball Pass Puzzle","Slagalica dodavanja","Pass a ball around the group without repeating a route.","Dodajte loptu kroz grupu bez ponavljanja putanje.","ball"],
["Mood Music Moves","Pokreti uz raspoloženje","Move differently to happy, calm and dramatic rhythms.","Krećite se drugačije uz vesele, mirne i dramatične ritmove.","dance"],
["Tallest Tiny Tower","Najviša mala kula","Build a tall tower from the smallest safe objects available.","Napravite visoku kulu od najmanjih dostupnih bezbednih predmeta.","build"],
["Guess My Rule","Pogodi moje pravilo","Sort objects by a secret rule for others to discover.","Razvrstajte predmete po tajnom pravilu koje ostali otkrivaju.","search"],
["Postcard Adventure","Avantura na razglednici","Draw a place and write one sentence from an imaginary trip.","Nacrtajte mesto i napišite rečenicu sa zamišljenog putovanja.","draw"],
["Stepping-Stone Story","Priča preko kamenja","Add one story sentence on every safe stepping spot.","Dodajte rečenicu priče na svakoj bezbednoj tački staze.","story"],
["Wind Race","Trka na vetru","Race lightweight leaves or paper pieces using only breath.","Trkajte lagano lišće ili papiriće koristeći samo dah.","nature"],
["Circle Keep-Away","Čuvaj krug","Pass a ball around a circle before the middle player reaches it.","Dodajte loptu u krugu pre nego što je igrač u sredini dohvati.","ball"],
["Final Pose Challenge","Izazov završne poze","Cross the space with a dance and finish in a themed pose.","Pređite prostor plesom i završite u zadatoj pozi.","dance"]
];

const scenes = {
  run:["#c8e7fa","#4389b4"], draw:["#ffd6a6","#c77725"], ball:["#b9e9d5","#408c73"], build:["#dcd6ff","#7565ba"],
  search:["#ffe49a","#ae7720"], dance:["#ffc9c2","#bd5d54"], story:["#cce8d5","#4f8d64"], nature:["#d9edb3","#638742"],
  balance:["#d7dbff","#646db5"], pretend:["#f7d2ec","#a85f91"]
};

function sceneSvg(scene, index) {
  const [bg, accent] = scenes[scene];
  const object = {
    run:`<path d="M65 174h300" stroke="${accent}" stroke-width="8" stroke-dasharray="18 14"/><circle cx="175" cy="75" r="19" fill="${accent}"/><path d="M175 94l-18 45 42 28m-24-56 38 7m-56 21-31 32" stroke="${accent}" stroke-width="13" stroke-linecap="round"/>`,
    draw:`<rect x="112" y="55" width="215" height="120" rx="8" fill="#fff" stroke="${accent}" stroke-width="7"/><path d="M145 139l42-42 35 27 44-49 28 64z" fill="${accent}" opacity=".55"/><path d="M330 35l24 22-78 82-31 10 9-31z" fill="${accent}"/>`,
    ball:`<circle cx="285" cy="120" r="38" fill="#fff" stroke="${accent}" stroke-width="8"/><path d="M262 90l25 22 30-10m-30 10-2 37m-23-9 23 9 24-15" stroke="${accent}" stroke-width="5"/><circle cx="140" cy="70" r="18" fill="${accent}"/><path d="M140 90v57m0-35 49 16m-49 19-28 32m28-32 32 31" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>`,
    build:`<rect x="78" y="133" width="78" height="48" rx="5" fill="${accent}"/><rect x="164" y="91" width="84" height="90" rx="5" fill="${accent}" opacity=".8"/><rect x="256" y="50" width="105" height="131" rx="5" fill="${accent}" opacity=".55"/><path d="M69 186h303" stroke="#fff" stroke-width="7"/>`,
    search:`<circle cx="187" cy="92" r="52" fill="#fff" stroke="${accent}" stroke-width="10"/><path d="M225 131l63 55" stroke="${accent}" stroke-width="17" stroke-linecap="round"/><circle cx="176" cy="80" r="9" fill="${accent}"/><path d="M144 111q38 25 70-5" fill="none" stroke="${accent}" stroke-width="7"/>`,
    dance:`<circle cx="220" cy="54" r="21" fill="${accent}"/><path d="M220 78v65m0-43-55-27m55 27 55-30m-55 73-42 40m42-40 45 38" stroke="${accent}" stroke-width="14" stroke-linecap="round"/><path d="M110 55q20-28 40 0m140-5q20-28 40 0" fill="none" stroke="${accent}" stroke-width="7"/>`,
    story:`<path d="M72 56q74-28 145 12v119q-71-35-145-10zm296 0q-74-28-145 12v119q71-35 145-10z" fill="#fff" stroke="${accent}" stroke-width="8"/><path d="M100 93h80m-80 28h91m-91 28h65m95-56h80m-91 28h91m-76 28h76" stroke="${accent}" stroke-width="6"/>`,
    nature:`<path d="M218 183V92m0 35-52-38m52 20 54-45" stroke="${accent}" stroke-width="12" stroke-linecap="round"/><ellipse cx="151" cy="74" rx="47" ry="25" transform="rotate(25 151 74)" fill="${accent}"/><ellipse cx="289" cy="52" rx="52" ry="27" transform="rotate(-25 289 52)" fill="${accent}" opacity=".75"/><path d="M97 186h244" stroke="${accent}" stroke-width="8"/>`,
    balance:`<path d="M64 172h312" stroke="${accent}" stroke-width="9"/><circle cx="218" cy="55" r="20" fill="${accent}"/><path d="M218 77v57m0-34-67 18m67-18 67 18m-67 16-38 46m38-46 45 45" stroke="${accent}" stroke-width="13" stroke-linecap="round"/>`,
    pretend:`<circle cx="220" cy="72" r="30" fill="${accent}"/><path d="M196 68l-22-23m70 23 22-23m-46 57v74m0-48-62 26m62-26 62 26m-62 22-35 32m35-32 35 32" stroke="${accent}" stroke-width="12" stroke-linecap="round"/><circle cx="208" cy="68" r="4" fill="#fff"/><circle cx="232" cy="68" r="4" fill="#fff"/>`
  }[scene];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 220"><rect width="440" height="220" rx="24" fill="${bg}"/><circle cx="${42+(index%4)*108}" cy="30" r="12" fill="#fff" opacity=".55"/>${object}</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const materials = ["none","paper","household","ball"];
const activities = ["medium","active","calm"];
const places = ["either","indoors","outdoors"];
const durations = [5,15,30,60];
const skillByScene = {story:"speech",pretend:"speech",search:"problem",build:"problem",run:"movement",ball:"movement",balance:"movement",dance:"creativity",draw:"creativity",nature:"calm"};
const games = gameIdeas.slice(0,100).map((g,index)=>({
  id:index+1, title:g[0], srTitle:g[1], description:g[2], srDescription:g[3], scene:g[4],
  place:places[index%3], material:materials[index%4], activity:activities[index%3], duration:durations[index%4],
  minAge:index%5===0?4:2, maxAge:index%7===0?8:12, minPlayers:index%6===0?2:1, maxPlayers:index%9===0?4:12,
  skill:index%7===0?"social":(skillByScene[g[4]]||(index%2?"social":"creativity")),
  image:sceneSvg(g[4],index), baseLikes:17+((index*37)%184), basePlays:42+((index*83)%610)
}));

const exploreCategories = {
  en:[
    ["rainy","🌧️","Rainy days","Cozy indoor ideas when going outside is not an option."],
    ["summer","☀️","Summer play","Sunny ideas for warm days, gardens and parks."],
    ["winter","❄️","Cold days","Warm, active and creative play for chilly weather."],
    ["holiday","🎄","Holiday moments","Festive games for family gatherings and special days."],
    ["travel","🚗","On the go","Simple ideas for trips, waiting and small spaces."],
    ["party","🎉","Groups & parties","Games that help a group laugh, move and connect."]
  ],
  sr:[
    ["rainy","🌧️","Kišni dani","Udobne ideje za unutra kada izlazak nije opcija."],
    ["summer","☀️","Letnje igre","Sunčane ideje za tople dane, dvorište i park."],
    ["winter","❄️","Hladniji dani","Tople, aktivne i kreativne igre za hladno vreme."],
    ["holiday","🎄","Praznični trenuci","Vesele igre za porodična okupljanja i posebne dane."],
    ["travel","🚗","U pokretu","Jednostavne ideje za putovanja, čekanje i mali prostor."],
    ["party","🎉","Grupe i proslave","Igre koje pomažu grupi da se smeje, kreće i poveže."]
  ]
};
const exploreSkills = {
  en:[["speech","💬","Speech & communication","Talk, listen and tell stories"],["problem","🧩","Problem solving","Think, remember and experiment"],["movement","🏃","Movement & motor skills","Balance, coordinate and move"],["creativity","🎨","Creativity","Imagine, make and express"],["social","🤝","Cooperation","Share, take turns and connect"],["calm","🌿","Focus & calm","Slow down and pay attention"]],
  sr:[["speech","💬","Govor i komunikacija","Razgovor, slušanje i pričanje"],["problem","🧩","Rešavanje problema","Razmišljanje, pamćenje i isprobavanje"],["movement","🏃","Kretanje i motorika","Ravnoteža, koordinacija i pokret"],["creativity","🎨","Kreativnost","Mašta, stvaranje i izražavanje"],["social","🤝","Saradnja","Deljenje, red i povezivanje"],["calm","🌿","Fokus i smirenost","Usporavanje i pažnja"]]
};

const detailContent = {
  en:{
    prepare:{none:"Clear a small safe area. No special materials are needed.",paper:"Prepare paper and child-safe pencils or crayons.",household:"Choose a few safe, unbreakable household objects.",ball:"Use a soft, age-appropriate ball and clear fragile objects away."},
    steps:{
      run:["Mark a clear start and finish.","Demonstrate the movement slowly first.","Take turns and adapt the distance to each child."],
      draw:["Explain the creative prompt and show one simple example.","Let every child create without correcting their choices.","Invite them to describe or name what they made."],
      ball:["Agree on a safe throwing or rolling zone.","Practice one slow round together.","Add distance, a target or teamwork when everyone is ready."],
      build:["Look at the available pieces and imagine a goal.","Build, test and notice what works.","Change one thing and try the improved version."],
      search:["Give the first clue and define the safe search area.","Let children observe and discuss possible answers.","Compare discoveries and celebrate unusual ideas."],
      dance:["Show the first movement or rhythm.","Let each player add or change one movement.","Finish with everyone performing the sequence together."],
      story:["Choose a character, place or opening sentence.","Take turns adding one small part.","End the story together and recall the funniest moment."],
      nature:["Set clear boundaries and only collect safe fallen objects.","Observe colors, shapes, sounds and textures.","Use the discoveries to create, sort or tell a story."],
      balance:["Make a low, safe route and demonstrate it.","Move slowly with arms free for balance.","Adjust the challenge rather than rushing."],
      pretend:["Choose roles and describe the imaginary situation.","Let children lead what happens next.","Add a gentle surprise that keeps the story moving."]
    },
    example:{run:"Try moving like a tiny mouse, then like a tall giraffe.",draw:"For example: draw a house for a friendly cloud.",ball:"Try earning one point for a close target and three for a far one.",build:"Ask: can your structure hold one small toy for five seconds?",search:"Try finding something round, something soft and something that makes a sound.",dance:"Try three claps, one turn and a frozen superhero pose.",story:"Start with: “A tiny door appeared under the kitchen table…”",nature:"Create a face from two leaves, three stones and one twig.",balance:"Try carrying a light scarf while following the route.",pretend:"Try opening an imaginary café for hungry dragons."},
    parent:"Follow the child’s lead, praise effort rather than results, and stop while the activity is still enjoyable."
  },
  sr:{
    prepare:{none:"Oslobodite mali bezbedan prostor. Posebni materijali nisu potrebni.",paper:"Pripremite papir i bezbedne olovke ili bojice.",household:"Izaberite nekoliko bezbednih i nelomljivih kućnih predmeta.",ball:"Koristite mekanu loptu primerenu uzrastu i sklonite lomljive predmete."},
    steps:{
      run:["Označite jasan početak i cilj.","Prvo polako pokažite pokret.","Igrajte naizmenično i prilagodite udaljenost svakom detetu."],
      draw:["Objasnite kreativni zadatak i pokažite jednostavan primer.","Pustite svako dete da stvara bez ispravljanja.","Pozovite ih da opišu ili imenuju ono što su napravili."],
      ball:["Dogovorite bezbednu zonu za bacanje ili kotrljanje.","Zajedno probajte jedan spor krug.","Dodajte udaljenost, metu ili timski zadatak kada svi budu spremni."],
      build:["Pogledajte dostupne delove i zamislite cilj.","Gradite, testirajte i posmatrajte šta funkcioniše.","Promenite jednu stvar i probajte poboljšanu verziju."],
      search:["Dajte prvi trag i odredite bezbedan prostor za potragu.","Pustite decu da posmatraju i razgovaraju o odgovorima.","Uporedite otkrića i proslavite neobične ideje."],
      dance:["Pokažite prvi pokret ili ritam.","Neka svaki igrač doda ili promeni jedan pokret.","Završite zajedničkim izvođenjem celog niza."],
      story:["Izaberite junaka, mesto ili početnu rečenicu.","Naizmenično dodajte po jedan mali deo.","Zajedno završite priču i setite se najsmešnijeg trenutka."],
      nature:["Postavite jasne granice i skupljajte samo bezbedne otpale predmete.","Posmatrajte boje, oblike, zvukove i teksture.","Iskoristite otkrića za stvaranje, razvrstavanje ili priču."],
      balance:["Napravite nisku i bezbednu stazu i pokažite je.","Krećite se polako, sa slobodnim rukama za ravnotežu.","Prilagodite izazov umesto da požurujete dete."],
      pretend:["Izaberite uloge i opišite zamišljenu situaciju.","Pustite decu da vode ono što se dalje dešava.","Dodajte blago iznenađenje koje pokreće priču."]
    },
    example:{run:"Probajte da se krećete kao mali miš, a zatim kao visoka žirafa.",draw:"Na primer: nacrtajte kuću za prijateljski oblak.",ball:"Probajte jedan poen za blisku metu i tri za udaljenu.",build:"Pitajte: može li građevina da drži malu igračku pet sekundi?",search:"Pronađite nešto okruglo, nešto meko i nešto što proizvodi zvuk.",dance:"Probajte tri pljeska, jedan okret i zaleđenu pozu superheroja.",story:"Počnite sa: „Mala vrata pojavila su se ispod kuhinjskog stola…“",nature:"Napravite lice od dva lista, tri kamenčića i jedne grančice.",balance:"Probajte da nosite laganu maramu dok pratite stazu.",pretend:"Otvorite zamišljeni kafić za gladne zmajeve."},
    parent:"Pratite vođstvo deteta, pohvalite trud umesto rezultata i završite dok je aktivnost još uvek zabavna."
  }
};

const state = {
  language:localStorage.getItem("playPicksLanguage")==="en"?"en":"sr", step:0, answers:{}, view:"recommended", collection:null, selectedGame:null,
  profile:JSON.parse(localStorage.getItem("playPicksProfile")||"null"),
  likes:JSON.parse(localStorage.getItem("playPicksLikes")||"[]"),
  plays:JSON.parse(localStorage.getItem("playPicksPlays")||"{}")
};
const $=selector=>document.querySelector(selector);
const questions=()=>questionSets[state.language];
const t=()=>copy[state.language];
const choice=(key)=>questions().find(q=>q[0]===key)[4].find(c=>c[0]===state.answers[key]);

function translate() {
  const c=t();
  document.documentElement.lang=state.language==="sr"?"sr-Latn":"en"; document.title=c.pageTitle;
  $('meta[name="description"]').content=c.description; $("#homeButton").ariaLabel=c.home; $(".language-switcher").ariaLabel=c.language;
  $("#resetButton").textContent=c.reset; $("#heroEyebrow").textContent=c.eyebrow; $("#heroTitle").innerHTML=c.hero; $("#heroCopy").textContent=c.heroCopy;
  $("#progress").ariaLabel=c.progress; $("#resultsEyebrow").textContent=c.resultsEye; $("#editButton").textContent=c.edit;
  $("#footerMessage").textContent=c.footer; $("#footerMeta").textContent=c.footerMeta; $("#profileLabel").textContent=state.profile?.name||c.noProfile;
  $("#profileAvatar").textContent=state.profile?.name?.[0]||"?"; $("#profileTitle").textContent=c.profileTitle; $("#profileCopy").textContent=c.profileCopy;
  $("#profileNameLabel").textContent=c.name; $("#profileSaveButton").textContent=c.saveProfile; $("#deleteProfileButton").textContent=c.deleteProfile;
  $("#parentBadge").textContent=c.parentBadge; $("#startButton").innerHTML=`${c.findGame} <span>→</span>`; $("#popularButton").textContent=c.familyLove;
  $("#trustOne").textContent=c.trust[0]; $("#trustTwo").textContent=c.trust[1]; $("#trustThree").textContent=c.trust[2];
  $("#visualTitle").textContent=c.visualTitle; $("#visualCopy").textContent=c.visualCopy; $("#parentEyebrow").textContent=c.parentEyebrow;
  $("#parentTitle").textContent=c.parentTitle; $("#parentIntro").textContent=c.parentIntro; $("#dailyLabel").textContent=c.dailyLabel;
  $("#dailyTitle").textContent=c.dailyTitle; $("#dailyCopy").textContent=c.dailyCopy; $("#dailyButton").textContent=c.dailyButton;
  $("#benefitOneTitle").textContent=c.benefitOneTitle; $("#benefitOneCopy").textContent=c.benefitOneCopy;
  $("#benefitTwoTitle").textContent=c.benefitTwoTitle; $("#benefitTwoCopy").textContent=c.benefitTwoCopy;
  $("#safetyTitle").textContent=c.safetyTitle; $("#safetyCopy").textContent=c.safetyCopy; $("#bottomStartButton").innerHTML=`${c.bottomStart} <span>→</span>`;
  $("#exploreEyebrow").textContent=c.exploreEyebrow; $("#exploreTitle").textContent=c.exploreTitle; $("#exploreCopy").textContent=c.exploreCopy;
  $("#momentTitle").textContent=c.momentTitle; $("#momentCopy").textContent=c.momentCopy; $("#skillTitle").textContent=c.skillTitle; $("#skillCopy").textContent=c.skillCopy;
  $$(".nav-button").forEach((b,i)=>b.textContent=c.nav[i]); $$(".language-button").forEach(b=>{const active=b.dataset.language===state.language;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",active)});
  renderDaily();
}
function $$(selector){return document.querySelectorAll(selector)}
function renderProgress(){ $("#progress").innerHTML=questions().map((q,i)=>`<div class="progress-step ${i===state.step?"is-active":""} ${i<state.step?"is-complete":""}" data-number="${i+1}">${q[1]}</div>`).join("") }
function renderQuestion(){
  const q=questions()[state.step]; $("#stepLabel").textContent=t().step(state.step+1,questions().length); $("#questionTitle").textContent=q[2]; $("#questionHint").textContent=q[3];
  $("#questionNumber").textContent=String(state.step+1).padStart(2,"0"); $("#choiceGrid").innerHTML=q[4].map(c=>`<button class="choice ${state.answers[q[0]]===c[0]?"is-selected":""}" data-choice="${c[0]}" type="button"><span class="choice-icon">${c[1]}</span><strong>${c[2]}</strong><small>${c[3]}</small></button>`).join("");
  $$(".choice").forEach(b=>{b.setAttribute("aria-pressed",String(state.answers[q[0]]===b.dataset.choice));b.onclick=()=>{state.answers[q[0]]=b.dataset.choice;renderQuestion()}});
  $("#nextButton").innerHTML=`${state.step===questions().length-1?t().show:t().next} <span>→</span>`; $("#nextButton").disabled=!state.answers[q[0]];
  $("#backButton").textContent=`← ${t().back}`; $("#backButton").classList.toggle("is-visible",state.step>0); renderProgress();
}
function playerCount(v){return v==="3-4"?3:v==="5+"?5:Number(v)}
function score(game){
  if(!state.answers.age)return 0;
  const [amin,amax]=state.answers.age.split("-").map(Number), players=playerCount(state.answers.players); let s=0;
  if(game.minAge<=amin&&game.maxAge>=amax)s+=4; if(game.minPlayers<=players&&game.maxPlayers>=players)s+=3;
  if(state.answers.place==="either"||game.place==="either"||game.place===state.answers.place)s+=3;
  if(game.duration<=Number(state.answers.duration))s+=3; if(game.material==="none"||game.material===state.answers.material)s+=3;
  if(game.activity===state.answers.activity)s+=4; if(game.skill===state.answers.skill)s+=5; return s;
}
function localized(game){return state.language==="sr"?[game.srTitle,game.srDescription]:[game.title,game.description]}
function dailyGame(){const now=new Date();const day=Math.floor(new Date(now.getFullYear(),now.getMonth(),now.getDate()).getTime()/86400000);return games[((day%games.length)+games.length)%games.length]}
function renderDaily(){
  const game=dailyGame(), [title,description]=localized(game);
  $("#dailyTitle").textContent=title; $("#dailyCopy").textContent=description; $("#dailyButton").textContent=t().dailyButton;
  $("#dailyMeta").innerHTML=`<span>${game.duration} ${t().min}</span><span>${t().place[game.place]}</span><span>${t().ages(game.minAge,game.maxAge)}</span>`;
}
function categoryMatches(game,key){
  const rules={
    rainy:g=>g.place!=="outdoors", summer:g=>g.place!=="indoors", winter:g=>g.place!=="outdoors",
    holiday:g=>g.id%2===0, travel:g=>g.duration<=15||g.material==="none", party:g=>g.maxPlayers>=8
  };
  return rules[key]?.(game)??false;
}
function collectionGames(){
  const direct=state.collection?.type==="skill"?games.filter(g=>g.skill===state.collection.key):games.filter(g=>categoryMatches(g,state.collection?.key));
  const remainder=games.filter(g=>!direct.includes(g)).sort((a,b)=>b.baseLikes-a.baseLikes);
  return [...direct,...remainder].slice(0,50);
}
function gameList(){
  if(state.view==="collection")return collectionGames();
  if(state.view==="saved")return games.filter(g=>state.likes.includes(g.id)).sort((a,b)=>b.baseLikes-a.baseLikes);
  if(state.view==="popular")return [...games].sort((a,b)=>(b.baseLikes+(state.likes.includes(b.id)?1:0))*2+b.basePlays+(state.plays[b.id]||0)-((a.baseLikes+(state.likes.includes(a.id)?1:0))*2+a.basePlays+(state.plays[a.id]||0))).slice(0,50);
  return [...games].sort((a,b)=>score(b)-score(a)||(b.baseLikes-a.baseLikes)).slice(0,50);
}
function gameCard(game){
  const [title,description]=localized(game), liked=state.likes.includes(game.id), likes=game.baseLikes+(liked?1:0), plays=game.basePlays+(state.plays[game.id]||0);
  return `<article class="activity" data-detail="${game.id}" tabindex="0"><img class="activity-image" src="${game.image}" alt="${t().image(title)}"><div class="activity-content"><div class="activity-topline"><h3>${title}</h3><button class="like-button ${liked?"is-liked":""}" data-like="${game.id}" aria-label="${t().likes}">♥</button></div><p>${description}</p><div class="activity-meta"><span class="tag">${game.duration} ${t().min}</span><span class="tag">${t().place[game.place]}</span><span class="tag">${t().ages(game.minAge,game.maxAge)}</span></div><div class="game-stats"><span>♥ ${likes} ${t().likes}</span><span>▶ ${plays} ${t().played}</span></div><button class="play-button" data-play="${game.id}">${t().play}</button><button class="details-button" data-open-detail="${game.id}">${t().details}</button></div></article>`;
}
function renderResults(){
  const list=gameList(), c=t(); $("#questionCard").hidden=true; $("#progress").hidden=true; $("#results").hidden=false;
  $("#landing").hidden=true; $("#explorePage").hidden=true;
  $("#resultsTitle").textContent=state.view==="popular"?c.popular:state.view==="saved"?c.saved:state.view==="collection"?state.collection.label:c.ready;
  $("#resultsSummary").textContent=state.view==="popular"?c.popularSummary:state.view==="saved"?c.savedSummary(list.length):state.view==="collection"?c.categorySummary(list.length):c.matches;
  $("#filterChips").innerHTML=state.view==="recommended"&&state.answers.age?questions().map(q=>{const x=choice(q[0]);return `<span class="filter-chip">${x[1]} ${x[2]}</span>`}).join(""):"";
  $("#resultsCount").textContent=c.resultCount(list.length); $("#resultsTopButton").textContent=`↑ ${c.top}`;
  $("#activityGrid").innerHTML=list.map(gameCard).join(""); $("#emptyState").hidden=list.length>0||state.view!=="saved";
  $("#emptyTitle").textContent=c.emptySaved; $("#emptyCopy").textContent=c.emptySavedCopy; $("#changeFiltersButton").textContent=c.change;
  $$("[data-like]").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleLike(Number(b.dataset.like))}); $$("[data-play]").forEach(b=>b.onclick=e=>{e.stopPropagation();recordPlay(Number(b.dataset.play))});
  $$("[data-open-detail]").forEach(b=>b.onclick=e=>{e.stopPropagation();openGameDetail(Number(b.dataset.openDetail))});
  $$("[data-detail]").forEach(card=>{card.onclick=e=>{if(!e.target.closest("button"))openGameDetail(Number(card.dataset.detail))};card.onkeydown=e=>{if(e.key==="Enter")openGameDetail(Number(card.dataset.detail))}});
}
function renderExplore(){
  const c=t(), categories=exploreCategories[state.language], skills=exploreSkills[state.language];
  $("#landing").hidden=true;$("#questionCard").hidden=true;$("#progress").hidden=true;$("#results").hidden=true;$("#explorePage").hidden=false;
  $("#categoryGrid").innerHTML=categories.map(x=>`<button class="category-card" data-category="${x[0]}"><span>${x[1]}</span><strong>${x[2]}</strong><small>${x[3]}</small></button>`).join("");
  $("#skillGrid").innerHTML=skills.map(x=>`<button class="skill-card" data-skill="${x[0]}"><span>${x[1]}</span><span><strong>${x[2]}</strong><small>${x[3]}</small></span></button>`).join("");
  $$("[data-category]").forEach(b=>b.onclick=()=>openCollection("category",b.dataset.category,categories.find(x=>x[0]===b.dataset.category)[2]));
  $$("[data-skill]").forEach(b=>b.onclick=()=>openCollection("skill",b.dataset.skill,skills.find(x=>x[0]===b.dataset.skill)[2]));
  scrollTo({top:0,behavior:"smooth"});
}
function openCollection(type,key,label){state.collection={type,key,label};state.view="collection";renderResults();scrollTo({top:0,behavior:"smooth"})}
function openGameDetail(id){
  const game=games.find(g=>g.id===id);if(!game)return;state.selectedGame=id;
  const [title,description]=localized(game), d=detailContent[state.language], liked=state.likes.includes(id);
  $("#detailImage").src=game.image;$("#detailImage").alt=t().image(title);$("#detailEyebrow").textContent=t().guide;$("#detailTitle").textContent=title;$("#detailDescription").textContent=description;
  $("#detailTags").innerHTML=`<span class="tag">${game.duration} ${t().min}</span><span class="tag">${t().place[game.place]}</span><span class="tag">${t().ages(game.minAge,game.maxAge)}</span>`;
  $("#detailPrepareTitle").textContent=t().prepareTitle;$("#detailPrepare").textContent=d.prepare[game.material];$("#detailStepsTitle").textContent=t().stepsTitle;
  $("#detailSteps").innerHTML=d.steps[game.scene].map(step=>`<li>${step}</li>`).join("");$("#detailExampleTitle").textContent=t().exampleTitle;$("#detailExample").textContent=d.example[game.scene];
  $("#detailParentTitle").textContent=t().parentTipTitle;$("#detailParent").textContent=d.parent;$("#detailPlayButton").textContent=t().play;$("#detailCloseButton").textContent=t().closeDetails;
  $("#detailLikeButton").classList.toggle("is-liked",liked);if(!$("#gameDialog").open)$("#gameDialog").showModal();
}
function setView(view){
  state.view=view; $$(".nav-button").forEach(b=>b.classList.toggle("is-active",b.dataset.view===view));
  if(view==="explore")renderExplore();else if(view==="recommended"&&!state.answers.age){showFilters(0)}else renderResults();
}
function requireProfile(){if(state.profile)return true;$("#profileDialog").showModal();return false}
function showToast(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("is-visible");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("is-visible"),2600)}
function toggleLike(id){if(!requireProfile())return;const liked=state.likes.includes(id);state.likes=liked?state.likes.filter(x=>x!==id):[...state.likes,id];localStorage.setItem("playPicksLikes",JSON.stringify(state.likes));showToast(liked?t().unliked:t().liked);if(!$("#results").hidden)renderResults();if($("#gameDialog").open)openGameDetail(id)}
function recordPlay(id){state.plays[id]=(state.plays[id]||0)+1;localStorage.setItem("playPicksPlays",JSON.stringify(state.plays));showToast(t().playedMessage);if(!$("#results").hidden)renderResults()}
function showFilters(step=state.step){state.step=step;$("#landing").hidden=true;$("#explorePage").hidden=true;$("#questionCard").hidden=false;$("#progress").hidden=false;$("#results").hidden=true;renderQuestion();scrollTo({top:0,behavior:"smooth"})}
function showLanding(){state.step=0;state.answers={};state.view="recommended";$("#landing").hidden=false;$("#explorePage").hidden=true;$("#questionCard").hidden=true;$("#progress").hidden=true;$("#results").hidden=true;$$(".nav-button").forEach(b=>b.classList.toggle("is-active",b.dataset.view==="recommended"));scrollTo({top:0,behavior:"smooth"})}
function reset(){showLanding()}

$("#nextButton").onclick=()=>{if(state.step<questions().length-1){state.step++;renderQuestion()}else{state.view="recommended";renderResults()}};
$("#backButton").onclick=()=>{if(state.step){state.step--;renderQuestion()}else showLanding()}; $("#resetButton").onclick=reset; $("#homeButton").onclick=showLanding; $("#editButton").onclick=()=>showFilters(0);
$("#changeFiltersButton").onclick=()=>setView("recommended"); $$(".nav-button").forEach(b=>b.onclick=()=>setView(b.dataset.view));
$("#resultsTopButton").onclick=()=>scrollTo({top:0,behavior:"smooth"});
$("#startButton").onclick=()=>showFilters(0); $("#bottomStartButton").onclick=()=>showFilters(0); $("#dailyButton").onclick=()=>openGameDetail(dailyGame().id); $("#popularButton").onclick=()=>setView("popular");
$("#gameDialogClose").onclick=()=>$("#gameDialog").close();$("#detailCloseButton").onclick=()=>$("#gameDialog").close();$("#detailLikeButton").onclick=()=>toggleLike(state.selectedGame);$("#detailPlayButton").onclick=()=>recordPlay(state.selectedGame);
$$(".language-button").forEach(b=>b.onclick=()=>{state.language=b.dataset.language;localStorage.setItem("playPicksLanguage",state.language);translate();if($("#gameDialog").open)openGameDetail(state.selectedGame);if(!$("#explorePage").hidden)renderExplore();else if(!$("#results").hidden)renderResults();else if(!$("#questionCard").hidden)renderQuestion()});
$("#profileButton").onclick=()=>{$("#profileName").value=state.profile?.name||"";$("#deleteProfileButton").classList.toggle("is-visible",Boolean(state.profile));$("#profileDialog").showModal()};
$("#profileForm").onsubmit=e=>{if(e.submitter?.value==="cancel")return; e.preventDefault();const name=$("#profileName").value.trim();if(!name)return;state.profile={name};localStorage.setItem("playPicksProfile",JSON.stringify(state.profile));$("#profileDialog").close();translate()};
$("#deleteProfileButton").onclick=()=>{state.profile=null;state.likes=[];localStorage.removeItem("playPicksProfile");localStorage.removeItem("playPicksLikes");$("#profileDialog").close();translate();if(state.view==="saved")renderResults()};

if(games.length!==100||new Set(games.map(g=>g.title)).size!==100)throw new Error("Catalog must contain 100 unique games.");
translate();renderQuestion();showLanding();

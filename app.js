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
    pageTitle:"Play Picks", brand:"Play Picks", description:"Find screen-free children's games for every moment.", home:"Play Picks home", language:"Language",
    nav:["For you","Explore","Popular","Saved"], profile:"Profile", hero:"Find their next <span>favorite game.</span>",
    heroCopy:"Answer a few questions to find a simple game that fits the moment.", progress:"Setup progress", resultsEye:"Your play picks",
    ready:"Ideas picked for you", popular:"A game selection", saved:"Your saved games", edit:"Edit filters", step:(a,b)=>`Step ${a} of ${b}`,
    next:"Continue", show:"Show 50 games", back:"Back", matches:"",
    popularSummary:"A selection of simple games to try together.", savedSummary:n=>n ? `${n} game${n===1?"":"s"} saved in your local profile.` : "Like a game to save it here.",
    emptySaved:"No saved games yet", emptySavedCopy:"Tap the heart on a game you love and it will appear here.", change:"Explore games", footer:"Simple ideas for everyday play.",
    profileTitle:"Your profile", profileCopy:"Enter a name to save games and keep favorites on this device.", name:"Name",
    saveProfile:"Save profile", deleteProfile:"Delete profile", likes:"likes", loginLike:"Create a local profile to save games.",
    place:{either:"Inside or outside",indoors:"Indoors",outdoors:"Outdoors"}, ages:(a,b)=>`Ages ${a}–${b}`, min:"min", image:t=>`Children playing ${t}`,
    noProfile:"Profile",
    findGame:"Find a game", familyLove:"Browse popular games",
    trust:["✓ No sign-up needed","✓ Screen-free ideas","✓ Ages 2–12"], visualTitle:"Ready for play?", visualCopy:"Simple ideas for everyday moments",
    parentEyebrow:"A little help for grown-ups",
    parentIntro:"No complicated preparation. Choose what you have, how much time is available and how energetic everyone feels.",
    dailyLabel:"TODAY’S GAME", dailyTitle:"Five-minute connection", dailyCopy:"Short play still counts. A few focused minutes can turn an ordinary pause into a warm family memory.",
    dailyButton:"Find a quick game →", benefitOneTitle:"Supports development", benefitOneCopy:"Discover ideas for movement, creativity, cooperation and calm focus.",
    benefitTwoTitle:"Less decision fatigue", benefitTwoCopy:"Seven simple choices turn “what should we do?” into a useful shortlist.",
    safetyTitle:"A note for safe, happy play", safetyCopy:"Stay nearby, adapt every activity to your child and space, and use age-appropriate, safe materials.", bottomStart:"Let’s find a game",
    liked:"Saved to your profile ♥", unliked:"Removed from saved games",
    exploreEyebrow:"Browse by moment", exploreTitle:"There’s a game for every kind of day.", exploreCopy:"Choose a season, setting or developmental goal and start exploring.",
    momentTitle:"Ideas for the moment", momentCopy:"Pick the kind of day you are having.", skillTitle:"What would you like to encourage?", skillCopy:"Explore games through the skill they help children practice.",
    details:"How to play", categorySummary:n=>`${n} games in this collection.`, guide:"Game guide", stepsTitle:"How to play", exampleTitle:"Try this example", parentTipTitle:"Parent tip", closeDetails:"Back to games", dailyButton:"Open today’s game →",
    feedbackLabel:"Send a comment", feedbackHint:"Your email app will open with the comment ready to send.", feedbackButton:"Prepare email", feedbackRequired:"Write a comment first.", feedbackSubject:"A comment about Play Picks"
  },
  sr: {
    pageTitle:"Naše igre", brand:"Naše igre", description:"Pronađite dečje igre bez ekrana za svaki trenutak.", home:"Početna stranica Naše igre", language:"Jezik",
    nav:["Za vas","Istraži","Popularno","Sačuvano"], profile:"Profil", hero:"Pronađite njihovu novu <span>omiljenu igru.</span>",
    heroCopy:"Odgovorite na nekoliko pitanja i pronađite jednostavnu igru koja odgovara trenutku.", progress:"Napredak izbora", resultsEye:"Predlozi za igru",
    ready:"Predlozi igara za vas", popular:"Izdvojene igre", saved:"Sačuvane igre", edit:"Promeni filtere", step:(a,b)=>`Korak ${a} od ${b}`,
    next:"Nastavi", show:"Prikaži 50 igara", back:"Nazad", matches:"",
    popularSummary:"Izbor jednostavnih igara koje možete isprobati zajedno.", savedSummary:n=>n ? `${n} ${n===1?"igra je sačuvana":n<5?"igre su sačuvane":"igara je sačuvano"} u profilu.` : "Sačuvajte igre koje vam se dopadaju.",
    emptySaved:"Još nema sačuvanih igara", emptySavedCopy:"Dodirnite srce na igri koja vam se sviđa i pojaviće se ovde.", change:"Istraži igre", footer:"Jednostavne ideje za svakodnevnu igru.",
    profileTitle:"Vaš profil", profileCopy:"Unesite ime da sačuvate igre i omiljene stavke na ovom uređaju.", name:"Ime",
    saveProfile:"Sačuvaj profil", deleteProfile:"Obriši profil", likes:"lajkova", loginLike:"Napravite lokalni profil da sačuvate igre.",
    place:{either:"Unutra ili napolju",indoors:"Unutra",outdoors:"Napolju"}, ages:(a,b)=>`Uzrast ${a}–${b}`, min:"min", image:t=>`Deca igraju igru ${t}`,
    noProfile:"Profil",
    findGame:"Pronađi igru", familyLove:"Popularne igre",
    trust:["✓ Bez obavezne prijave","✓ Ideje bez ekrana","✓ Uzrast 2–12"], visualTitle:"Spremni za igru?", visualCopy:"Jednostavne ideje za svaki dan",
    parentEyebrow:"Mala pomoć za roditelje",
    parentIntro:"Bez komplikovane pripreme. Izaberite šta imate, koliko vremena je dostupno i koliko energije svi imaju.",
    dailyLabel:"DANAŠNJA IGRA", dailyTitle:"Pet minuta povezivanja", dailyCopy:"I kratka igra se računa. Nekoliko posvećenih minuta može običnu pauzu pretvoriti u lepu porodičnu uspomenu.",
    dailyButton:"Pronađi brzu igru →", benefitOneTitle:"Podstiče razvoj", benefitOneCopy:"Otkrijte ideje za kretanje, kreativnost, saradnju i miran fokus.",
    benefitTwoTitle:"Manje umora od odlučivanja", benefitTwoCopy:"Sedam lakih izbora pretvara „šta ćemo sada?“ u koristan izbor igara.",
    safetyTitle:"Napomena za bezbednu i veselu igru", safetyCopy:"Budite u blizini, prilagodite svaku aktivnost detetu i prostoru i koristite bezbedne materijale primerene uzrastu.", bottomStart:"Pronađimo igru",
    liked:"Sačuvano u profilu ♥", unliked:"Uklonjeno iz sačuvanih igara",
    exploreEyebrow:"Istražite po trenutku", exploreTitle:"Postoji igra za svaku vrstu dana.", exploreCopy:"Izaberite godišnje doba, priliku ili razvojni cilj i počnite da istražujete.",
    momentTitle:"Ideje za ovaj trenutak", momentCopy:"Izaberite kakav dan imate.", skillTitle:"Šta želite da podstaknete?", skillCopy:"Istražite igre prema veštini koju pomažu deci da vežbaju.",
    details:"Kako se igra", categorySummary:n=>`${n} igara u ovoj kolekciji.`, guide:"Uputstvo za igru", stepsTitle:"Kako se igra", exampleTitle:"Primer", parentTipTitle:"Savet za roditelje", closeDetails:"Nazad na igre", dailyButton:"Otvori današnju igru →",
    feedbackLabel:"Pošaljite komentar", feedbackHint:"Otvoriće se e-pošta sa pripremljenim komentarom.", feedbackButton:"Pripremi e-poštu", feedbackRequired:"Prvo napišite komentar.", feedbackSubject:"Komentar o aplikaciji Naše igre"
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
["Eyes-Open Guide","Vođenje uz otvorene oči","Follow a partner’s spoken directions along a clear, low-obstacle route with eyes open.","Pratite usmena uputstva partnera kroz slobodnu stazu bez prepreka, otvorenih očiju.","balance"],
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
["Final Pose Challenge","Izazov završne poze","Cross the space with a dance and finish in a themed pose.","Pređite prostor plesom i završite u zadatoj pozi.","dance"],
["Colorful Steps","Šareni koraci","Follow a path of colors and invent a movement for each one.","Pratite stazu boja i osmislite pokret za svaku boju.","run"],
["Treasure Statues","Statue čuvara blaga","Freeze like a treasure guardian whenever the music stops.","Ukočite se kao čuvar blaga kada muzika stane.","pretend"],
["Shape Relay","Štafeta oblika","Carry a soft shape to the matching finish line.","Prenesite mekani oblik do odgovarajućeg cilja.","run"],
["Window Weather","Vreme na prozoru","Describe the view outside and act out the weather you see.","Opišite pogled kroz prozor i odglumite vreme koje vidite.","story"],
["Pillow Mountain","Planina od jastuka","Climb over a safe pillow mountain using careful steps.","Pređite preko bezbedne planine od jastuka pažljivim koracima.","balance"],
["Tiptoe Trail","Staza na prstima","Walk a quiet trail and change direction at each marker.","Hodajte tihom stazom i menjajte smer kod svake oznake.","balance"],
["Animal Traffic","Životinjski saobraćaj","Move like different animals while following stop and go signals.","Krećite se kao različite životinje prateći signale stani i kreni.","pretend"],
["Jump and Name","Skoči i reci","Jump to a safe spot and name something from a chosen category.","Skočite na bezbedno mesto i recite pojam iz zadate kategorije.","run"],
["Mission Cards","Kartice misija","Complete a sequence of playful movement missions in order.","Izvršite niz razigranih pokretnih misija po redu.","run"],
["Crawl Like a Comet","Puzi kao kometa","Travel low and fast, then finish with a bright star pose.","Krećite se nisko i brzo, a zatim završite pozom sjajne zvezde.","run"],
["Five-Step Story","Priča od pet koraka","Tell a story where every sentence includes a new action.","Ispričajte priču u kojoj svaka rečenica ima novu radnju.","story"],
["Question Train","Voz pitanja","Take turns asking a question that moves an imaginary train forward.","Naizmenično postavljajte pitanja koja vode zamišljeni voz napred.","story"],
["Pocket Narrator","Džepni pripovedač","Choose three small objects and give each one a voice.","Izaberite tri mala predmeta i dajte svakom svoj glas.","story"],
["Rhyme Relay","Rimovana štafeta","Build a silly rhyme chain one word at a time.","Gradite smešan lanac rima reč po reč.","story"],
["Sound Story","Priča od zvukova","Tell a story using a different sound for every character.","Ispričajte priču koristeći drugi zvuk za svakog lika.","story"],
["Question Detective","Detektiv pitanja","Ask yes-or-no questions to discover the secret object.","Postavljajte pitanja sa da ili ne da otkrijete tajni predmet.","story"],
["Kindness News","Vesti dobrote","Report one kind thing someone did as if it were headline news.","Izvestite o lepom postupku kao da je glavna vest.","story"],
["Opposite Day Tale","Priča suprotnosti","Create a story where everything happens in an opposite way.","Napravite priču u kojoj se sve dešava suprotno.","story"],
["Soundtrack Story","Priča sa muzikom","Add a body sound whenever the story reaches an exciting moment.","Dodajte zvuk telom kad god priča stigne do uzbudljivog dela.","story"],
["Magic Word Story","Priča čarobne reči","Choose a word that changes the story every time it is spoken.","Izaberite reč koja menja priču svaki put kada se izgovori.","story"],
["Secret Shape Sketch","Crtež tajnog oblika","Hide a shape inside a picture and let others find it.","Sakrijte oblik u crtežu i pustite druge da ga pronađu.","draw"],
["Line to Landscape","Linija postaje pejzaž","Turn one wavy line into a landscape with added details.","Pretvorite jednu talasastu liniju u pejzaž dodavanjem detalja.","draw"],
["Three-Color Creature","Biće od tri boje","Design a creature using only three chosen colors.","Osmislite biće koristeći samo tri izabrane boje.","draw"],
["Round-Robin Doodle","Kružni crtež","Pass a drawing around and add one surprising detail each turn.","Prosleđujte crtež i dodajte po jedan detalj iznenađenja.","draw"],
["Shape Family","Porodica oblika","Give geometric shapes names, feelings and a family story.","Dajte geometrijskim oblicima imena, osećanja i porodičnu priču.","draw"],
["Folded Face","Presavijeno lice","Fold paper, draw one feature, unfold and complete the funny face.","Presavijte papir, nacrtajte detalj, otvorite ga i dovršite lice.","draw"],
["Postcard Puzzle","Slagalica razglednice","Draw a postcard in sections and ask a partner to rebuild it.","Nacrtajte razglednicu u delovima i neka je partner sastavi.","draw"],
["Pattern Portrait","Portret sa šarama","Make a portrait where hair, clothes and background use patterns.","Napravite portret sa šarama u kosi, odeći i pozadini.","draw"],
["Invisible Ink Map","Mapa nevidljivog mastila","Draw a secret route with symbols and explain how to decode it.","Nacrtajte tajnu rutu simbolima i objasnite kako se čita.","draw"],
["Draw the Feeling","Nacrtaj osećanje","Use lines and colors to show a feeling without drawing a face.","Prikažite osećanje linijama i bojama bez crtanja lica.","draw"],
["Button Sorting Lab","Laboratorija dugmića","Sort safe buttons or objects in as many ways as possible.","Razvrstajte bezbedne dugmiće ili predmete na što više načina.","search"],
["What Is Missing?","Šta nedostaje?","Look at a group of objects, hide one and identify the missing item.","Pogledajte grupu predmeta, sakrijte jedan i pronađite šta nedostaje.","search"],
["Clue Collector","Sakupljač tragova","Follow simple clues that lead to a safe hidden surprise.","Pratite jednostavne tragove do bezbednog skrivenog iznenađenja.","search"],
["Sound Source Hunt","Potraga za izvorom zvuka","Close your eyes and point toward a familiar sound.","Zatvorite oči i pokažite ka poznatom izvoru zvuka.","search"],
["Odd One Out","Uljez u grupi","Find the object that does not belong and explain why.","Pronađite predmet koji ne pripada grupi i objasnite zašto.","search"],
["Touch and Tell","Dodirni i opiši","Feel a safe object in a bag and describe it before looking.","Dodirnite bezbedan predmet u torbi i opišite ga pre gledanja.","search"],
["Sequence Spotter","Uoči niz","Study a repeating arrangement and say what should come next.","Pogledajte niz koji se ponavlja i recite šta sledi.","search"],
["Room Scavenger List","Spisak sobne potrage","Find safe items that match a list of colors, shapes or textures.","Pronađite bezbedne predmete prema bojama, oblicima ili teksturama.","search"],
["Secret Path Finder","Pronađi tajnu stazu","Remember a short route and guide someone through it with clues.","Zapamtite kratku rutu i vodite nekoga tragovima.","search"],
["Five Things Fast","Pet stvari brzo","Name or find five items that fit the chosen clue before counting down.","Navedite ili pronađite pet predmeta pre odbrojavanja.","search"],
["Paper Bridge Test","Test papirnog mosta","Build a paper bridge and test which fold makes it stronger.","Napravite most od papira i isprobajte koji pregib je jači.","build"],
["Straw City","Grad od slamki","Connect safe straws or craft sticks into roads and buildings.","Spojite bezbedne slamčice ili štapiće u puteve i zgrade.","build"],
["Recycled Robot","Robot od reciklaže","Build a robot from clean boxes and give it a helpful job.","Napravite robota od čistih kutija i odredite mu koristan posao.","build"],
["Marshmallow Structures","Konstrukcije od mekanih kockica","Build a structure that balances three lightweight pieces.","Napravite konstrukciju koja drži tri lagana dela u ravnoteži.","build"],
["Bridge to the Toy","Most do igračke","Design a route that lets a small toy cross an imaginary river.","Osmislite put kojim mala igračka prelazi zamišljenu reku.","build"],
["Cardboard Telescope","Kartonski teleskop","Decorate a cardboard tube and invent what it can discover.","Ukrasite kartonsku cev i izmislite šta ona otkriva.","build"],
["Magnet-Free Maze","Lavirint bez magneta","Build a maze from blocks and guide a toy from start to finish.","Napravite lavirint od kockica i vodite igračku do cilja.","build"],
["Balance Sculpture","Skulptura ravnoteže","Stack safe objects into a sculpture that leans but does not fall.","Složite bezbedne predmete u skulpturu koja se naginje ali ne pada.","build"],
["Tiny Shop","Mala prodavnica","Build a pretend shop and create signs, shelves and products.","Napravite zamišljenu prodavnicu sa natpisima, policama i proizvodima.","build"],
["Paper Playground","Igralište od papira","Design a paper playground with spaces for different games.","Osmislite igralište od papira sa prostorima za različite igre.","build"],
["Balloon Tap Circle","Krug dodira balona","Keep a balloon moving around the circle without holding it.","Održavajte balon u kretanju kroz krug bez zadržavanja.","ball"],
["Target Ladder","Merdevine za cilj","Move a soft ball through targets that get farther each round.","Pogađajte meke mete koje su sve dalje u svakom krugu.","ball"],
["Roll and Follow","Kotrljaj i prati","Roll a ball to a partner, then follow it with a new movement.","Otkotrljajte loptu partneru i pratite je novim pokretom.","ball"],
["Two-Bounce Catch","Hvatanje posle dva odskoka","Let the ball bounce twice before trying a careful catch.","Pustite loptu da odskoči dva puta pre pažljivog hvatanja.","ball"],
["Color Goalkeeper","Golman boja","Call a color and stop the soft ball near its matching marker.","Izgovorite boju i zaustavite mekanu loptu kod odgovarajuće oznake.","ball"],
["Balloon Volleyball","Odbojka balonom","Tap a balloon over a line and count cooperative hits.","Prebacujte balon preko linije i brojite zajedničke udarce.","ball"],
["Partner Pass Pattern","Šablon dodavanja","Create a repeating pass pattern and see if the group remembers it.","Napravite šablon dodavanja i proverite da li ga grupa pamti.","ball"],
["Rolling Ramps","Rampe za kotrljanje","Make a gentle ramp and compare how different balls travel.","Napravite blagu rampu i uporedite kretanje različitih lopti.","ball"],
["Circle Bounce","Odbijanje u krugu","Bounce a ball once before passing it to the next player.","Odbijte loptu jednom pre nego što je dodate sledećem igraču.","ball"],
["Target Story Toss","Bacanje priče u metu","Name a story detail whenever the ball lands in a target.","Recite detalj priče svaki put kada lopta pogodi metu.","ball"],
["Leaf Line-Up","Poređaj lišće","Arrange fallen leaves from smallest to largest or lightest to darkest.","Poređajte opalo lišće od najmanjeg do najvećeg ili svetlog do tamnog.","nature"],
["Nature Number Hunt","Lov na brojeve u prirodi","Find natural groups that match called numbers.","Pronađite grupe iz prirode koje odgovaraju izgovorenim brojevima.","nature"],
["Stick Shadow Shapes","Oblici senki grančica","Use sticks and sunlight to create and guess shadow shapes.","Koristite grančice i sunce da napravite i pogodite oblike senki.","nature"],
["Bird Sound Pause","Pauza za zvuke ptica","Listen quietly, then imitate one sound you noticed.","Slušajte tiho, pa oponašajte jedan zvuk koji ste čuli.","nature"],
["Nature Color Wheel","Točak boja prirode","Collect fallen items to make a circular color wheel.","Sakupite otpale delove i napravite kružni točak boja.","nature"],
["Windy Ribbon Watch","Posmatranje vetra","Watch a ribbon or leaf and copy its movement with your body.","Posmatrajte traku ili list i oponašajte njegovo kretanje telom.","nature"],
["Mini Habitat","Malo stanište","Arrange natural loose parts into a pretend home for a tiny creature.","Složite prirodne delove u zamišljeni dom malog bića.","nature"],
["Cloud Shape Chain","Lanac oblika oblaka","Spot a cloud shape and connect it to the next player’s idea.","Uočite oblik oblaka i nadovežite se na ideju sledećeg igrača.","nature"],
["Nature Texture Cards","Kartice tekstura prirode","Match safe natural textures and describe how they feel.","Spojite bezbedne teksture iz prirode i opišite kakve su na dodir.","nature"],
["Sunrise Stretch Story","Priča uz istezanje","Stretch like parts of a landscape while telling a morning story.","Istežite se kao delovi pejzaža dok pričate jutarnju priču.","nature"],
["Mirror Animal","Životinjsko ogledalo","Copy a partner’s animal movement, then switch leaders.","Kopirajte pokrete životinje partnera, pa zamenite vođu.","dance"],
["Beat the Pause","Pobedi pauzu","Move to a steady beat and create a pose during every pause.","Krećite se uz ritam i zauzmite pozu tokom svake pauze.","dance"],
["Body Letter Dance","Ples slova telom","Use your body to form letters while a partner guesses them.","Telom napravite slova koja partner pogađa.","dance"],
["Slow Fast Switch","Sporo-brza promena","Switch between slow and fast movement when the leader signals.","Menjajte spore i brze pokrete na znak vođe.","dance"],
["Clap and Step","Pljesak i korak","Combine a clap and a step into a growing rhythm sequence.","Spojite pljesak i korak u ritam koji raste.","dance"],
["Rainbow Ribbon Dance","Ples šarenih traka","Dance with imaginary ribbons that trace different patterns.","Plešite sa zamišljenim trakama koje prave različite šare.","dance"],
["Partner Shadow Dance","Ples senki u paru","One dancer leads while the other follows like a gentle shadow.","Jedan plesač vodi, a drugi ga prati kao nežna senka.","dance"],
["Mood Statues","Statue raspoloženja","Make a statue for each feeling and explain the pose.","Napravite statuu za svako osećanje i objasnite pozu.","dance"],
["Direction Dance","Ples pravaca","Turn, step and reach in the direction called by the leader.","Okrenite se, zakoračite i pružite ruke u smeru vođe.","dance"],
["Celebration Choreo","Koreografija slavlja","Create a short group dance with a shared final move.","Napravite kratak grupni ples sa zajedničkim završnim pokretom.","dance"],
["Cloud Captain","Kapetan oblaka","Pretend to steer a cloud ship through changing weather.","Zamišljajte da vodite brod oblaka kroz promenljivo vreme.","pretend"],
["Toy Doctor","Doktor za igračke","Give a toy a check-up and explain how to help it feel better.","Pregledajte igračku i objasnite kako da joj bude bolje.","pretend"],
["Restaurant Imagination","Restoran mašte","Run a restaurant with menus, orders and creative dishes.","Vodite restoran sa jelovnicima, porudžbinama i maštovitim jelima.","pretend"],
["Post Office Play","Igra pošte","Sort pretend letters and deliver them to the right places.","Razvrstajte zamišljena pisma i dostavite ih na prava mesta.","pretend"],
["Space Mission Control","Kontrola svemirske misije","Count down, solve a mission problem and celebrate the landing.","Odbrojavajte, rešite problem misije i proslavite sletanje.","pretend"],
["Helpful Inventor","Korisni pronalazač","Invent a tool that solves a small everyday problem.","Izmislite alat koji rešava mali svakodnevni problem.","pretend"],
["Underwater Tour","Podvodni obilazak","Guide visitors through an imaginary ocean using movements and sounds.","Vodite posetioce kroz zamišljeni okean pokretima i zvucima.","pretend"],
["Family Newsroom","Porodična redakcija","Create a friendly news show about today’s household events.","Napravite prijatne vesti o današnjim događajima kod kuće.","pretend"],
["Time-Travel Guide","Vodič kroz vreme","Act as a guide showing a visitor one past or future moment.","Budite vodič koji posetiocu pokazuje trenutak iz prošlosti ili budućnosti.","pretend"],
["Tiny Theatre","Malo pozorište","Choose roles, make a beginning and ending, then perform a short scene.","Izaberite uloge, osmislite početak i kraj i izvedite scenu.","pretend"],
["Quiet Cloud Count","Tiho brojanje oblaka","Watch the sky or imagine clouds and count slow breaths together.","Posmatrajte nebo ili zamišljajte oblake i zajedno brojite spore udaha.","nature"],
["Feather Focus","Pažnja na pero","Watch a feather or tissue float and describe its path.","Posmatrajte pero ili maramicu kako lebdi i opišite putanju.","nature"],
["Breathing Shapes","Oblici disanja","Trace a square or circle in the air while breathing slowly.","Pratite kvadrat ili krug u vazduhu uz sporo disanje.","nature"],
["Silent Sorting","Tiho razvrstavanje","Sort safe objects without speaking, then compare your system.","Razvrstajte bezbedne predmete bez govora i uporedite sistem.","nature"],
["Calm Color Search","Potraga za mirnom bojom","Find five objects in one calming color and arrange them gently.","Pronađite pet predmeta umirujuće boje i nežno ih poređajte.","nature"],
["Listening Minute","Minut slušanja","Sit comfortably and name the sounds you notice after one minute.","Udobno sedite i posle jednog minuta navedite zvuke koje čujete.","nature"],
["Tense and Relax","Stegni i opusti","Gently tense and relax different body parts like a robot.","Nežno stežite i opuštajte delove tela kao robot.","nature"],
["Quiet Pattern Tiles","Tihe šare","Make a repeating pattern with safe objects in complete silence.","Napravite ponavljajuću šaru od bezbednih predmeta u tišini.","nature"],
["Gratitude Garden","Bašta zahvalnosti","Place imaginary flowers for things each player appreciates.","Postavite zamišljene cvetove za stvari na kojima je svako zahvalan.","nature"],
["Breathing Buddy","Drug za disanje","Help a toy or partner match five slow, comfortable breaths.","Pomozite igrački ili partneru da prati pet sporih, prijatnih udaha.","nature"]
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

const parts = {
  kid:c=>`<circle cx="0" cy="-52" r="11" fill="${c}"/><path d="M0 -41v24m0-17-16 10m16-10 16 10m-16 17-12 17m12-17 12 17" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  kidRun:c=>`<circle cx="7" cy="-52" r="11" fill="${c}"/><path d="M5 -41l-8 22m0 0-17 16m17-16 15 18m-11-29-21-5m21 5 20-12" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  kidJump:c=>`<circle cx="0" cy="-60" r="11" fill="${c}"/><path d="M0 -49v22m0-15-19-13m19 13 19-13m-19 28-17 13m17-13 17 13" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  kidSit:c=>`<circle cx="-7" cy="-44" r="11" fill="${c}"/><path d="M-7 -33v20m0 0h25m-25-11-14 11m14-20 17 7" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  kidDance:c=>`<circle cx="0" cy="-54" r="11" fill="${c}"/><path d="M0 -43v24m0-17-20 5m20-5 18-17m-18 34-16 19m16-19 14 19" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  kidReach:c=>`<circle cx="0" cy="-52" r="11" fill="${c}"/><path d="M0 -41v24m0-17-16-15m16 15 16-15m-16 32-12 17m12-17 12 17" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  kidCape:c=>`<path d="M-3 -42q-27 16-19 38 15-9 22-22z" fill="${c}" opacity=".45"/><circle cx="0" cy="-52" r="11" fill="${c}"/><path d="M0 -41v24m0-17-16-15m16 15 16-15m-16 32-12 17m12-17 12 17" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  ball:c=>`<circle r="20" fill="#fff" stroke="${c}" stroke-width="5"/><path d="M-18-8q18 11 36 0M-18 8q18-11 36 0M0-20v40" fill="none" stroke="${c}" stroke-width="3.5"/>`,
  balloon:c=>`<ellipse cy="-12" rx="16" ry="20" fill="${c}"/><path d="M0 8v24" fill="none" stroke="${c}" stroke-width="3"/>`,
  leaf:c=>`<g transform="rotate(-25)"><ellipse rx="21" ry="11" fill="${c}"/><path d="M-19 6 19-6" fill="none" stroke="#fff" stroke-width="3"/></g>`,
  stone:c=>`<ellipse rx="15" ry="10" fill="${c}" opacity=".85"/>`,
  cup:c=>`<path d="M-15-15h30l-5 30h-20z" fill="${c}"/><path d="M-15-15h30" fill="none" stroke="#fff" stroke-width="4"/>`,
  box:c=>`<rect x="-21" y="-17" width="42" height="34" rx="4" fill="${c}"/><path d="M-21-4h42M0-17v34" fill="none" stroke="#fff" stroke-width="3.5"/>`,
  paper:c=>`<rect x="-21" y="-27" width="42" height="54" rx="4" fill="#fff" stroke="${c}" stroke-width="4"/><path d="M-12-13h24M-12 0h24M-12 13h15" fill="none" stroke="${c}" stroke-width="3"/>`,
  pencil:c=>`<path d="M-20 20l7-17 25-25 10 10-25 25z" fill="${c}"/><path d="M-20 20l7-17 4 4z" fill="#4c4a58"/>`,
  note:c=>`<path d="M-2-26h5v32h-5z" fill="${c}"/><ellipse cx="-10" cy="6" rx="11" ry="8" fill="${c}"/><path d="M3-26q15 4 17 13" fill="none" stroke="${c}" stroke-width="5"/>`,
  magnifier:c=>`<circle cy="-6" r="18" fill="#fff" stroke="${c}" stroke-width="6"/><path d="M13 9l16 16" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  star:c=>`<path d="M0-22 6-7l16 1-12 11 4 16-14-9-14 9 4-16-12-11 16-1z" fill="${c}"/>`,
  heart:c=>`<path d="M0 17C-21 2-25-10-17-17-10-24 0-15 0-9 0-15 10-24 17-17 25-10 21 2 0 17z" fill="${c}"/>`,
  tree:c=>`<path d="M-4 22h8v-26h-8z" fill="${c}"/><circle cy="-14" r="20" fill="${c}" opacity=".8"/>`,
  sun:c=>`<circle r="14" fill="${c}"/><path d="M0-24v-9M0 24v9M-24 0h-9M24 0h9M-17-17l-7-7M17 17l7 7M17-17l7-7M-17 17l-7 7" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`,
  cloud:c=>`<path d="M-24 12a13 13 0 0 1 2-25 17 17 0 0 1 31-4 13 13 0 0 1 15 29z" fill="#fff" stroke="${c}" stroke-width="4"/>`,
  crown:c=>`<path d="M-25 15h50l4-33-17 11-12-19-12 19-17-11z" fill="${c}"/>`,
  tent:c=>`<path d="M-29 19 0-23l29 42z" fill="${c}"/><path d="M0-23v42" fill="none" stroke="#fff" stroke-width="4"/>`,
  steps:c=>`<ellipse cx="-22" cy="10" rx="7" ry="11" fill="${c}"/><ellipse cx="0" cy="-3" rx="7" ry="11" fill="${c}" opacity=".8"/><ellipse cx="22" cy="-16" rx="7" ry="11" fill="${c}" opacity=".6"/>`,
  tape:c=>`<path d="M-60 0h120" fill="none" stroke="${c}" stroke-width="6" stroke-dasharray="16 12" stroke-linecap="round"/>`,
  web:c=>`<path d="M0-28V28M-28 0H28M-20-20 20 20M20-20-20 20M0-12 12 0 0 12-12 0zM0-25 25 0 0 25-25 0z" fill="none" stroke="${c}" stroke-width="3"/>`,
  bridge:c=>`<path d="M-34 16q34-42 68 0M-34 16h68M-18 16V3M0 16V-2M18 16V3" fill="none" stroke="${c}" stroke-width="5"/>`,
  tray:c=>`<rect x="-28" y="2" width="56" height="9" rx="4" fill="${c}"/><path d="M-20 2v-6h40v6z" fill="${c}" opacity=".6"/>`,
  puppet:c=>`<path d="M0-30v-16" fill="none" stroke="${c}" stroke-width="3"/><circle cy="-17" r="12" fill="${c}"/><path d="M0-5v20m0-13-15 7m15-7 15 7" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`,
  mask:c=>`<ellipse rx="20" ry="24" fill="#fff" stroke="${c}" stroke-width="4"/><circle cx="-7" cy="-6" r="3.5" fill="${c}"/><circle cx="7" cy="-6" r="3.5" fill="${c}"/><path d="M-9 8q9 9 18 0" fill="none" stroke="${c}" stroke-width="3.5"/>`,
  rainbow:()=>`<path d="M-44 16a44 44 0 0 1 88 0" fill="none" stroke="#e4572e" stroke-width="8"/><path d="M-34 16a34 34 0 0 1 68 0" fill="none" stroke="#f0a92b" stroke-width="8"/><path d="M-24 16a24 24 0 0 1 48 0" fill="none" stroke="#4cae7a" stroke-width="8"/><path d="M-14 16a14 14 0 0 1 28 0" fill="none" stroke="#4a7fd4" stroke-width="8"/>`,
  abc:c=>`<text x="0" y="11" text-anchor="middle" font-family="Verdana,sans-serif" font-size="34" font-weight="700" fill="${c}">ABC</text>`,
  num:c=>`<text x="0" y="11" text-anchor="middle" font-family="Verdana,sans-serif" font-size="34" font-weight="700" fill="${c}">123</text>`,
  question:c=>`<text x="0" y="14" text-anchor="middle" font-family="Verdana,sans-serif" font-size="42" font-weight="700" fill="${c}">?</text>`,
  lights:c=>`<rect x="-15" y="-32" width="30" height="64" rx="9" fill="${c}"/><circle cy="-18" r="7" fill="#e4572e"/><circle cy="0" r="7" fill="#f3c012"/><circle cy="18" r="7" fill="#4cae7a"/>`,
  mirror:c=>`<ellipse rx="18" ry="24" fill="#fff" stroke="${c}" stroke-width="5"/><path d="M-8-14 6-2" fill="none" stroke="${c}" stroke-width="4"/>`,
  pin:c=>`<path d="M0-26q11 9 11 21T0 18q-11-11-11-23T0-26z" fill="#fff" stroke="${c}" stroke-width="4"/><path d="M-8-8h16" fill="none" stroke="${c}" stroke-width="3"/>`,
  basket:c=>`<path d="M-23-10h46l-6 27h-34z" fill="${c}"/><path d="M-23-10h46" fill="none" stroke="#fff" stroke-width="4"/><path d="M-12-10a12 12 0 0 1 24 0" fill="none" stroke="${c}" stroke-width="4"/>`,
  goal:c=>`<path d="M-30 17V-11h60v28" fill="none" stroke="${c}" stroke-width="6"/><path d="M-18-11v28M-6-11v28M6-11v28M18-11v28M-30 3h60" fill="none" stroke="${c}" stroke-width="2.5"/>`,
  flower:c=>`<g fill="${c}" opacity=".75"><ellipse cy="-14" rx="6" ry="11"/><ellipse cy="14" rx="6" ry="11"/><ellipse cx="-14" rx="11" ry="6"/><ellipse cx="14" rx="11" ry="6"/></g><circle r="7" fill="${c}"/>`,
  twig:c=>`<path d="M-22 16 18-16m-9 1 11-1-1 11M-8 2l-11-7" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`,
  bubble:c=>`<path d="M-32-23h64a9 9 0 0 1 9 9v23a9 9 0 0 1-9 9H2l-15 14v-14h-19a9 9 0 0 1-9-9v-23a9 9 0 0 1 9-9z" fill="#fff" stroke="${c}" stroke-width="4"/><path d="M-19-7h38M-19 6h26" fill="none" stroke="${c}" stroke-width="3.5"/>`,
  hands:c=>`<path d="M-4 18q-19-7-19-23 0-10 8-6v-11q0-6 6-6t6 6zM4 18q19-7 19-23 0-10-8-6v-11q0-6-6-6t-6 6z" fill="${c}"/><path d="M-28-18l-8-8M28-18l8-8M0-28v-10" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>`,
  spiral:c=>`<path d="M2 0a7 7 0 1 1-7-7 14 14 0 1 1 14 14 21 21 0 1 1-21-21" fill="none" stroke="${c}" stroke-width="4.5" stroke-linecap="round"/>`,
  maze:c=>`<rect x="-26" y="-26" width="52" height="52" rx="5" fill="#fff" stroke="${c}" stroke-width="4"/><path d="M-26-10h26v20h-15M26 10h-14v-26" fill="none" stroke="${c}" stroke-width="4"/>`,
  hopscotch:c=>`<g fill="none" stroke="${c}" stroke-width="4"><rect x="-14" y="6" width="28" height="22" rx="2"/><rect x="-14" y="-16" width="28" height="22" rx="2"/><rect x="-28" y="-38" width="28" height="22" rx="2"/><rect x="0" y="-38" width="28" height="22" rx="2"/></g>`,
  cushion:c=>`<rect x="-23" y="-14" width="46" height="28" rx="11" fill="${c}"/><path d="M-23 0h46" fill="none" stroke="#fff" stroke-width="3"/>`,
  sock:c=>`<path d="M-11-26h17v28l13 11a11 11 0 0 1-15 15l-21-17z" fill="${c}"/>`,
  robot:c=>`<circle cy="-32" r="4" fill="${c}"/><path d="M0-28v-9" fill="none" stroke="${c}" stroke-width="4"/><rect x="-19" y="-19" width="38" height="36" rx="7" fill="${c}"/><circle cx="-7" cy="-7" r="4.5" fill="#fff"/><circle cx="7" cy="-7" r="4.5" fill="#fff"/><path d="M-8 7h16" fill="none" stroke="#fff" stroke-width="4"/>`,
  animal:c=>`<path d="M-18-9-23-29l17 9zM18-9 23-29 6-20z" fill="${c}"/><circle r="19" fill="${c}"/><circle cx="-7" cy="-2" r="3.5" fill="#fff"/><circle cx="7" cy="-2" r="3.5" fill="#fff"/><path d="M-6 8q6 6 12 0" fill="none" stroke="#fff" stroke-width="3"/>`,
  target:c=>`<circle r="24" fill="#fff" stroke="${c}" stroke-width="4"/><circle r="15" fill="none" stroke="${c}" stroke-width="4"/><circle r="6" fill="${c}"/>`,
  map:c=>`<path d="M-31-20-11-27 11-20 31-27v47l-20 7-22-7-20 7z" fill="#fff" stroke="${c}" stroke-width="4"/><path d="M-20-7q15 13 29-2" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="5 4"/><path d="M13 2l11 11m0-11-11 11" fill="none" stroke="${c}" stroke-width="4"/>`,
  tower:c=>`<rect x="-21" y="4" width="42" height="18" rx="3" fill="${c}"/><rect x="-16" y="-16" width="32" height="18" rx="3" fill="${c}" opacity=".8"/><rect x="-11" y="-36" width="22" height="18" rx="3" fill="${c}" opacity=".6"/>`,
  city:c=>`<g fill="${c}"><rect x="-45" y="-10" width="25" height="34" rx="2"/><rect x="-16" y="-32" width="27" height="56" rx="2"/><rect x="15" y="-19" width="26" height="43" rx="2"/></g><g fill="#fff"><rect x="-38" y="-2" width="7" height="7"/><rect x="-8" y="-22" width="7" height="7"/><rect x="23" y="-9" width="7" height="7"/></g>`,
  shapes:c=>`<circle cx="-30" r="14" fill="${c}"/><path d="M0-15 16 13H-16z" fill="${c}" opacity=".8"/><rect x="18" y="-13" width="26" height="26" rx="3" fill="${c}" opacity=".6"/>`,
  timer:c=>`<circle r="22" fill="#fff" stroke="${c}" stroke-width="5"/><path d="M0-12v13h12" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`,
  snow:c=>`<path d="M0-22V22M-19-11 19 11M-19 11 19-11M-6-16 0-22l6 6M-6 16 0 22l6-6" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`,
  ear:c=>`<path d="M-6 25q-15-5-15-23a18 18 0 1 1 36 0q0 11-10 13t-6 10" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`,
  apple:c=>`<path d="M0-17v-10" fill="none" stroke="${c}" stroke-width="4"/><ellipse cx="10" cy="-23" rx="9" ry="5" fill="${c}" opacity=".7"/><circle r="16" fill="${c}"/>`,
  dots:()=>`<circle cx="-26" r="12" fill="#e4572e"/><circle r="12" fill="#f0a92b"/><circle cx="26" r="12" fill="#4a7fd4"/>`,
  river:c=>`<path d="M-58 14q22-32 44-12t48-16" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round" stroke-dasharray="14 10"/>`,
  plane:c=>`<path d="M-32 10 32-13-6 23-11 7z" fill="${c}"/><path d="M-11 7 32-13" fill="none" stroke="#fff" stroke-width="3"/>`
};

const artRecipes = {
  "Rainbow Hunt":[["rainbow",255,135,1.7],["kid",115,182,1.3],["stone",258,176,1.3]],
  "Animal Parade":[["kid",95,182,1.2],["animal",195,130,1.3],["animal",278,132,1.1],["animal",350,134,.92]],
  "Story Circle":[["kid",95,182,1.2],["bubble",230,82,1.5],["kid",372,182,1.2]],
  "Color Dash":[["tape",252,198,1.1],["kidRun",120,182,1.3],["dots",305,108,1.5]],
  "Mystery Drawing":[["paper",228,112,1.75],["pencil",332,142,1.4],["question",385,80,.85]],
  "Cushion Islands":[["cushion",110,178,1.2],["cushion",225,178,1.2],["cushion",340,178,1.2],["kidJump",225,152,1.15]],
  "Balloon Breaths":[["kid",130,182,1.3],["balloon",282,118,1.8],["balloon",356,142,1.15]],
  "Target Toss":[["kid",110,182,1.3],["ball",205,112,1],["target",335,112,1.5]],
  "Shadow Zoo":[["sun",365,58,.85],["kid",118,182,1.3],["animal",272,132,1.5]],
  "Robot Guide":[["kid",110,182,1.3],["steps",228,152,1.35],["robot",335,142,1.4]],
  "Paper Tower":[["paper",118,138,1.05],["tower",248,172,1.6],["kidReach",358,182,1.2]],
  "Nature Faces":[["leaf",198,98,1.15],["leaf",302,98,1.15],["stone",250,138,1.35],["twig",250,178,1.55]],
  "Freeze Dance":[["kidDance",150,182,1.4],["note",292,98,1.4],["note",362,140,1.05]],
  "Cup Castle":[["cup",182,172,1.25],["cup",250,172,1.25],["cup",318,172,1.25],["cup",216,132,1.25],["cup",284,132,1.25],["cup",250,92,1.25]],
  "Secret Sound":[["ear",152,130,1.6],["note",298,108,1.3],["question",372,150,.8]],
  "Adventure Path":[["tape",232,198,1.3],["cushion",305,172,1.2],["kidJump",168,152,1.2],["steps",358,152,1.1]],
  "Ball Balance":[["ball",152,92,.9],["kidReach",152,182,1.3],["ball",322,150,1.2]],
  "Funny Portrait":[["paper",228,112,1.8],["mask",228,106,.85],["pencil",342,150,1.35]],
  "Cloud Detective":[["cloud",205,78,1.45],["cloud",325,108,1.05],["kid",118,182,1.3],["magnifier",305,168,1.2]],
  "Movement Memory":[["kid",118,182,1.2],["kidDance",232,182,1.2],["kidJump",342,182,1.2]],
  "Paper Air Lab":[["plane",262,98,1.55],["kidReach",118,182,1.3],["paper",352,158,.95]],
  "Mini Bowling":[["ball",125,152,1.15],["pin",252,152,1.15],["pin",305,152,1.15],["pin",358,152,1.15]],
  "Yes, Let's":[["star",225,68,1.15],["kidReach",140,182,1.3],["kidReach",305,182,1.3]],
  "Garden Relay":[["tape",258,198,1],["kidRun",138,182,1.35],["tree",352,172,1.35]],
  "Treasure Map":[["map",238,112,1.8],["star",362,152,1.05]],
  "Sock Basketball":[["kid",108,182,1.2],["sock",205,102,1.25],["basket",325,160,1.6]],
  "Mirror Moves":[["kid",148,182,1.3],["mirror",250,112,1.3],["kid",352,182,1.3]],
  "Texture Safari":[["magnifier",148,120,1.4],["stone",262,158,1.45],["leaf",332,128,1.25],["twig",262,190,1.1]],
  "Cardboard City":[["city",258,168,1.55],["box",118,168,1.2]],
  "Whisper Chain":[["bubble",168,78,.9],["bubble",292,78,.9],["kid",110,182,1.2],["kid",230,182,1.2],["kid",350,182,1.2]],
  "Leaf Race":[["kid",110,182,1.3],["leaf",238,128,1.3],["leaf",318,116,1.05],["tape",330,192,.75]],
  "Statue Museum":[["star",250,66,1],["kidDance",140,182,1.3],["kidReach",250,182,1.3],["kid",356,182,1.3]],
  "Shape Explorer":[["shapes",250,120,1.5],["magnifier",118,142,1.2]],
  "Floor Is Lava":[["cushion",118,182,1.1],["cushion",240,182,1.1],["cushion",358,182,1.1],["kidJump",180,152,1.2]],
  "Name That Mime":[["mask",158,120,1.6],["kidDance",298,182,1.3],["question",372,88,.85]],
  "Paper Maze":[["maze",230,116,1.9],["pencil",348,150,1.3]],
  "Backyard Olympics":[["kidRun",118,182,1.3],["star",248,88,1.3],["pin",330,170,1.15],["ball",382,166,.85]],
  "Rolling Goal":[["goal",312,160,1.5],["kidRun",110,182,1.2],["ball",188,162,1.05]],
  "Sound Orchestra":[["note",222,96,1.3],["note",290,130,1],["note",352,92,1.2],["kid",118,182,1.2],["kid",332,182,1.2]],
  "Nature Crown":[["crown",250,118,1.8],["leaf",148,160,1.2],["flower",352,160,1.05]],
  "Tape-Line Balance":[["tape",222,192,1.6],["kidReach",222,182,1.3],["steps",342,170,1.05]],
  "Monster Steps":[["kidJump",152,182,1.5],["steps",302,158,1.6]],
  "Memory Tray":[["cup",192,122,.95],["apple",250,120,.78],["star",306,120,.88],["tray",248,160,2]],
  "Bridge Builders":[["bridge",252,152,1.8],["box",118,172,1.1]],
  "Compliment Ball":[["heart",302,78,.9],["kid",118,182,1.3],["ball",228,112,1.05],["kid",352,182,1.3]],
  "Weather Reporter":[["cloud",192,88,1.3],["sun",332,78,1.05],["kidReach",252,182,1.3]],
  "Dot-to-Doodle":[["paper",228,112,1.8],["dots",228,102,1.05],["pencil",342,150,1.3]],
  "Quiet Detective":[["magnifier",232,120,1.9],["kidSit",112,182,1.2],["star",352,88,.85]],
  "Obstacle Mission":[["cushion",128,182,1.1],["bridge",252,168,1.1],["kidJump",252,138,1],["tape",356,192,.65]],
  "Story Dice Without Dice":[["bubble",250,68,1.1],["cup",142,162,1.05],["sock",232,152,.95],["apple",322,158,.95]],
  "Pebble Patterns":[["stone",170,120,.95],["stone",232,120,.95],["stone",294,120,.95],["stone",140,164,1.15],["stone",202,164,1.15],["stone",264,164,1.15],["stone",326,164,1.15]],
  "Ball Tunnel":[["bridge",222,168,1.25],["kid",148,182,1.3],["kid",292,182,1.3],["ball",222,170,1]],
  "Copycat Clap":[["note",252,66,1],["hands",182,132,1.5],["hands",305,132,1.2]],
  "Paper Costume":[["kidCape",152,182,1.4],["paper",302,120,1.25],["crown",362,152,.95]],
  "Blindfold-Free Guide":[["bubble",232,72,1.05],["kid",158,182,1.3],["kid",292,182,1.3],["steps",372,166,.95]],
  "Alphabet Hunt":[["abc",248,122,1.6],["magnifier",120,142,1.2]],
  "Emotion Charades":[["mask",168,120,1.4],["mask",292,120,1.4],["heart",372,98,.8]],
  "Chalk River":[["river",242,148,1.1],["kidJump",148,182,1.2],["pencil",352,170,1.1]],
  "Pass the Sketch":[["paper",158,118,1.4],["paper",302,118,1.4],["pencil",230,172,1.3]],
  "Tiny Garden Design":[["twig",120,176,.95],["flower",172,150,1.15],["flower",242,162,.95],["tree",322,168,1.2]],
  "Hot and Cold Hunt":[["sun",158,98,.95],["snow",322,98,1.1],["magnifier",240,166,1.2]],
  "Balloon Keep-Up":[["balloon",252,88,1.8],["kidReach",252,188,1.3]],
  "Living Room Camp":[["star",360,68,.95],["tent",242,162,1.85],["cushion",126,176,1.1]],
  "Slow-Motion Race":[["tape",330,194,.75],["kidRun",158,182,1.3],["timer",302,110,1.35]],
  "Rhythm Leader":[["note",362,88,.95],["kid",150,182,1.3],["hands",282,122,1.35]],
  "What Changed":[["question",232,82,1],["kid",158,182,1.3],["kid",302,182,1.3]],
  "Paper Puppet Show":[["bubble",252,58,.95],["puppet",192,142,1.55],["puppet",302,142,1.25]],
  "Cone-Free Slalom":[["cup",148,166,1.05],["cup",250,166,1.05],["cup",352,166,1.05],["kidRun",198,182,1.2],["steps",302,186,.85]],
  "Seed and Tree":[["stone",128,172,.95],["tree",248,172,1.25],["tree",352,166,1.6]],
  "Goalkeeper Challenge":[["goal",292,160,1.6],["kidReach",292,178,1.15],["ball",150,162,1.15]],
  "One-Line Creature":[["spiral",232,116,1.35],["pencil",342,150,1.3]],
  "Museum Guide":[["kidReach",118,182,1.2],["star",188,110,1.15],["cup",262,160,.95],["apple",332,156,.95]],
  "Balance Delivery":[["cup",272,112,.85],["tray",272,132,1.55],["kidReach",158,182,1.3],["steps",362,176,.95]],
  "Category Countdown":[["timer",162,120,1.5],["num",300,124,1.1],["bubble",312,60,.75]],
  "Spider Web Route":[["web",258,118,1.9],["kid",118,182,1.2]],
  "Nature Bingo":[["leaf",158,108,1.15],["stone",250,114,1.25],["flower",342,108,1.05],["tree",250,178,1.05]],
  "Bounce and Catch":[["ball",252,96,1.3],["ball",252,166,.85],["kidReach",138,182,1.3]],
  "Dance Traffic Lights":[["lights",312,110,1.35],["kidDance",152,182,1.4]],
  "Box Invention":[["star",352,86,.95],["box",242,150,2],["pencil",128,160,1.1]],
  "Scent Explorer":[["spiral",182,108,1.2],["flower",302,150,1.3],["apple",372,160,.85]],
  "Superhero Training":[["star",312,88,1.2],["heart",372,140,.85],["kidCape",180,182,1.5]],
  "Symmetry Art":[["paper",230,112,1.8],["star",208,106,.62],["star",252,106,.62],["pencil",342,150,1.3]],
  "Jumping Numbers":[["num",252,108,1.3],["kidJump",148,182,1.3],["hopscotch",342,170,.95]],
  "Twig Letters":[["twig",150,150,1.4],["abc",288,132,1.2]],
  "Corner Goals":[["goal",138,160,1.1],["goal",342,160,1.1],["ball",240,162,1.2]],
  "Human Sculpture":[["star",250,66,.85],["kidReach",158,182,1.3],["kidDance",250,182,1.3],["kid",342,182,1.3]],
  "Sound Map":[["note",372,78,.9],["paper",180,116,1.55],["ear",312,120,1.3]],
  "Kitchen Band":[["note",332,96,1.2],["cup",148,160,1.2],["tray",250,162,1.55],["hands",352,158,.95]],
  "Indoor Picnic Quest":[["basket",242,160,1.75],["apple",148,162,.95],["map",352,110,.95]],
  "Build a Creature":[["star",250,78,.95],["box",158,166,1.05],["cup",240,162,1.05],["twig",330,160,1.05]],
  "Captain Says":[["bubble",250,68,1],["kidReach",148,182,1.3],["kid",250,182,1.3],["kidReach",352,182,1.3]],
  "Hopscotch Remix":[["hopscotch",258,150,1.8],["kidJump",128,182,1.2]],
  "Leaf Shadow Trace":[["sun",358,62,.85],["leaf",198,96,1.25],["paper",232,152,1.15],["pencil",332,160,1.1]],
  "Ball Pass Puzzle":[["ball",182,108,.95],["ball",312,108,.95],["kid",118,182,1.2],["kid",250,182,1.2],["kid",372,182,1.2]],
  "Mood Music Moves":[["note",292,98,1.3],["heart",362,140,.85],["kidDance",158,182,1.4]],
  "Tallest Tiny Tower":[["tower",252,178,1.3],["stone",128,176,.95],["cup",352,172,.95]],
  "Guess My Rule":[["question",122,110,.95],["shapes",252,132,1.4]],
  "Postcard Adventure":[["paper",230,114,1.85],["sun",208,94,.55],["tree",254,124,.65],["pencil",342,154,1.3]],
  "Stepping-Stone Story":[["bubble",252,72,1.1],["stone",130,178,1.2],["stone",245,178,1.2],["stone",360,178,1.2]],
  "Wind Race":[["kid",112,182,1.2],["leaf",205,118,1.3],["leaf",285,102,1.05],["paper",360,142,.95]],
  "Circle Keep-Away":[["kid",120,182,1.2],["kid",250,182,1.2],["kid",372,182,1.2],["ball",250,104,1.2]],
  "Final Pose Challenge":[["note",250,66,1],["kidDance",150,182,1.35],["kidReach",320,182,1.35]]
};

function gameArt(title, scene, index) {
  const recipe = artRecipes[title];
  if (!recipe) return sceneSvg(scene, index);
  const [bg, accent] = scenes[scene];
  const body = recipe.map(([name, x, y, s]) =>
    `<g transform="translate(${x},${y}) scale(${s})">${parts[name](accent)}</g>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 220"><rect width="440" height="220" rx="24" fill="${bg}"/><circle cx="${40+(index%4)*106}" cy="30" r="12" fill="#fff" opacity=".5"/><circle cx="398" cy="${44+(index%3)*22}" r="8" fill="#fff" opacity=".45"/>${body}</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const skillByScene = {story:"speech",pretend:"speech",search:"problem",build:"problem",run:"movement",ball:"movement",balance:"movement",dance:"creativity",draw:"creativity",nature:"calm"};
const activityByScene = {story:"calm",pretend:"medium",search:"calm",build:"medium",run:"active",ball:"active",balance:"medium",dance:"active",draw:"calm",nature:"calm"};
function activityForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  if(text.includes("slow fast switch")||text.includes("slow-motion race"))return "medium";
  if(/\b(slow|quiet|silent|breath|listening|relax|calm|focus)\b/.test(text))return "calm";
  return activityByScene[g[4]];
}
function maxPlayersForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  return /\b(circle|group|relay|everyone|each player|take turns|partner|pass around|around the group|visitor|players)\b/.test(text)?12:4;
}
function placeForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  if(/\b(window|living room|classroom|kitchen|indoors?|room|cushions?|pillows?|cups?|cardboard boxes?)\b/.test(text))return "indoors";
  if(/\b(outdoors?|backyard|garden|park|beach|pavement|sunlight|nature|clouds?|birds?|wind|chalk)\b/.test(text))return "outdoors";
  return "either";
}
function durationForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  if(/\b(one minute|minute|countdown|quick|pause|five things)\b/.test(text))return 5;
  if(g[4]==="build"||/\b(design|draw|drawing|create|invent|construct|structure|decorate)\b/.test(text))return 30;
  return 15;
}
function materialForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  if(/\b(sock|balloon|cup|cushion|pillow|box|cardboard|tray|tape|chalk|straw|utensil|button|bottle|ribbon|scarf|feather|tissue|block|toy|nature|leaf|leaves|stone|stones|pebble|pebbles|twig|twigs)\b/.test(text))return "household";
  if(g[4]==="ball"||/\bball\b/.test(text))return "ball";
  if(g[4]==="draw"||/\b(paper|pencil|crayon|draw|drawing|sketch|postcard|maze|map|letter|portrait)\b/.test(text))return "paper";
  if(g[4]==="build"||/\b(stack|structure|tower|bridge|sculpture)\b/.test(text))return "household";
  return "none";
}
const games = gameIdeas.slice(0,200).map((g,index)=>({
  id:index+1, title:g[0], srTitle:g[1], description:g[2], srDescription:g[3], scene:g[4],
  place:placeForIdea(g), material:materialForIdea(g), activity:activityForIdea(g), duration:durationForIdea(g),
  minAge:materialForIdea(g)==="none"&&["story","pretend","dance"].includes(g[4])?2:4,
  maxAge:12, minPlayers:1, maxPlayers:maxPlayersForIdea(g), skill:skillByScene[g[4]],
  image:gameArt(g[0],g[4],index)
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
    parent:{
      run:["Keep the route short at first, then extend it only if the child wants another round.","Offer a slower or seated version so every child can join comfortably.","Praise careful movement and safe choices rather than speed or winning."],
      draw:["Ask what is happening in the picture instead of guessing what it represents.","Keep your own example simple so the child feels free to invent a different solution.","Describe the colors, lines and choices you notice without judging the finished picture."],
      ball:["Use a larger, softer ball when a child is still building confidence.","Move the target closer after a miss so the next attempt feels achievable.","Count successful passes together rather than comparing players’ scores."],
      build:["When the structure falls, ask what the child would like to change before rebuilding.","Offer fewer pieces to younger children and add more only when they are ready.","Take a photo before rebuilding so experiments feel valuable, even when they do not last."],
      search:["Give one clue at a time and allow a quiet pause before offering help.","Let the child create the next clue once they understand how the search works.","Keep hidden objects within the agreed safe area and away from climbing hazards."],
      dance:["Let the child choose the music, leader or final pose for the next round.","Avoid correcting movements; personal interpretation is part of the creative play.","If energy rises too much, finish with one slow song and gentle stretches."],
      story:["Use open questions such as “What happens next?” instead of directing the plot.","Accept surprising ideas and repeat the child’s words to show that you are listening.","If a child gets stuck, offer two playful choices rather than completing the story for them."],
      nature:["Collect only fallen items and leave living plants and small creatures undisturbed.","Bring attention to one sound, texture or color at a time to avoid rushing the experience.","Wash hands after outdoor play and check that collected pieces are safe to handle."],
      balance:["Stay close enough to help without holding the child unless support is requested.","Lower or widen the route when the child looks unsure, then celebrate steady progress.","Keep the challenge near floor level and remove hard or sharp objects from the area."],
      pretend:["Follow the role the child gives you and let their ideas guide the scene.","Use ordinary objects as open-ended props instead of explaining what each one must be.","Introduce a small problem for the characters, then let the child invent the solution."]
    }
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
    parent:{
      run:["Neka staza u početku bude kratka, a produžite je samo ako dete želi još jedan krug.","Ponudite sporiju ili sedeću verziju kako bi svako dete moglo prijatno da učestvuje.","Pohvalite pažljivo kretanje i bezbedne odluke, a ne brzinu ili pobedu."],
      draw:["Pitajte šta se dešava na crtežu umesto da pogađate šta on predstavlja.","Neka vaš primer bude jednostavan kako bi dete slobodno osmislilo drugačije rešenje.","Opišite boje, linije i izbore koje primećujete bez ocenjivanja gotovog crteža."],
      ball:["Koristite veću i mekšu loptu dok dete još razvija sigurnost.","Posle promašaja približite metu kako bi sledeći pokušaj bio dostižan.","Zajedno brojite uspešna dodavanja umesto da poredite rezultate igrača."],
      build:["Kada se građevina sruši, pitajte dete šta želi da promeni pre nove gradnje.","Mlađem detetu ponudite manje delova, a dodajte još kada bude spremno.","Fotografišite građevinu pre nove gradnje kako bi svaki pokušaj ostao važan."],
      search:["Dajte po jedan trag i sačekajte malo pre nego što ponudite pomoć.","Kada dete razume igru, pustite ga da osmisli sledeći trag.","Skrivajte predmete samo u dogovorenom bezbednom prostoru, daleko od mesta za penjanje."],
      dance:["Neka dete izabere muziku, vođu ili završnu pozu za sledeći krug.","Ne ispravljajte pokrete; lično tumačenje je deo kreativne igre.","Ako energija postane previsoka, završite sporom pesmom i blagim istezanjem."],
      story:["Postavljajte otvorena pitanja poput „Šta se zatim dogodilo?“ umesto da vodite radnju.","Prihvatite neobične ideje i ponovite detetove reči da pokažete da ga slušate.","Ako dete zastane, ponudite dva zabavna izbora umesto da završite priču umesto njega."],
      nature:["Skupljajte samo otpale predmete i ne uznemiravajte žive biljke i mala bića.","Usmerite pažnju na jedan zvuk, teksturu ili boju kako igra ne bi postala žurba.","Posle igre napolju operite ruke i proverite da li su sakupljeni predmeti bezbedni."],
      balance:["Budite dovoljno blizu da pomognete, ali ne pridržavajte dete ako to ne traži.","Spustite ili proširite stazu ako dete nije sigurno, pa pohvalite stabilan napredak.","Neka izazov bude blizu poda i sklonite tvrde ili oštre predmete iz prostora."],
      pretend:["Prihvatite ulogu koju vam dete dodeli i pustite njegove ideje da vode igru.","Koristite obične predmete kao slobodne rekvizite bez određivanja šta moraju da predstavljaju.","Uvedite mali problem za junake, a zatim pustite dete da smisli rešenje."]
    }
  }
};

const exampleVariations = {
  en:{
    run:["Begin with a short, walking-speed route; add a new movement only when it feels easy.","Let the child choose one safe way to travel between two nearby markers, then swap roles.","Try one practice round together before adding a timer, distance or extra challenge."],
    draw:["Start with one simple shape, then let the child add a detail that changes its meaning.","Take turns adding one line to the same picture and describe what changed.","Choose a small prompt from the game and let the child decide what the finished picture means."],
    ball:["Begin with a gentle pass or roll from nearby; move farther apart only if it stays comfortable.","Try one cooperative round and count successful passes or turns together.","If the game uses a target, bring it close first and move it farther only when the child asks."],
    build:["Start with only a few safe pieces, test the result, then change one thing at a time.","Build a small first version together and ask the child what they want to improve.","Let the child choose the goal, then test the creation on a low, stable surface."],
    search:["Offer one clue at a time and give the child a quiet moment to look before adding another.","Take turns choosing what to notice; let the child explain how they reached an answer.","Keep the search to a small agreed area and celebrate an interesting discovery, not speed."],
    dance:["Choose one easy movement, repeat it together, then let the child add the next one.","Try a slow round first and finish with a pose or rhythm chosen by the child.","Take turns leading a short sequence; anyone can pause or choose a gentler movement."],
    story:["Begin with one character and a small surprise; take turns adding one sentence.","Let the child choose the setting, then ask what the character notices first.","Make a short beginning and ending together, leaving the middle open to new ideas."],
    nature:["Notice one safe fallen object, sound or pattern, then describe it in a new way.","Choose one color or texture to look for and compare what each player notices.","Use only safe fallen materials; arrange a few, then tell a short story about the pattern."],
    balance:["Keep the route low and clear; try it slowly once before adding a turn or extra step.","Begin with a straight, easy path and let the child choose whether to make it longer.","Demonstrate the route, stay nearby and let the child pause or change the challenge."],
    pretend:["Choose roles and a simple situation; let the child decide what happens next.","Use one ordinary object as a pretend prop and invite the child to give it a new purpose.","Start with a small, friendly problem for the characters and let the child invent a solution."]
  },
  sr:{
    run:["Počnite kratkom stazom i hodanjem; dodajte novi pokret tek kada to postane lako.","Neka dete izabere bezbedan način kretanja između dve bliske oznake, pa zamenite uloge.","Prvo zajedno probajte jedan krug, pa tek onda dodajte vreme, udaljenost ili novi izazov."],
    draw:["Počnite jednostavnim oblikom, pa neka dete doda detalj koji mu menja značenje.","Naizmenično dodajte po jednu liniju na isti crtež i opišite šta se promenilo.","Izaberite mali motiv iz igre, a detetu prepustite da odluči šta crtež predstavlja."],
    ball:["Počnite blagim dodavanjem ili kotrljanjem izbliza; udaljite se samo ako je detetu prijatno.","Probajte jedan zajednički krug i zajedno brojite uspešna dodavanja ili poteze.","Ako igra koristi metu, prvo je postavite blizu i udaljite tek kada dete poželi."],
    build:["Počnite sa nekoliko bezbednih delova, isprobajte rezultat i menjajte jednu stvar odjednom.","Zajedno napravite malu početnu verziju i pitajte dete šta želi da poboljša.","Neka dete izabere cilj, a zatim isprobajte rad na niskoj i stabilnoj površini."],
    search:["Dajte po jedan trag i ostavite detetu vremena da potraži odgovor pre sledećeg.","Naizmenično birajte šta ćete posmatrati; neka dete objasni kako je došlo do odgovora.","Ograničite potragu na dogovoren prostor i pohvalite zanimljivo otkriće, ne brzinu."],
    dance:["Izaberite jedan lak pokret, ponovite ga zajedno, pa neka dete doda sledeći.","Počnite sporim krugom i završite pozom ili ritmom koji dete izabere.","Naizmenično vodite kratak niz; svako može da zastane ili izabere blaži pokret."],
    story:["Počnite jednim junakom i malim iznenađenjem; naizmenično dodajte po jednu rečenicu.","Neka dete izabere mesto radnje, pa pitajte šta junak prvo primećuje.","Zajedno osmislite kratak početak i kraj, a sredinu prepustite novim idejama."],
    nature:["Uočite jedan bezbedan opali predmet, zvuk ili šaru, pa ga opišite na nov način.","Izaberite jednu boju ili teksturu koju ćete tražiti i uporedite šta je ko primetio.","Koristite samo bezbedne otpale delove; složite nekoliko i ispričajte priču o šari."],
    balance:["Neka staza bude niska i slobodna; prvo je polako pređite pre dodavanja okreta.","Počnite ravnom i lakom stazom, pa neka dete odluči da li želi da je produži.","Pokažite stazu, ostanite u blizini i dozvolite detetu da zastane ili promeni izazov."],
    pretend:["Izaberite uloge i jednostavnu situaciju, a detetu prepustite šta će se dalje desiti.","Upotrebite običan predmet kao rekvizit i pozovite dete da mu smisli novu namenu.","Započnite malim, prijatnim problemom za junake i neka dete smisli rešenje."]
  }
};

function preparationForGame(game, language) {
  const text=`${game.title} ${game.description}`.toLowerCase();
  const localized=(en,sr)=>language==="sr"?sr:en;
  if(text.includes("leaf shadow trace"))return localized("Prepare one safe fallen leaf, paper, a child-safe pencil and a sunny spot.","Pripremite jedan bezbedan opali list, papir, bezbednu olovku i sunčano mesto.");
  if(/\b(maze|labyrinth)\b/.test(text))return localized("Choose a few large blocks and one small toy; build on a flat, clear surface.","Pripremite nekoliko većih kockica i jednu malu igračku; gradite na ravnoj i slobodnoj površini.");
  if(/\bmini bowling\b/.test(text))return localized("Prepare a soft ball and a few lightweight, unbreakable cups or bottles as pins.","Pripremite mekanu loptu i nekoliko laganih, nelomljivih čaša ili flašica kao čunjeve.");
  if(/\b(sock|rolled socks)\b/.test(text))return localized("Roll a clean pair of socks into a soft ball and prepare a basket or other safe target.","Urolajte čist par čarapa u mekanu loptu i pripremite korpu ili drugu bezbednu metu.");
  if(/\bballoon\b/.test(text))return localized("Prepare one lightweight balloon and clear sharp or fragile objects from the play area.","Pripremite jedan lagani balon i sklonite oštre ili lomljive predmete iz prostora za igru.");
  if(/\b(cup|cups)\b/.test(text))return localized("Prepare several clean, reusable plastic cups and a flat, stable surface.","Pripremite nekoliko čistih plastičnih čaša za višekratnu upotrebu i ravnu, stabilnu površinu.");
  if(/\b(cushion|cushions|pillow|pillows)\b/.test(text))return localized("Place a few firm cushions or pillows on a clear floor, leaving safe space between them.","Postavite nekoliko čvrstih jastuka na slobodan pod i ostavite bezbedan razmak između njih.");
  if(/\bchalk\b/.test(text))return localized("Prepare child-safe chalk and choose a safe pavement or chalkboard surface.","Pripremite bezbednu dečju kredu i izaberite bezbednu površinu ili tablu.");
  if(/\btape\b/.test(text))return localized("Use removable painter’s tape to mark a low, clear route on the floor.","Koristite lako uklonjivu papirnu traku da označite nisku, slobodnu stazu na podu.");
  if(/\b(box|boxes|cardboard)\b/.test(text))return localized("Prepare clean cardboard boxes with staples, tape and sharp edges removed.","Pripremite čiste kartonske kutije bez spajalica, lepljive trake i oštrih ivica.");
  if(/\btray\b/.test(text))return localized("Prepare a lightweight tray and a few safe, unbreakable objects.","Pripremite lagani poslužavnik i nekoliko bezbednih, nelomljivih predmeta.");
  if(/\b(straw|straws|craft sticks)\b/.test(text))return localized("Prepare child-safe paper straws or craft sticks and a clear building surface.","Pripremite bezbedne papirne slamčice ili štapiće i slobodnu površinu za građenje.");
  if(/\b(utensil|utensils|kitchen band)\b/.test(text))return localized("Choose a few safe wooden or plastic kitchen utensils and unbreakable containers.","Izaberite nekoliko bezbednih drvenih ili plastičnih kuhinjskih predmeta i nelomljive posude.");
  if(/\b(ribbon|scarf)\b/.test(text))return localized("Prepare a short lightweight ribbon or scarf and clear enough room for gentle movement.","Pripremite kratku laganu traku ili maramu i oslobodite prostor za nežno kretanje.");
  if(/\b(feather|tissue)\b/.test(text))return localized("Prepare one clean feather or a small piece of lightweight tissue.","Pripremite jedno čisto pero ili mali komad lagane papirne maramice.");
  if(/\b(button|buttons)\b/.test(text))return localized("Choose large, child-safe buttons or replace them with other safe objects for younger children.","Izaberite veliku dugmad bezbednu za dete ili je za mlađu decu zamenite drugim bezbednim predmetima.");
  if(/\b(ball|goalkeeper|bowling|bounce|rolling goal|target toss)\b/.test(text))return localized("Use a soft, age-appropriate ball and prepare any safe targets or markers mentioned in the game.","Koristite mekanu loptu primerenu uzrastu i pripremite bezbedne mete ili oznake koje igra traži.");
  if(/\b(leaf|leaves|twig|twigs|stone|stones|pebble|pebbles|nature)\b/.test(text))return localized("Choose a safe outdoor area and use only clean, fallen leaves, twigs or stones needed for the game.","Izaberite bezbedan prostor napolju i koristite samo čisto opalo lišće, grančice ili kamenčiće potrebne za igru.");
  if(game.material==="paper")return localized("Prepare paper and child-safe pencils, crayons or other drawing supplies needed for the activity.","Pripremite papir i bezbedne olovke, bojice ili drugi pribor za crtanje potreban za ovu igru.");
  if(game.material==="household")return localized("Prepare only the safe, clean household items named in the game.","Pripremite samo bezbedne i čiste kućne predmete koji se pominju u igri.");
  return detailContent[language].prepare[game.material];
}

const state = {
  language:localStorage.getItem("playPicksLanguage")==="en"?"en":"sr", step:0, answers:{}, view:"recommended", collection:null, selectedGame:null,
  profile:JSON.parse(localStorage.getItem("playPicksProfile")||"null"),
  likes:JSON.parse(localStorage.getItem("playPicksLikes")||"[]")
};
const $=selector=>document.querySelector(selector);
const questions=()=>questionSets[state.language];
const t=()=>copy[state.language];
const choice=(key)=>questions().find(q=>q[0]===key)[4].find(c=>c[0]===state.answers[key]);

function translate() {
  const c=t();
  document.documentElement.lang=state.language==="sr"?"sr-Latn":"en"; document.title=c.pageTitle; $("#brandLabel").textContent=c.brand;
  $('meta[name="description"]').content=c.description; $("#homeButton").ariaLabel=c.home; $(".language-switcher").ariaLabel=c.language;
  $("#heroTitle").innerHTML=c.hero; $("#heroCopy").textContent=c.heroCopy;
  $("#progress").ariaLabel=c.progress; $("#resultsEyebrow").textContent=c.resultsEye; $("#editButton").textContent=c.edit;
  $("#footerMessage").textContent=c.footer; $("#profileLabel").textContent=state.profile?.name||c.noProfile;
  $("#profileAvatar").textContent=state.profile?.name?.[0]||"?"; $("#profileTitle").textContent=c.profileTitle; $("#profileCopy").textContent=c.profileCopy;
  $("#profileNameLabel").textContent=c.name; $("#profileSaveButton").textContent=c.saveProfile; $("#deleteProfileButton").textContent=c.deleteProfile;
  $("#feedbackLabel").textContent=c.feedbackLabel; $("#feedbackHint").textContent=c.feedbackHint; $("#feedbackButton").textContent=c.feedbackButton;
  $("#startButton").innerHTML=`${c.findGame} <span>→</span>`; $("#popularButton").textContent=c.familyLove;
  $("#trustOne").textContent=c.trust[0]; $("#trustTwo").textContent=c.trust[1]; $("#trustThree").textContent=c.trust[2];
  $("#visualTitle").textContent=c.visualTitle; $("#visualCopy").textContent=c.visualCopy; $("#parentEyebrow").textContent=c.parentEyebrow;
  $("#parentIntro").textContent=c.parentIntro; $("#dailyLabel").textContent=c.dailyLabel;
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
  const remainder=games.filter(g=>!direct.includes(g));
  return [...direct,...remainder].slice(0,50);
}
function gameList(){
  if(state.view==="collection")return collectionGames();
  if(state.view==="saved")return games.filter(g=>state.likes.includes(g.id));
  if(state.view==="popular")return games.slice(0,50);
  return [...games].sort((a,b)=>score(b)-score(a)||a.id-b.id).slice(0,50);
}
function gameCard(game){
  const [title,description]=localized(game), liked=state.likes.includes(game.id);
  return `<article class="activity" data-detail="${game.id}" tabindex="0"><img class="activity-image" src="${game.image}" alt="${t().image(title)}"><div class="activity-content"><div class="activity-topline"><h3>${title}</h3><button class="like-button ${liked?"is-liked":""}" data-like="${game.id}" aria-label="${t().likes}">♥</button></div><p>${description}</p><div class="activity-meta"><span class="tag">${game.duration} ${t().min}</span><span class="tag">${t().place[game.place]}</span><span class="tag">${t().ages(game.minAge,game.maxAge)}</span></div><button class="details-button" data-open-detail="${game.id}">${t().details}</button></div></article>`;
}
function renderResults(){
  const list=gameList(), c=t(); $("#questionCard").hidden=true; $("#progress").hidden=true; $("#results").hidden=false;
  $("#landing").hidden=true; $("#explorePage").hidden=true;
  $("#editButton").hidden=state.view==="popular"||state.view==="saved";
  $("#resultsTitle").textContent=state.view==="popular"?c.popular:state.view==="saved"?c.saved:state.view==="collection"?state.collection.label:c.ready;
  $("#resultsSummary").textContent=state.view==="popular"?c.popularSummary:state.view==="saved"?c.savedSummary(list.length):state.view==="collection"?c.categorySummary(list.length):c.matches;
  $("#resultsSummary").hidden=!$("#resultsSummary").textContent;
  $("#filterChips").innerHTML=state.view==="recommended"&&state.answers.age?questions().map(q=>{const x=choice(q[0]);return `<span class="filter-chip">${x[1]} ${x[2]}</span>`}).join(""):"";
  $("#activityGrid").innerHTML=list.map(gameCard).join(""); $("#emptyState").hidden=list.length>0||state.view!=="saved";
  $("#emptyTitle").textContent=c.emptySaved; $("#emptyCopy").textContent=c.emptySavedCopy; $("#changeFiltersButton").textContent=c.change;
  $$("[data-like]").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleLike(Number(b.dataset.like))});
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
  $("#detailStepsTitle").textContent=t().stepsTitle;
  $("#detailSteps").innerHTML=[preparationForGame(game,state.language),...d.steps[game.scene]].map(step=>`<li>${step}</li>`).join("");
  $("#detailExampleTitle").textContent=t().exampleTitle;
  const example=exampleVariations[state.language][game.scene][(id-1)%3];
  $("#detailExample").textContent=state.language==="sr"?`Za igru „${title}“ probajte: ${example}`:`For ${title}, try: ${example}`;
  const parentTips=d.parent[game.scene];
  $("#detailParentTitle").textContent=t().parentTipTitle;
  $("#detailParent").textContent=parentTips[(id-1)%parentTips.length];
  $("#detailCloseButton").textContent=t().closeDetails;
  $("#detailLikeButton").classList.toggle("is-liked",liked);if(!$("#gameDialog").open)$("#gameDialog").showModal();
}
function setView(view){
  state.view=view; $$(".nav-button").forEach(b=>b.classList.toggle("is-active",b.dataset.view===view));
  if(view==="explore")renderExplore();else if(view==="recommended"&&!state.answers.age){showFilters(0)}else renderResults();
}
function requireProfile(){if(state.profile)return true;$("#profileDialog").showModal();return false}
function showToast(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("is-visible");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("is-visible"),2600)}
function toggleLike(id){if(!requireProfile())return;const liked=state.likes.includes(id);state.likes=liked?state.likes.filter(x=>x!==id):[...state.likes,id];localStorage.setItem("playPicksLikes",JSON.stringify(state.likes));showToast(liked?t().unliked:t().liked);if(!$("#results").hidden)renderResults();if($("#gameDialog").open)openGameDetail(id)}
function showFilters(step=state.step){state.step=step;$("#landing").hidden=true;$("#explorePage").hidden=true;$("#questionCard").hidden=false;$("#progress").hidden=false;$("#results").hidden=true;renderQuestion();scrollTo({top:0,behavior:"smooth"})}
function showLanding(){state.step=0;state.answers={};state.view="recommended";$("#landing").hidden=false;$("#explorePage").hidden=true;$("#questionCard").hidden=true;$("#progress").hidden=true;$("#results").hidden=true;$$(".nav-button").forEach(b=>b.classList.toggle("is-active",b.dataset.view==="recommended"));scrollTo({top:0,behavior:"smooth"})}
$("#nextButton").onclick=()=>{if(state.step<questions().length-1){state.step++;renderQuestion()}else{state.view="recommended";renderResults()}};
$("#backButton").onclick=()=>{if(state.step){state.step--;renderQuestion()}else showLanding()}; $("#homeButton").onclick=showLanding; $("#editButton").onclick=()=>showFilters(0);
$("#changeFiltersButton").onclick=()=>setView("recommended"); $$(".nav-button").forEach(b=>b.onclick=()=>setView(b.dataset.view));
$("#startButton").onclick=()=>showFilters(0); $("#bottomStartButton").onclick=()=>showFilters(0); $("#dailyButton").onclick=()=>openGameDetail(dailyGame().id); $("#popularButton").onclick=()=>setView("popular");
$("#gameDialogClose").onclick=()=>$("#gameDialog").close();$("#detailCloseButton").onclick=()=>$("#gameDialog").close();$("#detailLikeButton").onclick=()=>toggleLike(state.selectedGame);
$$(".language-button").forEach(b=>b.onclick=()=>{state.language=b.dataset.language;localStorage.setItem("playPicksLanguage",state.language);translate();if($("#gameDialog").open)openGameDetail(state.selectedGame);if(!$("#explorePage").hidden)renderExplore();else if(!$("#results").hidden)renderResults();else if(!$("#questionCard").hidden)renderQuestion()});
$("#profileButton").onclick=()=>{$("#profileName").value=state.profile?.name||"";$("#deleteProfileButton").classList.toggle("is-visible",Boolean(state.profile));$("#profileDialog").showModal()};
$("#feedbackLabel").textContent=t().feedbackLabel;$("#feedbackHint").textContent=t().feedbackHint;$("#feedbackButton").textContent=t().feedbackButton;
$("#feedbackButton").onclick=()=>{const message=$("#feedbackMessage").value.trim();if(!message){showToast(t().feedbackRequired);return}window.location.href=`mailto:?subject=${encodeURIComponent(t().feedbackSubject)}&body=${encodeURIComponent(message)}`};
$("#profileForm").onsubmit=e=>{if(e.submitter?.value==="cancel")return; e.preventDefault();const name=$("#profileName").value.trim();if(!name)return;state.profile={name};localStorage.setItem("playPicksProfile",JSON.stringify(state.profile));$("#profileDialog").close();translate()};
$("#deleteProfileButton").onclick=()=>{state.profile=null;state.likes=[];localStorage.removeItem("playPicksProfile");localStorage.removeItem("playPicksLikes");$("#profileDialog").close();translate();if(state.view==="saved")renderResults()};

if(games.length<200||new Set(games.map(g=>g.title)).size<200)throw new Error("Catalog must contain at least 200 unique games.");
translate();renderQuestion();showLanding();

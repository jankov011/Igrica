const questionSets = {
  en: [
    ["age", "Age", "How old are the children?", "Choose the age of the youngest player.", [["3-4","🐣","3–4 years","Little explorers"],["5-6","🧸","5–6 years","Curious creators"],["7-9","🦊","7–9 years","Big imaginations"],["10-12","🚀","10–12 years","Confident players"]]],
    ["players", "Children", "How many children are playing?", "We’ll choose games that work for your group.", [["1","🌟","One child","Solo play"],["2","🙌","Two children","A playful pair"],["3-4","🎈","3–4 children","A small group"],["5+","🎉","5+ children","Party or class"]]],
    ["place", "Setting", "Where will they play?", "Pick the space available right now.", [["indoors","🏠","Indoors",""],["outdoors","🌿","Outdoors",""],["travel","🚗","On the go",""],["either","🌤️","Either one",""]]],
    ["duration", "Time", "How much time do you have?", "We’ll prioritize games that fit your play window.", [["5","⚡","Up to 5 min","A quick reset"],["15","⏱️","Up to 15 min","A play break"],["30","🕰️","Up to 30 min","Time to create"],["60","🌈","Up to 1 hour","A bigger adventure"]]],
    ["material", "Materials", "What can they use?", "Games with no materials are always a good fit.", [["none","🙌","Nothing","Just imagination"],["paper","🖍️","Paper & pencils","Simple craft supplies"],["household","📦","Household items","Cups, cushions and more"],["ball","⚽","A ball","Any safe ball"]]],
    ["activity", "Energy", "What activity level feels right?", "Match the game to their energy.", [["calm","☁️","Calm","Quiet and focused"],["medium","🪁","Playful","Some movement"],["active","⚡","Very active","Lots of energy"]]],
  ],
  sr: [
    ["age", "Uzrast", "Koliko godina imaju deca?", "Izaberite uzrast najmlađeg igrača.", [["3-4","🐣","3–4 godine","Mali istraživači"],["5-6","🧸","5–6 godina","Radoznali kreativci"],["7-9","🦊","7–9 godina","Velika mašta"],["10-12","🚀","10–12 godina","Samostalni igrači"]]],
    ["players", "Deca", "Koliko dece se igra?", "Izabraćemo igre koje odgovaraju vašoj grupi.", [["1","🌟","Jedno dete","Samostalna igra"],["2","🙌","Dvoje dece","Razigrani par"],["3-4","🎈","3–4 deteta","Mala grupa"],["5+","🎉","5+ dece","Zabava ili odeljenje"]]],
    ["place", "Mesto", "Gde će se igrati?", "Izaberite prostor koji vam je dostupan.", [["indoors","🏠","Unutra",""],["outdoors","🌿","Napolju",""],["travel","🚗","U pokretu",""],["either","🌤️","Svejedno",""]]],
    ["duration", "Vreme", "Koliko vremena imate?", "Prednost imaju igre koje se uklapaju u vaše vreme.", [["5","⚡","Do 5 min","Brza razbibriga"],["15","⏱️","Do 15 min","Kratka igra"],["30","🕰️","Do 30 min","Vreme za kreativnost"],["60","🌈","Do 1 sata","Veća avantura"]]],
    ["material", "Materijali", "Šta mogu da koriste?", "Igre bez materijala su uvek dobar izbor.", [["none","🙌","Ništa","Samo mašta"],["paper","🖍️","Papir i olovke","Jednostavan pribor"],["household","📦","Kućni predmeti","Čaše, jastuci i drugo"],["ball","⚽","Lopta","Bilo koja bezbedna lopta"]]],
    ["activity", "Energija", "Koji nivo aktivnosti odgovara?", "Uskladite igru sa njihovom energijom.", [["calm","☁️","Mirno","Tiho i fokusirano"],["medium","🪁","Razigrano","Malo kretanja"],["active","⚡","Veoma aktivno","Mnogo energije"]]],
  ]
};

const copy = {
  en: {
    pageTitle:"Play Picks", brand:"Play Picks", description:"Find screen-free children's games for every moment.", home:"Play Picks home", language:"Language",
    nav:["For you","Explore","Popular","Saved"], profile:"Profile", hero:"Find their next <span>favorite game.</span>",
    heroCopy:"Answer a few questions to find a simple game that fits the moment.", progress:"Setup progress", resultsEye:"Your play picks",
    ready:"Ideas picked for you", popular:"Popular games", saved:"Your saved games", edit:"Edit filters", step:(a,b)=>`Step ${a} of ${b}`,
    next:"Continue", show:"Show", back:"Back", matches:"",
    collectionSummary:{popular:"Ideas for your next play break.",saved:"Games you’ve saved, ready when you need them."},
    popularSummary:"", savedSummary:n=>n ? `${n} game${n===1?"":"s"} saved in your local profile.` : "Like a game to save it here.",
    emptySaved:"No saved games yet", emptySavedCopy:"Tap the heart on a game you love and it will appear here.", change:"Explore games",
    profileTitle:"Your profile", profileCopy:"Enter a name to save games and keep favorites on this device.", name:"Name",
    saveProfile:"Save profile", deleteProfile:"Delete profile", likes:"likes", loginLike:"Create a local profile to save games.",
    place:{either:"Inside or outside",indoors:"Indoors",outdoors:"Outdoors",travel:"On the go"}, ages:(a,b)=>`Ages ${a}–${b}`, min:"min", image:t=>`Children playing ${t}`,
    noProfile:"Profile",
    findGame:"Find a game",
    trust:["✓ Screen-free ideas","✓ Ages 3–12"], visualTitle:"Ready for play?", visualCopy:"Simple ideas for everyday moments",
    dailyLabel:"TODAY’S GAME", dailyTitle:"Five-minute connection", dailyCopy:"Short play still counts. A few focused minutes can turn an ordinary pause into a warm family memory.",
    benefitOneTitle:"Supports development", benefitOneCopy:"Discover ideas for movement, creativity, cooperation and calm focus.",
    benefitTwoTitle:"Less decision fatigue", benefitTwoCopy:"Six simple choices turn “what should we do?” into a useful shortlist.",
    benefitThreeTitle:"Time together to remember", benefitThreeCopy:"Small shared moments can become happy memories children carry with them.",
    safetyTitle:"A note for safe, happy play", safetyCopy:"Stay nearby and adapt each game to your child and space.",
    liked:"Saved to your profile ♥", unliked:"Removed from saved games", saveAction:"Save", savedAction:"Saved",
    exploreTitle:"Games for every moment.", exploreCopy:"Choose a situation or a skill.", exploreModeLabel:"Explore games by", bySituation:"Games for every occasion", bySkill:"Games to build skills",
    momentTitle:"Choose a situation", momentCopy:"Browse games by setting or moment.", skillTitle:"Choose a skill", skillCopy:"Browse games by what you want to practice.",
    details:"Details", categorySummary:()=>"", exampleTitle:"Try this example", parentTipTitle:"Bonus idea", closeDetails:"Back to games", demoTitle:"How to play", demoPlay:"Play", demoPause:"Pause", demoSteps:[["Turn away","The observer turns around while the group chooses a leader."],["Copy the leader","Everyone copies the leader’s slow movement."],["Guess who leads","The observer turns back and guesses."]],
    feedbackLabel:"Send a comment", feedbackHint:"Your email app will open with the comment ready to send.", feedbackButton:"Prepare email", feedbackRequired:"Write a comment first.", feedbackSubject:"A comment about Play Picks"
  },
  sr: {
    pageTitle:"Naše igre", brand:"Naše igre", description:"Pronađite dečje igre bez ekrana za svaki trenutak.", home:"Početna stranica Naše igre", language:"Jezik",
    nav:["Za vas","Istraži","Popularno","Sačuvano"], profile:"Profil", hero:"Pronađite njihovu novu <span>omiljenu igru.</span>",
    heroCopy:"Odgovorite na nekoliko pitanja i pronađite jednostavnu igru koja odgovara trenutku.", progress:"Napredak izbora", resultsEye:"Predlozi za igru",
    ready:"Predlozi igara za vas", popular:"Popularno", saved:"Sačuvane igre", edit:"Promeni filtere", step:(a,b)=>`Korak ${a} od ${b}`,
    next:"Nastavi", show:"Prikaži", back:"Nazad", matches:"",
    collectionSummary:{popular:"Izdvojene ideje za sledeću igru.",saved:"Igre koje ste sačuvali, spremne kad vam zatrebaju."},
    popularSummary:"", savedSummary:n=>n ? `${n} ${n===1?"igra je sačuvana":n<5?"igre su sačuvane":"igara je sačuvano"} u profilu.` : "Sačuvajte igre koje vam se dopadaju.",
    emptySaved:"Još nema sačuvanih igara", emptySavedCopy:"Dodirnite srce na igri koja vam se sviđa i pojaviće se ovde.", change:"Istraži igre",
    profileTitle:"Vaš profil", profileCopy:"Unesite ime da sačuvate igre i omiljene stavke na ovom uređaju.", name:"Ime",
    saveProfile:"Sačuvaj profil", deleteProfile:"Obriši profil", likes:"lajkova", loginLike:"Napravite lokalni profil da sačuvate igre.",
    place:{either:"Unutra ili napolju",indoors:"Unutra",outdoors:"Napolju",travel:"U pokretu"}, ages:(a,b)=>`Uzrast ${a}–${b}`, min:"min", image:t=>`Deca igraju igru ${t}`,
    noProfile:"Profil",
    findGame:"Pronađi igru",
    trust:["✓ Ideje bez ekrana","✓ Uzrast 3–12"], visualTitle:"Spremni za igru?", visualCopy:"Jednostavne ideje za svaki dan",
    dailyLabel:"DANAŠNJA IGRA", dailyTitle:"Pet minuta povezivanja", dailyCopy:"I kratka igra se računa. Nekoliko posvećenih minuta može običnu pauzu pretvoriti u lepu porodičnu uspomenu.",
    benefitOneTitle:"Podstiče razvoj", benefitOneCopy:"Otkrijte ideje za kretanje, kreativnost, saradnju i miran fokus.",
    benefitTwoTitle:"Manje umora od odlučivanja", benefitTwoCopy:"Šest lakih izbora pretvara „šta ćemo sada?“ u koristan izbor igara.",
    benefitThreeTitle:"Vreme zajedno koje se pamti", benefitThreeCopy:"Male zajedničke igre i razgovori mogu postati lepe uspomene koje dete pamti.",
    safetyTitle:"Napomena za bezbednu i veselu igru", safetyCopy:"Budite u blizini i prilagodite igru detetu i prostoru.",
    liked:"Sačuvano u profilu ♥", unliked:"Uklonjeno iz sačuvanih igara", saveAction:"Sačuvaj", savedAction:"Sačuvano",
    exploreTitle:"Igre za svaki trenutak.", exploreCopy:"Birajte situaciju ili veštinu.", exploreModeLabel:"Istraži igre prema", bySituation:"Igre za različite prilike", bySkill:"Igre za razvoj veština",
    momentTitle:"Izaberite situaciju", momentCopy:"Pregledajte igre prema mestu ili trenutku.", skillTitle:"Izaberite veštinu", skillCopy:"Pregledajte igre prema onome što želite da podstaknete.",
    details:"Detalji", categorySummary:()=>"", exampleTitle:"Primer", parentTipTitle:"Bonus ideja", closeDetails:"Nazad na igre", demoTitle:"Kako se igra", demoPlay:"Pusti", demoPause:"Pauziraj", demoSteps:[["Okreni se","Posmatrač se okreće dok grupa bira vođu."],["Prati vođu","Svi oponašaju spori pokret vođe."],["Pogodi ko vodi","Posmatrač se vrati i pogađa."]],
    feedbackLabel:"Pošaljite komentar", feedbackHint:"Otvoriće se e-pošta sa pripremljenim komentarom.", feedbackButton:"Pripremi e-poštu", feedbackRequired:"Prvo napišite komentar.", feedbackSubject:"Komentar o aplikaciji Naše igre"
  }
};
  $$('[data-category]').forEach(b=>b.onclick=()=>openCollection("category",b.dataset.category,categories.find(x=>x[0]===b.dataset.category)[2]));

const gameIdeas = [
["Rainbow Hunt","Lov na dugu","Choose a few rainbow colors, find one safe object of each color, and arrange them from red to violet.","Izaberite nekoliko boja duge, pronađite po jedan bezbedan predmet svake boje i poređajte ih od crvene do ljubičaste.","search"],
["Animal Parade","Parada životinja","Choose an animal and cross a short, clear space moving and making its sound while the others guess. Take turns choosing the animal.","Izaberite životinju, pređite kratak i slobodan prostor njenim pokretima i oglašavanjem dok ostali pogađaju. Zatim menjajte ko bira životinju.","pretend"],
["Story Circle","Krug priča","Build a story one sentence at a time and add a surprise on every turn.","Gradite priču rečenicu po rečenicu i dodajte iznenađenje u svakom krugu.","story"],
["Color Dash","Trka boja","Call a color and race to safely touch something that matches.","Izgovorite boju i požurite da bezbedno dodirnete nešto takvo.","run"],
["Mystery Drawing","Tajanstveni crtež","Draw a secret object while everyone else guesses what is appearing.","Nacrtajte tajni predmet dok ostali pogađaju šta nastaje.","draw"],
["Cushion Islands","Ostrva od jastuka","Cross a path of cushions without touching the imaginary water.","Pređite stazu od jastuka bez dodirivanja zamišljene vode.","balance"],
["Family Quiz","Porodični kviz","Take turns answering questions about animals, nature and everyday life. Choose questions that fit the child's age; hints are welcome.","Naizmenično odgovarajte na pitanja o životinjama, prirodi i svakodnevnom životu. Birajte pitanja prema uzrastu deteta; nagoveštaji su dozvoljeni.","story"],
["Target Toss","Pogodi metu","Toss a soft ball toward safe targets worth different points.","Bacajte meku loptu ka bezbednim metama koje nose različite poene.","ball"],
["Shadow Zoo","Zoološki vrt senki","Make animal shadows with hands or bodies for others to identify.","Rukama ili telom pravite senke životinja koje ostali pogađaju.","pretend"],
["Robot Guide","Vodič za robota","Guide a robot player using precise step-by-step instructions.","Vodite igrača robota preciznim uputstvima korak po korak.","pretend"],
["Tallest Tower","Najviša kula","Build the tallest stable tower you can from safe items such as blocks, cups or small boxes.","Napravite što višu stabilnu kulu od bezbednih predmeta, poput kockica, čaša ili manjih kutija.","build"],
["Nature Faces","Lica iz prirode","Arrange leaves, stones and twigs into an expressive face.","Od lišća, kamenčića i grančica složite lice sa izrazom.","nature"],
["Freeze Dance","Ples i zaleđivanje","Dance freely and freeze in a funny pose whenever the leader calls stop.","Plešite slobodno i ukočite se u smešnoj pozi kada vođa kaže stop.","dance"],
["Cup Castle","Dvorac od čaša","Stack reusable cups into a castle with towers and a gate.","Složite čaše u dvorac sa kulama i kapijom.","build"],
["Secret Sound","Tajni zvuk","Make a hidden sound and let players identify its source.","Napravite skriveni zvuk i neka igrači otkriju odakle dolazi.","story"],
["Adventure Path","Staza avanture","Create a route with turns, jumps and balance challenges.","Napravite stazu sa okretima, skokovima i izazovima ravnoteže.","balance"],
["Ball Balance","Balansiranje lopte","Carry a soft ball along a short route using safe holds such as open palms or forearms; try a different hold each round.","Prenosite mekanu loptu kratkom stazom bezbednim položajima, na primer na otvorenim dlanovima ili podlakticama; svakog kruga probajte drugi položaj.","ball"],
["Funny Portrait","Smešni portret","Draw a portrait without lifting the pencil from the paper.","Nacrtajte portret bez podizanja olovke sa papira.","draw"],
["Cloud Shapes","Oblici u oblacima","Look at the clouds and take turns saying what they resemble. Use the shapes you spot to make up a short story together.","Posmatrajte oblake i naizmenično recite na šta vas podsećaju. Od uočenih oblika zajedno smislite kratku priču.","nature"],
["Movement Memory","Pamćenje pokreta","Add one movement to a growing sequence and repeat it together.","Dodajte pokret nizu koji raste i ponovite ga zajedno.","dance"],
["Paper Airplane Test","Test papirnog aviona","Fold a simple paper airplane, fly it from a marked line, then change one fold to see whether it flies straighter or farther.","Napravite jednostavan papirni avion i bacite ga sa označene linije. Promenite jedan pregib i proverite da li leti pravo ili dalje.","build"],
["Mini Bowling","Mini kuglanje","Set up a few empty plastic bottles or paper cups as pins, then roll a soft ball to knock them down.","Poređajte nekoliko praznih plastičnih flašica ili papirnih čaša kao čunjeve, pa ih oborite mekanom loptom.","ball"],
["Magic Object","Čarobni predmet","Choose a safe household object and pretend it is something else. Use its new purpose in a short scene while others guess what it has become.","Izaberite bezbedan kućni predmet i zamislite da je nešto drugo. Upotrebite ga u kratkoj sceni dok ostali pogađaju šta predstavlja.","pretend"],
["Garden Relay","Baštenska štafeta","Complete playful movement tasks between two outdoor markers.","Izvršavajte zabavne zadatke kretanja između dve spoljne oznake.","run"],
["Treasure Map","Mapa blaga","Draw a map with landmarks, hazards and hidden treasure.","Nacrtajte mapu sa znamenitostima, preprekama i skrivenim blagom.","draw"],
["Sock Basketball","Košarka čarapama","Toss rolled socks into a basket from marked distances.","Bacajte urolane čarape u korpu sa označenih udaljenosti.","ball"],
["Mirror Moves","Pokreti u ogledalu","Copy a partner’s slow movements as accurately as possible.","Kopirajte spore pokrete partnera što preciznije.","dance"],
["Texture Safari","Safari tekstura","Find something smooth, rough, soft and bumpy.","Pronađite nešto glatko, hrapavo, meko i kvrgavo.","search"],
["Cardboard City","Grad od kartona","Use clean small boxes as houses, then draw doors, windows, roads and a park on scrap paper. Arrange them into a tiny city and give it a name.","Iskoristite čiste manje kutije za kuće, a na papiru nacrtajte vrata, prozore, puteve i park. Rasporedite ih u mali grad i dajte mu ime.","build"],
["Whisper Chain","Lanac šapata","Pass a funny message around and compare the final version.","Prenesite smešnu poruku šapatom i uporedite završnu verziju.","story"],
["Leaf Race","Trka listova","Blow leaves across a finish line without touching them.","Duvanjem pomerajte lišće do cilja bez dodirivanja.","nature"],
["Statue Museum","Muzej statua","Pose as themed statues while a visitor tours the museum.","Pozirajte kao tematske statue dok posetilac obilazi muzej.","pretend"],
["Shape Explorer","Istraživač oblika","Find circles, triangles and squares in the space around you.","Pronađite krugove, trouglove i kvadrate u prostoru oko sebe.","search"],
["Floor Is Lava","Pod je lava","Travel across safe stepping spots without touching the floor.","Pređite preko bezbednih tačaka bez dodirivanja poda.","balance"],
["Name That Mime","Pogodi pantomimu","Act out everyday actions without words for others to guess.","Bez reči odglumite svakodnevne radnje koje ostali pogađaju.","pretend"],
["Paper Maze","Lavirint na papiru","Draw a simple maze with a start, finish and a few dead ends, then swap mazes and trace each route with a pencil.","Nacrtajte jednostavan lavirint sa početkom, ciljem i nekoliko slepih ulica, pa zamenite papire i pronađite put olovkom.","draw"],
["Backyard Olympics","Dvorišna olimpijada","Create three simple events for speed, aim and balance.","Napravite tri jednostavne discipline brzine, ciljanja i ravnoteže.","run"],
["Make a Goal","Napravimo gol","On flat, clear ground, mark a small goal with two short sticks or stones that will not roll. Take turns gently rolling a soft ball through it.","Na ravnom, slobodnom prostoru označite mali gol kratkim grančicama ili kamenovima koji se ne kotrljaju. Naizmenično nežno kotrljajte mekanu loptu kroz gol.","ball"],
["Sound Orchestra","Orkestar zvukova","Assign each player a sound and conduct a group performance.","Dodelite svakom igraču zvuk i dirigujte grupnim nastupom.","story"],
["Tape-Line Balance","Balans po liniji","Follow a safe floor line heel-to-toe with playful poses.","Pratite bezbednu liniju na podu korak po korak uz zabavne poze.","balance"],
["Monster Steps","Koraci čudovišta","Invent giant, tiny and wobbly monster walks.","Osmislite džinovske, sićušne i klimave korake čudovišta.","dance"],
["Memory Tray","Poslužavnik pamćenja","Study several objects, hide one and identify what changed.","Pogledajte nekoliko predmeta, sakrijte jedan i pogodite šta se promenilo.","search"],
["Bridge Builders","Graditelji mosta","Span a small gap between two sturdy supports with folded paper, cardboard strips or craft sticks. Test the bridge with a small toy and add one piece at a time.","Prebacite presavijeni papir, trake kartona ili drvene štapiće preko malog razmaka između dva stabilna oslonca. Ispitajte most malom igračkom i dodajte po jedan deo.","build"],
["Compliment Ball","Lopta lepih reči","Pass a soft ball gently around the group. Whoever catches it shares one specific, kind thing someone in the group did.","Nežno dodajte mekanu loptu u krugu. Ko je uhvati, kaže jednu konkretnu lepu stvar koju je neko iz grupe uradio.","ball"],
["Weather Reporter","Vremenski reporter","Present today’s weather with dramatic gestures and predictions.","Predstavite današnje vreme dramatičnim pokretima i prognozom.","pretend"],
["Dot-to-Doodle","Od tačke do crteža","Place random dots, connect them and turn the shape into art.","Postavite nasumične tačke, spojite ih i pretvorite oblik u crtež.","draw"],
["Quiet Detective","Tihi detektiv","Notice five tiny details others may have missed.","Primetite pet sitnih detalja koje su drugi možda propustili.","search"],
["Obstacle Mission","Misija sa preprekama","Crawl, step and weave through a safe homemade course.","Puzite, koračajte i provlačite se kroz bezbedan kućni poligon.","run"],
["Story Dice Without Dice","Priča bez kockica","Point to three nearby objects and make them story heroes.","Izaberite tri predmeta u blizini i učinite ih junacima priče.","story"],
["Pebble Patterns","Šare od kamenčića","Arrange stones in repeating patterns, spirals or pictures.","Složite kamenčiće u ponavljajuće šare, spirale ili slike.","nature"],
["Copycat Clap","Kopiraj pljesak","Create clap rhythms that others echo and extend.","Napravite ritam pljeskanja koji ostali ponavljaju i produžavaju.","dance"],
["Paper Costume","Kostim od papira","Design wearable paper accessories for an imaginary character.","Napravite papirne dodatke za kostim zamišljenog junaka.","build"],
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
["Mood Music Moves","Pokreti uz raspoloženje","Move differently to happy, calm and dramatic rhythms.","Krećite se drugačije uz vesele, mirne i dramatične ritmove.","dance"],
["Tallest Tiny Tower","Najviša mala kula","Build a tall tower from the smallest safe objects available.","Napravite visoku kulu od najmanjih dostupnih bezbednih predmeta.","build"],
["Guess My Rule","Pogodi moje pravilo","Sort objects by a secret rule for others to discover.","Razvrstajte predmete po tajnom pravilu koje ostali otkrivaju.","search"],
["Postcard Adventure","Avantura na razglednici","Draw a place and write one sentence from an imaginary trip.","Nacrtajte mesto i napišite rečenicu sa zamišljenog putovanja.","draw"],
["Stepping-Stone Story","Priča preko kamenja","Add one story sentence on every safe stepping spot.","Dodajte rečenicu priče na svakoj bezbednoj tački staze.","story"],
["Wind Race","Trka na vetru","Race lightweight leaves or paper pieces using only breath.","Trkajte lagano lišće ili papiriće koristeći samo dah.","nature"],
["Circle Keep-Away","Čuvaj krug","Pass a ball around a circle before the middle player reaches it.","Dodajte loptu u krugu pre nego što je igrač u sredini dohvati.","ball"],
["Final Pose Challenge","Izazov završne poze","Cross the space with a dance and finish in a themed pose.","Pređite prostor plesom i završite u zadatoj pozi.","dance"],
["Colorful Steps","Šareni koraci","Follow a path of colors and invent a movement for each one.","Pratite stazu boja i osmislite pokret za svaku boju.","run"],
["Treasure Guards","Čuvari blaga","Move slowly around a small toy treasure while music plays. When it stops, freeze in a guard pose and choose a new pose for the next round.","Polako se krećite oko male igračke koja predstavlja blago dok muzika svira. Kada stane, ukočite se u pozi čuvara, pa u sledećem krugu izaberite novu.","pretend"],
["Three Things, One Story","Tri predmeta, jedna priča","Choose three nearby objects and take turns adding one sentence to a story that includes all three.","Izaberite tri predmeta u blizini i naizmenično dodajte po jednu rečenicu priči u kojoj se pojavljuju sva tri.","story"],
["Pillow Mountain","Planina od jastuka","Climb over a safe pillow mountain using careful steps.","Pređite preko bezbedne planine od jastuka pažljivim koracima.","balance"],
["Tiptoe Trail","Staza na prstima","Walk a quiet trail and change direction at each marker.","Hodajte tihom stazom i menjajte smer kod svake oznake.","balance"],
["Animal Traffic","Životinjski saobraćaj","Move like different animals while following stop and go signals.","Krećite se kao različite životinje prateći signale stani i kreni.","pretend"],
["Jump and Name","Skoči i reci","Jump to a safe spot and name something from a chosen category.","Skočite na bezbedno mesto i recite pojam iz zadate kategorije.","run"],
["Mission Cards","Kartice misija","Complete a sequence of playful movement missions in order.","Izvršite niz razigranih pokretnih misija po redu.","run"],
["Crawl Like a Comet","Puzi kao kometa","Travel low and fast, then finish with a bright star pose.","Krećite se nisko i brzo, a zatim završite pozom sjajne zvezde.","run"],
["Invent a Creature","Izmisli biće","Take turns adding one feature to an imaginary creature—its appearance, movement, sound or favorite food—then give it a name.","Naizmenično dodajte po jednu osobinu zamišljenom biću — izgled, pokret, zvuk ili omiljenu hranu — pa mu dajte ime.","pretend"],
["Question Train","Voz pitanja","Take turns asking simple questions about an imaginary train trip. Each answer chooses the next station, and the group decides where the train goes next.","Zamislite zajedničko putovanje vozom i naizmenično postavljajte jednostavna pitanja. Svaki odgovor određuje sledeću stanicu, a grupa bira kuda voz ide dalje.","story"],
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
["Postcard Puzzle","Sastavi razglednicu","Draw a simple postcard scene on paper. An adult cuts it into four large pieces; mix them up and let a partner put the picture back together.","Nacrtajte jednostavan prizor na papiru. Odrasla osoba ga iseče na četiri velika dela; pomešajte ih i neka partner ponovo sastavi sliku.","draw"],
["Pattern Portrait","Portret sa šarama","Make a portrait where hair, clothes and background use patterns.","Napravite portret sa šarama u kosi, odeći i pozadini.","draw"],
["Invisible Ink Map","Mapa nevidljivog mastila","Draw a secret route with symbols and explain how to decode it.","Nacrtajte tajnu rutu simbolima i objasnite kako se čita.","draw"],
["Draw the Feeling","Nacrtaj osećanje","Use lines and colors to show a feeling without drawing a face.","Prikažite osećanje linijama i bojama bez crtanja lica.","draw"],
["Button Sorting Lab","Laboratorija dugmića","Sort safe buttons or objects in as many ways as possible.","Razvrstajte bezbedne dugmiće ili predmete na što više načina.","search"],
["What Is Missing?","Šta nedostaje?","Look at a group of objects, hide one and identify the missing item.","Pogledajte grupu predmeta, sakrijte jedan i pronađite šta nedostaje.","search"],
["Clue Collector","Sakupljač tragova","Follow simple clues that lead to a safe hidden surprise.","Pratite jednostavne tragove do bezbednog skrivenog iznenađenja.","search"],
["Sound Source Hunt","Potraga za izvorom zvuka","Listen to a familiar sound and point toward where it comes from; keep your eyes open.","Slušajte poznati zvuk i pokažite odakle dolazi; oči ostaju otvorene.","search"],
["Odd One Out","Uljez u grupi","Find the object that does not belong and explain why.","Pronađite predmet koji ne pripada grupi i objasnite zašto.","search"],
["Touch and Tell","Dodirni i opiši","Feel a safe object in a bag and describe it before looking.","Dodirnite bezbedan predmet u torbi i opišite ga pre gledanja.","search"],
["Sequence Spotter","Uoči niz","Study a repeating arrangement and say what should come next.","Pogledajte niz koji se ponavlja i recite šta sledi.","search"],
["Room Scavenger List","Spisak sobne potrage","Find safe items that match a list of colors, shapes or textures.","Pronađite bezbedne predmete prema bojama, oblicima ili teksturama.","search"],
["Secret Path Finder","Pronađi tajnu stazu","Remember a short route and guide someone through it with clues.","Zapamtite kratku rutu i vodite nekoga tragovima.","search"],
["Five Things Fast","Pet stvari brzo","Name or find five items that fit the chosen clue before counting down.","Navedite ili pronađite pet predmeta pre odbrojavanja.","search"],
["Paper Bridge Test","Test papirnog mosta","Build a paper bridge and test which fold makes it stronger.","Napravite most od papira i isprobajte koji pregib je jači.","build"],
["Straw City","Grad od slamki","Connect safe straws or craft sticks into roads and buildings.","Spojite bezbedne slamčice ili štapiće u puteve i zgrade.","build"],
["Marshmallow Structures","Konstrukcije od mekanih kockica","Build a structure that balances three lightweight pieces.","Napravite konstrukciju koja drži tri lagana dela u ravnoteži.","build"],
["Bridge to the Toy","Most do igračke","Design a route that lets a small toy cross an imaginary river.","Osmislite put kojim mala igračka prelazi zamišljenu reku.","build"],
["Cardboard Telescope","Kartonski teleskop","Decorate a cardboard tube and invent what it can discover.","Ukrasite kartonsku cev i izmislite šta ona otkriva.","build"],
["Maze Builder","Pravimo lavirint","Build a maze from any safe items you have, then guide a toy from start to finish.","Od bezbednih predmeta koje imate napravite lavirint, pa provedite igračku od početka do cilja.","build"],
["Balance Sculpture","Skulptura ravnoteže","Stack safe objects into a sculpture that leans but does not fall.","Složite bezbedne predmete u skulpturu koja se naginje ali ne pada.","build"],
["Tiny Shop","Mala prodavnica","Build a pretend shop and create signs, shelves and products.","Napravite zamišljenu prodavnicu sa natpisima, policama i proizvodima.","build"],
["Paper Playground","Igralište od papira","Design a paper playground with spaces for different games.","Osmislite igralište od papira sa prostorima za različite igre.","build"],
["Balloon Tap Circle","Krug dodira balona","Keep a balloon moving around the circle without holding it.","Održavajte balon u kretanju kroz krug bez zadržavanja.","ball"],
["Target Ladder","Merdevine za cilj","Move a soft ball through targets that get farther each round.","Pogađajte meke mete koje su sve dalje u svakom krugu.","ball"],
["Roll and Follow","Kotrljaj i prati","Roll a ball to a partner, then follow it with a new movement.","Otkotrljajte loptu partneru i pratite je novim pokretom.","ball"],
["Two-Bounce Catch","Hvatanje posle dva odskoka","Let the ball bounce twice before trying a careful catch.","Pustite loptu da odskoči dva puta pre pažljivog hvatanja.","ball"],
["Guess the Leader","Pogodi vođu","One player turns away while the group chooses a leader. The leader makes slow movements for everyone to copy. The player turns back toward the group and guesses who is leading.","Jedan igrač se okrene leđima dok grupa bira vođu. Vođa pravi spore pokrete koje svi oponašaju. Igrač se zatim okrene prema grupi i pogađa ko vodi.","pretend"],
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
["Hide and Seek","Žmurke","One player counts slowly to ten while the others hide in an agreed safe area. The seeker finds everyone, then players switch roles.","Jedan igrač polako broji do deset dok se ostali sakrivaju u dogovorenom bezbednom prostoru. Tražilac ih pronalazi, pa menjaju uloge.","search"],
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
["Breathing Buddy","Drug za disanje","Help a toy or partner match five slow, comfortable breaths.","Pomozite igrački ili partneru da prati pet sporih, prijatnih udaha.","nature"],
["Letter Clue Guess","Na slovo, na slovo","Choose a letter and category, give clues for a word that starts with it, and let others guess the word.","Izaberite slovo i kategoriju, dajte tragove za reč koja počinje tim slovom i neka je ostali pogode.","story"],
["Movement Commands","Komande pokreta","Follow one safe movement command at a time: make a star shape, crouch, lie on the floor or do one small jump. Pause between moves.","Pratite jednu bezbednu komandu za pokret: raširite se kao zvezda, čučnite, lezite na pod ili napravite mali skok. Pravite pauze između pokreta.","run"],
["Don't Step on a Crack","Ne gazi pukotinu","On a quiet, even sidewalk with an adult, walk slowly without stepping on cracks. Stop if the path is crowded, uneven or near traffic.","Na mirnom, ravnom trotoaru, uz odraslu osobu, hodajte polako bez gaženja pukotina. Prekinite igru ako je put prometan, neravan ili blizu saobraćaja.","search"],
["Guess Who I Am","Pogodi ko sam","One player thinks of a familiar person or story character. The others ask yes-or-no questions until they guess, then switch roles.","Jedan igrač zamisli poznatu osobu ili lik iz priče. Ostali postavljaju pitanja na koja se odgovara sa „da” ili „ne” dok ne pogode, pa menjaju uloge.","story"],
["One-Minute Challenge","Minutni izazov","Choose a simple task, set a one-minute timer and take turns seeing how many times you can do it. Keep it playful, not competitive.","Izaberite jednostavan zadatak, podesite tajmer na minut i naizmenično pratite koliko puta možete da ga uradite. Neka bude zabavno, bez takmičenja.","story"]
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
  "Tallest Tower":[["box",118,162,1.05],["tower",248,172,1.6],["kidReach",358,182,1.2]],
  "Nature Faces":[["leaf",198,98,1.15],["leaf",302,98,1.15],["stone",250,138,1.35],["twig",250,178,1.55]],
  "Freeze Dance":[["kidDance",150,182,1.4],["note",292,98,1.4],["note",362,140,1.05]],
  "Cup Castle":[["cup",182,172,1.25],["cup",250,172,1.25],["cup",318,172,1.25],["cup",216,132,1.25],["cup",284,132,1.25],["cup",250,92,1.25]],
  "Secret Sound":[["ear",152,130,1.6],["note",298,108,1.3],["question",372,150,.8]],
  "Adventure Path":[["tape",232,198,1.3],["cushion",305,172,1.2],["kidJump",168,152,1.2],["steps",358,152,1.1]],
  "Ball Balance":[["ball",152,92,.9],["kidReach",152,182,1.3],["ball",322,150,1.2]],
  "Funny Portrait":[["paper",228,112,1.8],["mask",228,106,.85],["pencil",342,150,1.35]],
  "Cloud Shapes":[["cloud",205,78,1.45],["cloud",325,108,1.05],["kid",118,182,1.3]],
  "Movement Memory":[["kid",118,182,1.2],["kidDance",232,182,1.2],["kidJump",342,182,1.2]],
  "Paper Airplane Test":[["plane",262,98,1.55],["kidReach",118,182,1.3],["paper",352,158,.95]],
  "Mini Bowling":[["ball",125,152,1.15],["pin",252,152,1.15],["pin",305,152,1.15],["pin",358,152,1.15]],
  "Magic Object":[["box",222,144,1.15],["star",286,85,.75],["kid",134,182,1.15]],
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
  "Make a Goal":[["goal",312,160,1.5],["kidRun",110,182,1.2],["ball",188,162,1.05]],
  "Sound Orchestra":[["note",222,96,1.3],["note",290,130,1],["note",352,92,1.2],["kid",118,182,1.2],["kid",332,182,1.2]],
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
function skillForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  if(/\b(cooperat|teamwork|team|share|group|partner|each player|every player|take turns|together|pass around|circle|relay)\b/.test(text))return "social";
  return skillByScene[g[4]];
}
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
  if(/\b(outdoors?|backyard|garden|park|beach|pavement|sunlight|clouds?|birds?|wind|chalk|leaves?|twigs?|stones?|pebbles?)\b/.test(text))return "outdoors";
  return "either";
}
function durationForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  if(/\b(one minute|minute|countdown|quick|pause|five things)\b/.test(text))return 5;
  if(g[4]==="build"||/\b(design|draw|drawing|create|invent|construct|structure|decorate)\b/.test(text))return 30;
  return 15;
}
function materialForIdea(g) {
  if(["Family Quiz","Letter Clue Guess"].includes(g[0]))return "none";
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  if(/\b(sock|balloon|cup|cushion|pillow|box|cardboard|tray|tape|chalk|straw|utensil|button|bottle|ribbon|scarf|feather|tissue|block|toy|nature|leaf|leaves|stone|stones|pebble|pebbles|twig|twigs)\b/.test(text))return "household";
  if(g[4]==="ball"||/\bball\b/.test(text))return "ball";
  if(g[4]==="draw"||/\b(paper|pencil|crayon|draw|drawing|sketch|postcard|maze|map|letter|portrait)\b/.test(text))return "paper";
  if(g[4]==="build"||/\b(stack|structure|tower|bridge|sculpture)\b/.test(text))return "household";
  return "none";
}
function ageRangeForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  const simpleImitationGames=new Set(["Animal Parade","Freeze Dance","Magic Object","Hide and Seek","Mirror Moves","Monster Steps","Copycat Clap","Animal Traffic","Seed and Tree","Mirror Animal","Bird Sound Pause","Breathing Buddy"]);
  if(simpleImitationGames.has(g[0]))return [3,12];
  if(g[0]==="Robot Guide")return [4,12];
  if(["Family Quiz","Letter Clue Guess"].includes(g[0]))return [4,12];
  if(/\b(alphabet|letters?|rhyme|decode|secret rule|sequence|memory|maze|map|countdown|counting down|yes-or-no|points|symmetry|strategy|numbers?)\b/.test(text))return [6,12];
  if(/\b(balloon|button|buttons|stone|stones|pebble|pebbles|tiny pieces|small pieces|loose parts|small objects)\b/.test(text))return [6,12];
  return [4,12];
}
const games = gameIdeas.map((g,index)=>({
  id:index+1, title:g[0], srTitle:g[1], description:g[2], srDescription:g[3], scene:g[4],
  place:placeForIdea(g), material:materialForIdea(g), activity:activityForIdea(g), duration:durationForIdea(g),
  minAge:ageRangeForIdea(g)[0], maxAge:ageRangeForIdea(g)[1], minPlayers:1, maxPlayers:maxPlayersForIdea(g), skill:skillForIdea(g),
  image:gameArt(g[0],g[4],index)
}));

const exploreCategories = {
  en:[
    ["rainy","🌧️","Rainy days","Calm and creative indoor games for rainy days."],
    ["summer","☀️","Summer play","Sunny ideas for warm days, gardens and parks."],
    ["winter","❄️","Cold days","Active indoor games to help kids warm up on cold days."],
    ["holiday","🎄","Family gatherings","Games for conversation and shared fun across generations."],
    ["travel","🚗","On the go","No-equipment games for passengers (never the driver), plus short breaks at safe stops."],
    ["party","🎉","Groups & parties","More active games for large groups and celebrations."]
  ],
  sr:[
    ["rainy","🌧️","Kišni dani","Mirne i kreativne igre za unutra dok pada kiša."],
    ["summer","☀️","Letnje igre","Sunčane ideje za tople dane, dvorište i park."],
    ["winter","❄️","Hladniji dani","Aktivne igre za unutra koje razgibavaju kada je napolju hladno."],
    ["holiday","🎄","Porodična okupljanja","Igre za zajednički razgovor i zabavu u porodici različitih uzrasta."],
    ["travel","🚗","U pokretu","Igre bez rekvizita za putnike (vozač ne učestvuje), uz kratke pauze na bezbednom mestu."],
    ["party","🎉","Grupe i proslave","Življe igre za veće grupe i proslave."]
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
      run:["Clear a safe area; mark a start and finish only if this game needs a route.","Explain the game's action or rule and try one easy round.","Let children choose a comfortable pace and stop for a break when needed."],
      draw:["Explain the creative prompt and show one simple example.","Let every child create without correcting their choices.","Invite them to describe or name what they made."],
      ball:["Agree on a safe throwing or rolling zone.","Practice one slow round together.","Add distance, a target or teamwork when everyone is ready."],
      build:["Look at the available pieces and imagine a goal.","Build, test and notice what works.","Change one thing and try the improved version."],
      search:["Agree on what the game asks players to find: an item, color, sound, pattern or change.","Follow the game's rule; give clues only when clues are part of the game.","Check the result using the game's rule: match, count, identify or explain what changed."],
      dance:["Show the first movement or rhythm.","Let each player add or change one movement.","Finish with everyone performing the sequence together."],
      story:["Choose a character, place or opening sentence.","Take turns adding one small part.","End the story together and recall the funniest moment."],
      nature:["Use only materials named in the game; some activities need no materials.","Follow the activity described: observe, arrange, listen, move or breathe.","Finish when the game's goal is reached; do not add a collecting task."],
      balance:["Make a low, safe route and demonstrate it.","Move slowly with arms free for balance.","Adjust the challenge rather than rushing."],
      pretend:["Choose roles and describe the imaginary situation.","Let children lead what happens next.","Add a gentle surprise that keeps the story moving."]
    },
    parent:{
      run:["Keep the route short at first, then extend it only if the child wants another round.","Offer a slower or seated version so every child can join comfortably.","Praise careful movement and safe choices rather than speed or winning."],
      draw:["Ask what is happening in the picture instead of guessing what it represents.","Keep your own example simple so the child feels free to invent a different solution.","Describe the colors, lines and choices you notice without judging the finished picture."],
      ball:["Use a larger, softer ball when a child is still building confidence.","Move the target closer after a miss so the next attempt feels achievable.","Count successful passes together rather than comparing players’ scores."],
      build:["When the structure falls, ask what the child would like to change before rebuilding.","Offer fewer pieces to younger children and give them time to try their own ideas.","Take a photo before rebuilding so experiments feel valuable, even when they do not last."],
      search:["Let the child decide what to look for first; offer a clue only if the game uses clues.","Give time to notice, remember or sort before offering help.","If an item is hidden, keep it in the agreed safe area and at an easy-to-reach height."],
      dance:["Let the child choose the music, leader or final pose for the next round.","Avoid correcting movements; personal interpretation is part of the creative play.","If energy rises too much, finish with one slow song and gentle stretches."],
      story:["Use open questions such as “What happens next?” instead of directing the plot.","When talking about the story, get down to the child's eye level and listen patiently.","If a child gets stuck, wait a moment, then offer a gentle prompt rather than finishing for them."],
      nature:["Collect natural items only when the game asks for them; leave plants and small creatures undisturbed.","For listening, breathing or movement games, let the child choose a comfortable pace.","Check that materials are safe to handle; collecting is not needed for every activity."],
      balance:["Stay close enough to help without holding the child unless support is requested.","Lower or widen the route when the child looks unsure, then celebrate steady progress.","Keep the challenge near floor level and remove hard or sharp objects from the area."],
      pretend:["Follow the role the child gives you and let their ideas guide the scene.","Get down to the child's eye level when speaking in character, and give them time to answer.","Introduce a small problem for the characters, then let the child invent the solution."]
    }
  },
  sr:{
    prepare:{none:"Oslobodite mali bezbedan prostor. Posebni materijali nisu potrebni.",paper:"Pripremite papir i bezbedne olovke ili bojice.",household:"Izaberite nekoliko bezbednih i nelomljivih kućnih predmeta.",ball:"Koristite mekanu loptu primerenu uzrastu i sklonite lomljive predmete."},
    steps:{
      run:["Oslobodite bezbedan prostor; početak i cilj označite samo ako igra koristi stazu.","Objasnite radnju ili pravilo igre i probajte jedan lak krug.","Neka dete izabere prijatan tempo i napravite pauzu kada mu je potrebna."],
      draw:["Objasnite kreativni zadatak i pokažite jednostavan primer.","Pustite svako dete da stvara bez ispravljanja.","Pozovite ih da opišu ili imenuju ono što su napravili."],
      ball:["Dogovorite bezbednu zonu za bacanje ili kotrljanje.","Zajedno probajte jedan spor krug.","Dodajte udaljenost, metu ili timski zadatak kada svi budu spremni."],
      build:["Pogledajte dostupne delove i zamislite cilj.","Gradite, testirajte i posmatrajte šta funkcioniše.","Promenite jednu stvar i probajte poboljšanu verziju."],
      search:["Dogovorite se šta igra traži: predmet, boju, zvuk, šaru ili promenu.","Pratite pravilo igre; tragove dajte samo ako su deo igre.","Proverite rezultat po pravilu igre: uporedite, prebrojte, prepoznajte ili objasnite promenu."],
      dance:["Pokažite prvi pokret ili ritam.","Neka svaki igrač doda ili promeni jedan pokret.","Završite zajedničkim izvođenjem celog niza."],
      story:["Izaberite junaka, mesto ili početnu rečenicu.","Naizmenično dodajte po jedan mali deo.","Zajedno završite priču i setite se najsmešnijeg trenutka."],
      nature:["Koristite samo materijale koje igra pominje; za neke aktivnosti ne treba ništa.","Pratite zadatak iz opisa: posmatranje, slaganje, slušanje, pokret ili disanje.","Završite kada ostvarite cilj igre; nemojte dodavati sakupljanje predmeta."],
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

const gameDetailOverrides = {
  "Movement Commands": {
    en:{prep:"Choose a clear, non-slip floor space away from furniture; no equipment is needed.",steps:["Call one movement at a time: star shape, crouch, lie down or a small jump.","Pause after each move so everyone can stand up or rest comfortably.","Start a new round with a slower move; anyone can skip a move or stop."],example:"Star shape, crouch, star shape, lie down and rest. Add just one small jump if the child still feels comfortable.",parent:"Avoid rapid jump–lie down repetitions. Alternate active moves with rest, keep jumps low, and let the child set the pace."},
    sr:{prep:"Izaberite slobodan pod koji se ne kliza, dalje od nameštaja; oprema nije potrebna.",steps:["Zadajte po jedan pokret: zvezda, čučanj, ležanje ili mali skok.","Napravite pauzu posle svakog pokreta da svi mogu udobno da ustanu ili odmore.","Novi krug počnite sporijim pokretom; svako može da preskoči pokret ili stane."],example:"Zvezda, čučanj, zvezda, lezi i odmori. Dodajte samo jedan mali skok ako se dete i dalje oseća prijatno.",parent:"Izbegavajte brzo ponavljanje skok–ležanje. Smenjujte pokret i odmor, neka skokovi budu niski i prepustite detetu tempo."}
  },
  "Memory Tray": {
    en:{example:"Place a cup, an apple and a toy on a tray. Let the child look, cover the tray, remove the apple, then ask what is missing.",parent:"Start with two or three familiar objects and give the child time to look. Add more only if they enjoy the challenge; do not turn recall into a test."},
    sr:{example:"Stavite čašu, jabuku i igračku na poslužavnik. Neka dete pogleda, pokrijte ga, sklonite jabuku, pa pitajte šta nedostaje.",parent:"Počnite sa dva ili tri poznata predmeta i dajte detetu vremena da ih zapamti. Dodajte još samo ako mu je izazov zabavan; nemojte igru pretvarati u test."}
  },
  "Compliment Ball": {
    en:{prep:"Use a soft ball and sit or stand in a comfortable circle.",steps:["Agree to pass the ball gently to someone in the circle.","Whoever catches it shares one specific, kind thing someone in the group did.","Pass to another person; anyone can skip a turn if they cannot think of something."],example:"Say, “I liked how you helped me put the blocks away,” then gently pass the ball to someone else.",parent:"Model sincere compliments about actions or effort, not appearance. Give children time to think and never pressure anyone to speak."},
    sr:{prep:"Pripremite mekanu loptu i sedite ili stanite u udoban krug.",steps:["Dogovorite se da loptu nežno dodajete nekome u krugu.","Ko uhvati loptu, kaže jednu konkretnu lepu stvar koju je neko iz grupe uradio.","Dodajte loptu drugoj osobi; svako može da preskoči red ako ne može da se seti nečega."],example:"Recite: „Svidelo mi se što si mi pomogao da sklonim kockice”, pa nežno dodajte loptu drugome.",parent:"Dajte iskren primer o nečijem postupku ili trudu, ne o izgledu. Sačekajte da dete smisli odgovor i ne primoravajte ga da govori."}
  },
  "Animal Parade": {
    en:{steps:["Choose one animal without telling the other players.","Cross a short, clear space using its movement and sound; walk instead of run.","Let the others guess, then switch who chooses and acts out the animal."],example:"Move slowly like an elephant, swing one arm as a trunk and make a gentle trumpet sound for others to guess.",parent:"Do not expect a perfect imitation. Offer the child a choice of two animals, and let them use a sound, gesture or both."},
    sr:{steps:["Izaberite životinju, ali je nemojte odmah otkriti ostalima.","Pređite kratak i slobodan prostor njenim pokretima i oglašavanjem; hodajte umesto da trčite.","Neka ostali pogode, pa zamenite ko bira i predstavlja životinju."],example:"Krećite se polako kao slon, jednom rukom napravite surlu i tiho zatrubite da ostali pogode.",parent:"Ne očekujte savršeno oponašanje. Ponudite detetu izbor između dve životinje i dozvolite mu da koristi zvuk, pokret ili oba."}
  },
  "Rainbow Hunt": {
    en:{steps:["Choose a safe area and name the rainbow colors to look for.","Find one safe object for each color and arrange the objects in rainbow order.","If a color is hard to find, skip it or draw it; do not climb or move heavy items."],example:"Start with red, yellow and blue. Find one safe object of each color and arrange them in that order.",parent:"Let the child choose which color to search for first; accept a drawing or a skipped color if an item is hard to find."},
    sr:{steps:["Izaberite bezbedan prostor i navedite boje duge koje tražite.","Pronađite po jedan bezbedan predmet svake boje i poređajte ih kao dugu.","Ako neku boju ne možete da pronađete, preskočite je ili je nacrtajte; nemojte se penjati ni pomerati teške predmete."],example:"Počnite od crvene, žute i plave: pronađite po jedan bezbedan predmet svake boje i poređajte ih tim redom.",parent:"Neka dete izabere koju boju će prvo tražiti; ako nešto ne može da pronađe, prihvatite crtež ili preskočite tu boju."}
  },
  "Color Dash": {
    en:{steps:["Choose an open area with safe objects within easy reach.","Call a color; players find and gently touch a matching object.","Take turns calling colors. Walk instead of run in a small or crowded space."],example:"Call “green” and let each player find a nearby green object to touch safely.",parent:"Keep the pace playful rather than competitive; in a tight room, change “race” to a walking search."},
    sr:{steps:["Izaberite slobodan prostor sa bezbednim predmetima nadohvat ruke.","Izgovorite boju; igrači pronađu predmet te boje i nežno ga dodirnu.","Naizmenično zadajte boje. U manjoj ili punoj prostoriji hodajte umesto da trčite."],example:"Recite „zeleno” i neka svaki igrač bezbedno dodirne neki zeleni predmet u blizini.",parent:"Neka cilj bude zabava, a ne takmičenje; u skučenoj prostoriji pretvorite trku u hodanje i traženje."}
  },
  "Robot Guide": {
    en:{steps:["Choose a short route on a clear floor and name a safe destination.","Give one clear command at a time, such as “forward”, “turn” or “stop”. The robot follows only the spoken commands.","Swap roles, then add one extra command if the route still feels easy."],example:"Say “take one step forward, turn left, stop” to guide the robot to a pillow.",parent:"Keep the route free of obstacles and agree that “stop” means stop immediately. Give the child time to think through each command."},
    sr:{steps:["Izaberite kratku stazu na slobodnom podu i odredite bezbedan cilj.","Zadajte po jednu jasnu komandu, poput „napred”, „okreni se” ili „stani”. Robot prati samo izgovorene komande.","Zamenite uloge, pa dodajte još jednu komandu ako je staza i dalje laka."],example:"Recite „napravi jedan korak napred, okreni se levo, stani” da biste robota doveli do jastuka.",parent:"Oslobodite stazu od prepreka i dogovorite se da „stani” znači odmah stati. Dajte detetu vremena da smisli svaku komandu."}
  },
  "Shadow Zoo": {
    en:{prep:"Find a clear wall and use a lamp or daylight; keep the light out of everyone's eyes.",steps:["Stand near the wall and make a simple animal shape with your hands or body.","Let the others guess the animal before adding a hint.","Swap roles and try a new animal; use a whole-body pose if hand shapes are tricky."],example:"Make rabbit ears with two fingers, or shape your arms like a bird's wings, and let others guess.",parent:"Accept imaginative guesses rather than expecting perfect hand shapes. Keep the light away from eyes and do not let children climb to reach the wall."},
    sr:{prep:"Pronađite slobodan zid i koristite lampu ili dnevno svetlo; svetlo ne usmeravajte nikome u oči.",steps:["Stanite blizu zida i rukama ili telom napravite jednostavan oblik životinje.","Neka ostali pogode životinju pre nego što dodate nagoveštaj.","Zamenite uloge i probajte novu životinju; ako su oblici rukama teški, koristite ceo položaj tela."],example:"Podignite dva prsta kao zečje uši ili rukama napravite krila ptice, pa pustite ostale da pogađaju.",parent:"Prihvatite maštovite odgovore umesto da očekujete savršene oblike. Pazite da svetlo ne ide u oči i ne dozvolite penjanje do zida."}
  },
  "Family Quiz": {
    en:{prep:"",steps:["Choose a familiar topic and ask one short question at a time.","Give the child time to think; offer a hint or two choices if needed.","Take turns asking questions. Keep it playful rather than scoring every answer."],example:"Ages 4–5: What animal says “meow”? (cat). Ages 6–8: Which animal has a trunk? (elephant). Ages 9–12: What is a baby frog called? (tadpole).",parent:"Match questions to the child's age and interests. Praise curiosity, allow a pass and let the child ask the next question."},
    sr:{prep:"",steps:["Izaberite poznatu temu i postavljajte jedno kratko pitanje odjednom.","Dajte detetu vremena da razmisli; po potrebi ponudite nagoveštaj ili dva odgovora.","Naizmenično postavljajte pitanja. Neka kviz bude zabava, ne ocenjivanje svakog odgovora."],example:"Uzrast 4–5: Koja životinja kaže „mjau”? (mačka). Uzrast 6–8: Koja životinja ima surlu? (slon). Uzrast 9–12: Kako se zove mladunče žabe? (punoglavac).",parent:"Prilagodite pitanja uzrastu i interesovanjima deteta. Pohvalite radoznalost, dozvolite da preskoči pitanje i prepustite mu sledeće."}
  },
  "Letter Clue Guess": {
    en:{steps:["Choose a letter and a category, such as animals, food or objects.","Give one clue for a word that starts with that letter and let the others guess.","If the word is hard to guess, add a clue or offer two possible answers, then switch roles."],example:"“M: a pet that meows?” (cat). “S: a large animal with a trunk?” (elephant). Try another category, such as foods or objects.",parent:"For younger children, say the starting sound and offer two choices. Older children can invent clues and choose the next letter."},
    sr:{steps:["Izaberite slovo i kategoriju, na primer životinje, hranu ili predmete.","Dajte jedan trag za reč koja počinje tim slovom i pustite ostale da pogađaju.","Ako je teško, dodajte trag ili ponudite dva odgovora, pa zamenite uloge."],example:"„Na slovo M, kućni ljubimac koji mjauče?” (mačka). „Na slovo S, velika životinja sa surlom?” (slon). Zatim izaberite hranu ili predmete.",parent:"Mlađoj deci izgovorite početni glas i ponudite dva izbora. Starija deca mogu sama smišljati tragove i birati sledeće slovo."}
  },
  "Tallest Tower": {
    en:{prep:"Gather safe, stable items such as blocks, plastic cups or small boxes. Build on the floor.",steps:["Start with a wide, stable base and choose items that are safe to stack.","Add one item at a time, checking that the tower stays balanced.","If it wobbles or falls, rebuild together and try a different base."],example:"Take turns adding one block to a wide base; cheer each time the tower reaches a new level.",parent:"Show excitement as the tower grows. Praise each careful addition and creative rebuild, not just the final height; keep it low and never use a chair to reach."},
    sr:{prep:"Pripremite bezbedne i stabilne predmete, poput kockica, plastičnih čaša ili manjih kutija. Gradite na podu.",steps:["Počnite širokom i stabilnom osnovom i birajte predmete koje je bezbedno slagati.","Dodajte po jedan predmet i proverite da li kula ostaje stabilna.","Ako se zaljulja ili sruši, gradite ponovo zajedno i probajte drugačiju osnovu."],example:"Naizmenično dodajte po jednu kockicu na široku osnovu i obradujte se svakom novom nivou kule.",parent:"Pokažite oduševljenje dok kula raste. Pohvalite svaki pažljiv pokušaj i novu ideju, ne samo konačnu visinu; gradite nisko i ne koristite stolicu za dohvat."}
  },
  "Secret Sound": {
    en:{steps:["Choose a safe sound source, such as paper, a clap or a gentle tap on a cup.","Make the sound out of sight while everyone else keeps their eyes open and guesses its source.","Switch roles and try another sound; give a hint only if the guessers ask."],example:"Crumple a sheet of paper behind your back and ask, “What made that sound?”",parent:"Use familiar, child-safe objects and make one sound at a time. No one needs to close their eyes; let the child listen without rushing to answer."},
    sr:{steps:["Izaberite bezbedan izvor zvuka, poput papira, pljeska ili laganog kucanja po čaši.","Napravite zvuk van vidokruga dok ostali drže oči otvorene i pogađaju šta ga je izazvalo.","Zamenite uloge i probajte drugi zvuk; nagoveštaj dajte samo ako ga zatraže."],example:"Zgužvajte papir iza leđa i pitajte: „Šta je proizvelo ovaj zvuk?”",parent:"Koristite poznate i bezbedne predmete i pravite po jedan zvuk. Niko ne mora da zatvara oči; pustite dete da sluša bez žurbe."}
  },
  "Adventure Path": {
    en:{steps:["Make a short route on the floor with clear turns and a taped line; keep all obstacles low and stable.","Try one movement at a time: walk to a turn, make a small jump on the floor, then follow a balance line.","Take turns changing one part of the route. Skip any move that feels unsafe or uncomfortable."],example:"Follow a taped line, turn around a cushion on the floor, then do one small jump over a line of tape.",parent:"Let the child choose or change a challenge. Keep the route at floor level, clear sharp furniture, and praise careful attempts rather than speed."},
    sr:{steps:["Napravite kratku stazu na podu sa jasnim skretanjima i linijom od trake; prepreke neka budu niske i stabilne.","Probajte po jedan pokret: hodajte do skretanja, napravite mali skok na podu, pa pratite liniju za ravnotežu.","Naizmenično menjajte po jedan deo staze. Preskočite svaki pokret koji nije bezbedan ili prijatan."],example:"Pratite liniju od trake, obiđite jastuk na podu i zatim jednom preskočite drugu liniju trake.",parent:"Neka dete bira ili menja izazov. Staza neka ostane na podu, sklonite oštre predmete i pohvalite pažljivo izvođenje, ne brzinu."}
  },
  "Ball Balance": {
    en:{prep:"Choose a soft, lightweight ball that is easy to hold.",steps:["Choose a short, clear route between two floor markers.","Carry the ball on open palms or between forearms; keep it away from the head and neck.","Walk to the marker, return, and try another comfortable hold if the child wants."],example:"Walk a few steps carrying a soft ball between your forearms, then try again with it resting on open palms.",parent:"Keep the route short and never ask the child to balance the ball on their head or neck. Let them hold it in their hands if that is easier."},
    sr:{prep:"Izaberite mekanu i laganu loptu koju dete može lako da drži.",steps:["Odredite kratku i slobodnu stazu između dve oznake na podu.","Nosite loptu na otvorenim dlanovima ili između podlaktica; držite je dalje od glave i vrata.","Prošetajte do oznake i nazad, pa probajte drugi udoban položaj ako dete želi."],example:"Napravite nekoliko koraka noseći mekanu loptu između podlaktica, pa probajte ponovo sa loptom na otvorenim dlanovima.",parent:"Neka staza bude kratka i ne tražite od deteta da balansira loptu na glavi ili vratu. Ako je lakše, neka je nosi rukama."}
  },
  "Paper Airplane Test": {
    en:{prep:"Use one sheet of paper for each plane; no other materials are needed.",steps:["Fold a simple paper plane and agree on a clear launch line and direction.","Throw gently one at a time, then notice whether it flew straight, far or turned.","Change one fold or wing shape and test again; take turns as the flyer and observer."],example:"If the plane turns left, check whether both wings match, adjust one fold and try another gentle throw.",parent:"Keep launches aimed away from faces and breakable items. Praise careful experiments and observations, not just the longest flight."},
    sr:{prep:"Za svaki avion pripremite po jedan list papira; drugi materijali nisu potrebni.",steps:["Napravite jednostavan papirni avion i dogovorite slobodnu liniju i smer bacanja.","Bacajte blago, jedan po jedan, pa primetite da li avion leti pravo, daleko ili skreće.","Promenite jedan pregib ili oblik krila i ponovo probajte; menjajte se u bacanju i posmatranju."],example:"Ako avion skreće ulevo, proverite da li su krila ista, promenite jedan pregib i bacite ga ponovo, nežno.",parent:"Avion usmeravajte dalje od lica i lomljivih predmeta. Pohvalite pažljivo isprobavanje i zapažanja, a ne samo najduži let."}
  },
  "Human Sculpture": {
    en:{steps:["Choose a simple object or shape for the group to make.","Arrange comfortable body poses with feet on the floor; do not lift or pull anyone.","Hold the pose briefly, then relax and let another player choose the next shape."],example:"Work together to make a tree: one person stands as the trunk while others form branches with their arms.",parent:"Keep poses comfortable and brief. Help the group communicate instead of physically moving a child into position."},
    sr:{steps:["Izaberite jednostavan predmet ili oblik koji ćete zajedno predstaviti.","Zauzmite udobne poze sa stopalima na podu; nemojte podizati ni vući druge.","Kratko zadržite pozu, opustite se, pa neka sledeći igrač izabere novi oblik."],example:"Napravite drvo: jedna osoba je stablo, a ostali rukama predstavljaju grane.",parent:"Neka poze budu udobne i kratke. Dogovarajte se rečima umesto da fizički nameštate dete."}
  },
  "Paper Maze": {
    en:{example:"Draw one start, one finish and two or three dead ends. Swap papers and use a pencil to trace a path to the finish.",parent:"For a bonus challenge, draw a tiny treasure at the finish and add one extra dead end for your partner to navigate."},
    sr:{example:"Nacrtajte početak, cilj i dve-tri slepe ulice. Zamenite papire i olovkom pratite put do cilja.",parent:"Za bonus izazov nacrtajte malo blago na cilju i dodajte još jednu slepu ulicu koju druga osoba treba da izbegne."}
  },
  "Question Train": {
    en:{example:"“Where should we go first?” “To the zoo.” “Which animal will we visit?” “The elephants.” Each answer adds a stop to the trip.",parent:"For a bonus, pick a theme such as animals, places or food and make each new question connect to the previous stop. Anyone can pass a turn."},
    sr:{example:"„Kuda prvo putujemo?” „U zoološki vrt.” „Koju životinju ćemo posetiti?” „Slonove.” Svaki odgovor dodaje novu stanicu putovanju.",parent:"Za bonus izaberite temu, poput životinja, mesta ili hrane, pa neka se svako novo pitanje nadoveže na prethodnu stanicu. Svako može da preskoči red."}
  },
  "Postcard Puzzle": {
    en:{example:"Draw a beach with a sun, umbrella and bucket. An adult cuts the picture into four large pieces; mix them and take turns putting it back together.",parent:"For a bonus, hide one piece and describe what is missing before revealing it. An adult should handle the scissors."},
    sr:{example:"Nacrtajte plažu sa suncem, suncobranom i kantom. Odrasla osoba iseče sliku na četiri velika dela; pomešajte ih i naizmenično je sastavljajte.",parent:"Za bonus sakrijte jedan deo i opišite šta nedostaje pre nego što ga otkrijete. Makazama rukuje odrasla osoba."}
  },
  "Guess the Leader": {
    en:{example:"One player turns away. The group chooses a leader who slowly raises and lowers their arms; everyone copies. The player turns back toward the group and guesses who started the movement.",parent:"Keep movements slow and comfortable. Let anyone pass on being the observer, and avoid sudden or unsafe actions."},
    sr:{example:"Jedan igrač se okrene leđima. Grupa bira vođu koji polako podiže i spušta ruke; svi ga oponašaju. Igrač se okrene nazad prema grupi i pogađa ko je započeo pokret.",parent:"Neka pokreti budu spori i prijatni. Svako može da preskoči ulogu posmatrača; izbegavajte nagle ili nebezbedne pokrete."}
  },
  "Don't Step on a Crack": {
    en:{example:"Walk at a normal pace along a quiet, flat stretch of pavement, with an adult beside you. Skip the game near crossings, driveways or uneven ground.",parent:"Keep attention on the path ahead, not only on the cracks. Stop or change the game whenever the pavement is busy or unsafe."},
    sr:{example:"Hodajte uobičajenim korakom po mirnom i ravnom delu trotoara, uz odraslu osobu. Preskočite igru kod prelaza, prilaza za kola ili neravnog tla.",parent:"Gledajte put ispred sebe, a ne samo pukotine. Prekinite ili promenite igru ako je trotoar prometan ili nebezbedan."}
  },
  "Guess Who I Am": {
    en:{example:"Think of a familiar story character. Others can ask, “Are you from a book?” or “Do you wear a crown?” until they guess.",parent:"Choose someone all players can know, allow broad yes-or-no questions and let anyone pass or switch roles."},
    sr:{example:"Zamislite poznat lik iz priče. Ostali mogu da pitaju: „Da li si iz knjige?” ili „Da li nosiš krunu?” dok ne pogode.",parent:"Birajte osobu ili lik koga svi mogu da poznaju, prihvatite jednostavna pitanja i dozvolite svakome da preskoči red ili promeni ulogu."}
  },
  "One-Minute Challenge": {
    en:{prep:"Choose a safe, simple task and set a one-minute timer.",example:"Set a one-minute timer and see how many plastic cups you can stack. Swap roles and try again.",parent:"Compare each player's result with their own previous try, not with others. If a timer feels stressful, count down together instead."},
    sr:{prep:"Izaberite bezbedan, jednostavan zadatak i podesite tajmer na minut.",example:"Podesite tajmer na minut i proverite koliko plastičnih čaša možete da složite. Zamenite uloge i pokušajte ponovo.",parent:"Uporedite pokušaj svakog igrača sa njegovim prethodnim, ne sa drugima. Ako tajmer stvara pritisak, odbrojavajte zajedno."}
  },
  "Slow-Motion Race": {
    en:{example:"Walk toward the finish as slowly as possible, keeping both feet on the floor and using small, steady steps.",parent:"For a bonus, pause halfway in a comfortable statue pose for three seconds, then continue slowly. Focus on control, not finishing first."},
    sr:{example:"Krećite se ka cilju što sporije, držeći oba stopala na podu i praveći male, stabilne korake.",parent:"Za bonus se na polovini staze zaustavite u udobnoj pozi statue na tri sekunde, pa nastavite polako. Cilj je kontrola, ne prvo mesto."}
  },
  "Magic Object": {
    en:{example:"Pretend a wooden spoon is a microphone, or a cardboard tube is a telescope. Let the others guess from your actions.",parent:"For a bonus, let others suggest a new use for the object. Choose only safe, lightweight items; never use sharp or breakable objects."},
    sr:{example:"Zamislite da je drvena kašika mikrofon ili kartonska cev teleskop. Pokažite čemu služi, pa neka ostali pogode.",parent:"Za bonus neka ostali predlože novu namenu predmeta. Birajte samo bezbedne i lagane stvari, bez oštrih ili lomljivih predmeta."}
  },
  "Name That Mime": {
    en:{example:"Mime a simple action such as sweeping, stretching or feeding a pet while the others guess.",parent:"For a bonus challenge, mime two actions in order, such as waking up and brushing your teeth, and let others guess both."},
    sr:{example:"Bez reči odglumite jednostavnu radnju, poput metenja, istezanja ili hranjenja ljubimca, dok ostali pogađaju.",parent:"Za bonus pantomimišite dve radnje zaredom — na primer buđenje pa pranje zuba — a ostali neka ih pogode po redu."}
  },
  "Statue Museum": {
    en:{example:"Each player chooses a simple statue pose. The visitor walks slowly through the museum and guesses what each statue represents.",parent:"For a bonus, the visitor turns away while one statue quietly changes its pose. The visitor looks back and guesses which statue changed."},
    sr:{example:"Svako izabere jednostavnu pozu statue. Posetilac polako obilazi muzej i pogađa šta koja statua predstavlja.",parent:"Za bonus, posetilac se okrene dok jedna statua tiho promeni pozu. Kada se vrati, pogađa koja se statua promenila."}
  },
  "Breathing Buddy": {
    en:{example:"Lie down comfortably and place a small stuffed toy on your belly. Notice it rise and fall as you breathe normally.",parent:"For a bonus, imagine the toy is sailing on gentle waves as your belly rises and falls. Keep breathing natural; stop if it feels uncomfortable."},
    sr:{example:"Udobno lezite i stavite malu plišanu igračku na stomak. Posmatrajte kako se blago podiže i spušta dok dišete prirodno.",parent:"Za bonus zamislite da igračka plovi na blagim talasima dok se stomak podiže i spušta. Dišite prirodno i prekinite ako je detetu neprijatno."}
  },
  "Treasure Guards": {
    en:{example:"Place a small toy in the middle. Move around it and, when the music stops, freeze like a shield or gate protecting it.",parent:"For a bonus, one player becomes an explorer and guesses how each frozen guard is protecting the treasure. Walk slowly and do not touch anyone."},
    sr:{example:"Stavite malu igračku na sredinu. Krećite se oko nje i, kada muzika stane, ukočite se kao štit ili kapija koja je čuva.",parent:"Za bonus, jedan čuvar sakrije igračku-blago iza leđa dok se istraživač okrene. Istraživač se zatim okrene i pogađa kod koga je blago."}
  },
  "Hide and Seek": {
    en:{prep:"Choose a small, agreed play area. Stay away from stairs, roads, closets and places the supervising adult cannot see.",example:"Count slowly to ten beside a tree while the others hide within the agreed area. Find everyone, then switch roles.",parent:"For younger children, hide a toy and look for it together. Keep everyone in sight and set a clear boundary before starting."},
    sr:{prep:"Dogovorite mali prostor za igru. Držite se dalje od stepenica, puta, ormara i mesta koja odrasla osoba ne može da vidi.",example:"Polako brojite do deset pored drveta dok se ostali kriju unutar dogovorenog prostora. Pronađite ih, pa zamenite uloge.",parent:"Za mlađu decu sakrijte igračku i tražite je zajedno. Držite decu na oku i jasno odredite granice pre početka."}
  },
  "Seed and Tree": {
    en:{example:"Curl up small like a seed. Slowly uncurl into a sprout, then stand tall and stretch your arms as branches.",parent:"For a bonus, one player makes a gentle breeze by softly fanning their hands. The tree sways only while the breeze blows, then grows still."},
    sr:{example:"Sklupčajte se kao malo seme. Polako se odmotajte u klicu, zatim ustanite i raširite ruke kao grane.",parent:"Za bonus, jedan igrač pravi blag povetarac nežnim mahanjem ruku. Drvo se njiše samo dok vetar duva, pa se umiri."}
  },
  "Superhero Training": {
    en:{example:"A stuffed toy is lost. Walk carefully and use kind words to guide it to a safe home base.",parent:"For a bonus, repeat the rescue mission while moving as quietly as possible, like a stealthy superhero."},
    sr:{example:"Plišani drug se izgubio. Pažljivo hodajte i lepim rečima ga odvedite do bezbedne baze.",parent:"Za bonus ponovite spasavanje, ali se do baze krećite što tiše, kao heroj u tajnoj misiji."}
  }
};

function preparationForGame(game, language) {
  const text=`${game.title} ${game.description}`.toLowerCase();
  const localized=(en,sr)=>language==="sr"?sr:en;
  if(["Family Quiz","Letter Clue Guess"].includes(game.title))return "";
  if(text.includes("leaf shadow trace"))return localized("Prepare one safe fallen leaf, paper, a child-safe pencil and a sunny spot.","Pripremite jedan bezbedan opali list, papir, bezbednu olovku i sunčano mesto.");
  if(/\b(maze|labyrinth)\b/.test(text))return localized("Gather safe items you have, such as paper, cups or cushions, and a small toy. Build on a clear, stable surface.","Pripremite bezbedne predmete koje imate, poput papira, čaša ili jastuka, i malu igračku. Lavirint pravite na stabilnoj i slobodnoj površini.");
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
  if(game.material==="none")return "";
  return detailContent[language].prepare[game.material];
}

const state = {
  language:"sr", step:0, answers:{}, view:"recommended", collection:null, selectedGame:null,
  profile:JSON.parse(localStorage.getItem("playPicksProfile")||"null"),
  likes:JSON.parse(localStorage.getItem("playPicksLikes")||"[]"),
  saveCounts:JSON.parse(localStorage.getItem("playPicksSaveCounts")||"{}")
};
state.likes.forEach(id=>{state.saveCounts[id]=Math.max(1,Number(state.saveCounts[id])||0)});
if(state.likes.length)localStorage.setItem("playPicksSaveCounts",JSON.stringify(state.saveCounts));
const $=selector=>document.querySelector(selector);
const questions=()=>questionSets[state.language];
const t=()=>copy[state.language];
const choice=(key)=>questions().find(q=>q[0]===key)[4].find(c=>c[0]===state.answers[key]);

function translate() {
  const c=t();
  document.documentElement.lang=state.language==="sr"?"sr-Latn":"en"; document.title=c.pageTitle; $("#brandLabel").textContent=c.brand;
  $('meta[name="description"]').content=c.description; $("#homeButton").ariaLabel=c.home; $(".language-switcher").ariaLabel=c.language;
  $("#heroTitle").innerHTML=c.hero; $("#heroCopy").textContent=c.heroCopy;
  $("#progress").ariaLabel=c.progress; $("#editButton").textContent=c.edit;
  $("#profileLabel").textContent=state.profile?.name||c.noProfile;
  $("#profileAvatar").textContent=state.profile?.name?.[0]||"?"; $("#profileTitle").textContent=c.profileTitle; $("#profileCopy").textContent=c.profileCopy;
  $("#profileNameLabel").textContent=c.name; $("#profileSaveButton").textContent=c.saveProfile; $("#deleteProfileButton").textContent=c.deleteProfile;
  $("#feedbackLabel").textContent=c.feedbackLabel; $("#feedbackHint").textContent=c.feedbackHint; $("#feedbackButton").textContent=c.feedbackButton;
  $("#startButton").innerHTML=`${c.findGame} <span>→</span>`;
  $("#trustTwo").textContent=c.trust[0]; $("#trustThree").textContent=c.trust[1];
  $("#dailyLabel").textContent=c.dailyLabel;
  $("#dailyTitle").textContent=c.dailyTitle; $("#dailyCopy").textContent=c.dailyCopy; $("#dailyButton").textContent=c.dailyButton;
  $("#benefitOneTitle").textContent=c.benefitOneTitle; $("#benefitOneCopy").textContent=c.benefitOneCopy;
  $("#benefitTwoTitle").textContent=c.benefitTwoTitle; $("#benefitTwoCopy").textContent=c.benefitTwoCopy;
  $("#benefitThreeTitle").textContent=c.benefitThreeTitle; $("#benefitThreeCopy").textContent=c.benefitThreeCopy;
  $("#safetyTitle").textContent=c.safetyTitle; $("#safetyCopy").textContent=c.safetyCopy;
  $("#categoryTitle").textContent=c.bySituation; $("#skillTitle").textContent=c.bySkill;
  $$(".nav-button").forEach((b,i)=>b.textContent=c.nav[i]); $$(".language-button").forEach(b=>{const active=b.dataset.language===state.language;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",active)});
  renderDaily();
}
function $$(selector){return document.querySelectorAll(selector)}
function renderProgress(){ $("#progress").style.gridTemplateColumns=`repeat(${questions().length}, minmax(0, 1fr))`; $("#progress").innerHTML=questions().map((q,i)=>`<div class="progress-step ${i===state.step?"is-active":""} ${i<state.step?"is-complete":""}" data-number="${i+1}">${q[1]}</div>`).join("") }
function renderQuestion(){
  const q=questions()[state.step]; $("#stepLabel").textContent=t().step(state.step+1,questions().length); $("#questionTitle").textContent=q[2]; $("#questionHint").textContent=q[3];
  $("#questionNumber").textContent=String(state.step+1).padStart(2,"0"); $("#choiceGrid").innerHTML=q[4].map(c=>`<button class="choice ${state.answers[q[0]]===c[0]?"is-selected":""}" data-choice="${c[0]}" type="button"><span class="choice-icon">${c[1]}</span><strong>${c[2]}</strong>${c[3]?`<small>${c[3]}</small>`:""}</button>`).join("");
  $$(".choice").forEach(b=>{b.setAttribute("aria-pressed",String(state.answers[q[0]]===b.dataset.choice));b.onclick=()=>{state.answers[q[0]]=b.dataset.choice;renderQuestion()}});
  $("#nextButton").innerHTML=`${state.step===questions().length-1?t().show:t().next} <span>→</span>`; $("#nextButton").disabled=!state.answers[q[0]];
  $("#backButton").textContent=`← ${t().back}`; $("#backButton").classList.toggle("is-visible",state.step>0); renderProgress();
}
function playerCount(v){return v==="3-4"?3:v==="5+"?5:Number(v)}
function score(game){
  if(!state.answers.age)return 0;
  const [amin,amax]=state.answers.age.split("-").map(Number), players=playerCount(state.answers.players); let s=0;
  if(game.minAge<=amin&&game.maxAge>=amax)s+=4; if(game.minPlayers<=players&&game.maxPlayers>=players)s+=3;
  const placeMatch=state.answers.place==="either"||game.place==="either"||game.place===state.answers.place||(state.answers.place==="travel"&&travelFriendly(game));
  if(placeMatch)s+=3;
  if(game.duration<=Number(state.answers.duration))s+=3; if(game.material==="none"||game.material===state.answers.material)s+=3;
  if(game.activity===state.answers.activity)s+=4; return s;
}
function localized(game){return state.language==="sr"?[game.srTitle,game.srDescription]:[game.title,game.description]}
function dailyGame(){const now=new Date();const day=Math.floor(new Date(now.getFullYear(),now.getMonth(),now.getDate()).getTime()/86400000);return games[((day%games.length)+games.length)%games.length]}
function renderDaily(){
  const game=dailyGame(), [title,description]=localized(game);
  $("#dailyTitle").textContent=title; $("#dailyCopy").textContent=description; $("#dailyButton").textContent=`${t().details} →`;
  $("#dailyMeta").innerHTML=`<span>${game.duration} ${t().min}</span><span>${t().place[game.place]}</span><span>${t().ages(game.minAge,game.maxAge)}</span>`;
}
function travelFriendly(game){
  const carGame=game.material==="none"&&game.duration<=15&&game.activity!=="active"&&game.place!=="outdoors"&&["story","search"].includes(game.scene);
  const movementBreak=game.material==="none"&&game.duration<=15&&game.activity!=="calm"&&["pretend","run","dance","balance"].includes(game.scene);
  return carGame||movementBreak;
}
function categoryMatches(game,key){
  const rules={
    rainy:g=>(g.place==="indoors"&&g.activity!=="active")||(g.place==="either"&&["story","pretend","search","draw","build"].includes(g.scene)&&g.activity!=="active"),
    summer:g=>g.place==="outdoors"||(g.place==="either"&&["nature","run","ball","balance"].includes(g.scene)),
    winter:g=>(g.place==="indoors"||g.place==="either")&&g.activity==="active"&&["run","dance","balance","pretend"].includes(g.scene),
    holiday:g=>g.maxPlayers>=4&&g.skill==="social",
    travel:travelFriendly, party:g=>g.maxPlayers>=8
  };
  return rules[key]?.(game)??false;
}
function collectionGames(){
  const direct=state.collection?.type==="skill"?games.filter(g=>g.skill===state.collection.key):games.filter(g=>categoryMatches(g,state.collection?.key));
  return direct.slice(0,20);
}
function gameList(){
  if(state.view==="collection")return collectionGames();
  if(state.view==="saved")return games.filter(g=>state.likes.includes(g.id));
  if(state.view==="popular"){
    return [...games].sort((a,b)=>(Number(state.saveCounts[b.id])||0)-(Number(state.saveCounts[a.id])||0)||a.id-b.id).slice(0,20);
  }
  return [...games].sort((a,b)=>score(b)-score(a)||a.id-b.id).slice(0,20);
}
function gameCard(game){
  const [title,description]=localized(game), liked=state.likes.includes(game.id);
  const saveLabel=liked?t().savedAction:t().saveAction;
  return `<article class="activity" data-detail="${game.id}" tabindex="0"><img class="activity-image" src="${game.image}" alt="${t().image(title)}"><div class="activity-content"><div class="activity-topline"><h3>${title}</h3><button class="like-button ${liked?"is-liked":""}" data-like="${game.id}" aria-label="${saveLabel}" aria-pressed="${liked}">♥ <span class="save-label">${saveLabel}</span></button></div><p>${description}</p><div class="activity-meta"><span class="tag">${game.duration} ${t().min}</span><span class="tag">${t().place[game.place]}</span><span class="tag">${t().ages(game.minAge,game.maxAge)}</span></div><button class="details-button" data-open-detail="${game.id}">${t().details}</button></div></article>`;
}
function renderResults(){
  const list=gameList(), c=t(); $("#questionCard").hidden=true; $("#progress").hidden=true; $("#results").hidden=false;
  $("#landing").hidden=true; $("#explorePage").hidden=true;
  const showCollectionHeading=state.view==="popular"||state.view==="saved";
  $("#collectionHeading").hidden=!showCollectionHeading;
  if(showCollectionHeading){$("#collectionTitle").textContent=state.view==="popular"?c.popular:c.saved;$("#collectionSummary").textContent=state.view==="popular"?c.collectionSummary.popular:c.collectionSummary.saved;}
  $("#resultsToolbar").hidden=state.view!=="recommended";
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
let detailDemoTimer=null;
const gameBonusIdeas = {
  "Story Circle": {en:"Add an unexpected visitor who changes what the characters planned.",sr:"Uvedite neočekivanog gosta koji promeni planove junaka."},
  "Mystery Drawing": {en:"After the guess, add one tiny detail that changes what the object is used for.",sr:"Kada pogode predmet, dodajte sitnicu koja mu menja namenu."},
  "Cushion Islands": {en:"Move one cushion after a crossing and plan a new safe route.",sr:"Posle prelaska pomerite jedan jastuk i osmislite novu bezbednu putanju."},
  "Target Toss": {en:"After two gentle hits, move the target one small step farther away.",sr:"Posle dva nežna pogotka pomerite metu za jedan mali korak dalje."},
  "Nature Faces": {en:"Make a second face showing the opposite feeling using only fallen items.",sr:"Od opalih delova napravite drugo lice sa suprotnim osećanjem."},
  "Freeze Dance": {en:"Choose a character for the next freeze pose, then let others guess it.",sr:"Za sledeće zamrzavanje izaberite lik, pa neka ga ostali pogode."},
  "Cup Castle": {en:"Add a gate wide enough for a small toy to pass through.",sr:"Dodajte kapiju kroz koju može da prođe mala igračka."},
  "Funny Portrait": {en:"Add one funny accessory without lifting the pencil from the paper.",sr:"Dodajte smešan detalj bez podizanja olovke sa papira."},
  "Cloud Shapes": {en:"Find two clouds that could belong in the same story and connect them.",sr:"Pronađite dva oblaka iz iste priče i smislite kako su povezani."},
  "Movement Memory": {en:"Try repeating the growing movement sequence in reverse order.",sr:"Pokušajte da ponovite niz pokreta obrnutim redosledom."},
  "Mini Bowling": {en:"After a roll, arrange the cups in a new pattern for the next turn.",sr:"Posle bacanja poređajte čaše u novi raspored za sledeći pokušaj."},
  "Garden Relay": {en:"Carry a fallen leaf on an open palm between the markers at walking pace.",sr:"Prenesite opali list na otvorenom dlanu između oznaka, hodajući."},
  "Treasure Map": {en:"Add a three-symbol map key and let a partner decode the route.",sr:"Dodajte legendu od tri simbola i pustite partnera da otkrije put."},
  "Sock Basketball": {en:"Mark two safe throwing spots and compare which one is easier to score from.",sr:"Označite dva bezbedna mesta za bacanje i uporedite sa kog je lakše pogoditi."},
  "Mirror Moves": {en:"Let the leader change one slow movement without speaking; the partner follows.",sr:"Vođa neka bez reči promeni jedan spor pokret, a partner ga prati."},
  "Texture Safari": {en:"Find two safe objects with matching textures and explain the match.",sr:"Pronađite dva bezbedna predmeta iste teksture i objasnite šta im je zajedničko."},
  "Cardboard City": {en:"Add a crossing for a toy and decide which route is safest.",sr:"Dodajte prelaz za igračku i zajedno izaberite najbezbedniji put."},
  "Whisper Chain": {en:"Pass a four-word message and compare the first and last versions.",sr:"Prenesite poruku od četiri reči i uporedite prvu i poslednju verziju."},
  "Leaf Race": {en:"Make clear start and finish lines and predict which leaf will arrive first.",sr:"Označite jasan start i cilj, pa pogodite koji list će prvi stići."},
  "Shape Explorer": {en:"Use two safe objects to make one of the shapes you found.",sr:"Od dva bezbedna predmeta napravite jedan oblik koji ste pronašli."},
  "Floor Is Lava": {en:"After crossing, retrace the same route without stepping off the safe spots.",sr:"Posle prelaska ponovite istu putanju bez silaska sa bezbednih mesta."},
  "Backyard Olympics": {en:"Give a medal for careful effort or a creative idea, not just winning.",sr:"Dodelite medalju za pažljiv trud ili maštovitu ideju, ne samo za pobedu."},
  "Make a Goal": {en:"Move the goal slightly farther away after a successful gentle roll.",sr:"Posle uspešnog nežnog kotrljanja pomerite gol malo dalje."},
  "Sound Orchestra": {en:"Switch conductors and let the new leader change one sound at a time.",sr:"Zamenite dirigenta i neka novi vođa menja po jedan zvuk."},
  "Tape-Line Balance": {en:"At each turn in the line, pause in a steady statue pose.",sr:"Na svakom skretanju linije zastanite u stabilnoj pozi statue."},
  "Monster Steps": {en:"Give the monster a quiet sound to match each kind of step.",sr:"Smislite tihi zvuk koji odgovara svakoj vrsti koraka čudovišta."},
  "Bridge Builders": {en:"Add one folded paper layer and see if the bridge still holds the same toy.",sr:"Dodajte jedan sloj presavijenog papira i proverite da li most i dalje drži istu igračku."},
  "Weather Reporter": {en:"Invent a forecast for an imaginary planet and show its weather with a gesture.",sr:"Smislite prognozu za zamišljenu planetu i pokažite vreme jednim pokretom."},
  "Dot-to-Doodle": {en:"After someone guesses the picture, add one detail to turn it into something else.",sr:"Kada neko pogodi crtež, dodajte detalj i pretvorite ga u nešto drugo."},
  "Quiet Detective": {en:"Remember three small details, then tell the group one that has changed.",sr:"Zapamtite tri sitna detalja, pa recite grupi koji se promenio."},
  "Obstacle Mission": {en:"Let the next player choose one safe way to go around the cushion.",sr:"Neka sledeći igrač izabere jedan bezbedan način da zaobiđe jastuk."},
  "Story Dice Without Dice": {en:"Make one chosen object the helper that solves the story’s problem.",sr:"Neka izabrani predmet bude pomoćnik koji rešava problem u priči."},
  "Pebble Patterns": {en:"Let a partner look briefly, cover the pattern and rebuild it from memory.",sr:"Neka partner kratko pogleda šaru, zatim je pokrijte i složite je po sećanju."},
  "Copycat Clap": {en:"Repeat the rhythm using knee taps instead of claps for one round.",sr:"Jedan krug ponavljajte ritam tapkanjem po kolenima umesto pljeskanjem."},
  "Paper Costume": {en:"Add one paper accessory that hints at the character’s special job.",sr:"Dodajte papirni detalj koji otkriva poseban posao lika."},
  "Alphabet Hunt": {en:"Find safe objects for the first three letters of a player’s name.",sr:"Pronađite bezbedne predmete za prva tri slova nečijeg imena."},
  "Emotion Charades": {en:"Show the same feeling first as tiny, then as a very big pose.",sr:"Isto osećanje pokažite prvo sitnom, pa veoma velikom pozom."},
  "Chalk River": {en:"Draw one safe island in the river and choose how to reach it.",sr:"Nacrtajte bezbedno ostrvo u reci i osmislite kako da stignete do njega."},
  "Pass the Sketch": {en:"Keep the last detail secret and reveal the finished drawing together.",sr:"Sakrijte poslednji detalj i zajedno otkrijte gotov crtež."},
  "Tiny Garden Design": {en:"Add a clear path and a small resting spot for a toy visitor.",sr:"Dodajte jasnu stazu i malo odmorište za gosta-igračku."},
  "Hot and Cold Hunt": {en:"Give the seeker only three clues before they make a guess.",sr:"Dajte tragaču samo tri nagoveštaja pre nego što pogodi."},
  "Balloon Keep-Up": {en:"Take turns tapping with the left and right hand, using gentle touches.",sr:"Naizmenično dodirujte balon levom i desnom rukom, sasvim nežno."},
  "Living Room Camp": {en:"Invent a quiet animal visitor and act out how the campers welcome it.",sr:"Izmislite tihog životinjskog gosta i odglumite kako ga kamperi dočekuju."},
  "Rhythm Leader": {en:"Change one sound in the pattern and see if everyone notices.",sr:"Promenite jedan zvuk u ritmu i proverite da li su svi primetili."},
  "What Changed": {en:"Start with three objects; in the next round change two for an extra challenge.",sr:"Počnite sa tri predmeta, a u sledećem krugu promenite dva za dodatni izazov."},
  "Paper Puppet Show": {en:"Make one puppet ask a question that the other puppet must answer in character.",sr:"Neka jedna lutka postavi pitanje, a druga odgovori u svojoj ulozi."},
  "Cone-Free Slalom": {en:"Try the same route with gentle side steps instead of forward steps.",sr:"Istu stazu pređite blagim bočnim koracima umesto koraka napred."},
  "One-Line Creature": {en:"Give the creature a name and one special way it moves.",sr:"Dajte biću ime i osmislite jedan poseban način na koji se kreće."},
  "Museum Guide": {en:"Let a visitor choose one exhibit and ask the guide one curious question.",sr:"Neka posetilac izabere jedan eksponat i postavi vodiču radoznalo pitanje."},
  "Balance Delivery": {en:"Carry the same light item back along the route using both hands.",sr:"Vratite isti lagani predmet istom stazom, držeći ga obema rukama."},
  "Category Countdown": {en:"Try the same category again, but name items in reverse alphabetical order.",sr:"Ponovite kategoriju, ali navodite stvari obrnutim abecednim redom."},
  "Spider Web Route": {en:"Add one new safe turn to the route and show a partner the way through.",sr:"Dodajte jedno bezbedno skretanje stazi i pokažite partneru put kroz nju."},
  "Nature Bingo": {en:"Choose a new row of three things to spot without collecting them.",sr:"Izaberite novi red od tri stvari koje treba uočiti, bez sakupljanja."},
  "Bounce and Catch": {en:"Add one quiet clap after the bounce and before the catch.",sr:"Dodajte jedan tihi pljesak posle odskoka, pre hvatanja."},
  "Dance Traffic Lights": {en:"Add a blue signal for a slow turn, then return to the usual colors.",sr:"Dodajte plavi znak za spori okret, pa se vratite uobičajenim bojama."},
  "Box Invention": {en:"Give the invention one problem to solve and demonstrate how it helps.",sr:"Zadajte izumu jedan problem i pokažite kako pomaže da se reši."},
  "Scent Explorer": {en:"Choose two familiar scents and invent a place where both might be found.",sr:"Izaberite dva poznata mirisa i zamislite mesto na kom biste mogli naći oba."},
  "Symmetry Art": {en:"Fold the page to check the two sides, then add a matching detail to each.",sr:"Presavijte papir da uporedite strane, pa dodajte isti detalj na obe."},
  "Jumping Numbers": {en:"Call a number and make that many small jumps on a clear floor.",sr:"Izgovorite broj i napravite toliko malih skokova na slobodnom podu."},
  "Twig Letters": {en:"Use fallen twigs to spell a short word, then let a partner read it.",sr:"Od opalih grančica složite kratku reč, pa neka je partner pročita."},
  "Corner Goals": {en:"Call a color and gently roll the ball toward its matching corner marker.",sr:"Izgovorite boju i nežno otkotrljajte loptu ka odgovarajućoj oznaci u uglu."},
  "Sound Map": {en:"Mark the farthest sound on the drawing, then add an arrow showing its direction.",sr:"Na crtežu označite najudaljeniji zvuk i dodajte strelicu koja pokazuje smer."},
  "Kitchen Band": {en:"The conductor gives a quiet signal; the band changes from loud to soft together.",sr:"Dirigent daje tihi znak, a orkestar zajedno prelazi sa glasnog na tiho."},
  "Indoor Picnic Quest": {en:"Add a pretend dessert to the picnic and invent a clue that leads to it.",sr:"Dodajte zamišljeni desert pikniku i smislite trag koji vodi do njega."},
  "Build a Creature": {en:"Give the creature a home and one helpful job it can do there.",sr:"Osmislite dom za biće i jedan koristan posao koji tamo obavlja."},
  "Captain Says": {en:"Give two short commands in a row; players follow them only when you say “Captain says”.",sr:"Zadajte dve kratke komande zaredom; igrači ih prate samo kada kažete „Kapetan kaže”."},
  "Hopscotch Remix": {en:"Add one easy movement to a square, such as a clap or a turn on the spot.",sr:"Dodajte jedan lak pokret u polje, poput pljeska ili okreta u mestu."},
  "Leaf Shadow Trace": {en:"Trace the leaf shadow again later and compare how its outline moved.",sr:"Kasnije ponovo ocrtajte senku lista i uporedite kako se njen oblik pomerio."},
  "Mood Music Moves": {en:"Switch feelings halfway through the song and change your movement to match.",sr:"Na polovini pesme promenite osećanje i pokretom pokažite novu emociju."},
  "Tallest Tiny Tower": {en:"Pause after each new level and count how many pieces the tower holds.",sr:"Posle svakog novog nivoa zastanite i prebrojte koliko delova kula drži."},
  "Guess My Rule": {en:"After the rule is guessed, change it and sort one new object.",sr:"Kada pogode pravilo, promenite ga i razvrstajte još jedan predmet."},
  "Postcard Adventure": {en:"Add a one-line message from someone who lives in the place you drew.",sr:"Dodajte kratku poruku osobe koja živi na mestu koje ste nacrtali."},
  "Stepping-Stone Story": {en:"At each safe stepping spot, add one word to a shared sentence.",sr:"Na svakom bezbednom mestu za stajanje dodajte po jednu reč zajedničkoj priči."},
  "Wind Race": {en:"Make two clear lanes and gently blow a small paper scrap toward the finish.",sr:"Označite dve jasne staze i nežno duvajte mali komadić papira ka cilju."},
  "Circle Keep-Away": {en:"The middle player chooses which way the gentle ball pass should travel around the circle.",sr:"Igrač u sredini bira u kom smeru će se lopta nežno dodavati u krugu."},
  "Final Pose Challenge": {en:"Finish as a statue of an animal or object and let the group guess it.",sr:"Završite kao statua životinje ili predmeta, pa neka grupa pogodi šta ste."},
  "Colorful Steps": {en:"Make a short color pattern and give each color its own safe movement.",sr:"Napravite kratak niz boja i svakoj dodelite po jedan bezbedan pokret."},
  "Three Things, One Story": {en:"End the story by using all three chosen objects to solve one problem.",sr:"Završite priču tako što sva tri izabrana predmeta zajedno reše jedan problem."},
  "Pillow Mountain": {en:"Guide a toy across the cushion mountain using a slow, careful route.",sr:"Provedite igračku preko planine od jastuka polaganom i pažljivom putanjom."},
  "Tiptoe Trail": {en:"Freeze at each marker when you hear a clap, then continue on tiptoe.",sr:"Zastanite kod svake oznake kada čujete pljesak, pa nastavite na prstima."},
  "Animal Traffic": {en:"Choose one animal for each signal and move slowly when its signal is called.",sr:"Izaberite životinju za svaki znak i krećite se polako kada se znak izgovori."},
  "Jump and Name": {en:"Name an item from the chosen category after each small, safe jump.",sr:"Posle svakog malog, bezbednog skoka navedite pojam iz izabrane kategorije."},
  "Mission Cards": {en:"Combine two cards into one short mission and complete them in order.",sr:"Spojite dve kartice u kratku misiju i izvršite zadatke po redu."},
  "Crawl Like a Comet": {en:"Repeat the route slowly, then finish by making a star shape on the floor.",sr:"Ponovite stazu polako, pa završite tako što ćete na podu napraviti zvezdu."},
  "Invent a Creature": {en:"Choose a habitat for the creature and make a sound it might use there.",sr:"Izaberite stanište za biće i smislite zvuk kojim bi se tamo oglašavalo."},
  "Pocket Narrator": {en:"Use three small objects in a story without naming them directly.",sr:"Upotrebite tri mala predmeta u priči, ali nemojte ih direktno imenovati."},
  "Rhyme Relay": {en:"Make the final rhyme describe a character or place from the chain.",sr:"Neka se poslednja rima odnosi na junaka ili mesto iz niza."},
  "Sound Story": {en:"Give one character a repeating sound and make it whenever they appear.",sr:"Dodelite jednom junaku zvuk koji ponavljate svaki put kada se pojavi."},
  "Question Detective": {en:"Set a limit of five yes-or-no questions before making a guess.",sr:"Dogovorite najviše pet pitanja sa odgovorom „da” ili „ne” pre pogađanja."},
  "Kindness News": {en:"Report a kind act as a headline, then interview the helper.",sr:"Predstavite lep postupak kao vest, pa postavite pitanje osobi koja je pomogla."},
  "Opposite Day Tale": {en:"Let each new sentence reverse one detail from the previous sentence.",sr:"Neka svaka nova rečenica preokrene jedan detalj iz prethodne."},
  "Soundtrack Story": {en:"Choose one sound for the beginning, one for the middle and one for the ending.",sr:"Izaberite po jedan zvuk za početak, sredinu i kraj priče."},
  "Magic Word Story": {en:"Add a second magic word that changes one character's plan.",sr:"Dodajte drugu čarobnu reč koja menja plan jednog junaka."},
  "Secret Shape Sketch": {en:"Hide a second tiny shape in the picture for the next person to find.",sr:"Sakrijte još jedan mali oblik u crtežu da ga sledeća osoba pronađe."},
  "Line to Landscape": {en:"Turn the page and add one detail that makes the landscape a new place.",sr:"Okrenite papir i dodajte detalj koji pejzaž pretvara u novo mesto."},
  "Three-Color Creature": {en:"Give each chosen color a body part and a special job.",sr:"Svakoj izabranoj boji dodelite deo tela i poseban zadatak."},
  "Round-Robin Doodle": {en:"Agree on a title only after everyone has added a detail.",sr:"Smislite naslov tek nakon što svako doda po jedan detalj."},
  "Shape Family": {en:"Add a new family member with a different shape and feeling.",sr:"Dodajte novog člana porodice drugačijeg oblika i raspoloženja."},
  "Folded Face": {en:"Give the finished face a name and a funny greeting.",sr:"Dajte gotovom licu ime i smislite njegov smešan pozdrav."},
  "Pattern Portrait": {en:"Repeat one pattern in three places, such as clothing, hair and background.",sr:"Ponovite jednu šaru na tri mesta, na primer na odeći, kosi i pozadini."},
  "Invisible Ink Map": {en:"Add a three-symbol key and let a partner decode the route.",sr:"Dodajte legendu od tri simbola i pustite partnera da otkrije put."},
  "Draw the Feeling": {en:"Draw the same feeling twice: once with calm lines and once with energetic lines.",sr:"Nacrtajte isto osećanje dvaput: mirnim linijama, pa energičnim linijama."},
  "Button Sorting Lab": {en:"Invent a new sorting rule and see if a partner can guess it.",sr:"Smislite novo pravilo za razvrstavanje i proverite da li ga partner pogađa."},
  "What Is Missing?": {en:"After the first round, hide two familiar objects and guess both.",sr:"Posle prvog kruga sakrijte dva poznata predmeta i pogodite oba."},
  "Clue Collector": {en:"Make the last clue rhyme with the place where the surprise is hidden.",sr:"Neka se poslednji trag rimuje sa mestom na kom je iznenađenje sakriveno."},
  "Sound Source Hunt": {en:"Make two different safe sounds from separate spots and point to each source.",sr:"Sa dva mesta napravite različite bezbedne zvuke i pokažite njihov izvor."},
  "Odd One Out": {en:"Add a second odd item and explain a different reason it does not belong.",sr:"Dodajte još jedan uljez i objasnite po čemu se razlikuje."},
  "Touch and Tell": {en:"Describe the object without naming its color; let the partner ask three questions.",sr:"Opišite predmet bez pominjanja boje, a partner neka postavi tri pitanja."},
  "Sequence Spotter": {en:"Let one player extend the pattern by one item before the other guesses what comes next.",sr:"Neka jedan igrač produži niz za jedan predmet pre nego što drugi pogodi šta sledi."},
  "Room Scavenger List": {en:"Find one safe object that matches two clues at once, such as color and shape.",sr:"Pronađite bezbedan predmet koji odgovara dvama tragovima, na primer boji i obliku."},
  "Secret Path Finder": {en:"Add one extra turn to the route and give a clue only at the halfway point.",sr:"Dodajte još jedno skretanje na stazu i dajte trag tek na polovini."},
  "Five Things Fast": {en:"Choose one letter and name five familiar things that start with it.",sr:"Izaberite jedno slovo i navedite pet poznatih stvari koje njime počinju."},
  "Paper Bridge Test": {en:"Change one fold and test the bridge again with the same small toy to compare the result.",sr:"Promenite jedan pregib i ponovo ispitajte most istom malom igračkom da uporedite rezultat."},
  "Straw City": {en:"Add one connecting road and make a sign that tells the toy where to go.",sr:"Dodajte povezni put i napravite znak koji pokazuje igrački kuda da ide."},
  "Marshmallow Structures": {en:"Try making a small arch that can stand without anyone holding it.",sr:"Pokušajte da napravite mali luk koji stoji bez pridržavanja."},
  "Bridge to the Toy": {en:"Make the bridge reach a little farther while keeping its base on a stable surface.",sr:"Produžite most malo više, ali mu osnovu zadržite na stabilnoj površini."},
  "Cardboard Telescope": {en:"Spot three things through the pretend telescope and invent a name for each discovery.",sr:"Kroz zamišljeni teleskop uočite tri stvari i izmislite ime za svako otkriće."},
  "Maze Builder": {en:"Add one dead end, but make sure there is still a clear route to the toy.",sr:"Dodajte jednu slepu ulicu, ali ostavite jasan put do igračke."},
  "Balance Sculpture": {en:"Rebuild the same shape with one fewer object while keeping it stable.",sr:"Ponovo složite isti oblik sa jednim predmetom manje i pokušajte da ostane stabilan."},
  "Tiny Shop": {en:"A pretend customer asks for something unusual; invent it and add it to the shop.",sr:"Zamišljeni kupac traži nešto neobično; izmislite taj proizvod i dodajte ga u prodavnicu."},
  "Paper Playground": {en:"Add a quiet rest spot to the drawing and decide who might use it.",sr:"Dodajte mirno mesto za odmor na crtež i zamislite ko bi ga koristio."},
  "Balloon Tap Circle": {en:"After one full round, gently reverse the direction of the balloon taps.",sr:"Posle jednog punog kruga nežno promenite smer dodavanja balona."},
  "Target Ladder": {en:"After reaching the nearest target, move to the next marked spot and try again gently.",sr:"Kada pogodite najbližu metu, pređite na sledeću oznaku i ponovo pokušajte nežno."},
  "Roll and Follow": {en:"After each pass, the receiver chooses a new safe movement for both players to do.",sr:"Posle svakog dodavanja primalac bira novi bezbedan pokret koji oba igrača izvode."},
  "Two-Bounce Catch": {en:"Try two soft bounces in different places before the careful catch.",sr:"Pokušajte dva blaga odskoka na različitim mestima pre pažljivog hvatanja."},
  "Balloon Volleyball": {en:"After three gentle taps, switch places before keeping the balloon in the air again.",sr:"Posle tri blaga udarca zamenite mesta, pa nastavite da održavate balon u vazduhu."},
  "Partner Pass Pattern": {en:"Add one new pass to the pattern, then repeat the whole sequence together.",sr:"Dodajte jedno novo dodavanje u niz, pa ga zajedno ponovite od početka."},
  "Rolling Ramps": {en:"Raise one end of the low, stable ramp slightly and compare how the ball rolls.",sr:"Malo podignite jedan kraj niske, stabilne rampe i uporedite kako se lopta kotrlja."},
  "Circle Bounce": {en:"Say the next player's name before the gentle bounce and pass.",sr:"Izgovorite ime sledećeg igrača pre nego što nežno odbijete i dodate loptu."},
  "Target Story Toss": {en:"Invent a new story detail for the target the ball reaches.",sr:"Smislite novi detalj priče za metu do koje je lopta stigla."},
  "Leaf Line-Up": {en:"Reorder the leaves by color after sorting them by size.",sr:"Poređajte lišće ponovo po boji, nakon što ste ga složili po veličini."},
  "Nature Number Hunt": {en:"Choose a number and point to a safe natural group that matches it.",sr:"Izaberite broj i pokažite bezbednu grupu iz prirode koja mu odgovara."},
  "Stick Shadow Shapes": {en:"Let a partner guess the shadow shape before you name it.",sr:"Neka partner pogodi oblik senke pre nego što ga imenujete."},
  "Bird Sound Pause": {en:"Take turns copying one bird call softly, then choose which sound you liked best.",sr:"Naizmenično tiho oponašajte glas jedne ptice, pa izaberite zvuk koji vam se najviše dopao."},
  "Nature Color Wheel": {en:"Find one more fallen item to fill a color gap in the wheel.",sr:"Pronađite još jedan otpali predmet da popunite nedostajuću boju u točku."},
  "Windy Ribbon Watch": {en:"Guess which way the ribbon will move next, then check your prediction.",sr:"Pogodite na koju stranu će se traka sledeće pomeriti, pa proverite pretpostavku."},
  "Mini Habitat": {en:"Add a small shelter where the pretend creature could rest during rain.",sr:"Dodajte malo sklonište u kom bi se zamišljeno biće odmorilo dok pada kiša."},
  "Cloud Shape Chain": {en:"Change the first cloud shape slightly and build a new chain of ideas.",sr:"Malo promenite prvi oblik oblaka i napravite novi lanac ideja."},
  "Nature Texture Cards": {en:"Find a second safe texture match and describe how it feels different from the first pair.",sr:"Pronađite još jedan par bezbednih tekstura i opišite po čemu se razlikuje od prvog."},
  "Sunrise Stretch Story": {en:"Add a sunset ending and finish the story with one slow stretch.",sr:"Dodajte zalazak sunca na kraju priče i završite jednim sporim istezanjem."},
  "Mirror Animal": {en:"Switch leaders halfway through the animal movement without stopping the copying.",sr:"Zamenite vođu na polovini životinjskog pokreta, bez prekidanja oponašanja."},
  "Beat the Pause": {en:"Choose a new theme for the next freeze pose, such as animals or shapes.",sr:"Izaberite novu temu za sledeću pozu, na primer životinje ili oblike."},
  "Body Letter Dance": {en:"Use two body letters in a row to spell a short word together.",sr:"Telom napravite dva slova zaredom i zajedno složite kratku reč."},
  "Slow Fast Switch": {en:"Let the group invent a hand signal that means switch speed.",sr:"Neka grupa smisli znak rukom koji znači da treba promeniti brzinu."},
  "Clap and Step": {en:"Try the same clap-and-step pattern in reverse order.",sr:"Pokušajte isti niz pljeska i koraka obrnutim redosledom."},
  "Rainbow Ribbon Dance": {en:"Draw one clear shape in the air with the ribbon and let a partner copy it.",sr:"Trakom nacrtajte jasan oblik u vazduhu, pa neka ga partner ponovi."},
  "Partner Shadow Dance": {en:"Switch leaders without speaking and see if the follower notices the change.",sr:"Zamenite vođu bez reči i proverite da li pratilac primećuje promenu."},
  "Mood Statues": {en:"Add one quiet sound to match the feeling shown by each statue.",sr:"Dodajte tihi zvuk koji odgovara osećanju prikazanom svakom statuom."},
  "Direction Dance": {en:"Add a stop signal to the direction sequence and hold a comfortable pose.",sr:"Dodajte znak za zaustavljanje u niz pravaca i zadržite udobnu pozu."},
  "Celebration Choreo": {en:"Teach the shared final move to someone who has not tried it yet.",sr:"Naučite zajednički završni pokret nekoga ko ga još nije probao."},
  "Toy Doctor": {en:"The toy patient answers with a funny voice when the doctor asks one question.",sr:"Igračka-pacijent odgovara smešnim glasom kada joj doktor postavi pitanje."},
  "Restaurant Imagination": {en:"Invent a special dish for a pretend customer and describe its ingredients.",sr:"Smislite posebno jelo za zamišljenog gosta i opišite sastojke."},
  "Post Office Play": {en:"Sort the pretend letters by a symbol, then deliver each to its matching place.",sr:"Razvrstajte zamišljena pisma po simbolima, pa ih dostavite na odgovarajuća mesta."},
  "Space Mission Control": {en:"Send a soft toy to an imaginary planet and agree on a safe landing signal.",sr:"Pošaljite mekanu igračku na zamišljenu planetu i dogovorite bezbedan znak za sletanje."},
  "Helpful Inventor": {en:"Describe the tool's job with three clues and let a partner guess the problem it solves.",sr:"Opišite namenu izuma kroz tri traga i neka partner pogodi koji problem rešava."},
  "Underwater Tour": {en:"Add three sea creatures to the tour and invent a gentle movement for each.",sr:"Dodajte tri morska bića u obilazak i izmislite blag pokret za svako."},
  "Family Newsroom": {en:"Turn one kind thing someone did today into a cheerful headline.",sr:"Pretvorite jedan lep postupak od danas u vedar naslov vesti."},
  "Time-Travel Guide": {en:"Let a visitor ask one question about the past or future stop.",sr:"Neka posetilac postavi jedno pitanje o stanici u prošlosti ili budućnosti."},
  "Tiny Theatre": {en:"Perform the same short scene once with words and once without speaking.",sr:"Odglumite istu kratku scenu jednom rečima, a zatim bez govora."},
  "Quiet Cloud Count": {en:"Silently count the clouds you see, then compare totals without rushing.",sr:"U sebi prebrojte oblake koje vidite, pa polako uporedite broj."},
  "Feather Focus": {en:"Guess where the feather will land, then see how close your guess was.",sr:"Pogodite gde će pero pasti, pa proverite koliko je procena bila blizu."},
  "Breathing Shapes": {en:"Switch from tracing a square to a circle after a few comfortable breaths; do not hold your breath.",sr:"Posle nekoliko prijatnih udaha pređite sa kvadrata na krug; nemojte zadržavati dah."},
  "Silent Sorting": {en:"After sorting once, invent a different rule and regroup the same safe objects.",sr:"Posle prvog razvrstavanja smislite drugo pravilo i ponovo složite iste bezbedne predmete."},
  "Calm Color Search": {en:"Arrange the five same-color objects from lightest to darkest.",sr:"Poređajte pet predmeta iste boje od najsvetlijeg do najtamnijeg."},
  "Listening Minute": {en:"After listening, point toward the farthest sound you noticed.",sr:"Posle slušanja pokažite u smeru najudaljenijeg zvuka koji ste primetili."},
  "Tense and Relax": {en:"Add a gentle shoulder stretch between each tense-and-relax round.",sr:"Između krugova stezanja i opuštanja nežno istegnite ramena."},
  "Quiet Pattern Tiles": {en:"Hide one item from the pattern and let a partner identify the missing spot.",sr:"Sakrijte jedan predmet iz niza i neka partner otkrije koje mesto nedostaje."},
  "Gratitude Garden": {en:"Give each imaginary flower a specific kind act someone did today.",sr:"Svaki zamišljeni cvet posvetite konkretnom lepom postupku od danas."}
};

const gameExampleIdeas = {
  "Story Circle": {en:"Start with “A tiny boat lands on an island.” Each player adds one sentence about what happens next.",sr:"Počnite rečenicom: „Mali brod je stigao na ostrvo.” Svako dodaje po jednu rečenicu o tome šta se dalje dešava."},
  "Mystery Drawing": {en:"Draw three clues for a cat—whiskers, ears and a tail—and let everyone guess before you finish.",sr:"Nacrtajte tri traga za mačku — brkove, uši i rep — pa neka ostali pogode pre nego što završite."},
  "Cushion Islands": {en:"Place three cushions as islands and walk from one to the next without touching the floor.",sr:"Poređajte tri jastuka kao ostrva i hodajte od jednog do drugog bez dodirivanja poda."},
  "Target Toss": {en:"Roll a soft ball toward a paper target on the floor and call out the score it reaches.",sr:"Otkotrljajte mekanu loptu ka papirnoj meti na podu i recite koliko poena nosi mesto gde je stala."},
  "Nature Faces": {en:"Use fallen leaves for hair, a large pebble for a nose and twigs for eyebrows.",sr:"Od opalog lišća napravite kosu, od većeg kamenčića nos, a od grančica obrve."},
  "Freeze Dance": {en:"Dance with tiny steps; when the music stops, freeze like a tall tree.",sr:"Plešite sitnim koracima; kada muzika stane, ukočite se kao visoko drvo."},
  "Cup Castle": {en:"Stack three cups as towers and leave a gap between them for the castle gate.",sr:"Složite tri čaše u kule i ostavite između njih prolaz za kapiju dvorca."},
  "Funny Portrait": {en:"Draw one continuous line that makes a face, then add ears, hair and a silly hat without lifting the pencil.",sr:"Nacrtajte lice jednom neprekidnom linijom, pa bez podizanja olovke dodajte uši, kosu i smešan šešir."},
  "Cloud Shapes": {en:"One cloud looks like a whale. Take turns imagining where it is swimming and what it sees.",sr:"Jedan oblak liči na kita. Naizmenično zamišljajte kuda pliva i šta usput vidi."},
  "Movement Memory": {en:"Start with a clap, add a turn and a knee tap, then repeat all three in order.",sr:"Počnite pljeskom, dodajte okret i tapkanje po kolenima, pa ponovite sva tri pokreta redom."},
  "Mini Bowling": {en:"Arrange three empty bottles in a triangle and roll a soft ball from a marked line.",sr:"Poređajte tri prazne flašice u trougao i otkotrljajte mekanu loptu sa označene linije."},
  "Garden Relay": {en:"Walk to a tree and back while carrying a fallen leaf on your open palm.",sr:"Prošetajte do drveta i nazad noseći opali list na otvorenom dlanu."},
  "Treasure Map": {en:"Mark a tree and a bench on the map, then draw a safe path to the X.",sr:"Na mapi označite drvo i klupu, pa nacrtajte bezbedan put do znaka X."},
  "Sock Basketball": {en:"Roll clean socks into a ball and toss them into a laundry basket from two nearby spots.",sr:"Urolajte čiste čarape u loptu i ubacujte ih u korpu za veš sa dva obližnja mesta."},
  "Mirror Moves": {en:"One partner slowly raises an arm and turns; the other copies, then they switch roles.",sr:"Jedan partner polako podiže ruku i okreće se; drugi ga kopira, pa menjaju uloge."},
  "Texture Safari": {en:"Find something smooth like a large stone and something rough like tree bark; compare them gently.",sr:"Pronađite nešto glatko, poput većeg kamena, i nešto hrapavo, poput kore drveta; nežno ih uporedite."},
  "Cardboard City": {en:"Put a box house beside a paper road and guide a toy car to the park.",sr:"Postavite kuću od kutije pored puta od papira i provedite igračku do parka."},
  "Whisper Chain": {en:"Whisper “A blue cat found a tiny drum” to the next player, then compare the final message.",sr:"Šapnite sledećem: „Plava mačka je pronašla mali bubanj”, pa uporedite poslednju poruku."},
  "Leaf Race": {en:"Make a start and finish line, then gently blow two fallen leaves toward the finish.",sr:"Označite start i cilj, pa nežno duvajte u dva opala lista ka cilju."},
  "Shape Explorer": {en:"Find a round clock, a rectangular book and a triangular sign in your surroundings.",sr:"U okolini pronađite okrugli sat, pravougaonu knjigu i trouglasti znak."},
  "Floor Is Lava": {en:"Use cushions as safe stepping spots and walk from one to the next without touching the floor.",sr:"Koristite jastuke kao bezbedna mesta za stajanje i hodajte od jednog do drugog bez dodirivanja poda."},
  "Backyard Olympics": {en:"Try a short balance walk, a soft-ball toss and a slow-motion walk; award a teamwork medal.",sr:"Probajte kratko hodanje po liniji, bacanje meke lopte i usporen hod; dodelite medalju za timski trud."},
  "Make a Goal": {en:"Set two short sticks as a goal and gently roll a soft ball through the gap.",sr:"Označite gol dvema kratkim grančicama i nežno otkotrljajte mekanu loptu kroz otvor."},
  "Sound Orchestra": {en:"Give one player a clap, another a soft tap and a third a hum; conduct them together.",sr:"Jednom igraču dodelite pljesak, drugom tiho tapkanje, trećem pevušenje; zajedno im dirigujte."},
  "Tape-Line Balance": {en:"Follow a removable floor-tape line slowly and pause in a steady pose at each turn.",sr:"Polako pratite liniju od uklonjive trake na podu i zastanite u stabilnoj pozi na svakom skretanju."},
  "Monster Steps": {en:"Try giant steps, tiny steps and tiptoes; let the others guess which monster you are.",sr:"Probajte džinovske i sićušne korake, pa hod na prstima; neka ostali pogode koje ste čudovište."},
  "Bridge Builders": {en:"Rest a folded strip of cardboard between two sturdy books and test it with a small toy.",sr:"Oslonite presavijenu traku kartona na dve stabilne knjige i isprobajte je malom igračkom."},
  "Weather Reporter": {en:"Give a sunny forecast for an imaginary planet and show the breeze with your hands.",sr:"Dajte sunčanu prognozu za zamišljenu planetu i rukama pokažite povetarac."},
  "Dot-to-Doodle": {en:"Connect five dots into a fish, then add bubbles and a place for it to swim.",sr:"Spojite pet tačaka u ribu, pa joj dodajte mehuriće i mesto gde pliva."},
  "Quiet Detective": {en:"Look at three objects on a table, turn away, then spot which one has moved.",sr:"Pogledajte tri predmeta na stolu, okrenite se, pa otkrijte koji je pomeren."},
  "Obstacle Mission": {en:"Walk around a cushion, step over a tape line and reach the toy at the finish.",sr:"Zaobiđite jastuk, prekoračite liniju od trake i stignite do igračke na cilju."},
  "Story Dice Without Dice": {en:"Choose a cup, a leaf and a toy; make each one help solve the story's problem.",sr:"Izaberite čašu, list i igračku; neka svaka pomogne da se reši problem u priči."},
  "Pebble Patterns": {en:"Copy a short pattern of large, safe pebbles after looking at it for a few seconds.",sr:"Pogledajte nekoliko sekundi šaru od većih, bezbednih kamenčića, pa je složite po sećanju."},
  "Copycat Clap": {en:"Clap twice, tap your knees once and let a partner repeat the rhythm.",sr:"Pljesnite dvaput, jednom tapnite kolena i neka partner ponovi ritam."},
  "Paper Costume": {en:"Make a paper badge for an imaginary hero and let others guess the hero's job.",sr:"Napravite papirnu značku za zamišljenog junaka i neka ostali pogode njegov posao."},
  "Alphabet Hunt": {en:"Find one safe object for the first three letters of a player's name.",sr:"Pronađite po jedan bezbedan predmet za prva tri slova nečijeg imena."},
  "Emotion Charades": {en:"Act out feeling surprised without words, then change to feeling calm.",sr:"Bez reči odglumite iznenađenje, pa zatim promenite izraz u smirenost."},
  "Chalk River": {en:"Draw a winding river and mark one wide island where everyone can safely step.",sr:"Nacrtajte krivudavu reku i označite jedno široko ostrvo na koje svi mogu bezbedno da stanu."},
  "Pass the Sketch": {en:"Draw a circle, pass the page and let the next player turn it into a balloon or planet.",sr:"Nacrtajte krug, prosledite papir i neka ga sledeći pretvori u balon ili planetu."},
  "Tiny Garden Design": {en:"Arrange fallen leaves as garden beds and small twigs as a winding path.",sr:"Poređajte opalo lišće kao leje, a kratke grančice kao vijugavu stazu."},
  "Hot and Cold Hunt": {en:"Hide a soft toy nearby and guide the seeker with only warm or cold clues.",sr:"Sakrijte mekanu igračku u blizini i vodite tragača samo tragovima toplo ili hladno."},
  "Balloon Keep-Up": {en:"Gently tap a balloon three times, then pass the next tap to a partner.",sr:"Nežno dodirnite balon tri puta, pa sledeći dodir prepustite partneru."},
  "Living Room Camp": {en:"Build a low blanket den and tell a short story about an animal visitor.",sr:"Napravite nisko sklonište od ćebeta i smislite priču o životinjskom gostu."},
  "Rhythm Leader": {en:"Clap, tap your knees, clap; let the group repeat while the leader changes one sound.",sr:"Pljesak, tapkanje po kolenima, pljesak; grupa ponavlja dok vođa ne promeni jedan zvuk."},
  "What Changed": {en:"Start with three objects; after one change is guessed, try a round with two changes.",sr:"Počnite sa tri predmeta; kada pogodite jednu promenu, probajte krug sa dve."},
  "Paper Puppet Show": {en:"Have one paper puppet ask where it is going and let the other answer in character.",sr:"Neka jedna papirna lutka pita kuda ide, a druga odgovori u svojoj ulozi."},
  "Cone-Free Slalom": {en:"Walk around three safe cup markers, then try the same route with gentle side steps.",sr:"Prošetajte oko tri bezbedne oznake od čaša, pa ponovite stazu blagim bočnim koracima."},
  "One-Line Creature": {en:"Turn one continuous line into a creature, then give it a name and a special walk.",sr:"Pretvorite neprekidnu liniju u biće, pa mu dajte ime i poseban hod."},
  "Museum Guide": {en:"Show three safe household objects as exhibits and invent one surprising fact about each.",sr:"Izložite tri bezbedna kućna predmeta i izmislite po jednu zanimljivu činjenicu o svakom."},
  "Balance Delivery": {en:"Carry a light toy on an open tray across a short, clear route, then return it.",sr:"Prenesite laganu igračku na poslužavniku kratkom, slobodnom stazom, pa je vratite."},
  "Category Countdown": {en:"Name five animals, then try five foods before the count ends.",sr:"Navedite pet životinja, pa pokušajte da navedete pet jela pre kraja odbrojavanja."},
  "Spider Web Route": {en:"Step over low, safe lines and choose a clear route through the pretend web.",sr:"Prekoračite niske, bezbedne linije i izaberite slobodan put kroz zamišljenu mrežu."},
  "Nature Bingo": {en:"Spot a leaf, a bird and a smooth stone without picking or disturbing anything.",sr:"Uočite list, pticu i gladak kamen bez branja ili uznemiravanja prirode."},
  "Bounce and Catch": {en:"Bounce the soft ball once, clap quietly and catch it with both hands.",sr:"Jednom odbijte mekanu loptu, tiho pljesnite i uhvatite je obema rukama."},
  "Dance Traffic Lights": {en:"On green move, on yellow slow down, and on red freeze in a funny pose.",sr:"Na zeleno se krećite, na žuto usporite, a na crveno se ukočite u smešnoj pozi."},
  "Box Invention": {en:"Turn an empty box into a pretend wind machine and show what problem it solves.",sr:"Pretvorite praznu kutiju u zamišljenu mašinu za vetar i pokažite koji problem rešava."},
  "Scent Explorer": {en:"Compare two familiar food smells, such as lemon and mint, without tasting them.",sr:"Uporedite dva poznata mirisa hrane, poput limuna i nane, bez probanja."},
  "Symmetry Art": {en:"Fold the page down the middle and add a matching detail to the other half.",sr:"Presavijte papir po sredini i dodajte odgovarajući detalj na drugu polovinu."},
  "Jumping Numbers": {en:"Place number cards on the floor and make one small jump to the number called.",sr:"Poređajte kartice sa brojevima po podu i malim skokom dođite do izgovorenog broja."},
  "Twig Letters": {en:"Make the first letter of your name from fallen twigs, then add a small decoration.",sr:"Složite prvo slovo svog imena od opalih grančica, pa dodajte mali ukras."},
  "Corner Goals": {en:"Call one corner and gently roll the soft ball toward its goal marker.",sr:"Izgovorite jedan ugao i nežno otkotrljajte mekanu loptu ka oznaci gola."},
  "Sound Map": {en:"Draw a symbol where you hear each sound, then compare which came from farthest away.",sr:"Nacrtajte simbol na mestu odakle čujete zvuk, pa uporedite koji je bio najudaljeniji."},
  "Kitchen Band": {en:"Let the conductor signal a quiet ending, and have every instrument fade out together.",sr:"Neka dirigent označi tiši završetak, pa neka svi instrumenti zajedno utihnu."},
  "Indoor Picnic Quest": {en:"Follow a clue to find a pretend cup, plate and picnic snack, then arrange a menu.",sr:"Pratite tragove do zamišljene čaše, tanjira i užine, pa složite meni za piknik."},
  "Build a Creature": {en:"Choose two safe objects for body parts and invent a gentle way the creature moves.",sr:"Izaberite dva bezbedna predmeta za delove tela i osmislite kako se biće nežno kreće."},
  "Captain Says": {en:"Give a two-part command, but players follow it only if it starts with “Captain says”.",sr:"Zadajte komandu iz dva dela, ali igrači je prate samo ako počinje sa „Kapetan kaže”."},
  "Hopscotch Remix": {en:"At one square, pause to name a favorite animal before continuing the hopscotch path.",sr:"Na jednom polju zastanite da kažete omiljenu životinju, pa nastavite školice."},
  "Leaf Shadow Trace": {en:"Trace the same leaf shadow later and notice which way it shifted.",sr:"Kasnije ponovo ocrtajte senku istog lista i primetite na koju stranu se pomerila."},
  "Mood Music Moves": {en:"Change from a calm feeling to a joyful one and invent a new movement for each.",sr:"Pređite iz mirnog u radosno raspoloženje i osmislite poseban pokret za svako."},
  "Tallest Tiny Tower": {en:"See if the tower can stand still for a slow count of five.",sr:"Proverite može li kula da stoji mirno dok polako brojite do pet."},
  "Guess My Rule": {en:"After the rule is guessed, sort the same objects by a new rule.",sr:"Kada pogode pravilo, razvrstajte iste predmete po novom pravilu."},
  "Postcard Adventure": {en:"Add a short greeting from the place in the picture to an imaginary friend.",sr:"Dodajte kratak pozdrav sa mesta na slici za zamišljenog prijatelja."},
  "Stepping-Stone Story": {en:"Add one new sentence at every safe stepping spot until the story reaches its ending.",sr:"Dodajte po jednu rečenicu na svakom bezbednom mestu dok priča ne stigne do kraja."},
  "Wind Race": {en:"Take turns giving a fallen leaf one gentle puff toward the finish line.",sr:"Naizmenično nežno duvajte u opali list kako bi stigao do cilja."},
  "Circle Keep-Away": {en:"Roll the soft ball around the circle in the opposite direction on the next round.",sr:"U sledećem krugu kotrljajte mekanu loptu kroz krug u suprotnom smeru."},
  "Final Pose Challenge": {en:"Call an animal and have everyone finish in a comfortable statue pose that represents it.",sr:"Izgovorite životinju, pa neka svi završe u udobnoj pozi statue koja je predstavlja."},
  "Colorful Steps": {en:"Make a three-color pattern and repeat the matching movements in the same order.",sr:"Napravite niz od tri boje i ponovite odgovarajuće pokrete istim redom."},
  "Three Things, One Story": {en:"End the tale by using all three objects to solve one problem together.",sr:"Završite priču tako što sva tri predmeta zajedno reše jedan problem."},
  "Pillow Mountain": {en:"Guide a toy across the cushion mountain using slow, careful steps.",sr:"Provedite igračku preko planine od jastuka sporim i pažljivim koracima."},
  "Tiptoe Trail": {en:"Pause at each marker when you hear a clap, then continue quietly on tiptoe.",sr:"Zastanite kod svake oznake kada čujete pljesak, pa tiho nastavite na prstima."},
  "Animal Traffic": {en:"Add a slow-motion signal so each animal crosses the clear area carefully.",sr:"Dodajte znak za usporeni pokret kako bi svaka životinja pažljivo prešla slobodan prostor."},
  "Jump and Name": {en:"Choose a new category and name one item after each small, safe jump.",sr:"Izaberite novu kategoriju i navedite po jednu stvar posle svakog malog, bezbednog skoka."},
  "Mission Cards": {en:"Pick two cards and join their tasks into one short mission.",sr:"Izaberite dve kartice i spojite njihove zadatke u jednu kratku misiju."},
  "Crawl Like a Comet": {en:"Finish the route by stretching out in a star shape on the floor.",sr:"Završite stazu tako što ćete se na podu raširiti u oblik zvezde."},
  "Invent a Creature": {en:"Give the creature a habitat and one sound it uses to call a friend.",sr:"Dajte biću stanište i jedan zvuk kojim doziva prijatelja."},
  "Pocket Narrator": {en:"Use each of the three objects once, without saying their names.",sr:"Upotrebite svaki od tri predmeta po jednom, bez izgovaranja njihovih imena."},
  "Rhyme Relay": {en:"Keep the same ending sound for three turns, then choose a new rhyme.",sr:"Zadržite isti završni glas tri kruga, pa izaberite novu rimu."},
  "Sound Story": {en:"Choose a sound for one character and repeat it each time they appear.",sr:"Izaberite zvuk za jednog junaka i ponovite ga svaki put kada se pojavi."},
  "Question Detective": {en:"Set a five-question limit and see if the group can solve the mystery in time.",sr:"Ograničite igru na pet pitanja i proverite može li grupa na vreme da reši misteriju."},
  "Kindness News": {en:"Give the kind act a headline, then ask the helper one friendly interview question.",sr:"Smislite naslov za lep postupak, pa postavite pomagaču jedno prijatno pitanje."},
  "Opposite Day Tale": {en:"Let the next sentence reverse one detail from the previous one.",sr:"Neka sledeća rečenica preokrene jedan detalj iz prethodne."},
  "Soundtrack Story": {en:"Choose one gentle sound for the beginning, middle and ending of the story.",sr:"Izaberite po jedan blag zvuk za početak, sredinu i kraj priče."},
  "Magic Word Story": {en:"Choose a magic word that changes one character's plan whenever it is spoken.",sr:"Izaberite čarobnu reč koja menja plan jednog junaka svaki put kada se izgovori."},
  "Secret Shape Sketch": {en:"Hide a second small shape in the picture for someone else to spot.",sr:"Sakrijte još jedan mali oblik u crtežu da ga neko drugi pronađe."},
  "Line to Landscape": {en:"Turn the drawing into a nighttime scene by adding just three details.",sr:"Pretvorite crtež u noćni prizor dodavanjem samo tri detalja."},
  "Three-Color Creature": {en:"Give each of the three colors a different body part and ability.",sr:"Svakoj od tri boje dodelite drugačiji deo tela i sposobnost."},
  "Round-Robin Doodle": {en:"After everyone adds a detail, agree on a title for the finished picture.",sr:"Kada svi dodaju po detalj, zajedno smislite naslov gotovog crteža."},
  "Shape Family": {en:"Add a new shape relative with a different size and personality.",sr:"Dodajte novog rođaka drugačije veličine i karaktera."},
  "Folded Face": {en:"Name the finished face and give it a greeting to say.",sr:"Dajte gotovom licu ime i smislite njegov pozdrav."},
  "Pattern Portrait": {en:"Repeat one chosen pattern in the hair, clothes and background.",sr:"Ponovite izabranu šaru u kosi, odeći i pozadini."},
  "Invisible Ink Map": {en:"Add a three-symbol key and let a partner decode the route.",sr:"Dodajte legendu od tri simbola i pustite partnera da otkrije put."},
  "Draw the Feeling": {en:"Show the same feeling once with smooth lines and once with jagged lines.",sr:"Isto osećanje prikažite glatkim, pa izlomljenim linijama."},
  "Button Sorting Lab": {en:"Invent a new sorting rule and see if a partner can work it out.",sr:"Smislite novo pravilo za razvrstavanje i proverite može li partner da ga otkrije."},
  "What Is Missing?": {en:"Hide two familiar objects and see if the group can name both.",sr:"Sakrijte dva poznata predmeta i proverite može li grupa da pogodi oba."},
  "Clue Collector": {en:"Make the final clue rhyme with the place where the surprise is hidden.",sr:"Neka se poslednji trag rimuje sa mestom na kom je iznenađenje sakriveno."},
  "Sound Source Hunt": {en:"Make two familiar sounds from different safe spots and point to each source.",sr:"Sa dva bezbedna mesta napravite različite poznate zvuke i pokažite njihov izvor."},
  "Odd One Out": {en:"Add a second item that does not belong and accept more than one reason.",sr:"Dodajte još jedan predmet koji ne pripada grupi i prihvatite više mogućih razloga."},
  "Touch and Tell": {en:"Describe a safe object without naming its color; the partner gets three questions.",sr:"Opišite bezbedan predmet bez pominjanja boje; partner ima tri pitanja."},
  "Sequence Spotter": {en:"Extend the pattern by one item, then let a partner say what comes next.",sr:"Produžite niz za jedan predmet, pa neka partner kaže šta sledi."},
  "Room Scavenger List": {en:"Find one safe item matching two clues at once, such as color and shape.",sr:"Pronađite jedan bezbedan predmet koji odgovara dvama tragovima, poput boje i oblika."},
  "Secret Path Finder": {en:"Add one turn to the route and give a clue only halfway through.",sr:"Dodajte jedno skretanje na rutu i dajte trag tek na polovini puta."},
  "Five Things Fast": {en:"Pick one letter and name five familiar things that begin with it.",sr:"Izaberite jedno slovo i navedite pet poznatih stvari koje njime počinju."},
  "Paper Bridge Test": {en:"Change one fold and test the bridge again with the same small toy to compare the result.",sr:"Promenite jedan pregib i ponovo ispitajte most istom malom igračkom da uporedite rezultat."},
  "Straw City": {en:"Add one connecting road and make a sign that tells the toy where to go.",sr:"Dodajte povezni put i napravite znak koji pokazuje igrački kuda da ide."},
  "Marshmallow Structures": {en:"Try making a small arch that can stand without anyone holding it.",sr:"Pokušajte da napravite mali luk koji stoji bez pridržavanja."},
  "Bridge to the Toy": {en:"Make the bridge reach a little farther while keeping its base on a stable surface.",sr:"Produžite most malo više, ali mu osnovu zadržite na stabilnoj površini."},
  "Cardboard Telescope": {en:"Spot three things through the pretend telescope and invent a name for each discovery.",sr:"Kroz zamišljeni teleskop uočite tri stvari i izmislite ime za svako otkriće."},
  "Maze Builder": {en:"Add one dead end, but make sure there is still a clear route to the toy.",sr:"Dodajte jednu slepu ulicu, ali ostavite jasan put do igračke."},
  "Balance Sculpture": {en:"Rebuild the same shape with one fewer object while keeping it stable.",sr:"Ponovo složite isti oblik sa jednim predmetom manje i pokušajte da ostane stabilan."},
  "Tiny Shop": {en:"A pretend customer asks for something unusual; invent it and add it to the shop.",sr:"Zamišljeni kupac traži nešto neobično; izmislite taj proizvod i dodajte ga u prodavnicu."},
  "Paper Playground": {en:"Add a quiet rest spot to the drawing and decide who might use it.",sr:"Dodajte mirno mesto za odmor na crtež i zamislite ko bi ga koristio."},
  "Balloon Tap Circle": {en:"After one full round, gently reverse the direction of the balloon taps.",sr:"Posle jednog punog kruga nežno promenite smer dodavanja balona."},
  "Target Ladder": {en:"After reaching the nearest target, move to the next marked spot and try again gently.",sr:"Kada pogodite najbližu metu, pređite na sledeću oznaku i ponovo pokušajte nežno."},
  "Roll and Follow": {en:"After each pass, the receiver chooses a new safe movement for both players to do.",sr:"Posle svakog dodavanja primalac bira novi bezbedan pokret koji oba igrača izvode."},
  "Two-Bounce Catch": {en:"Try two soft bounces in different places before the careful catch.",sr:"Pokušajte dva blaga odskoka na različitim mestima pre pažljivog hvatanja."},
  "Balloon Volleyball": {en:"After three gentle taps, switch places before keeping the balloon in the air again.",sr:"Posle tri blaga udarca zamenite mesta, pa nastavite da održavate balon u vazduhu."},
  "Partner Pass Pattern": {en:"Add one new pass to the pattern, then repeat the whole sequence together.",sr:"Dodajte jedno novo dodavanje u niz, pa ga zajedno ponovite od početka."},
  "Rolling Ramps": {en:"Raise one end of the low, stable ramp slightly and compare how the ball rolls.",sr:"Malo podignite jedan kraj niske, stabilne rampe i uporedite kako se lopta kotrlja."},
  "Circle Bounce": {en:"Say the next player's name before the gentle bounce and pass.",sr:"Izgovorite ime sledećeg igrača pre nego što nežno odbijete i dodate loptu."},
  "Target Story Toss": {en:"Invent a new story detail for the target the ball reaches.",sr:"Smislite novi detalj priče za metu do koje je lopta stigla."},
  "Leaf Line-Up": {en:"Reorder the leaves by color after sorting them by size.",sr:"Poređajte lišće ponovo po boji, nakon što ste ga složili po veličini."},
  "Nature Number Hunt": {en:"Choose a number and point to a safe natural group that matches it.",sr:"Izaberite broj i pokažite bezbednu grupu iz prirode koja mu odgovara."},
  "Stick Shadow Shapes": {en:"Let a partner guess the shadow shape before you name it.",sr:"Neka partner pogodi oblik senke pre nego što ga imenujete."},
  "Bird Sound Pause": {en:"Take turns copying one bird call softly, then choose which sound you liked best.",sr:"Naizmenično tiho oponašajte glas jedne ptice, pa izaberite zvuk koji vam se najviše dopao."},
  "Nature Color Wheel": {en:"Find one more fallen item to fill a color gap in the wheel.",sr:"Pronađite još jedan otpali predmet da popunite nedostajuću boju u točku."},
  "Windy Ribbon Watch": {en:"Guess which way the ribbon will move next, then check your prediction.",sr:"Pogodite na koju stranu će se traka sledeće pomeriti, pa proverite pretpostavku."},
  "Mini Habitat": {en:"Add a small shelter where the pretend creature could rest during rain.",sr:"Dodajte malo sklonište u kom bi se zamišljeno biće odmorilo dok pada kiša."},
  "Cloud Shape Chain": {en:"Change the first cloud shape slightly and build a new chain of ideas.",sr:"Malo promenite prvi oblik oblaka i napravite novi lanac ideja."},
  "Nature Texture Cards": {en:"Find a second safe texture match and describe how it feels different from the first pair.",sr:"Pronađite još jedan par bezbednih tekstura i opišite po čemu se razlikuje od prvog."},
  "Sunrise Stretch Story": {en:"Add a sunset ending and finish the story with one slow stretch.",sr:"Dodajte zalazak sunca na kraju priče i završite jednim sporim istezanjem."},
  "Mirror Animal": {en:"Switch leaders halfway through the animal movement without stopping the copying.",sr:"Zamenite vođu na polovini životinjskog pokreta, bez prekidanja oponašanja."},
  "Beat the Pause": {en:"Choose a new theme for the next freeze pose, such as animals or shapes.",sr:"Izaberite novu temu za sledeću pozu, na primer životinje ili oblike."},
  "Body Letter Dance": {en:"Use two body letters in a row to spell a short word together.",sr:"Telom napravite dva slova zaredom i zajedno složite kratku reč."},
  "Slow Fast Switch": {en:"Let the group invent a hand signal that means switch speed.",sr:"Neka grupa smisli znak rukom koji znači da treba promeniti brzinu."},
  "Clap and Step": {en:"Try the same clap-and-step pattern in reverse order.",sr:"Pokušajte isti niz pljeska i koraka obrnutim redosledom."},
  "Rainbow Ribbon Dance": {en:"Draw one clear shape in the air with the ribbon and let a partner copy it.",sr:"Trakom nacrtajte jasan oblik u vazduhu, pa neka ga partner ponovi."},
  "Partner Shadow Dance": {en:"Switch leaders without speaking and see if the follower notices the change.",sr:"Zamenite vođu bez reči i proverite da li pratilac primećuje promenu."},
  "Mood Statues": {en:"Add one quiet sound to match the feeling shown by each statue.",sr:"Dodajte tihi zvuk koji odgovara osećanju prikazanom svakom statuom."},
  "Direction Dance": {en:"Add a stop signal to the direction sequence and hold a comfortable pose.",sr:"Dodajte znak za zaustavljanje u niz pravaca i zadržite udobnu pozu."},
  "Celebration Choreo": {en:"Teach the shared final move to someone who has not tried it yet.",sr:"Naučite zajednički završni pokret nekoga ko ga još nije probao."},
  "Toy Doctor": {en:"The toy patient answers with a funny voice when the doctor asks one question.",sr:"Igračka-pacijent odgovara smešnim glasom kada joj doktor postavi pitanje."},
  "Restaurant Imagination": {en:"Invent a special dish for a pretend customer and describe its ingredients.",sr:"Smislite posebno jelo za zamišljenog gosta i opišite sastojke."},
  "Post Office Play": {en:"Sort the pretend letters by a symbol, then deliver each to its matching place.",sr:"Razvrstajte zamišljena pisma po simbolima, pa ih dostavite na odgovarajuća mesta."},
  "Space Mission Control": {en:"Send a soft toy to an imaginary planet and agree on a safe landing signal.",sr:"Pošaljite mekanu igračku na zamišljenu planetu i dogovorite bezbedan znak za sletanje."},
  "Helpful Inventor": {en:"Describe the tool's job with three clues and let a partner guess the problem it solves.",sr:"Opišite namenu izuma kroz tri traga i neka partner pogodi koji problem rešava."},
  "Underwater Tour": {en:"Add three sea creatures to the tour and invent a gentle movement for each.",sr:"Dodajte tri morska bića u obilazak i izmislite blag pokret za svako."},
  "Family Newsroom": {en:"Turn one kind thing someone did today into a cheerful headline.",sr:"Pretvorite jedan lep postupak od danas u vedar naslov vesti."},
  "Time-Travel Guide": {en:"Let a visitor ask one question about the past or future stop.",sr:"Neka posetilac postavi jedno pitanje o stanici u prošlosti ili budućnosti."},
  "Tiny Theatre": {en:"Perform the same short scene once with words and once without speaking.",sr:"Odglumite istu kratku scenu jednom rečima, a zatim bez govora."},
  "Quiet Cloud Count": {en:"Silently count the clouds you see, then compare totals without rushing.",sr:"U sebi prebrojte oblake koje vidite, pa polako uporedite broj."},
  "Feather Focus": {en:"Guess where the feather will land, then see how close your guess was.",sr:"Pogodite gde će pero pasti, pa proverite koliko je procena bila blizu."},
  "Breathing Shapes": {en:"Switch from tracing a square to a circle after a few comfortable breaths; do not hold your breath.",sr:"Posle nekoliko prijatnih udaha pređite sa kvadrata na krug; nemojte zadržavati dah."},
  "Silent Sorting": {en:"After sorting once, invent a different rule and regroup the same safe objects.",sr:"Posle prvog razvrstavanja smislite drugo pravilo i ponovo složite iste bezbedne predmete."},
  "Calm Color Search": {en:"Arrange the five same-color objects from lightest to darkest.",sr:"Poređajte pet predmeta iste boje od najsvetlijeg do najtamnijeg."},
  "Listening Minute": {en:"After listening, point toward the farthest sound you noticed.",sr:"Posle slušanja pokažite u smeru najudaljenijeg zvuka koji ste primetili."},
  "Tense and Relax": {en:"Add a gentle shoulder stretch between each tense-and-relax round.",sr:"Između krugova stezanja i opuštanja nežno istegnite ramena."},
  "Quiet Pattern Tiles": {en:"Hide one item from the pattern and let a partner identify the missing spot.",sr:"Sakrijte jedan predmet iz niza i neka partner otkrije koje mesto nedostaje."},
  "Gratitude Garden": {en:"Give each imaginary flower a specific kind act someone did today.",sr:"Svaki zamišljeni cvet posvetite konkretnom lepom postupku od danas."}
};

function openGameDetail(id){
  const game=games.find(g=>g.id===id);if(!game)return;state.selectedGame=id;
  const [title,description]=localized(game), liked=state.likes.includes(id);
  const specific=gameDetailOverrides[game.title]?.[state.language];
  $("#detailImage").src=game.image;$("#detailImage").alt=t().image(title);$("#detailTitle").textContent=title;$("#detailDescription").textContent=description;
  const showDemo=game.title==="Guess the Leader", demoCopy=t().demoSteps;
  if(detailDemoTimer){clearInterval(detailDemoTimer);detailDemoTimer=null}
  $("#detailDemo").hidden=!showDemo;$("#detailDemo").classList.remove("is-playing");
  $$(".detail-demo-step").forEach((step,index)=>step.classList.toggle("is-active",showDemo&&index===0));
  if(showDemo){$("#detailDemoTitle").textContent=t().demoTitle;demoCopy.forEach((step,index)=>{$(`#detailDemoStep${index+1}Title`).textContent=step[0];$(`#detailDemoStep${index+1}Copy`).textContent=step[1]});$("#detailDemoToggleText").textContent=t().demoPlay;$("#detailDemoToggle").querySelector("[aria-hidden='true']").textContent="▶";$("#detailDemoToggle").setAttribute("aria-pressed","false")}
  $("#detailTags").innerHTML=`<span class="tag">${game.duration} ${t().min}</span><span class="tag">${t().place[game.place]}</span><span class="tag">${t().ages(game.minAge,game.maxAge)}</span>`;
  $("#detailExampleTitle").textContent=t().exampleTitle;
  const example=specific?.example||gameExampleIdeas[game.title]?.[state.language];
  $("#detailExampleCard").hidden=!example;
  const bonus=specific?.parent||gameBonusIdeas[game.title]?.[state.language];
  $("#detailParentCard").hidden=!bonus;
  $("#detailGrid").hidden=!(example||bonus);
  $("#detailGrid").classList.toggle("has-example",Boolean(example));
  $("#detailExample").textContent=example||"";
  $("#detailParentTitle").textContent=t().parentTipTitle;
  $("#detailParent").textContent=bonus||"";
  $("#detailCloseButton").textContent=t().closeDetails;
  const saveLabel=liked?t().savedAction:t().saveAction;
  $("#detailLikeButton").innerHTML=`♥ <span class="save-label">${saveLabel}</span>`;$("#detailLikeButton").setAttribute("aria-label",saveLabel);$("#detailLikeButton").setAttribute("aria-pressed",String(liked));
  $("#detailLikeButton").classList.toggle("is-liked",liked);if(!$("#gameDialog").open)$("#gameDialog").showModal();
}
function setView(view){
  state.view=view; $$(".nav-button").forEach(b=>b.classList.toggle("is-active",b.dataset.view===view));
  if(view==="explore")renderExplore();else if(view==="recommended"&&!state.answers.age){showFilters(0)}else renderResults();
}
function requireProfile(){if(state.profile)return true;$("#profileDialog").showModal();return false}
function showToast(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("is-visible");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("is-visible"),2600)}
function toggleLike(id){if(!requireProfile())return;const liked=state.likes.includes(id);if(!liked){state.saveCounts[id]=(Number(state.saveCounts[id])||0)+1;localStorage.setItem("playPicksSaveCounts",JSON.stringify(state.saveCounts))}state.likes=liked?state.likes.filter(x=>x!==id):[...state.likes,id];localStorage.setItem("playPicksLikes",JSON.stringify(state.likes));showToast(liked?t().unliked:t().liked);if(!$("#results").hidden)renderResults();if($("#gameDialog").open)openGameDetail(id)}
function showFilters(step=state.step){state.step=step;$("#landing").hidden=true;$("#explorePage").hidden=true;$("#questionCard").hidden=false;$("#progress").hidden=false;$("#results").hidden=true;renderQuestion();scrollTo({top:0,behavior:"smooth"})}
function showLanding(){state.step=0;state.answers={};state.view="recommended";$("#landing").hidden=false;$("#explorePage").hidden=true;$("#questionCard").hidden=true;$("#progress").hidden=true;$("#results").hidden=true;$$(".nav-button").forEach(b=>b.classList.toggle("is-active",b.dataset.view==="recommended"));scrollTo({top:0,behavior:"smooth"})}
$("#nextButton").onclick=()=>{if(state.step<questions().length-1){state.step++;renderQuestion()}else{state.view="recommended";renderResults()}};
$("#backButton").onclick=()=>{if(state.step){state.step--;renderQuestion()}else showLanding()}; $("#homeButton").onclick=showLanding; $("#editButton").onclick=()=>showFilters(0);
$("#changeFiltersButton").onclick=()=>setView("recommended"); $$(".nav-button").forEach(b=>b.onclick=()=>setView(b.dataset.view));
$("#startButton").onclick=()=>showFilters(0); $("#dailyButton").onclick=()=>openGameDetail(dailyGame().id);
$("#detailDemoToggle").onclick=()=>{const playing=$("#detailDemo").classList.toggle("is-playing"),steps=[...$$(".detail-demo-step")];if(detailDemoTimer){clearInterval(detailDemoTimer);detailDemoTimer=null}if(playing&&steps.length){let activeIndex=0;steps.forEach((step,index)=>step.classList.toggle("is-active",index===0));detailDemoTimer=setInterval(()=>{steps[activeIndex].classList.remove("is-active");activeIndex=(activeIndex+1)%steps.length;steps[activeIndex].classList.add("is-active")},1600)}else{steps.forEach(step=>step.classList.remove("is-active"))}$("#detailDemoToggle").setAttribute("aria-pressed",String(playing));$("#detailDemoToggleText").textContent=playing?t().demoPause:t().demoPlay;$("#detailDemoToggle").querySelector("[aria-hidden='true']").textContent=playing?"Ⅱ":"▶"};
$("#gameDialogClose").onclick=()=>$("#gameDialog").close();$("#detailCloseButton").onclick=()=>$("#gameDialog").close();$("#detailLikeButton").onclick=()=>toggleLike(state.selectedGame);
$$ (".language-button").forEach(b=>b.onclick=()=>{state.language=b.dataset.language;translate();if($("#gameDialog").open)openGameDetail(state.selectedGame);if(!$("#explorePage").hidden)renderExplore();else if(!$("#results").hidden)renderResults();else if(!$("#questionCard").hidden)renderQuestion()});
$("#profileButton").onclick=()=>{$("#profileName").value=state.profile?.name||"";$("#deleteProfileButton").classList.toggle("is-visible",Boolean(state.profile));$("#profileDialog").showModal()};
$("#feedbackLabel").textContent=t().feedbackLabel;$("#feedbackHint").textContent=t().feedbackHint;$("#feedbackButton").textContent=t().feedbackButton;
$("#feedbackButton").onclick=()=>{const message=$("#feedbackMessage").value.trim();if(!message){showToast(t().feedbackRequired);return}window.location.href=`mailto:?subject=${encodeURIComponent(t().feedbackSubject)}&body=${encodeURIComponent(message)}`};
$("#profileForm").onsubmit=e=>{if(e.submitter?.value==="cancel")return; e.preventDefault();const name=$("#profileName").value.trim();if(!name)return;state.profile={name};localStorage.setItem("playPicksProfile",JSON.stringify(state.profile));$("#profileDialog").close();translate()};
$("#deleteProfileButton").onclick=()=>{state.profile=null;state.likes=[];localStorage.removeItem("playPicksProfile");localStorage.removeItem("playPicksLikes");$("#profileDialog").close();translate();if(state.view==="saved")renderResults()};

if(games.length<200||new Set(games.map(g=>g.title)).size<200)throw new Error("Catalog must contain at least 200 unique games.");
translate();renderQuestion();showLanding();

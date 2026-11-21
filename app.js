const questionSets = {
  en: [
    ["age", "Age", "How old are the children?", "Select all age groups; games must suit the full selected age range.", [["3-4","🐣","3–4 years","Little explorers"],["5-6","🧸","5–6 years","Curious creators"],["7-9","🦊","7–9 years","Big imaginations"],["10-12","🚀","10–12 years","Confident players"]]],
    ["players", "Children", "How many children are playing?", "Select all group sizes that may be playing.", [["1","🌟","One child","Solo play"],["2","🙌","Two children","A playful pair"],["3-4","🎈","3–4 children","A small group"],["5+","🎉","5+ children","Party or class"]]],
    ["place", "Setting", "Where will they play?", "Select every setting available.", [["indoors","🏠","Indoors",""],["outdoors","🌿","Outdoors",""],["travel","🚗","On the go",""],["either","🌤️","Either one",""]]],
    ["duration", "Time", "How much time do you have?", "Select every time limit that works.", [["5","⚡","Up to 5 min","A quick reset"],["15","⏱️","Up to 15 min","A play break"],["30","🕰️","Up to 30 min","Time to create"],["60","🌈","Up to 1 hour","A bigger adventure"]]],
    ["material", "Materials", "What can they use?", "Select all available materials; no-material games are always included.", [["none","🙌","Nothing","Just imagination"],["paper","🖍️","Paper & pencils","Simple craft supplies"],["household","📦","Household items","Cups, cushions and more"],["ball","⚽","A ball","Any safe ball"]]],
    ["activity", "Energy", "What kind of play feels right?", "", [["calm","☁️","Calm",""],["playful","🪁","Playful",""]]],
  ],
  sr: [
    ["age", "Uzrast", "Koliko godina imaju deca?", "Možete izabrati više uzrasta; igra mora odgovarati celom izabranom rasponu.", [["3-4","🐣","3–4 godine","Mali istraživači"],["5-6","🧸","5–6 godina","Radoznali kreativci"],["7-9","🦊","7–9 godina","Velika mašta"],["10-12","🚀","10–12 godina","Samostalni igrači"]]],
    ["players", "Deca", "Koliko dece se igra?", "Izaberite sve moguće veličine grupe.", [["1","🌟","Jedno dete","Samostalna igra"],["2","🙌","Dvoje dece","Razigrani par"],["3-4","🎈","3–4 deteta","Mala grupa"],["5+","🎉","5+ dece","Zabava ili odeljenje"]]],
    ["place", "Mesto", "Gde će se igrati?", "Izaberite sva mesta na kojima igra može da se odigra.", [["indoors","🏠","Unutra",""],["outdoors","🌿","Napolju",""],["travel","🚗","U pokretu",""],["either","🌤️","Svejedno",""]]],
    ["duration", "Vreme", "Koliko vremena imate?", "Izaberite sve vremenske okvire koji odgovaraju.", [["5","⚡","Do 5 min","Brza razbibriga"],["15","⏱️","Do 15 min","Kratka igra"],["30","🕰️","Do 30 min","Vreme za kreativnost"],["60","🌈","Do 1 sata","Veća avantura"]]],
    ["material", "Materijali", "Šta mogu da koriste?", "Izaberite sve dostupne materijale; igre bez materijala su uvek dobar izbor.", [["none","🙌","Ništa","Samo mašta"],["paper","🖍️","Papir i olovke","Jednostavan pribor"],["household","📦","Kućni predmeti","Čaše, jastuci i drugo"],["ball","⚽","Lopta","Bilo koja bezbedna lopta"]]],
    ["activity", "Energija", "Šta vam više odgovara?", "", [["calm","☁️","Mirno",""],["playful","🪁","Razigrano",""]]],
  ]
};

const copy = {
  en: {
      pageTitle:"Play Picks", brand:"Play Picks", description:"Find screen-free children's games for every moment.", home:"Play Picks home", language:"Language",
    nav:["For you","Explore","Popular","Saved"], profile:"Profile", hero:"Find a game idea <span>to play screen-free.</span>",
    heroCopy:"Choose an idea, put the phone away, and play together in person.", progress:"Setup progress", resultsEye:"Your play picks",
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
    trust:["Ages 3–12."], visualTitle:"Ready for play?", visualCopy:"Simple ideas for everyday moments",
    dailyLabel:"TODAY’S GAME", dailyTitle:"Five-minute connection", dailyCopy:"Short play still counts. A few focused minutes can turn an ordinary pause into a warm family memory.", dailyButtonLabel:"Explore a play idea →",
    benefitOneTitle:"We grow through play", benefitOneCopy:"Discover games that encourage movement, imagination, cooperation, and concentration.",
    benefitTwoTitle:"An easier choice", benefitTwoCopy:"Six simple choices help you find an activity to enjoy together.",
    benefitThreeTitle:"Little moments, big memories", benefitThreeCopy:"Playing and talking together creates moments you’ll both remember.",
    safetyTitle:"A note for safe, happy play", safetyCopy:"Stay nearby and adapt each game to your child and space.", safetyNoteAction:"Details", safetyDetailsTitle:"Keeping play safe", safetyDialogDone:"Close", safetyDetails:[["Stay close","Supervise play and adapt the activity to the child’s age, confidence and abilities."],["Prepare the space","Clear the floor, avoid slippery or crowded areas, and keep play away from roads, stairs and furniture used for climbing."],["Check materials","Use clean, age-appropriate materials. Keep small parts, sharp objects and broken balloon pieces away from young children; do not taste scents."],["Keep it voluntary","Let children pause, skip a turn or stop if they feel tired or uncomfortable. There is no need to compete or finish every challenge."]],
    liked:"Saved to your profile ♥", unliked:"Removed from saved games", saveAction:"Save", savedAction:"Saved",
    momentTitle:"By situation", skillTitle:"By skill",
    prepareLabel:"Before play", ageGuidanceTitle:"Age guidance", ageBonusLabel:"Age guidance", stepsTitle:"Steps", safetyNoteTitle:"Safety note", aboutTitle:"About this game", skillsTitle:"What it develops", startGame:"Start game", shareCopied:"Game information copied.", shareUnavailable:"Sharing is unavailable here.",
    toolTitles:{storyWords:"Story word generator",magicWord:"Magic word",forbiddenWords:"Forbidden word pair",letter:"Letter picker",timer:"One-minute timer",sculpture:"Sculpture idea"}, toolActions:{storyWords:"Generate 3 words",magicWord:"Generate a word",forbiddenWords:"Generate a pair",letter:"Pick a letter",sculpture:"Suggest a shape"}, toolStart:"Start", toolPause:"Pause", toolReset:"Reset", toolTimeUp:"One minute is up. Switch turns or finish the round.", toolWordLabel:"Word", toolForbiddenLabel:"Forbidden word", toolLetterLabel:"Letter",
    details:"What's the Fun?", categorySummary:()=>"", exampleTitle:"Try this example", parentTipTitle:"Parent tip", closeDetails:"Back to games", demoTitle:"How to play", demoPlay:"Play", demoPause:"Pause", demoSteps:[["Turn away","The observer turns around while the group chooses a leader."],["Copy the leader","Everyone copies the leader’s slow movement."],["Guess who leads","The observer turns back and guesses."]],
    feedbackLabel:"Send a comment", feedbackHint:"Your email app will open with the comment ready to send.", feedbackButton:"Prepare email", feedbackRequired:"Write a comment first.", feedbackSubject:"A comment about Play Picks"
  },
  sr: {
    pageTitle:"Naše igre", brand:"Naše igre", description:"Pronađite dečje igre bez ekrana za svaki trenutak.", home:"Početna stranica Naše igre", language:"Jezik",
    nav:["Za vas","Istraži","Popularno","Sačuvano"], profile:"Profil", hero:"Pronađite ideju za <span>igru bez ekrana.</span>",
    heroCopy:"Izaberite ideju, odložite telefon i igrajte se zajedno uživo.", progress:"Napredak izbora", resultsEye:"Predlozi za igru",
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
    trust:["Uzrast 3–12."], visualTitle:"Spremni za igru?", visualCopy:"Jednostavne ideje za svaki dan",
    dailyLabel:"DANAŠNJA IGRA", dailyTitle:"Pet minuta povezivanja", dailyCopy:"I kratka igra se računa. Nekoliko posvećenih minuta može običnu pauzu pretvoriti u lepu porodičnu uspomenu.", dailyButtonLabel:"Pogledaj ideju za igru →",
    benefitOneTitle:"Rastemo kroz igru", benefitOneCopy:"Otkrijte igre koje podstiču kretanje, maštu, saradnju i koncentraciju.",
    benefitTwoTitle:"Lakši izbor", benefitTwoCopy:"Šest jednostavnih izbora pomaže vam da lako pronađete šta ćete raditi zajedno.",
    benefitThreeTitle:"Mali trenuci, velike uspomene", benefitThreeCopy:"Kroz igru i razgovor stvarate trenutke koje ćete oboje pamtiti.",
    safetyTitle:"Napomena za bezbednu i veselu igru", safetyCopy:"Budite u blizini i prilagodite igru detetu i prostoru.", safetyNoteAction:"Detalji", safetyDetailsTitle:"Bezbedna igra", safetyDialogDone:"Zatvori", safetyDetails:[["Budite u blizini","Nadgledajte igru i prilagodite aktivnost uzrastu, sigurnosti i mogućnostima deteta."],["Pripremite prostor","Oslobodite pod, izbegavajte klizave ili prepune prostore i držite se dalje od puta, stepenica i nameštaja za penjanje."],["Proverite materijale","Koristite čiste materijale primerene uzrastu. Sitne delove, oštre predmete i pocepane delove balona držite dalje od male dece; mirise nemojte probati."],["Igra je dobrovoljna","Dete može da napravi pauzu, preskoči potez ili prekine igru ako je umorno ili mu je neprijatno. Nije potrebno takmičenje ni završavanje svakog izazova."]],
    liked:"Sačuvano u profilu ♥", unliked:"Uklonjeno iz sačuvanih igara", saveAction:"Sačuvaj", savedAction:"Sačuvano",
    momentTitle:"Situacije", skillTitle:"Veštine",
    prepareLabel:"Priprema", ageGuidanceTitle:"Uzrasna napomena", ageBonusLabel:"Prilagođavanje uzrastu", stepsTitle:"Koraci", safetyNoteTitle:"Bezbednosna napomena", aboutTitle:"O igri", skillsTitle:"Šta razvija?", startGame:"Pokreni igru", shareCopied:"Informacije o igri su kopirane.", shareUnavailable:"Deljenje nije dostupno u ovom pregledaču.",
    toolTitles:{storyWords:"Generator reči za priču",magicWord:"Čarobna reč",forbiddenWords:"Pojam i zabranjena reč",letter:"Birač slova",timer:"Tajmer od 1 minuta",sculpture:"Ideja za skulpturu"}, toolActions:{storyWords:"Izaberi 3 reči",magicWord:"Izaberi reč",forbiddenWords:"Izaberi par reči",letter:"Izaberi slovo",sculpture:"Predloži oblik"}, toolStart:"Pokreni", toolPause:"Pauziraj", toolReset:"Vrati na početak", toolTimeUp:"Minut je prošao. Zamenite uloge ili završite krug.", toolWordLabel:"Pojam", toolForbiddenLabel:"Zabranjena reč", toolLetterLabel:"Slovo",
    details:"Zavirimo!", categorySummary:()=>"", exampleTitle:"Primer", parentTipTitle:"Bonus ideja", closeDetails:"Nazad na igre", demoTitle:"Kako se igra", demoPlay:"Pusti", demoPause:"Pauziraj", demoSteps:[["Okreni se","Posmatrač se okreće dok grupa bira vođu."],["Prati vođu","Svi oponašaju spori pokret vođe."],["Pogodi ko vodi","Posmatrač se vrati i pogađa."]],
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
["Family Quiz","Kviz","Take turns answering questions about animals, nature and everyday life. Choose questions that fit the child's age; hints are welcome.","Naizmenično odgovarajte na pitanja o životinjama, prirodi i svakodnevnom životu. Birajte pitanja prema uzrastu deteta; nagoveštaji su dozvoljeni.","story"],
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
["Paper Airplane Test","Papirni avioni","Fold a simple paper airplane, fly it from a marked line, then change one fold to see whether it flies straighter or farther.","Napravite jednostavan papirni avion i bacite ga sa označene linije. Promenite jedan pregib i proverite da li leti pravo ili dalje.","build"],
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
["Invent a New Sport","Osmisli novi sport","Invent a movement game together: choose a goal, agree on one safe movement rule and try a short round.","Zajedno osmislite novu igru kretanja: izaberite cilj, dogovorite jedno bezbedno pravilo i isprobajte kratku rundu.","run"],
["Name That Mime","Pogodi pantomimu","Act out everyday actions without words for others to guess.","Bez reči odglumite svakodnevne radnje koje ostali pogađaju.","pretend"],
["Paper Maze","Lavirint na papiru","Draw a simple maze with a start, finish and a few dead ends, then swap mazes and trace each route with a pencil.","Nacrtajte jednostavan lavirint sa početkom, ciljem i nekoliko slepih ulica, pa zamenite papire i pronađite put olovkom.","draw"],
["Backyard Olympics","Dvorišna olimpijada","Create three simple events for speed, aim and balance.","Napravite tri jednostavne discipline brzine, ciljanja i ravnoteže.","run"],
["Make a Goal","Napravimo gol","On flat, clear ground, mark a small goal with two short sticks or stones that will not roll. Take turns gently rolling a soft ball through it.","Na ravnom, slobodnom prostoru označite mali gol kratkim grančicama ili kamenovima koji se ne kotrljaju. Naizmenično nežno kotrljajte mekanu loptu kroz gol.","ball"],
["Sound Orchestra","Orkestar zvukova","Assign each player a sound and conduct a group performance.","Dodelite svakom igraču zvuk i dirigujte grupnim nastupom.","story"],
["Forbidden Word","Zabranjena reč","Describe a familiar word without saying it or its forbidden clue word while the others guess.","Opišite poznatu reč bez izgovaranja njenog naziva ili povezane zabranjene reči, dok ostali pogađaju.","story"],
["Sardines","Sardine (obrnuta žmurka)","One child hides while the others search, then everyone joins the hiding place.","Jedno dete se sakrije, a ostali ga traže; ko ga pronađe, tiho mu se pridruži.","search"],
["Memory Tray","Poslužavnik pamćenja","Observe familiar objects, remove one to guess what is missing, or rearrange them for a harder round.","Posmatrajte poznate predmete, sklonite jedan i pogodite šta nedostaje ili ih premestite za teži krug.","search"],
["Bridge Builders","Graditelji mosta","Span a small gap between two sturdy supports with folded paper, cardboard strips or craft sticks. Test the bridge with a small toy and add one piece at a time.","Prebacite presavijeni papir, trake kartona ili drvene štapiće preko malog razmaka između dva stabilna oslonca. Ispitajte most malom igračkom i dodajte po jedan deo.","build"],
["Compliment Ball","Lopta lepih reči","Pass a soft ball gently around the group. Whoever catches it shares one specific, kind thing someone in the group did.","Nežno dodajte mekanu loptu u krugu. Ko je uhvati, kaže jednu konkretnu lepu stvar koju je neko iz grupe uradio.","ball"],
["Weather Reporter","Vremenski reporter","Present today’s weather with dramatic gestures and predictions.","Predstavite današnje vreme dramatičnim pokretima i prognozom.","pretend"],
["Dot-to-Doodle","Od tačke do crteža","Place dots to outline a recognizable picture, connect them and add details.","Postavite tačke u oblik prepoznatljivog crteža, spojite ih i dodajte detalje.","draw"],
["Quiet Detective","Tihi detektiv","Observe one small area quietly and take turns naming new details without repeating them.","U tišini posmatrajte isti deo prostorije i naizmenično navodite nove detalje bez ponavljanja.","search"],
["Obstacle Mission","Misija sa preprekama","Crawl, step and weave through a safe homemade course.","Puzite, koračajte i provlačite se kroz bezbedan kućni poligon.","run"],
["Switch Signals","Obrnuti signali","React to one clap and two claps, then switch the meanings when the leader calls change.","Reagujte na jedan i dva pljeska, a zatim zamenite značenja kada vođa kaže promena.","dance"],
["Pebble Patterns","Šare od kamenčića","Arrange stones in repeating patterns, spirals or pictures.","Složite kamenčiće u ponavljajuće šare, spirale ili slike.","nature"],
["Copycat Clap","Kopiraj pljesak","Create clap rhythms that others echo and extend.","Napravite ritam pljeskanja koji ostali ponavljaju i produžavaju.","dance"],
["Hero Costume Design","Kostim za junaka","Draw a costume with three useful parts for an imaginary hero's adventure.","Nacrtajte tri korisna dela kostima za avanturu zamišljenog junaka.","draw"],
["Alphabet Hunt","Lov na slova","Find objects beginning with as many letters as possible.","Pronađite predmete koji počinju na što više različitih slova.","search"],
["Emotion Charades","Pantomima osećanja","Silently act out a feeling while others guess, then switch roles.","Bez reči odglumite osećanje dok ostali pogađaju, pa zamenite uloge.","pretend"],
["Chalk River","Reka od krede","Cross a chalk river together by walking between large stepping-stone islands.","Zajedno pređite reku od krede hodajući između velikih ostrva.","balance"],
["Pass the Sketch","Prosledi crtež","Each player adds one detail before passing the picture.","Svaki igrač dodaje jedan detalj pre nego što prosledi crtež.","draw"],
["Tiny Garden Design","Dizajn male bašte","Create a safe, imaginative spot for a tiny garden visitor using found natural materials.","Napravite siguran, maštovit kutak za malog gosta u bašti koristeći pronađene prirodne materijale.","nature"],
["Hot and Cold Hunt","Toplo-hladno potraga","Guide a seeker toward a hidden object using hot and cold clues.","Vodite tragača ka skrivenom predmetu uz tragove toplo i hladno.","search"],
["Balloon Keep-Up","Balon ne sme pasti","Keep a light balloon in the air using gentle taps.","Održavajte lagani balon u vazduhu nežnim udarcima.","ball"],
["Living Room Camp","Kamp u dnevnoj sobi","Build a cozy den and invent a campfire story.","Napravite udobnu kućicu i osmislite priču uz zamišljenu vatru.","build"],
["Slow-Motion Race","Usporena trka","Race to the finish while moving as slowly as possible.","Trkajte se do cilja krećući se što sporije.","balance"],
["Rhythm Leader","Vođa ritma","Lead a repeating body-percussion pattern for the group.","Vodite ponavljajući ritam pljeskanjem i tapkanjem po telu.","dance"],
["What Changed","Šta se promenilo","One player remembers the group’s pose, turns away, and guesses the one detail the others change.","Jedan igrač zapamti pozu grupe i pogađa jedan detalj koji ostali promene.","search"],
["Paper Puppet Show","Predstava papirnih lutaka","Each player draws a paper character, then the group performs a short story in which the characters solve a simple problem.","Svako nacrta papirnog junaka, a zatim zajedno odigrate kratku priču u kojoj likovi rešavaju jednostavan problem.","story"],
["Zigzag Delivery","Cik-cak dostava","Walk a zigzag delivery course around three plastic cups, first empty-handed and then carrying a soft toy.","Prođite cik-cak stazu oko tri plastične čaše, prvo praznih ruku, a zatim noseći plišanu igračku.","run"],
["Chain Reaction","Lančana reakcija","Set off a chain of at least eight dominoes that nudges a lightweight foam ball across a finish line.","Pokrenite lanac od najmanje osam domina koji pogura laganu penastu loptu preko ciljne linije.","build"],
["One-Line Creature","Biće iz jedne linije","Draw a creature in one continuous line, then add its walking path and act out its gait.","Nacrtajte biće jednom neprekidnom linijom, dodajte mu putanju i odglumite njegov hod.","draw"],
["Museum Guide","Muzejski vodič","Display three safe objects. The guide introduces what each is used for while the visitor asks questions, then they switch roles.","Izložite tri bezbedna predmeta. Vodič objašnjava čemu služe, a posetilac postavlja pitanja; zatim zamene uloge.","pretend"],
["Balance Delivery","Dostava u ravnoteži","Carry a small soft ball in a large spoon from the start tape to the finish without steadying it by hand.","Prenesite malu mekanu lopticu u većoj kašiki od startne do ciljne trake, bez pridržavanja rukom.","balance"],
["Category Countdown","Odbrojavanje pojmova","Name five things in a category before time runs out.","Nabrojte pet stvari iz kategorije pre isteka vremena.","story"],
["Spider Web Route","Staza paukove mreže","Step over and under safe lines arranged like a web.","Prekoračite i provucite se ispod bezbednih linija poput mreže.","run"],
["Nature Bingo","Bingo iz prirode","Look for a bird, a smooth stone, a leaf and a tiny sound.","Potražite pticu, gladak kamen, list i tihi zvuk.","nature"],
["Bounce and Catch","Odbij i uhvati","Bounce a ball once and add a movement before catching.","Odbijte loptu jednom i dodajte pokret pre hvatanja.","ball"],
["Dance Traffic Lights","Plesni semafor","Move on green, slowly on yellow and freeze on red.","Krećite se na zeleno, sporo na žuto i stanite na crveno.","dance"],
["Box Invention","Izum od kutije","Transform a box into a useful imaginary machine.","Pretvorite kutiju u korisnu zamišljenu mašinu.","build"],
["Scent Explorer","Istraživač mirisa","Compare two mild familiar scents, describe how they differ and what each reminds you of.","Uporedite dva blaga, poznata mirisa, opišite razlike i na šta vas svaki podseća.","search"],
["Superhero Training","Trening superheroja","Complete a rescue mission by listening to a stuffed friend and helping them reach a safe base.","Izvršite spasilačku misiju: saslušajte plišanog prijatelja i pomozite mu da stigne do sigurne baze.","pretend"],
["Symmetry Art","Simetrična umetnost","An adult draws half a picture beside a center line; the child copies its mirror image on the other half.","Odrasli nacrta polovinu slike uz srednju liniju, a dete je preslikava na drugu polovinu.","draw"],
["Jumping Numbers","Brojevi u skoku","An adult calls a number; the child makes one small jump to the matching card and says the number aloud.","Odrasli izgovara broj, a dete jednim malim skokom dolazi do odgovarajuće kartice i glasno kaže broj.","run"],
["Twig Letters","Slova od grančica","Form letters or short words using fallen twigs.","Napravite slova ili kratke reči od opalih grančica.","nature"],
["Corner Goals","Golovi u uglovima","Roll a ball toward different corner goals for points.","Kotrljajte loptu ka golovima u uglovima za poene.","ball"],
["Human Sculpture","Ljudska skulptura","Work together to form a named object with body poses.","Zajedno telima napravite oblik zadatog predmeta.","balance"],
["Sound Map","Mapa zvukova","Sit quietly and draw where each surrounding sound comes from.","Sedite mirno i nacrtajte odakle dolazi svaki zvuk.","draw"],
["Kitchen Band","Kuhinjski bend","A conductor sets a short rhythm; players repeat it by gently tapping wooden or plastic items on unbreakable containers.","Dirigent zada kratak ritam, a svirači ga ponavljaju nežnim kuckanjem drvenim ili plastičnim predmetima po nelomljivim posudama.","dance"],
["Indoor Picnic Quest","Potraga za kućni piknik","Gather pretend picnic items through a clue trail.","Sakupite zamišljene stvari za piknik prateći tragove.","search"],
["Build a Creature","Napravi biće","Build a creature from safe household objects, name it and explain how its parts help it do something special.","Sastavite biće od bezbednih kućnih predmeta, dajte mu ime i objasnite kako mu njegovi delovi pomažu.","build"],
["Captain Says","Kapetan kaže","Follow commands only when they begin with ‘Captain says.’ If those words are missing, stay still.","Uradite komandu samo ako počinje rečima „Kapetan kaže“. Ako ih nema, ostanite mirni.","pretend"],
["Hopscotch Remix","Nove školice","Draw or tape a numbered six-square hopscotch path, add actions to marked squares and hop through in order.","Nacrtajte ili trakom označite numerisanu putanju školica sa šest polja; skačite redom i uradite zadatu radnju na označenom polju.","run"],
["Leaf Shadow Trace","Crtanje senke lista","Trace a fallen leaf’s shadow now and again later to compare how its position and length change.","Ocrtajte senku opalog lista sada i kasnije da biste uporedili promenu položaja i dužine.","nature"],
["Mood Music Moves","Pokreti uz raspoloženje","Move differently to happy, calm and dramatic rhythms.","Krećite se drugačije uz vesele, mirne i dramatične ritmove.","dance"],
["Tallest Tiny Tower","Najviša mala kula","Build a tall tower from the smallest safe objects available.","Napravite visoku kulu od najmanjih dostupnih bezbednih predmeta.","build"],
["Guess My Rule","Pogodi moje pravilo","One player secretly sorts objects by a rule while others analyze the objects and arrangement to guess it.","Jedan igrač tajno razvrsta predmete po pravilu, a ostali analiziraju predmete i raspored da bi ga otkrili.","search"],
["Postcard Adventure","Avantura na razglednici","Draw a place and write one sentence from an imaginary trip.","Nacrtajte mesto i napišite rečenicu sa zamišljenog putovanja.","draw"],
["Stepping-Stone Story","Priča preko kamenja","Add one story sentence on every safe stepping spot.","Dodajte rečenicu priče na svakoj bezbednoj tački staze.","story"],
["Wind Race","Trka na vetru","Each player gets their own lightweight leaf or paper scrap and lane, then gently blows it from start to finish without using hands.","Svaki igrač dobija svoj lagani list ili papirić i stazu, pa ga nežno duva od starta do cilja bez korišćenja ruku.","nature"],
["Circle Keep-Away","Čuvaj krug","Players gently roll a soft ball along the floor around a circle while one player in the middle tries to stop it by hand; no kicking or throwing.","Igrači nežno kotrljaju mekanu loptu po podu u krugu, dok jedan igrač u sredini pokušava da je zaustavi rukom; nema šutiranja ni bacanja.","ball"],
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
["Pocket Narrator","Džepni pripovedač","Three objects become characters in one story. Speak as an object, let others guess and continue the story.","Tri predmeta postaju likovi u jednoj priči. Govorite kao predmet, pustite ostale da pogađaju i nastavite priču.","story"],
["Rhyme Relay","Rimovana štafeta","Build a chain of rhyming words, one word at a time.","Gradite lanac rimovanih reči, reč po reč.","story"],
["Sound Story","Priča od zvukova","Tell a short story together; make each character’s agreed sound when they appear.","Zajedno pričajte kratku priču; napravite dogovoreni zvuk svakog lika kada se pomene.","story"],
["Question Detective","Detektiv pitanja","Ask yes-or-no questions to discover the secret object.","Postavljajte pitanja sa da ili ne da otkrijete tajni predmet.","story"],
["Kindness News","Vesti dobrote","Turn a kind act into a short news story with a headline and interview.","Pretvorite lep postupak u kratku vest sa naslovom i intervjuom.","story"],
["Opposite Day Tale","Priča suprotnosti","Continue one story by reversing details in each new sentence.","Nastavite jednu priču tako što ćete u svakoj novoj rečenici preokretati detalje.","story"],
["Soundtrack Story","Priča sa muzikom","Add a body sound whenever the story reaches an exciting moment.","Dodajte zvuk telom kad god priča stigne do uzbudljivog dela.","story"],
["Magic Word Story","Priča čarobne reči","Choose a word that changes the story every time it is spoken.","Izaberite reč koja menja priču svaki put kada se izgovori.","story"],
["Secret Shape Sketch","Crtež tajnog oblika","Hide a shape inside a picture and let others find it.","Sakrijte oblik u crtežu i pustite druge da ga pronađu.","draw"],
["Line to Landscape","Linija postaje pejzaž","Turn one wavy line into a landscape with added details.","Pretvorite jednu talasastu liniju u pejzaž dodavanjem detalja.","draw"],
["Three-Color Creature","Biće od tri boje","Design a creature using only three chosen colors.","Osmislite biće koristeći samo tri izabrane boje.","draw"],
["Round-Robin Doodle","Kružni crtež","Pass a drawing around and add one surprising detail each turn.","Prosleđujte crtež i dodajte po jedan detalj iznenađenja.","draw"],
["Shape Family","Porodica oblika","Give geometric shapes names, feelings and a family story.","Dajte geometrijskim oblicima imena, osećanja i porodičnu priču.","draw"],
["Folded Face","Presavijeno lice","Fold paper, draw one feature, unfold and complete the funny face.","Presavijte papir, nacrtajte detalj, otvorite ga i dovršite lice.","draw"],
["Postcard Puzzle","Sastavi razglednicu","Draw a postcard scene on paper. An adult cuts it into at least six pieces; mix them up and let a partner put the picture back together.","Nacrtajte prizor za razglednicu. Odrasla osoba ga iseče na najmanje šest delova; pomešajte ih i neka partner ponovo sastavi sliku.","draw"],
["Pattern Portrait","Portret sa šarama","Make a portrait where hair, clothes and background use patterns.","Napravite portret sa šarama u kosi, odeći i pozadini.","draw"],
["Invisible Ink Map","Mapa nevidljivog mastila","Draw a secret route with symbols and explain how to decode it.","Nacrtajte tajnu rutu simbolima i objasnite kako se čita.","draw"],
["Draw the Feeling","Nacrtaj osećanje","Choose a feeling such as joy, sadness or calm and show it with colors and lines, without drawing a face.","Izaberite osećanje, poput radosti, tuge ili mira, pa ga prikažite bojama i linijama bez crtanja lica.","draw"],
["Button Sorting Lab","Laboratorija dugmića","Sort safe buttons or objects in as many ways as possible.","Razvrstajte bezbedne dugmiće ili predmete na što više načina.","search"],
["What Is Missing?","Šta nedostaje?","Look at three to five familiar objects, cover them, remove one and guess what is missing. Then switch roles.","Pogledajte tri do pet poznatih predmeta, pokrijte ih, sklonite jedan i pogodite šta nedostaje. Zatim zamenite uloge.","search"],
["Clue Collector","Sakupljač tragova","Follow simple clues that lead to a safe hidden surprise.","Pratite jednostavne tragove do bezbednog skrivenog iznenađenja.","search"],
["Sound Source Hunt","Potraga za izvorom zvuka","Listen to a familiar sound and point toward where it comes from; keep your eyes open.","Slušajte poznati zvuk i pokažite odakle dolazi; oči ostaju otvorene.","search"],
["Odd One Out","Uljez u grupi","Find the object that does not belong and explain why.","Pronađite predmet koji ne pripada grupi i objasnite zašto.","search"],
["Touch and Tell","Dodirni i opiši","Feel a hidden object in an opaque bag, describe it without naming it, and let the others guess what it is.","Opipajte predmet u neprozirnoj torbi, opišite ga bez imenovanja i pustite ostale da pogode šta je.","search"],
["Sequence Spotter","Uoči niz","Study a repeating pattern of safe objects, predict what comes next and explain the rule.","Posmatrajte obrazac od bezbednih predmeta, predvidite šta sledi i objasnite pravilo.","search"],
["Room Scavenger List","Spisak sobne potrage","Find safe items that match a list of colors, shapes or textures.","Pronađite bezbedne predmete prema bojama, oblicima ili teksturama.","search"],
["Secret Path Finder","Pronađi tajnu stazu","Remember a short route and guide someone through it with clues.","Zapamtite kratku rutu i vodite nekoga tragovima.","search"],
["Five Things Fast","Pet stvari brzo","Name or find five items that fit the chosen clue before counting down.","Navedite ili pronađite pet predmeta pre odbrojavanja.","search"],
["Paper Bridge Test","Test papirnog mosta","Build a paper bridge and test which fold makes it stronger.","Napravite most od papira i isprobajte koji pregib je jači.","build"],
["Straw City","Grad od slamki","Connect safe straws or craft sticks into roads and buildings.","Spojite bezbedne slamčice ili štapiće u puteve i zgrade.","build"],
["Marshmallow Structures","Konstrukcije od mekanih kockica","Build a structure that balances three lightweight pieces.","Napravite konstrukciju koja drži tri lagana dela u ravnoteži.","build"],
["Bridge to the Toy","Most do igračke","Design a route that lets a small toy cross an imaginary river.","Osmislite put kojim mala igračka prelazi zamišljenu reku.","build"],
["Cardboard Telescope","Kartonski teleskop","Look at a safe object through a cardboard tube, notice three details and let a partner guess from your clues.","Kroz kartonsku cev posmatrajte bezbedan predmet, uočite tri detalja i pustite partnera da pogodi na osnovu tragova.","build"],
["Maze Builder","Pravimo lavirint","Build a maze from any safe items you have, then guide a toy from start to finish.","Od bezbednih predmeta koje imate napravite lavirint, pa provedite igračku od početka do cilja.","build"],
["Balance Sculpture","Skulptura ravnoteže","Build a low, stable sculpture on the floor using large, lightweight objects. Add one piece at a time and see how the base affects balance.","Na podu napravite nisku, stabilnu skulpturu od krupnih, laganih predmeta. Dodajte po jedan i pogledajte kako širina osnove utiče na ravnotežu.","build"],
["Tiny Shop","Mala prodavnica","Build a pretend shop and create signs, shelves and products.","Napravite zamišljenu prodavnicu sa natpisima, policama i proizvodima.","build"],
["Paper Playground","Igralište od papira","Design a paper playground with spaces for different games.","Osmislite igralište od papira sa prostorima za različite igre.","build"],
["Balloon Tap Circle","Krug dodira balona","Keep a balloon moving around the circle without holding it.","Održavajte balon u kretanju kroz krug bez zadržavanja.","ball"],
["Target Ladder","Merdevine za cilj","Move a soft ball through targets that get farther each round.","Pogađajte meke mete koje su sve dalje u svakom krugu.","ball"],
["Roll and Follow","Kotrljaj i prati","Roll a ball to a partner, then follow it with a new movement.","Otkotrljajte loptu partneru i pratite je novim pokretom.","ball"],
["Two-Bounce Catch","Hvatanje posle dva odskoka","Let the ball bounce twice before trying a careful catch.","Pustite loptu da odskoči dva puta pre pažljivog hvatanja.","ball"],
["Guess the Leader","Pogodi vođu","One player turns away while the group chooses a leader. The leader makes slow movements for everyone to copy. The player turns back toward the group and guesses who is leading.","Jedan igrač se okrene leđima dok grupa bira vođu. Vođa pravi spore pokrete koje svi oponašaju. Igrač se zatim okrene prema grupi i pogađa ko vodi.","pretend"],
["Balloon Volleyball","Odbojka balonom","Tap a balloon over a line and count cooperative hits.","Prebacujte balon preko linije i brojite zajedničke udarce.","ball"],
["Partner Pass Pattern","Šablon dodavanja","Stand in a circle and create a route of gentle passes. Repeat the same order, then add one pass and see if everyone remembers the growing pattern.","Stanite u krug i napravite redosled blagih dodavanja. Ponovite isti redosled, pa dodajte jedno dodavanje i proverite da li grupa pamti ceo niz.","ball"],
["Rolling Ramps","Rampe za kotrljanje","Make a gentle ramp and compare how different balls travel.","Napravite blagu rampu i uporedite kretanje različitih lopti.","ball"],
["Circle Bounce","Odbijanje u krugu","Bounce a ball once before passing it to the next player.","Odbijte loptu jednom pre nego što je dodate sledećem igraču.","ball"],
["Target Story Toss","Bacanje priče u metu","Name a story detail whenever the ball lands in a target.","Recite detalj priče svaki put kada lopta pogodi metu.","ball"],
["Leaf Line-Up","Poređaj lišće","Arrange four to six fallen leaves from smallest to largest, then explain the rule and try a new sorting clue.","Poređajte četiri do šest opalih listova od najmanjeg do najvećeg, objasnite pravilo i zatim pokušajte s novim kriterijumom.","nature"],
["Nature Number Hunt","Lov na brojeve u prirodi","Find natural groups that match called numbers.","Pronađite grupe iz prirode koje odgovaraju izgovorenim brojevima.","nature"],
["Stick Shadow Shapes","Oblici senki grančica","Use sticks and sunlight to create and guess shadow shapes.","Koristite grančice i sunce da napravite i pogodite oblike senki.","nature"],
["Bird Sound Pause","Pauza za zvuke ptica","Pause outdoors to listen for a bird call, quietly imitate one sound, and let others describe what they heard.","Zastanite napolju, osluškujte cvrkut, tiho oponašajte jedan zvuk i opišite šta ste čuli.","nature"],
["Nature Color Wheel","Točak boja prirode","Collect fallen items to make a circular color wheel.","Sakupite otpale delove i napravite kružni točak boja.","nature"],
["Windy Ribbon Watch","Posmatranje vetra","Watch a ribbon or leaf and copy its movement with your body.","Posmatrajte traku ili list i oponašajte njegovo kretanje telom.","nature"],
["Mini Habitat","Malo stanište","Arrange natural loose parts into a pretend home for a tiny creature.","Složite prirodne delove u zamišljeni dom malog bića.","nature"],
["Cloud Shape Chain","Lanac oblika oblaka","Spot a cloud shape and connect it to the next player’s idea.","Uočite oblik oblaka i nadovežite se na ideju sledećeg igrača.","nature"],
["Nature Texture Cards","Kartice tekstura prirode","Match safe natural textures and describe how they feel.","Spojite bezbedne teksture iz prirode i opišite kakve su na dodir.","nature"],
["Sunrise Stretch Story","Priča uz istezanje","Stretch like parts of a landscape while telling a morning story.","Istežite se kao delovi pejzaža dok pričate jutarnju priču.","nature"],
["Mirror Animal","Životinjsko ogledalo","Copy a partner’s animal movement, then switch leaders.","Kopirajte pokrete životinje partnera, pa zamenite vođu.","dance"],
["Beat the Pause","Pobedi pauzu","Move to a steady beat and create a pose during every pause.","Krećite se uz ritam i zauzmite pozu tokom svake pauze.","dance"],
["Body Letter Dance","Ples slova telom","Choose a short word and silently form each letter with your body while a partner guesses and writes it down.","Izaberite kratku reč i telom prikažite njena slova jedno po jedno, dok ih partner pogađa i zapisuje.","dance"],
["Slow Fast Switch","Sporo-brza promena","Switch between slow and fast movement when the leader signals.","Menjajte spore i brze pokrete na znak vođe.","dance"],
["Clap and Step","Pljesak i korak","Combine a clap and a step into a growing rhythm sequence.","Spojite pljesak i korak u ritam koji raste.","dance"],
["Rainbow Ribbon Dance","Ples šarenih traka","Dance with imaginary ribbons that trace different patterns.","Plešite sa zamišljenim trakama koje prave različite šare.","dance"],
["Partner Shadow Dance","Ples senki u paru","Follow the leader along a slow, clear path, copying each move one beat later while keeping a safe gap.","Pratite vođu sporom, slobodnom putanjom i ponavljajte pokrete takt kasnije, uz bezbedan razmak.","dance"],
["Mood Statues","Statue raspoloženja","Make a statue for each feeling and explain the pose.","Napravite statuu za svako osećanje i objasnite pozu.","dance"],
["Direction Dance","Ples pravaca","Turn, step and reach in the direction called by the leader.","Okrenite se, zakoračite i pružite ruke u smeru vođe.","dance"],
["Celebration Choreo","Koreografija slavlja","Create a short group dance with a shared final move.","Napravite kratak grupni ples sa zajedničkim završnim pokretom.","dance"],
["Hide and Seek","Žmurke","One player counts slowly to ten while the others hide in an agreed safe area. The seeker finds everyone, then players switch roles.","Jedan igrač polako broji do deset dok se ostali sakrivaju u dogovorenom bezbednom prostoru. Tražilac ih pronalazi, pa menjaju uloge.","search"],
["Toy Doctor","Doktor za igračke","Give a toy a check-up and explain how to help it feel better.","Pregledajte igračku i objasnite kako da joj bude bolje.","pretend"],
["Restaurant Imagination","Restoran mašte","Run a restaurant with menus, orders and creative dishes.","Vodite restoran sa jelovnicima, porudžbinama i maštovitim jelima.","pretend"],
["Post Office Play","Igra pošte","Draw symbols on pretend letters and matching destinations, then sort and deliver each letter to the right place.","Nacrtajte simbole na pisma i podudarna odredišta, pa razvrstajte i dostavite svako pismo na pravo mesto.","pretend"],
["Space Mission Control","Kontrola svemirske misije","Count down, solve a mission problem and celebrate the landing.","Odbrojavajte, rešite problem misije i proslavite sletanje.","pretend"],
["Helpful Inventor","Korisni pronalazač","Describe an everyday problem in three clues, then invent and act out a tool that could solve it.","Opišite svakodnevni problem kroz tri traga, pa izmislite i odglumite alat koji bi ga rešio.","pretend"],
["Underwater Tour","Podvodni obilazak","Guide visitors through an imaginary ocean using movements and sounds.","Vodite posetioce kroz zamišljeni okean pokretima i zvucima.","pretend"],
["Family Newsroom","Porodična redakcija","Take turns as reporter and guest: share or invent a cheerful headline, tell a short story and ask a friendly question.","Naizmenično budite reporter i gost: podelite ili izmislite vedar naslov, ispričajte kratku vest i postavite prijatno pitanje.","pretend"],
["Time-Travel Guide","Vodič kroz vreme","Guide a visitor through a specific place in the past or future, describe what life is like and answer a question, then switch roles.","Vodič vodi posetioca na konkretno mesto u prošlosti ili budućnosti, opisuje kakav je tamo život i odgovara na pitanje, pa zamenite uloge.","pretend"],
["Tiny Theatre","Malo pozorište","Choose two characters and one thing they want. Act out a short scene where a small problem appears and they solve it together, then switch roles and try a different ending.","Izaberite dva lika i jednu želju. Odglumite kratku scenu u kojoj se pojavi mali problem i zajedno ga rešavate, pa zamenite uloge i pokušajte drugačiji završetak.","pretend"],
["Quiet Cloud Count","Tiho brojanje oblaka","Watch the sky or imagine clouds and count slow breaths together.","Posmatrajte nebo ili zamišljajte oblake i zajedno brojite spore udaha.","nature"],
["Feather Focus","Pažnja na pero","Watch a feather or tissue float and describe its path.","Posmatrajte pero ili maramicu kako lebdi i opišite putanju.","nature"],
["Breathing Shapes","Oblici disanja","Trace a square or circle in the air while breathing slowly.","Pratite kvadrat ili krug u vazduhu uz sporo disanje.","nature"],
["Silent Sorting","Tiho razvrstavanje","Sort safe objects without speaking, then compare your system.","Razvrstajte bezbedne predmete bez govora i uporedite sistem.","nature"],
["Calm Color Search","Potraga za mirnom bojom","Find five objects in one calming color and arrange them gently.","Pronađite pet predmeta umirujuće boje i nežno ih poređajte.","nature"],
["Listening Minute","Minut slušanja","Sit comfortably and name the sounds you notice after one minute.","Udobno sedite i posle jednog minuta navedite zvuke koje čujete.","nature"],
["Tense and Relax","Stegni i opusti","Gently tense and relax different body parts like a robot.","Nežno stežite i opuštajte delove tela kao robot.","nature"],
["Quiet Pattern Tiles","Tihe šare","Make a repeating pattern with safe objects in complete silence.","Napravite ponavljajuću šaru od bezbednih predmeta u tišini.","nature"],
["Gratitude Garden","Bašta zahvalnosti","Take turns sharing something good from the day and draw a flower for it.","Naizmenično podelite nešto lepo iz dana i nacrtajte cvet za to.","nature"],
["Breathing Buddy","Drug za disanje","Help a toy or partner match five slow, comfortable breaths.","Pomozite igrački ili partneru da prati pet sporih, prijatnih udaha.","nature"],
["Letter Clue Guess","Na slovo, na slovo","Choose a letter and category, give clues for a word that starts with it, and let others guess the word.","Izaberite slovo i kategoriju, dajte tragove za reč koja počinje tim slovom i neka je ostali pogode.","story"],
["Movement Commands","Komande pokreta","Follow one safe movement command at a time: make a star shape, crouch, lie on the floor or do one small jump. Pause between moves.","Pratite jednu bezbednu komandu za pokret: raširite se kao zvezda, čučnite, lezite na pod ili napravite mali skok. Pravite pauze između pokreta.","run"],
["Don't Step on a Crack","Ne gazi pukotinu","With an adult, walk at a normal pace on an even sidewalk and avoid the seams between paving slabs. Do not jump.","Uz odraslu osobu hodajte uobičajenim korakom po ravnom trotoaru i izbegavajte spojne linije između ploča. Ne skačite.","search"],
["Guess Who I Am","Pogodi ko sam","One player thinks of a familiar person or story character. The others ask yes-or-no questions until they guess, then switch roles.","Jedan igrač zamisli poznatu osobu ili lik iz priče. Ostali postavljaju pitanja na koja se odgovara sa „da” ili „ne” dok ne pogode, pa menjaju uloge.","story"],
["One-Minute Challenge","Minutni izazov","Choose a simple task, set a one-minute timer and take turns seeing how many times you can do it. Keep it playful, not competitive.","Izaberite jednostavan zadatak, podesite tajmer na minut i naizmenično pratite koliko puta možete da ga uradite. Neka bude zabavno, bez takmičenja.","story"]
];

const scenes = {
  run:["#c8e7fa","#4389b4"], draw:["#ffd6a6","#c77725"], ball:["#b9e9d5","#408c73"], build:["#dcd6ff","#7565ba"],
  search:["#ffe49a","#ae7720"], dance:["#ffc9c2","#bd5d54"], story:["#cce8d5","#4f8d64"], nature:["#d9edb3","#638742"],
  balance:["#d7dbff","#646db5"], pretend:["#f7d2ec","#a85f91"]
};

function watercolorSvg(background, accent, index, artwork) {
  const seed=index+23;
  const pigmentMarks=Array.from({length:54},(_,i)=>{const x=(i*83+seed*29)%440,y=(i*47+seed*13)%220,rx=2+(i*13)%8,ry=1+(i*17)%5,color=i%4===0?accent:"#fff";return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${color}" opacity="${i%4===0?.12:.17}"/>`}).join("");
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 220"><defs>
    <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".58"/><stop offset="1" stop-color="${background}" stop-opacity=".1"/></linearGradient>
    <filter id="washBlur"><feGaussianBlur stdDeviation="10"/></filter>
    <filter id="paint" x="-8%" y="-12%" width="116%" height="124%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="${seed}" result="fiber"/><feDisplacementMap in="SourceGraphic" in2="fiber" scale="1.7" xChannelSelector="R" yChannelSelector="G" result="roughPaint"/><feGaussianBlur in="roughPaint" stdDeviation=".22" result="softPaint"/><feBlend in="SourceGraphic" in2="softPaint" mode="normal"/></filter>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="2" seed="${seed+17}" result="paperGrain"/><feColorMatrix in="paperGrain" type="saturate" values="0" result="grayGrain"/><feComponentTransfer in="grayGrain"><feFuncA type="table" tableValues="0 .12"/></feComponentTransfer></filter>
  </defs>
  <rect width="440" height="220" rx="24" fill="${background}"/>
  <rect width="440" height="220" rx="24" fill="url(#paper)"/>
  <path d="M-24 139C35 105 91 115 131 151s71 43 121 18 98-59 212-24v83H-24z" fill="#fff" opacity=".36" filter="url(#washBlur)"/>
  <path d="M-18 188c49-35 93-15 142-18 63-4 101-39 155-22s99 20 179-4v76H-18z" fill="${accent}" opacity=".12" filter="url(#washBlur)"/>
  <g filter="url(#paint)">${artwork}</g>
  <g>${pigmentMarks}</g>
  <rect width="440" height="220" rx="24" fill="#857762" opacity=".17" filter="url(#grain)"/>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function sceneSvg(scene, index, title, description) {
  const [bg, accent] = scenes[scene];
  const text=`${title} ${description}`.toLowerCase();
  const conceptRules=[
    [/\b(rainbow|colour|color|colors|colours)\b/,"rainbow"],
    [/\b(quiz|question|guess|riddle|clue|detective|mystery|missing|secret rule)\b/,"question"],
    [/\b(balloon)\b/,"balloon"],
    [/\b(ball|toss|target|goal|bowling|bounce|catch|pass)\b/,"ball"],
    [/\b(bridge)\b/,"bridge"],
    [/\b(tower|structure|build|building|construction)\b/,"tower"],
    [/\b(maze|labyrinth|route|path|trail|course)\b/,"maze"],
    [/\b(sound|music|rhythm|song|listen|clap|whisper|sing)\b/,"note"],
    [/\b(draw|drawing|sketch|portrait|picture|postcard|paper|art|letter|map)\b/,"pencil"],
    [/\b(nature|leaf|leaves|tree|garden|flower|cloud|wind|bird|seed|twig)\b/,"leaf"],
    [/\b(animal|creature|pet)\b/,"animal"],
    [/\b(restaurant|mail|poem|story|news|theatre|interview)\b/,"bubble"],
    [/\b(mirror|copy|imitate|follow)\b/,"mirror"],
    [/\b(dance|move|movement|jump|run|step|crawl|race|walk|balance)\b/,"kidDance"],
    [/\b(breath|relax|calm|focus|quiet)\b/,"heart"],
    [/\b(doctor|health)\b/,"heart"],
    [/\b(robot|invent|machine|space|mission)\b/,"robot"]
  ];
  const conceptPart=conceptRules.find(([pattern])=>pattern.test(text))?.[1]||({run:"steps",draw:"pencil",ball:"ball",build:"tower",search:"magnifier",dance:"note",story:"bubble",nature:"leaf",balance:"cushion",pretend:"mask"}[scene]);
  const conceptColor=`hsl(${(index*137.507764)%360} 62% 45%)`;
  const conceptBadge=`<circle cx="386" cy="42" r="27" fill="#fff" opacity=".9"/><g transform="translate(386,42) scale(.48)">${parts[conceptPart](conceptColor)}</g>`;
  const sceneHasPerson=["run","ball","dance","balance","pretend"].includes(scene);
  const child=sceneHasPerson?"":`<g transform="translate(105,200) scale(1.12)">${illustratedChild(accent,"reach")}</g>`;
  const object = {
    run:`<path d="M65 174h300" stroke="${accent}" stroke-width="8" stroke-dasharray="18 14"/><g transform="translate(175,200) scale(1.05)">${illustratedChild(accent,"run")}</g>`,
    draw:`<rect x="112" y="55" width="215" height="120" rx="8" fill="#fff" stroke="${accent}" stroke-width="7"/><path d="M145 139l42-42 35 27 44-49 28 64z" fill="${accent}" opacity=".55"/><path d="M330 35l24 22-78 82-31 10 9-31z" fill="${accent}"/>`,
    ball:`<circle cx="285" cy="120" r="38" fill="#fff" stroke="${accent}" stroke-width="8"/><path d="M262 90l25 22 30-10m-30 10-2 37m-23-9 23 9 24-15" stroke="${accent}" stroke-width="5"/><g transform="translate(140,200) scale(1.05)">${illustratedChild(accent,"reach")}</g>`,
    build:`<rect x="78" y="133" width="78" height="48" rx="5" fill="${accent}"/><rect x="164" y="91" width="84" height="90" rx="5" fill="${accent}" opacity=".8"/><rect x="256" y="50" width="105" height="131" rx="5" fill="${accent}" opacity=".55"/><path d="M69 186h303" stroke="#fff" stroke-width="7"/>`,
    search:`<circle cx="187" cy="92" r="52" fill="#fff" stroke="${accent}" stroke-width="10"/><path d="M225 131l63 55" stroke="${accent}" stroke-width="17" stroke-linecap="round"/><circle cx="176" cy="80" r="9" fill="${accent}"/><path d="M144 111q38 25 70-5" fill="none" stroke="${accent}" stroke-width="7"/>`,
    dance:`<g transform="translate(220,200) scale(1.05)">${illustratedChild(accent,"dance")}</g><path d="M110 55q20-28 40 0m140-5q20-28 40 0" fill="none" stroke="${accent}" stroke-width="7"/>`,
    story:`<path d="M72 56q74-28 145 12v119q-71-35-145-10zm296 0q-74-28-145 12v119q71-35 145-10z" fill="#fff" stroke="${accent}" stroke-width="8"/><path d="M100 93h80m-80 28h91m-91 28h65m95-56h80m-91 28h91m-76 28h76" stroke="${accent}" stroke-width="6"/>`,
    nature:`<path d="M218 183V92m0 35-52-38m52 20 54-45" stroke="${accent}" stroke-width="12" stroke-linecap="round"/><ellipse cx="151" cy="74" rx="47" ry="25" transform="rotate(25 151 74)" fill="${accent}"/><ellipse cx="289" cy="52" rx="52" ry="27" transform="rotate(-25 289 52)" fill="${accent}" opacity=".75"/><path d="M97 186h244" stroke="${accent}" stroke-width="8"/>`,
    balance:`<path d="M64 172h312" stroke="${accent}" stroke-width="9"/><g transform="translate(218,200) scale(1.05)">${illustratedChild(accent,"reach")}</g>`,
    pretend:`<g transform="translate(220,200) scale(1.05)">${illustratedChild(accent,"stand",true)}</g><g transform="translate(321,106) scale(.82)">${parts.mask(accent)}</g>`
  }[scene];
  return watercolorSvg(bg, accent, index, `${object}${child}${conceptBadge}`);
}

function illustratedChild(shirtColor, pose, cape = false) {
  const poses={
    stand:{arms:"M-8-32-21-21m29-11 13 11",legs:"M-6-11-12 13m18-24 6 24"},
    run:{arms:"M-8-32-22-39m30 7 15-12",legs:"M-6-11-24 5m18-16 20 14"},
    jump:{arms:"M-8-32-23-49m31 17 15-17",legs:"M-6-11-22 8m16-19 20 19"},
    dance:{arms:"M-8-32-22-47m30 15 18-9",legs:"M-6-11-20 12m14-23 18 14"},
    reach:{arms:"M-8-32-18-51m26 19 10-19",legs:"M-6-11-14 13m12-24 12 24"},
    sit:{arms:"M-8-32-21-23m29-9 13 8",legs:"M-6-11-22-1-18 13m18-24 20 1 4 12"}
  }[pose];
  const capeShape=cape?`<path d="M-8-36q-25 7-25 33 14-4 28-18z" fill="${shirtColor}" opacity=".55"/>`:"";
  return `<g stroke-linecap="round" stroke-linejoin="round">
    ${capeShape}
    <path d="${poses.legs}" fill="none" stroke="#587087" stroke-width="7"/>
    <path d="M-14 14h7m14 0h7" stroke="#735244" stroke-width="5"/>
    <path d="${poses.arms}" fill="none" stroke="#f2bd96" stroke-width="5"/>
    <circle cx="-21" cy="-21" r="3" fill="#f2bd96"/><circle cx="21" cy="-21" r="3" fill="#f2bd96"/>
    <path d="M-9-39q9-5 18 0l6 27q-15 8-30 0z" fill="${shirtColor}"/>
    <path d="M-13-58q0-15 13-15t13 15v7q0 12-13 12t-13-12z" fill="#f3c49e"/>
    <path d="M-14-58q-3-15 10-19 18-2 20 16l-5 4-5-8q-8 7-20 7z" fill="#76503d"/>
    <circle cx="-5" cy="-55" r="1.7" fill="#493b38"/><circle cx="5" cy="-55" r="1.7" fill="#493b38"/>
    <path d="M-4-48q4 4 8 0" fill="none" stroke="#a95e58" stroke-width="1.7"/>
    <circle cx="-10" cy="-49" r="2.5" fill="#e99784" opacity=".5"/><circle cx="10" cy="-49" r="2.5" fill="#e99784" opacity=".5"/>
  </g>`;
}

const parts = {
  kid:c=>illustratedChild(c,"stand"),
  kidRun:c=>illustratedChild(c,"run"),
  kidJump:c=>illustratedChild(c,"jump"),
  kidSit:c=>illustratedChild(c,"sit"),
  kidDance:c=>illustratedChild(c,"dance"),
  kidReach:c=>illustratedChild(c,"reach"),
  kidCape:c=>illustratedChild(c,"reach",true),
  ball:c=>`<circle r="20" fill="#fff" stroke="${c}" stroke-width="5"/><path d="M-18-8q18 11 36 0M-18 8q18-11 36 0M0-20v40" fill="none" stroke="${c}" stroke-width="3.5"/>`,
  domino:c=>`<rect x="-8" y="-24" width="16" height="48" rx="3" fill="#fff" stroke="${c}" stroke-width="4"/><circle cy="-11" r="3" fill="${c}"/><circle cy="11" r="3" fill="${c}"/>`,
  ramp:c=>`<path d="M-32 20 24-10 32 20z" fill="${c}" opacity=".22"/><path d="M-32 20 24-10 32 20M-32 13 27-18" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`,
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
  plane:c=>`<path d="M-32 10 32-13-6 23-11 7z" fill="${c}"/><path d="M-11 7 32-13" fill="none" stroke="#fff" stroke-width="3"/>`,
  bounceTrail:c=>`<path d="M-48 4q12 30 24 0t24 0 24 0 24 0" fill="none" stroke="${c}" stroke-width="4" stroke-dasharray="5 4"/><path d="M-31 21q7-10 14 0M17 21q7-10 14 0" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`,
  feather:c=>`<path d="M-27 25Q-26-16 27-28Q23 16-27 25Z" fill="${c}"/><path d="M-28 28 20-20M-17 17l-2-15M-6 7l-1-18M5-3l8 2M-20 13l-10-6M-8 4l-10-9" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
  train:c=>`<rect x="-30" y="-23" width="60" height="43" rx="9" fill="${c}"/><rect x="-20" y="-15" width="16" height="14" rx="3" fill="#fff"/><rect x="5" y="-15" width="16" height="14" rx="3" fill="#fff"/><path d="M-20 20l-9 11m49-11 9 11M-24 9h48" stroke="${c}" stroke-width="5" stroke-linecap="round"/><circle cx="-17" cy="22" r="5" fill="#455"/><circle cx="17" cy="22" r="5" fill="#455"/>`,
  envelope:c=>`<rect x="-31" y="-21" width="62" height="43" rx="5" fill="#fff" stroke="${c}" stroke-width="4"/><path d="m-28-17 28 23 28-23" fill="none" stroke="${c}" stroke-width="4"/><path d="m-28 18 19-16m37 16L9 2" fill="none" stroke="${c}" stroke-width="3"/>`,
  microphone:c=>`<rect x="-10" y="-29" width="20" height="38" rx="10" fill="${c}"/><path d="M-21-7v6a21 21 0 0 0 42 0v-6M0 20v12m-12 0h24" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`,
  fish:c=>`<ellipse cx="-4" cy="0" rx="25" ry="16" fill="${c}"/><path d="m18 0 23-17v34z" fill="${c}"/><circle cx="-14" cy="-4" r="2.8" fill="#fff"/><path d="M-2-13q12 13 0 26" fill="none" stroke="#fff" stroke-width="2.5"/>`,
  ribbon:c=>`<path d="M-34-18q28-28 40 0t28 0M-34 0q28-28 40 0T34 0M-34 18q28-28 40 0T34 18" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`,
  arrows:c=>`<path d="M-29 0h53m-14-14L24 0 10 14M0 28V-25m-14 14L0-25l14 14" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
  crack:c=>`<path d="m3-31-12 19 13 5-17 20 14-2-5 22 21-29-13 2 14-20-14 2z" fill="${c}"/>`,
  pavers:c=>`<g stroke-linejoin="round" stroke-width="3"><rect x="-56" y="-35" width="53" height="32" rx="2" fill="#d9d6cb" stroke="#858b88"/><rect x="3" y="-35" width="53" height="32" rx="2" fill="#e4e0d5" stroke="#858b88"/><rect x="-56" y="3" width="34" height="32" rx="2" fill="#e4e0d5" stroke="#858b88"/><rect x="-18" y="3" width="36" height="32" rx="2" fill="#d9d6cb" stroke="#858b88"/><rect x="22" y="3" width="34" height="32" rx="2" fill="#e4e0d5" stroke="#858b88"/><path d="M0-33v29" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-dasharray="3 4"/></g>`,
  book:c=>`<path d="M-3-24q-23-14-42-4v49q20-10 42 4zm6 0q23-14 42-4v49Q25 11 3 25z" fill="#fff" stroke="${c}" stroke-width="4"/><path d="M-34-12h21M-34 0h20M13-12h21M13 0h20" stroke="${c}" stroke-width="3"/>`,
  rocket:c=>`<path d="M0-33q21 17 18 41L0 24-18 8Q-21-16 0-33Z" fill="${c}"/><circle cy="-7" r="6" fill="#fff"/><path d="m-17 4-16 8 10 13 12-5m28-16 16 8-10 13-12-5M-8 24l-7 14 15-6 15 6-7-14" fill="${c}"/>`,
  gear:c=>`<circle r="17" fill="none" stroke="${c}" stroke-width="8"/><circle r="6" fill="${c}"/><path d="M0-31v8M0 23v8M-31 0h8M23 0h8M-22-22l6 6M16 16l6 6M22-22l-6 6M-16 16l-6 6" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  curtain:c=>`<path d="M-34-29h68v58H-34z" fill="#fff" stroke="${c}" stroke-width="4"/><path d="M-24-27q13 17 0 54M-9-27q13 17 0 54M9-27q-13 17 0 54M24-27q-13 17 0 54" fill="none" stroke="${c}" stroke-width="5"/>`,
  net:c=>`<path d="M-34-22h68v45h-68zM-17-22v45M0-22v45M17-22v45M-34-7h68M-34 8h68" fill="none" stroke="${c}" stroke-width="3.5"/><path d="M-40-27h80" stroke="${c}" stroke-width="5"/>`,
  bag:c=>`<path d="M-25-13h50l7 38h-64z" fill="${c}"/><path d="M-12-13a12 12 0 0 1 24 0" fill="none" stroke="${c}" stroke-width="5"/><path d="M-13 0h26" stroke="#fff" stroke-width="3"/>`,
  puzzle:c=>`<path d="M-29-27h17q-2 13 10 13t10-13h22v18q-13-2-13 10t13 10v17H8q2-13-10-13t-10 13h-17v-19q13 2 13-10t-13-10z" fill="${c}"/>`
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
  "Sardines":[["kidSit",147,178,1],["kid",353,166,1.15],["tree",300,156,1.05]],
  "Memory Tray":[["cup",192,122,.95],["apple",250,120,.78],["star",306,120,.88],["tray",248,160,2]],
  "Bridge Builders":[["bridge",252,152,1.8],["box",118,172,1.1]],
  "Compliment Ball":[["heart",302,78,.9],["kid",118,182,1.3],["ball",228,112,1.05],["kid",352,182,1.3]],
  "Weather Reporter":[["cloud",192,88,1.3],["sun",332,78,1.05],["kidReach",252,182,1.3]],
  "Dot-to-Doodle":[["paper",228,112,1.8],["dots",228,102,1.05],["pencil",342,150,1.3]],
  "Quiet Detective":[["magnifier",232,120,1.9],["kidSit",112,182,1.2],["star",352,88,.85]],
  "Obstacle Mission":[["cushion",128,182,1.1],["bridge",252,168,1.1],["kidJump",252,138,1],["tape",356,192,.65]],
  "Switch Signals":[["kidDance",250,160,1.35],["note",180,82,1],["note",326,90,1]],
  "Pebble Patterns":[["stone",170,120,.95],["stone",232,120,.95],["stone",294,120,.95],["stone",140,164,1.15],["stone",202,164,1.15],["stone",264,164,1.15],["stone",326,164,1.15]],
  "Copycat Clap":[["note",252,66,1],["hands",182,132,1.5],["hands",305,132,1.2]],
  "Hero Costume Design":[["kidCape",152,182,1.4],["paper",302,120,1.25],["crown",362,152,.95]],
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
  "Zigzag Delivery":[["cup",148,166,1.05],["cup",250,166,1.05],["cup",352,166,1.05],["kidRun",198,182,1.2],["steps",302,186,.85]],
  "Chain Reaction":[["kidSit",78,178,.65],["domino",130,154,.55],["domino",168,142,.55],["domino",206,154,.55],["domino",244,142,.55],["domino",282,154,.55],["ball",326,146,.72],["ramp",370,174,.75],["goal",416,137,.55]],
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
Object.assign(artRecipes,{
  "Family Quiz":[["book",250,126,1.35],["question",353,82,.72],["kid",112,182,1.05]],
  "Colorful Steps":[["dots",128,95,1.1],["steps",250,168,1.4],["kidJump",354,176,1.05]],
  "Treasure Guards":[["star",251,106,1.15],["kidReach",153,181,1.2],["kid",348,181,1.15]],
  "Three Things, One Story":[["bubble",250,66,.95],["apple",145,164,1],["sock",246,166,.9],["cup",348,164,.9]],
  "Pillow Mountain":[["cushion",120,177,1.2],["cushion",235,146,1.4],["cushion",350,177,1.2],["kidJump",236,130,1.05]],
  "Tiptoe Trail":[["steps",112,181,1.15],["steps",246,160,1.25],["steps",368,138,1.1],["kidSit",244,171,.9]],
  "Animal Traffic":[["lights",323,110,1.2],["animal",240,135,1.25],["kidRun",120,181,1.2]],
  "Jump and Name":[["kidJump",150,177,1.3],["bubble",301,84,1],["shapes",352,160,.8]],
  "Mission Cards":[["paper",147,135,1.1],["question",244,122,.75],["kidRun",348,178,1.15]],
  "Crawl Like a Comet":[["star",343,75,1.15],["kidSit",155,177,1.35],["steps",255,183,1.2]],
  "Invent a Creature":[["animal",235,131,1.35],["twig",325,155,1.2],["star",344,76,.7]],
  "Question Train":[["train",250,151,1.15],["bubble",259,75,.85],["question",119,89,.6]],
  "Pocket Narrator":[["sock",162,151,1.05],["apple",250,149,.9],["bubble",348,77,.85]],
  "Rhyme Relay":[["kid",121,180,1.05],["bubble",244,76,.95],["note",347,123,1.05]],
  "Sound Story":[["puppet",162,152,1.3],["puppet",280,152,1.1],["note",351,74,.85]],
  "Question Detective":[["magnifier",154,130,1.2],["question",259,100,.8],["kidSit",350,174,1.1]],
  "Kindness News":[["microphone",160,132,1.05],["heart",267,114,.9],["paper",354,143,.85]],
  "Opposite Day Tale":[["mirror",163,131,1.15],["arrows",258,127,.85],["bubble",351,76,.75]],
  "Soundtrack Story":[["kid",129,179,1.1],["bubble",246,78,.9],["note",344,124,1.1]],
  "Magic Word Story":[["abc",151,122,1.1],["bubble",260,76,.85],["star",352,145,.8]],
  "Secret Shape Sketch":[["paper",242,131,1.25],["shapes",242,119,.65],["pencil",351,156,.9]],
  "Line to Landscape":[["paper",238,135,1.15],["tree",190,129,.72],["cloud",297,96,.7],["pencil",357,165,.75]],
  "Three-Color Creature":[["animal",238,131,1.3],["dots",345,139,.9],["pencil",137,160,.8]],
  "Round-Robin Doodle":[["paper",246,120,1.15],["kid",114,180,.95],["kid",365,180,.95],["pencil",342,153,.75]],
  "Shape Family":[["shapes",240,132,1.2],["heart",348,127,.75],["bubble",137,82,.7]],
  "Folded Face":[["paper",239,128,1.15],["mask",239,125,.8],["pencil",352,157,.8]],
  "Postcard Puzzle":[["paper",237,126,1.1],["puzzle",237,130,.72],["puzzle",347,157,.65]],
  "Pattern Portrait":[["mask",235,126,1.2],["shapes",345,135,.8],["paper",132,145,.75]],
  "Invisible Ink Map":[["map",237,127,1.25],["magnifier",348,140,.85],["star",140,78,.65]],
  "Draw the Feeling":[["heart",238,121,1.05],["paper",238,140,1],["pencil",351,156,.85]],
  "Button Sorting Lab":[["dots",168,127,1.05],["tray",262,163,1.4],["magnifier",354,105,.8]],
  "What Is Missing?":[["tray",237,162,1.45],["question",238,105,.8],["magnifier",351,144,.75]],
  "Clue Collector":[["map",236,133,1.15],["magnifier",146,127,.8],["star",356,146,.7]],
  "Sound Source Hunt":[["ear",148,126,1.1],["note",251,119,1],["magnifier",351,145,.75]],
  "Odd One Out":[["shapes",233,128,1.1],["question",351,110,.72],["dots",139,165,.8]],
  "Touch and Tell":[["bag",236,145,1.1],["hands",139,128,.9],["question",350,96,.7]],
  "Sequence Spotter":[["shapes",153,125,1],["steps",258,159,1.1],["question",355,100,.7]],
  "Room Scavenger List":[["city",244,162,1.15],["magnifier",350,105,.8],["dots",137,125,.65]],
  "Secret Path Finder":[["map",241,130,1.1],["steps",146,168,.95],["star",353,93,.7]],
  "Five Things Fast":[["timer",151,126,1.05],["num",257,122,.8],["bubble",353,79,.7]],
  "Paper Bridge Test":[["bridge",239,157,1.2],["paper",146,126,.8],["box",351,164,.75]],
  "Straw City":[["city",239,160,1.25],["twig",144,145,.8],["box",355,165,.75]],
  "Marshmallow Structures":[["tower",237,151,1.2],["dots",143,123,.9],["cup",353,163,.8]],
  "Bridge to the Toy":[["bridge",239,159,1.2],["robot",350,153,.8],["river",143,176,.7]],
  "Cardboard Telescope":[["box",146,160,.95],["magnifier",252,119,.9],["star",354,82,.75]],
  "Maze Builder":[["maze",239,123,1.3],["robot",353,156,.7],["star",138,82,.6]],
  "Balance Sculpture":[["tower",239,151,1.1],["stone",143,174,1.15],["kidReach",350,176,.95]],
  "Tiny Shop":[["basket",240,154,1.1],["apple",145,157,.8],["box",350,159,.85]],
  "Paper Playground":[["paper",240,130,1.15],["hopscotch",240,149,.8],["star",352,78,.7]],
  "Balloon Tap Circle":[["kid",123,180,1],["balloon",239,95,1.25],["kid",354,180,1],["hands",239,156,.65]],
  "Target Ladder":[["target",240,112,1],["steps",145,174,1.15],["ball",350,154,.8]],
  "Roll and Follow":[["ball",152,151,.85],["kidRun",258,177,1.1],["steps",357,164,.9]],
  "Two-Bounce Catch":[["ball",243,105,1.05],["ball",243,164,.75],["kidReach",132,179,1.05]],
  "Guess the Leader":[["kid",123,179,1],["mirror",246,121,1],["kidDance",353,177,1.05],["question",351,73,.55]],
  "Balloon Volleyball":[["net",240,137,1.2],["balloon",152,97,.9],["balloon",338,88,.9]],
  "Partner Pass Pattern":[["kid",124,179,.95],["ball",244,118,.85],["kid",354,179,.95],["steps",245,171,.7]],
  "Rolling Ramps":[["bridge",239,147,1.15],["ball",144,156,.75],["ball",352,165,.65]],
  "Circle Bounce":[["kid",119,180,.9],["kid",240,180,.9],["kid",361,180,.9],["ball",240,107,.95]],
  "Target Story Toss":[["target",156,127,.95],["ball",253,156,.72],["bubble",352,81,.75]],
  "Leaf Line-Up":[["leaf",145,122,.8],["leaf",221,122,1],["leaf",304,122,1.2],["steps",235,178,.7]],
  "Nature Number Hunt":[["tree",150,172,1],["num",252,119,.8],["magnifier",352,133,.75]],
  "Stick Shadow Shapes":[["sun",350,77,.75],["twig",239,151,1.5],["shapes",150,108,.9]],
  "Bird Sound Pause":[["animal",145,134,.9],["ear",247,123,.8],["note",354,116,.9]],
  "Nature Color Wheel":[["rainbow",239,131,1.15],["leaf",145,160,.75],["flower",350,158,.9]],
  "Windy Ribbon Watch":[["ribbon",236,121,1.2],["leaf",144,157,.8],["cloud",352,91,.7]],
  "Mini Habitat":[["tent",239,155,1.15],["animal",149,134,.8],["leaf",350,158,.85]],
  "Cloud Shape Chain":[["cloud",151,103,.95],["shapes",251,127,.9],["bubble",352,78,.7]],
  "Nature Texture Cards":[["paper",145,128,.75],["stone",236,152,1.1],["leaf",340,119,.8],["magnifier",240,86,.55]],
  "Sunrise Stretch Story":[["sun",349,74,.8],["kidDance",153,178,1.05],["tree",245,167,.85],["bubble",348,142,.55]],
  "Mirror Animal":[["animal",145,131,.95],["mirror",241,125,1],["animal",347,131,.85]],
  "Beat the Pause":[["timer",149,116,.95],["kidDance",248,177,1.15],["note",352,109,.85]],
  "Body Letter Dance":[["kidDance",155,178,1.1],["abc",267,120,.75],["question",356,111,.65]],
  "Slow Fast Switch":[["timer",146,118,.95],["kidRun",252,179,1.05],["steps",352,158,.8]],
  "Clap and Step":[["hands",148,126,.9],["steps",247,160,1],["note",351,102,.85]],
  "Rainbow Ribbon Dance":[["rainbow",238,124,1.15],["ribbon",151,155,.8],["kidDance",348,178,1.05]],
  "Partner Shadow Dance":[["kidDance",145,179,1.1],["sun",245,92,.7],["kid",350,179,1.05]],
  "Mood Statues":[["mask",145,125,.9],["heart",245,122,.75],["kidDance",350,178,1.05]],
  "Direction Dance":[["arrows",249,122,.9],["kidDance",150,178,1.05],["kidReach",351,178,1.05]],
  "Celebration Choreo":[["note",149,94,.75],["kidDance",239,177,1.05],["star",350,96,.8]],
  "Hide and Seek":[["tree",353,166,1.15],["kidSit",147,178,1],["magnifier",247,117,.85]],
  "Toy Doctor":[["robot",239,134,1],["heart",351,105,.75],["bag",147,157,.8]],
  "Restaurant Imagination":[["cup",147,157,.8],["apple",240,153,.85],["bubble",349,83,.75]],
  "Post Office Play":[["envelope",242,129,1.1],["map",147,134,.8],["steps",352,166,.8]],
  "Space Mission Control":[["rocket",238,121,1],["robot",145,151,.8],["timer",351,126,.8]],
  "Helpful Inventor":[["gear",240,124,.95],["box",147,157,.85],["star",352,82,.7]],
  "Underwater Tour":[["fish",240,133,1.15],["bubble",147,82,.65],["bubble",350,108,.55]],
  "Family Newsroom":[["microphone",148,126,.9],["paper",243,137,.85],["note",351,105,.8]],
  "Time-Travel Guide":[["timer",147,120,1],["map",247,139,.9],["star",352,83,.7]],
  "Tiny Theatre":[["curtain",240,130,1.05],["puppet",154,158,.85],["mask",351,138,.75]],
  "Quiet Cloud Count":[["cloud",146,99,.85],["num",248,121,.75],["heart",352,130,.7]],
  "Feather Focus":[["feather",241,121,1.2],["cloud",150,91,.75],["kidSit",350,177,1]],
  "Breathing Shapes":[["kidSit",148,178,1.1],["shapes",251,123,.9],["heart",352,132,.65]],
  "Silent Sorting":[["tray",242,159,1.2],["shapes",149,122,.8],["hands",350,135,.7]],
  "Calm Color Search":[["magnifier",149,124,.9],["rainbow",246,133,.9],["leaf",352,156,.7]],
  "Listening Minute":[["ear",145,123,.8],["timer",244,122,.9],["note",351,120,.8]],
  "Tense and Relax":[["kidSit",148,178,1],["robot",246,133,.75],["heart",352,129,.7]],
  "Quiet Pattern Tiles":[["shapes",149,122,.8],["dots",244,131,.75],["tray",350,160,1]],
  "Gratitude Garden":[["heart",148,120,.75],["flower",246,135,1],["flower",351,147,.8]],
  "Breathing Buddy":[["kidSit",148,178,1],["heart",249,125,.7],["animal",352,134,.85]],
  "Letter Clue Guess":[["abc",148,125,.8],["question",247,117,.72],["bubble",352,79,.65]],
  "Movement Commands":[["bubble",146,82,.7],["kidReach",248,177,1.1],["steps",353,158,.8]],
  "Don't Step on a Crack":[["kid",113,177,1.05],["pavers",292,137,1.4],["steps",220,187,.7]],
  "Guess Who I Am":[["mask",147,124,.9],["question",248,117,.75],["kid",351,179,.95]],
  "One-Minute Challenge":[["timer",149,121,.95],["num",247,121,.7],["kidRun",350,178,1]]
});
Object.assign(artRecipes,{
  "Dot-to-Doodle":[["spiral",235,120,1.65],["dots",145,79,.85],["dots",347,165,.85],["pencil",354,105,.9]],
  "Symmetry Art":[["mirror",235,122,1.05],["flower",154,127,.9],["flower",316,127,.9],["twig",235,177,.85]],
  "Funny Portrait":[["mask",235,133,1.5],["crown",235,78,1],["heart",347,138,.7],["pencil",133,163,.8]],
  "Tense and Relax":[["kidReach",145,177,1.1],["arrows",239,121,.9],["kidSit",350,177,1.1],["heart",239,74,.6]],
  "Breathing Buddy":[["kidSit",145,177,1.05],["robot",249,140,.8],["heart",351,119,.8],["bubble",351,67,.55]],
  "Mood Music Moves":[["mask",145,125,.9],["heart",239,125,.7],["mask",333,125,.9],["note",239,69,.7]]
});
Object.assign(artRecipes,{
  "Secret Shape Sketch":[["question",145,91,.8],["shapes",250,128,1.1],["magnifier",352,139,.9],["pencil",144,174,.75]],
  "Folded Face":[["mask",239,126,1.55],["paper",145,151,.65],["crown",344,84,.8]],
  "Postcard Puzzle":[["puzzle",161,121,.8],["puzzle",241,121,.8],["puzzle",321,121,.8],["sun",241,179,.5]],
  "Postcard Adventure":[["plane",148,99,1.1],["map",252,149,1.05],["sun",353,81,.65],["tree",353,171,.75]],
  "Paper Maze":[["maze",238,122,1.55],["steps",142,176,.8],["pencil",350,160,.85]],
  "Button Sorting Lab":[["dots",144,124,1.05],["tray",240,160,1.3],["magnifier",351,100,.8]],
  "Sequence Spotter":[["shapes",141,120,.65],["shapes",240,120,.65],["shapes",339,120,.65],["arrows",241,173,.65]]
});
Object.assign(artRecipes,{
  "Two-Bounce Catch":[["kidReach",105,177,1.05],["ball",187,117,.65],["ball",260,165,.6],["ball",333,117,.65],["bounceTrail",260,191,.9]]
});
function gameArt(title, scene, index, description) {
  const recipe = artRecipes[title];
  if (!recipe) return sceneSvg(scene, index, title, description||gameIdeas[index][2]);
  const [bg, accent] = scenes[scene];
  const body = recipe.map(([name, x, y, s]) =>
    `<g transform="translate(${x},${y}) scale(${s})">${parts[name](accent)}</g>`).join("");
  const hasPerson=recipe.some(([name])=>name.startsWith("kid"));
  const child=hasPerson?"":`<g transform="translate(105,200) scale(1.12)">${illustratedChild(accent,"reach")}</g>`;
  return watercolorSvg(bg, accent, index, `${body}${child}`);
}

const skillByScene = {story:"speech",pretend:"speech",search:"problem",build:"problem",run:"movement",ball:"movement",balance:"movement",dance:"creativity",draw:"creativity",nature:"calm"};
const activityByScene = {story:"calm",pretend:"medium",search:"calm",build:"medium",run:"active",ball:"active",balance:"medium",dance:"active",draw:"calm",nature:"calm"};
const skillOverrides = {
  "Animal Traffic":"movement","Body Letter Dance":"movement","Breathing Buddy":"calm","Breathing Shapes":"calm",
  "Cardboard City":"creativity","Cardboard Telescope":"creativity","Cloud Shape Chain":"creativity",
  "Dance Traffic Lights":"movement","Direction Dance":"movement","Helpful Inventor":"problem",
  "Invisible Ink Map":"problem","Leaf Line-Up":"problem","Leaf Shadow Trace":"creativity",
  "Living Room Camp":"creativity","Mini Habitat":"creativity","Mirror Animal":"movement",
  "Mirror Moves":"movement","Movement Memory":"problem","Nature Bingo":"problem",
  "Nature Color Wheel":"creativity","Nature Faces":"creativity","Nature Number Hunt":"problem",
  "Nature Texture Cards":"problem","Paper Costume":"creativity","Paper Maze":"problem",
  "Paper Playground":"creativity","Pebble Patterns":"creativity","Postcard Puzzle":"problem",
  "Quiet Pattern Tiles":"problem","Roll and Follow":"movement","Chain Reaction":"problem",
  "Silent Sorting":"problem","Slow Fast Switch":"movement","Sound Map":"calm",
  "Sunrise Stretch Story":"movement","Tiny Garden Design":"creativity","Tiny Shop":"creativity",
  "Treasure Guards":"movement","Treasure Map":"problem","Twig Letters":"creativity",
  "What Is Missing?":"problem","Windy Ribbon Watch":"movement","Partner Pass Pattern":"social",
  "Partner Shadow Dance":"social","Scent Explorer":"speech","Story Circle":"social"
};
function skillForIdea(g) {
  if(skillOverrides[g[0]])return skillOverrides[g[0]];
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
  if(/\bgroup of (objects|items|things)\b/.test(text)||g[0]==="Breathing Shapes")return 4;
  return /\b(circle|group|relay|everyone|each player|take turns|partner|pass around|around the group|visitor|players)\b/.test(text)?12:4;
}
function placeForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  if(/\b(window|living room|classroom|kitchen|indoors?|room|cushions?|pillows?|cups?|cardboard(?: boxes?)?)\b/.test(text))return "indoors";
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
const ageRangeOverrides = {
  "Animal Parade":[3,9],
  "Rainbow Hunt":[4,9],
  "Color Dash":[3,9],
  "Shadow Zoo":[3,9],
  "Freeze Dance":[3,9],
  "Mirror Moves":[3,9],
  "Texture Safari":[4,9],
  "Shape Explorer":[4,9],
  "Floor Is Lava":[4,9],
  "Sardines":[5,12],
  "Copycat Clap":[3,9],
  "Chain Reaction":[6,12],"One-Line Creature":[6,12],
  "Animal Traffic":[3,9],
  "Jump and Name":[4,9],
  "Colorful Steps":[4,9],
  "Dance Traffic Lights":[3,9],
  "Toy Doctor":[3,8],
  "Bird Sound Pause":[3,9],
  "Mirror Animal":[3,9]
};
function ageRangeForIdea(g) {
  const text=`${g[0]} ${g[2]}`.toLowerCase();
  const simpleImitationGames=new Set(["Animal Parade","Freeze Dance","Magic Object","Hide and Seek","Mirror Moves","Copycat Clap","Animal Traffic","Mirror Animal","Bird Sound Pause"]);
  if(ageRangeOverrides[g[0]])return ageRangeOverrides[g[0]];
  if(simpleImitationGames.has(g[0]))return [3,12];
  if(g[0]==="Robot Guide")return [4,12];
  if(["Family Quiz","Letter Clue Guess"].includes(g[0]))return [4,12];
  if(/\b(alphabet|letters?|rhyme|decode|secret rule|sequence|memory|maze|map|countdown|counting down|yes-or-no|points|symmetry|strategy|numbers?)\b/.test(text))return [6,12];
  if(/\b(balloon|button|buttons|stone|stones|pebble|pebbles|tiny pieces|small pieces|loose parts|small objects)\b/.test(text))return [6,12];
  return [4,12];
}
const uploadedHeroImages = {
  "Don't Step on a Crack":"Ilustracije_igara_21-40_JPG_novi/040_balans_po_liniji.jpg",
  "Freeze Dance":"Game app/matched-images/167_igra.jpg",
  "Who Lives in This Ecosystem?":"Game app/illustrations-133-200/162_igra.jpg",
  "Invent a New Sport":"Game app/matched-images/037_igra.jpg",
  "Mystery Drawing":"Game app/matched-images/056_igra.jpg",
  "Family Quiz":"Game app/illustrations-133-200/150_igra.jpg",
  "Family Mini Escape Room":"Ilustracije_igara_101-132_JPG/105_kartice_misija.jpg",
  "Chain Reaction":"20_hero_slika_JPG/cropped/15_Napravi_stazu.jpg",
  "Museum Guide":"20_hero_slika_JPG/cropped/03_Krug_prica.jpg",
  "Question Detective":"20_hero_slika_JPG/cropped/10_Pitaj_i_pogodi.jpg",
  "Switch Signals":"20_hero_slika_JPG/cropped/18_Broji_korake.jpg",
  "Sardines":"Ilustracije_igara_133-200_JPG_bez_teksta/176_murke.jpg",
  "Forbidden Word":"Game app/matched-images/112_igra.jpg",
  "Funny Portrait":"Game app/illustrations-133-200/124_igra.jpg",
  "Nature Faces":"Game app/illustrations-133-200/160_igra.jpg",
  "Target Toss":"Game app/illustrations-133-200/147_igra.jpg",
  "Movement Memory":"Game app/illustrations-133-200/170_igra.jpg",
  "Pass the Sketch":"20_hero_slika_JPG/cropped/13_Crtaj_zajedno.jpg",
  "Guess My Rule":"Game app/illustrations-133-200/133_igra.jpg",
  "Secret Symbol Message":"Ilustracije_igara_101-132_JPG/105_kartice_misija.jpg",
  "Balance Delivery":"20_hero_slika_JPG/cropped/12_Balansiranje_lopte.jpg",
  "Marshmallow Structures":"Game app/illustrations-133-200/139_igra.jpg",
  "Balance Sculpture":"Game app/illustrations-133-200/143_igra.jpg",
  "Guess the Leader":"Game app/illustrations-133-200/150_igra.jpg",
  "Restaurant Imagination":"Game app/illustrations-133-200/178_igra.jpg",
  "Helpful Inventor":"Game app/illustrations-133-200/181_igra.jpg",
  "Family Secret Handshake":"20_hero_slika_JPG/cropped/20_Plesna_misija.jpg",
  "Letter Clue Guess":"20_hero_slika_JPG/cropped/17_Lov_na_slova.jpg",
  "Guess Who I Am":"20_hero_slika_JPG/cropped/16_Ko_sam_ja.jpg",
  "Target Ladder":"Game app/illustrations-133-200/147_igra.jpg",
  "Leaf Line-Up":"Game app/illustrations-133-200/156_igra.jpg",
  "Stick Shadow Shapes":"Game app/illustrations-133-200/158_igra.jpg",
  "Nature Color Wheel":"Game app/illustrations-133-200/160_igra.jpg",
  "Mirror Animal":"Game app/illustrations-133-200/166_igra.jpg",
  "Animal Parade":"20_hero_slika_JPG/cropped/02_Parada_zivotinja.jpg",
  "Shadow Zoo":"Game app/illustrations-133-200/172_igra.jpg",
  "Robot Guide":"Game app/illustrations-133-200/181_igra.jpg",
  "Tallest Tower":"Game app/matched-images/091_igra.jpg",
  "Cup Castle":"Game app/illustrations-133-200/139_igra.jpg",
  "Animal Traffic":"20_hero_slika_JPG/cropped/02_Parada_zivotinja.jpg",
  "Cloud Shapes":"Game app/illustrations-133-200/163_igra.jpg",
  "One-Minute Challenge":"Game app/illustrations-133-200/136_igra.jpg",
  "Rainbow Hunt":"20_hero_slika_JPG/cropped/01_Lov_na_dugu.jpg",
  "Story Circle":"20_hero_slika_JPG/cropped/03_Krug_prica.jpg",
  "Color Dash":"20_hero_slika_JPG/cropped/04_Trka_boja.jpg",
  "Secret Sound":"20_hero_slika_JPG/cropped/05_Tajni_zvuk.jpg",
  "Cushion Islands":"20_hero_slika_JPG/cropped/06_Ostrva_od_jastuka.jpg",
  "Mini Bowling":"20_hero_slika_JPG/cropped/07_Mini_kuglanje.jpg",
  "Shape Explorer":"20_hero_slika_JPG/cropped/08_Potraga_za_oblicima.jpg",
  "Magic Object":"20_hero_slika_JPG/cropped/09_Carobna_kutija.jpg",
  "Three Things, One Story":"20_hero_slika_JPG/cropped/11_Slozi_pricu.jpg",
  "Ball Balance":"20_hero_slika_JPG/cropped/12_Balansiranje_lopte.jpg",
  "What Changed":"20_hero_slika_JPG/cropped/14_Sta_se_promenilo.jpg",
  "Adventure Path":"20_hero_slika_JPG/cropped/15_Napravi_stazu.jpg",
  "Jumping Numbers":"20_hero_slika_JPG/cropped/18_Broji_korake.jpg",
  "Postcard Adventure":"20_hero_slika_JPG/cropped/19_Zamisljenо_putovanje.jpg",
  "Celebration Choreo":"20_hero_slika_JPG/cropped/20_Plesna_misija.jpg"
};
const publishedImageNameOverrides={21:"test_papirnog_aviona",48:"misija_sa_balonom",52:"kostim_od_papira",69:"dostava_u_svemir",70:"odbrojavanje",78:"simetri_na_slika",85:"potraga_za_ku_nim_blagom",90:"pokreti_uz_muziku",92:"pogodi_moje_zanimanje",93:"avantura_na_ostrvu",97:"izazov_zavr_ne_re_i"};
function publishedImagePath(image){
  const match=image.match(/^Game app\/(?:matched-images|illustrations-133-200)\/(\d{3})_igra\.jpg$/);
  if(!match)return image.startsWith("20_hero_slika_JPG/")?`${image}?v=20261102`:image;
  const imageId=Number(match[1]);
  const directory=imageId<=40?"Ilustracije_igara_21-40_JPG_novi":imageId<=100?"Ilustracije_igara_41-100_JPG":imageId<=132?"Ilustracije_igara_101-132_JPG":"Ilustracije_igara_133-200_JPG_bez_teksta";
  const sourceTitle=gameIdeas[imageId-1]?.[1]||"";
  const slug=sourceTitle.toLowerCase().replace(/[čćđšž]/g,"_").replace(/[^a-z0-9]+/g,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"");
  return `${directory}/${String(imageId).padStart(3,"0")}_${publishedImageNameOverrides[imageId]||slug}.jpg?v=20261102`;
}
function hasUploadedGameImage(image){return image.startsWith("20_hero_slika_JPG/")||image.startsWith("Ilustracije_igara_")||image.startsWith("Game app/")}
function hasNumberedGameImage(image){return image.startsWith("Ilustracije_igara_")||image.startsWith("Game app/matched-images/")||image.startsWith("Game app/illustrations-133-200/")}
const gameFeedbackById=new Map((window.GAME_FEEDBACK_DATA||[]).map(record=>[record.id,record]));
const situationKeyByName={"Kišni dani":"rainy","Letnje igre":"summer","Hladniji dani":"winter","Porodična okupljanja":"holiday","U pokretu":"travel","Grupe i proslave":"party"};
const replacementScenes={"Invent a New Sport":"run","Forbidden Word":"story","Museum of the Future":"pretend","Detective File: Three Clues":"search","Spot the Story Glitch":"story","Advertise the Most Useless Invention":"story","Zigzag Delivery":"run","Chain Reaction":"build","Secret Symbol Message":"draw","Who Lives in This Ecosystem?":"nature","Invent a New Planet":"draw","Family Mini Escape Room":"search","Family Secret Handshake":"dance"};
function feedbackSkillKey(skill){
  const text=`${skill.sr} ${skill.en}`.toLowerCase();
  if(/cooperation|teamwork|negotiation|emotion|saradnja|pregovaranje|emocij/.test(text))return "social";
  if(/movement|motor|coordination|kretanje|pokret|koordinacija|motorika/.test(text))return "movement";
  if(/speech|communication|language|speaking|storytelling|govor|komunikacija|jezik|pripoved/.test(text))return "speech";
  if(/creativ|design|imagination|humou?r|kreativ|dizajn|mašta/.test(text))return "creativity";
  if(/memory|pamćenje/.test(text))return "memory";
  if(/attention|listening|observation|opažanje|pažnja|slušno/.test(text))return "observation";
  if(/focus|self.regulation|calm|smiren|samoregul/.test(text))return "calm";
  if(/problem|logic|reason|planning|spatial|engineering|coding|system|cause|science|scientific|curiosity|knowledge|rešavanje|logika|zaključ|planiranje|prostorno|inženjer|šifrovanje|uzrok|sistemsko|nauka|radoznal/.test(text))return "problem";
  return "";
}
function feedbackSkillIcon(label){
  const text=label.toLowerCase();
  if(/cooperation|teamwork|negotiation|saradnja|pregovaranje/.test(text))return "🤝";
  if(/movement|motor|coordination|kretanje|pokret|koordinacija|motorika/.test(text))return "🏃";
  if(/creativ|design|imagination|storytelling|humou?r|kreativ|dizajn|mašta|pripoved/.test(text))return "🎨";
  if(/speech|communication|language|speaking|govor|komunikacija|jezik/.test(text))return "💬";
  if(/memory|pamćenje/.test(text))return "🧠";
  if(/attention|listening|observation|opažanje|pažnja|slušno/.test(text))return "🔎";
  if(/focus|self.regulation|calm|smiren|samoregul/.test(text))return "🌿";
  if(/nature|science|curiosity|priroda|nauka|radoznal/.test(text))return "🔎";
  if(/emotion|emocij/.test(text))return "💛";
  if(/problem|logic|reason|planning|spatial|engineering|coding|system|cause|rešavanje|logika|zaključ|planiranje|prostorno|inženjer|šifrovanje|uzrok|sistemsko/.test(text))return "🧩";
  return "✨";
}
const allGames = gameIdeas.map((idea,index)=>{
  const feedback=gameFeedbackById.get(index+1);
  if(!feedback)throw new Error(`Missing feedback record for game ${index+1}`);
  const scene=replacementScenes[feedback.title]||idea[4];
  const derivedIdea=[feedback.title,feedback.srTitle,feedback.en.description,feedback.sr.description,scene];
  const generatedImage=Boolean(replacementScenes[feedback.title])||[7,16,56,69,85,92,93,139,143,147,150,156,158,160,163,166,172,178,181,196,198,199].includes(feedback.id);
  const imageId=feedback.id>=196&&feedback.id<=199?feedback.id+1:feedback.id;
  const skillKeys=[...new Set(feedback.skills.map(feedbackSkillKey).filter(Boolean))];
  const situationKeys=feedback.situationsSr.map(name=>situationKeyByName[name]).filter(Boolean);
  return {
    id:index+1,title:feedback.title,srTitle:feedback.srTitle,description:feedback.en.description,srDescription:feedback.sr.description,scene,
    place:placeForIdea(derivedIdea),material:feedback.material,activity:activityForIdea(derivedIdea),duration:feedback.duration,durationLabel:feedback.durationLabel||String(feedback.duration),
    minAge:feedback.minAge,maxAge:feedback.maxAge,ageText:feedback.ageText,minPlayers:1,maxPlayers:maxPlayersForIdea(derivedIdea),
    skills:feedback.skills,skillKeys,skill:skillKeys[0]||"",situationKeys,feedback,
    image:publishedImagePath(uploadedHeroImages[feedback.title]||(generatedImage?gameArt(feedback.title,scene,index,feedback.en.description):feedback.id>=133&&feedback.id<=200?`Game app/illustrations-133-200/${String(feedback.id).padStart(3,"0")}_igra.jpg`:imageId>=21&&imageId<=200?`Game app/matched-images/${String(imageId).padStart(3,"0")}_igra.jpg`:gameArt(feedback.title,scene,index,feedback.en.description)))
  };
}).filter(game=>game.id !== 66 && game.id !== 75 && game.id !== 81 && game.id !== 83 && game.id !== 85 && game.id !== 91 && game.id !== 94 && game.id !== 97 && game.id !== 100 && game.id !== 107 && game.id !== 109 && game.id !== 112 && game.id !== 115 && game.id !== 116 && game.id !== 118 && game.id !== 119 && game.id !== 120 && game.id !== 121 && game.id !== 124 && game.id !== 125 && game.id !== 126 && game.id !== 127 && game.id !== 128 && game.id !== 129 && game.id !== 130 && game.id !== 131 && game.id !== 134 && game.id !== 135 && game.id !== 137 && game.id !== 138 && game.id !== 139 && game.id !== 140 && game.id !== 141 && game.id !== 142 && game.id !== 145 && game.id !== 146 && game.id !== 147 && game.id !== 148 && game.id !== 149 && game.id !== 151 && game.id !== 153 && game.id !== 154 && game.id !== 155 && game.id !== 157 && game.id !== 158 && game.id !== 159 && game.id !== 160 && game.id !== 161 && game.id !== 162 && game.id !== 163 && game.id !== 165 && game.id !== 166 && game.id !== 167 && game.id !== 170 && game.id !== 171 && game.id !== 173 && game.id !== 174 && game.id !== 175 && game.id !== 178 && game.id !== 180 && game.id !== 182 && game.id !== 185 && game.id !== 187 && game.id !== 188 && game.id !== 189 && game.id !== 191 && game.id !== 192 && game.id !== 193);
const games=allGames.filter(game=>game.id!==195&&game.id!==197);

const exploreCategories = {
  en:[
    ["rainy","🌧️","Rainy days","Calm and playful indoor ideas for rainy days."],
    ["summer","☀️","Summer play","Sunny ideas for warm days, gardens and parks."],
    ["winter","❄️","Cold days","Active indoor games to help kids warm up on cold days."],
    ["holiday","🎄","Family gatherings","Games for conversation and shared fun across generations."],
    ["travel","🚗","On the go","No-equipment games for passengers (never the driver), plus short breaks at safe stops."],
    ["party","🎉","Groups & parties","Games for larger groups and celebrations."]
  ],
  sr:[
    ["rainy","🌧️","Kišni dani","Mirne i razigrane ideje za unutra dok pada kiša."],
    ["summer","☀️","Letnje igre","Sunčane ideje za tople dane, dvorište i park."],
    ["winter","❄️","Hladniji dani","Aktivne igre za unutra koje razgibavaju kada je napolju hladno."],
    ["holiday","🎄","Porodična okupljanja","Igre za zajednički razgovor i zabavu u porodici različitih uzrasta."],
    ["travel","🚗","U pokretu","Igre bez rekvizita za putnike (vozač ne učestvuje), uz kratke pauze na bezbednom mestu."],
    ["party","🎉","Grupe i proslave","Igre za veće društvo i proslave."]
  ]
};
const existingSkillDescriptions={
  en:{"Speech & communication":"Talk, listen and tell stories","Problem solving":"Think, remember and experiment","Creativity":"Imagine, make and express","Cooperation":"Share, take turns and connect","Movement & motor skills":"Balance, coordinate and move","Focus & calm":"Slow down and pay attention","Observation & attention":"Notice details and listen carefully","Memory":"Remember details and sequences"},
  sr:{"Govor i komunikacija":"Razgovor, slušanje i pričanje","Rešavanje problema":"Razmišljanje, pamćenje i isprobavanje","Kreativnost":"Mašta, stvaranje i izražavanje","Saradnja":"Deljenje, red i povezivanje","Kretanje i motorika":"Ravnoteža, koordinacija i pokret","Fokus i smirenost":"Usporavanje i pažnja","Opažanje i pažnja":"Uočavanje detalja i pažljivo slušanje","Pamćenje":"Pamćenje detalja i redosleda"}
};
const exploreSkills={
  en:[["speech","💬","Speech & communication",existingSkillDescriptions.en["Speech & communication"]],["problem","🧩","Problem solving",existingSkillDescriptions.en["Problem solving"]],["movement","🏃","Movement & motor skills",existingSkillDescriptions.en["Movement & motor skills"]],["creativity","🎨","Creativity",existingSkillDescriptions.en.Creativity],["social","🤝","Cooperation",existingSkillDescriptions.en.Cooperation],["calm","🌿","Focus & calm",existingSkillDescriptions.en["Focus & calm"]],["observation","🔎","Observation & attention",existingSkillDescriptions.en["Observation & attention"]],["memory","🧠","Memory",existingSkillDescriptions.en.Memory]],
  sr:[["speech","💬","Govor i komunikacija",existingSkillDescriptions.sr["Govor i komunikacija"]],["problem","🧩","Rešavanje problema",existingSkillDescriptions.sr["Rešavanje problema"]],["movement","🏃","Kretanje i motorika",existingSkillDescriptions.sr["Kretanje i motorika"]],["creativity","🎨","Kreativnost",existingSkillDescriptions.sr.Kreativnost],["social","🤝","Saradnja",existingSkillDescriptions.sr.Saradnja],["calm","🌿","Fokus i smirenost",existingSkillDescriptions.sr["Fokus i smirenost"]],["observation","🔎","Opažanje i pažnja",existingSkillDescriptions.sr["Opažanje i pažnja"]],["memory","🧠","Pamćenje",existingSkillDescriptions.sr.Pamćenje]]
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
    en:{example:"Place a cup, an apple and a toy on a tray or table. Let the child look, cover the objects, remove the toy, then ask what is missing.",parent:"Start with three familiar objects and give the child time to look. For a harder round, rearrange the objects instead of removing one; keep it playful, not a memory test."},
    sr:{example:"Stavite čašu, jabuku i igračku na poslužavnik ili sto. Neka dete pogleda, pokrijte predmete, sklonite igračku pa pitajte šta nedostaje.",parent:"Počnite sa tri poznata predmeta i dajte detetu vremena da ih pogleda. Za teži krug promenite raspored umesto da sklonite predmet; neka igra ostane zabavna, bez testiranja pamćenja."}
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
    en:{steps:["One player chooses an object, and the others decide how to show it with their bodies.","Everyone takes a comfortable pose with feet on the floor; nobody lifts, pulls or positions another person.","Hold the sculpture for a few seconds while observers guess, then relax."],example:"Work together to make a tree: one person stands as the trunk while others form branches with their arms.",parent:"For older children, an adult names a scene, such as ‘a windmill in the wind.’ The group has 15 seconds to pose and freeze while an observer guesses the scene. Everyone stays stable, without touching or lifting anyone."},
    sr:{steps:["Jedan igrač bira predmet, a ostali dogovaraju kako će ga prikazati telom.","Svako zauzima udobnu pozu sa stopalima na podu; niko ne podiže, vuče ni namešta druge.","Zadržite skulpturu nekoliko sekundi dok posmatrači pogađaju, pa se opustite."],example:"Napravite drvo: jedna osoba je stablo, a ostali rukama predstavljaju grane.",parent:"Za stariju decu odrasli zada scenu, na primer „vetrenjača na vetru“. Grupa ima 15 sekundi da zauzme poze i zamrzne se, a posmatrač pogađa scenu. Svi ostaju stabilni, bez dodirivanja ili podizanja."}
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
    en:{example:"Draw a beach with a sun, boat and bucket. An adult cuts it into at least six pieces; mix them and take turns rebuilding the picture.",parent:"Hide a small drawn shell in the scene. After rebuilding the postcard, ask the partner to point out the shell. An adult should handle the scissors."},
    sr:{example:"Nacrtajte plažu sa suncem, čamcem i kantom. Odrasla osoba iseče sliku na najmanje šest delova; pomešajte ih i naizmenično je sastavljajte.",parent:"Sakrijte malu nacrtanu školjku u prizoru. Kada sastavi razglednicu, partner treba da pokaže gde se školjka nalazi. Makazama rukuje odrasla osoba."}
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
    en:{prep:"Choose a safe, simple task and set a one-minute timer.",example:"Choose one task for each one-minute round: stand on one foot, then switch legs (an adult can offer a hand for support), alternate touching your knees, or stack plastic cups into a tower. Swap roles or choose a different task in the next round.",parent:"Compare each player's result with their own previous try, not with others. If a timer feels stressful, count down together instead."},
    sr:{prep:"Izaberite bezbedan, jednostavan zadatak i podesite tajmer na minut.",example:"Za svaki minut izaberite jedan zadatak: stanite na jednoj nozi pa promenite nogu (odrasli može da pruži ruku za oslonac), dodirnite naizmenično kolena ili složite plastične čaše u kulu. U sledećem krugu zamenite uloge ili izaberite drugi zadatak.",parent:"Uporedite pokušaj svakog igrača sa njegovim prethodnim, ne sa drugima. Ako tajmer stvara pritisak, odbrojavajte zajedno."}
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
  "Chain Reaction": {
    en:{example:"Set eight or more dominoes in a zigzag, with the last one touching a lightweight foam ball and a tape line a little farther away as the finish. Gently tip the first domino and see if the ball crosses the line.",parent:"Make a fork: one domino tips a wide, lightweight block that starts two short domino lines. Put a soft ball at the end of each and mark two finishes; try to get both across their lines."},
    sr:{example:"Postavite osam ili više domina cik-cak, poslednju tik uz laganu penastu loptu, a traku malo dalje kao cilj. Nežno oborite prvu i gledajte da li će lopta preći liniju.",parent:"Napravite račvanje: jedna domina obori široku, laganu kockicu koja pokrene dve kratke linije domina. Na kraju svake stavite po mekanu loptu i obeležite dva cilja; pokušajte da obe pređu svoju liniju."}
  },
  "Superhero Training": {
    en:{example:"Teddy is scared of a thunderstorm. The superhero asks what Teddy needs, carefully carries him to a pillow safe base and says, ‘I’m here; you’re safe now.’",parent:"For older children, a dispatcher gives three directions, such as: ‘Go to Teddy, walk around the floor marker, carry him to base.’ The superhero repeats the order, then follows it while carrying Teddy. Keep the route short and clear; no running or closing eyes."},
    sr:{example:"Meda se uplašio od grmljavine. Superheroj ga pita šta mu treba, pažljivo ga odnese do jastuka koji je sigurna baza i kaže: „Tu sam, sada si bezbedan.“",parent:"Za stariju decu dispečer zada tri uputstva, na primer: „Priđi medi, obiđi oznaku na podu, odnesi ga u bazu.“ Superheroj ponovi redosled pa ga izvrši noseći medu. Putanja ostaje kratka i slobodna; ne trčite i ne žmurite."}
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
  if(/\bscent explorer\b/.test(text))return localized("An adult prepares two familiar, mild scents for comparing and a third for the bonus after checking for allergies. Offer them from a distance by gently wafting the air; avoid perfumes and cleaning products.","Odrasla osoba priprema dva poznata, blaga mirisa za poređenje i treći za bonus nakon provere alergija. Ponudite ih sa odstojanja blagim mahanjem vazduha; izbegavajte parfeme i sredstva za čišćenje.");
  if(/\bballoon\b/.test(text))return localized("Use an intact balloon with an adult nearby. Clear sharp objects; immediately discard broken balloon pieces and keep them away from young children.","Koristite ceo balon uz odraslu osobu u blizini. Sklonite oštre predmete; pocepane delove odmah bacite i držite dalje od male dece.");
  if(/\b(cup|cups)\b/.test(text))return localized("Prepare several clean, reusable plastic cups and a flat, stable surface.","Pripremite nekoliko čistih plastičnih čaša za višekratnu upotrebu i ravnu, stabilnu površinu.");
  if(/\b(cushion|cushions|pillow|pillows)\b/.test(text))return localized("Place a few firm cushions or pillows on a clear floor, leaving safe space between them.","Postavite nekoliko čvrstih jastuka na slobodan pod i ostavite bezbedan razmak između njih.");
  if(/\bchalk\b/.test(text))return localized("Prepare child-safe chalk and choose a safe pavement or chalkboard surface.","Pripremite bezbednu dečju kredu i izaberite bezbednu površinu ili tablu.");
  if(/\btape\b/.test(text))return localized("Use removable painter’s tape to mark a low, clear route on the floor.","Koristite lako uklonjivu papirnu traku da označite nisku, slobodnu stazu na podu.");
  if(/\b(box|boxes|cardboard)\b/.test(text))return localized("Prepare clean cardboard boxes with staples, tape and sharp edges removed.","Pripremite čiste kartonske kutije bez spajalica, lepljive trake i oštrih ivica.");
  if(/\btray\b/.test(text))return localized("Prepare a lightweight tray and a few safe, unbreakable objects.","Pripremite lagani poslužavnik i nekoliko bezbednih, nelomljivih predmeta.");
  if(/\b(straw|straws|craft sticks)\b/.test(text))return localized("Prepare child-safe paper straws or craft sticks and a clear building surface.","Pripremite bezbedne papirne slamčice ili štapiće i slobodnu površinu za građenje.");
  if(/\b(utensil|utensils|kitchen band)\b/.test(text))return localized("Prepare a wooden spoon, a plastic bowl and a sturdy plastic cup. Put away glass and breakable items.","Pripremite drvenu kašiku, plastičnu posudu i čašu od čvrste plastike. Sklonite staklene i lomljive predmete.");
  if(/\b(ribbon|scarf)\b/.test(text))return localized("Prepare a short lightweight ribbon or scarf and clear enough room for gentle movement.","Pripremite kratku laganu traku ili maramu i oslobodite prostor za nežno kretanje.");
  if(/\b(feather|tissue)\b/.test(text))return localized("Prepare one clean feather or a small piece of lightweight tissue.","Pripremite jedno čisto pero ili mali komad lagane papirne maramice.");
  if(/\b(button|buttons)\b/.test(text))return localized("Choose large, child-safe buttons or replace them with other safe objects for younger children.","Izaberite veliku dugmad bezbednu za dete ili je za mlađu decu zamenite drugim bezbednim predmetima.");
  if(/\bcircle keep-away\b/.test(text))return localized("At least four players, a soft ball and a flat, non-slip surface are needed. Form a circle with enough space between players.","Potrebna su najmanje četiri igrača, mekana lopta i ravna neklizava površina. Napravite krug sa dovoljno prostora između igrača.");
  if(/\b(ball|goalkeeper|bowling|bounce|rolling goal|target toss)\b/.test(text))return localized("Use a soft, age-appropriate ball and prepare any safe targets or markers mentioned in the game.","Koristite mekanu loptu primerenu uzrastu i pripremite bezbedne mete ili oznake koje igra traži.");
  if(/\b(leaf|leaves|twig|twigs|stone|stones|pebble|pebbles|nature)\b/.test(text))return localized("Choose a safe outdoor area and use only clean, fallen leaves, twigs or stones needed for the game.","Izaberite bezbedan prostor napolju i koristite samo čisto opalo lišće, grančice ili kamenčiće potrebne za igru.");
  if(game.material==="paper")return localized("Prepare paper and child-safe pencils, crayons or other drawing supplies needed for the activity.","Pripremite papir i bezbedne olovke, bojice ili drugi pribor za crtanje potreban za ovu igru.");
  if(game.material==="household")return localized("Prepare only the safe, clean household items named in the game.","Pripremite samo bezbedne i čiste kućne predmete koji se pominju u igri.");
  if(game.material==="none")return "";
  return detailContent[language].prepare[game.material];
}

const state = {
  language:"sr", step:0, answers:{}, view:"recommended", collection:null, selectedGame:null, gameReturnScreen:null,
  profile:JSON.parse(localStorage.getItem("playPicksProfile")||"null"),
  likes:JSON.parse(localStorage.getItem("playPicksLikes")||"[]"),
  saveCounts:JSON.parse(localStorage.getItem("playPicksSaveCounts")||"{}")
};
state.likes.forEach(id=>{state.saveCounts[id]=Math.max(1,Number(state.saveCounts[id])||0)});
if(state.likes.length)localStorage.setItem("playPicksSaveCounts",JSON.stringify(state.saveCounts));
const $=selector=>document.querySelector(selector);
const questions=()=>questionSets[state.language];
const t=()=>copy[state.language];
const multiSelectQuestions=new Set(questionSets.en.map(question=>question[0]));
function selectedValues(key){const value=state.answers[key];return Array.isArray(value)?value:value===undefined?[]:[value]}
function selectedAgeBounds(){const ranges=selectedValues("age").map(value=>value.split("-").map(Number));return ranges.length?[Math.min(...ranges.map(range=>range[0])),Math.max(...ranges.map(range=>range[1]))]:null}
const choice=(key)=>questions().find(q=>q[0]===key)[4].filter(item=>selectedValues(key).includes(item[0]));

function translate() {
  const c=t();
  document.documentElement.lang=state.language==="sr"?"sr-Latn":"en"; document.title=c.pageTitle; $("#brandLabel").textContent=c.brand;
  $('meta[name="description"]').content=c.description; $("#homeButton").ariaLabel=c.home; $(".language-switcher").ariaLabel=c.language;
  $("#heroTitle").innerHTML=c.hero; $("#heroCopy").textContent=c.heroCopy;
  $("#progress").ariaLabel=c.progress; $("#editButton").textContent=c.edit;
  $("#profileLabel").textContent=state.profile?.name||c.noProfile; $("#profileButton").ariaLabel=state.profile?.name||c.noProfile;
  $("#profileAvatar").textContent=state.profile?.name?.[0]||"?"; $("#profileTitle").textContent=c.profileTitle; $("#profileCopy").textContent=c.profileCopy;
  $("#profileNameLabel").textContent=c.name; $("#profileSaveButton").textContent=c.saveProfile; $("#deleteProfileButton").textContent=c.deleteProfile;
  $("#feedbackLabel").textContent=c.feedbackLabel; $("#feedbackHint").textContent=c.feedbackHint; $("#feedbackButton").textContent=c.feedbackButton;
  $("#startButton").innerHTML=`${c.findGame} <span>→</span>`;
  $("#trustThree").textContent=c.trust[0];
  $("#dailyLabel").textContent=c.dailyLabel;
  $("#dailyTitle").textContent=c.dailyTitle; $("#dailyCopy").textContent=c.dailyCopy; $("#dailyButton").textContent=c.dailyButtonLabel;
  $("#benefitOneTitle").textContent=c.benefitOneTitle; $("#benefitOneCopy").textContent=c.benefitOneCopy;
  $("#benefitTwoTitle").textContent=c.benefitTwoTitle; $("#benefitTwoCopy").textContent=c.benefitTwoCopy;
  $("#benefitThreeTitle").textContent=c.benefitThreeTitle; $("#benefitThreeCopy").textContent=c.benefitThreeCopy;
  $("#safetyTitle").textContent=c.safetyTitle; $("#safetyCopy").textContent=c.safetyCopy; $("#safetyNoteAction").textContent=c.safetyNoteAction; $("#safetyDialogTitle").textContent=c.safetyDetailsTitle; $("#safetyDialogDone").textContent=c.safetyDialogDone;
  const safetyDetails=$("#safetyDialogCopy");safetyDetails.replaceChildren();c.safetyDetails.forEach(([heading,copy])=>{const section=document.createElement("section"),title=document.createElement("h3"),text=document.createElement("p");title.textContent=heading;text.textContent=copy;section.append(title,text);safetyDetails.append(section)});
  $("#categoryTitle").textContent=c.bySituation; $("#skillTitle").textContent=c.bySkill;
  $$(".nav-button").forEach((b,i)=>{const label=b.querySelector(".nav-label");if(label)label.textContent=c.nav[i]}); $$(".language-button").forEach(b=>{const active=b.dataset.language===state.language;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",active)});
  renderDaily();
}
function $$(selector){return document.querySelectorAll(selector)}
function renderProgress(){ $("#progress").style.gridTemplateColumns=`repeat(${questions().length}, minmax(0, 1fr))`; $("#progress").innerHTML=questions().map((q,i)=>`<div class="progress-step ${i===state.step?"is-active":""} ${i<state.step?"is-complete":""}" data-number="${i+1}">${q[1]}</div>`).join("") }
function renderQuestion(){
  const q=questions()[state.step]; $("#stepLabel").textContent=t().step(state.step+1,questions().length); $("#questionTitle").textContent=q[2]; $("#questionHint").textContent=q[3]; $("#questionHint").hidden=!q[3];
  const selected=selectedValues(q[0]);
  $("#questionNumber").textContent=String(state.step+1).padStart(2,"0"); $("#choiceGrid").innerHTML=q[4].map(c=>`<button class="choice ${selected.includes(c[0])?"is-selected":""}" data-choice="${c[0]}" type="button" aria-pressed="${selected.includes(c[0])}"><span class="choice-icon">${c[1]}</span><strong>${c[2]}</strong>${c[3]?`<small>${c[3]}</small>`:""}</button>`).join("");
  $$(".choice").forEach(b=>{b.onclick=()=>{const value=b.dataset.choice;if(multiSelectQuestions.has(q[0])){const values=selectedValues(q[0]);const next=values.includes(value)?values.filter(item=>item!==value):[...values,value];if(next.length)state.answers[q[0]]=next;else delete state.answers[q[0]]}else state.answers[q[0]]=value;renderQuestion()}});
  $("#nextButton").innerHTML=`${state.step===questions().length-1?t().show:t().next} <span>→</span>`; $("#nextButton").disabled=selected.length===0;
  $("#backButton").textContent=`← ${t().back}`; $("#backButton").classList.toggle("is-visible",state.step>0); renderProgress();
}
function playerRange(value){return value==="3-4"?[3,4]:value==="5+"?[5,5]:[Number(value),Number(value)]}
function score(game){
  const ageRange=selectedAgeBounds();if(!ageRange)return 0;let total=0;
  if(game.minAge<=ageRange[0]&&game.maxAge>=ageRange[1])total+=4;
  if(selectedValues("players").some(value=>{const [min,max]=playerRange(value);return game.minPlayers<=min&&game.maxPlayers>=max}))total+=3;
  if(selectedValues("place").some(place=>place==="either"||game.place==="either"||game.place===place||(place==="travel"&&travelFriendly(game))))total+=3;
  const durations=selectedValues("duration").map(Number);if(durations.length&&game.duration<=Math.max(...durations))total+=3;
  const materials=selectedValues("material");if(game.material==="none"||materials.includes(game.material))total+=3;
  const activityChoices=selectedValues("activity");
  if(activityChoices.some(value=>value==="calm"?game.activity==="calm":value==="playful"?game.activity!=="calm":false))total+=4;
  return total;
}
function localized(game){return state.language==="sr"?[game.srTitle,game.srDescription]:[game.title,game.description]}
function dailyGame(){const now=new Date();const day=Math.floor(new Date(now.getFullYear(),now.getMonth(),now.getDate()).getTime()/86400000);return games[((day%games.length)+games.length)%games.length]}
function renderDaily(){
  const game=dailyGame(), [title,description]=localized(game);
  $("#dailyTitle").textContent=title; $("#dailyCopy").textContent=description; $("#dailyButton").textContent=t().dailyButtonLabel;
  $("#dailyMeta").innerHTML=`<span>${game.durationLabel} ${t().min}</span><span>${t().place[game.place]}</span><span>${t().ages(game.minAge,game.maxAge)}</span>`;
}
function travelFriendly(game){
  const carGame=game.material==="none"&&game.duration<=15&&game.activity!=="active"&&game.place!=="outdoors"&&["story","search"].includes(game.scene);
  const movementBreak=game.material==="none"&&game.duration<=15&&game.activity!=="calm"&&["pretend","run","dance","balance"].includes(game.scene);
  return carGame||movementBreak;
}
function categoryMatches(game,key){
  return game.situationKeys.includes(key);
}
function collectionMatches(){return state.collection?.type==="skill"?games.filter(g=>g.skillKeys.includes(state.collection.key)):games.filter(g=>categoryMatches(g,state.collection?.key))}
function collectionGames(){return collectionMatches()}
function gameList(){
  if(state.view==="collection")return collectionGames();
  if(state.view==="saved")return games.filter(g=>state.likes.includes(g.id));
  if(state.view==="popular"){
    return [...games].sort((a,b)=>(Number(state.saveCounts[b.id])||0)-(Number(state.saveCounts[a.id])||0)||a.id-b.id).slice(0,20);
  }
  const ageRange=selectedAgeBounds();if(!ageRange)return [];
  return games.filter(g=>g.minAge<=ageRange[0]&&g.maxAge>=ageRange[1]).sort((a,b)=>score(b)-score(a)||a.id-b.id).slice(0,20);
}
function gameCard(game){
  const [title,description]=localized(game), liked=state.likes.includes(game.id);
  const saveLabel=liked?t().savedAction:t().saveAction;
  const uploadedImage=hasUploadedGameImage(game.image);
  const numberedImage=hasNumberedGameImage(game.image), wideImage=numberedImage&&game.srTitle.length>20&&![21,100,102].includes(game.id);
  const cropFromRight=[2,154].includes(game.id);
  const imageFocus=game.id===102?"symbol-message":game.id===103?"animal-traffic":"";
  const imageClasses=["activity-image",uploadedImage&&"activity-image-uploaded",numberedImage&&"activity-image-numbered",wideImage&&"activity-image-numbered-wide",cropFromRight&&"activity-image-collage-crop-right",imageFocus&&`activity-image-${imageFocus}`].filter(Boolean).join(" ");
  return `<article class="activity" data-detail="${game.id}" tabindex="0"><div class="activity-visual"><img class="${imageClasses}" src="${game.image}" alt="${t().image(title)}"><button class="like-button activity-like ${liked?"is-liked":""}" data-like="${game.id}" aria-label="${saveLabel}" aria-pressed="${liked}">♥ <span class="save-label">${saveLabel}</span></button></div><div class="activity-content"><div class="activity-topline"><h3>${title}</h3></div><p>${description}</p><div class="activity-meta"><span class="tag">${game.durationLabel} ${t().min}</span><span class="tag">${t().place[game.place]}</span><span class="tag">${t().ages(game.minAge,game.maxAge)}</span></div><button class="details-button" data-open-detail="${game.id}">${t().details}</button></div></article>`;
}
function renderResults(){
  const list=gameList(), c=t(); $("#questionCard").hidden=true; $("#progress").hidden=true; $("#results").hidden=false;
  $("#landing").hidden=true; $("#explorePage").hidden=true;
  const showCollectionHeading=state.view==="popular"||state.view==="saved"||state.view==="collection";
  $("#collectionHeading").hidden=!showCollectionHeading;
  if(showCollectionHeading){
    const isCollection=state.view==="collection";
    $("#collectionTitle").textContent=isCollection?state.collection.label:state.view==="popular"?c.popular:c.saved;
    $("#collectionSummary").hidden=isCollection;
    if(!isCollection)$("#collectionSummary").textContent=state.view==="popular"?c.collectionSummary.popular:c.collectionSummary.saved;
  }
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
  $("#categoryTitle").textContent=c.momentTitle;$("#skillTitle").textContent=c.skillTitle;
  $("#categoryGrid").innerHTML=categories.map(x=>`<button class="category-card" data-category="${x[0]}"><span class="category-icon">${x[1]}</span><span class="category-copy"><strong>${x[2]}</strong><small>${x[3]}</small></span></button>`).join("");
  $("#skillGrid").innerHTML=skills.map(x=>`<button class="skill-card" data-skill="${x[0]}"><span>${x[1]}</span><span><strong>${x[2]}</strong>${x[3]?`<small>${x[3]}</small>`:""}</span></button>`).join("");
  $$("[data-category]").forEach(b=>b.onclick=()=>openCollection("category",b.dataset.category,categories.find(x=>x[0]===b.dataset.category)[2]));
  $$("[data-skill]").forEach(b=>b.onclick=()=>openCollection("skill",b.dataset.skill,skills.find(x=>x[0]===b.dataset.skill)[2]));
  scrollTo({top:0,behavior:"smooth"});
}
function openCollection(type,key,label){state.collection={type,key,label};state.view="collection";renderResults();scrollTo({top:0,behavior:"smooth"})}
let detailDemoTimer=null;
let detailToolTimer=null;
let detailToolDeadline=0;
let detailToolRemaining=60000;

const gameToolModes={3:"storyWords",40:"forbiddenWords",70:"timer",82:"sculpture",116:"magicWord",191:"timer",196:"letter",200:"timer"};
const gameToolWords={
  sr:["astronauta","palačinka","kišobran","robot","jež","balon","ostrvo","ključ","duga","kaktus","bicikl","zmaj","sendvič","čarapa","sova","brod","pahulja","raketa","šešir","kornjača","med","zvezda","kofer","leptir","čarobnjak","prozor","kompas","torta","papuča","livada","tajna","vulkan"],
  en:["astronaut","pancake","umbrella","robot","hedgehog","balloon","island","key","rainbow","cactus","bicycle","dragon","sandwich","sock","owl","boat","snowflake","rocket","hat","turtle","honey","star","suitcase","butterfly","wizard","window","compass","cake","slipper","meadow","secret","volcano"]
};
const forbiddenWordPairs={
  sr:[["kišobran","kiša"],["pas","lajanje"],["čokolada","slatko"],["zub","četkica"],["sunce","leto"],["knjiga","čitanje"],["bicikl","točak"],["banana","voće"],["lopta","sport"],["sneg","zima"],["čarapa","stopalo"],["zvezda","noć"],["med","pčela"],["raketa","svemir"]],
  en:[["umbrella","rain"],["dog","bark"],["chocolate","sweet"],["tooth","toothbrush"],["sun","summer"],["book","reading"],["bicycle","wheel"],["banana","fruit"],["ball","game"],["snow","winter"],["sock","foot"],["star","night"],["honey","bee"],["rocket","space"]]
};
const gameToolLetters={sr:["A","B","C","Č","Ć","D","Dž","Đ","E","F","G","H","I","J","K","L","Lj","M","N","Nj","O","P","R","S","Š","T","U","V","Z","Ž"],en:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")};
const gameToolSculptureIdeas={
  sr:["Drvo: jedna osoba je stablo, ostali rašire ruke kao grane.","Cvet: jedna osoba je stabljika, ostali otvore ruke kao latice.","Zvezda: raširite ruke i noge u obliku krakova.","Kišobran: stojte uspravno i podignite ruke kao krov.","Sat: jedna osoba pravi brojčanik rukama, druga pokazuje kazaljke.","Planina: podignite ruke ukoso da prikažete dva vrha.","Leptir: stojte uspravno i raširite ruke kao krila.","Vetrenjača: jedna osoba je stub, druga raširi ruke kao krila."],
  en:["Tree: one person is the trunk while others spread their arms like branches.","Flower: one person is the stem while others open their arms like petals.","Star: stretch arms and legs out like points.","Umbrella: stand tall and raise arms like a canopy.","Clock: one person makes the dial with their arms while another shows the hands.","Mountain: raise arms diagonally to show two peaks.","Butterfly: stand tall and spread arms like wings.","Windmill: one person is the tower while another spreads arms like blades."]
};

function randomItems(items,count=1){
  const shuffled=items.slice();
  for(let index=shuffled.length-1;index>0;index--){const swapIndex=Math.floor(Math.random()*(index+1));[shuffled[index],shuffled[swapIndex]]=[shuffled[swapIndex],shuffled[index]]}
  return shuffled.slice(0,count);
}
function clearGameToolTimer(){if(detailToolTimer){clearInterval(detailToolTimer);detailToolTimer=null}detailToolDeadline=0;detailToolRemaining=60000}
function formatGameToolTime(milliseconds){const totalSeconds=Math.ceil(milliseconds/1000),minutes=Math.floor(totalSeconds/60),seconds=totalSeconds%60;return `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`}
function renderGameTools(game){
  clearGameToolTimer();
  const mode=gameToolModes[game.id], section=$("#detailTools"), content=$("#detailToolsContent");
  content.replaceChildren();section.hidden=!mode;
  if(!mode)return;
  $("#detailToolsTitle").textContent=t().toolTitles[mode];
  if(mode==="timer"){
    const clock=document.createElement("output");clock.className="detail-tool-clock";clock.id="detailToolClock";clock.setAttribute("role","timer");clock.setAttribute("aria-live","off");clock.textContent="01:00";
    const toggle=document.createElement("button");toggle.type="button";toggle.className="detail-tool-button";toggle.dataset.gameToolAction="timer-toggle";toggle.id="detailToolToggle";toggle.textContent=t().toolStart;
    const reset=document.createElement("button");reset.type="button";reset.className="detail-tool-button detail-tool-button-secondary";reset.dataset.gameToolAction="timer-reset";reset.textContent=t().toolReset;
    const status=document.createElement("p");status.className="detail-tool-status";status.id="detailToolStatus";status.setAttribute("role","status");
    content.append(clock,toggle,reset,status);return;
  }
  const button=document.createElement("button");button.type="button";button.className="detail-tool-button";button.dataset.gameToolAction="generate";button.textContent=t().toolActions[mode];
  const result=document.createElement("div");result.className="detail-tool-result";result.id="detailToolResult";result.setAttribute("aria-live","polite");result.setAttribute("aria-atomic","true");
  content.append(button,result);
}
function generateGameTool(){
  const mode=gameToolModes[state.selectedGame],language=state.language,words=gameToolWords[language];let results=[];
  if(mode==="storyWords")results=randomItems(words,3);
  else if(mode==="magicWord")results=randomItems(words);
  else if(mode==="forbiddenWords"){const [word,forbidden]=randomItems(forbiddenWordPairs[language])[0];results=[`${t().toolWordLabel}: ${word}`,`${t().toolForbiddenLabel}: ${forbidden}`]}
  else if(mode==="letter")results=[`${t().toolLetterLabel}: ${randomItems(gameToolLetters[language])[0]}`];
  else if(mode==="sculpture")results=randomItems(gameToolSculptureIdeas[language]);
  const output=$("#detailToolResult");output.replaceChildren();results.forEach(value=>{const chip=document.createElement("span");chip.textContent=value;output.append(chip)});
}
function updateGameToolTimer(){
  detailToolRemaining=Math.max(0,detailToolDeadline-Date.now());$("#detailToolClock").textContent=formatGameToolTime(detailToolRemaining);
  if(detailToolRemaining===0){clearInterval(detailToolTimer);detailToolTimer=null;$("#detailToolToggle").textContent=t().toolStart;$("#detailToolStatus").textContent=t().toolTimeUp}
}
function toggleGameToolTimer(){
  if(detailToolTimer){detailToolRemaining=Math.max(0,detailToolDeadline-Date.now());clearInterval(detailToolTimer);detailToolTimer=null;$("#detailToolToggle").textContent=t().toolStart;$("#detailToolClock").textContent=formatGameToolTime(detailToolRemaining);return}
  if(detailToolRemaining<=0)detailToolRemaining=60000;
  detailToolDeadline=Date.now()+detailToolRemaining;$("#detailToolStatus").textContent="";$("#detailToolToggle").textContent=t().toolPause;detailToolTimer=setInterval(updateGameToolTimer,100);updateGameToolTimer();
}
function resetGameToolTimer(){clearGameToolTimer();$("#detailToolClock").textContent="01:00";$("#detailToolToggle").textContent=t().toolStart;$("#detailToolStatus").textContent=""}
const ageGuidanceTranslations={
  "3–5 uz odraslog":"Younger children ages 3–5 should play with adult support.",
  "mlađima ponuditi dva izvora zvuka":"Offer younger children a choice of two sounds.",
  "starijima izazov stabilnosti":"Add a stability challenge for older children.",
  "starijima omogućiti da osmisle stazu":"Let older children design the route.",
  "starijima dodati dvostruki uslov":"Add a second condition for older children.",
  "mlađima koristiti celo telo":"Invite younger children to use their whole body.",
  "mlađima ponuditi izbor između dve životinje":"Offer younger children a choice between two animals.",
  "starijima dodati pravila ili izazov":"Add a rule or extra challenge for older children.",
  "jedna komanda za mlađe, niz komandi za starije":"Use one command for younger children and a sequence for older children.",
  "mlađima dozvoliti podizanje olovke":"Allow younger children to lift the pencil.",
  "mlađima ponuditi izbor, starijima dodatni izazov":"Offer a choice to younger children and an extra challenge to older children.",
  "mlađima uz odraslog":"Younger children should play with adult support.",
  "starijima dodati građevinski izazov":"Add a building challenge for older children.",
  "starijima dodati ograničenje":"Add a constraint for older children.",
  "za 10–12 godina koristiti izazovnu varijantu":"Use the challenge version for ages 10–12.",
  "uz nivoe pitanja":"Choose question difficulty to match the child’s age.",
  "uz tri nivoa težine":"Offer three difficulty levels.",
  "zavisi od vremena i okruženja":"Adapt to the weather and setting.",
  "starijima dodati misiju":"Add a mission for older children.",
  "5–6 uz kotrljanje lopte":"For ages 5–6, roll the ball instead of throwing it.",
  "početi sa dva pokreta":"Start with two movements."
};
const ageGuidanceByGame={
  "Gratitude Garden":{
    sr:"Uzrast 4–6: ponudite izbor između dve lepe stvari; odrasli može da pomogne detetu da nacrta jednostavan cvet od kruga i latica. Dete može samo da kaže šta cvet predstavlja ili da preskoči red. Uzrast 7–10: dete samostalno bira događaj, crta cvet sa detaljem koji ga podseća na njega i može da napiše jednu reč pored cveta.",
    en:"Ages 4–6: offer a choice between two good moments; an adult can help draw a simple flower with a center and petals. The child can say what it represents or pass. Ages 7–10: let the child choose a moment, draw a flower with a detail that recalls it, and add a word beside it if they like."
  },
  "Family Newsroom":{
    sr:"Uzrast 5–7: odrasli pomaže detetu da smisli vedar naslov i postavlja jedno kratko pitanje; dete može da izmisli vest. Uzrast 8–12: reporter osmisli naslov i vest u dve rečenice, postavi gostu dodatno pitanje, pa zamene uloge. Niko ne mora da deli lične događaje.",
    en:"Ages 5–7: an adult helps the child make a cheerful headline and asks one short question; the child may invent the news story. Ages 8–12: the reporter creates a headline and a two-sentence story, asks the guest a follow-up question, then they switch roles. No one has to share personal events."
  },
  "Helpful Inventor":{
    sr:"Uzrast 4–6: odrasli ponudi izbor između dva poznata problema i daje tragove jedan po jedan; dete pogađa, pa pokretima pokazuje zamišljeni alat. Uzrast 7–10: jedan igrač bira problem i daje tačno tri traga; partner pogađa, osmišljava alat i objašnjava kako radi, pa zamene uloge.",
    en:"Ages 4–6: an adult offers a choice between two familiar problems and gives clues one at a time; the child guesses, then acts out an imaginary tool. Ages 7–10: one player chooses a problem and gives exactly three clues; the partner guesses, invents a tool and explains how it works, then they switch roles."
  },
  "Folded Face":{
    sr:"Uzrast 4–6: odrasli unapred savije papir i pokaže gde se crtaju delovi; dete bira boje i crta uz pomoć. Uzrast 7–10: deca sama smenjuju uloge, skrivaju delove i dodaju zadatu emociju ili temu.",
    en:"Ages 4–6: an adult folds the paper and shows where to draw each part; the child chooses colors and draws with help. Ages 7–10: children take turns independently, hide each part and add a chosen emotion or theme."
  },
  "Postcard Puzzle":{
    sr:"Uzrast 4–6: odrasli iseče sliku na šest velikih delova i ostavi celu originalnu sliku pored njih kao model; dete traži boje i linije koje se nastavljaju. Uzrast 7–10: iseći na osam delova, skloniti original i tražiti da dete objasni kako se ivice spajaju.",
    en:"Ages 4–6: an adult cuts the picture into six large pieces and keeps the complete original beside them as a reference; the child matches colors and lines. Ages 7–10: use eight pieces, hide the original and ask the child to explain how the edges connect."
  },
  "Draw the Feeling":{
    sr:"Uzrast 4–6: ponudite izbor između radosti i mira; dete može da izabere boju ili vrstu linije, a odrasli može da pokaže primer. Uzrast 7–10: neka dete isto osećanje prikaže na dva načina i objasni koje su boje ili linije izabrane.",
    en:"Ages 4–6: offer a choice between joy and calm; the child can choose a color or line style, and an adult may show an example. Ages 7–10: invite the child to show the same feeling in two ways and explain the colors or lines they chose."
  },
  "Memory Tray":{
    sr:"Uzrast 4–6: koristite tri velika, poznata predmeta, sklonite jedan i dajte dovoljno vremena za gledanje. Uzrast 7–12: koristite pet do sedam predmeta; sklonite jedan ili promenite raspored dva, pa neka igrač objasni šta se promenilo.",
    en:"Ages 4–6: use three large, familiar objects, remove one and allow plenty of looking time. Ages 7–12: use five to seven objects; remove one or rearrange two, then ask the player to explain what changed."
  },
  "What Is Missing?":{
    sr:"Uzrast 4–6: počnite sa tri velika, poznata predmeta i sklonite jedan; dajte detetu dovoljno vremena da ih pogleda. Uzrast 7–10: koristite pet do sedam predmeta, pa sklonite dva ili promenite mesta dvama predmetima.",
    en:"Ages 4–6: start with three large, familiar objects and remove one; give the child plenty of time to look. Ages 7–10: use five to seven objects, then remove two or swap the positions of two objects."
  },
  "Touch and Tell":{
    sr:"Uzrast 4–6: počnite sa dva velika, poznata predmeta i ponudite izbor između dva odgovora; odrasli može da da prvi trag. Uzrast 7–10: koristite više različitih predmeta, a opipavač daje najviše tri traga pre pogađanja.",
    en:"Ages 4–6: start with two large, familiar objects and offer a choice of two answers; an adult can give the first clue. Ages 7–10: use a wider range of objects, and let the player feeling the object give up to three clues before the guess."
  },
  "Cardboard Telescope":{
    sr:"Uzrast 4–6: izaberite dva poznata predmeta i ponudite prvi trag o boji ili obliku. Uzrast 7–10: posmatrač daje tri različita traga, a partner može postaviti jedno pitanje pre pogađanja.",
    en:"Ages 4–6: choose two familiar objects and offer a first clue about color or shape. Ages 7–10: the observer gives three different clues, and the partner may ask one question before guessing."
  },
  "Balance Sculpture":{
    sr:"Uzrast 4–6: koristite tri velike penaste kocke; odrasli postavlja široku osnovu, a dete dodaje po jednu. Uzrast 7–10: uporedite dve niske osnove različite širine i predvidite koja će stabilnije držati dodatnu laganu kocku.",
    en:"Ages 4–6: use three large foam blocks; an adult makes a wide base and the child adds one block at a time. Ages 7–10: compare two low bases of different widths and predict which will hold one extra lightweight block more steadily."
  },
  "Partner Pass Pattern":{
    sr:"Uzrast 4–6: počnite sa tri dodavanja i ponovite niz uz izgovaranje imena. Uzrast 7–10: napravite niz od pet dodavanja, ponovite ga bez pomoći, pa dodajte jedno novo dodavanje.",
    en:"Ages 4–6: start with three passes and repeat the sequence while saying names. Ages 7–10: create a five-pass sequence, repeat it without prompts, then add one new pass."
  },
  "Leaf Line-Up":{
    sr:"Uzrast 4–6: koristite tri velika opala lista i poređajte ih od najmanjeg do najvećeg uz pomoć odraslog. Uzrast 7–10: koristite pet ili šest listova, pa ih poređajte po veličini, a zatim po nijansi ili obliku.",
    en:"Ages 4–6: use three large fallen leaves and order them from smallest to largest with an adult's help. Ages 7–10: use five or six leaves, then sort them by size and by shade or shape."
  },
  "Bird Sound Pause":{
    sr:"Uzrast 4–6: osluškujte kratko uz odraslog i oponašajte samo jedan zvuk; odrasli može da ponudi izbor između kratkog i dugog. Uzrast 7–10: opišite da li je zvuk visok ili nizak, pa zapamtite i ponovite niz od najviše tri zvuka.",
    en:"Ages 4–6: listen briefly with an adult and imitate just one sound; an adult can offer a choice between short and long. Ages 7–10: describe whether a sound is high or low, then remember and repeat a sequence of up to three sounds."
  },
  "Body Letter Dance":{
    sr:"Uzrast 5–7: izaberite poznatu reč od dva ili tri slova i pogađajte slovo po slovo uz pomoć odraslog. Uzrast 8–12: sakrijte reč od četiri ili pet slova; za teže slovo dvoje igrača može zajedno da napravi oblik.",
    en:"Ages 5–7: choose a familiar two- or three-letter word and guess it one letter at a time with an adult's help. Ages 8–12: hide a four- or five-letter word; two players may form a tricky letter together."
  },
  "Family Mini Escape Room":{
    sr:"Uzrast 7–9: koristite tri laka zadatka kao u primeru i pomozite detetu da zapisuje cifre. Uzrast 10–12: zadržite tri kartice, ali tražite da dete objasni kako je došlo do svakog odgovora. Nagoveštaj je uvek dozvoljen.",
    en:"Ages 7–9: use three easy puzzles like the example and help the child record the digits. Ages 10–12: keep three cards, but ask the child to explain how they reached each answer. Hints are always allowed."
  },
  "Partner Shadow Dance":{
    sr:"Uzrast 3–5: odrasli vodi samo dva spora pokreta i jedan širok zaokret; dete prati uz dovoljno razmaka. Uzrast 6–9: napravite putanju sa tri zaokreta i zamenite vođu na dogovoreni znak.",
    en:"Ages 3–5: an adult leads just two slow movements and one wide turn; the child follows with plenty of space. Ages 6–9: make a path with three turns and switch leaders on an agreed signal."
  },
  "Post Office Play":{
    sr:"Uzrast 6–8: koristite sva tri simbola; za svako odredište drugi igrač daje kratak trag, na primer „zvezda je pored stolice“. Poštar treba da prepozna simbol i pronađe mesto po tragu. Uzrast 9–12: dete neka smisli četvrti simbol, nacrta dodatno pismo i podudarno odredište, pa dostavi sva pisma bez dodatnih tragova.",
    en:"Ages 6–8: use all three symbols; for each destination, the other player gives a short location clue, such as “the star is beside the chair.” The postal worker must match the symbol and find the place from the clue. Ages 9–12: have the child invent a fourth symbol, draw an extra letter and matching destination, then deliver all the letters without extra clues."
  }
};
function localizedAgeGuidance(game,language){
  const specific=ageGuidanceByGame[game.title]?.[language];
  if(specific)return specific;
  const ageText=game.ageText||"";let note=ageText.includes(";")?ageText.split(";").slice(1).join(";").trim():(ageText.match(/\(([^)]+)\)/)?.[1]||ageText.replace(/^\d+\s*[–-]\s*\d+\s*godina\s*/i,"").trim());
  if(!note||/^\d+\s*[–-]\s*\d+\s*(godina|years?)$/i.test(note))return "";
  if(language==="sr")return note;
  return ageGuidanceTranslations[note]||"Adapt the activity to the child’s age and ability.";
}
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
  "Treasure Map": {en:"At the X, describe the imaginary treasure and add one new symbol to the map.",sr:"Kod znaka X opišite zamišljeno blago i dodajte novi simbol na mapu."},
  "Sock Basketball": {en:"Mark two safe throwing spots and compare which one is easier to score from.",sr:"Označite dva bezbedna mesta za bacanje i uporedite sa kog je lakše pogoditi."},
  "Mirror Moves": {en:"Let the leader change one slow movement without speaking; the partner follows.",sr:"Vođa neka bez reči promeni jedan spor pokret, a partner ga prati."},
  "Texture Safari": {en:"Find two safe objects with matching textures and explain the match.",sr:"Pronađite dva bezbedna predmeta iste teksture i objasnite šta im je zajedničko."},
  "Cardboard City": {en:"Add a crossing for a toy and decide which route is safest.",sr:"Dodajte prelaz za igračku i zajedno izaberite najbezbedniji put."},
  "Whisper Chain": {en:"Pass a four-word message and compare the first and last versions.",sr:"Prenesite poruku od četiri reči i uporedite prvu i poslednju verziju."},
  "Leaf Race": {en:"Make clear start and finish lines and predict which leaf will arrive first.",sr:"Označite jasan start i cilj, pa pogodite koji list će prvi stići."},
  "Shape Explorer": {en:"Use two safe objects to make one of the shapes you found.",sr:"Od dva bezbedna predmeta napravite jedan oblik koji ste pronašli."},
  "Floor Is Lava": {en:"After crossing, retrace the same route without stepping off the safe spots.",sr:"Posle prelaska ponovite istu putanju bez silaska sa bezbednih mesta."},
  "Backyard Olympics": {en:"Give a medal for careful effort or a creative idea, not just winning.",sr:"Dodelite medalju za pažljiv trud ili maštovitu ideju, ne samo za pobedu."},
  "Make a Goal": {en:"Mark the left and right corners of the goal opening with paper tape. Before each turn, the caller says ‘left’ or ‘right.’ A goal through the called corner scores two points; through the other part of the goal scores one. Then switch roles.",sr:"Papirnom trakom označite levi i desni ugao otvora gola. Pre svakog pokušaja vodič kaže „levo“ ili „desno“. Pogodak kroz najavljeni ugao vredi dva poena; kroz drugi deo gola jedan poen. Zatim zamenite uloge."},
  "Sound Orchestra": {en:"Switch conductors and let the new leader change one sound at a time.",sr:"Zamenite dirigenta i neka novi vođa menja po jedan zvuk."},
  "Tape-Line Balance": {en:"At each turn in the line, pause in a steady statue pose.",sr:"Na svakom skretanju linije zastanite u stabilnoj pozi statue."},
  "Sardines": {en:"Keep the hiding place roomy and make sure nobody needs to squeeze in.",sr:"Birajte prostrano skrovište u koje niko ne mora da se ugura."},
  "Bridge Builders": {en:"Add light paper balls one at a time and count how many the bridge can hold before it bends.",sr:"Dodajte lagane papirne loptice jednu po jednu i brojite koliko ih most drži pre nego što se savije."},
  "Weather Reporter": {en:"Invent a forecast for an imaginary planet and show its weather with a gesture.",sr:"Smislite prognozu za zamišljenu planetu i pokažite vreme jednim pokretom."},
  "Dot-to-Doodle": {en:"For older children, outline a new subject with dots and let others guess it before adding details.",sr:"Za stariju decu nacrtajte novi motiv samo pomoću tačaka, pa neka ostali pogode šta predstavlja pre dodavanja detalja."},
  "Quiet Detective": {en:"Choose a category such as colors, shapes or tiny clues. Each player finds one example the others have not named yet.",sr:"Izaberite kategoriju, na primer boje, oblike ili sitne tragove. Svako pronađe jedan primer koji drugi još nisu naveli."},
  "Obstacle Mission": {en:"Let the next player choose one safe way to go around the cushion.",sr:"Neka sledeći igrač izabere jedan bezbedan način da zaobiđe jastuk."},
  "Switch Signals": {en:"Add a third signal: tapping knees means a slow turn in place.",sr:"Dodajte treći znak: tapkanje po kolenima znači spor okret u mestu."},
  "Pebble Patterns": {en:"Create a repeating rule, such as large–small–small. A partner continues the pattern with three pebbles, then switch roles.",sr:"Smislite pravilo koje se ponavlja, na primer veliki–mali–mali. Partner nastavlja šaru sa tri kamenčića, pa obrnite uloge."},
  "Copycat Clap": {en:"The leader names a feeling, such as joy, calm or surprise. Create a clap rhythm to match it, then echo the rhythm together.",sr:"Vođa kaže osećaj, na primer radost, mir ili iznenađenje. Smislite ritam pljeska koji ga predstavlja, pa ga zajedno ponovite."},
  "Hero Costume Design": {en:"Choose a new setting, such as a rainy forest or the Moon, then change one costume part to make it useful there.",sr:"Izaberite novu sredinu, poput kišne šume ili Meseca, pa promenite jedan deo kostima da tamo bude koristan."},
  "Alphabet Hunt": {en:"Find safe objects for the first three letters of a player’s name.",sr:"Pronađite bezbedne predmete za prva tri slova nečijeg imena."},
  "Emotion Charades": {en:"Silently act out two feelings in a row. The others guess both feelings and their order.",sr:"Bez reči odglumite dva osećanja zaredom. Ostali pogađaju koja su bila i kojim redosledom."},
  "Chalk River": {en:"Agree on an extra rule for the islands: clap once or name a fruit. If the surface is flat and dry, older players can try a small one-foot hop.",sr:"Dogovorite dodatno pravilo za ostrva: pljesnite jednom ili recite ime voća. Ako je podloga ravna i suva, stariji mogu da pokušaju mali skok na jednoj nozi."},
  "Pass the Sketch": {en:"In the final round, each player briefly describes their detail, then everyone comes up with a title together.",sr:"U završnom krugu svako ukratko opiše detalj koji je dodao, pa zajedno smislite naslov crteža."},
  "Tiny Garden Design": {en:"Imagine a gust of wind. Add a shelter that will not blow away and check whether the path is still clear.",sr:"Zamislite da je dunuo vetar. Dodajte zaklon koji neće odleteti i proverite da li je staza i dalje prohodna."},
  "Hot and Cold Hunt": {en:"For older players, hide two objects. The seeker finds them one at a time using only warm and cold clues.",sr:"Za stariju decu sakrijte dva predmeta. Tragač ih pronalazi redom uz tragove „toplo“ i „hladno“."},
  "Balloon Keep-Up": {en:"For an extra challenge, say the name of the person you are sending the balloon to before each tap. Try to give everyone a turn without rushing.",sr:"Za dodatni izazov, pre svakog dodira izgovorite ime osobe kojoj šaljete balon. Cilj je da svi jednom dođu na red, bez žurbe."},
  "Living Room Camp": {en:"Invent a quiet animal visitor and act out how the campers welcome it.",sr:"Izmislite tihog životinjskog gosta i odglumite kako ga kamperi dočekuju."},
  "Rhythm Leader": {en:"After a few repeats, the leader skips one sound for a round. The others guess which sound is missing and where it belongs.",sr:"Posle nekoliko ponavljanja, vođa jednom izostavi zvuk iz ritma. Ostali pogađaju koji zvuk nedostaje i gde pripada."},
  "What Changed": {en:"For older players, change two details at once and ask them to spot both.",sr:"Za stariju decu promenite dva detalja odjednom i tražite da pronađu oba."},
  "Paper Puppet Show": {en:"Let the audience suggest one safe object the characters must use in the story.",sr:"Neka publika predloži jedan bezbedan predmet koji junaci moraju da upotrebe u priči."},
  "Zigzag Delivery": {en:"For older children, the guide gives three tasks: pause and touch one shoulder at the first cup, say who the toy is for at the middle one, then leave it at the last and say, ‘Delivery complete.’ The player remembers the order before starting.",sr:"Za stariju decu vodič zada tri zadatka: kod prve čaše zastani i dodirni rame, kod srednje reci kome nosiš igračku, a kod poslednje je ostavi i reci „Dostava završena“. Igrač zapamti redosled pre polaska."},
  "One-Line Creature": {en:"Draw a path with three stops, such as a stone, a puddle and a nest. Act out how the creature changes its walk at each stop while the others guess where it is going.",sr:"Nacrtajte putanju sa tri stanice, na primer kamen, bara i gnezdo. Odglumite kako biće menja hod na svakoj stanici, a ostali neka pogode gde ide."},
  "Museum Guide": {en:"For older children, the visitor chooses an object and the guide gives three clues without saying its name. The visitor guesses the object and what it is used for, then switch roles.",sr:"Za stariju decu posetilac izabere jedan predmet, a vodič daje tri traga bez izgovaranja njegovog imena. Posetilac pogađa predmet i čemu služi, pa zamenite uloge."},
  "Balance Delivery": {en:"For older children, carry the ball to the finish and back using the non-dominant hand without dropping it. If it falls, restart from the beginning.",sr:"Za stariju decu, nosite lopticu nedominantnom rukom do cilja i nazad bez ispuštanja. Ako padne, pokušaj počinje ponovo od starta."},
  "Category Countdown": {en:"For older children, name five different fruits before time runs out, each starting with a different letter. Example: banana, kiwi, plum, orange, watermelon.",sr:"Za stariju decu: nabrojte pet različitih voćki pre isteka vremena, svaku na drugo početno slovo. Primer: banana, kruška, šljiva, narandža, lubenica."},
  "Spider Web Route": {en:"Add one new safe turn to the route and show a partner the way through.",sr:"Dodajte jedno bezbedno skretanje stazi i pokažite partneru put kroz nju."},
  "Nature Bingo": {en:"For older children, give two clues at once, such as: ‘Find something green with jagged edges.’ The player searches with their eyes and explains how it matches both clues. Do not pick or touch anything.",sr:"Za stariju decu zadajte dva uslova odjednom, na primer: „Pronađi nešto zeleno sa nazubljenim ivicama.“ Igrač to traži pogledom i objašnjava kako ispunjava oba uslova. Ne berite i ne dirajte."},
  "Bounce and Catch": {en:"For older children: after one bounce, quickly touch your knees, then shoulders, and catch the ball before it hits the floor again. Bounce gently and stay in place.",sr:"Za stariju decu: posle jednog odskoka brzo dodirnite kolena, pa ramena i uhvatite loptu pre nego što ponovo udari o pod. Odbijajte je nežno i ostanite na mestu."},
  "Dance Traffic Lights": {en:"For older children, add a blue signal: make one slow turn in place, then freeze on red. The caller can change signals unpredictably; do not run.",sr:"Za stariju decu uvedite plavi signal: napravite jedan spor okret u mestu, a na crveno se odmah ukočite. Vodič može da menja signale nepredvidivo; ne trčite."},
  "Box Invention": {en:"Give the invention one problem to solve and demonstrate how it helps.",sr:"Zadajte izumu jedan problem i pokažite kako pomaže da se reši."},
  "Scent Explorer": {en:"For older children, an adult offers three scents one at a time. The child remembers and repeats the order; for a harder level, repeat it backwards. Offer scents from a distance.",sr:"Za stariju decu odrasli ponudi tri mirisa jedan po jedan. Dete zapamti i ponovi redosled; za teži nivo, ponovi ga unazad. Mirise ponudite sa odstojanja."},
  "Symmetry Art": {en:"For older children, the adult draws three dots at different distances from the center line. The child mirrors them on the other side without folding the paper, then check their positions together.",sr:"Za stariju decu odrasli nacrta tri tačke na različitim udaljenostima od srednje linije. Dete ih preslika na drugu stranu bez presavijanja papira, pa zajedno proverite položaj."},
  "Jumping Numbers": {en:"For older children, the adult calls three numbers in a row, such as 2–5–1. The child remembers the sequence, then makes one small jump to each matching card in order.",sr:"Za stariju decu odrasli izgovori tri broja zaredom, na primer 2–5–1. Dete zapamti niz, pa jednim malim skokom dođe do svake odgovarajuće kartice redom."},
  "Twig Letters": {en:"Build a short secret word from fallen twigs and ask another player to read it without hints. For a harder level, choose a word of at least four letters, then switch roles.",sr:"Složite kratku tajnu reč od opalih grančica, a drugi igrač neka je pročita bez nagoveštaja. Za teži nivo izaberite reč od najmanje četiri slova, pa zamenite uloge."},
  "Corner Goals": {en:"Call a color and gently roll the ball toward its matching corner marker.",sr:"Izgovorite boju i nežno otkotrljajte loptu ka odgovarajućoj oznaci u uglu."},
  "Sound Map": {en:"Mark the farthest sound on the drawing, then add an arrow showing its direction.",sr:"Na crtežu označite najudaljeniji zvuk i dodajte strelicu koja pokazuje smer."},
  "Kitchen Band": {en:"Each player invents one quiet sound. The conductor combines them into a short rhythm for the band to play together, then a new player conducts.",sr:"Svaki svirač smisli po jedan tih zvuk. Dirigent ih spoji u kratak ritam, a bend ga zajedno odsvira; zatim se menja dirigent."},
  "Indoor Picnic Quest": {en:"Add a pretend dessert to the picnic and invent a clue that leads to it.",sr:"Dodajte zamišljeni desert pikniku i smislite trag koji vodi do njega."},
  "Build a Creature": {en:"Give the creature a home and one helpful job it can do there.",sr:"Osmislite dom za biće i jedan koristan posao koji tamo obavlja."},
  "Captain Says": {en:"For older children, the captain quickly alternates a real and a trick command: ‘Captain says: touch your shoulders,’ then ‘take one step.’ Players do only the first; nobody is eliminated, just keep playing.",sr:"Za stariju decu kapetan brzo smenjuje pravu i lažnu komandu: „Kapetan kaže: dodirni ramena“, pa odmah „napravi jedan korak“. Igrači urade samo prvu; nema ispadanja, samo nastavite igru."},
  "Hopscotch Remix": {en:"For older children, an adult calls three numbers in order, such as 4–2–6. The player remembers the sequence, hops to those squares and does an action only if a square is marked.",sr:"Za stariju decu odrasli izgovori tri broja redom, na primer 4–2–6. Igrač pamti niz, skače do tih polja i izvodi radnju samo ako je neko od njih označeno."},
  "Leaf Shadow Trace": {en:"Trace the shadow now, then again in 10–15 minutes using another color, without moving the leaf or paper. Compare which way it shifted and whether it is longer or shorter; do not look directly at the sun.",sr:"Ocrtajte senku sada, pa ponovo za 10–15 minuta drugom bojom, bez pomeranja lista ili papira. Uporedite u kom smeru se senka pomerila i da li je duža ili kraća; ne gledajte direktno u sunce."},
  "Mood Music Moves": {en:"Switch feelings halfway through the song and change your movement to match.",sr:"Na polovini pesme promenite osećanje i pokretom pokažite novu emociju."},
  "Tallest Tiny Tower": {en:"Pause after each new level and count how many pieces the tower holds.",sr:"Posle svakog novog nivoa zastanite i prebrojte koliko delova kula drži."},
  "Guess My Rule": {en:"For older children, the sorter sneaks one object into the wrong group. The others first guess the secret rule, then find the odd one out and explain why it does not belong.",sr:"Za stariju decu razvrstavač ubaci jedan predmet u pogrešnu grupu. Ostali prvo pogađaju tajno pravilo, zatim pronalaze uljeza i objašnjavaju zašto ne pripada toj grupi."},
  "Postcard Adventure": {en:"Add a one-line message from someone who lives in the place you drew.",sr:"Dodajte kratku poruku osobe koja živi na mestu koje ste nacrtali."},
  "Stepping-Stone Story": {en:"At each safe stepping spot, add one word to a shared sentence.",sr:"Na svakom bezbednom mestu za stajanje dodajte po jednu reč zajedničkoj priči."},
  "Wind Race": {en:"For older children, make a gate halfway down each lane using two markers. The leaf must pass through the gate before crossing the finish; if it misses, try again with a gentle blow.",sr:"Za stariju decu napravite kapiju na polovini svake staze od dve oznake. List mora da prođe kroz kapiju pa tek onda preko cilja; ako je promaši, pokušajte ponovo nežnim duvanjem."},
  "Circle Keep-Away": {en:"After the ball goes around the circle once, the caller says ‘change direction’ and players begin rolling it the other way. The middle player stays in place until they intercept it.",sr:"Kada lopta obiđe krug jednom, vodič kaže „promena smera“ i igrači počinju da je kotrljaju u suprotnom smeru. Igrač u sredini ostaje na mestu dok ne presretne loptu."},
  "Final Pose Challenge": {en:"Finish as a statue of an animal or object and let the group guess it.",sr:"Završite kao statua životinje ili predmeta, pa neka grupa pogodi šta ste."},
  "Colorful Steps": {en:"Make a short color pattern and give each color its own safe movement.",sr:"Napravite kratak niz boja i svakoj dodelite po jedan bezbedan pokret."},
  "Three Things, One Story": {en:"For a twist, choose one object to become the story's narrator and tell the ending from its point of view.",sr:"Za obrt, izaberite jedan predmet da bude pripovedač i ispriča kraj iz svog ugla."},
  "Pillow Mountain": {en:"Guide a toy across the cushion mountain using a slow, careful route.",sr:"Provedite igračku preko planine od jastuka polaganom i pažljivom putanjom."},
  "Tiptoe Trail": {en:"Carry a soft toy on an open palm along the clear route without letting it fall.",sr:"Nosite mekanu igračku na otvorenom dlanu duž slobodne staze, pazeći da ne padne."},
  "Animal Traffic": {en:"Choose one animal for each signal and move slowly when its signal is called.",sr:"Izaberite životinju za svaki znak i krećite se polako kada se znak izgovori."},
  "Jump and Name": {en:"Name an item from the chosen category after each small, safe jump.",sr:"Posle svakog malog, bezbednog skoka navedite pojam iz izabrane kategorije."},
  "Mission Cards": {en:"Combine two cards into one short mission and complete them in order.",sr:"Spojite dve kartice u kratku misiju i izvršite zadatke po redu."},
  "Crawl Like a Comet": {en:"Repeat the route slowly, then finish by making a star shape on the floor.",sr:"Ponovite stazu polako, pa završite tako što ćete na podu napraviti zvezdu."},
  "Invent a Creature": {en:"Choose a habitat for the creature and make a sound it might use there.",sr:"Izaberite stanište za biće i smislite zvuk kojim bi se tamo oglašavalo."},
  "Pocket Narrator": {en:"Choose one object as the problem-maker. Let the other two characters find a way to help, then act out the ending.",sr:"Izaberite jedan predmet koji će napraviti problem. Neka druga dva lika pronađu način da pomognu, pa odglumite završetak."},
  "Rhyme Relay": {en:"Choose two words from the chain and make a couplet, then add a rhyming line.",sr:"Izaberite dve reči iz lanca i sastavite dvostih, pa dodajte još jedan stih koji se rimuje."},
  "Sound Story": {en:"Add a third character with a new sound and let it help solve the story’s problem.",sr:"Dodajte trećeg lika sa novim zvukom i dajte mu ulogu u rešavanju problema iz priče."},
  "Question Detective": {en:"Set a limit of five yes-or-no questions before making a guess.",sr:"Dogovorite najviše pet pitanja sa odgovorom „da” ili „ne” pre pogađanja."},
  "Kindness News": {en:"Make a headline, report one fact, then interview the helper and switch roles.",sr:"Smislite naslov, iznesite jednu činjenicu, intervjuišite pomagača i zamenite uloge."},
  "Opposite Day Tale": {en:"Reverse two details at once: a big bear walks forward into the forest; next, a small bear walks backward home.",sr:"Preokrenite dva detalja odjednom: veliki medved ide napred u šumu, a zatim mali medved ide unazad kući."},
  "Soundtrack Story": {en:"Give each character a quiet sound and repeat it whenever that character appears.",sr:"Dodelite svakom junaku tih zvuk i ponovite ga kad god se pojavi."},
  "Magic Word Story": {en:"Add a second magic word that changes one character's plan.",sr:"Dodajte drugu čarobnu reč koja menja plan jednog junaka."},
  "Secret Shape Sketch": {en:"Let a partner draw a new picture around the hidden shape, then find it together.",sr:"Neka partner nacrta novu sliku oko skrivenog oblika, pa ga zajedno pronađite."},
  "Line to Landscape": {en:"Turn the page and add one detail that makes the landscape a new place.",sr:"Okrenite papir i dodajte detalj koji pejzaž pretvara u novo mesto."},
  "Three-Color Creature": {en:"Give each chosen color a body part and a special job.",sr:"Svakoj izabranoj boji dodelite deo tela i poseban zadatak."},
  "Round-Robin Doodle": {en:"Agree on a title only after everyone has added a detail.",sr:"Smislite naslov tek nakon što svako doda po jedan detalj."},
  "Shape Family": {en:"Add a new family member with a different shape and feeling.",sr:"Dodajte novog člana porodice drugačijeg oblika i raspoloženja."},
  "Folded Face": {en:"Add a thought bubble and let the group guess what the face is thinking.",sr:"Dodajte oblačić za misli i neka grupa pogodi o čemu lice razmišlja."},
  "Pattern Portrait": {en:"Use two patterns that alternate and give the finished portrait a name.",sr:"Naizmenično koristite dve šare i dajte gotovom portretu ime."},
  "Invisible Ink Map": {en:"For a bonus, give your partner only the key and let them draw a new route from start to finish.",sr:"Za bonus, dajte partneru samo legendu i pustite ga da nacrta novi put od početka do cilja."},
  "Draw the Feeling": {en:"Draw the same feeling in two different ways, then explain which colors and lines shaped each version.",sr:"Nacrtajte isto osećanje na dva načina, pa objasnite kako su boje i linije promenile utisak."},
  "Button Sorting Lab": {en:"Invent a new sorting rule and see if a partner can guess it.",sr:"Smislite novo pravilo za razvrstavanje i proverite da li ga partner pogađa."},
  "What Is Missing?": {en:"Switch roles so the child removes an object and the adult gets to guess. Add a second missing object only if the child wants a harder round.",sr:"Zamenite uloge tako da dete skloni predmet, a odrasli pogađa. Dodajte drugi predmet samo ako dete želi teži krug."},
  "Clue Collector": {en:"Make the last clue rhyme with the place where the surprise is hidden.",sr:"Neka se poslednji trag rimuje sa mestom na kom je iznenađenje sakriveno."},
  "Sound Source Hunt": {en:"With eyes open, stay still and follow one gentle sound using only left/right clues.",sr:"Otvorenih očiju mirujte i pratite nežan zvuk samo pomoću tragova levo/desno."},
  "Odd One Out": {en:"Add a second odd item and explain a different reason it does not belong.",sr:"Dodajte još jedan uljez i objasnite po čemu se razlikuje."},
  "Touch and Tell": {en:"Let the guessers ask up to three yes-or-no questions before the object is revealed, then switch roles.",sr:"Neka oni koji pogađaju postave do tri pitanja sa odgovorom „da“ ili „ne“ pre otkrivanja predmeta, pa zamenite uloge."},
  "Sequence Spotter": {en:"For a harder round, use a three-part pattern such as red-red-blue. Ask the player to explain the rule before extending it.",sr:"Za teži krug koristite obrazac od tri dela, poput crveno-crveno-plavo. Neka igrač objasni pravilo pre nego što nastavi niz."},
  "Room Scavenger List": {en:"Find one safe object that matches two clues at once, such as color and shape.",sr:"Pronađite bezbedan predmet koji odgovara dvama tragovima, na primer boji i obliku."},
  "Secret Path Finder": {en:"Add one extra turn to the route and give a clue only at the halfway point.",sr:"Dodajte još jedno skretanje na stazu i dajte trag tek na polovini."},
  "Five Things Fast": {en:"Choose one letter and name five familiar things that start with it.",sr:"Izaberite jedno slovo i navedite pet poznatih stvari koje njime počinju."},
  "Paper Bridge Test": {en:"Change one fold and test the bridge again with the same small toy to compare the result.",sr:"Promenite jedan pregib i ponovo ispitajte most istom malom igračkom da uporedite rezultat."},
  "Straw City": {en:"Add one connecting road and make a sign that tells the toy where to go.",sr:"Dodajte povezni put i napravite znak koji pokazuje igrački kuda da ide."},
  "Marshmallow Structures": {en:"Try making a small arch that can stand without anyone holding it.",sr:"Pokušajte da napravite mali luk koji stoji bez pridržavanja."},
  "Bridge to the Toy": {en:"Make the bridge reach a little farther while keeping its base on a stable surface.",sr:"Produžite most malo više, ali mu osnovu zadržite na stabilnoj površini."},
  "Cardboard Telescope": {en:"Choose two objects and find one detail they share and one detail that differs through the pretend telescope.",sr:"Izaberite dva predmeta i kroz zamišljeni teleskop pronađite jednu zajedničku i jednu različitu osobinu."},
  "Maze Builder": {en:"Add one dead end, but make sure there is still a clear route to the toy.",sr:"Dodajte jednu slepu ulicu, ali ostavite jasan put do igračke."},
  "Balance Sculpture": {en:"Compare two low bases of different widths and predict which will hold one extra lightweight block more steadily.",sr:"Uporedite dve niske osnove različite širine i pogodite koja će stabilnije držati još jednu laganu kocku."},
  "Tiny Shop": {en:"A pretend customer asks for something unusual; invent it and add it to the shop.",sr:"Zamišljeni kupac traži nešto neobično; izmislite taj proizvod i dodajte ga u prodavnicu."},
  "Paper Playground": {en:"Add a quiet rest spot to the drawing and decide who might use it.",sr:"Dodajte mirno mesto za odmor na crtež i zamislite ko bi ga koristio."},
  "Balloon Tap Circle": {en:"After one full round, gently reverse the direction of the balloon taps.",sr:"Posle jednog punog kruga nežno promenite smer dodavanja balona."},
  "Target Ladder": {en:"After reaching the nearest target, move to the next marked spot and try again gently.",sr:"Kada pogodite najbližu metu, pređite na sledeću oznaku i ponovo pokušajte nežno."},
  "Roll and Follow": {en:"After each pass, the receiver chooses a new safe movement for both players to do.",sr:"Posle svakog dodavanja primalac bira novi bezbedan pokret koji oba igrača izvode."},
  "Two-Bounce Catch": {en:"Try two soft bounces in different places before the careful catch.",sr:"Pokušajte dva blaga odskoka na različitim mestima pre pažljivog hvatanja."},
  "Balloon Volleyball": {en:"After three gentle taps, switch places before keeping the balloon in the air again.",sr:"Posle tri blaga udarca zamenite mesta, pa nastavite da održavate balon u vazduhu."},
  "Partner Pass Pattern": {en:"After the group can repeat the route, add one new pass at the end and try the full sequence again.",sr:"Kada grupa ponovi redosled, dodajte jedno novo dodavanje na kraj i ponovite ceo niz."},
  "Rolling Ramps": {en:"Raise one end of the low, stable ramp slightly and compare how the ball rolls.",sr:"Malo podignite jedan kraj niske, stabilne rampe i uporedite kako se lopta kotrlja."},
  "Circle Bounce": {en:"Say the next player's name before the gentle bounce and pass.",sr:"Izgovorite ime sledećeg igrača pre nego što nežno odbijete i dodate loptu."},
  "Target Story Toss": {en:"Invent a new story detail for the target the ball reaches.",sr:"Smislite novi detalj priče za metu do koje je lopta stigla."},
  "Leaf Line-Up": {en:"After sorting by size, mix the leaves and ask a partner to rebuild the order using shade or shape.",sr:"Posle slaganja po veličini promešajte listove i zamolite partnera da ih ponovo poređa po nijansi ili obliku."},
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
  "Time-Travel Guide": {en:"Visit a village before electricity and ask how homes were lit, or a future city where buses fly between buildings and ask how they know where to land.",sr:"Posetite selo pre struje i pitajte kako su osvetljavali kuće ili grad budućnosti u kome autobusi lete između zgrada i pitajte kako znaju gde da slete."},
  "Tiny Theatre": {en:"Perform the same short scene once with words and once without speaking.",sr:"Odglumite istu kratku scenu jednom rečima, a zatim bez govora."},
  "Quiet Cloud Count": {en:"Silently count the clouds you see, then compare totals without rushing.",sr:"U sebi prebrojte oblake koje vidite, pa polako uporedite broj."},
  "Feather Focus": {en:"Guess where the feather will land, then see how close your guess was.",sr:"Pogodite gde će pero pasti, pa proverite koliko je procena bila blizu."},
  "Breathing Shapes": {en:"Switch from tracing a square to a circle after a few comfortable breaths; do not hold your breath.",sr:"Posle nekoliko prijatnih udaha pređite sa kvadrata na krug; nemojte zadržavati dah."},
  "Silent Sorting": {en:"After sorting once, invent a different rule and regroup the same safe objects.",sr:"Posle prvog razvrstavanja smislite drugo pravilo i ponovo složite iste bezbedne predmete."},
  "Calm Color Search": {en:"Arrange the five same-color objects from lightest to darkest.",sr:"Poređajte pet predmeta iste boje od najsvetlijeg do najtamnijeg."},
  "Listening Minute": {en:"After listening, point toward the farthest sound you noticed.",sr:"Posle slušanja pokažite u smeru najudaljenijeg zvuka koji ste primetili."},
  "Tense and Relax": {en:"Add a gentle shoulder stretch between each tense-and-relax round.",sr:"Između krugova stezanja i opuštanja nežno istegnite ramena."},
  "Quiet Pattern Tiles": {en:"Hide one item from the pattern and let a partner identify the missing spot.",sr:"Sakrijte jedan predmet iz niza i neka partner otkrije koje mesto nedostaje."},
  "Gratitude Garden": {en:"I liked drawing together today; draw a yellow flower for that moment.",sr:"Danas mi se dopalo kad smo zajedno crtali; nacrtajte žuti cvet za taj trenutak."},
  "Paper Bridge Test": {en:"Change one fold and test the bridge again with the same small toy to compare the result.",sr:"Promenite jedan pregib i ponovo ispitajte most istom malom igračkom da uporedite rezultat."},
  "Straw City": {en:"Add one connecting road and make a sign that tells the toy where to go.",sr:"Dodajte povezni put i napravite znak koji pokazuje igrački kuda da ide."},
  "Marshmallow Structures": {en:"Try making a small arch that can stand without anyone holding it.",sr:"Pokušajte da napravite mali luk koji stoji bez pridržavanja."},
  "Bridge to the Toy": {en:"Make the bridge reach a little farther while keeping its base on a stable surface.",sr:"Produžite most malo više, ali mu osnovu zadržite na stabilnoj površini."},
  "Cardboard Telescope": {en:"Choose two objects and find one detail they share and one detail that differs through the pretend telescope.",sr:"Izaberite dva predmeta i kroz zamišljeni teleskop pronađite jednu zajedničku i jednu različitu osobinu."},
  "Maze Builder": {en:"Add one dead end, but make sure there is still a clear route to the toy.",sr:"Dodajte jednu slepu ulicu, ali ostavite jasan put do igračke."},
  "Balance Sculpture": {en:"Compare two low bases of different widths and predict which will hold one extra lightweight block more steadily.",sr:"Uporedite dve niske osnove različite širine i pogodite koja će stabilnije držati još jednu laganu kocku."},
  "Tiny Shop": {en:"A pretend customer asks for something unusual; invent it and add it to the shop.",sr:"Zamišljeni kupac traži nešto neobično; izmislite taj proizvod i dodajte ga u prodavnicu."},
  "Paper Playground": {en:"Add a quiet rest spot to the drawing and decide who might use it.",sr:"Dodajte mirno mesto za odmor na crtež i zamislite ko bi ga koristio."},
  "Balloon Tap Circle": {en:"After one full round, gently reverse the direction of the balloon taps.",sr:"Posle jednog punog kruga nežno promenite smer dodavanja balona."},
  "Target Ladder": {en:"After reaching the nearest target, move to the next marked spot and try again gently.",sr:"Kada pogodite najbližu metu, pređite na sledeću oznaku i ponovo pokušajte nežno."},
  "Roll and Follow": {en:"After each pass, the receiver chooses a new safe movement for both players to do.",sr:"Posle svakog dodavanja primalac bira novi bezbedan pokret koji oba igrača izvode."},
  "Two-Bounce Catch": {en:"Try two soft bounces in different places before the careful catch.",sr:"Pokušajte dva blaga odskoka na različitim mestima pre pažljivog hvatanja."},
  "Balloon Volleyball": {en:"After three gentle taps, switch places before keeping the balloon in the air again.",sr:"Posle tri blaga udarca zamenite mesta, pa nastavite da održavate balon u vazduhu."},
  "Partner Pass Pattern": {en:"After the group can repeat the route, add one new pass at the end and try the full sequence again.",sr:"Kada grupa ponovi redosled, dodajte jedno novo dodavanje na kraj i ponovite ceo niz."},
  "Rolling Ramps": {en:"Raise one end of the low, stable ramp slightly and compare how the ball rolls.",sr:"Malo podignite jedan kraj niske, stabilne rampe i uporedite kako se lopta kotrlja."},
  "Circle Bounce": {en:"Say the next player's name before the gentle bounce and pass.",sr:"Izgovorite ime sledećeg igrača pre nego što nežno odbijete i dodate loptu."},
  "Target Story Toss": {en:"Invent a new story detail for the target the ball reaches.",sr:"Smislite novi detalj priče za metu do koje je lopta stigla."},
  "Leaf Line-Up": {en:"After sorting by size, mix the leaves and ask a partner to rebuild the order using shade or shape.",sr:"Posle slaganja po veličini promešajte listove i zamolite partnera da ih ponovo poređa po nijansi ili obliku."},
  "Nature Number Hunt": {en:"Choose a number and point to a safe natural group that matches it.",sr:"Izaberite broj i pokažite bezbednu grupu iz prirode koja mu odgovara."},
  "Stick Shadow Shapes": {en:"Let a partner guess the shadow shape before you name it.",sr:"Neka partner pogodi oblik senke pre nego što ga imenujete."},
  "Bird Sound Pause": {en:"Take turns copying one bird call softly, then choose which sound you liked best.",sr:"Naizmenično tiho oponašajte glas jedne ptice, pa izaberite zvuk koji vam se najviše dopao."},
  "Nature Color Wheel": {en:"Find one more fallen item to fill a color gap in the wheel.",sr:"Pronađite još jedan otpali predmet da popunite nedostajuću boju u točku."},
  "Windy Ribbon Watch": {en:"Guess which way the ribbon will move next, then check your prediction.",sr:"Pogodite na koju stranu će se traka sledeće pomeriti, pa proverite pretpostavku."},
  "Mini Habitat": {en:"Add a small shelter where the pretend creature could rest during rain.",sr:"Dodajte malo sklonište u kom bi se zamišljeno biće odmorilo dok pada kiša."},
  "Cloud Shape Chain": {en:"Change the first cloud shape slightly and build a new chain of ideas.",sr:"Malo promenite prvi oblik oblaka i napravite novi lanac ideja."},
  "Nature Texture Cards": {en:"Sort the texture pairs from softest to roughest without touching any unsafe item.",sr:"Poređajte parove tekstura od najmekšeg do najhrapavijeg, bez dodirivanja nebezbednih predmeta."},
  "Sunrise Stretch Story": {en:"Let each person add one gentle stretch for a different part of the landscape.",sr:"Neka svako doda po jedno blago istezanje za drugi deo pejzaža."},
  "Mirror Animal": {en:"Make a two-move animal sequence and see if your partner can copy it from memory.",sr:"Napravite niz od dva životinjska pokreta i proverite može li partner da ih ponovi po sećanju."},
  "Beat the Pause": {en:"Freeze in a pose that shows a place, then let the group guess where you are.",sr:"Ukočite se u pozi koja prikazuje neko mesto, pa neka grupa pogodi gde ste."},
  "Body Letter Dance": {en:"Make the first letter of a name with your body and let a partner guess whose name it is.",sr:"Telom napravite prvo slovo nečijeg imena i pustite partnera da pogodi čije je."},
  "Slow Fast Switch": {en:"Add a still pose between the slow and fast sections.",sr:"Između sporog i brzog dela ubacite mirnu pozu."},
  "Clap and Step": {en:"Let one player add a knee tap, then repeat the new rhythm together.",sr:"Neka jedan igrač doda tapkanje po kolenu, pa zajedno ponovite novi ritam."},
  "Rainbow Ribbon Dance": {en:"Choose one color of ribbon movement and repeat it whenever the music changes.",sr:"Izaberite jedan pokret zamišljene trake i ponovite ga kad god se muzika promeni."},
  "Partner Shadow Dance": {en:"Make one movement very small and the next one wide, then switch who leads.",sr:"Jedan pokret napravite veoma sitno, a sledeći široko, pa zamenite vođu."},
  "Mood Statues": {en:"Let the group guess the feeling from the pose before the player explains it.",sr:"Neka grupa pogodi osećanje na osnovu poze pre nego što ga igrač objasni."},
  "Direction Dance": {en:"Call two directions in a row and let the dancer combine them into one move.",sr:"Izgovorite dva pravca zaredom, pa neka ih igrač spoji u jedan pokret."},
  "Celebration Choreo": {en:"Each player adds one small move to the shared ending pose.",sr:"Svaki igrač dodaje po jedan mali pokret zajedničkoj završnoj pozi."},
  "Toy Doctor": {en:"The toy gives one clue about how it feels, and the doctor suggests a pretend treatment.",sr:"Igračka daje jedan trag kako se oseća, a doktor predlaže zamišljeni tretman."},
  "Restaurant Imagination": {en:"Let the customer choose two pretend ingredients and invent a dish with both.",sr:"Neka gost izabere dva zamišljena sastojka, pa smislite jelo koje ih sadrži."},
  "Post Office Play": {en:"Deliver one pretend letter using a made-up address and a simple clue.",sr:"Dostavite zamišljeno pismo na izmišljenu adresu prateći jedan jednostavan trag."},
  "Space Mission Control": {en:"Add one gentle obstacle on the route and agree on a signal for landing.",sr:"Dodajte jednu blagu prepreku na putu i dogovorite znak za sletanje."},
  "Helpful Inventor": {en:"Give the invention a name and describe one thing it cannot do.",sr:"Dajte izumu ime i opišite jednu stvar koju ne može da uradi."},
  "Underwater Tour": {en:"Let a visitor choose one sea creature, then show how it moves through the water.",sr:"Neka posetilac izabere jedno morsko biće, pa pokažite kako se kreće kroz vodu."},
  "Family Newsroom": {en:"Ask the person in the headline one friendly question about what happened.",sr:"Postavite osobi iz glavne vesti jedno prijatno pitanje o tome šta se dogodilo."},
  "Time-Travel Guide": {en:"Choose one object from today and imagine what it might look like in the future.",sr:"Izaberite jedan predmet iz današnjice i zamislite kako bi mogao da izgleda u budućnosti."},
  "Tiny Theatre": {en:"Add a surprise ending, then perform the scene once more with that ending.",sr:"Smislite iznenadni kraj, pa još jednom odglumite scenu sa tim završetkom."},
  "Quiet Cloud Count": {en:"Give one cloud a shape and silently count how many others look similar.",sr:"Dajte jednom oblaku oblik i u sebi prebrojte koliko drugih liče na njega."},
  "Feather Focus": {en:"Follow the feather's path with one finger, moving slowly and staying in place.",sr:"Pratite putanju pera jednim prstom, polako i bez pomeranja sa mesta."},
  "Breathing Shapes": {en:"Take turns choosing the next shape to trace, keeping every breath easy and natural.",sr:"Naizmenično birajte sledeći oblik za praćenje, uz lagano i prirodno disanje."},
  "Silent Sorting": {en:"Sort the objects by a new rule using gestures only, then reveal the rule.",sr:"Razvrstajte predmete po novom pravilu samo pokretima, pa otkrijte pravilo."},
  "Calm Color Search": {en:"Choose one new color and find a matching object without moving furniture or climbing.",sr:"Izaberite novu boju i pronađite odgovarajući predmet bez pomeranja nameštaja i penjanja."},
  "Listening Minute": {en:"Try to remember two sounds in the order you heard them.",sr:"Pokušajte da zapamtite dva zvuka redom kojim ste ih čuli."},
  "Tense and Relax": {en:"Choose one body part, gently tense it, then relax it and notice the difference.",sr:"Izaberite deo tela, blago ga zategnite, pa opustite i primetite razliku."},
  "Quiet Pattern Tiles": {en:"Make a repeating pattern with two safe objects, then let a partner continue it.",sr:"Napravite šaru koja se ponavlja od dva bezbedna predmeta, pa neka je partner nastavi."},
  "Gratitude Garden": {en:"Share one good thing from the day and draw a flower for it; anyone may pass.",sr:"Podelite jednu lepu stvar iz dana i nacrtajte cvet za nju; svako može i da preskoči red."}
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
  "Sardines": {en:"One child hides in a spacious, safe place. Everyone who finds them quietly joins the group.",sr:"Jedno dete se sakrije na prostranom, bezbednom mestu. Ko ga pronađe, tiho se pridruži grupi."},
  "Bridge Builders": {en:"Fold paper like an accordion, rest it between two books and carefully place a small soft toy in the middle.",sr:"Presavijte papir u harmoniku, oslonite ga na dve knjige i pažljivo stavite malu plišanu igračku na sredinu."},
  "Weather Reporter": {en:"Give a sunny forecast for an imaginary planet and show the breeze with your hands.",sr:"Dajte sunčanu prognozu za zamišljenu planetu i rukama pokažite povetarac."},
  "Dot-to-Doodle": {en:"Arrange the dots into a fish outline, connect them, then add an eye, fins and bubbles.",sr:"Rasporedite tačke u obris ribe, spojite ih, pa dodajte oko, peraje i mehuriće."},
  "Quiet Detective": {en:"On a shelf, one player notices a blue marker, another spots a book with a bent corner, and someone finds an object behind a vase.",sr:"Na polici neko primeti plavi marker, neko knjigu sa savijenim uglom, a neko predmet koji stoji iza vaze."},
  "Obstacle Mission": {en:"Walk around a cushion, step over a tape line and reach the toy at the finish.",sr:"Zaobiđite jastuk, prekoračite liniju od trake i stignite do igračke na cilju."},
  "Switch Signals": {en:"One clap means step in place and two claps mean freeze. After ‘Switch!’, the meanings reverse.",sr:"Jedan pljesak znači korak u mestu, a dva pljeska zamrzavanje. Posle „Promena!“ značenja se obrću."},
  "Pebble Patterns": {en:"Copy a short pattern of large, safe pebbles after looking at it for a few seconds.",sr:"Pogledajte nekoliko sekundi šaru od većih, bezbednih kamenčića, pa je složite po sećanju."},
  "Copycat Clap": {en:"Clap twice, tap your knees once and let a partner repeat the rhythm.",sr:"Pljesnite dvaput, jednom tapnite kolena i neka partner ponovi ritam."},
  "Hero Costume Design": {en:"For an underwater explorer, draw a diving mask, fins and an underwater torch; each part helps with the mission.",sr:"Za podvodnog istraživača nacrtajte masku za ronjenje, peraje i podvodnu lampu; svaki deo pomaže u misiji."},
  "Alphabet Hunt": {en:"Find one safe object for the first three letters of a player's name.",sr:"Pronađite po jedan bezbedan predmet za prva tri slova nečijeg imena."},
  "Emotion Charades": {en:"Act out surprise with wide eyes and raised eyebrows while the others guess the feeling.",sr:"Odglumite iznenađenje raširenim očima i podignutim obrvama, a ostali pogađaju osećanje."},
  "Chalk River": {en:"Draw four large islands in a zigzag between the banks. Each player chooses the next island before carefully stepping onto it.",sr:"Nacrtajte četiri velika ostrva u cik-cak između obala. Svako bira sledeće ostrvo pre nego što pažljivo zakorači na njega."},
  "Pass the Sketch": {en:"Draw a circle, pass the page and let the next player turn it into a balloon or planet.",sr:"Nacrtajte krug, prosledite papir i neka ga sledeći pretvori u balon ili planetu."},
  "Tiny Garden Design": {en:"For a ladybug, make a shelter under a fallen leaf, a path of larger pebbles and a broad leaf as a resting spot.",sr:"Za bubamaru napravite skrovište ispod opalog lista, stazu od većih kamenčića i širok list kao mesto za odmor."},
  "Hot and Cold Hunt": {en:"Hide a soft toy nearby and guide the seeker with only warm or cold clues.",sr:"Sakrijte mekanu igračku u blizini i vodite tragača samo tragovima toplo ili hladno."},
  "Balloon Keep-Up": {en:"Gently tap a balloon three times, then pass the next tap to a partner.",sr:"Nežno dodirnite balon tri puta, pa sledeći dodir prepustite partneru."},
  "Living Room Camp": {en:"Drape a blanket over two stable chairs or support it with firm cushions to make a low den. Tell a short story about an animal visitor inside.",sr:"Prebacite ćebe preko dve stabilne stolice ili ga oslonite na čvrste jastuke da napravite niski zaklon. Unutra ispričajte priču o životinjskom gostu."},
  "Rhythm Leader": {en:"Clap, tap your knees, clap; let the group repeat while the leader changes one sound.",sr:"Pljesak, tapkanje po kolenima, pljesak; grupa ponavlja dok vođa ne promeni jedan zvuk."},
  "What Changed": {en:"Everyone raises their right hand. While the observer turns away, one player lowers theirs; the observer guesses what changed.",sr:"Svi podignu desnu ruku. Dok se posmatrač okrene, jedan igrač je spusti; posmatrač pogađa šta je drugačije."},
  "Paper Puppet Show": {en:"A hedgehog gets lost on the way to the garden, and a bird shows familiar clues that lead home.",sr:"Jež se izgubio na putu do bašte, a ptica mu pokazuje prepoznatljive tragove koji vode kući."},
  "Zigzag Delivery": {en:"Walk through empty-handed in the first round. In the second, carry the teddy to the finish: left around the first cup, right around the second, then left around the third.",sr:"U prvom krugu prođi stazu praznih ruku. U drugom prenesi medu do cilja: levo oko prve čaše, desno oko druge, pa levo oko treće."},
  "One-Line Creature": {en:"Draw a bird’s outline in one stroke, add two legs and three footprints, then use a finger to show its waddle.",sr:"Nacrtajte obris ptice u jednom potezu, dodajte dve noge i tri otiska stopala, pa prstom pokažite njen gegavi hod."},
  "Museum Guide": {en:"The guide shows a wooden spoon: ‘This tool stirs food in a pot. The marks show it is used often.’ The visitor asks, ‘What do you stir with it?’",sr:"Vodič pokazuje drvenu kašiku: „Ovaj predmet meša hranu u šerpi. Po tragovima se vidi da se često koristi.“ Posetilac pita: „Šta se njome najčešće meša?“"},
  "Balance Delivery": {en:"Place a soft ball in a large spoon. Holding the spoon in one hand, walk straight from the start tape to the finish without steadying the ball.",sr:"Stavite mekanu lopticu u veću kašiku. Držeći kašiku jednom rukom, hodajte pravo od startne do ciljne trake bez pridržavanja loptice."},
  "Category Countdown": {en:"Name five animals, then try five foods before the count ends.",sr:"Navedite pet životinja, pa pokušajte da navedete pet jela pre kraja odbrojavanja."},
  "Spider Web Route": {en:"Step over low, safe lines and choose a clear route through the pretend web.",sr:"Prekoračite niske, bezbedne linije i izaberite slobodan put kroz zamišljenu mrežu."},
  "Nature Bingo": {en:"Spot a leaf, a bird and a smooth stone without picking or disturbing anything.",sr:"Uočite list, pticu i gladak kamen bez branja ili uznemiravanja prirode."},
  "Bounce and Catch": {en:"Bounce the soft ball once, clap quietly and catch it with both hands.",sr:"Jednom odbijte mekanu loptu, tiho pljesnite i uhvatite je obema rukama."},
  "Dance Traffic Lights": {en:"On green move, on yellow slow down, and on red freeze in a funny pose.",sr:"Na zeleno se krećite, na žuto usporite, a na crveno se ukočite u smešnoj pozi."},
  "Box Invention": {en:"Turn an empty box into a pretend wind machine and show what problem it solves.",sr:"Pretvorite praznu kutiju u zamišljenu mašinu za vetar i pokažite koji problem rešava."},
  "Scent Explorer": {en:"Lemon peel smells sharp to me and reminds me of lemonade; mint feels fresher and reminds me of chewing gum.",sr:"Kora limuna mi miriše oštro i podseća me na limunadu; nana mi deluje svežije i podseća me na žvaku."},
  "Symmetry Art": {en:"The adult draws the left half of a butterfly up to the center line. The child draws a wing of the same size on the right and repeats the same number of patterns in matching places.",sr:"Odrasli nacrta levu polovinu leptira do srednje linije. Dete sa desne strane nacrta krilo iste veličine i ponovi isti broj šara na odgovarajućim mestima."},
  "Jumping Numbers": {en:"The adult calls ‘four.’ The child makes one small jump beside card 4 and says ‘four’ aloud.",sr:"Odrasli kaže „četiri“. Dete jednim malim skokom staje pored kartice 4 i glasno kaže „četiri“."},
  "Twig Letters": {en:"Make the first letter of your name from fallen twigs, then add a small decoration.",sr:"Složite prvo slovo svog imena od opalih grančica, pa dodajte mali ukras."},
  "Corner Goals": {en:"Call one corner and gently roll the soft ball toward its goal marker.",sr:"Izgovorite jedan ugao i nežno otkotrljajte mekanu loptu ka oznaci gola."},
  "Sound Map": {en:"Draw a symbol where you hear each sound, then compare which came from farthest away.",sr:"Nacrtajte simbol na mestu odakle čujete zvuk, pa uporedite koji je bio najudaljeniji."},
  "Kitchen Band": {en:"The conductor gently taps a plastic bowl twice with a wooden spoon, pauses, then taps a plastic cup once. The band repeats: ‘tap-tap, pause, tap.’",sr:"Dirigent dva puta nežno kucne drvenom kašikom o plastičnu posudu, napravi pauzu, pa jednom kucne o plastičnu čašu. Bend ponovi: „ta-ta, pauza, ta“."},
  "Indoor Picnic Quest": {en:"Follow a clue to find a pretend cup, plate and picnic snack, then arrange a menu.",sr:"Pratite tragove do zamišljene čaše, tanjira i užine, pa složite meni za piknik."},
  "Build a Creature": {en:"Choose two safe objects for body parts and invent a gentle way the creature moves.",sr:"Izaberite dva bezbedna predmeta za delove tela i osmislite kako se biće nežno kreće."},
  "Captain Says": {en:"‘Captain says: touch your knees, then clap once’ — do it. ‘Raise your hands!’ — stay still because the command did not start with the captain’s words.",sr:"„Kapetan kaže: dodirni kolena pa pljesni jednom“ — uradite. „Podigni ruke!“ — ne pomerajte se, jer komanda nije počela kapetanovim rečima."},
  "Hopscotch Remix": {en:"The player hops to 1, lands with both feet on 2 and 3 and claps on 3, then hops to 4 and lands with both feet on 5 and 6.",sr:"Igrač skače na 1, staje sa obe noge na 2 i 3 i pljesne na 3, zatim skače na 4 i staje sa obe noge na 5 i 6."},
  "Leaf Shadow Trace": {en:"Place a fallen leaf on paper in a sunny spot and trace the edge of its shadow.",sr:"Stavite opali list na papir na sunčanom mestu i ocrtajte ivicu njegove senke."},
  "Mood Music Moves": {en:"Change from a calm feeling to a joyful one and invent a new movement for each.",sr:"Pređite iz mirnog u radosno raspoloženje i osmislite poseban pokret za svako."},
  "Tallest Tiny Tower": {en:"See if the tower can stand still for a slow count of five.",sr:"Proverite može li kula da stoji mirno dok polako brojite do pet."},
  "Guess My Rule": {en:"The secret rule is ‘can roll’: the ball and toy car go in one group, while the sock and bowl go in the other. The others analyze the arrangement and infer what the first group’s objects have in common.",sr:"Tajno pravilo je „može da se kotrlja“: lopta i autić idu u jednu grupu, a čarapa i činija u drugu. Ostali analiziraju raspored i zaključuju šta je zajedničko predmetima u prvoj grupi."},
  "Postcard Adventure": {en:"Add a short greeting from the place in the picture to an imaginary friend.",sr:"Dodajte kratak pozdrav sa mesta na slici za zamišljenog prijatelja."},
  "Stepping-Stone Story": {en:"Add one new sentence at every safe stepping spot until the story reaches its ending.",sr:"Dodajte po jednu rečenicu na svakom bezbednom mestu dok priča ne stigne do kraja."},
  "Wind Race": {en:"Each player gets one leaf and stands behind their own start line. On ‘go,’ gently blow it to the finish without touching it with hands.",sr:"Svako dobija po jedan list i staje iza svoje startne linije. Na „sad“ duva nežno u svoj list do cilja, bez dodirivanja rukama."},
  "Circle Keep-Away": {en:"Mia gently rolls the ball along the floor to Leo across the circle. The middle player tries to stop it with a hand before it reaches Leo.",sr:"Mila nežno kotrlja loptu po podu ka Luki preko kruga. Igrač u sredini pokušava da je zaustavi rukom pre nego što stigne do Luke."},
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
  "Pocket Narrator": {en:"The sock says, ‘I keep the traveler's feet warm.’ The spoon says, ‘I stir soup for him.’ The cup says, ‘I pour him cocoa for the road.’ The others guess each object, then invent an ending where the traveler sets off home.",sr:"Čarapa kaže: „Ja grejem putniku stopala.“ Kašika kaže: „Ja mu mešam supu.“ Čaša kaže: „Ja mu sipam kakao za put.“ Ostali pogađaju predmete, pa smišljaju završetak u kome putnik kreće kući."},
  "Rhyme Relay": {en:"Start with “day”: continue with “say–play–stay,” then begin a new rhyme with “light–night.”",sr:"Počnite sa „dan“ i nastavite „san–plan–stan“, pa novu rimu počnite sa „more–gore“."},
  "Sound Story": {en:"When the narrator says “The cat walked into the forest,” everyone meows. When an owl appears, everyone says “hoo-hoo.”",sr:"Kada pripovedač kaže „Mačka je krenula kroz šumu“, svi kažu „mijau“. Kada se pojavi sova, svi kažu „hu-hu“."},
  "Question Detective": {en:"Set a five-question limit and see if the group can solve the mystery in time.",sr:"Ograničite igru na pet pitanja i proverite može li grupa na vreme da reši misteriju."},
  "Kindness News": {en:"Headline: “Quick Help in Class.” Report: “Leo helped Mia pick up her pencils.” Ask: “What did you notice?”",sr:"Naslov: „Brza pomoć u učionici.“ Vest: „Luka je pomogao Mili da pokupi olovke.“ Pitanje: „Šta si primetio?“"},
  "Opposite Day Tale": {en:"The big bear walks forward into the forest; the next player reverses both details: the small bear walks backward home.",sr:"Veliki medved ide napred u šumu; sledeći igrač preokreće oba detalja: mali medved ide unazad kući."},
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
  "Draw the Feeling": {en:"Pick joy, sadness or calm and show it with colors and lines. A partner can guess or listen to your explanation.",sr:"Izaberite radost, tugu ili mir i prikažite ih bojama i linijama. Partner može da pogodi ili sasluša objašnjenje."},
  "Button Sorting Lab": {en:"Name each sorted group after its shared feature, such as color or number of holes.",sr:"Dajte naziv svakoj grupi prema zajedničkoj osobini, poput boje ili broja rupica."},
  "What Is Missing?": {en:"Use three to five familiar objects. Cover them, remove one, then uncover the group and guess what is missing.",sr:"Izaberite tri do pet poznatih predmeta. Pokrijte ih, sklonite jedan, pa ih otkrijte i pogodite šta nedostaje."},
  "Clue Collector": {en:"Hide a safe object in the agreed area, leave three clues, then swap roles.",sr:"Sakrijte bezbedan predmet u dogovorenom prostoru, ostavite tri traga, pa zamenite uloge."},
  "Sound Source Hunt": {en:"Make two familiar sounds from different safe spots and point to each source.",sr:"Sa dva bezbedna mesta napravite različite poznate zvuke i pokažite njihov izvor."},
  "Odd One Out": {en:"Add a second item that does not belong and accept more than one reason.",sr:"Dodajte još jedan predmet koji ne pripada grupi i prihvatite više mogućih razloga."},
  "Touch and Tell": {en:"A player feels a soft ball in the bag and says, ‘It is round, smooth and can bounce.’ The others guess before the ball is revealed.",sr:"Igrač opipa mekanu lopticu u torbi i kaže: „Okrugla je, glatka i može da odskoči.“ Ostali pogađaju pre nego što se loptica pokaže."},
  "Sequence Spotter": {en:"Arrange red and blue blocks in a row: red, blue, red, blue. Ask what comes next and why, then let the player add the next block.",sr:"Poređajte crvene i plave kocke: crvena, plava, crvena, plava. Pitajte šta sledi i zašto, pa neka igrač doda sledeću kocku."},
  "Room Scavenger List": {en:"Find one safe item matching two clues at once, such as color and shape.",sr:"Pronađite jedan bezbedan predmet koji odgovara dvama tragovima, poput boje i oblika."},
  "Secret Path Finder": {en:"Guide the seeker using only “left”, “right” and “forward”, without adding extra clues.",sr:"Vodite tragača samo rečima „levo”, „desno” i „napred”, bez dodatnih tragova."},
  "Five Things Fast": {en:"Try a new category and name five items in reverse order, starting with the last one you thought of.",sr:"Izaberite novu kategoriju i navedite pet stvari obrnutim redom, počevši od poslednje koje ste se setili."},
  "Paper Bridge Test": {en:"Place the toy at the center, then at the far edge, and notice where the bridge bends most.",sr:"Stavite igračku prvo na sredinu, pa na kraj mosta i primetite gde se najviše savija."},
  "Straw City": {en:"Give the city a park and draw a route connecting three of its buildings.",sr:"Dodajte gradu park i nacrtajte put koji povezuje tri zgrade."},
  "Marshmallow Structures": {en:"Build a wide base and a tall tower, then compare which uses more pieces.",sr:"Napravite široku osnovu i visoku kulu, pa uporedite koja koristi više delova."},
  "Bridge to the Toy": {en:"Add low paper side rails and guide the toy across without letting it slide off.",sr:"Dodajte niske bočne ograde od papira i prevedite igračku preko bez spadanja."},
  "Cardboard Telescope": {en:"Look at a toy car through the tube and describe three details, such as its color, wheels and windows. Let a partner guess the object.",sr:"Kroz cev posmatrajte autić i opišite tri detalja, poput boje, točkova i prozora. Neka partner pogodi predmet."},
  "Maze Builder": {en:"Mark a special symbol somewhere in the maze and let the toy pass it before reaching the exit.",sr:"Označite poseban simbol u lavirintu i provedite igračku pored njega pre izlaza."},
  "Balance Sculpture": {en:"Place two large foam blocks side by side, then set a third lightweight block across them. If it wobbles, widen the base.",sr:"Stavite dve velike penaste kocke jednu do druge, pa preko njih položite treću laganu kocku. Ako se klima, raširite osnovu."},
  "Tiny Shop": {en:"Give the customer three pretend coins and decide what they can buy with them.",sr:"Dajte kupcu tri zamišljena novčića i dogovorite šta može da kupi."},
  "Paper Playground": {en:"Draw a clear path between two play areas and add a sign for one simple rule.",sr:"Nacrtajte jasnu stazu između dva prostora za igru i dodajte znak sa jednim pravilom."},
  "Balloon Tap Circle": {en:"Tap the balloon once each in a repeating order, then try the pattern in reverse.",sr:"Dodirnite balon po jednom u ponavljajućem redosledu, pa probajte niz unazad."},
  "Target Ladder": {en:"Choose one distance and try a gentle underhand roll toward the target.",sr:"Izaberite jednu udaljenost i pokušajte nežno kotrljanje lopte ka meti."},
  "Roll and Follow": {en:"Roll the ball slowly along a gentle curve marked on the floor.",sr:"Polako otkotrljajte loptu duž blage krivine označene na podu."},
  "Two-Bounce Catch": {en:"Call out one or two bounces before the throw and catch after that number.",sr:"Pre bacanja recite jedan ili dva odskoka, pa uhvatite loptu nakon tog broja."},
  "Balloon Volleyball": {en:"Call a partner's name before a gentle tap so they can get ready to return it.",sr:"Izgovorite ime partnera pre blagog udarca da bi se spremio da vrati balon."},
  "Partner Pass Pattern": {en:"Mila passes to Luka, Luka to Ana, and Ana to Sara. Repeat that route, then add Sara passing back to Mila.",sr:"Mila dodaje Luki, Luka Ani, a Ana Sari. Ponovite taj redosled, pa dodajte da Sara vrati loptu Mili."},
  "Rolling Ramps": {en:"Add low paper side walls and see if the ball stays on the ramp.",sr:"Dodajte niske bočne ivice od papira i proverite da li lopta ostaje na rampi."},
  "Circle Bounce": {en:"On a clap, gently change the direction of the next pass around the circle.",sr:"Na pljesak nežno promenite smer sledećeg dodavanja u krugu."},
  "Target Story Toss": {en:"Give the story one shared hero and let every hit offer that hero a choice.",sr:"Izaberite zajedničkog junaka, pa neka mu svaki pogodak ponudi izbor."},
  "Leaf Line-Up": {en:"Arrange four fallen leaves from smallest to largest. Explain your order, then rearrange them from lightest to darkest.",sr:"Poređajte četiri opala lista od najmanjeg do najvećeg. Objasnite redosled, pa ih zatim poređajte od najsvetlijeg do najtamnijeg."},
  "Nature Number Hunt": {en:"Find two separate safe groups that add up to the called number.",sr:"Pronađite dve odvojene bezbedne grupe čiji je zbir izgovoreni broj."},
  "Stick Shadow Shapes": {en:"Trace the outline of one shadow shape on paper, if a safe drawing surface is available.",sr:"Ocrtajte oblik jedne senke na papiru ako imate bezbednu podlogu za crtanje."},
  "Bird Sound Pause": {en:"One player makes a soft bird call and the others answer with a gentle echo.",sr:"Jedan igrač tiho oponaša pticu, a ostali mu odgovore blagim odjekom."},
  "Nature Color Wheel": {en:"Arrange fallen items in a light-to-dark color gradient.",sr:"Poređajte otpale predmete tako da boje idu od svetlih ka tamnim."},
  "Windy Ribbon Watch": {en:"Copy the ribbon's path with one slow hand movement, then predict its next turn.",sr:"Oponašajte putanju trake jednim sporim pokretom ruke, pa pogodite sledeći zaokret."},
  "Mini Habitat": {en:"Add a doorway and a safe path from the pretend home to a nearby water spot.",sr:"Dodajte vrata i bezbednu stazu od zamišljenog doma do obližnje vode."},
  "Cloud Shape Chain": {en:"Choose one cloud shape and have each player add one sentence to its journey.",sr:"Izaberite oblik jednog oblaka, pa neka svako doda po jednu rečenicu o njegovom putovanju."},
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
  "Time-Travel Guide": {en:"Visit a village before electricity and ask how homes were lit, or a future city where buses fly between buildings and ask how they know where to land.",sr:"Posetite selo pre struje i pitajte kako su osvetljavali kuće ili grad budućnosti u kome autobusi lete između zgrada i pitajte kako znaju gde da slete."},
  "Tiny Theatre": {en:"Perform the same short scene once with words and once without speaking.",sr:"Odglumite istu kratku scenu jednom rečima, a zatim bez govora."},
  "Quiet Cloud Count": {en:"Silently count the clouds you see, then compare totals without rushing.",sr:"U sebi prebrojte oblake koje vidite, pa polako uporedite broj."},
  "Feather Focus": {en:"Guess where the feather will land, then see how close your guess was.",sr:"Pogodite gde će pero pasti, pa proverite koliko je procena bila blizu."},
  "Breathing Shapes": {en:"Switch from tracing a square to a circle after a few comfortable breaths; do not hold your breath.",sr:"Posle nekoliko prijatnih udaha pređite sa kvadrata na krug; nemojte zadržavati dah."},
  "Silent Sorting": {en:"After sorting once, invent a different rule and regroup the same safe objects.",sr:"Posle prvog razvrstavanja smislite drugo pravilo i ponovo složite iste bezbedne predmete."},
  "Calm Color Search": {en:"Arrange the five same-color objects from lightest to darkest.",sr:"Poređajte pet predmeta iste boje od najsvetlijeg do najtamnijeg."},
  "Listening Minute": {en:"After listening, point toward the farthest sound you noticed.",sr:"Posle slušanja pokažite u smeru najudaljenijeg zvuka koji ste primetili."},
  "Tense and Relax": {en:"Add a gentle shoulder stretch between each tense-and-relax round.",sr:"Između krugova stezanja i opuštanja nežno istegnite ramena."},
  "Quiet Pattern Tiles": {en:"Hide one item from the pattern and let a partner identify the missing spot.",sr:"Sakrijte jedan predmet iz niza i neka partner otkrije koje mesto nedostaje."},
  "Gratitude Garden": {en:"Add a pattern to one petal on each flower that reminds you of the good moment.",sr:"Dodajte šaru na jednu laticu svakog cveta koja vas podseća na lepi trenutak."}
};

function openGameDetail(id){
  const game=games.find(g=>g.id===id);if(!game)return;state.selectedGame=id;
  if($("#gamePage").hidden){state.gameReturnScreen={landing:!$("#landing").hidden,explore:!$("#explorePage").hidden,question:!$("#questionCard").hidden,results:!$("#results").hidden,step:state.step}}
  $("#landing").hidden=true;$("#explorePage").hidden=true;$("#questionCard").hidden=true;$("#progress").hidden=true;$("#results").hidden=true;$("#appTopbar").hidden=true;$("#appFooter").hidden=true;$(".main-nav").hidden=true;$("#gamePage").hidden=false;
  const [title,description]=localized(game), liked=state.likes.includes(id);
  const specific=gameDetailOverrides[game.title]?.[state.language];
  const feedback=game.feedback?.[state.language];
  const numberedImage=hasNumberedGameImage(game.image),wideImage=numberedImage&&game.srTitle.length>20&&![21,100,102].includes(game.id);
  $("#detailImage").src=game.image;$("#detailImage").alt=t().image(title);$("#detailImage").classList.toggle("game-detail-image-uploaded",hasUploadedGameImage(game.image));$("#detailImage").classList.toggle("game-detail-image-numbered",numberedImage);$("#detailImage").classList.toggle("game-detail-image-numbered-wide",wideImage);$("#detailImage").classList.toggle("game-detail-image-symbol-message",game.id===102);$("#detailImage").classList.toggle("game-detail-image-animal-traffic",game.id===103);$("#detailImage").classList.toggle("game-detail-image-ecosystem",game.title==="Who Lives in This Ecosystem?");$("#detailImage").classList.toggle("game-detail-image-collage-crop-right",[2,154].includes(game.id));$("#detailTitle").textContent=title;$("#detailDescription").textContent=description;renderGameTools(game);
  $("#detailAboutTitle").textContent=t().aboutTitle;
  const skills=(game.skills||[]).slice(0,game.id===41?3:2);$("#detailSkillsSection").hidden=!skills.length;$("#detailSkillsTitle").textContent=t().skillsTitle;
  $("#detailSkillsList").innerHTML=skills.map(skill=>{const name=state.language==="sr"?skill.sr:skill.en;return `<div class="detail-skill"><span class="detail-skill-icon" aria-hidden="true">${feedbackSkillIcon(name)}</span><strong>${name}</strong></div>`}).join("");
  const preparation=feedback?.preparation||specific?.prep||preparationForGame(game,state.language);
  const needsPreparation=Boolean(preparation)&&!/^no special preparation needed\.?$/i.test(preparation.trim())&&!/^nije potrebna posebna priprema\.?$/i.test(preparation.trim());
  $("#detailPreparation").hidden=!needsPreparation;$("#detailPreparationTitle").textContent=t().prepareLabel;$("#detailPreparationCopy").textContent=preparation;
  const ageNote=localizedAgeGuidance(game,state.language);
  const showDemo=game.title==="Guess the Leader", demoCopy=t().demoSteps;
  if(detailDemoTimer){clearInterval(detailDemoTimer);detailDemoTimer=null}
  $("#detailDemo").hidden=!showDemo;$("#detailDemo").classList.remove("is-playing");
  $$(".detail-demo-step").forEach((step,index)=>step.classList.toggle("is-active",showDemo&&index===0));
  if(showDemo){$("#detailDemoTitle").textContent=t().demoTitle;demoCopy.forEach((step,index)=>{$(`#detailDemoStep${index+1}Title`).textContent=step[0];$(`#detailDemoStep${index+1}Copy`).textContent=step[1]});$("#detailDemoToggleText").textContent=t().demoPlay;$("#detailDemoToggle").querySelector("[aria-hidden='true']").textContent="▶";$("#detailDemoToggle").setAttribute("aria-pressed","false")}
  $("#detailTags").innerHTML=`<span class="tag">${game.durationLabel} ${t().min}</span><span class="tag">${t().place[game.place]}</span><span class="tag">${t().ages(game.minAge,game.maxAge)}</span>`;
  $("#detailExampleTitle").textContent=t().exampleTitle;
  const example=feedback?.example||specific?.example||gameExampleIdeas[game.title]?.[state.language];
  $("#detailExampleCard").hidden=!example;
  const bonusBase=feedback?.bonus||specific?.parent||gameBonusIdeas[game.title]?.[state.language]||"";
  $("#detailParentCard").hidden=!bonusBase;
  $("#detailGrid").hidden=!(example||bonusBase);
  $("#detailGrid").classList.toggle("has-example",Boolean(example));
  $("#detailExample").textContent=example||"";
  $("#detailParentTitle").textContent=t().parentTipTitle;
  $("#detailParent").textContent=bonusBase;
  $("#detailAgeGuidance").hidden=!ageNote;
  $("#detailAgeGuidanceTitle").textContent=t().ageGuidanceTitle;
  $("#detailAgeGuidanceCopy").textContent=ageNote||"";
  $("#gamePageBack").setAttribute("aria-label",t().closeDetails);$("#gameShareButton").setAttribute("aria-label",state.language==="sr"?"Podeli igru":"Share game");
  const saveLabel=liked?t().savedAction:t().saveAction;
  $("#detailLikeButton").innerHTML=`♥ <span class="save-label">${saveLabel}</span>`;$("#detailLikeButton").setAttribute("aria-label",saveLabel);$("#detailLikeButton").setAttribute("aria-pressed",String(liked));
  $("#detailLikeButton").classList.toggle("is-liked",liked);
}
function closeGameDetail(){
  clearGameToolTimer();
  if(detailDemoTimer){clearInterval(detailDemoTimer);detailDemoTimer=null}
  $("#detailDemo").classList.remove("is-playing");$("#gamePage").hidden=true;$("#appTopbar").hidden=false;$("#appFooter").hidden=false;$(".main-nav").hidden=false;
  const previous=state.gameReturnScreen;state.gameReturnScreen=null;
  if(previous?.explore)renderExplore();else if(previous?.question)showFilters(previous.step);else if(previous?.results)renderResults();else showLanding();
}
function setView(view){
  state.view=view; $("#appTopbar").classList.toggle("is-nav-page",["explore","popular","saved"].includes(view)); $$(".nav-button").forEach(b=>b.classList.toggle("is-active",b.dataset.view===view));
  if(view==="explore")renderExplore();else if(view==="recommended"&&!state.answers.age){showFilters(0)}else renderResults();
}
function requireProfile(){if(state.profile)return true;$("#profileDialog").showModal();return false}
function showToast(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("is-visible");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("is-visible"),2600)}
function toggleLike(id){if(!requireProfile())return;const liked=state.likes.includes(id);if(!liked){state.saveCounts[id]=(Number(state.saveCounts[id])||0)+1;localStorage.setItem("playPicksSaveCounts",JSON.stringify(state.saveCounts))}state.likes=liked?state.likes.filter(x=>x!==id):[...state.likes,id];localStorage.setItem("playPicksLikes",JSON.stringify(state.likes));showToast(liked?t().unliked:t().liked);if(!$("#results").hidden)renderResults();if(!$("#gamePage").hidden)openGameDetail(id)}
function showFilters(step=state.step){state.step=step;$("#landing").hidden=true;$("#explorePage").hidden=true;$("#questionCard").hidden=false;$("#progress").hidden=false;$("#results").hidden=true;renderQuestion();scrollTo({top:0,behavior:"smooth"})}
function showLanding(){state.step=0;state.answers={};state.view="recommended";$("#appTopbar").classList.remove("is-nav-page");$("#landing").hidden=false;$("#explorePage").hidden=true;$("#questionCard").hidden=true;$("#progress").hidden=true;$("#results").hidden=true;$$('.nav-button').forEach(b=>b.classList.toggle("is-active",b.dataset.view==="recommended"));scrollTo({top:0,behavior:"smooth"})}
$("#nextButton").onclick=()=>{if(state.step<questions().length-1){state.step++;renderQuestion()}else{state.view="recommended";renderResults()}};
$("#backButton").onclick=()=>{if(state.step){state.step--;renderQuestion()}else showLanding()}; $("#homeButton").onclick=showLanding; $("#editButton").onclick=()=>showFilters(0);
$("#changeFiltersButton").onclick=()=>setView("recommended"); $$(".nav-button").forEach(b=>b.onclick=()=>b.dataset.view==="recommended"?showLanding():setView(b.dataset.view));
$("#startButton").onclick=()=>showFilters(0); $("#dailyButton").onclick=()=>openGameDetail(dailyGame().id);
$("#detailDemoToggle").onclick=()=>{const playing=$("#detailDemo").classList.toggle("is-playing"),steps=[...$$(".detail-demo-step")];if(detailDemoTimer){clearInterval(detailDemoTimer);detailDemoTimer=null}if(playing&&steps.length){let activeIndex=0;steps.forEach((step,index)=>step.classList.toggle("is-active",index===0));detailDemoTimer=setInterval(()=>{steps[activeIndex].classList.remove("is-active");activeIndex=(activeIndex+1)%steps.length;steps[activeIndex].classList.add("is-active")},1600)}else{steps.forEach(step=>step.classList.remove("is-active"))}$("#detailDemoToggle").setAttribute("aria-pressed",String(playing));$("#detailDemoToggleText").textContent=playing?t().demoPause:t().demoPlay;$("#detailDemoToggle").querySelector("[aria-hidden='true']").textContent=playing?"Ⅱ":"▶"};
$("#gamePageBack").onclick=closeGameDetail;$("#detailLikeButton").onclick=()=>toggleLike(state.selectedGame);
$("#detailToolsContent").onclick=event=>{const action=event.target.closest("[data-game-tool-action]")?.dataset.gameToolAction;if(action==="generate")generateGameTool();else if(action==="timer-toggle")toggleGameToolTimer();else if(action==="timer-reset")resetGameToolTimer()};
$("#safetyNoteButton").onclick=()=>$("#safetyDialog").showModal();$("#safetyDialogClose").onclick=()=>$("#safetyDialog").close();$("#safetyDialogDone").onclick=()=>$("#safetyDialog").close();
$("#gameShareButton").onclick=async()=>{const title=$("#detailTitle").textContent,text=$("#detailDescription").textContent;try{if(navigator.share)await navigator.share({title,text,url:location.href});else if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(`${title}\n${text}`);showToast(t().shareCopied)}else showToast(t().shareUnavailable)}catch(error){if(error.name!=="AbortError")showToast(t().shareUnavailable)}};
$$ (".language-button").forEach(b=>b.onclick=()=>{state.language=b.dataset.language;translate();if(!$("#gamePage").hidden)openGameDetail(state.selectedGame);if(!$("#explorePage").hidden)renderExplore();else if(!$("#results").hidden)renderResults();else if(!$("#questionCard").hidden)renderQuestion()});
function openProfileDialog(){$("#profileName").value=state.profile?.name||"";$("#deleteProfileButton").classList.toggle("is-visible",Boolean(state.profile));$("#profileDialog").showModal()}
$("#profileButton").onclick=openProfileDialog;
$("#feedbackLabel").textContent=t().feedbackLabel;$("#feedbackHint").textContent=t().feedbackHint;$("#feedbackButton").textContent=t().feedbackButton;
$("#feedbackButton").onclick=()=>{const message=$("#feedbackMessage").value.trim();if(!message){showToast(t().feedbackRequired);return}window.location.href=`mailto:?subject=${encodeURIComponent(t().feedbackSubject)}&body=${encodeURIComponent(message)}`};
$("#profileForm").onsubmit=e=>{if(e.submitter?.value==="cancel")return; e.preventDefault();const name=$("#profileName").value.trim();if(!name)return;state.profile={name};localStorage.setItem("playPicksProfile",JSON.stringify(state.profile));$("#profileDialog").close();translate()};
$("#deleteProfileButton").onclick=()=>{state.profile=null;state.likes=[];localStorage.removeItem("playPicksProfile");localStorage.removeItem("playPicksLikes");$("#profileDialog").close();translate();if(state.view==="saved")renderResults()};

if(games.length!==130||new Set(games.map(g=>g.title)).size!==games.length)throw new Error("Catalog must contain 130 unique games.");
translate();renderQuestion();showLanding();

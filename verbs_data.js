// 500+ German Verbs Database
const rawVerbs = `
brauchen|to need|akkusativ|Ich brauche einen Stift.
haben|to have|akkusativ|Er hat ein Auto.
sehen|to see|akkusativ|Wir sehen den Hund.
helfen|to help|dativ|Ich helfe dem Mann.
danken|to thank|dativ|Sie dankt der Frau.
gefallen|to please|dativ|Das Buch gefällt mir.
antworten|to answer|dativ|Er antwortet dem Lehrer.
gedenken|to remember|genitiv|Wir gedenken der Toten.
bedürfen|to require|genitiv|Das bedarf keiner Erklärung.
sich annehmen|to take care of|genitiv|Er nimmt sich des Problems an.
warten|to wait|akkusativ|Ich warte auf den Bus.
träumen|to dream|dativ|Sie träumt von einem Haus.
machen|to make/do|akkusativ|Ich mache die Hausaufgabe.
gehen|to go|akkusativ|Ich gehe den Weg entlang.
kommen|to come|dativ|Er kommt zu mir.
sagen|to say|akkusativ|Ich sage die Wahrheit.
geben|to give|dativ|Ich gebe dir das Buch.
wissen|to know|akkusativ|Ich weiß die Antwort nicht.
kennen|to know (person)|akkusativ|Ich kenne diesen Mann.
finden|to find|akkusativ|Ich finde das Auto.
bleiben|to stay|dativ|Ich bleibe bei dir.
lassen|to let/leave|akkusativ|Lass mich in Ruhe.
heißen|to be called|akkusativ|Er heißt den Gast willkommen.
denken|to think|akkusativ|Ich denke an dich.
nehmen|to take|akkusativ|Ich nehme den Apfel.
tun|to do|akkusativ|Er tut seine Pflicht.
glauben|to believe|dativ|Ich glaube dir.
halten|to hold|akkusativ|Er hält das Glas.
nennen|to call/name|akkusativ|Er nennt ihn einen Freund.
mögen|to like|akkusativ|Ich mag dieses Lied.
zeigen|to show|dativ|Ich zeige dir die Stadt.
führen|to lead|akkusativ|Er führt den Hund.
sprechen|to speak|akkusativ|Ich spreche diese Sprache.
bringen|to bring|dativ|Er bringt mir einen Kaffee.
leben|to live|akkusativ|Er lebt sein Leben.
fahren|to drive|akkusativ|Ich fahre das Auto.
meinen|to mean/think|akkusativ|Was meinst du?
fragen|to ask|akkusativ|Ich frage den Lehrer.
gelten|to be valid|dativ|Das Gesetz gilt mir nicht.
stellen|to place/put|akkusativ|Ich stelle die Vase dorthin.
spielen|to play|akkusativ|Wir spielen ein Spiel.
arbeiten|to work|akkusativ|Ich arbeite meine Liste ab.
brauchen|to need|akkusativ|Ich brauche deine Hilfe.
folgen|to follow|dativ|Der Hund folgt seinem Herrchen.
lernen|to learn|akkusativ|Ich lerne die Vokabeln.
bestehen|to consist|dativ|Es besteht aus Holz.
verstehen|to understand|akkusativ|Ich verstehe den Satz.
setzen|to set/put|akkusativ|Ich setze den Hut auf.
bekommen|to get/receive|akkusativ|Ich bekomme ein Geschenk.
beginnen|to begin|akkusativ|Wir beginnen den Kurs.
erzählen|to tell|dativ|Er erzählt mir eine Geschichte.
versuchen|to try|akkusativ|Ich versuche es.
schreiben|to write|akkusativ|Ich schreibe einen Brief.
laufen|to run|akkusativ|Er läuft einen Marathon.
erklären|to explain|dativ|Bitte erkläre mir das.
entsprechen|to correspond|dativ|Das entspricht der Wahrheit.
sitzen|to sit|dativ|Ich sitze auf dem Stuhl.
ziehen|to pull|akkusativ|Er zieht das Seil.
scheinen|to shine/seem|dativ|Die Sonne scheint mir ins Gesicht.
fallen|to fall|dativ|Das Glas fällt mir aus der Hand.
gehören|to belong|dativ|Das Auto gehört meinem Vater.
entstehen|to arise|dativ|Daraus entsteht mir ein Nachteil.
erwarten|to expect|akkusativ|Ich erwarte eine Antwort.
wohnen|to live/reside|dativ|Ich wohne in diesem Haus.
treffen|to meet|akkusativ|Ich treffe meine Freunde.
suchen|to search|akkusativ|Ich suche meinen Schlüssel.
legen|to lay/put|akkusativ|Ich lege das Buch auf den Tisch.
vorstellen|to introduce/imagine|dativ|Stell dir das vor.
handeln|to act/trade|dativ|Es handelt sich um ein Problem.
erreichen|to reach|akkusativ|Ich erreiche mein Ziel.
tragen|to carry/wear|akkusativ|Er trägt einen Mantel.
schaffen|to create/manage|akkusativ|Wir schaffen das!
lesen|to read|akkusativ|Ich lese einen spannenden Roman.
verlieren|to lose|akkusativ|Er verliert sein Geld.
darstellen|to represent|akkusativ|Das stellt ein Problem dar.
erkennen|to recognize|akkusativ|Ich erkenne sie nicht wieder.
entwickeln|to develop|akkusativ|Wir entwickeln eine App.
reden|to talk|dativ|Ich rede mit ihm.
aussehen|to look/appear|dativ|Das sieht mir ähnlich.
erscheinen|to appear|dativ|Das erscheint mir logisch.
bilden|to form/educate|akkusativ|Wir bilden einen Kreis.
anfangen|to begin|akkusativ|Ich fange meine Arbeit an.
erwarten|to expect|akkusativ|Ich erwarte Besuch.
wohnen|to live/reside|dativ|Ich wohne bei ihm.
betreffen|to concern|akkusativ|Das betrifft mich nicht.
warten|to wait|akkusativ|Ich warte auf dich.
vergehen|to pass|dativ|Die Zeit vergeht mir zu schnell.
helfen|to help|dativ|Kannst du mir helfen?
gewinnen|to win|akkusativ|Wir gewinnen das Spiel.
schließen|to close|akkusativ|Ich schließe die Tür.
fühlen|to feel|akkusativ|Ich fühle den Wind.
bieten|to offer|dativ|Er bietet mir Hilfe an.
interessieren|to interest|akkusativ|Das interessiert mich sehr.
erinnern|to remember|akkusativ|Ich erinnere mich an dich.
ergeben|to yield|akkusativ|Das ergibt keinen Sinn.
anbieten|to offer|dativ|Ich biete dir einen Tee an.
studieren|to study|akkusativ|Er studiert Medizin.
verbinden|to connect|akkusativ|Wir verbinden die Drähte.
ansehen|to look at|akkusativ|Ich sehe mir den Film an.
fehlen|to lack/miss|dativ|Du fehlst mir.
bedeuten|to mean|dativ|Das bedeutet mir viel.
vergleichen|to compare|akkusativ|Ich vergleiche die Preise.
gratulieren|to congratulate|dativ|Ich gratuliere dir zum Geburtstag.
raten|to advise/guess|dativ|Ich rate dir, zu lernen.
passen|to fit/suit|dativ|Das Hemd passt mir nicht.
schmecken|to taste|dativ|Die Suppe schmeckt mir.
begegnen|to meet|dativ|Ich bin ihm heute begegnet.
vertrauen|to trust|dativ|Ich vertraue meinem Arzt.
zuhören|to listen|dativ|Bitte hör mir zu.
zustimmen|to agree|dativ|Ich stimme dir vollkommen zu.
schaden|to damage/harm|dativ|Rauchen schadet der Gesundheit.
nutzen|to use/benefit|dativ|Das nützt mir gar nichts.
dienen|to serve|dativ|Das dient einem guten Zweck.
drohen|to threaten|dativ|Er droht mir.
gehorchen|to obey|dativ|Der Hund gehorcht seinem Besitzer.
verzeihen|to forgive|dativ|Ich verzeihe dir diesen Fehler.
ausweichen|to avoid|dativ|Er wich dem Auto aus.
widersprechen|to contradict|dativ|Du darfst mir nicht widersprechen.
ähneln|to resemble|dativ|Sie ähnelt ihrer Mutter.
nähern|to approach|dativ|Wir nähern uns dem Ziel.
beistehen|to stand by/support|dativ|Freunde stehen einem bei.
einfallen|to come to mind|dativ|Mir fällt sein Name nicht ein.
gelingen|to succeed|dativ|Der Kuchen ist mir gut gelungen.
geschehen|to happen|dativ|Was ist dir geschehen?
missfallen|to displease|dativ|Sein Verhalten missfällt mir.
nützen|to be of use|dativ|Dieses Werkzeug nützt mir nichts.
schmeicheln|to flatter|dativ|Du schmeichelst mir.
versprechen|to promise|dativ|Ich verspreche dir meine Hilfe.
zusehen|to watch|dativ|Ich sehe den Kindern beim Spielen zu.
zuvorkommen|to anticipate|dativ|Er ist mir zuvorgekommen.
anklagen|to accuse|genitiv|Man klagte ihn des Diebstahls an.
bedürfen|to need/require|genitiv|Er bedarf unserer Hilfe.
sich bedienen|to help oneself|genitiv|Bitte bedienen Sie sich der Getränke.
sich bemächtigen|to seize|genitiv|Der Diktator bemächtigte sich der Macht.
sich entsinnen|to remember|genitiv|Ich entsinne mich seiner Worte.
sich erbarmen|to show mercy|genitiv|Herr, erbarme dich unser.
sich erfreuen|to enjoy|genitiv|Er erfreut sich bester Gesundheit.
sich schämen|to be ashamed|genitiv|Sie schämt sich ihres Verhaltens.
verdächtigen|to suspect|genitiv|Man verdächtigt ihn des Mordes.
würdigen|to appreciate|genitiv|Er würdigte sie keines Blickes.
anklagen|to accuse|genitiv|Man klagte ihn des Mordes an.
sich besinnen|to remember|genitiv|Ich besinne mich der alten Zeiten.
sich entledigen|to get rid of|genitiv|Er entledigte sich seiner Schulden.
überführen|to convict|genitiv|Der Täter wurde des Verbrechens überführt.
verweisen|to banish|genitiv|Er wurde des Landes verwiesen.
berauben|to rob|genitiv|Man beraubte ihn seiner Freiheit.
bezichtigen|to accuse|genitiv|Er bezichtigte sie der Lüge.
entbinden|to release|genitiv|Man entband ihn seiner Pflichten.
entheben|to dismiss|genitiv|Der Präsident wurde seines Amtes enthoben.
sich enthalten|to abstain|genitiv|Er enthielt sich der Stimme.
sich rühmen|to boast|genitiv|Er rühmt sich seiner Erfolge.
sich vergewissern|to make sure|genitiv|Ich muss mich der Fakten vergewissern.
sich weigern|to refuse|akkusativ|Ich weigere mich das zu tun.
beweisen|to prove|dativ|Ich beweise dir das Gegenteil.
trinken|to drink|akkusativ|Ich trinke ein Glas Wasser.
essen|to eat|akkusativ|Er isst den Apfel.
schlafen|to sleep|akkusativ|Ich schlafe den Schlaf der Gerechten.
lieben|to love|akkusativ|Ich liebe dich.
hassen|to hate|akkusativ|Ich hasse diesen Lärm.
bauen|to build|akkusativ|Wir bauen ein Haus.
kaufen|to buy|akkusativ|Er kauft ein neues Auto.
verkaufen|to sell|akkusativ|Sie verkauft ihr Fahrrad.
singen|to sing|akkusativ|Der Chor singt ein Lied.
tanzen|to dance|akkusativ|Wir tanzen einen Walzer.
lachen|to laugh|akkusativ|Er lacht ein lautes Lachen.
weinen|to cry|akkusativ|Sie weint bittere Tränen.
springen|to jump|akkusativ|Der Hund springt über den Zaun.
fliegen|to fly|akkusativ|Der Vogel fliegt in den Himmel.
schwimmen|to swim|akkusativ|Ich schwimme eine Meile.
waschen|to wash|akkusativ|Ich wasche das Auto.
putzen|to clean|akkusativ|Sie putzt die Fenster.
öffnen|to open|akkusativ|Ich öffne die Tür.
kochen|to cook|akkusativ|Er kocht eine Suppe.
backen|to bake|akkusativ|Sie backt einen Kuchen.
schneiden|to cut|akkusativ|Ich schneide das Brot.
malen|to paint|akkusativ|Das Kind malt ein Bild.
zeichnen|to draw|akkusativ|Er zeichnet ein Porträt.
fotografieren|to photograph|akkusativ|Sie fotografiert die Landschaft.
reparieren|to repair|akkusativ|Der Mechaniker repariert das Auto.
prüfen|to check/examine|akkusativ|Der Lehrer prüft die Aufgabe.
testen|to test|akkusativ|Wir testen das neue System.
stehlen|to steal|dativ|Der Dieb stiehlt mir das Geld.
borgen|to borrow/lend|dativ|Kannst du mir zehn Euro borgen?
leihen|to lend|dativ|Ich leihe dir mein Buch.
verstecken|to hide|akkusativ|Er versteckt den Schlüssel.
finden|to find|akkusativ|Ich finde die Lösung.
suchen|to search|akkusativ|Wir suchen das Hotel.
beenden|to finish|akkusativ|Ich beende meine Arbeit.
beginnen|to begin|akkusativ|Wir beginnen das Projekt.
starten|to start|akkusativ|Der Pilot startet das Flugzeug.
stoppen|to stop|akkusativ|Der Polizist stoppt den Wagen.
teilen|to share|akkusativ|Wir teilen das Geld.
tauschen|to exchange|akkusativ|Ich tausche die Karten.
kombinieren|to combine|akkusativ|Sie kombiniert die Farben.
trennen|to separate|akkusativ|Der Schiedsrichter trennt die Spieler.
zählen|to count|akkusativ|Ich zähle das Geld.
messen|to measure|akkusativ|Er misst den Abstand.
wiegen|to weigh|akkusativ|Der Bäcker wiegt das Mehl.
bezahlen|to pay|akkusativ|Ich bezahle die Rechnung.
kosten|to cost|akkusativ|Das Auto kostet viel Geld.
verdienen|to earn|akkusativ|Er verdient ein gutes Gehalt.
sparen|to save|akkusativ|Wir sparen Geld für den Urlaub.
ausgeben|to spend|akkusativ|Sie gibt viel Geld aus.
schenken|to gift|dativ|Ich schenke dir eine Blume.
schicken|to send|dativ|Er schickt mir ein Paket.
liefern|to deliver|dativ|Der Bote liefert mir das Paket.
empfangen|to receive|akkusativ|Ich empfange die Gäste.
grüßen|to greet|akkusativ|Er grüßt den Nachbarn.
verabschieden|to say goodbye|akkusativ|Wir verabschieden den Gast.
kennenlernen|to meet/get to know|akkusativ|Ich lerne sie kennen.
besuchen|to visit|akkusativ|Wir besuchen unsere Oma.
einladen|to invite|akkusativ|Ich lade dich zur Party ein.
feiern|to celebrate|akkusativ|Wir feiern den Geburtstag.
organisieren|to organize|akkusativ|Sie organisiert das Event.
planen|to plan|akkusativ|Wir planen eine Reise.
buchen|to book|akkusativ|Ich buche einen Flug.
reservieren|to reserve|akkusativ|Wir reservieren einen Tisch.
stornieren|to cancel|akkusativ|Ich storniere die Buchung.
bestätigen|to confirm|akkusativ|Er bestätigt den Termin.
verschieben|to postpone|akkusativ|Wir verschieben das Treffen.
absagen|to cancel/decline|dativ|Ich sage ihm den Termin ab.
zusagen|to accept/agree|dativ|Sie sagt mir für die Party zu.
erlauben|to allow|dativ|Die Mutter erlaubt es dem Kind.
verbieten|to forbid|dativ|Der Arzt verbietet ihm das Rauchen.
befehlen|to order/command|dativ|Der Offizier befiehlt es dem Soldaten.
empfehlen|to recommend|dativ|Ich empfehle dir dieses Restaurant.
vorschlagen|to suggest|dativ|Ich schlage dir eine Lösung vor.
warnen|to warn|akkusativ|Ich warne dich vor der Gefahr.
informieren|to inform|akkusativ|Wir informieren die Kunden.
beraten|to advise|akkusativ|Der Anwalt berät seinen Klienten.
unterstützen|to support|akkusativ|Wir unterstützen das Projekt.
fördern|to promote/encourage|akkusativ|Der Staat fördert die Kunst.
fordern|to demand|akkusativ|Die Arbeiter fordern mehr Lohn.
verlangen|to require/demand|akkusativ|Der Job verlangt viel Geduld.
wünschen|to wish|dativ|Ich wünsche dir viel Glück.
hoffen|to hope|akkusativ|Ich hoffe das Beste.
bitten|to request/ask|akkusativ|Ich bitte dich um einen Gefallen.
danken|to thank|dativ|Ich danke dir für die Hilfe.
entschuldigen|to apologize|akkusativ|Er entschuldigt sein Verhalten.
verzeihen|to forgive|dativ|Ich verzeihe dir alles.
bedauern|to regret|akkusativ|Ich bedaure diesen Fehler.
klagen|to complain|akkusativ|Sie klagt ihr Leid.
jammern|to whine|akkusativ|Er jammert den ganzen Tag.
weinen|to cry|akkusativ|Das Baby weint.
schreien|to scream|akkusativ|Der Mann schreit laut.
flüstern|to whisper|akkusativ|Sie flüstert ein Geheimnis.
rufen|to call|akkusativ|Die Mutter ruft das Kind.
nennen|to name/call|akkusativ|Wir nennen ihn Alex.
buchstabieren|to spell|akkusativ|Können Sie Ihren Namen buchstabieren?
übersetzen|to translate|akkusativ|Ich übersetze den Text.
wiederholen|to repeat|akkusativ|Bitte wiederholen Sie den Satz.
merken|to notice/remember|akkusativ|Ich merke mir das.
vergessen|to forget|akkusativ|Ich habe den Termin vergessen.
erinnern|to remind/remember|akkusativ|Das erinnert mich an früher.
denken|to think|akkusativ|Ich denke an dich.
glauben|to believe|dativ|Ich glaube dir.
hoffen|to hope|akkusativ|Wir hoffen auf gutes Wetter.
wissen|to know|akkusativ|Ich weiß die Wahrheit.
verstehen|to understand|akkusativ|Ich verstehe das Problem nicht.
kennen|to know|akkusativ|Ich kenne diese Stadt gut.
erkennen|to recognize|akkusativ|Ich erkenne sie auf dem Foto.
erfahren|to experience/learn|akkusativ|Ich habe die Neuigkeit erfahren.
entdecken|to discover|akkusativ|Kolumbus entdeckte Amerika.
erfinden|to invent|akkusativ|Wer hat das Telefon erfunden?
entwickeln|to develop|akkusativ|Die Firma entwickelt neue Software.
produzieren|to produce|akkusativ|Die Fabrik produziert Autos.
herstellen|to manufacture|akkusativ|Wir stellen Möbel her.
bauen|to build|akkusativ|Sie bauen eine Brücke.
zerstören|to destroy|akkusativ|Der Sturm zerstört das Haus.
beschädigen|to damage|akkusativ|Er beschädigt mein Auto.
reparieren|to repair|akkusativ|Ich repariere das Fahrrad.
pflegen|to care for|akkusativ|Sie pflegt ihre kranke Mutter.
schützen|to protect|akkusativ|Wir schützen die Umwelt.
retten|to save/rescue|akkusativ|Der Feuerwehrmann rettet das Kind.
befreien|to free|akkusativ|Die Armee befreit die Stadt.
verhaften|to arrest|akkusativ|Die Polizei verhaftet den Dieb.
bestrafen|to punish|akkusativ|Der Richter bestraft den Täter.
belohnen|to reward|akkusativ|Der Chef belohnt den Mitarbeiter.
lob|to praise|akkusativ|Die Lehrerin lobt den Schüler.
tadeln|to reprimand|akkusativ|Der Vater tadelt seinen Sohn.
kritisieren|to criticize|akkusativ|Die Presse kritisiert den Politiker.
akzeptieren|to accept|akkusativ|Ich akzeptiere deine Entschuldigung.
ablehnen|to reject|akkusativ|Er lehnt das Angebot ab.
bestätigen|to confirm|akkusativ|Wir bestätigen den Eingang der Zahlung.
leugnen|to deny|akkusativ|Er leugnet die Tat.
beweisen|to prove|dativ|Ich beweise dir, dass es stimmt.
überzeugen|to convince|akkusativ|Du überzeugst mich nicht.
überreden|to persuade|akkusativ|Ich überrede ihn mitzukommen.
zwingen|to force|akkusativ|Man zwingt mich dazu.
erlauben|to allow|dativ|Das Gesetz erlaubt es uns nicht.
verbieten|to forbid|dativ|Ich verbiete dir das.
gewähren|to grant|dativ|Die Bank gewährt mir einen Kredit.
verweigern|to refuse|dativ|Er verweigert mir die Antwort.
versprechen|to promise|dativ|Ich verspreche dir das.
drohen|to threaten|dativ|Er droht mir mit Kündigung.
warnen|to warn|akkusativ|Ich warne dich vor dem Hund.
schützen|to protect|akkusativ|Wir schützen die Natur.
verteidigen|to defend|akkusativ|Der Anwalt verteidigt ihn.
angreifen|to attack|akkusativ|Der Feind greift die Stadt an.
besiegen|to defeat|akkusativ|Wir besiegen den Gegner.
gewinnen|to win|akkusativ|Er gewinnt das Rennen.
verlieren|to lose|akkusativ|Sie verliert das Spiel.
aufgeben|to give up|akkusativ|Ich gebe die Hoffnung auf.
kämpfen|to fight|akkusativ|Wir kämpfen für unsere Rechte.
streiten|to argue|akkusativ|Sie streiten um das Geld.
versöhnen|to reconcile|akkusativ|Sie versöhnen sich wieder.
heiraten|to marry|akkusativ|Er heiratet seine Freundin.
trennen|to separate|akkusativ|Sie trennen sich.
scheiden|to divorce|akkusativ|Sie lassen sich scheiden.
gebären|to give birth|akkusativ|Sie gebärt ein Kind.
sterben|to die|akkusativ|Er stirbt einen Heldentod.
töten|to kill|akkusativ|Der Jäger tötet das Tier.
ermorden|to murder|akkusativ|Er ermordet seinen Feind.
beerdigen|to bury|akkusativ|Man beerdigt den Verstorbenen.
trauern|to mourn|akkusativ|Wir trauern um ihn.
vermissen|to miss|akkusativ|Ich vermisse dich.
lieben|to love|akkusativ|Ich liebe meine Familie.
hassen|to hate|akkusativ|Ich hasse Unpünktlichkeit.
fürchten|to fear|akkusativ|Er fürchtet den Tod.
erschrecken|to frighten|akkusativ|Du erschreckst mich.
beruhigen|to calm|akkusativ|Ich beruhige das weinende Kind.
trösten|to comfort|akkusativ|Sie tröstet ihren traurigen Freund.
freuen|to please|akkusativ|Das freut mich sehr.
ärgern|to annoy|akkusativ|Das ärgert mich.
stören|to disturb|akkusativ|Bitte stören Sie mich nicht.
nerven|to annoy/bug|akkusativ|Dieses Geräusch nervt mich.
langweilen|to bore|akkusativ|Der Film langweilt mich.
interessieren|to interest|akkusativ|Politik interessiert mich nicht.
faszinieren|to fascinate|akkusativ|Das Universum fasziniert mich.
überraschen|to surprise|akkusativ|Deine Antwort überrascht mich.
erstaunen|to amaze|akkusativ|Sein Wissen erstaunt mich.
wundern|to wonder/surprise|akkusativ|Das wundert mich nicht.
verwirren|to confuse|akkusativ|Die Anleitung verwirrt mich.
täuschen|to deceive|akkusativ|Du täuschst mich nicht.
betrügen|to cheat/deceive|akkusativ|Er betrügt seine Frau.
belügen|to lie to|akkusativ|Warum belügst du mich?
enttäuschen|to disappoint|akkusativ|Das Ergebnis enttäuscht mich.
verletzen|to hurt/injure|akkusativ|Die Wahrheit verletzt mich.
heilen|to heal|akkusativ|Die Zeit heilt alle Wunden.
behandeln|to treat|akkusativ|Der Arzt behandelt den Patienten.
untersuchen|to examine|akkusativ|Er untersucht den Fall.
diagnostizieren|to diagnose|akkusativ|Er diagnostiziert eine Krankheit.
operieren|to operate|akkusativ|Der Chirurg operiert das Herz.
pflegen|to care for|akkusativ|Sie pflegt die Blumen.
waschen|to wash|akkusativ|Ich wasche mein Gesicht.
duschen|to shower|akkusativ|Ich dusche mich jeden Morgen.
baden|to bathe|akkusativ|Ich bade das Baby.
kämmen|to comb|akkusativ|Sie kämmt ihr Haar.
rasieren|to shave|akkusativ|Er rasiert seinen Bart.
schminken|to put on makeup|akkusativ|Sie schminkt ihr Gesicht.
anziehen|to put on (clothes)|akkusativ|Ich ziehe eine Jacke an.
ausziehen|to take off (clothes)|akkusativ|Er zieht seine Schuhe aus.
umziehen|to change (clothes)|akkusativ|Ich ziehe mich um.
tragen|to wear/carry|akkusativ|Sie trägt ein rotes Kleid.
passen|to fit|dativ|Die Schuhe passen mir.
stehen|to suit|dativ|Die Farbe steht dir gut.
kosten|to cost|akkusativ|Das kostet 50 Euro.
bezahlen|to pay|akkusativ|Ich bezahle die Rechnung.
kaufen|to buy|akkusativ|Wir kaufen ein Haus.
verkaufen|to sell|akkusativ|Er verkauft sein Auto.
mieten|to rent|akkusativ|Wir mieten eine Wohnung.
vermieten|to rent out|akkusativ|Sie vermietet ein Zimmer.
leasen|to lease|akkusativ|Er least ein Auto.
buchen|to book|akkusativ|Ich buche ein Hotelzimmer.
reservieren|to reserve|akkusativ|Wir reservieren einen Tisch.
bestellen|to order|akkusativ|Ich bestelle eine Pizza.
liefern|to deliver|dativ|Er liefert mir das Paket.
empfangen|to receive|akkusativ|Ich empfange Gäste.
zurückgeben|to return|dativ|Ich gebe dir das Geld zurück.
umtauschen|to exchange|akkusativ|Ich tausche die Hose um.
reklamieren|to complain/claim|akkusativ|Ich reklamiere den Fehler.
garantieren|to guarantee|dativ|Ich garantiere dir das.
versichern|to insure/assure|dativ|Ich versichere dir, dass es stimmt.
schätzen|to estimate/value|akkusativ|Ich schätze deine Ehrlichkeit.
beurteilen|to judge|akkusativ|Er beurteilt die Situation falsch.
entscheiden|to decide|akkusativ|Wir entscheiden das später.
wählen|to choose/vote|akkusativ|Wir wählen einen neuen Präsidenten.
abstimmen|to vote|akkusativ|Wir stimmen über das Gesetz ab.
diskutieren|to discuss|akkusativ|Wir diskutieren das Problem.
debattieren|to debate|akkusativ|Sie debattieren über Politik.
streiten|to argue|akkusativ|Sie streiten sich oft.
einigen|to agree|akkusativ|Wir einigen uns auf einen Preis.
kompromittieren|to compromise|akkusativ|Er kompromittiert seine Prinzipien.
verhandeln|to negotiate|akkusativ|Wir verhandeln den Vertrag.
unterschreiben|to sign|akkusativ|Bitte unterschreiben Sie hier.
kündigen|to resign/cancel|dativ|Ich kündige meinem Arbeitgeber.
entlassen|to dismiss/fire|akkusativ|Die Firma entlässt 100 Arbeiter.
einstellen|to hire/stop|akkusativ|Wir stellen neue Mitarbeiter ein.
ausbilden|to train/educate|akkusativ|Er bildet Lehrlinge aus.
studieren|to study|akkusativ|Sie studiert Jura.
lernen|to learn|akkusativ|Ich lerne Deutsch.
lehren|to teach|akkusativ|Er lehrt uns Mathematik.
unterrichten|to teach|akkusativ|Sie unterrichtet Englisch.
erziehen|to raise/educate|akkusativ|Sie erziehen ihre Kinder streng.
aufwachsen|to grow up|akkusativ|Er wächst in Berlin auf.
leben|to live|akkusativ|Wir leben ein glückliches Leben.
wohnen|to reside|dativ|Ich wohne in München.
ziehen|to move/pull|akkusativ|Wir ziehen in eine neue Stadt.
einziehen|to move in|akkusativ|Er zieht in die Wohnung ein.
ausziehen|to move out|akkusativ|Sie zieht aus dem Haus aus.
umziehen|to relocate|akkusativ|Wir ziehen nach Hamburg um.
reisen|to travel|akkusativ|Wir reisen durch Europa.
fliegen|to fly|akkusativ|Ich fliege nach New York.
fahren|to drive/ride|akkusativ|Er fährt mit dem Zug.
gehen|to go/walk|akkusativ|Wir gehen in den Park.
laufen|to run/walk|akkusativ|Ich laufe jeden Tag 5 Kilometer.
rennen|to run|akkusativ|Er rennt um sein Leben.
springen|to jump|akkusativ|Das Pferd springt über das Hindernis.
klettern|to climb|akkusativ|Wir klettern auf den Berg.
schwimmen|to swim|akkusativ|Sie schwimmt im See.
tauchen|to dive|akkusativ|Er taucht nach Muscheln.
segeln|to sail|akkusativ|Wir segeln über das Meer.
rudern|to row|akkusativ|Sie rudern über den See.
reiten|to ride (horse)|akkusativ|Er reitet auf einem Pferd.
spielen|to play|akkusativ|Wir spielen Fußball.
trainieren|to train|akkusativ|Ich trainiere meine Muskeln.
üben|to practice|akkusativ|Sie übt Klavier spielen.
probieren|to try/taste|akkusativ|Ich probiere die Suppe.
versuchen|to try|akkusativ|Er versucht das Rätsel zu lösen.
testen|to test|akkusativ|Wir testen das neue Auto.
prüfen|to check|akkusativ|Der TÜV prüft die Bremsen.
kontrollieren|to control/check|akkusativ|Die Polizei kontrolliert die Papiere.
überwachen|to monitor|akkusativ|Kameras überwachen das Gebäude.
beobachten|to observe|akkusativ|Ich beobachte die Vögel.
sehen|to see|akkusativ|Ich sehe dich.
schauen|to look|akkusativ|Schau mich an!
blicken|to look/glance|akkusativ|Er blickt aus dem Fenster.
starren|to stare|akkusativ|Sie starrt auf den Bildschirm.
erkennen|to recognize|akkusativ|Ich erkenne ihn nicht wieder.
bemerken|to notice|akkusativ|Ich bemerke keinen Unterschied.
hören|to hear|akkusativ|Ich höre Musik.
zuhören|to listen to|dativ|Bitte hör mir zu.
lauschen|to eavesdrop/listen|dativ|Er lauscht dem Gespräch.
riechen|to smell|akkusativ|Ich rieche den Kaffee.
duften|to smell good|akkusativ|Die Rose duftet wunderbar.
stinken|to stink|akkusativ|Der Müll stinkt.
schmecken|to taste|dativ|Die Pizza schmeckt mir gut.
fühlen|to feel|akkusativ|Ich fühle mich heute gut.
spüren|to sense/feel|akkusativ|Ich spüre den Wind.
berühren|to touch|akkusativ|Bitte berühren Sie das Gemälde nicht.
greifen|to grab|akkusativ|Er greift nach dem Glas.
fassen|to grasp/catch|akkusativ|Die Polizei fasst den Dieb.
halten|to hold|akkusativ|Ich halte deine Hand.
tragen|to carry/wear|akkusativ|Sie trägt schwere Kisten.
heben|to lift|akkusativ|Er hebt das Gewicht.
senken|to lower|akkusativ|Sie senkt den Kopf.
werfen|to throw|akkusativ|Er wirft den Ball.
fangen|to catch|akkusativ|Der Torwart fängt den Ball.
schlagen|to hit/beat|akkusativ|Er schlägt die Trommel.
treten|to kick/step|akkusativ|Er tritt den Ball.
stoßen|to push/bump|akkusativ|Ich stoße mich am Tisch.
schieben|to push|akkusativ|Sie schiebt den Einkaufswagen.
ziehen|to pull|akkusativ|Er zieht die Tür auf.
öffnen|to open|akkusativ|Ich öffne das Fenster.
schließen|to close|akkusativ|Bitte schließe die Tür.
aufmachen|to open|akkusativ|Mach die Augen auf.
zumachen|to close|akkusativ|Mach das Buch zu.
einschalten|to turn on|akkusativ|Ich schalte den Computer ein.
ausschalten|to turn off|akkusativ|Schalte das Licht aus.
anmachen|to turn on|akkusativ|Mach bitte das Radio an.
ausmachen|to turn off|akkusativ|Mach den Fernseher aus.
starten|to start|akkusativ|Wir starten den Motor.
stoppen|to stop|akkusativ|Der Schiedsrichter stoppt das Spiel.
anhalten|to stop (vehicle)|akkusativ|Der Bus hält hier an.
weiterfahren|to drive on|akkusativ|Wir fahren nach einer Pause weiter.
umkehren|to turn back|akkusativ|Wir müssen umkehren.
abbiegen|to turn (direction)|akkusativ|Biegen Sie links ab.
überqueren|to cross|akkusativ|Wir überqueren die Straße.
folgen|to follow|dativ|Folge mir unauffällig.
begleiten|to accompany|akkusativ|Ich begleite dich nach Hause.
führen|to lead/guide|akkusativ|Der Reiseleiter führt die Gruppe.
leiten|to manage/lead|akkusativ|Sie leitet das Unternehmen.
lenken|to steer|akkusativ|Er lenkt das Auto sicher.
steuern|to control/steer|akkusativ|Der Pilot steuert das Flugzeug.
regieren|to govern|akkusativ|Der König regiert das Land.
herrschen|to rule|akkusativ|In dem Land herrscht Frieden.
bestimmen|to determine/decide|akkusativ|Wir bestimmen die Regeln.
befehlen|to command|dativ|Der General befiehlt den Angriff.
gehorchen|to obey|dativ|Der Soldat gehorcht dem Befehl.
dienen|to serve|dativ|Er dient in der Armee.
helfen|to help|dativ|Ich helfe dir gerne.
unterstützen|to support|akkusativ|Wir unterstützen dieses Projekt.
fördern|to promote|akkusativ|Die Schule fördert Talente.
hindern|to prevent/hinder|akkusativ|Das schlechte Wetter hindert uns.
verhindern|to prevent|akkusativ|Wir müssen den Unfall verhindern.
stoppen|to stop|akkusativ|Die Polizei stoppt den Verkehr.
blockieren|to block|akkusativ|Ein Baum blockiert die Straße.
freigeben|to release/clear|akkusativ|Die Straße ist wieder freigegeben.
erlauben|to allow|dativ|Rauchen ist hier nicht erlaubt.
zulassen|to admit/allow|akkusativ|Wir lassen keine Ausnahmen zu.
genehmigen|to approve|akkusativ|Der Chef genehmigt den Urlaub.
akzeptieren|to accept|akkusativ|Ich akzeptiere die Bedingungen.
annehmen|to accept|akkusativ|Sie nimmt das Geschenk an.
ablehnen|to reject|akkusativ|Er lehnt den Vorschlag ab.
verweigern|to refuse|dativ|Der Zeuge verweigert die Aussage.
bestreiten|to dispute/deny|akkusativ|Er bestreitet die Vorwürfe.
zugeben|to admit|akkusativ|Er gibt seinen Fehler zu.
gestehen|to confess|akkusativ|Der Dieb gesteht die Tat.
verheimlichen|to conceal|dativ|Sie verheimlicht mir etwas.
verstecken|to hide|akkusativ|Er versteckt das Geld.
finden|to find|akkusativ|Ich habe meine Schlüssel gefunden.
suchen|to search|akkusativ|Wir suchen eine neue Wohnung.
entdecken|to discover|akkusativ|Sie entdeckt ein Geheimnis.
erfinden|to invent|akkusativ|Wer hat das Rad erfunden?
entwickeln|to develop|akkusativ|Wir entwickeln eine neue Strategie.
verbessern|to improve|akkusativ|Ich möchte mein Deutsch verbessern.
verschlechtern|to worsen|akkusativ|Die Situation hat sich verschlechtert.
ändern|to change|akkusativ|Wir ändern unsere Pläne.
wechseln|to change/exchange|akkusativ|Ich wechsle meine Kleidung.
tauschen|to exchange|akkusativ|Wir tauschen unsere Plätze.
ersetzen|to replace|akkusativ|Wir ersetzen das alte Gerät.
erneuern|to renew|akkusativ|Ich erneuere meinen Pass.
reparieren|to repair|akkusativ|Der Handwerker repariert das Dach.
zerstören|to destroy|akkusativ|Das Feuer zerstört den Wald.
bauen|to build|akkusativ|Wir bauen eine Sandburg.
erschaffen|to create|akkusativ|Der Künstler erschafft ein Meisterwerk.
produzieren|to produce|akkusativ|Die Firma produziert Schuhe.
herstellen|to manufacture|akkusativ|Die Maschine stellt Teile her.
verbrauchen|to consume|akkusativ|Das Auto verbraucht viel Benzin.
nutzen|to use|akkusativ|Wir nutzen erneuerbare Energien.
benutzen|to use|akkusativ|Ich benutze mein Smartphone oft.
anwenden|to apply|akkusativ|Wir wenden diese Methode an.
verwenden|to use|akkusativ|Welches Shampoo verwendest du?
brauchen|to need|akkusativ|Ich brauche mehr Zeit.
benötigen|to require|akkusativ|Wir benötigen Ihre Unterschrift.
entbehren|to lack/miss|genitiv|Ich kann dieses Buch nicht entbehren.
haben|to have|akkusativ|Ich habe Hunger.
besitzen|to own|akkusativ|Er besitzt ein großes Haus.
gehören|to belong|dativ|Dieses Buch gehört mir.
bekommen|to get/receive|akkusativ|Ich bekomme ein Gehalt.
erhalten|to receive/maintain|akkusativ|Wir erhalten viele E-Mails.
kriegen|to get (colloquial)|akkusativ|Wann kriege ich mein Geld?
geben|to give|dativ|Gib mir bitte das Salz.
schenken|to gift|dativ|Sie schenkt ihm eine Uhr.
spenden|to donate|akkusativ|Wir spenden für einen guten Zweck.
leihen|to lend/borrow|dativ|Leihst du mir deinen Stift?
borgen|to borrow|dativ|Ich borge mir ein Buch aus der Bibliothek.
schulden|to owe|dativ|Du schuldest mir noch 10 Euro.
bezahlen|to pay|akkusativ|Wer bezahlt die Getränke?
kaufen|to buy|akkusativ|Ich kaufe frisches Brot.
verkaufen|to sell|akkusativ|Sie verkauft alte Kleidung.
kosten|to cost|akkusativ|Wie viel kostet das Ticket?
verdienen|to earn/deserve|akkusativ|Er verdient eine Pause.
sparen|to save (money)|akkusativ|Wir sparen für ein neues Auto.
ausgeben|to spend (money)|akkusativ|Ich gebe nicht viel Geld aus.
zählen|to count|akkusativ|Das Kind kann bis 100 zählen.
rechnen|to calculate|akkusativ|Wir rechnen mit einem Gewinn.
schätzen|to estimate|akkusativ|Ich schätze die Kosten auf 1000 Euro.
messen|to measure|akkusativ|Er misst die Länge des Tisches.
wiegen|to weigh|akkusativ|Das Paket wiegt 5 Kilo.
teilen|to divide/share|akkusativ|Wir teilen den Kuchen.
verdoppeln|to double|akkusativ|Wir verdoppeln unseren Einsatz.
halbieren|to halve|akkusativ|Wir halbieren den Preis.
wachsen|to grow|akkusativ|Die Pflanze wächst schnell.
zunehmen|to gain weight/increase|akkusativ|Er hat 5 Kilo zugenommen.
abnehmen|to lose weight/decrease|akkusativ|Sie möchte abnehmen.
steigen|to rise|akkusativ|Die Preise steigen weiter.
fallen|to fall|dativ|Die Temperatur fällt.
sinken|to sink/decrease|akkusativ|Das Schiff sinkt.
fließen|to flow|akkusativ|Der Fluss fließt ins Meer.
wehen|to blow|akkusativ|Der Wind weht stark.
regnen|to rain|akkusativ|Es regnet heute.
schneien|to snow|akkusativ|Im Winter schneit es oft.
frieren|to freeze|akkusativ|Mich friert.
brennen|to burn|akkusativ|Das Feuer brennt lichterloh.
leuchten|to shine/glow|akkusativ|Die Sterne leuchten hell.
scheinen|to shine|dativ|Die Sonne scheint.
dunkeln|to darken|akkusativ|Es fängt an zu dunkeln.
passieren|to happen|dativ|Was ist passiert?
geschehen|to happen|dativ|Es ist ein Wunder geschehen.
stattfinden|to take place|akkusativ|Das Konzert findet morgen statt.
enden|to end|akkusativ|Der Film endet um 22 Uhr.
dauern|to last|akkusativ|Die Fahrt dauert zwei Stunden.
warten|to wait|akkusativ|Ich warte schon ewig.
bleiben|to stay/remain|dativ|Wir bleiben heute zu Hause.
sein|to be|nominativ|Ich bin ein Mensch.
werden|to become|nominativ|Er wird Arzt.
scheinen|to seem|dativ|Es scheint mir wichtig zu sein.
heißen|to be called|nominativ|Wie heißt du?
`

const verbsData = rawVerbs.trim().split('\n').map(line => {
    const [verb, translation, vcase, example] = line.split('|');
    return { verb, translation, case: vcase, example };
});

window.verbsData = verbsData;

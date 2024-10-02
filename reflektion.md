# Reflektioner kring kodkvalitet

## Namngivning (reflektioner utifrån kapitel 2)

| Namn & förklaring  | Reflektioner utifrån Clean code-regler  |
|-----------|-----------|
| **PhotoAssistant** - klassnamn på huvudklassen | Enligt **Class names**-regeln så ska klassnamn bestå av ett substantiv och verb ska undvikas, denna regel uppfylls men hade klassen istället hetat **PhotoAssistance** så hade den brutit mot regeln. Jag tolkar det även som att namnet uppfyller regeln **Add Meaningful Context** då klassnamnet ger en kontext (att detta är ett library som assisterar med foton) |
| **addImage** - metod för att lägga till bilder för bildhantering | Utifrån reglerna **Add Meaningful Context** och **Don't Add Gratuitous Text** så är **image** i **addImage** kanske överflödig, klassnamnet heter trots allt **PhotoAssistant** så att det är bilder som ska läggas till, filtreras, sorteras osv. är redan tydligt av själva kontexten |
| **startPhotoFilter** - metod för att instantiera PhotoFilter() | Denna namngivning följer bl.a. reglerna **Use Searchable Names** och **Use Pronounceable Names** - den är lätt att söka upp (då det inte är ett namn som består av bara en bokstav) och den är även lätt att uttala - men jag skulle säga att den inte är tillräckligt tydlig i sin intention (**Use Intention-Revealing Names**) - vad innebär det att starta photoFilter? Är det då filter läggs på bilden? En bättre namngivning hade varit t.ex. **instantiatePhotoFilter**, då hade det inte lett till några frågetecken om vad metoden ämnar att göra |
| **sortPhotos** - metod för att sortera bilder i alfabetisk ordning | Denna namngivning skulle jag säga delvis uppfyller regeln **Use Intention-Revealing Names** då den avslöjar att metoden har som funktion att sortera bilder (vilket gör att den även uppfyller regeln **Use Problem Domain Names**), däremot avslöjer den inget om **hur** bilderna sorteras. Hade den istället hetat **sortPhotosByAlphabet** så hade intentionen blivit tydligare, ett namn som jag faktiskt använder i privata metoder i modulen (när det publika interfacet "delegerat" vidare sorteringsuppdraget till **photoSort** klassen) vilket jag tänker bryter mot regeln **Pick One Word per Concept** (då jag inte håller en enhetlighet genom hela modulen med namngivning av metoder som sköter snarlika uppgifter) |
| **drawPhotosToCanvas** - metod för att skapa canvas element & rendera redigerad bild på canvaset | Enligt **Use Problem Domain Names**-regeln så hade ett namn såsom t.ex. **developPhoto** kanske ännu bättre uppfyllt regeln då nuvarande namn utgår mer från ett tekniskt "HTML språk" (dvs syftar på HTML elementet canvas, visserligen med domänanknytning) än ett rent domänspråk. Även om namnet också har inslag av domänspråk med **photo** och **draw** så blir det inte lika tydligt utifrån domänen som **developPhoto**, enligt min mening, däremot så riktar sig libraries till andra utvecklare vilket jag tycker motiverar att använda mer "tekniskt inriktade" språk vilket istället uppfyller regeln **Use Solution Domain Names** (som rekommenderas i första hand, enligt Clean code principerna, där det är möjligt). Originalnamnet uppfyller även regeln **Use Intention-Revealing Names** då metoden har för intention att måla en bild på ett canvas element |

## Funktioner (reflektioner utifrån kapitel 3)

| Metodnamn (se kod under nästa rubrik)  | Antal rader  | Reflektioner utifrån Clean code-regler  |
|-----------|-----------|-----------|
| **singleFilterPhotoManager** | 25 | Funktionen följer trots sin längd, enligt min mening, regeln **Do One Thing** - den delegerar till rätt filtermetod utifrån vilken filtermetod som skickas med som argument och den följer även **One Level of Abstraction per Function** - den avslöjar inget om **hur** filtreringen går till, den delegerar bara vidare uppgiften till de respektive privata funktioner som innehåller och ansvarar för filtreringslogiken. Robert C. Martin skulle dock säkerligen argumentera mot mig där då han i regeln **Switch Statements** uttrycker att de gör fler än en sak och att de helst ska döljas i abstraktioner eller undvikas helt. Jag kan delvis hålla med honom i att det finns risker med switch statements då de ofta växer med tiden (även i min modul, t.ex. om fler filtreringsmetoder läggs till i framtiden), vilket lätt skulle kunna göra funktionen för stor tillslut vilket bryter mot regeln **Small** - att hålla funktioner små |
| **createGridGallery** | 14 | Denna funktion skulle dock kunna brytas ned i ännu mindre funktioner då jag skulle säga att den gör mer än en sak, vilket bryter mot **Do One Thing**-regeln. Den **skapar** nya HTML-element, sätter **style** på elementen och **appendar** dem till ett HTML element i DOMen. Den följer regeln **Use Descriptive Names** då funktionsnamnet förklarar precis vad funktionen gör - den skapar en grid gallery - vilket gör att kodkommentarer blir överflödiga, koden talar för sig själv! |
| **displayPhotosInGallery** | 11 | Funktionen följer regeln **Function Arguments**, om än på gränsen, då den innehåller två parametrar (är **dyadic**) där idealet är en funktion med noll parametrar (**niladic**) och tredjehandsvalet är att tillåta funktionen två parametrar - jag håller med om att parametrar i funktioner försvårar testning, vilket Robert C. Martin argumenterar, då det innebär fler möjliga kombinationer som behöver testas. Då en av parametrarna i denna funktion dessutom är ett HTML img element så innebär det ytterligare ett svårighetslager testningsmässigt (när vi talar om automatisk testning) då det dessutom kräver mockningstester. Med utgångspunkt i Robert C. Martins argument kring **Common Monadic Forms** vs **Dyadic Functions** så skulle jag i detta fall refaktorera funktionen så att den endast tar parametern **galleryContainer** (HTML elementet som grid gallery ska appendas till) då det är ett vanligt användningsfall vid just **monodiac forms** och exempelvis bryta ut **columns** parametern till ett privat fält istället. Funktionen skulle då även ännu bättre uppfylla **Function Argument**-regeln |
| **applyFilter** | 10 | Utifrån regeln **Error Handling Is One Thing** så hade kodkvaliteten ökat ytterligare av att jag bröt ut errorhanteringen i denna funktion (och i de flesta funktioner i detta library) till egna, separata errorhanteringsfunktioner. Däremot så uppfylls regeln **Prefer Exceptions to Returning Error Codes** vilket förenklar errorhantering då hanteringen av undantag kan ske separat från "happy flow kod", enligt Robert C. Martin, genom att som tidigare nämnts exempelvis fångas upp i en separat errorhanteringsfunktion |
| **runPhotoCanvasCreator** | 10 | Precis som tidigare funktion så bryter även denna funktion mot **Error Handling is One Thing** och genom att ha errorhantering inom enskilda funktioner på detta sätt så bryter det även mot **Don't Repeat Yourself**. Att centralisera errorhanteringen skulle med andra ord förbättra kodkvaliteten även utifrån denna princip som, enligt Robert C. Martin, är en av de viktigaste kodkvalitetsprinciperna av alla (en enkel princip att följa i teorin, men en fallgrop som ändå är lätt att falla in i, väl i praktiken) |

### Kod

```javascript
#singleFilterPhotoManager () {
    switch (this.#filterMethod.toLowerCase()) {
      case 'brightness':
        this.#updateBrightness()
        break
      case 'saturate':
        this.#updateSaturation()
        break
      case 'opacity':
        this.#updateOpacity()
        break
      case 'sepia':
        this.#addSepia()
        break
      case 'contrast':
        this.#updateContrast()
        break
      case 'blur':
        this.#addBlur()
        break
      case 'grayscale':
        this.#addGrayscale()
        break
      default:
        throw new Error('Filter method invalid or not specified')
    }
  }
```

```javascript
#createGridGallery () {
    const numberOfPhotos = this.#images.length
    this.#gridRows = Math.ceil(numberOfPhotos / this.#gridColumns)

    this.#galleryContainer = document.createElement('div')
    this.#galleryContainer.class = 'gallery-container'
    this.#galleryContainer.style.display = 'grid'
    this.#galleryContainer.style.gridTemplateColumns = `repeat(${this.#gridColumns}, 1fr)`
    this.#galleryContainer.style.gridTemplateRows = `repeat(${this.#gridRows}, auto)`

    for (let i = 0; i < numberOfPhotos; i++) {
      const gridItem = document.createElement('div')
      gridItem.appendChild(this.#images[i])
      this.#galleryContainer.appendChild(gridItem)
    }
  }
```

```javascript
displayPhotosInGallery (columns, galleryContainer) {
    try {
      // Will display images in alphabetical order, if images have been sorted.
      if (this.#sortedImages.length !== 0) {
        const images = this.#sortedImages
        this.#createNewGallery(images, columns, galleryContainer)

        return
      } 

      const images = this.#images
      this.#createNewGallery(images, columns, galleryContainer)
    } catch (error) {
      console.error(error)
    }
  }
```

```javascript
#applyFilter () {
    if (this.#photoFilterInstance === null || this.#photoFilterInstance === undefined) {
      throw new Error('Photo Filter needs to be started')
    }

    if (this.#images.length !== 0) {
      this.#images.forEach((image) => {
        this.#photoFilterInstance._runApplyFilters(image)
      })
    } else {
      throw new Error('No images have been selected for editing')
    }
  }
```

```javascript
_runPhotoCanvasCreator(imageToBeDrawn, canvasId) {
    if (imageToBeDrawn === null || imageToBeDrawn === undefined || imageToBeDrawn.src.length === 0) {
      throw new Error('Invalid image')
    } if (canvasId === undefined || typeof (canvasId) !== 'string') {
      throw new Error('Invalid string')
    }

    this.#imageToBeDrawn = imageToBeDrawn

    this.#imageToBeDrawn.onload = this.#createCanvas(canvasId)
    this.#drawPhotoToCanvas()
    this.#appendCanvas()
  }
```

## Övriga reflektioner kring kapitlen och den egna kodkvaliteten

Upplever mig själv generellt sätt som mer "problemdomänorienterad" än "tekniskt lösningsdomänorienterad" när jag skriver kod, vilket gör att jag kanske lättare dras till regeln **Use Problem Domain Names** än **Use Solution Domain Names**. Kanske har det sin grund i min tidigare utbildnings- och yrkesbakgrund (socionom) där jag skolats i att hela tiden försöka möta den andres perspektiv och problem (utifrån domänen där denne befinner sig). Detta gör kanske också att jag upplever det vara mer naturligt att följa regler såsom **Use Intention-Revealing Names**, **Don't Be Cute** och **Avoid Mental Mapping** då jag blivit skolad i att kommunicera på ett för den andre lättförståeligt sätt i både tal och skrift.

Något jag upplever svårt är att jag ibland "går vilse" i min egen kod, i takt med att kodbasen växer i storlek, vilket gör att enhetligheten i namngivning genom hela kodbasen kan bli lidande. Då kan jag hamna i att t.ex. ge olika, om än snarlika, namn till funktioner, variabler osv som har liknande syften (men där det är viktigt att de går att särskilja). I modulen så har jag exempelvis inte varit tillräckligt enhetlig i namngivningen där jag ibland använt mig av **photo**, ibland **image**, ibland bara **image** som parameter, andra gånger **imageToAdd** osv. Detta är något jag behöver bli bättre på då det skulle förbättra kodkvaliteten ytterligare.

Det som Robert C. Martin poängterar i kapitel 3 (**How Do You Write Functions Like This**) är viktigt att påminna sig själv om - det är naturligt att skriva kod som bryter mot flera av kodkvalitetsreglerna i början med nästlade kontrollsatser, upprepningar osv. Känner väl igen mig i det arbetssättet som han beskriver där i att stegvis förfina koden, bryta ut den i mindre funktioner, söka efter och åtgärda onödiga upprepningar och missvisande namngivningar osv. Jag tror att det, precis som när man arbetar med "mind maps", är viktigt att först tillåta sig att "tänka/problemlösa fritt" för att få igång den där kreativa processen som det är att programmera och skriva kod för att därefter, stegvis, förbättra koden med stöd av bl.a. kodkvalitetsreglerna - annars finns det risk att istället hamna i programmerares motsvarighet till "writer's block".

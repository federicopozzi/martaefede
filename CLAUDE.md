# CLAUDE.md

Questo file fornisce indicazioni a Claude Code (claude.ai/code) per lavorare in questo repository.

## Progetto

Sito web statico per il matrimonio di Marta & Federico, online su [martaefede.it](https://martaefede.it) tramite GitHub Pages. Pagina singola senza build tooling — solo HTML, CSS e JavaScript vanilla.

## Sviluppo

Nessun passaggio di build. Aprire `index.html` direttamente nel browser.

Le dipendenze esterne sono caricate da CDN (nessuna installazione locale necessaria):
- Bootstrap 5.3.2
- Font Awesome 6.5.0

Il deploy avviene con un push su `main` — GitHub Pages pubblica automaticamente.

## Architettura

Tutto risiede in tre file:

- **index.html** — struttura completa della pagina; sezioni in ordine: hero, citazione, data, luoghi (cerimonia + ricevimento con iframe Google Maps), RSVP (link Google Forms), lista nozze (copia IBAN), footer
- **style.css** — tutti gli stili; usa variabili CSS per i due colori del brand (`#e81f71` fucsia, `#D5CDBF` beige) e tipografia fluida tramite `clamp()`
- **script.js** — codice morto: referenzia ID (`#copy-iban`, `#iban-text`) che non esistono nell'HTML. La funzione `copyIBAN()` funzionante è definita inline in `index.html`. Consolidamento in roadmap.

Asset:
- `font/` — Didot LT Std (più pesi) e GT Pressura; caricati via `@font-face` in style.css
- `img/` — fiori decorativi (`fiore1–8.png`), immagini dei luoghi, GIF hero (mobile) vs. immagine statica (desktop), icone SVG per le card dei luoghi, set favicon in `img/fav/`

## Roadmap

Il file `roadmap.md` nella root contiene la lista degli interventi di ottimizzazione pianificati. Ogni volta che viene completato uno step della roadmap, aggiornare `roadmap.md` sostituendo il titolo dello step completato con la dicitura `~~titolo~~ ✓` e aggiungendo una riga con la data di completamento, in modo da tenere traccia dello stato di avanzamento.

## Dettagli di design

- Su mobile si mostra la GIF animata hero; su desktop un'immagine statica con testo sovrapposto — controllato tramite `display` CSS tra `.gif-hero` e `.hero-desktop`
- I fiori decorativi usano `position: absolute` relativo al contenitore della sezione; modificarli con cautela per evitare layout shift
- Il bottone RSVP ha un effetto hover con sfondo scorrevole tramite pseudo-elemento `::before`
- Una sezione galleria esiste in style.css (commentata) ma non è ancora presente nell'HTML

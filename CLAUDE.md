# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Questo file fornisce indicazioni a Claude Code (claude.ai/code) per lavorare in questo repository.

## Progetto

Sito web statico per il matrimonio di Marta & Federico, online su [martaefede.it](https://martaefede.it) tramite GitHub Pages. Pagina singola senza build tooling — solo HTML, CSS e JavaScript vanilla.

## Sviluppo

Nessun passaggio di build. Aprire `index.html` direttamente nel browser.

Nessuna dipendenza esterna: Bootstrap e Font Awesome sono stati rimossi; tutti gli stili sono in `style.css`. I font sono caricati via `@font-face` da file locali in `font/`.

Il deploy avviene con un push su `main` — GitHub Pages pubblica automaticamente.

## Architettura

Tutto risiede in tre file:

- **index.html** — struttura completa della pagina; sezioni in ordine: hero, citazione, data, luoghi (cerimonia + ricevimento con iframe Google Maps), RSVP (link Google Forms), lista nozze (copia IBAN), footer
- **style.css** — tutti gli stili; usa variabili CSS per i due colori del brand (`#e81f71` fucsia, `#D5CDBF` beige) e tipografia fluida tramite `clamp()`; contiene anche i replacement delle utility Bootstrap precedentemente usate (`.container`, `.row`, `.col-6`, `.py-5`, ecc.)
- **script.js** — unica funzione `copyIBAN()`: copia l'IBAN negli appunti e mostra il messaggio di conferma tramite `#copy-message`

Asset:
- `font/` — Didot LT Std (più pesi, `.woff2`) e GT Pressura (`.woff2` + `.woff`); caricati via `@font-face` in style.css
- `video/` — `vid.mp4`: video hero mostrato su mobile a schermo intero
- `img/` — fiori decorativi (`fiore1–8.png`), immagini dei luoghi, icone SVG per le card dei luoghi, set favicon in `img/fav/`

## Roadmap

Il file `roadmap.md` nella root contiene la lista degli interventi di ottimizzazione (attualmente tutti completati). Se si aggiungono nuovi step, aggiornare `roadmap.md` sostituendo il titolo dello step completato con `~~titolo~~ ✓` e aggiungendo la data di completamento.

## Dettagli di design

- Su mobile si mostra il video hero (`./video/vid.mp4`, tag `<video autoplay muted loop playsinline>` con classe `.hero-gif`); su desktop il video è nascosto e appare il testo sovrapposto su sfondo fucsia — tutto controllato via CSS sulla classe `.hero-gif`
- I fiori decorativi usano `position: absolute` relativo al `.contenitore-immagine` (`position: relative`); modificarli con cautela per evitare layout shift. Le posizioni usano percentuali o valori relativi al bordo (`right: -35px`) anziché pixel fissi sull'asse verticale
- Il bottone RSVP ha un effetto hover con sfondo scorrevole tramite pseudo-elemento `::before`
- Una sezione galleria esiste in style.css (commentata) ma non è ancora presente nell'HTML

# Roadmap ottimizzazione — martaefede.it

Interventi ordinati per priorità. L'estetica rimane invariata.

---

## 🔴 Bug / Errori reali

### ~~1. `script.js` è codice morto~~ ✓ — 2026-05-14
`copyIBAN()` spostata in `script.js` (con gli ID corretti), blocco `<script>` inline rimosso da `index.html`.

### ~~2. `font-family: 'Didot-BOLD'` in `.data-desk`~~ ✓ — 2026-05-14
Corretto in `'Didot-bold'` in `style.css` per allinearlo alla dichiarazione `@font-face`.

### ~~3. Link esterni senza `rel="noopener noreferrer"`~~ ✓ — 2026-05-14
Aggiunto `rel="noopener noreferrer"` al link RSVP (unico `target="_blank"` presente).

### ~~4. Codice HTML commentato da rimuovere~~ ✓ — 2026-05-14
Rimossa la sezione `<section class="giallo">` commentata (duplicato della sezione data) da `index.html`.

---

## 🟠 Performance

### ~~5. GIF hero → `<video>`~~ ✓ — 2026-05-14
Sostituita la GIF con `<video autoplay muted loop playsinline>` che punta a `./video/vid.mp4`.

### ~~6. `font-display: swap` sui `@font-face`~~ ✓ — 2026-05-14
Senza questa dichiarazione il testo rimane invisibile fino al caricamento del font (FOIT). Aggiungere `font-display: swap;` a ogni blocco `@font-face`.

### ~~7. `loading="lazy"` sulle immagini~~ ✓ — 2026-05-14
Le immagini (`<img>`) non hanno `loading="lazy"`, a differenza degli iframe che ce l'hanno già. Aggiungerlo a tutti i `<img>` fuori dalla prima schermata.

### ~~8. Rimuovere Bootstrap o ridurlo drasticamente~~ ✓ — 2026-05-14
Bootstrap 5 pesa ~230 KB (minificato). Le classi effettivamente usate sono circa 15 utility (`container`, `row`, `col-6`, `py-5`, `d-none`, `d-md-block`, ecc.). Sostituire con le poche righe CSS equivalenti elimina una dipendenza CDN pesante.

### ~~9. Font Awesome per una sola icona~~ ✓ — 2026-05-14
L'intera libreria (~70 KB) è caricata per la sola icona `fa-copy`. Sostituire con un SVG inline della stessa icona.

### ~~10. `preconnect` per risorse CDN~~ ✓ — 2026-05-14
Obsoleto: Bootstrap e Font Awesome rimossi negli step 8-9. Non restano risorse CDN esterne.

### ~~11. `preload` per i font critici~~ ✓ — 2026-05-14
Aggiunti `<link rel="preload">` per `DidotLTStd-Roman.woff2` e `DidotLTStd-Bold.woff2` nel `<head>`.

### ~~12. GT Pressura: aggiungere `.woff2`~~ ✓ — 2026-05-14
Aggiunto `GT-Pressura-Regular.woff2` nel `src` prima del `.woff` in `style.css`.

---

## 🟡 Accessibilità

### ~~13. Fiori decorativi: aggiungere `aria-hidden="true"`~~ ✓ — 2026-05-14
Le immagini ornamentali hanno già `alt=""` ma i lettori di schermo le annunciano comunque come "immagine". Aggiungere `aria-hidden="true"` a tutti i `<img>` decorativi.

### ~~14. Numeri di telefono nel footer come link~~ ✓ — 2026-05-14
Su mobile questo permette di chiamare con un tap, senza cambiare nulla visivamente.

### ~~15. Icona copia IBAN: da `<i onclick>` a `<button>`~~ ✓ — 2026-05-14
SVG wrappato in `<button class="copy-icon" aria-label="Copia IBAN">`, raggiungibile da tastiera e screen reader.

### ~~16. `<meta name="description">` mancante~~ ✓ — 2026-05-14
Aggiunta description per SEO e anteprima nei messaggi condivisi.

---

## 🟢 CSS — coerenza e robustezza

### ~~17. Breakpoint incoerente: 767px vs 768px~~ ✓ — 2026-05-14
Già risolto: l'unica media query con `max-width: 768px` era la regola dei margini mobili, rimossa nello step 20.

### ~~18. `.pressura` referenzia il font sbagliato~~ ✓ — 2026-05-14
Classe non usata in nessun file HTML — eliminata da `style.css`.

### ~~19. Posizioni hardcoded dei fiori~~ ✓ — 2026-05-14
`top: 555px` → `top: 52%` su `.immagine-fiore-ricevimento`; `top: 300px; right: 300px` → `top: 30%; right: min(25%, 300px)` su `.immagine-fiore-lista`.

### ~~20. Selettore mobile troppo aggressivo~~ ✓ — 2026-05-14
Il selettore `body p, body h1, ...` con margini fissi era già assente dal CSS; confermato non presente, punto chiuso.

### ~~21. `font-size: 5vh` in `.data-desk`~~ ✓ — 2026-05-14
Sostituito con `clamp(1.5rem, 5vh, 3rem)` in `style.css`.

---

## ⚪ SEO e meta minori

### ~~22. `<title>` senza anno~~ ✓ — 2026-05-14
Aggiornato in `"Marta & Federico | 5 Settembre 2026"`.

### ~~23. Tag canonical mancante~~ ✓ — 2026-05-14
Aggiunto `<link rel="canonical" href="https://martaefede.it/">` in `index.html`.

### ~~24. `<meta charset>` va dichiarato per primo~~ ✓ — 2026-05-14
Spostato come primo elemento del `<head>`, prima dei tag Open Graph.

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

### 5. GIF hero → `<video>`
La GIF animata è probabilmente il file più pesante del sito (decine di MB). Convertirla in `.webm` / `.mp4` e usare `<video autoplay loop muted playsinline>` riduce il peso del 70–90% senza alcuna differenza visiva.

### 6. `font-display: swap` sui `@font-face`
Senza questa dichiarazione il testo rimane invisibile fino al caricamento del font (FOIT). Aggiungere `font-display: swap;` a ogni blocco `@font-face`.

### 7. `loading="lazy"` sulle immagini
Le immagini (`<img>`) non hanno `loading="lazy"`, a differenza degli iframe che ce l'hanno già. Aggiungerlo a tutti i `<img>` fuori dalla prima schermata.

### 8. Rimuovere Bootstrap o ridurlo drasticamente
Bootstrap 5 pesa ~230 KB (minificato). Le classi effettivamente usate sono circa 15 utility (`container`, `row`, `col-6`, `py-5`, `d-none`, `d-md-block`, ecc.). Sostituire con le poche righe CSS equivalenti elimina una dipendenza CDN pesante.

### 9. Font Awesome per una sola icona
L'intera libreria (~70 KB) è caricata per la sola icona `fa-copy`. Sostituire con un SVG inline della stessa icona.

### 10. `preconnect` per risorse CDN
Aggiungere nel `<head>`:
```html
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
```

### 11. `preload` per i font critici
Caricare in anticipo Didot Roman e Didot Bold (usati above the fold):
```html
<link rel="preload" href="./font/DidotLTStd-Roman.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="./font/DidotLTStd-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

### 12. GT Pressura: aggiungere `.woff2`
Il font è caricato solo in `.woff`. Aggiungere la versione `.woff2` (20–30% più leggera) e dichiararla prima nel `src`.

---

## 🟡 Accessibilità

### 13. Fiori decorativi: aggiungere `aria-hidden="true"`
Le immagini ornamentali hanno già `alt=""` ma i lettori di schermo le annunciano comunque come "immagine". Aggiungere `aria-hidden="true"` a tutti i `<img>` decorativi.

### 14. Numeri di telefono nel footer come link
```html
<a href="tel:+393453249733">3453249733</a>
```
Su mobile questo permette di chiamare con un tap, senza cambiare nulla visivamente.

### 15. Icona copia IBAN: da `<i onclick>` a `<button>`
Un `<i>` con `onclick` non è raggiungibile da tastiera né annunciato dagli screen reader. Sostituire con:
```html
<button class="copy-icon" onclick="copyIBAN()" aria-label="Copia IBAN">
  <!-- SVG icona -->
</button>
```

### 16. `<meta name="description">` mancante
Aggiungere una description per SEO e per l'anteprima nei messaggi condivisi (oltre all'OG già presente).

---

## 🟢 CSS — coerenza e robustezza

### 17. Breakpoint incoerente: 767px vs 768px
Alcune media query usano `max-width: 767px` + `min-width: 768px`, altre `max-width: 768px`. A 768px esatto i comportamenti si sovrappongono. Allineare tutto a `max-width: 767px` / `min-width: 768px`.

### 18. `.pressura` referenzia il font sbagliato
```css
.pressura { font-family: 'Didot-bold'; } /* alias mantenuto */
```
Questa classe carica Didot invece di Pressura. Se la classe è inutilizzata, eliminarla; altrimenti correggere.

### 19. Posizioni hardcoded dei fiori
`.immagine-fiore-ricevimento` (`top: 555px`) e `.immagine-fiore-lista` (`top: 300px; right: 300px`) usano valori fissi che si rompono al variare del contenuto o del viewport. Preferire un approccio con `margin` o posizionamento percentuale.

### 20. Selettore mobile troppo aggressivo
```css
@media (max-width: 768px) {
  body p, body h1, ... { margin-left: 44px; margin-right: 44px; }
}
```
Questo selettore globale può interferire con widget di terze parti, iframe e componenti futuri. Circoscriverlo alle sezioni del sito con una classe padre dedicata.

### 21. `font-size: 5vh` in `.data-desk`
Inconsistente con il resto del sito che usa `clamp()`. Sostituire con `clamp(1.5rem, 5vh, 3rem)` per coerenza e miglior comportamento sui viewport molto grandi o molto piccoli.

---

## ⚪ SEO e meta minori

### 22. `<title>` senza anno
`"Marta & Federico | 5 settembre"` → `"Marta & Federico | 5 Settembre 2026"` per completezza.

### 23. Tag canonical mancante
Aggiungere `<link rel="canonical" href="https://martaefede.it/">` per evitare duplicati indicizzati.

### 24. `<meta charset>` va dichiarato per primo
Attualmente è dopo i tag Open Graph. Per spec HTML5 deve essere entro i primi 1024 byte del documento, ma per best practice va come primo elemento del `<head>`.

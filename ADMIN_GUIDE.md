# Guida per Amministratori - Rete Italiana Studi Curdi

Questa guida ti aiuterà a utilizzare il sistema di gestione contenuti (CMS) per aggiornare il sito web della Rete Italiana Studi Curdi.

## Accesso al Sistema

### Primo Accesso

1. Vai su `https://www.reteitalianastudicurdi.it/admin/`
2. Clicca su **Log in with Netlify Identity**
3. Inserisci la tua email e password
4. Clicca su **Log in**

### Accessi Successivi

1. Vai su `https://www.reteitalianastudicurdi.it/admin/`
2. Clicca su **Log in with Netlify Identity**
3. Inserisci le tue credenziali

## Panoramica del Sistema

Il CMS è organizzato in tre sezioni principali:

- **📰 Articoli**: Articoli, ricerche e pubblicazioni
- **📅 Eventi**: Conferenze, seminari e incontri
- **📄 Pagine**: Pagine statiche del sito

## Gestione Articoli

### Creare un Nuovo Articolo

1. Clicca su **Articoli** nel menu laterale
2. Clicca su **New Articoli**
3. Compila i campi:

#### Campi Obbligatori
- **Titolo**: Titolo principale dell'articolo
- **Data Pubblicazione**: Data di pubblicazione
- **Contenuto**: Testo dell'articolo in formato Markdown

#### Campi Opzionali
- **Descrizione**: Breve descrizione per le anteprime
- **Data Aggiornamento**: Data dell'ultimo aggiornamento
- **Immagine Hero**: Immagine principale (raccomandato 1200x630px)
- **Tags**: Categorie per organizzare gli articoli
- **Autore**: Nome dell'autore
- **In Evidenza**: Seleziona per mostrare l'articolo in homepage

### Modificare un Articolo Esistente

1. Clicca su **Articoli**
2. Seleziona l'articolo dalla lista
3. Modifica i campi necessari
4. Clicca su **Save** per salvare le modifiche

### Eliminare un Articolo

1. Apri l'articolo da modificare
2. Clicca su **Delete** (in alto a destra)
3. Conferma l'eliminazione

## Gestione Eventi

### Creare un Nuovo Evento

1. Clicca su **Eventi** nel menu laterale
2. Clicca su **New Eventi**
3. Compila i campi:

#### Campi Obbligatori
- **Titolo**: Nome dell'evento
- **Data Evento**: Data e ora di inizio
- **Contenuto**: Dettagli dell'evento in Markdown

#### Campi Opzionali
- **Descrizione**: Breve descrizione per le anteprime
- **Data Fine**: Per eventi di più giorni
- **Luogo**: Dove si terrà l'evento
- **Immagine Hero**: Immagine promozionale
- **In Evidenza**: Per mostrare in homepage
- **URL Registrazione**: Link per iscriversi

### Gestione Eventi Passati

Gli eventi con data passata vengono automaticamente spostati nella sezione "Eventi Passati" e mostrati con opacità ridotta.

## Gestione Pagine

### Creare una Nuova Pagina

1. Clicca su **Pagine** nel menu laterale
2. Clicca su **New Pagine**
3. Compila i campi:

#### Campi Obbligatori
- **Titolo**: Titolo della pagina
- **Contenuto**: Contenuto in formato Markdown

#### Campi Opzionali
- **Descrizione**: Descrizione SEO
- **Data Aggiornamento**: Data ultimo aggiornamento
- **Immagine Hero**: Immagine principale
- **Ordine**: Per organizzare il menu

## Formattazione del Contenuto

### Markdown - Guida Rapida

Il sistema utilizza Markdown per formattare il testo. Ecco i comandi principali:

#### Testo
```markdown
**Grassetto**
*Corsivo*
~~Barrato~~
```

#### Titoli
```markdown
# Titolo Principale
## Sottotitolo
### Titolo di Sezione
```

#### Liste
```markdown
- Elemento lista
- Altro elemento
  - Sottoelemento

1. Elemento numerato
2. Altro elemento
```

#### Link e Immagini
```markdown
[Testo del link](https://esempio.com)
![Testo alternativo](percorso/immagine.jpg)
```

#### Citazioni
```markdown
> Questo è un testo citato
```

#### Codice
```markdown
`Codice inline`
```

```markdown
Blocco di codice
```

### Editor WYSIWYG

L'editor include una barra degli strumenti con pulsanti per:
- **Grassetto** e *corsivo*
- Link e immagini
- Liste puntate e numerate
- Citazioni
- Codice

## Gestione Immagini

### Caricare Immagini

1. Nel campo **Immagine Hero**, clicca su **Choose an image**
2. Clicca su **Upload a new file**
3. Seleziona l'immagine dal tuo computer
4. L'immagine verrà caricata automaticamente

### Dimensioni Raccomandate

- **Immagini Hero**: 1200x630px (formato 16:9)
- **Immagini Articoli**: 800x600px o superiore
- **Formati supportati**: JPG, PNG, GIF, WebP

### Organizzazione Immagini

Le immagini vengono salvate in `public/images/` e sono accessibili tramite `/images/nome-file.jpg`.

## Pubblicazione Contenuti

### Pubblicazione Immediata

Il sistema è configurato per la pubblicazione immediata:
1. Compila tutti i campi necessari
2. Clicca su **Save**
3. Il contenuto sarà pubblicato automaticamente
4. Il sito si aggiornerà in 2-3 minuti

### Anteprima

Prima di pubblicare, puoi utilizzare l'anteprima dell'editor per verificare la formattazione.

## Suggerimenti per i Contenuti

### Articoli
- Usa titoli descrittivi e accattivanti
- Includi sempre una descrizione per le anteprime
- Aggiungi tag per facilitare la categorizzazione
- Usa immagini di alta qualità
- Struttura il testo con sottotitoli

### Eventi
- Specifica sempre data, ora e luogo
- Aggiungi un'immagine promozionale
- Includi tutti i dettagli necessari nel contenuto
- Usa il campo "In Evidenza" per eventi importanti

### Pagine
- Mantieni il contenuto aggiornato
- Usa un linguaggio chiaro e accessibile
- Struttura il testo con titoli e sottotitoli

## Risoluzione Problemi

### Non Riesco ad Accedere
- Verifica di utilizzare l'email corretta
- Controlla la connessione internet
- Prova a cancellare i cookie del browser

### Le Modifiche Non Si Salvano
- Verifica di essere loggato
- Controlla che tutti i campi obbligatori siano compilati
- Prova a ricaricare la pagina

### Le Immagini Non Si Caricano
- Verifica che il file sia in formato supportato
- Controlla che la dimensione non superi i 10MB
- Prova con un'immagine diversa

### Il Contenuto Non Appare sul Sito
- Aspetta 2-3 minuti per il deployment automatico
- Verifica che il contenuto sia stato salvato
- Controlla che non ci siano errori di formattazione

## Supporto

Per assistenza tecnica:
- Email: info@reteitalianastudicurdi.it
- Consulta la [documentazione Decap CMS](https://decapcms.org/docs/)
- Contatta l'amministratore del sistema

## Best Practices

### Sicurezza
- Non condividere le tue credenziali
- Fai logout quando hai finito
- Usa password sicure

### Qualità del Contenuto
- Rileggi sempre prima di pubblicare
- Verifica i link e le immagini
- Mantieni un tono professionale e coerente

### Organizzazione
- Usa tag consistenti per gli articoli
- Mantieni le date aggiornate
- Organizza le immagini in cartelle logiche

Ricorda: ogni modifica che fai viene pubblicata immediatamente sul sito web pubblico. Prenditi sempre il tempo necessario per verificare il contenuto prima di salvarlo.

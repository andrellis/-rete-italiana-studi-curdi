# Script di Automazione Deployment

Questa guida spiega come utilizzare gli script di automazione per preparare il sito al deployment su Netlify.

## Script Disponibili

### 1. `npm run verify`
**Verifica Pre-Deployment**

Controlla che tutti i file necessari siano presenti e il progetto sia pronto per il deployment.

```bash
npm run verify
```

**Cosa controlla:**
- ✅ Presenza di file di configurazione (astro.config.mjs, netlify.toml, ecc.)
- ✅ Presenza di directory necessarie (src, public, components, ecc.)
- ✅ Presenza di contenuto di esempio
- ✅ Script NPM configurati correttamente

**Output:**
- 🟢 Tutti i controlli passati → Pronto per il deployment
- 🔴 Errori trovati → Correggi i problemi prima di continuare

---

### 2. `npm run deploy:prep`
**Preparazione Deployment Automatica**

Script interattivo che ti guida attraverso la preparazione del deployment:

```bash
npm run deploy:prep
```

**Cosa fa:**
1. **Verifica Git Status** - Mostra le modifiche non committate
2. **Verifica File** - Esegue automaticamente `npm run verify`
3. **Test Build** (opzionale) - Esegue `npm run build` per testare
4. **Git Add** - Aggiunge tutti i file modificati
5. **Git Commit** - Crea un commit con il tuo messaggio
6. **Git Push** (opzionale) - Pusha su GitHub

**Esempio di utilizzo:**
```bash
$ npm run deploy:prep

🚀 Preparazione Deployment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Passo 1: Verifica Git Status
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Modifiche rilevate:
 M src/pages/index.astro
 A src/content/articoli/nuovo-articolo.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Passo 2: Verifica File
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Tutti i controlli sono passati!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Passo 3: Test Build
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eseguire un test build prima del commit? (s/n): s

▶ Build progetto...
✓ Build progetto completato

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Passo 4: Operazioni Git
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Messaggio di commit (default: "Website deployment preparation"): Aggiunto nuovo articolo

▶ Aggiunta file a git...
✓ Aggiunta file a git completato

▶ Commit modifiche...
✓ Commit modifiche completato

Eseguire il push su GitHub ora? (s/n): s

▶ Push su GitHub...
✓ Push su GitHub completato

✓ Deployment preparation completata!

Prossimi passi:
  1. Vai su https://netlify.com
  2. Crea un nuovo sito da Git
  3. Seleziona il tuo repository
  4. Netlify rileverà automaticamente le impostazioni
  5. Clicca su "Deploy site"
```

---

### 3. `npm run deploy:checklist`
**Checklist Interattiva di Deployment**

Traccia il progresso del deployment con una checklist interattiva:

```bash
npm run deploy:checklist
```

**Features:**
- 📋 Checklist completa di tutti i passi di deployment
- ✓ Marca task come completati
- 💾 Salva automaticamente il progresso
- 📊 Mostra barra di progresso
- 💡 Suggerimenti e comandi per ogni task

**Categorie:**
1. **Preparazione Locale** (4 task)
2. **Configurazione Netlify** (2 task)
3. **Configurazione CMS** (3 task)
4. **Gestione Utenti** (2 task)
5. **Test Funzionalità** (2 task)
6. **Dominio e SSL** (3 task)

**Esempio di utilizzo:**
```bash
$ npm run deploy:checklist

📋 Deployment Checklist - Rete Italiana Studi Curdi

Preparazione Locale
  ✓ 1. Build locale completato con successo
  ✓ 2. Tutti i file necessari sono presenti
  ○ 3. Modifiche committate su Git
     → git status
  ○ 4. Push su GitHub completato
     $ git push

Configurazione Netlify
  ○ 5. Repository connesso a Netlify
     → Dashboard Netlify → New site from Git
  ○ 6. Primo deployment completato
     → Attendi 2-3 minuti per il build

...

Progresso: ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 20% (2/16)

Opzioni:
  [1-16] - Marca task come completato
  [u]    - Annulla ultimo completamento
  [r]    - Reset progresso
  [s]    - Salva e esci
  [q]    - Esci senza salvare

Scegli un'opzione: 3
```

---

## Workflow Consigliato

### Per il Primo Deployment

1. **Verifica il progetto:**
   ```bash
   npm run verify
   ```

2. **Prepara e pusha su GitHub:**
   ```bash
   npm run deploy:prep
   ```

3. **Segui la checklist:**
   ```bash
   npm run deploy:checklist
   ```
   
4. **Configura Netlify manualmente** seguendo la `DEPLOYMENT.md`

### Per Deployment Successivi

1. **Verifica modifiche:**
   ```bash
   npm run verify
   ```

2. **Commit e push automatico:**
   ```bash
   npm run deploy:prep
   ```

3. Netlify farà automaticamente il deploy! 🚀

---

## Troubleshooting

### Script non funziona su Windows

Se gli script non si avviano, assicurati che Node.js sia installato:
```bash
node --version
```

### Permessi negati (Unix/Linux/Mac)

Rendi gli script eseguibili:
```bash
chmod +x scripts/*.js
```

### Errori Git

Se hai problemi con git, assicurati di aver inizializzato il repository:
```bash
git init
git remote add origin <url-repository>
```

---

## Note Importanti

- **Backup:** Gli script salvano il progresso in `.deployment-progress.json` (aggiunto al `.gitignore`)
- **Sicurezza:** Non committare mai credenziali o token
- **Test:** Esegui sempre un build test prima del deployment
- **Branching:** Gli script lavorano sul branch corrente

---

## Supporto

Per problemi o suggerimenti:
- Consulta `DEPLOYMENT.md` per la guida completa
- Email: info@reteitalianastudicurdi.it

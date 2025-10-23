# Guida al Deployment - Rete Italiana Studi Curdi

Questa guida ti accompagnerà attraverso il processo di deployment del sito web su Netlify e la configurazione del sistema di gestione contenuti per gli amministratori.

## Prerequisiti

- Account GitHub
- Account Netlify (gratuito)
- Repository GitHub con il codice del sito

## Passo 1: Preparazione del Repository

### 1.1 Commit e Push del Codice

Assicurati che tutto il codice sia committato e pushato su GitHub:

```bash
git add .
git commit -m "Initial website setup with CMS"
git push origin main
```

### 1.2 Verifica dei File

Controlla che questi file siano presenti nel repository:
- `astro.config.mjs`
- `netlify.toml`
- `public/admin/config.yml`
- `public/admin/index.html`
- `src/content/config.ts`

## Passo 2: Deployment su Netlify

### 2.1 Connessione del Repository

1. Vai su [netlify.com](https://netlify.com) e accedi al tuo account
2. Clicca su "New site from Git"
3. Seleziona "GitHub" come provider
4. Autorizza Netlify ad accedere al tuo account GitHub
5. Seleziona il repository `rete-italiana-studi-curdi`
6. Clicca su "Deploy site"

### 2.2 Configurazione Build

Netlify dovrebbe rilevare automaticamente le impostazioni da `netlify.toml`, ma verifica che siano:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### 2.3 Attesa del Deployment

Il primo deployment potrebbe richiedere 2-3 minuti. Una volta completato, riceverai un URL temporaneo (es: `https://amazing-name-123456.netlify.app`).

## Passo 3: Configurazione Netlify Identity

### 3.1 Abilitazione Identity

1. Nel dashboard Netlify, vai su **Site settings** → **Identity**
2. Clicca su **Enable Identity**
3. Nella sezione **Registration preferences**, seleziona **Invite only**
4. Clicca su **Save**

### 3.2 Configurazione Git Gateway

1. Nella stessa pagina Identity, scorri verso il basso fino a **Services**
2. Clicca su **Enable Git Gateway**
3. Autorizza Netlify ad accedere al tuo repository GitHub
4. Clicca su **Save**

### 3.3 Configurazione Email

1. Vai su **Site settings** → **Identity** → **Settings and usage**
2. Configura le impostazioni email:
   - **Site URL**: Il tuo URL Netlify
   - **External providers**: Configura se necessario

## Passo 4: Configurazione del Dominio Personalizzato

### 4.1 Aggiunta del Dominio

1. Vai su **Site settings** → **Domain management**
2. Clicca su **Add custom domain**
3. Inserisci `www.reteitalianastudicurdi.it`
4. Clicca su **Verify**

### 4.2 Configurazione DNS

Netlify ti fornirà le istruzioni per configurare i record DNS. Tipicamente:

- **CNAME**: `www` → `your-site-name.netlify.app`
- **A**: `@` → `75.2.60.5` (IP di Netlify)

### 4.3 SSL Certificate

Netlify fornirà automaticamente un certificato SSL gratuito per il tuo dominio.

## Passo 5: Invito degli Amministratori

### 5.1 Invio Inviti

1. Vai su **Site settings** → **Identity** → **Invite users**
2. Inserisci l'email degli amministratori
3. Clicca su **Send invite**
4. Ripeti per tutti gli amministratori

### 5.2 Primo Accesso

Gli amministratori riceveranno un'email con:
- Link per impostare la password
- Istruzioni per accedere al CMS

## Passo 6: Test del Sistema

### 6.1 Accesso al CMS

1. Vai su `https://www.reteitalianastudicurdi.it/admin/`
2. Accedi con le credenziali Netlify Identity
3. Verifica che tutte le sezioni siano visibili:
   - Articoli
   - Eventi
   - Pagine

### 6.2 Test di Creazione Contenuto

1. Crea un nuovo articolo di test
2. Aggiungi un'immagine
3. Pubblica il contenuto
4. Verifica che appaia sul sito pubblico

### 6.3 Verifica Deployment Automatico

1. Modifica un contenuto esistente
2. Salva le modifiche
3. Verifica che il sito si aggiorni automaticamente (2-3 minuti)

## Passo 7: Configurazioni Finali

### 7.1 Impostazioni SEO

1. Vai su **Site settings** → **Build & deploy** → **Post processing**
2. Abilita **Asset optimization**
3. Abilita **Pretty URLs**

### 7.2 Backup e Monitoraggio

1. Configura notifiche email per i deployment
2. Considera l'abilitazione di **Netlify Analytics** (opzionale)

## Risoluzione Problemi Comuni

### Problema: CMS non si carica
**Soluzione**: Verifica che Git Gateway sia abilitato e che l'utente abbia i permessi corretti.

### Problema: Immagini non si caricano
**Soluzione**: Controlla che il percorso `public/images` sia corretto e che le immagini siano state caricate correttamente.

### Problema: Modifiche non si pubblicano
**Soluzione**: Verifica che l'utente sia loggato e che abbia i permessi di scrittura sul repository.

### Problema: Dominio non funziona
**Soluzione**: Controlla la configurazione DNS e attendi la propagazione (fino a 24 ore).

## Supporto

Per problemi tecnici:
- [Documentazione Netlify](https://docs.netlify.com/)
- [Documentazione Decap CMS](https://decapcms.org/docs/)
- Email: info@reteitalianastudicurdi.it

## Checklist Finale

- [ ] Sito deployato su Netlify
- [ ] Netlify Identity abilitato
- [ ] Git Gateway configurato
- [ ] Dominio personalizzato attivo
- [ ] SSL certificate funzionante
- [ ] Amministratori invitati
- [ ] CMS accessibile e funzionante
- [ ] Test di creazione contenuto completato
- [ ] Deployment automatico verificato

Una volta completati tutti i passaggi, il sistema sarà completamente operativo e gli amministratori potranno gestire il contenuto del sito in modo autonomo.

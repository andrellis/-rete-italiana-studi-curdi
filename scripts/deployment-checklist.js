#!/usr/bin/env node

/**
 * Interactive Deployment Checklist
 * Helps track deployment progress
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

const checklist = [
  {
    id: 'local-build',
    category: 'Preparazione Locale',
    task: 'Build locale completato con successo',
    command: 'npm run build'
  },
  {
    id: 'files-verified',
    category: 'Preparazione Locale',
    task: 'Tutti i file necessari sono presenti',
    command: 'node scripts/verify-deployment.js'
  },
  {
    id: 'git-committed',
    category: 'Preparazione Locale',
    task: 'Modifiche committate su Git',
    command: 'git status'
  },
  {
    id: 'git-pushed',
    category: 'Preparazione Locale',
    task: 'Push su GitHub completato',
    command: 'git push'
  },
  {
    id: 'netlify-connected',
    category: 'Configurazione Netlify',
    task: 'Repository connesso a Netlify',
    hint: 'Dashboard Netlify → New site from Git'
  },
  {
    id: 'first-deploy',
    category: 'Configurazione Netlify',
    task: 'Primo deployment completato',
    hint: 'Attendi 2-3 minuti per il build'
  },
  {
    id: 'identity-enabled',
    category: 'Configurazione CMS',
    task: 'Netlify Identity abilitato',
    hint: 'Site settings → Identity → Enable Identity'
  },
  {
    id: 'git-gateway',
    category: 'Configurazione CMS',
    task: 'Git Gateway configurato',
    hint: 'Identity → Services → Enable Git Gateway'
  },
  {
    id: 'invite-only',
    category: 'Configurazione CMS',
    task: 'Registration impostato su "Invite only"',
    hint: 'Identity → Registration preferences'
  },
  {
    id: 'admins-invited',
    category: 'Gestione Utenti',
    task: 'Amministratori invitati via email',
    hint: 'Identity → Invite users'
  },
  {
    id: 'admin-tested',
    category: 'Gestione Utenti',
    task: 'Login CMS testato',
    hint: 'Vai su /admin/ e prova ad accedere'
  },
  {
    id: 'content-tested',
    category: 'Test Funzionalità',
    task: 'Creazione contenuto testata',
    hint: 'Crea un articolo di test dal CMS'
  },
  {
    id: 'auto-deploy-tested',
    category: 'Test Funzionalità',
    task: 'Deployment automatico verificato',
    hint: 'Modifica un contenuto e verifica l\'aggiornamento'
  },
  {
    id: 'custom-domain',
    category: 'Dominio e SSL',
    task: 'Dominio personalizzato configurato',
    hint: 'Domain management → Add custom domain'
  },
  {
    id: 'dns-configured',
    category: 'Dominio e SSL',
    task: 'DNS configurato correttamente',
    hint: 'Segui le istruzioni DNS di Netlify'
  },
  {
    id: 'ssl-active',
    category: 'Dominio e SSL',
    task: 'Certificato SSL attivo',
    hint: 'Netlify fornisce SSL automaticamente'
  }
];

const checklistFile = path.join(process.cwd(), '.deployment-progress.json');

function loadProgress() {
  try {
    if (fs.existsSync(checklistFile)) {
      return JSON.parse(fs.readFileSync(checklistFile, 'utf8'));
    }
  } catch (error) {
    console.log(`${colors.yellow}⚠${colors.reset} Impossibile caricare il progresso salvato`);
  }
  return {};
}

function saveProgress(progress) {
  try {
    fs.writeFileSync(checklistFile, JSON.stringify(progress, null, 2));
  } catch (error) {
    console.log(`${colors.yellow}⚠${colors.reset} Impossibile salvare il progresso`);
  }
}

function displayChecklist(progress) {
  console.clear();
  console.log(`\n${colors.bold}${colors.blue}📋 Deployment Checklist - Rete Italiana Studi Curdi${colors.reset}\n`);
  
  let currentCategory = '';
  let totalTasks = checklist.length;
  let completedTasks = Object.values(progress).filter(Boolean).length;
  
  checklist.forEach((item, index) => {
    if (item.category !== currentCategory) {
      currentCategory = item.category;
      console.log(`\n${colors.blue}${colors.bold}${currentCategory}${colors.reset}`);
    }
    
    const isComplete = progress[item.id] === true;
    const status = isComplete ? `${colors.green}✓${colors.reset}` : `${colors.gray}○${colors.reset}`;
    const taskText = isComplete ? colors.gray + item.task + colors.reset : item.task;
    
    console.log(`  ${status} ${index + 1}. ${taskText}`);
    
    if (!isComplete && item.hint) {
      console.log(`     ${colors.gray}→ ${item.hint}${colors.reset}`);
    }
    if (!isComplete && item.command) {
      console.log(`     ${colors.gray}$ ${item.command}${colors.reset}`);
    }
  });
  
  // Progress bar
  const percentage = Math.round((completedTasks / totalTasks) * 100);
  const barLength = 40;
  const filledLength = Math.round((percentage / 100) * barLength);
  const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);
  
  console.log(`\n${colors.blue}Progresso:${colors.reset} ${bar} ${percentage}% (${completedTasks}/${totalTasks})`);
  
  if (completedTasks === totalTasks) {
    console.log(`\n${colors.green}${colors.bold}🎉 Complimenti! Deployment completato!${colors.reset}\n`);
  }
}

async function main() {
  let progress = loadProgress();
  let running = true;
  
  while (running) {
    displayChecklist(progress);
    
    console.log(`\n${colors.blue}Opzioni:${colors.reset}`);
    console.log('  [1-16] - Marca task come completato');
    console.log('  [u]    - Annulla ultimo completamento');
    console.log('  [r]    - Reset progresso');
    console.log('  [s]    - Salva e esci');
    console.log('  [q]    - Esci senza salvare\n');
    
    const input = await question('Scegli un\'opzione: ');
    
    if (input === 'q') {
      running = false;
    } else if (input === 's') {
      saveProgress(progress);
      console.log(`\n${colors.green}✓ Progresso salvato!${colors.reset}\n`);
      running = false;
    } else if (input === 'r') {
      const confirm = await question(`${colors.yellow}Confermi reset del progresso? (s/n): ${colors.reset}`);
      if (confirm.toLowerCase() === 's') {
        progress = {};
        saveProgress(progress);
        console.log(`\n${colors.green}✓ Progresso resettato${colors.reset}`);
      }
    } else if (input === 'u') {
      const lastCompleted = Object.keys(progress).reverse().find(key => progress[key]);
      if (lastCompleted) {
        progress[lastCompleted] = false;
        saveProgress(progress);
      }
    } else {
      const taskIndex = parseInt(input) - 1;
      if (taskIndex >= 0 && taskIndex < checklist.length) {
        const taskId = checklist[taskIndex].id;
        progress[taskId] = !progress[taskId];
        saveProgress(progress);
      }
    }
  }
  
  rl.close();
}

main().catch(error => {
  console.error(`${colors.red}Errore:${colors.reset}`, error.message);
  rl.close();
  process.exit(1);
});


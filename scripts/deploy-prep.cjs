#!/usr/bin/env node

/**
 * Deployment Preparation Script
 * Automates git operations for deployment
 */

const { execSync } = require('child_process');
const readline = require('readline');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
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

function executeCommand(command, description) {
  console.log(`\n${colors.blue}▶${colors.reset} ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8' });
    if (output.trim()) {
      console.log(output);
    }
    console.log(`${colors.green}✓${colors.reset} ${description} completato`);
    return true;
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} Errore: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log(`\n${colors.bold}${colors.blue}🚀 Preparazione Deployment${colors.reset}\n`);
  console.log('Questo script ti guiderà attraverso la preparazione del deployment.\n');

  // Step 1: Check git status
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.blue}Passo 1: Verifica Git Status${colors.reset}`);
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      console.log('\nModifiche rilevate:');
      console.log(status);
    } else {
      console.log(`\n${colors.green}✓${colors.reset} Repository pulito, nessuna modifica da committare.`);
      const proceed = await question('\nVuoi continuare comunque? (s/n): ');
      if (proceed.toLowerCase() !== 's') {
        console.log('\nOperazione annullata.');
        rl.close();
        process.exit(0);
      }
    }
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} Errore nel controllare lo stato git: ${error.message}`);
    rl.close();
    process.exit(1);
  }

  // Step 2: Run verification
  console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.blue}Passo 2: Verifica File${colors.reset}`);
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  
  const verifySuccess = executeCommand('node scripts/verify-deployment.js', 'Verifica file deployment');
  if (!verifySuccess) {
    console.log(`\n${colors.yellow}⚠${colors.reset} La verifica ha rilevato problemi. Vuoi continuare?`);
    const proceed = await question('Continuare comunque? (s/n): ');
    if (proceed.toLowerCase() !== 's') {
      console.log('\nOperazione annullata. Correggi i problemi prima di procedere.');
      rl.close();
      process.exit(1);
    }
  }

  // Step 3: Build test
  console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.blue}Passo 3: Test Build${colors.reset}`);
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  
  const testBuild = await question('\nEseguire un test build prima del commit? (s/n): ');
  if (testBuild.toLowerCase() === 's') {
    const buildSuccess = executeCommand('npm run build', 'Build progetto');
    if (!buildSuccess) {
      console.log(`\n${colors.red}✗${colors.reset} Build fallito. Correggi gli errori prima di continuare.`);
      rl.close();
      process.exit(1);
    }
  }

  // Step 4: Git operations
  console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.blue}Passo 4: Operazioni Git${colors.reset}`);
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  
  const commitMessage = await question('\nMessaggio di commit (default: "Website deployment preparation"): ');
  const finalMessage = commitMessage.trim() || 'Website deployment preparation';

  // Git add
  executeCommand('git add .', 'Aggiunta file a git');

  // Git commit
  executeCommand(`git commit -m "${finalMessage}"`, 'Commit modifiche');

  // Git push
  const pushNow = await question('\nEseguire il push su GitHub ora? (s/n): ');
  if (pushNow.toLowerCase() === 's') {
    const pushSuccess = executeCommand('git push', 'Push su GitHub');
    if (pushSuccess) {
      console.log(`\n${colors.green}${colors.bold}✓ Deployment preparation completata!${colors.reset}`);
      console.log(`\n${colors.blue}Prossimi passi:${colors.reset}`);
      console.log('  1. Vai su https://netlify.com');
      console.log('  2. Crea un nuovo sito da Git');
      console.log('  3. Seleziona il tuo repository');
      console.log('  4. Netlify rileverà automaticamente le impostazioni da netlify.toml');
      console.log('  5. Clicca su "Deploy site"\n');
    }
  } else {
    console.log(`\n${colors.yellow}Push annullato.${colors.reset} Esegui manualmente: ${colors.bold}git push${colors.reset}\n`);
  }

  rl.close();
}

main().catch(error => {
  console.error(`${colors.red}Errore:${colors.reset}`, error.message);
  rl.close();
  process.exit(1);
});


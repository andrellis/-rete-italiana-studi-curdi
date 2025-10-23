#!/usr/bin/env node

/**
 * Pre-deployment Verification Script
 * Checks that all required files are present before deployment
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Required files for deployment
const requiredFiles = [
  'astro.config.mjs',
  'netlify.toml',
  'package.json',
  'tsconfig.json',
  'tailwind.config.mjs',
  'public/admin/config.yml',
  'public/admin/index.html',
  'src/content/config.ts',
  'src/layouts/Layout.astro',
  'src/components/Header.astro',
  'src/components/Footer.astro',
  'src/pages/index.astro',
  'README.md',
  'DEPLOYMENT.md',
  'ADMIN_GUIDE.md'
];

// Required directories
const requiredDirs = [
  'src',
  'src/content',
  'src/content/articoli',
  'src/content/eventi',
  'src/content/pagine',
  'src/components',
  'src/layouts',
  'src/pages',
  'public',
  'public/admin'
];

console.log(`\n${colors.blue}🔍 Verifica Pre-Deployment${colors.reset}\n`);
console.log('Controllo dei file necessari per il deployment...\n');

let allChecksPass = true;
let checkedFiles = 0;
let checkedDirs = 0;

// Check required files
console.log(`${colors.blue}📄 Verifica File:${colors.reset}`);
requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`${colors.green}✓${colors.reset} ${file}`);
    checkedFiles++;
  } else {
    console.log(`${colors.red}✗${colors.reset} ${file} ${colors.red}MANCANTE${colors.reset}`);
    allChecksPass = false;
  }
});

// Check required directories
console.log(`\n${colors.blue}📁 Verifica Directory:${colors.reset}`);
requiredDirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    console.log(`${colors.green}✓${colors.reset} ${dir}/`);
    checkedDirs++;
  } else {
    console.log(`${colors.red}✗${colors.reset} ${dir}/ ${colors.red}MANCANTE${colors.reset}`);
    allChecksPass = false;
  }
});

// Check for sample content
console.log(`\n${colors.blue}📝 Verifica Contenuto:${colors.reset}`);
const contentChecks = [
  { path: 'src/content/articoli', name: 'Articoli' },
  { path: 'src/content/eventi', name: 'Eventi' }
];

contentChecks.forEach(check => {
  const dirPath = path.join(process.cwd(), check.path);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
    if (files.length > 0) {
      console.log(`${colors.green}✓${colors.reset} ${check.name}: ${files.length} file trovati`);
    } else {
      console.log(`${colors.yellow}⚠${colors.reset} ${check.name}: Nessun file (considera di aggiungere contenuto di esempio)`);
    }
  }
});

// Check package.json scripts
console.log(`\n${colors.blue}⚙️  Verifica Script NPM:${colors.reset}`);
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const requiredScripts = ['dev', 'build', 'preview'];
  
  requiredScripts.forEach(script => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`${colors.green}✓${colors.reset} npm run ${script}`);
    } else {
      console.log(`${colors.red}✗${colors.reset} npm run ${script} ${colors.red}MANCANTE${colors.reset}`);
      allChecksPass = false;
    }
  });
}

// Summary
console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
if (allChecksPass) {
  console.log(`${colors.green}✓ Tutti i controlli sono passati!${colors.reset}`);
  console.log(`\n${colors.green}Il progetto è pronto per il deployment.${colors.reset}`);
  console.log(`\nProssimi passi:`);
  console.log(`  1. Esegui: npm run build`);
  console.log(`  2. Testa il build: npm run preview`);
  console.log(`  3. Committa e pusha su GitHub`);
  console.log(`  4. Connetti il repository a Netlify\n`);
  process.exit(0);
} else {
  console.log(`${colors.red}✗ Alcuni controlli non sono passati${colors.reset}`);
  console.log(`\n${colors.yellow}Correggi gli errori prima di procedere con il deployment.${colors.reset}\n`);
  process.exit(1);
}


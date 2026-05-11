const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  const warnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
    if (msg.type() === 'warning') warnings.push(msg.text());
  });

  page.on('pageerror', err => errors.push(`Page error: ${err.message}`));

  console.log('Testing Home Page...');
  await page.goto('https://taksh-react.vercel.app', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Check if main elements exist
  const title = await page.title();
  console.log(`  Title: ${title}`);

  const heroExists = await page.$('.hero__title') !== null;
  console.log(`  Hero exists: ${heroExists}`);

  const navExists = await page.$('.nav') !== null;
  console.log(`  Nav exists: ${navExists}`);

  console.log('\nTesting Real Estate Page...');
  await page.goto('https://taksh-react.vercel.app/real-estate', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const reTitle = await page.title();
  console.log(`  Title: ${reTitle}`);

  const pageHeroExists = await page.$('.page-hero') !== null;
  console.log(`  Page hero exists: ${pageHeroExists}`);

  console.log('\n--- Console Errors ---');
  if (errors.length === 0) {
    console.log('No critical errors found!');
  } else {
    errors.forEach(e => console.log(`ERROR: ${e}`));
  }

  console.log('\n--- Console Warnings ---');
  if (warnings.length === 0) {
    console.log('No warnings found.');
  } else {
    warnings.forEach(w => console.log(`WARNING: ${w}`));
  }

  await browser.close();
})();
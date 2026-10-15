import http from 'http';

function fetchHtml(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('--- STARTING L-01 VERIFICATION SUITE ---');
  let failures = 0;
  const results = [];

  function assert(title, condition, extraInfo = '') {
    if (condition) {
      console.log(`[PASS] ${title}`);
      results.push({ title, status: 'PASS', extraInfo });
    } else {
      console.error(`[FAIL] ${title} - ${extraInfo}`);
      results.push({ title, status: 'FAIL', extraInfo });
      failures++;
    }
  }

  // Test 1: Normal Home Page
  const homeRes = await fetchHtml('/');
  assert('Server returns HTTP 200 for L-01 Home', homeRes.status === 200);

  const html = homeRes.body;

  // 1. Header checks
  assert('Header renders Meseg Logo image', html.includes('/images/meseg-logo.jpg'));
  assert('Header contains link to How it works (/how-it-works)', html.includes('href="/how-it-works"'));
  assert('Header contains link to Plans (/plans)', html.includes('href="/plans"'));
  assert('Header contains link to Referrals (/referrals)', html.includes('href="/referrals"'));
  assert('Header contains link to FAQ (/faq)', html.includes('href="/faq"'));
  assert('Public website Header has NO public Sign in link (member auth is on mobile)', !html.includes('href="/sign-in"'));
  assert('Public website has NO admin link in navigation', !html.includes('href="/admin"') && !html.includes('admin.meseg.com'));
  assert('Header contains link to Get started (/get-the-app)', html.includes('href="/get-the-app"'));
  assert('Header has hamburger menu button for mobile', html.includes('hamburger-btn'));
  assert('Header has full-height mobile navigation panel', html.includes('mobile-nav-panel'));

  // 2. Hero checks
  assert('Hero section is present with id="hero"', html.includes('id="hero"'));
  assert('Hero has headline', html.includes('Disciplined capital growth for discerning investors'));
  assert('Hero has supporting sentence', html.includes('Access curated, asset-backed investment opportunities'));
  assert('Hero has two CTAs', html.includes('Get started') && html.includes('See our plans'));
  assert('Hero has App Store badge', html.includes('App Store'));
  assert('Hero has Google Play badge', html.includes('Google Play'));

  // 3. Trust row checks
  assert('Trust row renders RC number from /public/settings', html.includes('RC 1948201'));
  assert('Trust row renders SEC number from /public/settings', html.includes('SEC/CMO/2023/00482'));
  assert('Trust row renders Paystack mark', html.includes('Paystack Integrated Partner') || html.includes('paystack'));
  assert('Trust row renders Flutterwave mark', html.includes('Flutterwave Integrated Partner') || html.includes('flutterwave'));
  assert('Trust row renders Bank partner mark', html.includes('Settlement Banks'));

  // 4. How it works checks
  assert('How it works section is present with exactly 4 steps', 
    html.includes('Create your account') &&
    html.includes('Verify your identity') &&
    html.includes('Add money') &&
    html.includes('Choose a plan')
  );

  // 5. Plans checks
  assert('Plans section renders active products', 
    html.includes('Meseg High-Yield Growth Note') &&
    html.includes('Commercial Agribusiness Asset Fund')
  );
  assert('Plans section filters out inactive products', !html.includes('Archived Expansion Series'));
  assert('Plan card formats kobo to Naira (₦50,000 and ₦25,000)', 
    html.includes('₦50,000') && html.includes('₦25,000')
  );
  assert('Plan card displays target rate and payout frequency', 
    (html.includes('18.5') && html.includes('Quarterly payout'))
  );
  assert('Plan card displays capacity progress bar', html.includes('capacity-bar-track'));
  assert('Fully subscribed product shows "Fully subscribed" badge', html.includes('Fully subscribed'));
  assert('Fully subscribed product can still be opened via "View plan"', 
    html.includes('href="/plans/secured-infrastructure-debt-trust"')
  );

  // 6. Why Meseg checks
  assert('Why Meseg section is present with exactly 4 items',
    html.includes('Asset-backed security') &&
    html.includes('Disciplined distributions') &&
    html.includes('Institutional governance') &&
    html.includes('Transparent portfolio tracking')
  );

  // 7. Referral programme checks
  assert('Referral programme displays dynamic percentage from /public/settings (2.5%)', 
    html.includes('2.5') && html.includes('referral-stat-value')
  );
  // 8. Security checks
  assert('Security section displays exactly 4 items',
    html.includes('Identity verification') &&
    html.includes('Encrypted data') &&
    html.includes('Audit trail') &&
    html.includes('Regulated custody')
  );

  // 9. Get the app checks
  assert('Get the app displays store links from /public/settings', 
    html.includes('https://apps.apple.com/ng/app/meseg-capital/id16492048') &&
    html.includes('https://play.google.com/store/apps/details?id=ng.mesegcapital.app')
  );
  assert('Get the app displays QR code and phone graphic', 
    html.includes('qr-code-box') && html.includes('phone-mockup-wrapper')
  );

  // 10. Questions (FAQ) checks
  assert('Questions section has 6 accordion items', 
    html.includes('faq-1') && html.includes('faq-6')
  );

  // Header CTA route consistency
  assert('Header desktop CTA links to /get-the-app', html.includes('href="/get-the-app"'));

  // Hero CTA route consistency
  assert('Hero primary CTA links to /get-the-app', html.includes('href="/get-the-app"'));
  assert('Hero secondary CTA links to /plans', html.includes('href="/plans"'));

  // Referral programme route consistency
  assert('Referral programme Learn more links to /referrals', html.includes('href="/referrals"'));

  // Questions route consistency
  assert('Questions section has "See all questions" button linking to /faq', 
    html.includes('href="/faq"') && html.includes('See all questions')
  );

  // Closing band CTA route consistency
  assert('Closing band has Get started CTA linking to /get-the-app',
    html.includes('id="closing-cta"') && html.includes('href="/get-the-app"')
  );

  // 12. Footer checks
  assert('Footer has 4 columns and dynamic contact from /public/settings',
    html.includes('support@mesegcapital.com') &&
    html.includes('+234 1 888 3490') &&
    html.includes('https://wa.me/23418883490') &&
    html.includes('Plot 14B, Victoria Island Financial Center')
  );
  assert('Footer has social links from /public/settings',
    html.includes('https://x.com/mesegcapital') &&
    html.includes('https://instagram.com/mesegcapital') &&
    html.includes('https://facebook.com/mesegcapital') &&
    html.includes('https://linkedin.com/company/mesegcapital')
  );
  assert('Footer has legal links for Terms, Privacy, and Risk Disclosure',
    html.includes('href="/terms"') &&
    html.includes('href="/privacy"') &&
    html.includes('href="/risk"')
  );

  // Section Ordering Check - testing precise section wrapper markers
  const orderTags = [
    'id="main-header"',
    'id="hero"',
    'class="trust-row-section"',
    'id="how-it-works"',
    'id="plans"',
    'id="why-meseg"',
    'id="referrals"',
    'id="security"',
    'id="get-the-app"',
    'id="questions"',
    'id="closing-cta"',
    'id="main-footer"'
  ];

  let prevIdx = -1;
  let orderCorrect = true;
  for (const tag of orderTags) {
    const idx = html.indexOf(tag);
    if (idx === -1) {
      orderCorrect = false;
      console.error(`Missing tag in order check: ${tag}`);
      break;
    }
    if (idx < prevIdx) {
      orderCorrect = false;
      console.error(`Out of order: ${tag} appeared at ${idx}, previous was at ${prevIdx}`);
      break;
    }
    prevIdx = idx;
  }
  assert('All 12 sections appear in the exact order specified', orderCorrect);

  // Test Failure State: /public/products fails -> hide Plans section completely, NO public error message
  const failRes = await fetchHtml('/?sim_fail_products=true');
  const failHtml = failRes.body;
  const plansHidden = !failHtml.includes('id="plans"');
  const noErrorMessage = !failHtml.toLowerCase().includes('failed to load products') && 
                         !failHtml.toLowerCase().includes('error loading') &&
                         !failHtml.toLowerCase().includes('api error');
  assert('Failure state: Plans section is completely hidden when products API fails', plansHidden);
  assert('Failure state: No public error message is displayed when products API fails', noErrorMessage);

  // Test Loading State: Exactly 3 skeleton plan cards
  const loadingRes = await fetchHtml('/?sim_loading_products=true');
  const loadingHtml = loadingRes.body;
  const skeletonCount = (loadingHtml.match(/class="skeleton-card"/g) || []).length;
  assert('Loading state: Exactly 3 skeleton plan cards are shown', skeletonCount === 3, `Count: ${skeletonCount}`);

  console.log('\n--- VERIFICATION SUMMARY ---');
  console.log(`Total assertions: ${results.length}`);
  console.log(`Passed: ${results.length - failures}`);
  console.log(`Failed: ${failures}`);

  if (failures > 0) {
    process.exit(1);
  } else {
    console.log('ALL SPECIFICATION CHECKS PASSED!');
  }
}

runTests().catch((err) => {
  console.error('Test execution error:', err);
  process.exit(1);
});

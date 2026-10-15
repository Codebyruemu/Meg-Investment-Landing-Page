/**
 * Meseg Capital L-01 Home Screen Content Repository
 * 
 * AUDIT CLASSIFICATION:
 * - SPECIFICATION DEFINED: Structural text explicitly defined by the canonical specification (e.g. How it works steps, Security categories).
 * - DYNAMIC BACKEND: Text driven directly by /public/settings (RC, SEC, referral %, URLs, contacts).
 * - PENDING CLIENT COPY: Marketing copy, supporting sentences, and FAQ answers that were not supplied by the client and must receive final client approval.
 */

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SecurityItem {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * 2. HERO SECTION
 * Status: PENDING CLIENT COPY
 * - headline: Temporary placeholder. Needs client-approved marketing headline.
 * - supportingSentence: Temporary placeholder. Needs client-approved supporting sentence.
 * - primaryCtaText: "Get started" (Spec standard)
 * - secondaryCtaText: "See our plans" (Spec standard)
 */
export const heroContent = {
  headline: "Disciplined capital growth for discerning investors",
  supportingSentence: "Access curated, asset-backed investment opportunities designed to preserve capital and deliver consistent, distribution-focused yields.",
  primaryCtaText: "Get started",
  secondaryCtaText: "See our plans",
};

/**
 * 4. HOW IT WORKS
 * Status: CANONICAL SPEC TITLES + PENDING CLIENT SENTENCES
 * Exactly four steps as defined in the canonical specification:
 * 1. Create your account
 * 2. Verify your identity
 * 3. Add money
 * 4. Choose a plan
 * - Titles: Canonical from specification.
 * - Descriptions (one sentence each): Temporary placeholder sentences pending client-approved wording.
 */
export const howItWorksSteps: StepItem[] = [
  {
    step: 1,
    title: "Create your account",
    description: "Sign up with your verified personal information in minutes to access the platform."
  },
  {
    step: 2,
    title: "Verify your identity",
    description: "Complete seamless tier-one KYC verification to secure your investor profile."
  },
  {
    step: 3,
    title: "Add money",
    description: "Fund your Meseg wallet via bank transfer or verified domestic payment rails."
  },
  {
    step: 4,
    title: "Choose a plan",
    description: "Select an active capital growth plan matching your investment horizon and target yield."
  }
];

/**
 * 6. WHY MESEG
 * Status: PENDING CLIENT COPY
 * Exactly four items as required by specification.
 * - Titles & descriptions: Temporary placeholders pending client-approved value proposition copy.
 */
export const whyMesegItems: FeatureItem[] = [
  {
    id: "asset-backed",
    icon: "shield",
    title: "Asset-backed security",
    description: "Every investment note is underpinned by verifiable commercial assets and audited collateral."
  },
  {
    id: "predictable-returns",
    icon: "trend-up",
    title: "Disciplined distributions",
    description: "Enjoy automated periodic distribution schedules paid directly into your verified bank account."
  },
  {
    id: "institutional-governance",
    icon: "landmark",
    title: "Institutional governance",
    description: "Operate under regulated trustee supervision with full corporate disclosure and audit trails."
  },
  {
    id: "portfolio-clarity",
    icon: "bar-chart",
    title: "Transparent portfolio tracking",
    description: "Monitor real-time allocation status, yields, and distribution timelines with zero hidden deductions."
  }
];

/**
 * 7. REFERRAL PROGRAMME
 * Status: PENDING CLIENT COPY (percentage is dynamic from /public/settings)
 * - heading: Temporary placeholder pending client wording.
 * - sentenceOne: Temporary placeholder pending client wording.
 * - sentenceTwo: Temporary placeholder pending client wording.
 * - ctaText: "Learn more" (Canonical from specification)
 */
export const referralContent = {
  heading: "Grow your wealth alongside your network",
  sentenceOne: "Introduce colleagues and family to Meseg Capital and earn recurring incentives as they build their portfolios.",
  sentenceTwo: "Receive bonus allocations credited directly to your investor account on every qualified subscription.",
  ctaText: "Learn more"
};

/**
 * 8. SECURITY
 * Status: CANONICAL SPEC TITLES + PENDING CLIENT SENTENCES
 * Exactly four items defined by specification:
 * - Identity verification
 * - Encrypted data
 * - Audit trail
 * - Regulated custody
 * - Titles: Canonical from specification.
 * - Descriptions: Temporary factual descriptions; pending legal/compliance approved copy.
 */
export const securityItems: SecurityItem[] = [
  {
    id: "identity-verification",
    title: "Identity verification",
    description: "Multi-tiered identity verification checks validate every participant against national identity databases."
  },
  {
    id: "encrypted-data",
    title: "Encrypted data",
    description: "Enterprise-grade AES-256 encryption protects all sensitive personal data, transactions, and session tokens."
  },
  {
    id: "audit-trail",
    title: "Audit trail",
    description: "Immutable transaction ledgers provide verifiable records for every deposit, distribution, and allocation."
  },
  {
    id: "regulated-custody",
    title: "Regulated custody",
    description: "Investor capital is held in segregated accounts overseen by licensed institutional custodians and trustees."
  }
];

/**
 * 9. GET THE APP
 * Status: PENDING CLIENT COPY (App Store and Google Play URLs are dynamic from /public/settings)
 * - heading: Temporary placeholder pending client copy.
 * - subheading: Temporary placeholder pending client copy.
 * - qrLabel: "Scan to download"
 */
export const getTheAppContent = {
  heading: "Manage your portfolio on the move",
  subheading: "Monitor active plans, receive distribution alerts, and manage your wallet seamlessly with the Meseg Capital mobile app.",
  qrLabel: "Scan to download"
};

/**
 * 10. QUESTIONS (FAQ)
 * Status: PENDING CLIENT COPY
 * Exactly six items in accordion.
 * - All questions and answers: Temporary placeholders pending client legal and financial claims.
 */
export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is Meseg Capital and how does it protect investor funds?",
    answer: "Meseg Capital is a digital investment platform providing access to secured, asset-backed commercial opportunities. All investment vehicles operate with licensed trustees and segregated partner custodian accounts."
  },
  {
    id: "faq-2",
    question: "What is the minimum amount required to start investing?",
    answer: "Minimum investment amounts vary by plan, starting from as low as ₦25,000 for short-term opportunities. Each plan card explicitly displays its minimum entry threshold."
  },
  {
    id: "faq-3",
    question: "When and how are investment returns distributed?",
    answer: "Distributions are paid according to each plan's stated schedule—monthly, quarterly, or upon maturity—directly to your connected Nigerian bank account or wallet balance."
  },
  {
    id: "faq-4",
    question: "Can I withdraw my principal capital before the maturity date?",
    answer: "Each plan has a defined lock-in duration to support underlying asset operations. Early liquidation guidelines are outlined within the specific offering terms of each product."
  },
  {
    id: "faq-5",
    question: "How does the Meseg referral programme work?",
    answer: "When invited investors register using your referral link and fund a qualified plan, you receive a percentage incentive credited directly to your investor account balance."
  },
  {
    id: "faq-6",
    question: "Is my personal data and banking information secure?",
    answer: "Yes. All sensitive investor data is encrypted at rest and in transit using 256-bit encryption. Payment processing is handled by licensed and PCI-DSS certified payment infrastructure partners."
  }
];

/**
 * 11. CLOSING BAND
 * Status: PENDING CLIENT COPY
 * - headline: Temporary placeholder pending client copy.
 * - ctaText: "Get started" (Canonical specification)
 */
export const closingBandContent = {
  headline: "Start building your disciplined investment portfolio today",
  ctaText: "Get started"
};

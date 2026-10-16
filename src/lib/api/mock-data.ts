import { ProductsResponse, PublicSettings, Terms } from './types';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const defaultTeamMembers: TeamMember[] = [
  {
    id: "akinmeji-segun-james",
    name: "Akinmeji Segun James",
    role: "MD/CEO",
    bio: "Over 15 years as a business executive, corporate leader, and logistics professional with strong experience spanning banking, audit and compliance, haulage operations, and investment management. He leads a team of seasoned professionals and continues to drive the company's strategic growth through strong governance, business development, and operational excellence.",
    image: "/images/about/akinmeji-segun-james.jpg",
  },
  {
    id: "akinmeji-mercy-osariemen",
    name: "Akinmeji Mercy Osariemen",
    role: "Director",
    bio: "Brings over 15 years of experience across banking, accounting, and corporate administration. Provides oversight in corporate governance, regulatory compliance, and administrative coordination, supporting sound decision-making and efficient operations at Meseg Capital Investment Ltd.",
    image: "/images/about/akinmeji-mercy-osariemen.jpg",
  },
  {
    id: "tajudeen-atanda-raji",
    name: "Tajudeen Atanda Raji",
    role: "Head of Operations",
    bio: "Brings over 26 years of experience in sales, marketing, business administration, and operations management. Leads operational strategy, efficiency, and revenue growth at Meseg Capital Investment Ltd, supporting business expansion and long-term growth.",
    image: "/images/about/tajudeen-atanda-raji.jpg",
  },
  {
    id: "olumuyiwa-o-matthew",
    name: "Dr Olumuyiwa O. Matthew",
    role: `Director\nBusiness Strategy & Development`,
    bio: "Brings over 17 years of experience in business strategy, technology, and organisational development, with extensive UK and international exposure. Provides strategic leadership at Meseg Capital Investment Ltd, supporting business growth, digital transformation, operational improvement, and strategic development within the company's oil and gas sector focus.",
    image: "/images/about/olumuyiwa-o-matthew.jpg",
  },
  {
    id: "oladimeji-segun-esho",
    name: "Oladimeji Segun Esho",
    role: "Supervisor Termac Operations",
    bio: "Over 35 years of hands-on experience in downstream oil and gas, petroleum distribution, depot operations, and fleet logistics. Oversees Termac operations at Meseg Capital Investment Ltd, leveraging extensive industry expertise in supply chain management, regulatory compliance, fleet operations, and petroleum distribution.",
    image: "/images/about/oladimeji-segun-esho.jpg",
  },
];

/**
 * Isolated mock data matching the exact canonical shapes specified in the product specification.
 * No extra fields have been added.
 */

export const mockProductsResponse: ProductsResponse = {
  data: [
    {
      id: "prod_01_fixed_yield",
      name: "Meseg High-Yield Growth Note",
      slug: "meseg-high-yield-growth-note",
      duration_months: 12,
      distribution_rate: 18.5,
      distribution_frequency: "Quarterly",
      min_amount: 5000000, // ₦50,000 in kobo
      max_amount: 500000000, // ₦5,000,000 in kobo
      referral_percent: 2.5,
      capacity_limit: 10000000000, // ₦100,000,000 in kobo
      capacity_used: 7250000000, // ₦72,500,000 in kobo (72.5%)
      is_full: false,
      status: "active"
    },
    {
      id: "prod_02_agri_income",
      name: "Commercial Agribusiness Asset Fund",
      slug: "commercial-agribusiness-asset-fund",
      duration_months: 6,
      distribution_rate: 14.0,
      distribution_frequency: "Monthly",
      min_amount: 2500000, // ₦25,000 in kobo
      max_amount: 200000000, // ₦2,000,000 in kobo
      referral_percent: 2.0,
      capacity_limit: 5000000000, // ₦50,000,000 in kobo
      capacity_used: 4800000000, // ₦48,000,000 in kobo (96%)
      is_full: false,
      status: "active"
    },
    {
      id: "prod_03_infra_credit",
      name: "Secured Infrastructure Debt Trust",
      slug: "secured-infrastructure-debt-trust",
      duration_months: 24,
      distribution_rate: 22.0,
      distribution_frequency: "Bi-annually",
      min_amount: 10000000, // ₦100,000 in kobo
      max_amount: 1000000000, // ₦10,000,000 in kobo
      referral_percent: 3.0,
      capacity_limit: 25000000000, // ₦250,000,000 in kobo
      capacity_used: 25000000000, // 100% full
      is_full: true,
      status: "active"
    },
    {
      id: "prod_04_draft_fund",
      name: "Archived Expansion Series",
      slug: "archived-expansion-series",
      duration_months: 9,
      distribution_rate: 11.5,
      distribution_frequency: "Monthly",
      min_amount: 5000000,
      max_amount: 50000000,
      referral_percent: 1.5,
      capacity_limit: 2000000000,
      capacity_used: 500000000,
      is_full: false,
      status: "inactive" // MUST NOT be rendered
    }
  ]
};

export const mockPublicSettings: PublicSettings = {
  rc_number: "RC 1948201",
  sec_registration_number: "SEC/CMO/2023/00482",
  referral_percent: 2.5,
  ios_app_url: "https://apps.apple.com/ng/app/meseg-capital/id16492048",
  android_app_url: "https://play.google.com/store/apps/details?id=ng.mesegcapital.app",
  support_email: "support@mesegcapital.com",
  support_phone: "+234 8061486142",
  whatsapp_url: "https://wa.me/2348061486142",
  address: "Plot 4 Jamil Oloto st, Magodo Phase 1, Isheri, Lagos, Nigeria",
  socials: {
    x: "https://x.com/mesegcapital",
    instagram: "https://instagram.com/mesegcapital",
    facebook: "https://facebook.com/mesegcapital",
    linkedin: "https://linkedin.com/company/mesegcapital"
  }
};

export const mockTerms: Terms[] = [
  {
    id: "terms_01_membership",
    title: "1. Membership & Eligibility",
    text: `MEIM (Meseg Energy Investment Membership) is a private investment membership platform operated by Meseg Capital Investment Ltd. Membership is restricted exclusively to immediate family members, personal friends, and direct business associates of the founder/company leadership. 
          the organization reserves the right to request verification of this relationship.
          Management may decline, suspend, or terminate an application or membership where eligibility, verification, compliance, security, or other applicable requirements are not satisfied.`
  },
  {
    id: "terms_02_kyc",
    title: "2. KYC & Verification",
    text: `Investors are required to provide information and documents reasonably necessary for identity verification and applicable Know Your Customer (KYC) and anti-money laundering (AML) procedures.
          Depending on applicable requirements, this may include government-issued identification, NIN, proof of address, personal information, and supporting documentation.
          An investment account may remain restricted until required verification has been completed and approved.
          Investors are responsible for ensuring that information supplied to the platform is accurate, current, and complete. False, misleading, or fraudulent information may result in suspension or termination.`
  },
  {
    id: "terms_03_investment",
    title: "3. Investment Terms",
    text: `Investors may select from the investment levels and terms made available on the platform. Each investment is recorded separately and governed by the applicable terms displayed and accepted when the investment is created.
Unless otherwise stated for a particular investment, investments have a 12-month (365-day) tenure.
The applicable investment amount, benefit rate, payout frequency, commencement date, maturity date, and other relevant terms are recorded against the individual investment.
Where scheduled benefits apply, the payout frequency selected at investment creation applies to that investment in accordance with its applicable terms.
Investors may hold more than one investment where permitted. Each investment is independently tracked and may have its own certificate, tenure, payout schedule, and maturity date.
A digital investment or ownership certificate may be issued for a successfully activated investment.`
  },
  {
    id: "terms_04_refund",
    title: "4. Refund, Cancellation & Early Withdrawal",
    text: `Investment payments are made in respect of a selected investment plan and are subject to the applicable investment terms. Once an investment has been successfully funded and activated, it is subject to its agreed investment tenure.

Investment payments are not ordinarily refundable or cancellable during the investment tenure.

In exceptional circumstances, an investor may request early withdrawal by submitting a written request at least 30 days before the requested withdrawal date. All early withdrawal requests are subject to Management review and approval.

Where an early withdrawal is approved, applicable deductions may include reversal of any referral incentive associated with the investment and forfeiture of 30% of accrued but unpaid investment returns.

Payment or transaction processing fees, where applicable, may be non-refundable once a payment has been successfully processed.

Where an investor believes that a payment was made in error, duplicated, or incorrectly credited, the investor should contact support promptly and provide the relevant transaction or payment reference for review.

For refund, payment-error, or early-withdrawal enquiries, contact support@mesegcapitalinvestment.com.`
  },
  {
    id: "terms_05_referral",
    title: "5. Referral Programme",
    text: `The platform may provide a referral programme through which an existing eligible member can refer a new participant.

A referral reward is intended for qualifying new members only. Self-referrals, duplicate accounts, fraudulent referrals, or other attempts to manipulate the referral programme are not permitted.

A referral becomes eligible for a reward only after the referred participant has completed required verification and successfully funded the qualifying investment in accordance with the applicable referral conditions.

The referral reward is a one-time reward associated with a qualifying new member and is not payable merely because an invitation or referral link was generated or used.

Where an investment connected to a referral is subsequently approved for early withdrawal, any applicable referral incentive may be reversed in accordance with the early-withdrawal terms.`
  },
  {
    id: "terms_06_payments",
    title: "6. Payments & Wallets",
    text: `Investment payments are processed through payment methods made available on the platform. An investment is activated only after the platform receives and validates the applicable payment information.

Investors must use payment details and accounts belonging to them or otherwise authorized for the transaction. The platform may require additional verification where a payment appears inconsistent, incomplete, duplicated, or potentially fraudulent.

The platform may maintain separate wallet balances for operational purposes, including Main, Capital, Interest/Benefit, and Referral Reward wallets.

Wallet balances represent the current recorded state of the relevant account. Transaction and ledger records are maintained to provide a history of financial activity.

Investors should not treat a displayed wallet balance as final where a transaction is pending, under review, reversed, or subject to an unresolved payment issue.`
  },
  {
    id: "terms_07_withdrawals",
    title: "7. Withdrawals",
    text: `Eligible funds may be withdrawn through the withdrawal process provided by the platform.

A withdrawal request may require the investor to provide or confirm relevant payout details. The platform may verify the request and associated account information before processing it.

Withdrawal requests are subject to applicable eligibility conditions, account status, available balance, verification requirements, and relevant investment terms.

Where withdrawals are processed by bank transfer, Management or an authorized administrator may complete the transfer and update the applicable transaction and ledger records on the platform.

Investors are responsible for ensuring that approved payout details are accurate. The platform may delay or reject a withdrawal where information supplied cannot be adequately verified.`
  },
  {
    id: "terms_08_privacy",
    title: "8. Privacy & Data Protection",
    text: `The platform collects and processes personal and account information necessary to provide its services, administer memberships and investments, perform KYC and compliance procedures, process transactions, communicate with investors, and maintain platform security.

Personal information will be handled in accordance with the platform's applicable Privacy Policy and relevant data protection requirements.

Access to sensitive account and financial information is restricted according to user roles and operational requirements. Investors should keep login credentials confidential and promptly report suspected unauthorized access.

The platform may retain transaction, audit, verification, and related records for legitimate operational, legal, compliance, security, and dispute-resolution purposes.`
  },
  {
    id: "terms_09_risk",
    title: "9. Risk Disclosure",
    text: `Participation in an investment product involves financial and other risks. Past performance or stated investment benefits should not be interpreted as a guarantee of future outcomes unless expressly stated in the applicable investment terms.

Investors should review the applicable investment terms carefully and ensure that they understand the tenure, benefit structure, payout arrangements, early-withdrawal conditions, and other relevant provisions before committing funds.

Investors should obtain independent financial, legal, or professional advice where they consider such advice necessary before making an investment decision.

Nothing in these Service Terms should be interpreted as a guarantee that an investor will experience a particular financial outcome beyond the contractual terms applicable to the specific investment.`
  },
  {
    id: "terms_10_platform",
    title: "10. Platform Use & Account Security",
    text: `Investors must use the platform lawfully and must not attempt to gain unauthorized access, interfere with platform operations, manipulate transactions, create fraudulent accounts, or use the service for unlawful purposes.

Investors are responsible for maintaining the confidentiality of login credentials and for notifying the platform promptly of suspected unauthorized access or suspicious account activity.

The platform may restrict or suspend access where necessary to protect investors, financial records, platform infrastructure, or the integrity of the service.`
  },
  {
    id: "terms_11_records",
    title: "11. Records, Audit & System Administration",
    text: `The platform maintains records of relevant account, investment, payment, wallet, withdrawal, referral, verification, and administrative activities.

Financial transactions should be recorded through appropriate transaction and ledger entries. Where an error is identified, the platform may use an adjustment or reversal process rather than deleting the original financial record.

Administrative and system activities may be logged for accountability, security, audit, dispute resolution, and operational purposes.

Automated system processes may be used to monitor investment schedules, benefit calculations, maturity dates, capitalization limits, notifications, and other recurring platform activities.`
  },
  {
    id: "terms_12_capitalization",
    title: "12. Capitalization Limit",
    text: `The platform operates subject to a capitalization limit of ₦50,000,000,000 (Fifty Billion Naira), or such other limit as may be formally adopted by Management and reflected in the applicable platform configuration and investment terms.

The capitalization limit is intended to control the aggregate investment exposure administered through the platform. Investments may be subject to availability and system validation against the applicable limit.`
  },
  {
    id: "terms_13_changes",
    title: "13. Changes to the Service Terms",
    text: `Meseg Capital Investment Ltd may update these Service Terms where necessary to reflect changes in the platform, business operations, applicable requirements, or other legitimate operational needs.

Where an update materially affects an investor's rights or obligations, the updated terms may be presented for acknowledgement or acceptance as required.

The version of the terms accepted by an investor, together with the date and time of acceptance, may be retained as part of the platform's records.`
  },
  {
    id: "terms_14_acceptance",
    title: "14. Terms Acceptance",
    text: `By creating an account, completing registration, or proceeding with an investment through the MEIM Investment Management Platform, the users confirm that they have read and understood the applicable Service Terms and agree to be bound by them.

Before making an investment, the investor is required to accept the applicable terms and conditions presented by the platform. Acceptance may be recorded together with the relevant terms version, investor account, date, and time.

If an investor does not agree with these Service Terms or the applicable investment terms, they should not proceed with the relevant service or investment transaction.

For questions concerning these Service Terms, investments, refunds, early withdrawal, or account matters, contact: contact@mesegcapitalinvestment.com.`
  },
];

import React from 'react';
import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactDetailsAndForm from '@/components/contact/ContactDetailsAndForm';
import ReceptionSection from '@/components/contact/ReceptionSection';
import ContactPartnershipCta from '@/components/contact/ContactPartnershipCta';

export const metadata: Metadata = {
  title: 'Contact Us — MESEG Capital Investment Ltd',
  description:
    'Whether you are exploring a commercial supply relationship, logistics requirement, property opportunity, agricultural partnership, or another business opportunity, our team is ready to hear from you.',
  openGraph: {
    title: 'Contact Us — MESEG Capital Investment Ltd',
    description: 'Let’s Build Something Valuable Together.',
    url: '/contact',
    siteName: 'MESEG Capital Investment Ltd',
    images: [
      {
        url: '/images/contact/contact-reception.png',
        width: 858,
        height: 411,
        alt: 'MESEG Capital Investment Ltd Contact',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* 2. Contact Hero */}
      <ContactHero />

      {/* 3. Company Information and Get In Touch form */}
      <ContactDetailsAndForm />

      {/* 4. Large Reception Image section */}
      <ReceptionSection />

      {/* 5. Partnership CTA with sector collage */}
      <ContactPartnershipCta />
    </>
  );
}

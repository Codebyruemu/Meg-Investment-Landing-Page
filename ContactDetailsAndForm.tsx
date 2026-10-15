'use client';

import React, { useState } from 'react';
import {
  BuildingIcon,
  RcBadgeIcon,
  MapPinIcon,
  PhoneHandsetIcon,
  MailEnvelopeIcon,
  ClockHoursIcon,
  SocialGroupIcon,
  LinkedInGreenIcon,
  InstagramGreenIcon,
  FacebookGreenIcon,
  XGreenIcon,
  ChipOilGasIcon,
  ChipLogisticsIcon,
  ChipAgricultureIcon,
  ChipRealEstateIcon,
  ChipBusinessDevIcon,
  ChipGeneralEnquiryIcon,
  ArrowRightLineIcon,
} from './ContactIcons';

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

const INTEREST_OPTIONS = [
  { id: 'oil-gas', label: 'Oil & Gas', icon: ChipOilGasIcon },
  { id: 'logistics', label: 'Logistics', icon: ChipLogisticsIcon },
  { id: 'agriculture', label: 'Agriculture', icon: ChipAgricultureIcon },
  { id: 'real-estate', label: 'Real Estate', icon: ChipRealEstateIcon },
  { id: 'business-dev', label: 'Business Development', icon: ChipBusinessDevIcon },
  { id: 'general-enquiry', label: 'General Enquiry', icon: ChipGeneralEnquiryIcon },
];

async function submitFeedback(formData: FormState) {
  const backendData = {
    fullname: formData.fullName,
    company: formData.company,
    email: formData.email,
    phoneno: formData.phone,
    area_of_intrest: formData.interest,
    message: formData.message,
  };

  const response = await fetch("/api/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(backendData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.detail || "Failed to submit feedback."
    );
  }

  return result;
}

export default function ContactDetailsAndForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionNotice, setSubmissionNotice] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleInterestSelect = (label: string) => {
    setFormData((prev) => ({ ...prev, interest: label }));
    if (errors.interest) {
      setErrors((prev) => ({ ...prev, interest: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select an area of interest.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionNotice(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await submitFeedback(formData);
      setSubmissionNotice(
        'Thank you for your enquiry! We have received your message and will get back to you shortly.'
      );
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
    } catch (error) {
      setSubmissionNotice(
        error instanceof Error
          ? error.message
          : 'An error occurred while submitting your enquiry. Please try again or contact us directly at info@mesegcapital.com or +234 8061486142.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-main-section" id="contact-details" aria-label="Company Information and Contact Form">
      <div className="container contact-container">
        <div className="contact-main-grid">
          {/* Left Column: Company Information */}
          <div className="contact-info-col">
            <h2 className="contact-info-eyebrow">COMPANY INFORMATION</h2>

            {/* Row 1: Business Name */}
            <div className="contact-info-item">
              <div className="contact-info-icon-circle" aria-hidden="true">
                <BuildingIcon size={19} />
              </div>
              <div className="contact-info-details">
                <div className="contact-info-label">Business Name</div>
                <div className="contact-info-value">MESEG CAPITAL INVESTMENT LTD</div>
              </div>
            </div>

            {/* Row 2: RC Number */}
            <div className="contact-info-item">
              <div className="contact-info-icon-circle" aria-hidden="true">
                <RcBadgeIcon size={19} />
              </div>
              <div className="contact-info-details">
                <div className="contact-info-label">RC Number</div>
                <div className="contact-info-value">1246676</div>
              </div>
            </div>

            {/* Row 3: Head Office */}
            <div className="contact-info-item">
              <div className="contact-info-icon-circle" aria-hidden="true">
                <MapPinIcon size={19} />
              </div>
              <div className="contact-info-details">
                <div className="contact-info-label">Head Office</div>
                <div className="contact-info-value">
                  Plot 4, Jamiu Oloto St,<br />
                  Magodo phase 1, Isheri Lagos State
                </div>
              </div>
            </div>

            {/* Row 4: Phone */}
            <div className="contact-info-item">
              <div className="contact-info-icon-circle" aria-hidden="true">
                <PhoneHandsetIcon size={19} />
              </div>
              <div className="contact-info-details">
                <div className="contact-info-label">Phone</div>
                <div className="contact-info-value">
                  <a href="tel:+2348061486142" className="contact-link">
                    +234 8061486142
                  </a>
                </div>
              </div>
            </div>

            {/* Row 5: Email */}
            <div className="contact-info-item">
              <div className="contact-info-icon-circle" aria-hidden="true">
                <MailEnvelopeIcon size={19} />
              </div>
              <div className="contact-info-details">
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">
                  <a href="mailto:info@mesegcapital.com" className="contact-link">
                    info@mesegcapital.com
                  </a>
                </div>
              </div>
            </div>

            {/* Row 6: Business Hours */}
            <div className="contact-info-item">
              <div className="contact-info-icon-circle" aria-hidden="true">
                <ClockHoursIcon size={19} />
              </div>
              <div className="contact-info-details">
                <div className="contact-info-label">Business Hours</div>
                <div className="contact-info-value">Monday - Friday | 9:00 AM - 5:00 PM</div>
              </div>
            </div>

            {/* Row 7: Social Media */}
            <div className="contact-info-item">
              <div className="contact-info-icon-circle" aria-hidden="true">
                <SocialGroupIcon size={19} />
              </div>
              <div className="contact-info-details">
                <div className="contact-info-label">Social Media</div>
                <div className="contact-social-icons">
                  <a
                    href="https://linkedin.com/company/mesegcapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="LinkedIn"
                  >
                    <LinkedInGreenIcon size={22} />
                  </a>
                  <a
                    href="https://instagram.com/mesegcapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="Instagram"
                  >
                    <InstagramGreenIcon size={22} />
                  </a>
                  <a
                    href="https://facebook.com/mesegcapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="Facebook"
                  >
                    <FacebookGreenIcon size={22} />
                  </a>
                  <a
                    href="https://x.com/mesegcapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="X"
                  >
                    <XGreenIcon size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="contact-form-card" id="contact-form">
            <h3 className="contact-form-title">Get In Touch</h3>

            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1: Full Name & Company */}
              <div className="contact-form-row">
                <div className="contact-field-group">
                  <label htmlFor="fullName" className="contact-field-label">
                    Full Name <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`contact-input ${errors.fullName ? 'has-error' : ''}`}
                    required
                  />
                  {errors.fullName && <span className="contact-field-error">{errors.fullName}</span>}
                </div>

                <div className="contact-field-group">
                  <label htmlFor="company" className="contact-field-label">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Phone Number */}
              <div className="contact-form-row">
                <div className="contact-field-group">
                  <label htmlFor="email" className="contact-field-label">
                    Email Address <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={`contact-input ${errors.email ? 'has-error' : ''}`}
                    required
                  />
                  {errors.email && <span className="contact-field-error">{errors.email}</span>}
                </div>

                <div className="contact-field-group">
                  <label htmlFor="phone" className="contact-field-label">
                    Phone Number <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+234 801 234 5678"
                    className={`contact-input ${errors.phone ? 'has-error' : ''}`}
                    required
                  />
                  {errors.phone && <span className="contact-field-error">{errors.phone}</span>}
                </div>
              </div>

              {/* Row 3: Area of Interest */}
              <div className="contact-field-group" style={{ marginBottom: '16px' }}>
                <span id="interest-group-label" className="contact-field-label">
                  Area of Interest <span className="contact-required-star">*</span>
                </span>
                <div
                  className="contact-interest-grid"
                  role="radiogroup"
                  aria-labelledby="interest-group-label"
                >
                  {INTEREST_OPTIONS.map((opt) => {
                    const IconComponent = opt.icon;
                    const isSelected = formData.interest === opt.label;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={0}
                        onClick={() => handleInterestSelect(opt.label)}
                        className={`contact-interest-chip ${isSelected ? 'is-selected' : ''}`}
                      >
                        <span className="contact-chip-icon">
                          <IconComponent size={16} color={isSelected ? '#0b6b3a' : '#0b6b3a'} />
                        </span>
                        <span className="contact-chip-label">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.interest && <span className="contact-field-error">{errors.interest}</span>}
              </div>

              {/* Row 4: Message */}
              <div className="contact-field-group">
                <label htmlFor="message" className="contact-field-label">
                  Message <span className="contact-required-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your enquiry or opportunity..."
                  className={`contact-textarea ${errors.message ? 'has-error' : ''}`}
                  required
                />
                {errors.message && <span className="contact-field-error">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                <ArrowRightLineIcon size={16} />
              </button>

              {/* Honest Notice for Missing API Integration */}
              {submissionNotice && (
                <div className="contact-submission-notice" role="status">
                  <p>{submissionNotice}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export function MesegLogo({
  className = "h-10 w-auto",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`meseg-logo-wrapper ${className}`}
      style={{ display: "inline-flex", alignItems: "center", ...style }}
    >
      <Image
        src="/images/meseg-logo.jpg"
        alt="Meseg Capital Investment Ltd."
        width={1416}
        height={1224}
        priority
        style={{ height: "44px", width: "auto", display: "block" }}
      />
    </div>
  );
}

export function AppStoreBadge() {
  return (
    <div className="store-badge-box">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.13 16.69C20.1 16.79 19.72 18.11 18.71 19.5ZM15.95 4.54C16.58 3.77 17.01 2.7 16.89 1.63C15.97 1.67 14.86 2.25 14.2 3.02C13.62 3.69 13.11 4.78 13.25 5.83C14.28 5.91 15.32 5.31 15.95 4.54Z" />
      </svg>
      <div className="store-badge-text">
        <span className="store-badge-sub">Download on the</span>
        <span className="store-badge-main">App Store</span>
      </div>
    </div>
  );
}

export function GooglePlayBadge() {
  return (
    <div className="store-badge-box">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3.609 1.814L13.793 12 3.61 22.186c-.328-.278-.545-.716-.545-1.229V3.043c0-.513.217-.951.544-1.229zM15.207 13.414l2.455-2.455-11.87-6.852 9.415 9.307zM17.662 10.959c.642.371.642.973 0 1.344l-2.029 1.171-2.254-2.254 2.254-2.254 2.029 1.171zM5.792 20.485l11.87-6.852-2.455-2.455-9.415 9.307z" />
      </svg>
      <div className="store-badge-text">
        <span className="store-badge-sub">GET IT ON</span>
        <span className="store-badge-main">Google Play</span>
      </div>
    </div>
  );
}

export function PaystackMark() {
  return (
    <div className="partner-mark-box" title="Paystack Integrated Partner">
      <span className="partner-badge-text">
        <span style={{ color: "#097E9E", fontWeight: 700 }}>pay</span>stack
      </span>
    </div>
  );
}

export function FlutterwaveMark() {
  return (
    <div className="partner-mark-box" title="Flutterwave Integrated Partner">
      <span className="partner-badge-text">
        <span style={{ color: "#D96E14", fontWeight: 700 }}>flutter</span>wave
      </span>
    </div>
  );
}

export function BankPartnerMark({
  name = "Settlement Banks",
}: {
  name?: string;
}) {
  return (
    <div className="partner-mark-box" title={`${name} Integrated`}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
      </svg>
      <span>{name}</span>
    </div>
  );
}

export function SecurityIcon({ type }: { type: string }) {
  const strokeWidth = 1.75;
  switch (type) {
    case "identity-verification":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 11l-3 3-2-2" />
        </svg>
      );
    case "encrypted-data":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "audit-trail":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "regulated-custody":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export function FeatureIcon({ icon }: { icon: string }) {
  const strokeWidth = 1.75;
  switch (icon) {
    case "shield":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "trend-up":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "landmark":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="3" y1="22" x2="21" y2="22" />
          <line x1="6" y1="18" x2="6" y2="11" />
          <line x1="10" y1="18" x2="10" y2="11" />
          <line x1="14" y1="18" x2="14" y2="11" />
          <line x1="18" y1="18" x2="18" y2="11" />
          <polygon points="12 2 20 7 4 7" />
        </svg>
      );
    case "bar-chart":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    default:
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export function QrCodeGraphic() {
  return (
    <div className="qr-code-box">
      <svg
        width="84"
        height="84"
        viewBox="0 0 100 100"
        fill="none"
        aria-label="QR code graphic"
      >
        <rect width="100" height="100" rx="4" fill="#FFFFFF" />
        {/* Top-left marker */}
        <rect x="8" y="8" width="28" height="28" rx="2" fill="#094034" />
        <rect x="14" y="14" width="16" height="16" rx="1" fill="#FFFFFF" />
        <rect x="18" y="18" width="8" height="8" fill="#094034" />
        {/* Top-right marker */}
        <rect x="64" y="8" width="28" height="28" rx="2" fill="#094034" />
        <rect x="70" y="14" width="16" height="16" rx="1" fill="#FFFFFF" />
        <rect x="74" y="18" width="8" height="8" fill="#094034" />
        {/* Bottom-left marker */}
        <rect x="8" y="64" width="28" height="28" rx="2" fill="#094034" />
        <rect x="14" y="70" width="16" height="16" rx="1" fill="#FFFFFF" />
        <rect x="18" y="74" width="8" height="8" fill="#094034" />
        {/* Crisp QR data cells */}
        <rect x="42" y="12" width="6" height="6" fill="#094034" />
        <rect x="52" y="18" width="6" height="6" fill="#094034" />
        <rect x="42" y="28" width="6" height="6" fill="#094034" />
        <rect x="12" y="44" width="6" height="6" fill="#094034" />
        <rect x="24" y="48" width="6" height="6" fill="#094034" />
        <rect x="36" y="42" width="6" height="6" fill="#094034" />
        <rect x="48" y="44" width="6" height="6" fill="#094034" />
        <rect x="60" y="42" width="6" height="6" fill="#094034" />
        <rect x="72" y="46" width="6" height="6" fill="#094034" />
        <rect x="84" y="42" width="6" height="6" fill="#094034" />
        <rect x="42" y="60" width="6" height="6" fill="#094034" />
        <rect x="52" y="56" width="6" height="6" fill="#094034" />
        <rect x="64" y="64" width="6" height="6" fill="#094034" />
        <rect x="76" y="62" width="6" height="6" fill="#094034" />
        <rect x="46" y="74" width="6" height="6" fill="#094034" />
        <rect x="62" y="78" width="6" height="6" fill="#094034" />
        <rect x="78" y="76" width="6" height="6" fill="#094034" />
      </svg>
    </div>
  );
}

export function PhoneMockupGraphic() {
  return (
    <div className="phone-mockup-wrapper">
      <svg
        width="270"
        height="500"
        viewBox="0 0 280 520"
        fill="none"
        className="phone-svg"
        aria-label="Mobile app portfolio preview"
      >
        {/* Clean, realistic device frame */}
        <rect
          x="4"
          y="4"
          width="272"
          height="512"
          rx="36"
          fill="#0A0E12"
          stroke="#252D34"
          strokeWidth="2.5"
        />
        <rect x="10" y="10" width="260" height="500" rx="30" fill="#091E18" />
        {/* Minimal speaker bar */}
        <rect x="100" y="18" width="80" height="5" rx="2.5" fill="#1C2825" />

        {/* App Content */}
        <g transform="translate(24, 48)">
          <text
            x="0"
            y="14"
            fill="#7D9890"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            TOTAL PORTFOLIO VALUE
          </text>
          <text
            x="0"
            y="40"
            fill="#FFFFFF"
            fontSize="22"
            fontWeight="700"
            letterSpacing="-0.02em"
          >
            ₦ 18,450,000
          </text>

          <rect
            x="0"
            y="52"
            width="108"
            height="20"
            rx="4"
            fill="rgba(217, 119, 6, 0.15)"
          />
          <text x="8" y="66" fill="#F59E0B" fontSize="10" fontWeight="600">
            +18.5% Annualized
          </text>

          {/* Quick Actions */}
          <rect x="0" y="86" width="110" height="34" rx="6" fill="#0D4B3D" />
          <text
            x="55"
            y="108"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="600"
            textAnchor="middle"
          >
            Add Money
          </text>
          <rect
            x="122"
            y="86"
            width="110"
            height="34"
            rx="6"
            fill="rgba(255,255,255,0.06)"
          />
          <text
            x="177"
            y="108"
            fill="#D1DDD9"
            fontSize="11"
            fontWeight="500"
            textAnchor="middle"
          >
            Withdraw
          </text>

          {/* Active Holding Card */}
          <rect
            x="0"
            y="136"
            width="232"
            height="126"
            rx="8"
            fill="#0E2E25"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <text
            x="14"
            y="160"
            fill="#F59E0B"
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.06em"
          >
            HOLDING
          </text>
          <text x="14" y="180" fill="#FFFFFF" fontSize="13" fontWeight="600">
            Commercial Agribusiness Fund
          </text>

          <text x="14" y="204" fill="#7D9890" fontSize="10">
            Principal
          </text>
          <text x="14" y="222" fill="#FFFFFF" fontSize="14" fontWeight="600">
            ₦ 5,000,000
          </text>

          <text x="156" y="204" fill="#7D9890" fontSize="10">
            Target Yield
          </text>
          <text x="156" y="222" fill="#34D399" fontSize="14" fontWeight="700">
            14.0% p.a.
          </text>

          <rect
            x="14"
            y="240"
            width="204"
            height="4"
            rx="2"
            fill="rgba(255,255,255,0.08)"
          />
          <rect x="14" y="240" width="168" height="4" rx="2" fill="#10B981" />

          {/* Recent Payouts */}
          <text
            x="0"
            y="286"
            fill="#7D9890"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            SCHEDULED DISTRIBUTIONS
          </text>
          <rect
            x="0"
            y="296"
            width="232"
            height="42"
            rx="6"
            fill="rgba(255,255,255,0.03)"
          />
          <circle cx="20" cy="317" r="9" fill="#0D4B3D" />
          <text x="38" y="314" fill="#FFFFFF" fontSize="11" fontWeight="500">
            Quarterly Payout
          </text>
          <text x="38" y="327" fill="#5F7A72" fontSize="9">
            To GTBank •••• 4128
          </text>
          <text
            x="220"
            y="321"
            fill="#34D399"
            fontSize="11"
            fontWeight="600"
            textAnchor="end"
          >
            +₦58,333
          </text>

          <rect
            x="0"
            y="346"
            width="232"
            height="42"
            rx="6"
            fill="rgba(255,255,255,0.03)"
          />
          <circle cx="20" cy="367" r="9" fill="#0D4B3D" />
          <text x="38" y="364" fill="#FFFFFF" fontSize="11" fontWeight="500">
            Referral Credit
          </text>
          <text x="38" y="377" fill="#5F7A72" fontSize="9">
            Wallet Balance
          </text>
          <text
            x="220"
            y="371"
            fill="#F59E0B"
            fontSize="11"
            fontWeight="600"
            textAnchor="end"
          >
            +₦25,000
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ==========================================================================
   ENERGY LANDING PAGE ICONS
   ========================================================================== */

export function ArrowRightIcon({
  className,
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function MarketAccessIcon({
  size = 26,
  color = "#0B6B3A",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function IndustryExpertiseIcon({
  size = 26,
  color = "#0B6B3A",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

export function InvestmentManagementIcon({
  size = 26,
  color = "#0B6B3A",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <polyline points="8 15 12 10 16 13 19 8" />
    </svg>
  );
}

export function DropletIcon({
  size = 20,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

export function PipelineIcon({
  size = 20,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="8" width="20" height="8" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="10" y1="2" x2="14" y2="2" />
    </svg>
  );
}

export function FuelDispenserIcon({
  size = 20,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="12" height="18" rx="2" />
      <line x1="3" y1="9" x2="15" y2="9" />
      <path d="M15 7h2a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9a4 4 0 0 0-4-4h-4" />
      <circle cx="9" cy="14" r="1.5" />
    </svg>
  );
}

export function WholesaleIcon({
  size = 20,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
      <line x1="7" y1="10" x2="7" y2="20" />
      <line x1="17" y1="10" x2="17" y2="20" />
    </svg>
  );
}

export function FixedReturnIcon({
  size = 28,
  color = "#A7D58A",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <path d="M4 20h16" />
    </svg>
  );
}

export function PassiveModelIcon({
  size = 28,
  color = "#A7D58A",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function FlexiblePayoutsIcon({
  size = 28,
  color = "#A7D58A",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M9 16l2 2 4-4" />
    </svg>
  );
}

export function ShieldCheckIcon({
  size = 28,
  color = "#A7D58A",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function EnergyExposureIcon({
  size = 28,
  color = "#A7D58A",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function ExploreStepIcon({
  size = 22,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function UnderstandStepIcon({
  size = 22,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

export function InvestStepIcon({
  size = 22,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export function ManageStepIcon({
  size = 22,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function TrackStepIcon({
  size = 22,
  color = "#014924",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

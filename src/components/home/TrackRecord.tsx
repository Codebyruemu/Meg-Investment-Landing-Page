export default function TrackRecord() {
  const metrics = [
    {
      value: "₦700M+",
      label: "Capital Invested",
    },
    {
      value: "25+",
      label: "Investment Partners",
    },
    {
      value: "5+",
      label: "Years of Industry Experience",
    },
    {
      value: "100+",
      label: "Successful Transactions",
    },
  ];

  return (
    <section className="mesegco-track-record-section" id="track-record">
      <div className="mesegco-container">
        <div className="mesegco-track-record-layout">
          <div className="mesegco-track-record-intro">
            <span className="mesegco-eyebrow-lime">TRUST & STABILITY</span>
            <h2 className="mesegco-track-record-title">Our Track Record</h2>
            <p className="mesegco-track-record-sub">
              Built on experience, driven by trust.
            </p>
          </div>

          <div className="mesegco-metrics-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="mesegco-metric-item">
                <div className="mesegco-metric-value">{metric.value}</div>
                <div className="mesegco-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

type PricingCardProps = {
  title: string;
  price: string;
  frequency?: string;
  features: string[];
  ctaLabel?: string;
  highlighted?: boolean;
};

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  frequency = "/mo",
  features,
  ctaLabel = "Get started",
  highlighted = false,
}) => {
  const cardStyle: React.CSSProperties = {
    border: highlighted ? "2px solid #7c3aed" : "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 20,
    width: 300,
    boxShadow: highlighted ? "0 8px 24px rgba(124,58,237,0.12)" : undefined,
    background: "#ffffff",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 28, margin: "8px 0" }}>
        <strong>{price}</strong> <span style={{ fontSize: 14 }}>{frequency}</span>
      </p>
      <ul style={{ paddingLeft: 18 }}>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button 
        style={{ 
          marginTop: 12, 
          background: highlighted ? "#7c3aed" : "#111827", 
          color: "#fff", 
          padding: "10px 14px", 
          borderRadius: 6, 
          border: "none", 
          cursor: "pointer" 
        }}
        onClick={() => {
          // Replace with Stripe checkout or in-app flow
          window.location.href = "/signup";
        }}
      >
        {ctaLabel}
      </button>
    </div>
  );
};

export default PricingCard;
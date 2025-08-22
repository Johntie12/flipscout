import React from "react";
import PricingCard from "../components/PricingCard";

const PricingPage: React.FC = () => {
  return (
    <main style={{ display: "flex", gap: 20, padding: 40, justifyContent: "center" }}>
      <PricingCard 
        title="Starter" 
        price="$0" 
        frequency="/mo" 
        features={[
          "10 listings/month",
          "Basic inspection checklist", 
          "Email support"
        ]}
      />
      <PricingCard 
        title="Pro" 
        price="$19" 
        frequency="/mo" 
        features={[
          "Unlimited listings",
          "Detailed inspection report PDF", 
          "Profit estimator",
          "Priority email support"
        ]} 
        highlighted={true}
      />
      <PricingCard 
        title="Business" 
        price="$99" 
        frequency="/mo" 
        features={[
          "Team seats",
          "API access", 
          "Advanced analytics",
          "Phone support"
        ]}
      />
    </main>
  );
};

export default PricingPage;
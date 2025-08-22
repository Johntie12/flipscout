import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>FlipScout vehicle</title>
        <meta name="description" content="Tools to help vehicle flippers find profitable deals" />
      </Head>

      <main style={{ padding: 24 }}>
        <section style={{ maxWidth: 880 }}>
          <h2>Tools to help vehicle flippers find profitable deals</h2>
          <p>
            FlipScout provides inspection checklists, profit estimators, and listing management to help you flip vehicles
            faster and with more confidence.
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
            <a href="/pricing" style={{ padding: "12px 18px", background: "#7c3aed", color: "white", borderRadius: 6, textDecoration: "none" }}>
              Get started
            </a>
            <a href="/contact" style={{ padding: "12px 18px", background: "#e5e7eb", color: "#111827", borderRadius: 6, textDecoration: "none" }}>
              Contact sales
            </a>
          </div>
        </section>

        <section style={{ marginTop: 40 }}>
          <h3>Features</h3>
          <ul>
            <li>Quick inspection checklists</li>
            <li>Profit estimator and fees calculator</li>
            <li>Exportable inspection reports (PDF)</li>
            <li>Team accounts and API access for businesses</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
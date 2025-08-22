import React from "react";
import Head from "next/head";

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact — FlipScout vehicle</title>
      </Head>

      <main style={{ padding: 24, maxWidth: 720 }}>
        <h1>Contact FlipScout</h1>
        <p>If you&apos;d like to talk about partnerships, pricing, or support, use the form below or email us at contact@flipscout.example</p>

        <form action="https://formspree.io/f/your_form_id" method="POST" style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
          <label>
            Name
            <input type="text" name="name" required style={{ width: "100%", padding: 8, marginTop: 6 }} />
          </label>

          <label>
            Email
            <input type="email" name="email" required style={{ width: "100%", padding: 8, marginTop: 6 }} />
          </label>

          <label>
            Message
            <textarea name="message" required rows={6} style={{ width: "100%", padding: 8, marginTop: 6 }}>
            </textarea>
          </label>

          <button type="submit" style={{ padding: "10px 14px", background: "#7c3aed", color: "white", border: "none", borderRadius: 6 }}>
            Send
          </button>
        </form>

        <p style={{ marginTop: 18, color: "#6b7280" }}>
          Note: replace the Formspree form ID with your own (https://formspree.io). Alternatively, replace this form action with an API endpoint once your backend is deployed.
        </p>
      </main>
    </>
  );
};

export default Contact;
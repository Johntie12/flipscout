import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  const analytics = process.env.NEXT_PUBLIC_ANALYTICS || '';

  useEffect(() => {
    if (!analytics) return;

    // Plausible: set NEXT_PUBLIC_ANALYTICS to "plausible=YOUR_SITE_ID"
    if (analytics.startsWith('plausible=')) {
      const site = analytics.split('=')[1];
      const script = document.createElement('script');
      script.setAttribute('defer', '');
      script.setAttribute('data-domain', site);
      script.src = 'https://plausible.io/js/plausible.js';
      document.head.appendChild(script);
      return;
    }

    // Google Analytics: set NEXT_PUBLIC_ANALYTICS to your GA_MEASUREMENT_ID
    if (analytics.startsWith('G-')) {
      const id = analytics;
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(gaScript);

      const inline = document.createElement('script');
      inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}');`;
      document.head.appendChild(inline);
      return;
    }

    // Unknown format: no-op
  }, []);

  return null;
};

export default Analytics;
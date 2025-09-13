import { useEffect } from 'react';
import Head from 'next/head';

export default function Map() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).L) {
      const L = (window as any).L;
      const map = L.map('map').setView([-25.2744, 133.7751], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
      const listings = [
        { name: 'Tesla Model Y', lat: -33.8688, lng: 151.2093, state: 'NSW' },
        { name: 'Kawasaki Ninja 400', lat: -37.8136, lng: 144.9631, state: 'VIC' },
        { name: 'Yamaha Jet Boat', lat: -27.4698, lng: 153.0251, state: 'QLD' },
        { name: 'Nissan Skyline GTR', lat: -31.9505, lng: 115.8605, state: 'WA' },
        { name: 'Toyota Hilux', lat: -34.9285, lng: 138.6007, state: 'SA' },
        { name: 'Subaru Forester', lat: -35.2809, lng: 149.13, state: 'ACT' },
        { name: 'Mazda CX-5', lat: -42.8821, lng: 147.3272, state: 'TAS' },
        { name: 'Jeep Grand Cherokee', lat: -12.4634, lng: 130.8456, state: 'NT' },
      ];
      listings.forEach((item) => {
        L.marker([item.lat, item.lng]).addTo(map).bindPopup(`${item.name} (${item.state})`);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>QuokkaDrive - Map View</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          crossOrigin=""
        ></script>
      </Head>
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold mb-4">Vehicle Listings Map</h1>
          <div id="map" style={{ height: '500px' }}></div>
        </div>
      </main>
    </>
  );
}

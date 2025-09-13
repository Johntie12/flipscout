import { useState } from 'react';
import Head from 'next/head';

export default function Browse() {
  const listings = [
    { id: '1', name: '2023 Tesla Model Y', description: 'Electric SUV with long range.', price: 75000, state: 'New South Wales' },
    { id: '2', name: '2020 Kawasaki Ninja 400', description: 'LAMS-approved sport bike.', price: 7990, state: 'Victoria' },
    { id: '3', name: '2019 Yamaha Jet Boat', description: 'Fast jet boat for lakes and rivers.', price: 23000, state: 'Queensland' },
    { id: '4', name: '2022 Nissan Skyline GTR (Import)', description: 'Rare Japanese import.', price: 100000, state: 'South Australia' },
    { id: '5', name: '2021 Ford Ranger XLT (Double Cab)', description: 'Tough and powerful diesel ute with accessories.', price: 55000, state: 'Western Australia' },
    { id: '6', name: '2018 Holden Commodore', description: 'Classic Aussie sedan with V6 engine.', price: 28000, state: 'Tasmania' },
    { id: '7', name: '2020 Toyota Corolla Hybrid', description: 'Efficient hybrid hatchback.', price: 32000, state: 'New South Wales' },
    { id: '8', name: '2017 Jeep Wrangler', description: 'Off-road SUV built for adventure.', price: 36000, state: 'Northern Territory' },
    { id: '9', name: '2019 BMW X5', description: 'Luxury SUV with performance and comfort.', price: 85000, state: 'Victoria' },
    { id: '10', name: '2022 Hyundai i30', description: 'Reliable and affordable hatchback.', price: 25000, state: 'Australian Capital Territory' },
    { id: '11', name: '2021 Mitsubishi Triton', description: 'Practical dual cab ute for work and play.', price: 45000, state: 'Queensland' },
    { id: '12', name: '2018 Ford Mustang GT', description: 'Iconic muscle car with V8 power.', price: 70000, state: 'Western Australia' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredListings = listings.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Browse Vehicles | QuokkaDrive</title>
      </Head>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold mb-6">Browse Vehicles Across Australia</h1>
          <input
            type="text"
            placeholder="Search by name or state"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mb-6 border rounded"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 shadow">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-slate-600 mb-2">{item.description}</p>
                <p className="text-sm">State: {item.state}</p>
                <p className="text-sm">Price: ${item.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

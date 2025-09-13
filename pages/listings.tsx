import Head from 'next/head';

export default function Listings() {
  const listings = [
    {
      id: '1',
      name: '2023 Tesla Model Y',
      description: 'Electric SUV with long range.',
      price: 75000,
    },
    {
      id: '2',
      name: '2020 Kawasaki Ninja 400',
      description: 'LAMS-approved sport bike.',
      price: 7990,
    },
    {
      id: '3',
      name: '2019 Yamaha Jet Boat',
      description: 'Fast jet boat for lakes and rivers.',
      price: 23000,
    },
    {
      id: '4',
      name: '2022 Nissan Skyline GTR (Import)',
      description: 'Rare Japanese import.',
      price: 100000,
    },
  ];

  return (
    <>
      <Head>
        <title>QuokkaDrive - Listings</title>
        <meta name="description" content="Browse available vehicles" />
      </Head>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-extrabold mb-2">Listings</h1>
          <p className="text-slate-600">Here are some sample vehicles:</p>
        </header>
        <section className="max-w-4xl mx-auto px-6">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded shadow p-4 mb-4">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
              <p className="text-sm text-slate-600">Price: {item.price.toLocaleString()}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

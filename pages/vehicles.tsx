import Head from 'next/head';

export default function Vehicles() {
  const listings = [
    {
      id: '1',
      name: '2023 Tesla Model Y',
      description: 'Electric SUV with long range.',
      price: 75000,
      state: 'New South Wales',
    },
    {
      id: '2',
      name: '2020 Kawasaki Ninja 400',
      description: 'LAMS-approved sport bike.',
      price: 7990,
      state: 'Victoria',
    },
    {
      id: '3',
      name: '2019 Yamaha Jet Boat',
      description: 'Fast jet boat for lakes and rivers.',
      price: 23000,
      state: 'Queensland',
    },
    {
      id: '4',
      name: '2022 Nissan Skyline GTR (Import)',
      description: 'Rare Japanese import.',
      price: 100000,
      state: 'South Australia',
    },
    {
      id: '5',
      name: '2021 Ford Ranger XLT (Double Cab)',
      description: 'Reliable and powerful diesel ute with accessories.',
      price: 55000,
      state: 'Western Australia',
    },
    {
      id: '6',
      name: '2018 Holden Commodore RS-V',
      description: 'Sporty sedan with V6 performance and modern features.',
      price: 28000,
      state: 'Northern Territory',
    },
    {
      id: '7',
      name: '2020 Subaru Outback AWD',
      description: 'Versatile wagon with all-wheel drive and safety tech.',
      price: 39000,
      state: 'Tasmania',
    },
    {
      id: '8',
      name: '2022 Volkswagen Golf GTI',
      description: 'Iconic hot hatch with turbocharged performance.',
      price: 42000,
      state: 'Australian Capital Territory',
    },
    {
      id: '9',
      name: '2020 Hyundai Kona Electric',
      description: 'Compact EV with long range and modern features.',
      price: 45000,
      state: 'Queensland',
    },
    {
      id: '10',
      name: '2019 Toyota Hilux SR5',
      description: 'Durable pickup truck, perfect for work or play.',
      price: 47000,
      state: 'New South Wales',
    },
    {
      id: '11',
      name: '2020 BMW X3 xDrive30i',
      description: 'Premium mid-size SUV with luxury features.',
      price: 65000,
      state: 'Victoria',
    },
    {
      id: '12',
      name: '2019 Harley-Davidson Iron 883',
      description: 'Classic cruiser motorcycle with V-twin power.',
      price: 15000,
      state: 'South Australia',
    },
  ];

  return (
    <>
      <Head>
        <title>QuokkaDrive - Vehicle Listings</title>
        <meta name="description" content="Browse available vehicles across Australia" />
      </Head>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-extrabold mb-2">Vehicles</h1>
          <p className="text-slate-600">Here are some sample vehicles from around Australia:</p>
        </header>
        <section className="max-w-4xl mx-auto px-6">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded shadow p-4 mb-4">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
              <p className="text-sm text-slate-600">State: {item.state}</p>
              <p className="text-sm text-slate-600">Price: ${item.price.toLocaleString()}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

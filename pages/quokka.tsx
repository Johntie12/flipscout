import Head from 'next/head';
import Link from 'next/link';

export default function Quokka() {
  return (
    <>
      <Head>
        <title>QuokkaDrive - Marketplace</title>
        <meta name="description" content="Find your unique vehicle or boat" />
      </Head>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-extrabold mb-2">QuokkaDrive</h1>
          <p className="text-slate-600">Eco-friendly cars, rare imports, and boats – curated for you.</p>
        </header>
        <section className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Browse Categories</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Cars</h3>
              <p className="text-sm text-slate-600">Sedans, SUVs, EVs.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Motorbikes</h3>
              <p className="text-sm text-slate-600">LAMS, Off-road, Sport.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Boats</h3>
              <p className="text-sm text-slate-600">Yachts, Jet boats, Pontoons.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Specialty</h3>
              <p className="text-sm text-slate-600">Rare imports, custom builds.</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/listings">
              <a className="bg-indigo-600 text-white px-4 py-2 rounded">View Listings</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FlipScout — Dashboard</title>
        <meta name="description" content="FlipScout — inventory and deal scouting" />
      </Head>

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="max-w-4xl mx-auto py-12 px-6">
          <h1 className="text-4xl font-extrabold">FlipScout</h1>
          <p className="mt-2 text-slate-600">Scouting tools and dashboards for flipping inventory.</p>
        </header>

        <section className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold">Welcome</h2>
            <p className="mt-2 text-slate-700">
              This scaffold includes Next.js + TypeScript + Tailwind. Connect this frontend to the existing backend APIs or extend with server-side routes.
            </p>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Authentication integration</li>
              <li>• Product listing & detail pages</li>
              <li>• Dashboard + charts</li>
            </ul>

            <div className="mt-6">
              <a
                className="inline-block bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
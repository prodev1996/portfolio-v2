'use client';
export default function Error({ error, reset }) {
  return (
    <main className="mx-auto max-w-2xl p-6 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-slate-500">{String(error?.message || '')}</p>
      <button className="btn btn-primary mt-4" onClick={() => reset()}>Try again</button>
    </main>
  );
}

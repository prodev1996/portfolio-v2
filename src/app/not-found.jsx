export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl p-6 text-center">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-500">Let’s get you back to the homepage.</p>
      <a href="/" className="btn btn-primary mt-4 inline-block">Go home</a>
    </main>
  );
}

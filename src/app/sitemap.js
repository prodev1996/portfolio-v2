export default async function sitemap() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes = ['', '/#about', '/#skills', '/#experience', '/#education', '/#projects', '/resume', '/#contact']
    .map((p) => ({
      url: `${url}${p}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: p === '' ? 1.0 : 0.6,
    }));
  return routes;
}

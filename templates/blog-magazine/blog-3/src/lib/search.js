import { mockStore } from './mockStore';

export const globalSearch = async (query) => {
  if (!query || query.trim().length < 2) return { results: [] };
  
  const q = query.toLowerCase().trim();
  
  const [articles, tools, models, companies] = await Promise.all([
    mockStore.getArticles(),
    mockStore.getTools(),
    mockStore.getModels(),
    mockStore.getCompanies()
  ]);

  const results = [];

  articles.forEach(a => {
    if (a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)) {
      results.push({ type: 'Article', title: a.title, link: `/article/${a.slug}`, id: a.id });
    }
  });

  tools.forEach(t => {
    if (t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)) {
      results.push({ type: 'Tool', title: t.name, link: `/tools/${t.id}`, id: t.id });
    }
  });

  models.forEach(m => {
    if (m.name.toLowerCase().includes(q)) {
      results.push({ type: 'Model', title: m.name, link: `/models/${m.id}`, id: m.id });
    }
  });

  companies.forEach(c => {
    if (c.name.toLowerCase().includes(q)) {
      results.push({ type: 'Company', title: c.name, link: `/companies/${c.id}`, id: c.id });
    }
  });

  return { results };
};

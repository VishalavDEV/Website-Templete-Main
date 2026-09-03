import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const categories = ['All', ...new Set(courses.map((c) => c.category))];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const durations = ['All', 'Under 25 hours', '25-40 hours', '40+ hours'];
const sorts = ['Default', 'Rating (High to Low)', 'Duration (Short First)', 'Most Students'];

function parseDuration(d) {
  return parseInt(d.replace(' hours', ''));
}

export default function Courses() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [duration, setDuration] = useState('All');
  const [sort, setSort] = useState('Default');

  const filtered = useMemo(() => {
    let result = [...courses];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
      );
    }
    if (category !== 'All') result = result.filter((c) => c.category === category);
    if (difficulty !== 'All') result = result.filter((c) => c.difficulty === difficulty);
    if (duration !== 'All') {
      result = result.filter((c) => {
        const h = parseDuration(c.duration);
        if (duration === 'Under 25 hours') return h < 25;
        if (duration === '25-40 hours') return h >= 25 && h <= 40;
        if (duration === '40+ hours') return h > 40;
        return true;
      });
    }

    if (sort === 'Rating (High to Low)') result.sort((a, b) => b.rating - a.rating);
    else if (sort === 'Duration (Short First)') result.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
    else if (sort === 'Most Students') result.sort((a, b) => b.students - a.students);

    return result;
  }, [search, category, difficulty, duration, sort]);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><BookOpen size={12} /> Course Catalog</span>
            <h1>Find Your <span className="text-gradient">Perfect Course</span></h1>
            <p>Browse our complete library of expert-crafted courses and start building skills that matter.</p>
          </motion.div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'var(--space-3xl)' }}>
        <div className="container">
          {/* Filter Bar */}
          <AnimatedSection>
            <div className="filter-bar" role="search" aria-label="Course filters">
              <div className="search-input-wrap" style={{ minWidth: 240 }}>
                <Search size={16} />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search courses..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search courses"
                />
              </div>
              <label htmlFor="filter-category" className="sr-only">Filter by category</label>
              <select id="filter-category" className="filter-select" value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
              <label htmlFor="filter-difficulty" className="sr-only">Filter by difficulty</label>
              <select id="filter-difficulty" className="filter-select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} aria-label="Filter by difficulty">
                {difficulties.map((d) => <option key={d}>{d}</option>)}
              </select>
              <label htmlFor="filter-duration" className="sr-only">Filter by duration</label>
              <select id="filter-duration" className="filter-select" value={duration} onChange={(e) => setDuration(e.target.value)} aria-label="Filter by duration">
                {durations.map((d) => <option key={d}>{d}</option>)}
              </select>
              <label htmlFor="sort-courses" className="sr-only">Sort courses</label>
              <select id="sort-courses" className="filter-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort courses">
                {sorts.map((s) => <option key={s}>{s}</option>)}
              </select>
              {(search || category !== 'All' || difficulty !== 'All' || duration !== 'All') && (
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => { setSearch(''); setCategory('All'); setDifficulty('All'); setDuration('All'); setSort('Default'); }}
                >
                  Clear All
                </button>
              )}
            </div>
          </AnimatedSection>

          {/* Results count */}
          <div style={{ marginBottom: 'var(--space-xl)', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 8 }}>
            <SlidersHorizontal size={16} />
            Showing <strong style={{ color: 'var(--text-primary)' }}>{filtered.length}</strong> of {courses.length} courses
          </div>

          {/* Course Grid */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key="results"
                className="courses-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filtered.map((course, i) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: 'var(--space-5xl) 0' }}
              >
                <div style={{ fontSize: '4rem', marginBottom: 'var(--space-lg)' }}>🔍</div>
                <h3 style={{ marginBottom: 'var(--space-sm)' }}>No courses found</h3>
                <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search or filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

/**
 * Courses — Full course catalog with filter sidebar and pagination.
 */
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { courses, categories } from '../../data/content';
import Badge from '../../components/common/Badge/Badge';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { Clock, User, DollarSign, Filter } from 'lucide-react';
import styles from './Courses.module.css';

const ITEMS_PER_PAGE = 6;

const badgeVariant = (b) => {
  if (b === 'Popular') return 'accent';
  if (b === 'New') return 'success';
  return 'default';
};

const Courses = () => {
  const [searchParams] = useSearchParams();
  const [selectedCat, setSelectedCat] = useState(searchParams.get('cat') || '');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return courses.filter(c => {
      const matchCat = selectedCat ? c.category === selectedCat : true;
      const matchQ = searchQuery
        ? c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.id.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchCat && matchQ;
    });
  }, [selectedCat, searchQuery]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCatChange = (id) => { setSelectedCat(id); setPage(1); };
  const handleQueryChange = (e) => { setSearchQuery(e.target.value); setPage(1); };

  return (
    <main id="main-content" className={styles.page}>
      <div className="container">
        {/* Page header */}
        <div className={styles.pageHeader}>
          <div>
            <h1 className="section-title">Course Catalogue</h1>
            <p className="section-subtitle">Browse our full range of programmes across all departments.</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className={styles.filterToggle}
            onClick={() => setSidebarOpen(o => !o)}
          >
            <Filter size={15} /> Filters
          </Button>
        </div>

        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={[styles.sidebar, sidebarOpen ? styles.sidebarOpen : ''].join(' ')} aria-label="Course filters">
            <div className={styles.sidebarInner}>
              <h2 className={styles.filterTitle}>Filter by Department</h2>
              <label htmlFor="course-search" className={styles.searchLabel}>Keyword search</label>
              <input
                id="course-search"
                type="search"
                value={searchQuery}
                onChange={handleQueryChange}
                placeholder="Search courses…"
                className={styles.searchInput}
              />

              <ul className={styles.catList}>
                <li>
                  <button
                    className={[styles.catBtn, selectedCat === '' ? styles.catActive : ''].join(' ')}
                    onClick={() => handleCatChange('')}
                  >
                    All Departments
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      className={[styles.catBtn, selectedCat === cat.id ? styles.catActive : ''].join(' ')}
                      onClick={() => handleCatChange(cat.id)}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Course grid */}
          <div className={styles.content}>
            <p className={styles.resultCount}>
              Showing {filtered.length} course{filtered.length !== 1 ? 's' : ''}
            </p>

            {paged.length === 0 ? (
              <div className={styles.empty}>
                <p>No courses match your search. Try a different keyword or department.</p>
                <Button variant="outline" size="sm" onClick={() => { setSearchQuery(''); setSelectedCat(''); }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <ul className={styles.grid}>
                {paged.map(course => (
                  <li key={course.id}>
                    <Card hover className={styles.courseCard}>
                      <div className={styles.courseImg}>
                        <img src={course.image} alt={course.title} loading="lazy" />
                        {course.badge && (
                          <span className={styles.badgeWrap}>
                            <Badge label={course.badge} variant={badgeVariant(course.badge)} />
                          </span>
                        )}
                      </div>
                      <div className={styles.courseBody}>
                        <p className={styles.courseId}>{course.id}</p>
                        <h3 className={styles.courseTitle}>{course.title}</h3>
                        <p className={styles.courseDesc}>{course.description}</p>
                        <ul className={styles.courseMeta}>
                          <li><User size={13} aria-hidden="true" />{course.instructor}</li>
                          <li><Clock size={13} aria-hidden="true" />{course.duration}</li>
                          <li><DollarSign size={13} aria-hidden="true" />${course.price.toLocaleString()}</li>
                        </ul>
                        <Button variant="primary" size="sm" className={styles.enrollBtn}>Enrol Now</Button>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className={styles.pagination} aria-label="Course pagination">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <div className={styles.pages}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button
                      key={p}
                      className={[styles.pageBtn, p === page ? styles.pageActive : ''].join(' ')}
                      onClick={() => setPage(p)}
                      aria-label={`Page ${p}`}
                      aria-current={p === page ? 'page' : undefined}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Courses;

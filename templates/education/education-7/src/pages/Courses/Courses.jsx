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

  const [enrolledCourse, setEnrolledCourse] = useState(null);
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  return (
    <main id="main-content" className={styles.page}>
      {/* Interactive Enrollment Dialog */}
      {enrolledCourse && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(19, 34, 56, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '1.25rem',
            maxWidth: '480px',
            width: '100%',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #e2e8f0',
            textAlign: 'left',
          }}>
            {!enrollSuccess ? (
              <>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1a2e5a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Course Admission
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0.5rem 0 0.75rem' }}>
                  Enrol in {enrolledCourse.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {enrolledCourse.description}
                </p>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem', fontSize: '0.8rem', color: '#334155' }}>
                  <p><strong>Code:</strong> {enrolledCourse.id} | <strong>Instructor:</strong> {enrolledCourse.instructor}</p>
                  <p><strong>Duration:</strong> {enrolledCourse.duration} | <strong>Tuition:</strong> ${enrolledCourse.price.toLocaleString()}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                  <Button variant="outline" size="sm" onClick={() => setEnrolledCourse(null)}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => setEnrollSuccess(true)}>
                    Confirm Enrollment
                  </Button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: '48px', height: '48px', background: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>Enrollment Confirmed!</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  Welcome to <strong>{enrolledCourse.title}</strong>. An onboarding email and course portal login details have been sent.
                </p>
                <Button variant="primary" size="sm" onClick={() => { setEnrolledCourse(null); setEnrollSuccess(false); }}>
                  Go to Dashboard
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

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
                        <img
                          src={course.image}
                          alt={course.title}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';
                          }}
                        />
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
                        <Button
                          variant="primary"
                          size="sm"
                          className={styles.enrollBtn}
                          onClick={() => setEnrolledCourse(course)}
                        >
                          Enrol Now
                        </Button>
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

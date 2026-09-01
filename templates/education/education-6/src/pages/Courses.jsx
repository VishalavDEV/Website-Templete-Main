import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, Award, ArrowRight } from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Courses Page Component
 * Renders a searchable and filterable grid of courses/programs.
 */
export default function Courses() {
  const { courses } = contentData;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  // Compute unique departments for filter buttons
  const departments = useMemo(() => {
    const depts = new Set(courses.map(c => c.department));
    return ['All', ...Array.from(depts)];
  }, [courses]);

  // Filter and search courses list
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDept = selectedDept === 'All' || course.department === selectedDept;

      return matchesSearch && matchesDept;
    });
  }, [courses, searchQuery, selectedDept]);

  return (
    <div className="courses-page fade-in">
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-gold">Academics</span>
          <h1>Our Courses & Programs</h1>
          <p className="banner-sub">Explore our globally accredited business, finance, and analytical technology degrees.</p>
        </div>
      </section>

      {/* Course List & Controls Section */}
      <section className="courses-list-section section-padding">
        <div className="container">
          {/* Controls Bar */}
          <div className="courses-controls flex-between">
            {/* Search Input */}
            <div className="search-bar-wrapper">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                className="form-input search-input" 
                placeholder="Search by course title, code or keyword..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Department Filters */}
            <div className="filter-buttons-wrapper">
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={`btn btn-filter ${selectedDept === dept ? 'filter-active' : ''}`}
                  onClick={() => setSelectedDept(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid-3 courses-grid">
              {filteredCourses.map((course) => (
                <div key={course.id} className="card course-card flex-between-column fade-in">
                  <div className="course-card-top">
                    <div className="course-badges flex-between">
                      <span className="badge badge-gold">{course.code}</span>
                      <span className="badge badge-primary">{course.level}</span>
                    </div>
                    <h3>{course.title}</h3>
                    <p className="course-desc">{course.description}</p>
                  </div>

                  <div className="course-card-bottom">
                    <div className="course-meta">
                      <div className="meta-item">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="meta-item">
                        <Award size={16} />
                        <span>{course.department}</span>
                      </div>
                    </div>
                    <Link to="/admissions" className="btn btn-secondary btn-block course-enroll-btn">
                      Enroll Today <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-courses-found text-center card">
              <BookOpen size={48} className="no-courses-icon" />
              <h3>No Programs Found</h3>
              <p>We couldn't find any courses matching "{searchQuery}" in "{selectedDept}".</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedDept('All'); }} 
                className="btn btn-primary"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

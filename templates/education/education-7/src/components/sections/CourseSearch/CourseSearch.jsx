/**
 * CourseSearch — Course search/filter form.
 * @prop {Array} filterOptions - Radio options for search type
 * @prop {Array} categories - Dropdown category options
 * @prop {Function} onSearch - Called with { filterType, query, category }
 */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Search } from 'lucide-react';
import Button from '../../common/Button/Button';
import styles from './CourseSearch.module.css';

const CourseSearch = ({ filterOptions, categories, onSearch }) => {
  const [filterType, setFilterType] = useState(filterOptions[0]?.value || 'name');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ filterType, query, category });
  };

  return (
    <section className={styles.section} aria-label="Find your course">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Search size={22} className={styles.icon} aria-hidden="true" />
            <div>
              <h2 className={styles.title}>Find Your Course</h2>
              <p className={styles.subtitle}>Search across 200+ undergraduate and postgraduate programmes.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            {/* Filter type radio group */}
            <fieldset className={styles.filterGroup}>
              <legend className={styles.legend}>Search by</legend>
              <div className={styles.radioRow}>
                {filterOptions.map(opt => (
                  <label key={opt.value} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="filterType"
                      value={opt.value}
                      checked={filterType === opt.value}
                      onChange={() => setFilterType(opt.value)}
                      className={styles.radio}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Inputs row */}
            <div className={styles.inputRow}>
              <div className={styles.inputWrap}>
                <label htmlFor="course-query" className={styles.inputLabel}>Course name or ID</label>
                <input
                  id="course-query"
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={filterType === 'id' ? 'e.g. BUS101' : 'e.g. Business Management'}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputWrap}>
                <label htmlFor="course-category" className={styles.inputLabel}>Department</label>
                <select
                  id="course-category"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className={styles.select}
                >
                  <option value="">All Departments</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <Button type="submit" variant="primary" size="lg" className={styles.submitBtn}>
                <Search size={18} aria-hidden="true" />
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

CourseSearch.propTypes = {
  filterOptions: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default CourseSearch;

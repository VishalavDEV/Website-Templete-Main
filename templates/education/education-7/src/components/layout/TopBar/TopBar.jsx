/**
 * TopBar — Utility bar above the main navbar.
 * Shows language switcher, contact info, and login/search links.
 * @prop {Object} siteInfo - Contact info from data/content.js
 * @prop {Array} languageOptions - List of { code, label } objects
 */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { MapPin, Phone, Clock, Search, User, Globe } from 'lucide-react';
import styles from './TopBar.module.css';

const TopBar = ({ siteInfo, languageOptions }) => {
  const [lang, setLang] = useState('en');
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className={styles.topbar}>
      <div className={['container', styles.inner].join(' ')}>
        {/* Left: contact info */}
        <ul className={styles.contactInfo}>
          <li>
            <MapPin size={13} aria-hidden="true" />
            <span>{siteInfo.address}</span>
          </li>
          <li>
            <Phone size={13} aria-hidden="true" />
            <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
          </li>
          <li className={styles.hideOnMobile}>
            <Clock size={13} aria-hidden="true" />
            <span>{siteInfo.hours}</span>
          </li>
        </ul>

        {/* Right: language, login, search */}
        <div className={styles.right}>
          {/* Language switcher */}
          <div className={styles.langSwitcher}>
            <Globe size={13} aria-hidden="true" />
            <label htmlFor="language-select" className="sr-only">Select language</label>
            <select
              id="language-select"
              value={lang}
              onChange={e => setLang(e.target.value)}
              className={styles.langSelect}
            >
              {languageOptions.map(opt => (
                <option key={opt.code} value={opt.code}>{opt.label}</option>
              ))}
            </select>
          </div>

          <span className={styles.divider} aria-hidden="true" />

          <a href="/contact" className={styles.link}>
            <User size={13} aria-hidden="true" />
            <span>Login</span>
          </a>
          <a href="/contact" className={styles.link}>Contact</a>

          {/* Search toggle */}
          <button
            className={styles.searchBtn}
            onClick={() => setSearchOpen(o => !o)}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
          >
            <Search size={14} />
          </button>

          {searchOpen && (
            <div className={styles.searchPopup} role="search">
              <label htmlFor="topbar-search" className="sr-only">Search site</label>
              <input
                id="topbar-search"
                type="search"
                placeholder="Search courses, events…"
                className={styles.searchInput}
                autoFocus
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  siteInfo: PropTypes.shape({
    address: PropTypes.string,
    phone: PropTypes.string,
    hours: PropTypes.string,
  }).isRequired,
  languageOptions: PropTypes.arrayOf(
    PropTypes.shape({ code: PropTypes.string, label: PropTypes.string })
  ).isRequired,
};

export default TopBar;

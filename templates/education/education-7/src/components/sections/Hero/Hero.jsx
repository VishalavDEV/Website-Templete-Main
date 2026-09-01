/**
 * Hero — Two-column split: image carousel on left, info panels on right.
 * @prop {Array} slides - Carousel slides from content.js
 * @prop {Array} heroPanels - Info panel data array
 */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carousel from '../../common/Carousel/Carousel';
import Button from '../../common/Button/Button';
import styles from './Hero.module.css';

const Hero = ({ slides, heroPanels }) => (
  <section className={styles.hero} aria-label="Hero">
    <div className={styles.grid}>
      {/* Left: Carousel */}
      <div className={styles.carouselWrap}>
        <Carousel slides={slides} autoplay={true} interval={5500} />
      </div>

      {/* Right: Info panels */}
      <div className={styles.panels}>
        {heroPanels.map(panel => (
          <div key={panel.id} className={[styles.panel, styles[panel.variant]].join(' ')}>
            <h2 className={styles.panelHeading}>{panel.heading}</h2>
            <p className={styles.panelDesc}>{panel.description}</p>
            <Link to={panel.cta.path}>
              <Button
                variant={panel.variant === 'dark' ? 'accent' : panel.variant === 'accent' ? 'outline' : 'primary'}
                size="md"
              >
                {panel.cta.label}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  slides: PropTypes.array.isRequired,
  heroPanels: PropTypes.array.isRequired,
};

export default Hero;

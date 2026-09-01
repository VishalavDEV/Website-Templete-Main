import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, GithubIcon, YoutubeIcon } from '../SocialIcons/SocialIcons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top gradient line */}
      <div className="footer__gradient-line" aria-hidden="true" />

      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="NeXus Digital — home">
              <div className="footer__logo-icon">
                <Zap size={18} />
              </div>
              <span className="footer__logo-text">
                Ne<span className="text-gradient">X</span>us Digital
              </span>
            </Link>
            <p className="footer__brand-desc">
              We engineer digital transformation at scale — helping ambitious businesses build
              technology that drives real, measurable results.
            </p>
            <div className="footer__socials">
              {[
                { icon: <TwitterIcon size={16} />, href: '#', label: 'Twitter' },
                { icon: <LinkedinIcon size={16} />, href: '#', label: 'LinkedIn' },
                { icon: <GithubIcon size={16} />, href: '#', label: 'GitHub' },
                { icon: <YoutubeIcon size={16} />, href: '#', label: 'YouTube' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="footer__social-btn"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__links">
              {[
                'Custom Software',
                'Mobile Development',
                'Cloud & DevOps',
                'Data & Analytics',
                'Cybersecurity',
                'UI/UX Design',
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="footer__link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__col">
            <h3 className="footer__col-title">Get In Touch</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <Mail size={14} className="footer__contact-icon" />
                <a href="mailto:hello@nexusdigital.io" className="footer__link">
                  hello@nexusdigital.io
                </a>
              </li>
              <li className="footer__contact-item">
                <Phone size={14} className="footer__contact-icon" />
                <a href="tel:+918000000000" className="footer__link">
                  +91 80000 00000
                </a>
              </li>
              <li className="footer__contact-item">
                <MapPin size={14} className="footer__contact-icon" aria-hidden="true" />
                <address className="footer__link footer__address">
                  12th Floor, Prestige Tech Tower<br />
                  Outer Ring Road, Bangalore 560103
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} NeXus Digital Pvt. Ltd. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms & Conditions</a>
            <a href="#" className="footer__legal-link">Cookie Policy</a>
          </div>
          <motion.button
            className="footer__top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpRight size={16} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

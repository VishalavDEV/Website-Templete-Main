import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Sidebar Enrollment / Lead Form Component
 * Handles input capturing, custom client-side validation, term radio selectors,
 * and calls an optional onSubmit callback.
 * 
 * @param {Object} props
 * @param {Function} [props.onSubmit] - Optional callback function to execute on form submission
 */
export default function SidebarForm({ onSubmit }) {
  const { sidebarForm, courses } = contentData;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    stateZip: '',
    educationLevel: '',
    courseOfInterest: '',
    intakeTerm: 'fall-2026'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when field is typed in
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleTermChange = (value) => {
    setFormData((prev) => ({ ...prev, intakeTerm: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }

    if (!formData.street.trim()) newErrors.street = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.stateZip.trim()) newErrors.stateZip = 'State / Zip code is required';
    if (!formData.educationLevel) newErrors.educationLevel = 'Please select education level';
    if (!formData.courseOfInterest) newErrors.courseOfInterest = 'Please select a course';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmit) {
        onSubmit(formData);
      }
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      stateZip: '',
      educationLevel: '',
      courseOfInterest: '',
      intakeTerm: 'fall-2026'
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="sidebar-card success-card fade-in">
        <div className="success-content text-center">
          <CheckCircle size={60} className="success-icon" />
          <h3>Application Submitted!</h3>
          <p>
            Thank you, <strong>{formData.firstName}</strong>. We have received your program request for the{' '}
            <strong>{courses.find(c => c.id === formData.courseOfInterest)?.title || 'selected course'}</strong>.
          </p>
          <p className="success-sub">
            An admissions officer will email you the prospectus booklets and next steps within 24 business hours.
          </p>
          <button onClick={resetForm} className="btn btn-gold btn-block">
            Request for Another Program
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sidebar-card fade-in">
      <h3>{sidebarForm.title}</h3>
      <p>{sidebarForm.description}</p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name Fields */}
        <div className="grid-2-col gap-sm">
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`form-input ${errors.firstName ? 'input-error' : ''}`}
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="form-error"><AlertCircle size={12} /> {errors.firstName}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`form-input ${errors.lastName ? 'input-error' : ''}`}
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="form-error"><AlertCircle size={12} /> {errors.lastName}</span>}
          </div>
        </div>

        {/* Contact Fields */}
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="form-error"><AlertCircle size={12} /> {errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`form-input ${errors.phone ? 'input-error' : ''}`}
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="form-error"><AlertCircle size={12} /> {errors.phone}</span>}
        </div>

        {/* Address Fields */}
        <div className="form-group">
          <label className="form-label" htmlFor="street">Street Address *</label>
          <input
            type="text"
            id="street"
            name="street"
            className={`form-input ${errors.street ? 'input-error' : ''}`}
            value={formData.street}
            onChange={handleChange}
          />
          {errors.street && <span className="form-error"><AlertCircle size={12} /> {errors.street}</span>}
        </div>

        <div className="grid-2-col gap-sm">
          <div className="form-group">
            <label className="form-label" htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              className={`form-input ${errors.city ? 'input-error' : ''}`}
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span className="form-error"><AlertCircle size={12} /> {errors.city}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="stateZip">State & Zip Code *</label>
            <input
              type="text"
              id="stateZip"
              name="stateZip"
              className={`form-input ${errors.stateZip ? 'input-error' : ''}`}
              placeholder="NY 10001"
              value={formData.stateZip}
              onChange={handleChange}
            />
            {errors.stateZip && <span className="form-error"><AlertCircle size={12} /> {errors.stateZip}</span>}
          </div>
        </div>

        {/* Level and Course dropdowns */}
        <div className="form-group">
          <label className="form-label" htmlFor="educationLevel">Highest Education Level *</label>
          <select
            id="educationLevel"
            name="educationLevel"
            className={`form-select ${errors.educationLevel ? 'input-error' : ''}`}
            value={formData.educationLevel}
            onChange={handleChange}
          >
            {sidebarForm.educationLevels.map((lvl) => (
              <option key={lvl.value} value={lvl.value}>
                {lvl.label}
              </option>
            ))}
          </select>
          {errors.educationLevel && <span className="form-error"><AlertCircle size={12} /> {errors.educationLevel}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="courseOfInterest">Course of Interest *</label>
          <select
            id="courseOfInterest"
            name="courseOfInterest"
            className={`form-select ${errors.courseOfInterest ? 'input-error' : ''}`}
            value={formData.courseOfInterest}
            onChange={handleChange}
          >
            <option value="">Select a Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.code} - {course.title}
              </option>
            ))}
          </select>
          {errors.courseOfInterest && <span className="form-error"><AlertCircle size={12} /> {errors.courseOfInterest}</span>}
        </div>

        {/* Term radio buttons selector */}
        <div className="form-group">
          <label className="form-label">When do you want to join? *</label>
          <div className="radio-group" role="radiogroup" aria-label="Intake Term Selector">
            {sidebarForm.terms.map((term) => (
              <div 
                key={term.value}
                onClick={() => handleTermChange(term.value)}
                className={`radio-label ${formData.intakeTerm === term.value ? 'active' : ''}`}
              >
                <input
                  type="radio"
                  name="intakeTerm"
                  value={term.value}
                  checked={formData.intakeTerm === term.value}
                  onChange={() => {}}
                  className="radio-input"
                />
                <span>{term.label.split(' ')[0]}</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>{term.label.split(' ')[1]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button 
          type="submit" 
          className="btn btn-gold btn-block form-cta-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Processing...'
          ) : (
            <>
              Get Program Information <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

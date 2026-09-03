import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="policy-page">
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><Shield size={12} /> Legal</span>
            <h1>Privacy <span className="text-gradient">Policy</span></h1>
            <p>Last updated: January 1, 2024</p>
          </motion.div>
        </div>
      </header>
      <div className="policy-content">
        <p>At EduLearn, your privacy is a top priority. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.</p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, and features used on the platform.</li>
          <li><strong>Device Information:</strong> Browser type, device type, and operating system.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and improve our educational services.</li>
          <li>Communicate with you about courses, updates, and support.</li>
          <li>Personalize your learning experience.</li>
          <li>Analyze platform usage to improve quality.</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating the platform, subject to confidentiality agreements.</p>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>5. Cookies</h2>
        <p>We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. Contact us at hello@edulearn.com to exercise these rights.</p>

        <h2>7. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at hello@edulearn.com.</p>
      </div>
    </main>
  );
}

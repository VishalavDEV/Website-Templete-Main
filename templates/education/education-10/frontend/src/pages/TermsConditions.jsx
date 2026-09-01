import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsConditions() {
  return (
    <main className="policy-page">
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><FileText size={12} /> Legal</span>
            <h1>Terms &amp; <span className="text-gradient">Conditions</span></h1>
            <p>Last updated: January 1, 2024</p>
          </motion.div>
        </div>
      </header>
      <div className="policy-content">
        <p>Welcome to EduLearn. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By using EduLearn, you confirm that you are at least 13 years old and agree to these terms. If you do not agree, please do not use our platform.</p>

        <h2>2. Use of the Platform</h2>
        <p>You agree to use EduLearn only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
        <ul>
          <li>Share your account credentials with others.</li>
          <li>Reproduce, distribute, or resell course content without permission.</li>
          <li>Engage in any fraudulent or abusive behavior.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>All content on EduLearn, including courses, materials, and branding, is the intellectual property of EduLearn or its instructors. Unauthorized use is prohibited.</p>

        <h2>4. Certificates</h2>
        <p>Certificates are issued upon successful completion of course requirements. They serve as proof of course completion and do not constitute professional licensing or accreditation.</p>

        <h2>5. Disclaimers</h2>
        <p>EduLearn provides educational content for informational purposes. We do not guarantee specific career outcomes or employment results.</p>

        <h2>6. Limitation of Liability</h2>
        <p>EduLearn shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform or its content.</p>

        <h2>7. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Continued use of the platform after changes constitutes acceptance of the updated Terms.</p>

        <h2>8. Contact</h2>
        <p>For questions about these Terms, contact us at legal@edulearn.com.</p>
      </div>
    </main>
  );
}

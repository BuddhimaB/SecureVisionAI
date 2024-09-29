import React from 'react';

export default function Privacy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy and Policy</h1>
      <section style={styles.section}>
        <h2 style={styles.subheading}>Introduction</h2>
        <p style={styles.text}>
          Welcome to our Privacy and Policy page. We are committed to protecting your personal information and your right to privacy.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Information Collection</h2>
        <p style={styles.text}>
          We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Use of Your Information</h2>
        <p style={styles.text}>
          We use the information we collect or receive to communicate directly with you. We may also send you promotional information about products and services that we feel may interest you.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Sharing of Information</h2>
        <p style={styles.text}>
          We may share information with third parties that perform services for us, such as data analysis, email delivery, hosting services, customer service, and marketing efforts. These companies will only have access to your personal information as necessary to perform their functions and are not permitted to share or use your information for any other purpose.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Security of Your Information</h2>
        <p style={styles.text}>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Contact Us</h2>
        <p style={styles.text}>
          If you have questions or comments about this policy, you may contact us at:
        </p>
        <p style={styles.contactInfo}>
          Email: support@ourwebsite.com<br />
          Address: 123 Privacy St., Policy City, PC 12345
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  section: {
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#007bff',
  },
  text: {
    fontSize: '1em',
    lineHeight: '1.6',
    color: '#555',
  },
  contactInfo: {
    fontSize: '1em',
    lineHeight: '1.6',
    color: '#333',
    marginTop: '10px',
  },
};

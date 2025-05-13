import React from 'react';
import styles from './BioSection.module.css';

const BioSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>About Me</h2>
        <p>I am a results-driven Technology Leader with over 8 years of experience in digital transformation and enterprise systems integration. My expertise lies in logistics technology solutions and cross-platform integration, where I have successfully architected scalable solutions that bridge operational platforms with enterprise systems.</p>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>TypeScript/JavaScript (Advanced)</li>
          <li>NestJS Framework, NextJs Framework, React Native</li>
          <li>ReactJs, NodeJs, NPM package building, Python, Java</li>
          <li>SQL/NoSQL Databases, Power BI</li>
          <li>Microservices Architecture, SAP Integration Patterns</li>
          <li>Containerization (Docker, Kubernetes)</li>
          <li>Agile Development, SCRUM</li>
          <li>Data Security & Integrity, Authentication & Authorization</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Experience</h2>
        <h3>Software Engineer / Transportr</h3>
        <p>September 2020 - Present</p>
        <p>Team Lead, Key responsibilities include process automation.</p>
        <h3>Software Engineer / Ittihad International Investment</h3>
        <p>November 2019 – August 2020</p>
        <p>Team Lead, Key responsibilities included market research, requirement gathering, and project planning.</p>
      </section>

      <section className={styles.section}>
        <h2>Role in Transportr</h2>
        <p><strong>Digital Transformation & Integration Specialist</strong></p>
        <p>Lead Technology Architect for Logistics Operations.</p>
        <ul>
          <li>Architected and implemented a robust integration framework connecting multiple logistics platforms with SAP.</li>
          <li>Designed and deployed an automated invoice posting system achieving 99.9% accuracy in financial reconciliation.</li>
          <li>Reduced manual data entry by 85% through automated data synchronization.</li>
        </ul>
      </section>
    </div>
  );
};

export default BioSection;
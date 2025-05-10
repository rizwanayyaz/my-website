import React from 'react';
import Layout from '../components/Layout';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>About Me</h1>
        <p>
          I am M. Rizwan Ayyaz, a results-driven Technology Leader with over 12 years of experience in digital transformation and enterprise systems integration. My expertise lies in logistics technology solutions and cross-platform integration, where I have successfully architected scalable solutions that bridge operational platforms with enterprise systems.
        </p>
        <h2>Objective</h2>
        <p>
          I am committed to driving technological excellence in supply chain operations while ensuring seamless integration between diverse systems including WMS, TMS, and ERP platforms.
        </p>
        <h2>Key Achievements</h2>
        <ul>
          <li>Architected and implemented a robust integration framework connecting multiple logistics platforms with SAP.</li>
          <li>Designed an automated invoice posting system achieving 99.9% accuracy in financial reconciliation.</li>
          <li>Led the development of RPA solutions for automated document processing, reducing processing time by 70%.</li>
        </ul>
        <h2>Skills</h2>
        <p>
          My technical skills include TypeScript, JavaScript, NestJS, Next.js, React, Node.js, Python, and various database technologies. I have experience with cloud platforms such as AWS and Azure, and I am proficient in API design and microservices architecture.
        </p>
      </div>
    </Layout>
  );
};

export default About;
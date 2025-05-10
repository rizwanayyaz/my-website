import React from 'react';
import Layout from '../components/Layout';
import BioSection from '../components/BioSection';
import TechContributions from '../components/TechContributions';
import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <BioSection />
        </div>
        <div className={styles.rightColumn}>
          <TechContributions />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
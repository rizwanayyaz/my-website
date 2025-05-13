import React, { useState } from 'react';
import About from '../pages/about';
import styles from './TechContributions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArchive, faTimes } from '@fortawesome/free-solid-svg-icons';

const TechContributions: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with an email service
    // For now, we'll just simulate a successful submission
    console.log(`Subscription request for: ${email} will be sent to rizwanayyaz@gmail.com`);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <h2>Latest Tech Contributions</h2>
      <ul>
        <li>
          <a
            href="https://www.npmjs.com/package/dto-lib"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FontAwesomeIcon icon={faExternalLinkAlt} /> Npm Class Validator Package Example
          </a>
          <p>
            A library to create a standalone package in NestJS projects for use in other microservices.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/rizwanIttihad/graphql-Text-Query"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FontAwesomeIcon icon={faExternalLinkAlt} /> AI Agent In Progress
          </a>
          <p>
            A test to query using GraphQL, with potential to integrate with LLMs for AI agents.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/rizwanayyaz/NestJS-EntitySubscriberInterface-and-boiler-plate"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FontAwesomeIcon icon={faExternalLinkAlt} /> Entity Subscriber NestJS Boilerplate
          </a>
          <p>
           A boilerplate for implementing `EntitySubscriberInterface` in NestJS.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/rizwanayyaz/Nestjs-Role-Base-Authentication"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FontAwesomeIcon icon={faExternalLinkAlt} /> Role-Based Authentication Example
          </a>
          <p>
            An example of implementing role-based authentication in NestJS.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/rizwanayyaz/Nestjs-throttle-specific-route"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FontAwesomeIcon icon={faExternalLinkAlt} /> Rate Limiting for Specific Routes
          </a>
          <p>
            A demonstration of applying rate limiting to specific routes for enhanced security.
          </p>
        </li>
        <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
              <FontAwesomeIcon icon={faArchive} /> Subscribe for Archive Projects
            </a>
          </li>
      </ul>
      <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://transportr.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Digital Logistics Platform - Transportr
            </a>
          </li>
          <li>
            <a href="https://cva.k12.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Virtual Support Project - Cascade Virtual
            </a>
          </li>
          <li>
            <a href="https://chugachheritageak.org/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Chugach Heritage - A CMS
            </a>
          </li>
          <li>
            <a href="https://github.com/atifamin/senior-agency-care" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Senior Care Agency
            </a>
          </li>
        </ul>
        <h2>GitHub Profile</h2>
      <ul>
        <li>
          <a
            href="https://github.com/rizwanIttihad"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: <FontAwesomeIcon icon={faExternalLinkAlt} /> rizwanIttihad
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rizwanayyaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: <FontAwesomeIcon icon={faExternalLinkAlt} /> rizwanayyaz
          </a>
        </li>
      </ul>

      {/* Subscription Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>Subscribe for Archive Projects</h3>
              <button 
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className={styles.modalBody}>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <p>Enter your email to receive updates about archive projects:</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.submitButton}>
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className={styles.successMessage}>
                  <p>Thank you for subscribing!</p>
                  <p>You will receive updates about archive projects soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechContributions;
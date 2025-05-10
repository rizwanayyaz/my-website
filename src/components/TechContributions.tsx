import React from 'react';
import About from '../pages/about';
import styles from './TechContributions.module.css';

const TechContributions: React.FC = () => {
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
            Npm Class Validator Package Example
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
           AI Agent In Progress
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
            Entity Subscriber NestJS Boilerplate
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
            Role-Based Authentication Example
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
            Rate Limiting for Specific Routes
          </a>
          <p>
            A demonstration of applying rate limiting to specific routes for enhanced security.
          </p>
        </li>
        <li>
        <h2>About Me</h2>
            <p>
            I am M. Rizwan Ayyaz, a results-driven Technology Leader with over 12 years of experience in digital transformation and enterprise systems integration. My expertise lies in logistics technology solutions and cross-platform integration, where I have successfully architected scalable solutions that bridge operational platforms with enterprise systems.
            </p>
        </li>
      </ul>
      <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://transportr.com" target="_blank" rel="noopener noreferrer">
              Digital Logistics Platform - Transportr
            </a>
          </li>
          <li>
            <a href="https://cva.k12.com/" target="_blank" rel="noopener noreferrer">
              Virtual Support Project - Cascade Virtual
            </a>
          </li>
          <li>
            <a href="https://chugachheritageak.org/" target="_blank" rel="noopener noreferrer">
              Chugach Heritage - A CMS
            </a>
          </li>
          <li>
            <a href="https://github.com/atifamin/senior-agency-care" target="_blank" rel="noopener noreferrer">
              Senior Care Agency
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
            GitHub: rizwanIttihad
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rizwanayyaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: rizwanayyaz
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TechContributions;
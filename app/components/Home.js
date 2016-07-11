import React from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <h2>Home</h2>
        <Link to="/counter">to Counter</Link>
      </div>
    </div>
  );
}

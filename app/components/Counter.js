import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Counter.css';
import { Col, Row } from './Grid';

export default function Counter(props) {
  const { increment, incrementIfOdd, incrementAsync, decrement, counter } = props;
  return (
    <Row>
      <Col xs="3" md="4" className={styles.backButton}>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </Col>
      <Col xs="3" md="4" className={`counter ${styles.counter}`}>
        {counter}
      </Col>
      <Col xs="6" md="4" className={styles.btnGroup}>
        <button className={styles.btn} onClick={increment}>
          <i className="fa fa-plus"></i>
        </button>
        <button className={styles.btn} onClick={decrement}>
          <i className="fa fa-minus"></i>
        </button>
        <button className={styles.btn} onClick={incrementIfOdd}>odd</button>
        <button className={styles.btn} onClick={() => incrementAsync()}>async</button>
      </Col>
    </Row>
  );
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

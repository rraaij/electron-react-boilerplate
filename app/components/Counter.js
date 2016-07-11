import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Counter.css';
import { Grid, Row } from 'react-flexbox-grid/lib';
import Box from './Box';

export default function Counter(props) {
  const { increment, incrementIfOdd, incrementAsync, decrement, counter } = props;
  return (
    <Grid fluid>
      <Row>
        <Box type="row" xs={12} sm={3} md={2} lg={1}>
          <div className={styles.backButton}>
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
        </Box>
      </Row>

      <Row>
        <Box type="row" xs={6} sm={6} md={8} lg={10}>
          <div className={`counter ${styles.counter}`}>
            {counter}
          </div>
        </Box>
      </Row>

      <Row>
        <Box type="row" xs={12} sm={9} md={10} lg={11}>
          <div className={styles.btnGroup}>
            <button className={styles.btn} onClick={increment}>
              <i className="fa fa-plus"></i>
            </button>
            <button className={styles.btn} onClick={decrement}>
              <i className="fa fa-minus"></i>
            </button>
            <button className={styles.btn} onClick={incrementIfOdd}>odd</button>
            <button className={styles.btn} onClick={() => incrementAsync()}>async</button>
          </div>
        </Box>
      </Row>
    </Grid>
  );
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

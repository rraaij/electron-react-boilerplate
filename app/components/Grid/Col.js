import React from 'react';
import { breakpoints, getGridClasses } from './helpers';
import styles from './Grid.scss';

export default function Col(props) {
  // add mui-col classes
  const gridClasses = getGridClasses(props, styles);

  return (
    <div
      {...props}
      className={`${gridClasses} ${props.className || ''}`}
    >
      {props.children}
    </div>
  );
}

Col.propTypes = {
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string
};

Col.defaultProps = () => {
  const props = { className: '' };
  let i;
  let v;

  // add {breakpoint}, {breakpoint}-offset to props
  for (i = breakpoints.length - 1; i > -1; i--) {
    v = breakpoints[i];
    props[v] = null;
    props[`${v}-offset`] = null;
  }

  return props;
};

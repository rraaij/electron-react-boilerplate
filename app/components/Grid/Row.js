import React from 'react';
import classnames from 'classnames';
import classes from './Grid.scss';

export default function Row(props) {
  return (
    <div
      {...props}
      className={classnames(classes.row)}
    >
      {props.children}
    </div>
  );
}

Row.propTypes = {
  children: React.PropTypes.any.isRequired
};

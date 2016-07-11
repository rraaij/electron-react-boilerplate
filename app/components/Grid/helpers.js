import classnames from 'classnames/bind';

export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export function getGridClasses(props, styles) {
  const classes = breakpoints.reduce((acc, breakpoint) => {
    let colCount;
    const baseClassName = `col-${breakpoint}`;

    // add mui-col-{bk}-{val}
    colCount = props[breakpoint];
    if (colCount) {
      acc[`${baseClassName}-${colCount}`] = true;
    }

    // add mui-col-{bk}-offset-{val}
    colCount = props[`${breakpoint}-offset`];
    if (colCount) {
      acc[`${baseClassName}-offset-${colCount}`] = true;
    }

    return acc;
  }, {});

  return classnames.bind(styles)(classes);
}

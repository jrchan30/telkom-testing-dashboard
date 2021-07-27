import React from 'react';
import GraphBlock from './GraphBlock';
// import Title from './Title';

const GridItem = ({
  title,
  data,
  type,
  className,
  style,
  dispatch,
  root,
  children,
  ...rest
}) => {
  const width = parseInt(style.width, 10);
  const height = parseInt(style.height, 10) - 50;
  console.log(children);
  return (
    <div className={`grid-item ${className}`} style={style} {...rest}>
      {/* <div className="grid-item__title">
        <Title title={title} type={type} root={root} />
      </div> */}
      <div className="grid-item__graph">
        <GraphBlock type={type} data={data} width={width} height={height} />
      </div>
      {children}
    </div>
  );
};

export default GridItem;

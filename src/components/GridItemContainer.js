import React from 'react';

import GridItem from '../components/GridItem';

import initialData from '../initialData';

const GridItemContainer = ({ children, item, ...props }) => {
  const { data, type, title } = initialData[item];
  return (
    <GridItem title={title} type={type} data={data} root={item} {...props}>
      {children}
    </GridItem>
  );
};

export default GridItemContainer;

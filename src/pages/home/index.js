import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import layouts from '../../layoutConfig';
import DashboardLineChart from '../home/components/DashboardLineChart';
import DashboardPieChart from '../home/components/DashboardPieChart';

const ResponsiveGridLayout = WidthProvider(Responsive);

const HomeDashboard = () => {
  const [breakpoint, setBreakpoint] = useState();

  const onBreakpointChangeHandler = (e) => {
    console.log(e);
  };

  const onLayoutChangeHandler = (layout, layouts) => {
    console.log('layout', layout);
    console.log('layouts', layouts);
  };

  return (
    <div className="container mt-5">
      <ResponsiveGridLayout
        className="layout"
        isDraggable
        isRearrangeable
        isResizable
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        onBreakpointChange={(e) => onBreakpointChangeHandler(e)}
        onLayoutChange={(layout, layouts) =>
          onLayoutChangeHandler(layout, layouts)
        }
      >
        <div
          key="graph1"
          className="grid-item p-3"
          data-grid={{ x: 0, y: 0, w: 5, h: 100 }}
        >
          <DashboardLineChart />
        </div>
        <div
          key="graph2"
          className="grid-item p-3"
          data-grid={{ x: 0, y: 0, w: 5, h: 100 }}
        >
          <DashboardPieChart />
        </div>
        <div
          key="graph3"
          className="grid-item p-3"
          data-grid={{ x: 0, y: 0, w: 5, h: 100 }}
        >
          <DashboardLineChart />
        </div>
        {/* {Object.keys(initialData).map((item) => {
          return <GridItemContainer key={item} item={item} />;
        })} */}
      </ResponsiveGridLayout>
    </div>
  );
};

export default HomeDashboard;

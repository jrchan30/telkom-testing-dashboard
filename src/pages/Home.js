import React, { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    console.log('home rendered');
  }, []);

  return (
    <div>
      <p className="container">Hello s</p>
    </div>
  );
};

export default Dashboard;

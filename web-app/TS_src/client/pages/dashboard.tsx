import React, { useState } from 'react';
import useStore from '../store';
import Navbar from '../components/Navbar';
import LineChart from '../components/LineChart';
import ChartHeader from '../components/ChartHeader';

const Dashboard: React.FC<{}> = () => {
  const { showLogin, showRegistration } = useStore();
  
  
  return (
    <>
      <Navbar />
      <ChartHeader />
      <LineChart />
    </>
    
  );
}

export default Dashboard;
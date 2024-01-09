"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Bar } from 'react-chartjs-2';
import "chart.js/auto";

const Dashboard = () => {
  // Placeholder data (replace with actual data)
  const metricsData = {
    totalRevenue: '$1,234,567',
    totalJobsAvg: '25',
    ticketsCreated: '150',
    ticketsScheduled: '120',
    outstandingAmount: '$50,000',
    membershipsSold: '50',
    jobsCompleted: '100',
    totalCanceled: '10',
  };

   // Sample data for the charts
   const revenueByLocationData = {
    labels: ['Location A', 'Location B', 'Location C'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [50000, 30000, 70000],
      },
    ],
  };
  const revenueByTypeData = {
    labels: ['Type 1', 'Type 2', 'Type 3'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.6)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [40000, 60000, 80000],
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Company Metrics</h1>

      <div className="row">
        {/* Cards */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Revenue</h5>
              <p className="card-text" style={{ color: 'green' }}>{metricsData.totalRevenue}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Jobs Avg</h5>
              <p className="card-text">{metricsData.totalJobsAvg}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tickets Created</h5>
              <p className="card-text">{metricsData.ticketsCreated}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tickets Scheduled</h5>
              <p className="card-text">{metricsData.ticketsScheduled}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Outstanding Amount</h5>
              <p className="card-text" style={{ color: 'red' }}>{metricsData.outstandingAmount}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Memberships Sold</h5>
              <p className="card-text">{metricsData.membershipsSold}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Jobs Completed</h5>
              <p className="card-text">{metricsData.jobsCompleted}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Canceled</h5>
              <p className="card-text">{metricsData.totalCanceled}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
      {/* ... (Previous code) */}

      {/* Charts */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revenue by Job Location</h5>
              <Bar data={revenueByLocationData} />
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revenue by Job Type</h5>
              <Bar data={revenueByTypeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

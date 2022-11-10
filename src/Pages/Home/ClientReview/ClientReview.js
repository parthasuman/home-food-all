import React from "react";

const ClientReview = () => {
  return (
    <div className="grid grid-cols-3 gap-4 content-center justify-between my-10">
      <div className="stat">
        <div className="stat-title text-orange-700">Orders</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-title text-orange-700">New Users</div>
        <div className="stat-value">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-title text-orange-700">Old Users</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default ClientReview;

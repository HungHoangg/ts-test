// @ts-nocheck
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { LineChart } from "./line-chart";
import { path } from "../../routers/path";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ColumnChart } from "./column-chart";

export const Dashboard = () => {
  const navigate = useNavigate();
  const params = window.location.href;
  useEffect(() => {
    if (!params?.includes("/subcription")) {
      navigate(path.dasboard_sub);
    }
  }, []);

  return (
    <div className="management-layout">
      <div style={{ marginBottom: 20 }}>
        <div className="d-flex justify-content-between align-items-center management-layout-header">
          <div className="d-flex align-items-center auto-wrap">
            <h2>Dashboard</h2>
          </div>
        </div>
        <Button
          type="primary"
          className="close-button"
          onClick={() => navigate(path.dasboard_sub)}
        >
          Subcription
        </Button>
        <Button
          type="primary"
          className="close-button "
          onClick={() => navigate(path.dashboard_rev)}
          style={{ marginLeft: 10 }}
        >
          Revenue
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

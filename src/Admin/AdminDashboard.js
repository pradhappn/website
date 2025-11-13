import React, { useState } from "react";
import Sidebar from "../Admin/Sidebar";
import PackageSettings from "../Admin/PackageSettings";
import TradeHistory from "../Admin/TradeHistory";
import AdminReport from "../Admin/AdminReport";
import "../styles/adminDashboard.css";

const AdminDashboard = () => {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="admin-layout">
      <Sidebar currentPage={page} onSelect={setPage} />

      <div className="content-area">
        {page === "dashboard" && <PackageSettings />}
        {page === "trade" && <TradeHistory />}
        {page === "report" && <AdminReport />}
      </div>
    </div>
  );
};

export default AdminDashboard;

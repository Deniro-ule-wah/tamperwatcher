import React from "react";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Alerts</p>
            <p className="text-2xl font-bold text-destructive">7</p>
          </div>
          <div className="p-3 bg-destructive/10 rounded-full">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Resolved Today</p>
            <p className="text-2xl font-bold text-success">12</p>
          </div>
          <div className="p-3 bg-success/10 rounded-full">
            <CheckCircle className="w-6 h-6 text-success" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Pending Review</p>
            <p className="text-2xl font-bold text-accent">4</p>
          </div>
          <div className="p-3 bg-accent/10 rounded-full">
            <Clock className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
import React from "react";
import Header from "@/components/Header";
import DashboardStats from "@/components/DashboardStats";
import Map from "@/components/Map";
import RecentIncidents from "@/components/RecentIncidents";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <DashboardStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Map />
          <RecentIncidents />
        </div>
      </main>
    </div>
  );
};

export default Index;
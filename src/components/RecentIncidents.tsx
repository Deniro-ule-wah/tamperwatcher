import React from "react";
import { AlertCircle, ArrowRight } from "lucide-react";

const incidents = [
  {
    id: 1,
    client: "ABC Manufacturing",
    device: "GOV-2024-001",
    type: "Tampering Detected",
    severity: "high",
    time: "10 minutes ago",
  },
  {
    id: 2,
    client: "XYZ Industries",
    device: "GOV-2024-015",
    type: "Connection Lost",
    severity: "medium",
    time: "25 minutes ago",
  },
  {
    id: 3,
    client: "123 Corp",
    device: "GOV-2024-008",
    type: "Unauthorized Access",
    severity: "high",
    time: "1 hour ago",
  },
];

const RecentIncidents = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Incidents</h2>
        <button className="text-sm text-primary hover:text-primary/80 flex items-center">
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-2 rounded-full ${
                  incident.severity === "high"
                    ? "bg-destructive/10"
                    : "bg-accent/10"
                }`}
              >
                <AlertCircle
                  className={`w-5 h-5 ${
                    incident.severity === "high"
                      ? "text-destructive"
                      : "text-accent"
                  }`}
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{incident.client}</p>
                <p className="text-sm text-gray-500">
                  {incident.device} - {incident.type}
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{incident.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentIncidents;
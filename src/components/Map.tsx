import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [isTokenSubmitted, setIsTokenSubmitted] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = token;
      
      // Check if WebGL is supported
      if (!mapboxgl.supported()) {
        throw new Error("Your browser does not support WebGL, which is required to display the map.");
      }

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [0, 0],
        zoom: 1,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Clear any previous errors if map loads successfully
      map.current.on('load', () => {
        setError(null);
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while loading the map");
    }
  };

  const handleTokenSubmit = () => {
    if (!mapboxToken.trim()) {
      setError("Please enter a valid Mapbox token");
      return;
    }
    setIsTokenSubmitted(true);
    initializeMap(mapboxToken);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  if (!isTokenSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Device Locations</h2>
        <div className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Mapbox Token Required</AlertTitle>
            <AlertDescription>
              Please enter your Mapbox public token to view the map. You can find this in your Mapbox account dashboard.
            </AlertDescription>
          </Alert>
          <div className="flex gap-2">
            <Input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Enter your Mapbox token"
              className="flex-1"
            />
            <Button onClick={handleTokenSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Device Locations</h2>
      {error ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <div className="h-[400px] rounded-lg overflow-hidden">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default Map;
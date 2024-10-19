import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Helper function to set marker icons (Leaflet issue with default markers)
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const RouteAlloc = ({ vehicleName, checkpoints }) => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    // Fetch map data from Flask backend
    const fetchMapData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8888/routes/api/get_vehicle_map",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ vehicle_name: vehicleName, checkpoints }),
          }
        );

        const data = await response.json();
        setMapData(data);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchMapData();
  }, [vehicleName, checkpoints]);

  if (!mapData) return <div>Loading map...</div>;

  const { start, end, checkpoints: checkpointData, polyline } = mapData;

  return (
    <MapContainer
      center={start}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={polyline} color="blue" />
      <Marker position={start}>
        <Popup>Start Point</Popup>
      </Marker>
      <Marker position={end}>
        <Popup>End Point</Popup>
      </Marker>
      {checkpointData.map(({ name, coords }) => (
        <Marker key={name} position={coords}>
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RouteAlloc;

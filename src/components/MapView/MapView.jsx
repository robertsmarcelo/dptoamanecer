import React from "react";
import { MapContainer, TileLayer, Circle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const center = [-42.774546, -65.036151]

  return (
    <div className="w-full h-96 sm:h-48 max-h-[500px] sm:max-h-[100px] md:max-h-[350px] lg:max-h-[300px] rounded-lg overflow-hidden shadow-lg z-0">
      <MapContainer 
        center={center} 
        zoom={13} 
        className="w-full h-full"
        scrollWheelZoom={false} 
        dragging={false} 
        touchZoom={false} 
        doubleClickZoom={false} 
        keyboard={false}
      >
        {/* Capa del mapa */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Círculo de radio 300 metros */}
        <Circle
          center={center}
          radius={400}
          pathOptions={{
            color: "yellow",
            fillColor: "yellow",
            fillOpacity: 0.3,
          }}
        />
      </MapContainer>
    </div>
  );
};

export default MapView;

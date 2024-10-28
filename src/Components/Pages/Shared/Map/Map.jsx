import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Map = () => {

    

    return (
        <div className="border-2 border-purple-700 rounded-lg p-10">
        <MapContainer center={[23.902681, 89.128455]} zoom={16} style={{ height: "100vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[23.902681, 89.128455]}>
          <Popup>আমলা সেন্টার মোড়, সেন্টারপাড়া</Popup>
        </Marker>
      </MapContainer>
        </div>
    );
};

export default Map;
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat:  -21.6034, 
  lng:  -48.3665,
};

const MarketMap = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchNearbyMarkets = () => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      const request = {
        location: new window.google.maps.LatLng(center.lat, center.lng),
        radius: "2000", 
        type: ["supermarket"], 
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setMarkets(results);
        }
      });
    };

    if (window.google) {
      fetchNearbyMarkets();
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyA8XOn-q4kcM0YAURdjnIx2DHY_R8KwSSw" libraries={["places"]}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {markets.map((market) => (
          <Marker
            key={market.place_id}
            position={{
              lat: market.geometry.location.lat(),
              lng: market.geometry.location.lng(),
            }}
            title={market.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MarketMap;

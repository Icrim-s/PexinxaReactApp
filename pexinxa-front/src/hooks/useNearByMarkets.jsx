import { useState, useEffect } from "react";

const useNearbyMarkets = (center, radius = 2000, type = "supermarket") => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchNearbyMarkets = () => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      const request = {
        location: new window.google.maps.LatLng(center.lat, center.lng),
        radius: radius.toString(),
        type: [type],
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
  }, [center, radius, type]);

  return markets;
};

export default useNearbyMarkets;

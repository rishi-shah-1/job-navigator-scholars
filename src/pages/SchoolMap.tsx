
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SchoolMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // You'll need to replace this with your Mapbox public token
    mapboxgl.accessToken = 'YOUR-MAPBOX-TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.360384, 40.459911], // Sayreville War Memorial High School coordinates
      zoom: 15
    });

    // Add marker for the school
    new mapboxgl.Marker()
      .setLngLat([-74.360384, 40.459911])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Sayreville War Memorial High School</h3><p>820 Washington Rd, Parlin, NJ 08859</p>"))
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="page-container py-8">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#003087]">
            Sayreville War Memorial High School
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <div ref={mapContainer} className="absolute inset-0" />
          </div>
          <div className="mt-4 text-gray-600">
            <p className="font-semibold">Address:</p>
            <p>820 Washington Rd, Parlin, NJ 08859</p>
            <p className="mt-2 font-semibold">Contact:</p>
            <p>Phone: (732) 525-5200</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolMap;

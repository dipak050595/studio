'use client';

import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
} from '@vis.gl/react-google-maps';
import { MapPin } from 'lucide-react';

const position = { lat: 40.712776, lng: -74.005974 }; // New York City

export function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full min-h-[400px] w-full items-center justify-center rounded-lg bg-muted">
        <div className="text-center text-muted-foreground">
          <p className="font-semibold">Map could not be loaded.</p>
          <p className="text-sm">
            Google Maps API Key is missing.
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-full min-h-[400px] w-full rounded-lg overflow-hidden">
        <GoogleMap
          defaultCenter={position}
          defaultZoom={14}
          mapId="fitnmove-map"
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={position}>
            <MapPin className="h-8 w-8 text-primary" />
          </AdvancedMarker>
        </GoogleMap>
      </div>
    </APIProvider>
  );
}

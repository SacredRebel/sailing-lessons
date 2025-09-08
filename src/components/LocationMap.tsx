import React from "react";

// Long Beach coordinates
const LONG_BEACH_COORDS = {
  lat: 33.7701,
  lng: -118.1937,
};

const MAP_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${LONG_BEACH_COORDS.lng-0.01}%2C${LONG_BEACH_COORDS.lat-0.01}%2C${LONG_BEACH_COORDS.lng+0.01}%2C${LONG_BEACH_COORDS.lat+0.01}&layer=mapnik&marker=${LONG_BEACH_COORDS.lat}%2C${LONG_BEACH_COORDS.lng}`;

const LocationMap: React.FC = () => (
  <section id="location" className="py-16 bg-gradient-to-b from-sky-50 via-white to-slate-50 border-t border-sky-100">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-6">
        <span className="font-bold text-sky-700 text-lg">Location</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
        Find Us in Long Beach
      </h2>
      <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
        We're docked at the heart of Long Beach, CA. Easy access, beautiful views, and plenty of parking nearby.
      </p>
      <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-200 mx-auto max-w-full" style={{height: '350px'}}>
        <iframe
          title="Long Beach Map"
          src={MAP_URL}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default LocationMap;

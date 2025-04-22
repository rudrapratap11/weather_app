'use client';
import { useEffect, useState } from 'react';

const mockForecast = [
  { time: '8 AM', temp: '6°C', condition: 'Sunny ☀️' },
  { time: '9 AM', temp: '7°C', condition: 'Sunny ☀️' },
  { time: '10 AM', temp: '9°C', condition: 'Partly Cloudy 🌤️' },
  { time: '11 AM', temp: '10°C', condition: 'Partly Cloudy 🌤️' },
  { time: '12 PM', temp: '11°C', condition: 'Sunny ☀️' },
  { time: '1 PM', temp: '12°C', condition: 'Sunny ☀️' },
  { time: '2 PM', temp: '12°C', condition: 'Clear 🌕' },
  { time: '3 PM', temp: '13°C', condition: 'Sunny ☀️' },
  { time: '4 PM', temp: '14°C', condition: 'Sunny ☀️' },
  { time: '5 PM', temp: '13°C', condition: 'Cloudy ☁️' },
  { time: '6 PM', temp: '12°C', condition: 'Cloudy ☁️' },
  { time: '7 PM', temp: '11°C', condition: 'Windy 🌬️' },
];

export default function LocationPage() {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setForecast(mockForecast);
      setLoading(false);
    }, 1500); // simulate 1.5s delay
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        
      }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Calgary 12-Hour Forecast</h1>

        {loading ? (
          <p className="text-center text-gray-700 font-semibold">Loading weather data...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {forecast.map((hour, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
              >
                <p className="text-lg font-semibold text-blue-800">{hour.time}</p>
                <p className="text-sm text-gray-700 mt-1">{hour.temp}</p>
                <p className="text-sm text-gray-600">{hour.condition}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

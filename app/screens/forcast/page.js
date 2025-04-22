'use client';
import { useEffect, useState } from 'react';

const mock7DayForecast = [
  { day: 'Mon', icon: '☀️', temp: '23°C', condition: 'Sunny' },
  { day: 'Tue', icon: '🌤️', temp: '21°C', condition: 'Partly Cloudy' },
  { day: 'Wed', icon: '🌧️', temp: '18°C', condition: 'Rain Showers' },
  { day: 'Thu', icon: '⛅', temp: '19°C', condition: 'Cloudy' },
  { day: 'Fri', icon: '🌦️', temp: '20°C', condition: 'Light Rain' },
  { day: 'Sat', icon: '🌩️', temp: '22°C', condition: 'Thunderstorm' },
  { day: 'Sun', icon: '🌞', temp: '25°C', condition: 'Clear Sky' },
];

export default function ForecastPage() {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setForecast(mock7DayForecast);
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-blue-600 to-blue-800 flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/calgary_skyline.jpg')",
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl w-full max-w-4xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow">
          🌤️ Calgary 7-Day Forecast
        </h1>

        {loading ? (
          <p className="text-center text-white font-medium animate-pulse">Loading forecast...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {forecast.map((day, idx) => (
              <div
                key={idx}
                className="bg-white/20 border border-white/30 rounded-xl p-4 text-center shadow-md hover:scale-105 transition-transform text-white backdrop-blur-md"
              >
                <p className="text-xl font-semibold">{day.day}</p>
                <p className="text-3xl mt-2">{day.icon}</p>
                <p className="text-lg mt-2 font-bold">{day.temp}</p>
                <p className="text-sm mt-1 opacity-80">{day.condition}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

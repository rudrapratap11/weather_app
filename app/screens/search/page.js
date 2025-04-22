'use client';
import { useState } from 'react';

const weatherMock = {
  calgary: { temp: '7°C', condition: 'Sunny ☀️' },
  edmonton: { temp: '4°C', condition: 'Cloudy ☁️' },
  reddeer: { temp: '5°C', condition: 'Partly Cloudy 🌤️' },
  lethbridge: { temp: '6°C', condition: 'Windy 🌬️' },
  medicinehat: { temp: '9°C', condition: 'Clear 🌕' },
};

export default function SearchPage() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const key = city.trim().toLowerCase();
    if (weatherMock[key]) {
      setResult(weatherMock[key]);
      setError('');
    } else {
      setResult(null);
      setError('City not found in Alberta.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/images/Peyto+Lake+-+Banff+National+Park.jpeg')", // Make sure the image exists
      }}
    >
      <div className="bg-white/90 p-8 rounded-2xl shadow-2x max-w-md w-half text-center backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-6 text-gray-20">Search Alberta Weather</h1>

        <input
          type="text"
          placeholder="Enter Alberta city (e.g., Calgary)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-5 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-50 hover:bg-blue-60 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Search
        </button>

        {/* Weather Result */}
        {result && (
  <div className="mt-6 w-full flex justify-center animate-fade-in-up">
    <div className="bg-white !bg-opacity-100 rounded-xl shadow-2xl p-6 text-center text">
      <p className="text-2xl font-bold tracking-wide uppercase text-blue-900">{city}</p>
      <p className="text-lg mt-2">{result.temp} - {result.condition}</p>
    </div>
  </div>
)}


        

        {/* Error */}
        {error && (
          <p className="text-red-500 mt-4 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}

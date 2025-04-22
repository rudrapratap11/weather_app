'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const hourly = [
    { time: '12:00 PM', temp: '21°C', icon: '☀️' },
    { time: '1:00 PM', temp: '2°C', icon: '🌤️' },
    { time: '2:00 PM', temp: '20°C', icon: '☁️' },
    { time: '3:00 PM', temp: '19°C', icon: '☁️' },
    { time: '4:00 PM', temp: '18°C', icon: '🌧️' },
  ];

  const weekly = [
    { day: 'Mon', temp: '21°C', icon: '☀️' },
    { day: 'Tue', temp: '20°C', icon: '🌤️' },
    { day: 'Wed', temp: '16°C', icon: '☁️' },
    { day: 'Thu', temp: '17°C', icon: '☁️' },
    { day: 'Fri', temp: '18°C', icon: '🌧️' },
  ];

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center px-4 py-10 text-gray-800 font-sans">
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Current Weather */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl shadow-xl px-8 py-6 w-full max-w-4xl mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-800">23°C</h1>
          <p className="text-gray-600 mt-2">Coimbra, Portugal</p>
        </div>
        <div className="text-6xl">☀️</div>
      </div>

      {/* Hourly Forecast Box */}
      <div className="bg-white rounded-3xl shadow-xl px-6 py-6 w-full max-w-4xl mb-8 flex flex-col items-center">
        <div className="flex justify-between w-full">
          {hourly.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-sm font-medium mb-1">{item.temp}</p>
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-xs font-semibold text-gray-600">{item.time}</p>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4">
          <span className="w-2 h-2 bg-gray-500 rounded-full mx-1" />
          <span className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
          <span className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
        </div>
      </div>

      {/* Weekly Forecast Box */}
      <div className="bg-white rounded-3xl shadow-xl px-6 py-6 w-full max-w-4xl flex flex-col items-center">
        <div className="flex justify-between w-full">
          {weekly.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-sm font-medium mb-1">{item.temp}</p>
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-xs font-semibold text-gray-600">{item.day}</p>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4">
          <span className="w-2 h-2 bg-gray-500 rounded-full mx-1" />
          <span className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
          <span className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
        </div>
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { Home, Search, MapPin, CloudSun } from 'lucide-react';

export default function ProjectPage() {

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/2942781.jpg')" }}
    >
      {/* Animated Cloud Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-10 left-0 w-96 h-96 bg-white rounded-full opacity-10 animate-cloud-slow blur-3xl" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-white rounded-full opacity-10 animate-cloud-fast blur-3xl" />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen bg-slate-900/50 backdrop-blur-sm">
        {/* Elegant Dark Navbar */}
        <nav className="bg-slate-800 bg-opacity-90 shadow-lg rounded-b-2xl px-6 py-4 mb-6">
          <ul className="flex justify-between items-center max-w-4xl mx-auto text-white font-medium">
            <li className="flex items-center space-x-2 hover:text-amber-400 transition-all">
              <Home size={20} />
              <Link href="/screens/home" className="hover:underline">Home</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-amber-400 transition-all">
              <Search size={20} />
              <Link href="/screens/search" className="hover:underline">Search</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-amber-400 transition-all">
              <MapPin size={20} />
              <Link href="/screens/location" className="hover:underline">Location</Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-amber-400 transition-all">
              <CloudSun size={20} />
              <Link href="/screens/forcast" className="hover:underline">Forecast</Link>
            </li>
          </ul>
        </nav>

        {/* Centered Weather Box */}
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-10 max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-sky-700 mb-4">Welcome to the Project Page 🌦️</h1>
            <p className="text-lg text-slate-700">
              Dive into weather insights, forecasts, and location-based conditions – all in one place.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

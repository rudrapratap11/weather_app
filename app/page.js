'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/project');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between p-8"
      style={{
        backgroundImage: "url('/images/2806814.webp')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-4xl text-center shadow-lg mt-10">
        <h1 className="text-4xl font-bold text-white mb-6">History of Weather Websites ☁️</h1>

        <p className="text-lg text-white mb-4">
          Weather websites have come a long way—from basic static pages that only displayed temperature and rain chances
          to dynamic platforms that provide real-time updates, forecasts, radar imagery, and more.
        </p>

        <p className="text-lg text-white mb-4">
          Initially, weather data came from government agencies and was difficult to access. Now with APIs like
          OpenWeatherMap, anyone can integrate live weather data into websites and apps with just a few lines of code.
        </p>

        <p className="text-lg text-white mb-4">
          The evolution of weather websites reflects improvements in data science, satellite technology, and user-centered
          design. Today’s weather apps are faster, more accurate, and more personalized than ever.
        </p>

        <p className="text-lg text-white">
          This project is a demo of a simple weather tool that allows users to input latitude and longitude to retrieve
          current weather data using OpenWeatherMap.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <button
          onClick={handleClick}
          className="bg-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-blue-800 transition"
        >
          Open Project 🚀
        </button>
      </div>
    </div>
  );
}

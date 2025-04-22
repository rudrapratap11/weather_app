// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Weather App',
  description: 'A weather website using lat/lon and OpenWeather API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

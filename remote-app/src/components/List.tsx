import React, { useEffect, useState } from "react";

type WeatherData = {
  // Define the types for your weather data
  // Adjust these according to the actual structure of the data
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

const List: React.FC = () => {
  const [data, setData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.57.51:8587/WeatherForecastLorestan"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-8 text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-gradient-to-r from-pink-500 to-purple-800 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-yellow-300">
        Weather Forecast for Tehran
      </h1>
      <ul className="list-disc pl-6">
        {data.map((item) => (
          <li key={item.date} className="mb-2 text-blue-200 whitespace-nowrap">
            <span className="font-bold text-green-400">{item.date}:</span>{" "}
            {item.summary}, {item.temperatureC}°C ({item.temperatureF}°F)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

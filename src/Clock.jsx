import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { timeZones } from "./timeZones";

export default function Clock({ cityKey }) {
  const [time, setTime] = useState();

  const timeZoneData = timeZones[cityKey];

  useEffect(() => {
    const date = new Date();
    setTime(
      date.toLocaleTimeString("sv-SE", { timeZone: timeZoneData.timeZone })
    );
    setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("sv-SE", { timeZone: timeZoneData.timeZone })
      );
    }, 1000);
  }, []);

  return (
    <div
      className="flex md:flex-col justify-between items-center 
    md:items-start py-4 pl-6 md:p-6 bg-slate-200 rounded-md w-72 md:w-40 mb-4"
    >
      <div className="text-sm md:text-lg text-purple-700 w-1/3 md:w-fit">
        {timeZoneData.city}
      </div>
      <div className="text-sm md:text-3xl text-gray-900 font-semibold font-mono w-1/3 md:w-fit">
        {time}
      </div>
      <div className="text-sm text-gray-600 underline hover:text-gray-400 w-1/3 md:w-fit">
        <Link to={`clock/${cityKey}`}>Bigger</Link>
      </div>
    </div>
  );
}

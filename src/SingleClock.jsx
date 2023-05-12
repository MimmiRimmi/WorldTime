import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { timeZones } from "./timeZones";

export default function SingleClock() {
  const params = useParams();
  const [time, setTime] = useState();

  const timeZoneData = timeZones[params.cityKey];

  useEffect(() => {
    const date = new Date();
    setTime(
      date.toLocaleTimeString("sv-SE", {
        timeZone: timeZoneData.timeZone,
      })
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
      className="flex md:flex-row px-10 md:px-40 py-10 md:py-20 space-x-0 md:space-x-4 
    font-display bg-bg-clock bg-cover h-screen"
    >
      <div className="flex flex-col md:items-start px-10 md:py-20 py-14 items-center justify-between bg-slate-200 rounded-md md:w-80 w-60 md:h-80 h-60 mb-4">
        <div className="text-3xl md:text-5xl font-extralight text-purple-700">
          {timeZoneData.city}
        </div>
        <div className="text-3xl md:text-5xl text-gray-900 font-semibold">
          {time}
        </div>
        <div className=" text-gray-600 underline hover:text-gray-400">
          <Link to={"/"}>Back to home</Link>
        </div>
      </div>
    </div>
  );
}

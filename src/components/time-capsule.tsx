"use client";

import { useEffect, useState } from "react";

const TimeCapsule = () => {
  const [timeLondon, setTimeLondon] = useState("");
  const [timeLjubljana, setTimeLjubljana] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // London time
      const londonTime = now.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTimeLondon(londonTime);

      // Ljubljana time
      const ljubljanaTime = now.toLocaleString("en-GB", {
        timeZone: "Europe/Ljubljana",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTimeLjubljana(ljubljanaTime);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden ml-auto md:mr-20 text-xs xxs:flex flex-col gap-1">
      <div>LDN: {timeLondon}</div>
      <div>BCN: {timeLjubljana}</div>
    </div>
  );
};

export default TimeCapsule;

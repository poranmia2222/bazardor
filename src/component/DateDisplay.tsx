"use client";

import { useEffect, useState } from "react";

const DateDisplay = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });

    setDate(today);
  }, []);

  return <p className="text-sm">{date}</p>;
};

export default DateDisplay;
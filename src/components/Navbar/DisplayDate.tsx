"use client";

import { useEffect, useState } from "react";

interface ClassNameprops{
  className?: string
}
export default function DisplayDate({className}: ClassNameprops) {
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const today = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
      });

      setDate(today);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return <p className={className}>{date || "তারিখ লোড হচ্ছে..."}</p>;
}
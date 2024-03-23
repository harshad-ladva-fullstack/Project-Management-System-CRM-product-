"use client";

import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return width;
}

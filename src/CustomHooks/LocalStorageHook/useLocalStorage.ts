import { useState, useEffect } from "react";

export default function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem(key) || '{}');
    if (savedValue !== null) {
      return savedValue;
    }
    if (typeof initialValue === "function") {
      return initialValue();
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

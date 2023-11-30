import { useEffect, useState } from "react";

const getSaved = (key, defaultValue) => {
  const local = JSON.parse(localStorage.getItem(key));
  const session = JSON.parse(sessionStorage.getItem(key));

  if (local !== null && local !== undefined) {
    return local;
  }
  if (session !== null && session !== undefined) {
    return session;
  }

  return defaultValue;
};

export const useStorage = (key, defaultValue) => {
  const saved = getSaved(key, defaultValue);
  const [value, setValue] = useState(saved);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

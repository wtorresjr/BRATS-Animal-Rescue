// AppContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AppContext = createContext();

// Define the provider component
export const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API call
    const fetchData = async () => {
      try {
        const response = await fetch("/api/animals/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

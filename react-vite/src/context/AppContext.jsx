// AppContext.jsx
// import React, { createContext, useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllAnimalsThunk } from "../redux/animals";

// // Create the context
// export const AppContext = createContext();

// // Define the provider component
// export const AppProvider = ({ children }) => {
//   const dispatch = useDispatch();
//   const animals = useSelector((state) => state.animals);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await dispatch(getAllAnimalsThunk());
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   return (
//     <AppContext.Provider value={{ animals, loading, error }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAllCategories } from '../firebase/GetAllCategories';

// Create Context
const CategoriesContext = createContext();

// Context Hook
export const useCategories = () => {
  return useContext(CategoriesContext);
};

// Provider
export const CategoriesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchAllCategories();
        console.log('Fetched Data:', result); // Log data to console
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  return (
    <CategoriesContext.Provider value={{ data, error }}>
      {children}
    </CategoriesContext.Provider>
  );
};

// Prop types validation
CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoriesContext;

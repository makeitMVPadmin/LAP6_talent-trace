import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchUserDetails } from '../firebase/GetUserDetails';

// Create Context
const UsersContext = createContext();

// Context Hook
export const useUsers = () => {
  return useContext(UsersContext);
};

// Provider
export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const data = await fetchUserDetails();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsersData();
  }, []);

  return (
    <UsersContext.Provider value={{ users, error }}>
      {children}
    </UsersContext.Provider>
  );
};

// Prop types validation
UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersContext;
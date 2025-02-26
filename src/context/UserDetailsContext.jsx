import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchUserDetail } from '../firebase/GetUser';
import { useParams } from 'react-router-dom';

// Create Context
const UserContext = createContext();

// Context Hook
export const useUser = () => {
  return useContext(UserContext);
};

// Provider
export const UserProvider = ({ children }) => {
  const { userId } = useParams(); // Get URL parameters
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchUserDetail(userId);
        setUser(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, error }}>
      {children}
      {console.log(user)}
    </UserContext.Provider>
  );
};

// Prop types validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;

// FollowStatusContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const FollowStatusContext = createContext();

export const useFollowStatus = () => useContext(FollowStatusContext);

export const FollowStatusProvider = ({ children }) => {
  const [followStatus, setFollowStatus] = useState(
    JSON.parse(localStorage.getItem('followStatus')) || {}
  );

  useEffect(() => {
    localStorage.setItem('followStatus', JSON.stringify(followStatus));
  }, [followStatus]);

  const toggleFollowStatus = (userId) => {
    setFollowStatus((prevStatus) => ({
      ...prevStatus,
      [userId]: !prevStatus[userId],
    }));
  };

  return (
    <FollowStatusContext.Provider value={{ followStatus, toggleFollowStatus }}>
      {children}
    </FollowStatusContext.Provider>
  );
};

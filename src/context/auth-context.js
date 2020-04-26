import React, { createContext, useContext, useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { Loader } from '../components/Loader';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoader(false);
    });
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, loader }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthValue = () => useContext(AuthContext);

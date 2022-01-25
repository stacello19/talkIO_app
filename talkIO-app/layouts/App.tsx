import React, { useContext, useEffect } from 'react';

import Home from '@pages/Home/Home';
import Profile from '@pages/Profile/Profile';
import NotFound from '@pages/NotFound';
import Header from '@components/Basic/Header';
import { UserContext } from '@utils/context/userContext';
import ProtectedComponent from '@components/Basic/ProtectedComponent/Protected';
import { verifyUser } from '@utils/help';

import { Routes, Route } from "react-router-dom";

const App = () => {
  const [userContext, setUserContext] = useContext(UserContext);

  useEffect(() => {
    verifyUser(setUserContext, userContext)
  },[userContext]);

  return(
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={
          <ProtectedComponent>
            <Profile />
          </ProtectedComponent>
          } 
        />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App;
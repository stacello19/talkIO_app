import React, { VFC, useContext, useCallback } from 'react';
import { HeaderDiv, Button } from './styles';
import { UserContext } from '@utils/context/userContext';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Chat } from '@styles/icons';

const Header: VFC = () => {
  const navigate = useNavigate();
  const [userContext, setUserContext] = useContext(UserContext);

  const handleLogout = useCallback(async () => {
    await axios.post('/api/auth/logout', {}, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${userContext.token}`
      }
    })
    setUserContext((prev: any) => ({...prev, token: null }) );
    navigate('/')
  },[userContext])
  return(
    <HeaderDiv>
      <h3>
        <span>TalkIo...</span>
        <Chat fill='#FFF' width={30} height={30} />
      </h3>
      { userContext.token && <Button onClick={handleLogout}>Logout</Button> } 
    </HeaderDiv>
  )
}

export default Header;
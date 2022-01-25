import React, { VFC, useState, useCallback, useContext } from 'react';
import { Box, H1, Tab } from './styles';
import Login from '@components/Login';
import Register from '@components/Register';
import { AuthorizationProps } from '@typings/index';
import { UserContext } from '@utils/context/userContext';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home: VFC = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    nickname: ''
  });
  const [tabType, setTabType] = useState('login');
  const [, setUserContext] = useContext(UserContext);

  const handleChange = useCallback((e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues(prev => ({...prev, [name]: value}));
  },[]);

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      nickname: ''
    })
    
    if (tabType === 'signup') {
      await handleRegister(values);
    } else {
      await handleLogIn(values);
    }
  },[tabType, values]);

  const handleRegister = useCallback(async(data: AuthorizationProps) => {
    try {
      const response = await axios.post('/api/auth/join', data, { withCredentials: true });
      const { code, token, message } = response.data;
      if (code === 200) {
        setUserContext((prev: any) => ({ ...prev, token }));
        navigate('/profile')
      } else if (code === 303) {
        alert(message)
      }
    } catch (error) {
      alert('Error!')
    }
  },[setUserContext]);

  const handleLogIn = useCallback(async(data: AuthorizationProps) => {
    try {
      const response = await axios.post('/api/auth/login', data, { withCredentials: true });
      const { code, message, token } = response.data;
      if (code === 200) {
        setUserContext((prev: any) => ({ ...prev, token }));
        navigate('/profile');
      } else if (code === 302) {
        alert(message)
      }
    } catch (error) {
      alert('Email or password is wrong')
    }
  },[setUserContext])

  return(
    <div style={{ display: 'grid', justifyItems: 'center', margin: '2rem' }}>
      <H1>Welcome! Join TalkIo</H1>
      <Box>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tab onClick={() => setTabType('login')} active={tabType === 'login'}>LOGIN</Tab>
          <Tab onClick={() => setTabType('signup')} active={tabType === 'signup'}>SIGN UP</Tab>
        </div>
        <div>
          { tabType === 'signup' && <Register values={values} handleChange={handleChange} handleSubmit={handleSubmit} /> }
          { tabType === 'login' && <Login values={values} handleChange={handleChange} handleSubmit={handleSubmit} /> }
        </div>
      </Box>
    </div>
  )
}

export default Home;
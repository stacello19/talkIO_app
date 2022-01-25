import React, { VFC } from 'react';

import { Button } from '@styles/common';
import VerticalForm from '@components/Basic/VerticalForm';

interface LoginProps {
  handleChange: (e: any) => void,
  handleSubmit: (e: any) => void,
  values: {
    email: string,
    password: string
  }
}

const Login: VFC<LoginProps> = ({ handleSubmit, handleChange, values }) => {
  return(
    <form onSubmit={handleSubmit} style={{ display: 'grid', justifyItems: 'center' }}>
      <VerticalForm label={'Email'} onChange={handleChange} value={values?.email} name={'email'}/>
      <VerticalForm label={'Password'} onChange={handleChange} value={values?.password} name={'password'}/>
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default Login;
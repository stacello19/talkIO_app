import React, { VFC } from 'react';

import { Button } from '@styles/common';
import VerticalForm from '@components/Basic/VerticalForm';

interface RegisterProps {
  handleChange: (e: any) => void,
  handleSubmit: (e: any) => void,
  values: {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    nickname: string
  }
}

const Register: VFC<RegisterProps> = ({ handleSubmit, handleChange, values }) => {
  return(
    <form onSubmit={handleSubmit} style={{ display: 'grid', justifyItems: 'center' }}>
      <VerticalForm label={'First Name'} onChange={handleChange} value={values?.firstName} name={'firstName'}/> 
      <VerticalForm label={'Last Name'} onChange={handleChange} value={values?.lastName} name={'lastName'}/> 
      <VerticalForm label={'Email'} onChange={handleChange} value={values?.email} name={'email'}/>
      <VerticalForm label={'Password'} onChange={handleChange} value={values?.password} name={'password'}/>
      <VerticalForm label={'Nickname'} onChange={handleChange} value={values?.nickname} name={'nickname'}/>
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default Register;
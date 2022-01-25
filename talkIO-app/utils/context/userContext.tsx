import React, { useState, createContext } from 'react';
import { UserProps } from '@typings/index';

const UserContext: any = createContext([{}, () => {}]);

let initialState = {
  token: ''
};

const UserProvider = ({ children }: {children: any}) => {
  const [state, setState] = useState<UserProps>(initialState);

  return(
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };
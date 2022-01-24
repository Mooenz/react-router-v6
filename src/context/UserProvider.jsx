import { createContext, useState } from 'react';

export const UserContext = createContext();

const {Provider} = UserContext;

const UserProvider = ({children}) => {
  const [user, setUser] = useState(false);

  const signIn = () => {
    setUser(true);
  };

  const signOut = () => {
    setUser(false);
  };
  
  return <Provider value={{user, signIn, signOut}}>
    {children}
  </Provider>;
};

export default UserProvider;

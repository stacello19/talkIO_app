import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@utils/context/userContext';

const ProtectedComponent = ({ children }: { children: JSX.Element }) => {
  const [userContext] = useContext(UserContext);
  const navigate = useNavigate();

  if (!userContext.token) {
    navigate('/')
  }
  return children;
}

export default ProtectedComponent;
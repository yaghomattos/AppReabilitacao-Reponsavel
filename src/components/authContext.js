import { createContext } from 'react';

const AuthContext = createContext({ id: '', token: '', username: '' });

export default AuthContext;

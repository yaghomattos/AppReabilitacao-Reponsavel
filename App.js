import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { AuthContext } from './src/context/Auth';
import { AuthRouter, FlowRouter } from './src/routes/app.routes';
import './src/services/firebase';

const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isSignedIn, setSignedIn }}>
      {!isSignedIn ? <AuthRouter /> : <FlowRouter />}
    </AuthContext.Provider>
  );
};

export default App;

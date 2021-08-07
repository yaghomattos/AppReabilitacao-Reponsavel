import React, { useContext } from 'react';

import { Button } from '../components/Button';

import AuthContext from '../components/authContext';

export const ToChat = () => {
  const { id, token, username } = useContext(AuthContext);

  return <Button title="Chat" onPress="ListPatientChat" props={id} />;
};

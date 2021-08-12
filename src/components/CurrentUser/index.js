import { useEffect, useState } from 'react';

import Parse from 'parse/react-native';

export const CurrentUser = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

   useEffect(() => {
    async function getCurrentUser() {
      if (username === '') {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setId(currentUser.id);
          setUsername(currentUser.getUsername());
          setToken(currentUser.getSessionToken());
        };
      };
    }
    getCurrentUser();
  }, [id, token, username]);

  return {id, token, username};
};

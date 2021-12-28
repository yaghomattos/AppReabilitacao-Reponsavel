import { useEffect, useState } from 'react';
import { auth } from '../../../services/firebase';

export async function CurrentUser() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function getCurrentUser() {
      const user = auth.currentUser;
      if (user !== null) {
        setId(user.uid);
        setUsername(user.displayName);
      }
    }
    getCurrentUser();
  }, [id, username]);

  return { id, username };
}

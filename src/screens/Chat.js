import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import Parse from 'parse/react-native.js';

export function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getCurrentUser() {
      currentUser = await Parse.User.currentAsync().catch(() => {
        console.warn('No user');
      });
    }

    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);

    getCurrentUser();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const Message = Parse.Object.extend('Chat');
    let message = new Message();

    message.set('from');
    message.set('content', messages[0].text);
    message.save();
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

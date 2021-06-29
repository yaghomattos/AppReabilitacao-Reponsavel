import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import { AsyncStorage } from 'react-native';
AsyncStorage.clear();

//import Parse from 'parse/react-native.js';
import { useParseQuery } from '@parse/react-native';

Parse.enableLocalDatastore();

const parseQuery = new Parse.Query('Chat');
parseQuery.descending('createdAt');

export function Chat() {
  let currentUser;

  const [messages, setMessages] = useState([]);

  const { isLive, isLoading, isSync, results, count, erro, reload } =
    useParseQuery(parseQuery);

  useEffect(() => {
    async function getCurrentUser() {
      currentUser = await Parse.User.currentAsync().catch(() => {
        console.warn('No user');
      });
    }

    getCurrentUser();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const Message = Parse.Object.extend('Chat');
    let message = new Message();

    message.set('fromAdmin', currentUser);
    message.set('content', messages[0].text);
    message.save();
  }, []);

  return (
    <GiftedChat
      messages={
        results &&
        results.map((liveMessage) => ({
          _id: liveMessage.id,
          text: liveMessage.get('content'),
          createdAt: liveMessage.get('createdAt'),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        }))
      }
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import Parse from 'parse/react-native.js';
import { useParseQuery } from '@parse/react-native';

//Parse.enableLocalDatastore();

const parseQuery = new Parse.Query('Chat');
parseQuery.descending('createdAt');

export function Chat() {
  var currentUser = '';

  var testUser = '';

  const [messages, setMessages] = useState([]);

  const { isLive, isLoading, isSync, results, count, erro, reload } =
    useParseQuery(parseQuery);

  useEffect(() => {
    var mounted = false;
    if (!mounted) {
      currentUser = Parse.User.current();
      console.log(currentUser);
      testUser = currentUser;
    }
    if (currentUser !== testUser) {
      console.log('erro');
    }
    return () => {
      mounted = true;
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const Message = new Parse.Object('Chat');

    Message.set('fromAdmin', currentUser);
    Message.set('content', messages[0].text);
    Message.save();
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

import React, { useState, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import Parse from 'parse/react-native.js';
import { useParseQuery } from '@parse/react-native';

const parseQuery = new Parse.Query('Chat');
parseQuery.descending('createdAt');

export function Chat(props) {
  var currentUser = {
    __type: 'Pointer',
    className: '_User',
    objectId: props.route.params.admin,
  };

  var toPatient = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: props.route.params.item.id
  }

  parseQuery.equalTo('fromAdmin', currentUser);

  const [messages, setMessages] = useState([]);

  const { isLive, isLoading, isSync, results, count, erro, reload } =
    useParseQuery(parseQuery);

  function teste(object) {
    if(object.get('from') === '1') {
      return 1; 
    }
    return 2;  
  }

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const Message = new Parse.Object('Chat');

    Message.set('fromAdmin', currentUser);
    Message.set('fromPatient', toPatient);
    Message.set('from', 1);
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
            _id: teste(liveMessage),
            name: 'Teste',
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

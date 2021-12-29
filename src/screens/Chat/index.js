import { Ionicons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/native';
import Parse from 'parse/react-native.js';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { Avatar, IconButton } from 'react-native-paper';
import { readParticipantWithId } from '../../components/CRUDs/Participant/index';
import styles from './styles';

const parseQuery = new Parse.Query('Chat');
parseQuery.descending('createdAt');

var participant = '';

async function Search(props) {
  readParticipantWithId(props).then((response) => {
    participant = response.get('name');
  });
}

export function Chat(props) {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);

  var participantId = props.route.params.item.id;
  var userId = props.route.params.adminId;

  Search(participantId);

  var currentUser = {
    __type: 'Pointer',
    className: '_User',
    objectId: userId,
  };
  var toParticipant = {
    __type: 'Pointer',
    className: 'Participant',
    objectId: participantId,
  };

  parseQuery.equalTo('fromAdmin', currentUser);
  parseQuery.find();
  parseQuery.equalTo('fromParticipant', toParticipant);
  const results = useParseQuery(parseQuery).results;

  Parse.User._clearCache();

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const Message = new Parse.Object('Chat');

    Message.set('fromAdmin', currentUser);
    Message.set('fromParticipant', toParticipant);
    Message.set('from', '1');
    Message.set('content', messages[0].text);
    try {
      const result = Message.save();
    } catch (error) {
      console.error('Error while creating Chat: ', error);
    }
  }, []);

  function CheckRecipient(object) {
    if (object.get('from') === '1') {
      return 1;
    }
    return 2;
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={40} color="#000" />
        </View>
      </Send>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#384955" />
      </View>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#384955" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={100}
            style={styles.avatar}
            source={require('../../assets/profile.jpg')}
          />
        </View>
        <View style={styles.person}>
          <Text style={styles.text}>{participant}</Text>
          <View style={styles.viewCircle}>
            <View style={styles.circleCall}>
              <Ionicons
                name="call-sharp"
                size={24}
                color="#fff"
                style={styles.call}
              />
            </View>
            <View style={styles.circleVideo}>
              <Ionicons
                name="videocam-sharp"
                size={24}
                color="#fff"
                style={styles.video}
              />
            </View>
          </View>
        </View>
      </View>
      <GiftedChat
        messages={
          results &&
          results.map((liveMessage) => ({
            _id: liveMessage.id,
            text: liveMessage.get('content'),
            createdAt: liveMessage.get('createdAt'),
            user: {
              _id: CheckRecipient(liveMessage),
              name: participant,
            },
          }))
        }
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        placeholder="Digite sua mensagem"
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
      />
    </SafeAreaView>
  );
}

import { Ionicons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/native';
import Parse from 'parse/react-native.js';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { Avatar, IconButton } from 'react-native-paper';
import { readParticipant } from '../../components/CRUDs/Participant/index';
import styles from './styles';

const parseQuery = new Parse.Query('Educational');
parseQuery.descending('createdAt');

var participant = '';

async function Search(props) {
  readParticipant(props).then((response) => {
    participant = response.get('name');
  });
}

export function Educational(props) {
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

  parseQuery.equalTo('from', currentUser);
  parseQuery.find();
  parseQuery.equalTo('to', toParticipant);
  const results = useParseQuery(parseQuery).results;

  Parse.User._clearCache();

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const Message = new Parse.Object('Educational');

    Message.set('from', currentUser);
    Message.set('to', toParticipant);
    Message.set('content', messages[0].text);
    try {
      const result = Message.save();
    } catch (error) {
      console.error('Error while creating Educational: ', error);
    }
  }, []);

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
        <View style={styles.headerNavigator}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Ionicons
            name="home"
            size={24}
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
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
            <View style={styles.circleMic}>
              <Ionicons name="mic" size={24} color="#fff" />
            </View>
            <View style={styles.circleFile}>
              <Ionicons name="images" size={24} color="#fff" />
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
              _id: 1,
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

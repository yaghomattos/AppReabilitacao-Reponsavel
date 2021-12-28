import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { readPatient } from '../../components/CRUDs/Participant/index';

import { Ionicons } from '@expo/vector-icons';
import { IconButton, Avatar } from 'react-native-paper';

import styles from './styles';

const parseQuery = new Parse.Query('Educational');
parseQuery.descending('createdAt');

var patient = '';

async function Search(props) {
  readPatient(props).then((response) => {
    patient = response.get('name');
  });
}

export function Educational(props) {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);

  var patientId = props.route.params.item.id;
  var userId = props.route.params.adminId;

  Search(patientId);

  var currentUser = {
    __type: 'Pointer',
    className: '_User',
    objectId: userId,
  };
  var toPatient = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('from', currentUser);
  parseQuery.find();
  parseQuery.equalTo('to', toPatient);
  const results = useParseQuery(parseQuery).results;

  Parse.User._clearCache();

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const Message = new Parse.Object('Educational');

    Message.set('from', currentUser);
    Message.set('to', toPatient);
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
          <Text style={styles.text}>{patient}</Text>
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
              name: patient,
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

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { Avatar, IconButton } from 'react-native-paper';
import { database } from '../../services/firebase';
import styles from './styles';

export function Educational(props) {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);
  const [results, setResults] = useState([]);

  var user = props.route.params.user;
  var participant = props.route.params.item.id;
  var participantName = props.route.params.item.name;

  useEffect(() => {
    var li = [];
    database
      .ref('educational')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (
            child.val().user == user &&
            child.val().participant == participant
          ) {
            li.push({
              key: child.key,
              content: child.val().content,
              participant: child.val.user,
              user: child.val().user,
              createdAt: child.val().created_at,
              updatedAt: child.val().updated_at,
            });
          }
        });
        setResults(li);
      });
  }, [results]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const chatRef = database.ref('educational');

    chatRef.push({
      content: messages[0].text,
      participant: participant,
      user: user,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
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
          <Text style={styles.text}>{participantName}</Text>
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
            _id: liveMessage.key,
            text: liveMessage.content,
            createdAt: liveMessage.createdAt,
            user: {
              _id: 1,
              name: participantName,
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

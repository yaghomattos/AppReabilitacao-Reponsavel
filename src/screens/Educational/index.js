import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import HeaderHome from '../../components/HeaderHome';
import { database } from '../../services/firebase';
import styles from './styles';

export function Educational(props) {
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
              createdAt: child.val().createdAt,
              updatedAt: child.val().updatedAt,
            });
          }
        });
        li.reverse();
        setResults(li);
      });
  }, [results]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const chatRef = database.ref('educational');

    const date = new Date();
    const brazilianDate = date.toLocaleString();

    chatRef.push({
      content: messages[0].text,
      participant: participant,
      user: user,
      createdAt: brazilianDate,
      updatedAt: brazilianDate,
    });
  }, []);

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={40} color="#009788" />
        </View>
      </Send>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#546F7A" />
      </View>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#546F7A" />
      </View>
    );
  }

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#009788',
          },
          left: {
            backgroundColor: '#565755',
          },
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderHome title="Educacional" />
        <View style={styles.person}>
          <Text style={styles.text}>{participantName}</Text>
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
        renderBubble={renderBubble}
      />
    </SafeAreaView>
  );
}

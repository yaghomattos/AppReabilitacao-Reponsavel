import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Button } from '../../components/Button/index';
import { CurrentUser } from '../../components/CRUDs/User/index';
import { Logout } from '../../components/Logout/index';
import styles from './styles';

export function Home() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');

  CurrentUser().then((currentUser) => {
    setId(currentUser.id);
    setUsername(currentUser.username);
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#3E9ACD" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>
            {'Bem Vindo - '}
            <Text style={styles.header_text_bold}>{username}</Text>
          </Text>
        </View>
        <View style={styles.background}>
          <Button
            title="Chat"
            onPress="ListParticipantRoute"
            props={['Chat', id]}
          />
          <Button
            title="Cadastro de Participantes"
            onPress="ParticipantControl"
          />
          <Button title="Treinamento" onPress="MenuTraining" />
          <Button title="Avaliação" onPress="MenuTest" />
          <Button
            title="Monitoramento"
            onPress="ListParticipantRoute"
            props={'Monitoring'}
          />
          <Button
            title="Educacional"
            onPress="ListParticipantRoute"
            props={['Educational', id]}
          />
          <Logout />
        </View>
      </SafeAreaView>
    </>
  );
}

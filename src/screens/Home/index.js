import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Button } from '../../components/Button/index';
import { Logout } from '../../components/Logout/index';
import { CurrentUser } from '../../components/CRUDs/User/index';

import styles from './styles';

export function Home() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');

  CurrentUser().then((currentUser) => {
    console.log(currentUser);

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
            onPress="ListPatientRoute"
            props={['Chat', id]}
          />
          <Button title="Cadastro de Participantes" onPress="PatientControl" />
          <Button title="Treinamento" onPress="MenuTraining" />
          <Button title="Avaliação" onPress="MenuTest" />
          <Button
            title="Monitoramento"
            onPress="ListPatientRoute"
            props={'Monitoring'}
          />
          <Button
            title="Educacional"
            onPress="ListPatientRoute"
            props={['Educational', id]}
          />
          <Logout />
        </View>
      </SafeAreaView>
    </>
  );
}

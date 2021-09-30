import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Button } from '../../components/Button/index';
import { Logout } from '../../components/Logout/index';
import { CurrentUser } from '../../components/CurrentUser/index';
import AuthContext from '../../components/AuthContext/index';

import styles from './styles';

export function Home() {
  const currentUser = CurrentUser();
  const id = currentUser.id;
  const token = currentUser.token;
  const username = currentUser.username;

  return (
    <>
      <AuthContext.Provider
        value={{ id: id, token: token, username: username }}
      >
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          <Text style={styles.header_text}>
              {'Bem Vindo - '}
              <Text style={styles.header_text_bold}>{username}</Text>
            </Text>
          </View>
          <View style={styles.background}>
            <Button title="Chat" onPress="ListPatientChat" props={id} />
            <Button title="Cadastro Paciente" onPress="PatientControl" />
            <Button title="Exercícios" onPress="ListPatientSelectExercise" />
            <Button title="Cadastrar Novo Exercício" onPress="UploadExercise" />
            <Button title="Monitoramento" onPress="ListPatientMonitoring" />
          </View>
          <Logout />
        </SafeAreaView>
      </AuthContext.Provider>
    </>
  );
}

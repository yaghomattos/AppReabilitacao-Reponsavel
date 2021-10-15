import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Button } from '../../components/Button/index';
import { Logout } from '../../components/Logout/index';
import { CurrentUser } from '../../components/CurrentUser/index';

import styles from './styles';

export function Home() {
  const currentUser = CurrentUser();
  const id = currentUser.id;
  const username = currentUser.username;

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
          <Button title="Chat" onPress="ListPatientChat" props={id} />
          <Button title="Cadastro Paciente" onPress="PatientControl" />
          <Button title="Exercícios" onPress="ListPatientSelectExercise" />
          <Button title="Monitoramento" onPress="ListPatientMonitoring" />
          <Button title="Cadastrar Novo Exercício" onPress="UploadExercise" />
          <Button title="Cadastrar Novo Exame" onPress="UploadExam" />
        </View>
        <Logout />
      </SafeAreaView>
    </>
  );
}

import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Button } from '../components/Button';
import { Logout } from '../components/Logout';
import { CurrentUser } from '../components/CurrentUser'

import Styles from '../components/Styles';
import AuthContext from '../components/authContext';

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
        <SafeAreaView style={Styles.login_container}>
          <View style={Styles.login_header}>
            <Text style={Styles.login_header_text}>
              <Text style={Styles.login_header_text_bold}>
                {'AppReabilitação - '}
              </Text>
              {'Menu'}
            </Text>
          </View>
          <Button title="Chat" onPress="ListPatientChat" props={id} />
          <Button title="Cadastro Paciente" onPress="PatientControl" />
          <Button title="Exercícios" onPress="ListPatientSelectExercise" />
          <Button title="Cadastrar Novo Exercício" onPress="UploadExercise" />
          <Logout />
        </SafeAreaView>
      </AuthContext.Provider>
    </>
  );
}

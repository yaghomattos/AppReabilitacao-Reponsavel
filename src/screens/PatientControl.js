import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Button } from '../components/Button';

import Styles from '../components/Styles';

export function PatientControl() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>{'AppReabilitação - '}</Text>
            {'Cadastro Paciente'}
          </Text>
        </View>
        <Button title="Novo Paciente" onPress="PatientRecord" />
        <Button title="Deletar Paciente" onPress="DeletePatient" />
        <Button title="Lista de Pacientes" onPress="ListPatients" />
      </SafeAreaView>
    </>
  );
}

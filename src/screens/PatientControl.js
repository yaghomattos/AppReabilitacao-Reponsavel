import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { ToRecordPatient } from '../routes/ToRecordPatient';
import { ToDeletePatient } from '../routes/ToDeletePatient';
import { ToListPatient } from '../routes/ToListPatient';

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
        <ToRecordPatient />
        <ToDeletePatient />
        <ToListPatient />
      </SafeAreaView>
    </>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { ToChat } from '../../routes/ToChat';

import Styles from '../../components/Styles';

export function HomePatient() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'AppReabilitação - '}
            </Text>
            {'Paciente'}
          </Text>
        </View>
        <View style={Styles.menu_patient}>
          <Text style={Styles.other_text}>{'Menu para o app de paciente'}</Text>
        </View>
        <ToChat />
      </SafeAreaView>
    </>
  );
}

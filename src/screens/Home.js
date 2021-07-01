import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Logout } from '../components/Logout';
import { Hello } from '../components/Hello';
import { ToChat } from '../routes/ToChat';
import { ToRecordPatient } from '../routes/ToRecordPatient';
import { ToAppPatient } from '../routes/ToAppPatient';

import Styles from '../components/Styles';

export function Home() {
  return (
    <>
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
        <Hello />
        <ToChat />
        <ToRecordPatient />
        <ToAppPatient />
        <Logout />
      </SafeAreaView>
    </>
  );
}

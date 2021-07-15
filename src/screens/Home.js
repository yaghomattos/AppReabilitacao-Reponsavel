import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Logout } from '../components/Logout';
import { Hello } from '../components/Hello';
import { ToChat } from '../routes/ToChat';
import { ToPatientControl } from '../routes/ToPatientControl';
import { ToListPatient } from '../routes/ToListPatient';
//import { ToUploadExercise } from '../routes/ToUploadExercise';

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
        <ToPatientControl />
        {/* <ToUploadExercise /> */}
        <ToListPatient />
        <Logout />
      </SafeAreaView>
    </>
  );
}

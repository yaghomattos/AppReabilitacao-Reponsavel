import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Logout } from '../components/Logout';
import { ToChat } from '../routes/ToChat';
import { ToPatientControl } from '../routes/ToPatientControl';
import { ToListPatientSelectExercise } from '../routes/ToListPatientSelectExercise';
import { ToUploadExercise } from '../routes/ToUploadExercise';

import PatientContext from '../components/patientContext';

import Styles from '../components/Styles';

export function Home() {
  return (
    <>
      <PatientContext.Provider value={{}}>
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
          <ToChat />
          <ToPatientControl />
          <ToListPatientSelectExercise />
          <ToUploadExercise />
          <Logout />
        </SafeAreaView>
      </PatientContext.Provider>
    </>
  );
}

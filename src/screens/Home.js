import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { Logout } from '../components/Logout';
import { ToChat } from '../routes/ToChat';
import { ToPatientControl } from '../routes/ToPatientControl';
import { ToListPatientSelectExercise } from '../routes/ToListPatientSelectExercise';
import { ToUploadExercise } from '../routes/ToUploadExercise';
import { CurrentUser } from '../components/CurrentUser';

import Styles from '../components/Styles';
import AuthContext from '../components/authContext';

export function Home() {
  const currentUser = CurrentUser();
  const id = currentUser.id;
  const token = currentUser.token;
  const username = currentUser.username;

  return (
    <>
      <AuthContext.Provider value={{ id: id, token: token, username: username }}>
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
      </AuthContext.Provider>
    </>
  );
}

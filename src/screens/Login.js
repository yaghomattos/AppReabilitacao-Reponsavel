import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { SingIn } from '../components/SingIn';
import Styles from '../components/Styles';

export function Login() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'AppReabilitação - '}
            </Text>
            {' Admin login'}
          </Text>
        </View>
        <SingIn />
      </SafeAreaView>
    </>
  );
}

import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { HandleRegister } from '../../components/Register/index';

import Styles from '../../components/Styles';

export function Register() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'AppReabilitação - '}
            </Text>
            {'Responsável'}
          </Text>
        </View>
        <HandleRegister />
      </SafeAreaView>
    </>
  );
}

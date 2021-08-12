import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import Styles from '../../components/Styles';

export function PatientProfile(props) {

  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'AppReabilitação - '}
            </Text>
            {'Perfil do paciente'}
          </Text>
        </View>
        <View style={Styles.other_text}>
          <Text style={Styles.form}>{'Nome:'} {props.route.params.get('name')}</Text>
          <Text style={Styles.form}>{'Idade:'} {props.route.params.get('age')}</Text>
          <Text style={Styles.form}>{'Telefone:'} {props.route.params.get('phone')}</Text>
          <Text style={Styles.form}>{'Diagnóstico:'} {props.route.params.get('diagnosis')}</Text>
          <Text style={Styles.form}>{'Endereço:'} {props.route.params.get('address')}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

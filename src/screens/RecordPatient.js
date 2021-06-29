import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { createPatient } from '../components/Patient/Patient';
import Styles from '../components/Styles';

export function PatientRecord() {
  const [username, setUsername] = useState('');

  async function callCreate() {
    const usernameValue = username;
    createPatient(usernameValue);
  }

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Usuário'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TouchableOpacity onPress={() => callCreate()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Cadastrar Paciente'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

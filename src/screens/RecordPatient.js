import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { createPatient } from '../components/Patient';

import Styles from '../components/Styles';

export function PatientRecord() {
  const [username, setUsername] = useState('');
  const [CPF, setCPF] = useState(0);

  async function handleCreate() {
    const usernameValue = username;
    const CPFValue = CPF;
    createPatient(usernameValue, CPFValue);
  }

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Nome'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={CPF}
          placeholder={'CPF'}
          onChangeText={(text) => setCPF(text)}
          keyboardType={'numeric'}
          maxLength={12}
        />
        <TouchableOpacity onPress={() => handleCreate()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Cadastrar Paciente'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

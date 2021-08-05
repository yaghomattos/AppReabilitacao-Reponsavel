import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { readPatient, deletePatient } from '../components/Patient';

import Styles from '../components/Styles';

import Parse from 'parse/react-native.js';

export function DeletePatient() {
  const [username, setUsername] = useState('');

  async function handleDelete() {
    const usernameValue = username;
    const test = await readPatient(usernameValue);

    if (test > 0) {
      Alert.alert('Sucesso, Paciente deletado!');

      let query = new Parse.Query('Patient');
      query.equalTo('name', usernameValue);
      let result = await query.find();

      deletePatient(result[0].id);
    } else Alert.alert('Erro, paciente não encotrado!');
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
        <TouchableOpacity onPress={() => handleDelete()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Excluir Paciente'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

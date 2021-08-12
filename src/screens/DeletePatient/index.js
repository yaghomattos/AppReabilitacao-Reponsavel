import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Parse from 'parse/react-native.js';

import { readPatientCPF, deletePatient } from '../../components/Patient/index';

import Styles from '../../components/Styles';

export function DeletePatient() {
  const [CPF, setCPF] = useState('');

  async function handleDelete() {
    const found = await readPatientCPF(CPF);

    if (found) {
      Alert.alert('Sucesso, Paciente deletado!');

      let query = new Parse.Query('Patient');
      query.equalTo('CPF', CPF);
      let result = await query.find();

      deletePatient(result[0].id);
    } else Alert.alert('Erro, paciente não encotrado!');
  }

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={CPF}
          placeholder={'Usuário'}
          onChangeText={(text) => setCPF(text)}
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

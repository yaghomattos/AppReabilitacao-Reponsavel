import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { createPatient } from '../../components/Patient/index';

import Styles from '../../components/Styles';

export function PatientRecord() {
  const [username, setUsername] = useState('');
  const [CPF, setCPF] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [address, setAddress] = useState('');

  async function handleCreate() {
    const patient = {
      name: username,
      cpf: CPF,
      age: age,
      phone: phone,
      diagnosis: diagnosis,
      address: address
    }

    createPatient(patient);
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
        <TextInput
          style={Styles.form_input}
          value={age}
          placeholder={'Idade'}
          onChangeText={(text) => setAge(text)}
          keyboardType={'numeric'}
          maxLength={2}
        />
        <TextInput
          style={Styles.form_input}
          value={phone}
          placeholder={'Telefone'}
          onChangeText={(text) => setPhone(text)}
          autoCapitalize={'none'}
          keyboardType={'numeric'}
        />
        <TextInput
          editable
          multiline
          style={Styles.form_input}
          value={diagnosis}
          placeholder={'Diagnóstico'}
          onChangeText={(text) => setDiagnosis(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          editable
          multiline
          style={Styles.form_input}
          value={address}
          placeholder={'Endereço'}
          onChangeText={(text) => setAddress(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
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

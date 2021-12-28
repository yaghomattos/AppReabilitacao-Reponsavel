import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { createPatient } from '../../../components/CRUDs/Participant/index';
import { CurrentUser } from '../../../components/CRUDs/User/index';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ParticipantRecord() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [CPF, setCPF] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [address, setAddress] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const user = CurrentUser();

  var userId = user.id;
  var userName = user.username;

  async function handleCreatePatient() {
    const patient = {
      name: username,
      cpf: CPF,
      age: age,
      phone: phone,
      diagnosis: diagnosis,
      address: address,
      weight: weight,
      height: height,
      id: userId,
      username: userName,
    };

    createPatient(patient);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Cadastro de Participante'}</Text>
          <Ionicons
            name="home"
            size={24}
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={username}
            placeholder={'Nome'}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.input}
            value={CPF}
            placeholder={'CPF'}
            onChangeText={(text) => setCPF(text)}
            keyboardType={'numeric'}
            maxLength={12}
          />
          <TextInput
            style={styles.input}
            value={age}
            placeholder={'Idade'}
            onChangeText={(text) => setAge(text)}
            keyboardType={'numeric'}
            maxLength={2}
          />
          <TextInput
            style={styles.input}
            value={phone}
            placeholder={'Telefone'}
            onChangeText={(text) => setPhone(text)}
            autoCapitalize={'none'}
            keyboardType={'numeric'}
          />
          <TextInput
            editable
            multiline
            style={styles.input}
            value={diagnosis}
            placeholder={'Diagnóstico'}
            onChangeText={(text) => setDiagnosis(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            editable
            multiline
            style={styles.input}
            value={address}
            placeholder={'Endereço'}
            onChangeText={(text) => setAddress(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.input}
            value={height}
            placeholder={'Altura'}
            onChangeText={(text) => setHeight(text)}
            autoCapitalize={'none'}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.input}
            value={weight}
            placeholder={'Peso'}
            onChangeText={(text) => setWeight(text)}
            autoCapitalize={'none'}
            keyboardType={'numeric'}
          />
          <TouchableOpacity onPress={() => handleCreatePatient()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Cadastrar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

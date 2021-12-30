import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createParticipant } from '../../../components/CRUDs/Participant/index';
import { CurrentUser } from '../../../components/CRUDs/User/index';
import styles from './styles';

export function ParticipantRecord() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [address, setAddress] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  var user = '';

  CurrentUser().then((currentUser) => {
    user = currentUser;
  });

  async function handleCreateParticipant() {
    const participant = {
      name: name,
      cpf: CPF,
      age: age,
      phone: phone,
      diagnosis: diagnosis,
      address: address,
      weight: weight,
      height: height,
      id: user.id,
    };

    createParticipant(participant);
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
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder={'Nome'}
          onChangeText={(text) => setName(text)}
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
        <TouchableOpacity onPress={() => handleCreateParticipant()}>
          <View style={styles.button}>
            <Text style={styles.text_label}>{'Cadastrar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

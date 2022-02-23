import React, { useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { createParticipant } from '../../../components/CRUDs/Participant/index';
import { CurrentUser } from '../../../components/CRUDs/User/index';
import HeaderHome from '../../../components/HeaderHome';
import { auth } from '../../../services/firebase';
import styles from './styles';

export function ParticipantRecord() {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [address, setAddress] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  var user = '';
  const password = '123456';

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
      userName: user.name,
    };

    auth
      .createUserWithEmailAndPassword(`${CPF}@participant.com`, password)
      .then(function (result) {
        createParticipant(participant);

        return result.user.updateProfile({
          displayName: CPF,
        });
      })
      .catch(() => {
        Alert.alert('Erro! CPF já cadastrado.');
      });
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Cadastro de Participante" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={name}
            placeholder={'Nome'}
            onChangeText={(text) => setName(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInputMask
            style={styles.input}
            type={'cpf'}
            placeholder={'CPF'}
            value={CPF}
            onChangeText={(text) => setCPF(text)}
          />
          <TextInputMask
            style={styles.input}
            type={'datetime'}
            placeholder={'Data de Nascimento'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={age}
            onChangeText={(text) => {
              setAge(text);
            }}
          />
          <TextInputMask
            style={styles.input}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            placeholder={'Telefone'}
            value={phone}
            onChangeText={(text) => setPhone(text)}
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
      </ScrollView>
    </View>
  );
}

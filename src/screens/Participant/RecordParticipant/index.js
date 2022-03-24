import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
  const [gender, setGender] = useState('');

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
      gender: gender,
      id: user.id,
      userName: user.username,
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
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Nome'}</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'CPF'}</Text>
            <TextInputMask
              style={styles.input}
              type={'cpf'}
              value={CPF}
              onChangeText={(text) => setCPF(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Data de Nascimento'}</Text>
            <TextInputMask
              style={styles.input}
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={age}
              onChangeText={(text) => setAge(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Telefone'}</Text>
            <TextInputMask
              style={styles.input}
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Diagnóstico'}</Text>
            <TextInput
              style={styles.input}
              value={diagnosis}
              onChangeText={(text) => setDiagnosis(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Endereço'}</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={(text) => setAddress(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Peso'}</Text>
            <TextInputMask
              type={'custom'}
              options={{
                mask: '99.99',
              }}
              value={weight}
              onChangeText={(text) => setWeight(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Altura'}</Text>
            <TextInputMask
              type={'custom'}
              options={{
                mask: '9.99',
              }}
              value={height}
              onChangeText={(text) => setHeight(text)}
              style={styles.input}
            />
          </View>
          <Picker
            selectedValue={gender}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
            <Picker.Item label="Masculino" value="male" />
            <Picker.Item label="Feminino" value="female" />
          </Picker>

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

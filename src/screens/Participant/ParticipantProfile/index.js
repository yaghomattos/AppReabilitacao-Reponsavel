import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { updatePatient } from '../../../components/CRUDs/Participant/index';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ParticipantProfile(props) {
  const navigation = useNavigation();

  const [patientName, setPatientName] = useState('');
  const [CPF, setCPF] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [address, setAddress] = useState('');

  async function handleSave() {
    const patient = {
      name: patientName,
      cpf: CPF,
      age: age,
      phone: phone,
      diagnosis: diagnosis,
      address: address,
      id: props.route.params.id,
    };

    updatePatient(patient);
  }

  return (
    <View style={styles.container}>
      <StatusBar />

      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Perfil do Participante'}</Text>
          <Ionicons
            name="home"
            size={24}
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
      <View style={styles.background}>
        <Text style={styles.form}>{'Nome:'}</Text>
        <TextInput
          style={styles.input}
          value={patientName}
          placeholder={props.route.params.get('name')}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setPatientName(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.form}>{'CPF:'}</Text>
        <TextInput
          style={styles.input}
          value={CPF}
          placeholder={props.route.params.get('CPF')}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setCPF(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.form}>{'Idade:'}</Text>
        <TextInput
          style={styles.input}
          value={age}
          placeholder={props.route.params.get('age')}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setAge(text)
          }
          keyboardType={'numeric'}
        />
        <Text style={styles.form}>{'Telefone:'}</Text>
        <TextInput
          style={styles.input}
          value={phone}
          placeholder={props.route.params.get('phone')}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setPhone(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.form}>{'Diagnóstico:'}</Text>
        <TextInput
          style={styles.input}
          value={diagnosis}
          placeholder={props.route.params.get('diagnosis')}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setDiagnosis(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.form}>{'Endereço:'}</Text>
        <TextInput
          style={styles.input}
          value={address}
          placeholder={props.route.params.get('address')}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setAddress(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TouchableOpacity onPress={() => handleSave()}>
          <View style={styles.button}>
            <Text style={styles.text_label}>{'Salvar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, TextInput } from 'react-native';

import Styles from '../../components/Styles';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export function PatientProfile(props) {
  const [patient, setPatient] = useState('');
  const [CPF, setCPF] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [address, setAddress] = useState('');

  const navigation = useNavigation();
  
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Ionicons
              name="arrow-back"
              size={24}
              style={styles.back}
              onPress={() => navigation.goBack()}
            />
          <Text style={styles.header_text}>{'Perfil do Paciente'}</Text>
        </View>
        <View style={styles.background}>
          <Text style={styles.form}>{'Nome:'}</Text>
          <TextInput 
            style={styles.input}
            value={patient}
            placeholder={props.route.params.get('name')}
            onChangeText={(text) => setPatient(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <Text style={styles.form}>{'Idade:'} {props.route.params.get('age')}</Text>
          <TextInput 
            style={styles.input}
            value={age}
            placeholder={props.route.params.get('age')}
            onChangeText={(text) => setAge(text)}
            keyboardType={'numeric'}
          />
          <Text style={styles.form}>{'Telefone:'}</Text>
          <TextInput 
            style={styles.input}
            value={phone}
            placeholder={props.route.params.get('phone')}
            onChangeText={(text) => setPhone(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <Text style={styles.form}>{'Diagnóstico:'}</Text>
          <TextInput 
            style={styles.input}
            value={diagnosis}
            placeholder={props.route.params.get('diagnosis')}
            onChangeText={(text) => setDiagnosis(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <Text style={styles.form}>{'Endereço:'}</Text>
          <TextInput 
            style={styles.input}
            value={address}
            placeholder={props.route.params.get('address')}
            onChangeText={(text) => setAddress(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

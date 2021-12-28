import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../services/firebase';

import styles from './styles';

export function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const adminSignUp = async function () {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        Alert.alert(`${user.user.email}, cadastro realizado com sucesso!`);
        navigation.navigate('Home');
      })
      .catch(() => {
        Alert.alert('Erro! Email já cadastrado');
      });
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset="-140"
      style={styles.keyboard}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#0065A4" />
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Text style={styles.text_label}>{'App Reabilitação'}</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={email}
            placeholder={'Usuário'}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.input}
            value={password}
            placeholder={'Senha'}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => adminSignUp()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Registrar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footer_text}>
              {'Já possui conta? '}
              <Text style={styles.footer_link}>{'Entrar'}</Text>
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </KeyboardAvoidingView>
  );
}

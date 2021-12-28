import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../services/firebase';

import styles from './styles';

export const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doUserLogin = async function () {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        navigation.navigate('Home');
      })
      .catch(() => {
        Alert.alert('Email/Senha inválidos');
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
            placeholder={'Email'}
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
          <TouchableOpacity onPress={() => doUserLogin()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Entrar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.footer_text}>
              {'Não possui conta? '}
              <Text style={styles.footer_link}>{'Registre-se'}</Text>
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </KeyboardAvoidingView>
  );
};

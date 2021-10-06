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
import Parse from 'parse/react-native';

import styles from './styles';

export function Register() {
  const navigation = useNavigation();

  const [adminname, setAdminname] = useState('');
  const [password, setPassword] = useState('');

  const adminSignUp = async function () {
    const adminnameValue = adminname;
    const passwordValue = password;

    return await Parse.User.signUp(adminnameValue, passwordValue)
      .then((createdAdmin) => {
        Alert.alert(
          `Responsável: ${createdAdmin.get(
            'username'
          )}, criado criado com sucesso!`
        );
        navigation.navigate('Home');
        return true;
      })
      .catch((error) => {
        Alert.alert('Erro!', 'Conta já existente');
        return false;
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
            value={adminname}
            placeholder={'Usuário'}
            onChangeText={(text) => setAdminname(text)}
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

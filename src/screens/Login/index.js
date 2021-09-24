import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Parse from 'parse/react-native';

import Styles from '../../components/Styles';
import styles from './styles';

export const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doUserLogIn = async function () {
    const usernameValue = username;
    const passwordValue = password;
    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async (loggedInUser) => {
        Alert.alert('Login realizado com sucesso!');
        const currentUser = await Parse.User.currentAsync();
        console.log(loggedInUser === currentUser);
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
      });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <Text style={styles.text_label}>Logo</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={username}
          placeholder={'Usuário'}
          onChangeText={(text) => setUsername(text)}
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
        <TouchableOpacity onPress={() => doUserLogIn()}>
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
  );
};
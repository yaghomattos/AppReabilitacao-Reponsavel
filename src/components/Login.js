import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Parse from 'parse/react-native';

import Styles from './Styles';

export const HandleLogin = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doUserLogIn = async function () {
    const usernameValue = username;
    const passwordValue = password;
    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async (loggedInUser) => {
        Alert.alert(
          'Sucesso!',
          `Responsável: ${loggedInUser.get('username')} logado.`
        );
        const currentUser = await Parse.User.currentAsync();
        console.log(loggedInUser === currentUser);
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
      });
  };

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Usuário'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={password}
          placeholder={'Senha'}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => doUserLogIn()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Entrar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={Styles.login_footer_text}>
            {'Não possui conta? '}
            <Text style={Styles.login_footer_link}>{'Registre-se'}</Text>
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

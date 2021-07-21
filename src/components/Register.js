import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Parse from 'parse/react-native';

import Styles from './Styles';

export const HandleRegister = () => {
  const navigation = useNavigation();

  const [adminname, setAdminname] = useState('');
  const [password, setPassword] = useState('');

  const adminSignUp = async function () {
    const adminnameValue = adminname;
    const passwordValue = password;

    return await Parse.User.signUp(adminnameValue, passwordValue)
      .then((createdAdmin) => {
        Alert.alert(
          'Success!',
          `Admin ${createdAdmin.get('username')} was successfully created!`
        );
        navigation.navigate('Home');
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={adminname}
          placeholder={'Usuário'}
          onChangeText={(text) => setAdminname(text)}
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
        <TouchableOpacity onPress={() => adminSignUp()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Registrar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={Styles.login_footer_text}>
            {'Já possui conta? '}
            <Text style={Styles.login_footer_link}>{'Entrar'}</Text>
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

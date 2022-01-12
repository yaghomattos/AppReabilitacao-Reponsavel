import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthContext } from '../../context/Auth';
import { auth } from '../../services/firebase';
import styles from './styles';

export function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { isSignedIn, setSignedIn } = useContext(AuthContext);

  const adminSignUp = async function () {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        Alert.alert(`${result.user.email}, cadastro realizado com sucesso!`);

        return result.user.updateProfile({
          displayName: name,
        });
      })
      .catch(() => {
        Alert.alert('Erro! Email já cadastrado');
      });

    setSignedIn(true);
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
            value={name}
            placeholder={'Nome'}
            onChangeText={(text) => setName(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
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

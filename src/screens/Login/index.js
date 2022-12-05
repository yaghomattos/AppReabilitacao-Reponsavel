import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { AuthContext } from '../../context/Auth';
import { auth } from '../../services/firebase';
import styles from './styles';

export const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isSignedIn, setSignedIn } = useContext(AuthContext);

  const doUserLogin = async function () {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setSignedIn(true);
      })
      .catch(() => {
        Alert.alert('Email ou Senha inválido');
      });
  };

  async function resetPassword() {
    if (email == '') Alert.alert('Digite seu email!');
    else {
      auth
        .sendPasswordResetEmail(email)
        .then((response) => {
          Alert.alert(
            'Informações para alteração de senha enviadas para:',
            email
          );
        })
        .catch();
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <StatusBar barStyle="dark-content" backgroundColor="#76BCAA" />
        <View style={styles.wrapper}>
          <View style={styles.logo}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon.png')}
            />
            <Text style={styles.name}>{'Redox'}</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#000'}
              value={email}
              placeholder={'Email'}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              left={<TextInput.Icon name="email" color={'#000'} />}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={'#000'}
              value={password}
              placeholder={'Senha'}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              left={<TextInput.Icon name="key" color={'#000'} />}
            />
            <TouchableOpacity onPress={() => doUserLogin()}>
              <View style={styles.button}>
                <MaterialIcons name="login" size={24} color="#fefefe" />
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
          <>
            <TouchableOpacity onPress={() => resetPassword()}>
              <Text style={styles.footer_recovery}>
                {'Esqueci minha Senha'}
              </Text>
            </TouchableOpacity>
          </>
        </View>
      </ScrollView>
    </View>
  );
};

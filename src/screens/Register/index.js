import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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
import { auth } from '../../services/firebase';
import styles from './styles';
export function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const adminSignUp = async function () {
    if (name == '' || email == '' || password == '')
      Alert.alert('Preencha todas as informações');
    else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(function (result) {
          Alert.alert(`${result.user.email}, cadastro realizado com sucesso!`);

          return (
            result.user.updateProfile({
              displayName: name,
            }) && navigation.navigate('Login')
          );
        })
        .catch(() => {
          if (password.length < 6)
            Alert.alert('A senha deve ter mais que 6 dígitos!');
          else Alert.alert('Email inválido!');
        });
    }
  };

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
            <Text style={styles.name}>{'App Reabilitação'}</Text>
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#000'}
              value={name}
              placeholder={'Nome'}
              onChangeText={(text) => setName(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              left={<TextInput.Icon name="account" color={'#000'} />}
            />
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
            <TouchableOpacity onPress={() => adminSignUp()}>
              <View style={styles.button}>
                <Ionicons name="person-add-outline" size={24} color="#fefefe" />
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
      </ScrollView>
    </View>
  );
}

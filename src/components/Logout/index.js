import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../services/firebase';
import styles from './styles';

export const Logout = () => {
  const navigation = useNavigation();

  const userLogout = async function () {
    auth
      .signOut()
      .then(() => {
        Alert.alert('Responsável deslogado!');
        navigation.dispatch(StackActions.popToTop());
      })
      .catch(() => {
        Alert.alert('Erro ao deslogar!');
        navigation.dispatch(StackActions.popToTop());
      });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <TouchableOpacity onPress={() => userLogout()}>
          <View style={styles.button}>
            <Text style={styles.button_label}>{'Sair'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

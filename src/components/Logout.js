import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

import Parse from 'parse/react-native';

import Styles from './Styles';

export const Logout = () => {
  const navigation = useNavigation();

  const userLogout = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Success!', 'No user is logged in anymore!');
        }
        navigation.dispatch(StackActions.popToTop());
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
        <TouchableOpacity onPress={() => userLogout()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Sair'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

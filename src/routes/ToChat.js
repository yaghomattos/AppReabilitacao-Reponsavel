import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Styles from '../components/Styles';
import AuthContext from '../components/authContext';

export const ToChat = () => {
  const { id, token, username } = useContext(AuthContext);
  //console.log(id, token, username);

  const navigation = useNavigation();

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => navigation.navigate('ListPatientChat', id)}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Chat'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

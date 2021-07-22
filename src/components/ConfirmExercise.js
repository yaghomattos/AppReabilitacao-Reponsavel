import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Styles from '../components/Styles';

export function ConfirmExercise() {
  const navigation = useNavigation();
  
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>{'AppReabilitação - '}</Text>
            {'Confirmar Exercício'}
          </Text>
        </View>
        <View style={Styles.menu_patient}>
          <Text style={Styles.other_text}>{'Confirmar Exercício ?'}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ListExercises')}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Sim'}</Text>
          </View>
        </TouchableOpacity>
        <Text/>
        <TouchableOpacity onPress={() => navigation.navigate('ListExercises')}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Não'}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

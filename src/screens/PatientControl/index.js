import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button/index';

import Styles from '../../components/Styles';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export function PatientControl() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons
              name="arrow-back"
              size={24}
              style={styles.back}
              onPress={() => navigation.goBack()}
            />
          <Text style={styles.header_text}>{'Cadastro de Paciente'}</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.buttons}>
            <Button title="Novo Paciente" onPress="PatientRecord" />
            <Button title="Deletar Paciente" onPress="DeletePatient" />
            <Button title="Lista de Pacientes" onPress="ListPatients" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

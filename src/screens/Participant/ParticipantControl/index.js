import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button/index';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ParticipantControl() {
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
          <Text style={styles.header_text}>{'Cadastro de Participante'}</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.buttons}>
            <Button title="Novo Participante" onPress="PatientRecord" />
            <Button title="Deletar Participante" onPress="DeletePatient" />
            <Button title="Lista de Participantes" onPress="ListPatients" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

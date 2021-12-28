import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Button } from '../../../components/Button/index';
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
            <Button title="Novo Participante" onPress="ParticipantRecord" />
            <Button title="Deletar Participante" onPress="DeleteParticipant" />
            <Button title="Lista de Participantes" onPress="ListParticipants" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

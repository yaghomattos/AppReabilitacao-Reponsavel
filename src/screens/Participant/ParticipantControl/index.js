import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Button } from '../../../components/Button/index';
import Header from '../../../components/Header';
import styles from './styles';

export function ParticipantControl() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Header title="Cadastro de Participante" />
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

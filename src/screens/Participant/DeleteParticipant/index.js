import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  deleteParticipant,
  readParticipantWithCPF,
} from '../../../components/CRUDs/Participant/index';
import Header from '../../../components/Header';
import styles from './styles';

export function DeleteParticipant() {
  const [CPF, setCPF] = useState('');

  async function handleDelete() {
    const participantFound = await readParticipantWithCPF(CPF)
      .then((response) => {
        const id = response.key;
        deleteParticipant(id);
        Alert.alert('Sucesso, Paciente deletado!');
      })
      .catch(() => {
        Alert.alert('Erro, paciente não encotrado!');
      });
  }

  return (
    <>
      <Header title="Deletar paciente" />
      <View style={styles.wrapper}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={CPF}
            placeholder={'CPF'}
            onChangeText={(text) => setCPF(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TouchableOpacity onPress={() => handleDelete()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Excluir Paciente'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

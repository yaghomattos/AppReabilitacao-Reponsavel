import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  deleteParticipant,
  readParticipantWithCPF,
} from '../../../components/CRUDs/Participant/index';
import styles from './styles';

export function DeleteParticipant() {
  const navigation = useNavigation();

  const [CPF, setCPF] = useState('');

  async function handleDelete() {
    const participantFound = await readParticipantWithCPF(CPF);

    if (participantFound) {
      const id = participantFound.key;

      deleteParticipant(id);
      Alert.alert('Sucesso, Paciente deletado!');
    } else Alert.alert('Erro, paciente não encotrado!');
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Deletar paciente'}</Text>
        </View>
      </View>
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

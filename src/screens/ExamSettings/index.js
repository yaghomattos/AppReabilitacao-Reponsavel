import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Parse from 'parse/react-native.js';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ExamSettings(props) {
  const navigation = useNavigation();

  const [timer, setTimer] = useState('');

  var examId = props.route.params;

  async function handleSettings() {
    const query = new Parse.Query('Exams');
    try {
      const object = await query.get(examId);
      object.set('timer', timer);
      try {
        const response = await object.save();
        console.log('SelectExams updated', response);
      } catch (error) {
        console.error('Error while updating SelectExams', error);
      }
    } catch (error) {
      console.error('Error while retrieving object SelectExams', error);
    }
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
          <Text style={styles.header_text}>{'Ajuste de Métricas'}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.inputName}>{'Cronômetro'}</Text>
          <TextInput
            style={styles.input}
            value={timer}
            placeholder={'segundos'}
            onChangeText={(text) => setTimer(text)}
            keyboardType={'numeric'}
            maxLength={4}
          />
          <TouchableOpacity onPress={() => handleSettings()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Salvar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

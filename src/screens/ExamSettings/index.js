import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Parse from 'parse/react-native.js';

import { updateSelectExams } from '../../components/SelectExams';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ExamSettings(props) {
  const navigation = useNavigation();

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  var examId = props.route.params;

  async function handleSettings() {
    updateSelectExams(examId, parseInt(minutes) * 60 + parseInt(seconds));
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
            value={minutes}
            placeholder={'minutos'}
            onChangeText={(text) => setMinutes(text)}
            keyboardType={'numeric'}
            maxLength={2}
          />
          <TextInput
            style={styles.input}
            value={seconds}
            placeholder={'segundos'}
            onChangeText={(text) => setSeconds(text)}
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

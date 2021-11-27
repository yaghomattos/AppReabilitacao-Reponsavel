import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Checkbox } from 'react-native-paper';

import { Button } from '../../components/Button/index';
import { updateSelectExams } from '../../components/SelectExams';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ExamSettings(props) {
  const navigation = useNavigation();

  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [numReps, setNumReps] = useState('');

  const [reps, setReps] = useState(false);
  const [frequency, setFrequency] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [dyspnea, setDyspnea] = useState(false);
  const [fatigue, setFatigue] = useState(false);

  var examId = props.route.params;

  async function handleSettings() {
    if (minutes == '') setMinutes('');
    if (seconds == '') setSeconds('');

    const object = {
      examId: examId,
      timer: parseInt(minutes) * 60 + parseInt(seconds),
      numReps: numReps,
      reps: reps,
      frequency: frequency,
      saturation: saturation,
      dyspnea: dyspnea,
      fatigue: fatigue,
    };

    updateSelectExams(object);
  }

  return (
    <View style={styles.wrapper}>
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
        <Text style={styles.title}>{'Cronômetro'}</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={minutes}
            placeholder={'min'}
            onChangeText={(text) => setMinutes(parseInt(text))}
            keyboardType={'numeric'}
            maxLength={2}
          />
          <Text style={styles.inputText}>{':'}</Text>
          <TextInput
            style={styles.input}
            value={seconds}
            placeholder={'seg'}
            onChangeText={(text) => setSeconds(parseInt(text))}
            keyboardType={'numeric'}
            maxLength={3}
          />
        </View>
        <Text style={styles.title}>{'Número de repetições'}</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={numReps}
            placeholder={'Repetições'}
            onChangeText={(text) => setNumReps(text)}
            autoCapitalize={'none'}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.wrapperCheckbox}>
          <Text style={styles.title}>{'Dados do formulário'}</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={reps ? 'checked' : 'unchecked'}
              onPress={() => {
                setReps(!reps);
              }}
            />
            <Text style={styles.text_checkbox}>Número de repetições</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={frequency ? 'checked' : 'unchecked'}
              onPress={() => {
                setFrequency(!frequency);
              }}
            />
            <Text style={styles.text_checkbox}>Frequência Cardíaca</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={saturation ? 'checked' : 'unchecked'}
              onPress={() => {
                setSaturation(!saturation);
              }}
            />
            <Text style={styles.text_checkbox}>Saturação</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={dyspnea ? 'checked' : 'unchecked'}
              onPress={() => {
                setDyspnea(!dyspnea);
              }}
            />
            <Text style={styles.text_checkbox}>Falta de ar</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={fatigue ? 'checked' : 'unchecked'}
              onPress={() => {
                setFatigue(!fatigue);
              }}
            />
            <Text style={styles.text_checkbox}>Cansaço</Text>
          </View>
        </View>

        <Button
          title="Orientações"
          onPress="ListSelectOrientations"
          props={examId}
        />

        {(minutes != '' || seconds != '') && (
          <TouchableOpacity onPress={() => handleSettings()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Salvar'}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

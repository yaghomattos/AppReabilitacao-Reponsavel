import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import { updateSelectExercises } from '../../../components/CRUDs/SelectExercise/index';
import Header from '../../../components/Header';
import styles from './styles';

export function ExerciseSettings(props) {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [frequency, setFrequency] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [dyspnea, setDyspnea] = useState(false);
  const [fatigue, setFatigue] = useState(false);

  var selectExercise = props.route.params.id;

  async function handleSettings() {
    var exercise = {
      id: selectExercise,
      sets: sets,
      reps: reps,
      timer:
        minutes != '' || seconds != ''
          ? parseInt(minutes) * 60 + parseInt(seconds)
          : '',
      frequency: frequency,
      saturation: saturation,
      dyspnea: dyspnea,
      fatigue: fatigue,
    };

    updateSelectExercises(exercise);
  }

  return (
    <View style={styles.wrapper}>
      <Header title="Ajuste de Métricas" />
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
        <Text style={styles.title}>{'ou'}</Text>
        <Text style={styles.title}>{'Séries'}</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.inputReps}
            value={sets}
            placeholder={'número'}
            onChangeText={(text) => setSets(text)}
            keyboardType={'numeric'}
            maxLength={2}
          />
        </View>
        <Text style={styles.title}>{'Repetições'}</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.inputReps}
            value={reps}
            placeholder={'número'}
            onChangeText={(text) => setReps(text)}
            keyboardType={'numeric'}
            maxLength={2}
          />
        </View>

        <View style={styles.wrapperCheckbox}>
          <Text style={styles.title}>{'Dados do formulário'}</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={frequency ? 'checked' : 'unchecked'}
              onPress={() => {
                setFrequency(!frequency);
              }}
            />
            <Text style={styles.text_checkbox}>{'Frequência Cardíaca'}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={saturation ? 'checked' : 'unchecked'}
              onPress={() => {
                setSaturation(!saturation);
              }}
            />
            <Text style={styles.text_checkbox}>{'Saturação'}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={dyspnea ? 'checked' : 'unchecked'}
              onPress={() => {
                setDyspnea(!dyspnea);
              }}
            />
            <Text style={styles.text_checkbox}>{'Falta de ar'}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={fatigue ? 'checked' : 'unchecked'}
              onPress={() => {
                setFatigue(!fatigue);
              }}
            />
            <Text style={styles.text_checkbox}>{'Cansaço'}</Text>
          </View>
        </View>

        <Button
          title="Orientações"
          onPress="MenuOrientation"
          props={props.route.params}
        />

        <TouchableOpacity onPress={() => handleSettings()}>
          <View style={styles.button}>
            <Text style={styles.text_label}>{'Salvar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

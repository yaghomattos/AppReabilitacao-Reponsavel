import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import { updateSelectExercises } from '../../../components/CRUDs/SelectExercise/index';
import HeaderHome from '../../../components/HeaderHome';
import styles from './styles';

export function ExerciseSettings(props) {
  const navigation = useNavigation();

  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const [timer, setTimer] = useState(false);
  const [repetitions, setRepetitions] = useState(false);
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
      <HeaderHome title="Ajuste de Métricas" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <Checkbox
              status={timer ? 'checked' : 'unchecked'}
              onPress={() => {
                setTimer(!timer);
                setRepetitions(false);
              }}
              color="#000"
            />
            <Text style={timer ? styles.subtitle_true : styles.subtitle_false}>
              {'Tempo:'}
            </Text>
            <TextInput
              style={timer ? styles.input_true : styles.input_false}
              value={minutes}
              onChangeText={(text) => setMinutes(parseInt(text))}
              keyboardType={'numeric'}
              maxLength={2}
            />
            <Text style={timer ? styles.subtitle_true : styles.subtitle_false}>
              {':'}
            </Text>
            <TextInput
              style={timer ? styles.input_true : styles.input_false}
              value={seconds}
              onChangeText={(text) => setSeconds(parseInt(text))}
              keyboardType={'numeric'}
              maxLength={3}
            />
          </View>
          <View style={styles.form2}>
            <Checkbox
              status={repetitions ? 'checked' : 'unchecked'}
              onPress={() => {
                setRepetitions(!repetitions);
                setTimer(false);
              }}
              color="#000"
            />
            <View>
              <View style={styles.form2}>
                <Text
                  style={
                    repetitions ? styles.subtitle_true : styles.subtitle_false
                  }
                >
                  {'Séries:'}
                </Text>
                <TextInput
                  style={
                    repetitions ? styles.inputReps_true : styles.inputReps_false
                  }
                  value={sets}
                  onChangeText={(text) => setSets(text)}
                  keyboardType={'numeric'}
                  maxLength={2}
                />
              </View>
              <View style={styles.form2}>
                <Text
                  style={
                    repetitions ? styles.subtitle_true : styles.subtitle_false
                  }
                >
                  {'Repetições:'}
                </Text>
                <TextInput
                  style={
                    repetitions ? styles.inputReps_true : styles.inputReps_false
                  }
                  value={reps}
                  onChangeText={(text) => setReps(text)}
                  keyboardType={'numeric'}
                  maxLength={3}
                />
              </View>
            </View>
          </View>
          <View style={styles.wrapperCheckbox}>
            <Text style={styles.title}>{'Dados do formulário'}</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={frequency ? 'checked' : 'unchecked'}
                onPress={() => {
                  setFrequency(!frequency);
                }}
                color="#000"
              />
              <Text style={styles.text_checkbox}>{'Frequência Cardíaca'}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={saturation ? 'checked' : 'unchecked'}
                onPress={() => {
                  setSaturation(!saturation);
                }}
                color="#000"
              />
              <Text style={styles.text_checkbox}>{'Saturação'}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={dyspnea ? 'checked' : 'unchecked'}
                onPress={() => {
                  setDyspnea(!dyspnea);
                }}
                color="#000"
              />
              <Text style={styles.text_checkbox}>{'Falta de ar'}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={fatigue ? 'checked' : 'unchecked'}
                onPress={() => {
                  setFatigue(!fatigue);
                }}
                color="#000"
              />
              <Text style={styles.text_checkbox}>{'Cansaço'}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ListOrientations', props.route.params)
            }
          >
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Orientações'}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSettings()}>
            <View style={styles.button_save}>
              <Text style={styles.text_label}>{'Salvar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

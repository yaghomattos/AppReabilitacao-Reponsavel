import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../components/Button/index';
import { updateSelectExercises } from '../../../components/CRUDs/SelectExercise/index';
import Header from '../../../components/Header';
import styles from './styles';

export function ExerciseSettings(props) {
  const navigation = useNavigation();

  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [timer, setTimer] = useState('');

  var selectExercise = props.route.params.id;

  async function handleSettings() {
    var exercise = {
      id: selectExercise,
      sets: sets,
      reps: reps,
      timer: timer,
    };

    updateSelectExercises(exercise);
  }

  return (
    <>
      <Header title="Ajuste de Métricas" />
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.inputName}>{'Séries'}</Text>
          <TextInput
            style={styles.input}
            value={sets}
            placeholder={'número'}
            onChangeText={(text) => setSets(text)}
            keyboardType={'numeric'}
            maxLength={2}
          />
          <Text style={styles.inputName}>{'Repetições'}</Text>
          <TextInput
            style={styles.input}
            value={reps}
            placeholder={'número'}
            onChangeText={(text) => setReps(text)}
            keyboardType={'numeric'}
            maxLength={2}
          />
          <Text style={styles.inputName}>{'Cronômetro'}</Text>
          <TextInput
            style={styles.input}
            value={timer}
            placeholder={'segundos'}
            onChangeText={(text) => setTimer(text)}
            keyboardType={'numeric'}
            maxLength={4}
          />

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
    </>
  );
}

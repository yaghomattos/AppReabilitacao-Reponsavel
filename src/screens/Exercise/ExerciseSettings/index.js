import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { updateSelectExercises } from '../../components/SelectExercises';
import { Button } from '../../components/Button/index';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ExerciseSettings(props) {
  const navigation = useNavigation();

  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [timer, setTimer] = useState('');

  var exerciseId = props.route.params;

  async function handleSettings() {
    var exercise = {
      id: exerciseId,
      sets: sets,
      reps: reps,
      timer: timer,
    };

    updateSelectExercises(exercise);
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
            props={[exerciseId, 'exercise']}
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

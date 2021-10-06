import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Parse from 'parse/react-native.js';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ExerciseSettings(props) {
  const navigation = useNavigation();

  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [timer, setTimer] = useState('');

  var selectExerciseId = props.route.params

  async function handleSettings(selectExerciseId) {
    const query = new Parse.Query('SelectExercises');
    try {
      const object = await query.get(selectExerciseId);
      object.set('sets', sets);
      object.set('reps', reps);
      object.set('timer', timer);
      try {
        const response = await object.save();
        console.log('SelectExercises updated', response);
      } catch (error) {
        console.error('Error while updating SelectExercises', error);
      }
    } catch (error) {
      console.error('Error while retrieving object SelectExercises', error);
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
          <TouchableOpacity onPress={() => handleSettings(selectExerciseId)}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Salvar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

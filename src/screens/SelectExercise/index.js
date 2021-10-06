import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { readPatient } from '../../components/Patient/index';
import { createSelectExercises } from '../../components/SelectExercises/index';
import { readExercise } from '../../components/Exercises/index';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('Exercise');
parseQuery.ascending('createdAt');

export const SelectExercises = (props) => {
  const navigation = useNavigation();

  const results = useParseQuery(parseQuery).results;

  async function HandleCreateSelectedExercise(exerciseName) {
    console.log(props.route.params);

    var patient = await readPatient(props.route.params);
    var exercise = await readExercise(exerciseName);

    var exercisePointer = {
      __type: 'Pointer',
      className: 'Exercise',
      objectId: exercise.id,
    };

    var patientPointer = {
      __type: 'Pointer',
      className: 'Patient',
      objectId: patient.id,
    };

    createSelectExercises(patientPointer, exercisePointer);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Cadastro de paciente'}</Text>
        </View>
      </View>
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
              <List.Item
                style={styles.item}
                title={item.get('name')}
                description={item.get('description')}
                titleNumberOfLines={1}
                titleStyle={styles.itemTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={10}
                onPress={() => HandleCreateSelectedExercise(item.get('name'))}
              />
          )}
        />
      </View>
    </View>
  );
};

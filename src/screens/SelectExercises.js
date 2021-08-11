import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

import Parse from 'parse/react-native.js';

import Styles from '../components/Styles';
import { readPatient } from '../components/Patient';
import { createSelectExercises } from '../components/SelectExercises';
import { readExercise } from '../components/Exercices';

const parseQuery = new Parse.Query('Exercise');
parseQuery.descending('createdAt');

export const SelectExercises = (props) => {
  const results = useParseQuery(parseQuery).results;

  async function SelectedExercise(exerciseName) {
    console.log(props.route.params)

    var patient = await readPatient(props.route.params);
    var exercise = await readExercise(exerciseName);

    var exercisePointer = {
      __type: 'Pointer',
      className: 'Exercise',
      objectId: exercise.id
    }

    var patientPointer = {
      __type: 'Pointer',
      className: 'Patient',
      objectId: patient.id
    }

    createSelectExercises(patientPointer, exercisePointer);
  }

  return (
    <>
      <View style={Styles.login_header}>
        <Text style={Styles.login_header_text}>
          <Text style={Styles.login_header_text_bold}>
            {'AppReabilitação - '}
          </Text>
          {'Lista de Exercícios Selecionados'}
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              title={item.get('name')}
              description={item.get('description')}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
              onPress={() => SelectedExercise(item.get('name'))}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});

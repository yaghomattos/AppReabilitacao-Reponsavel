import React from 'react';
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';

import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

import Parse from 'parse/react-native.js';

import { ToSelectExercises } from '../routes/ToSelectExercise';
import Styles from '../components/Styles';

const parseQuery = new Parse.Query('Patient');
parseQuery.descending('createdAt');

let exercise = '';

async function test(patient) {
  parseQuery.equalTo('name', patient);
  const results = await parseQuery.find();

  let exerciseRelation = results[0].relation('exercises');
  results.exercises = await exerciseRelation.query().find();

  exercise = results.exercises;
}

export const ListSelectExercises = (patient) => {
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);

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

  test(patient.route.params);

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
          data={exercise}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              title={item.get('name')}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
            />
          )}
        />
      </View>
      <ToSelectExercises>{patient.route.params}</ToSelectExercises>
    </>
  );
};

import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';

import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

import Parse from 'parse/react-native.js';

import { ToListExercises } from '../routes/ToListExercises';
import Styles from '../components/Styles';

/* quando o id = x pegar todos os exercises de SelectExercises, pra isso usar o context
para saber qual é o id cliclado */
const parseQuery = new Parse.Query('Patient');
parseQuery.descending('createdAt');

let exercise = '';

async function teste() {
  parseQuery.equalTo('name', 'paciente 2');
  const results = await parseQuery.find();

  let exerciseRelation = results[0].relation('exercises');
  results.exercises = await exerciseRelation.query().find();

  exercise = results.exercises;

  for (let result of results.exercises) {
    console.log(result.get('name'));
  }
}

teste();

export const ListSelectExercises = () => {
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);

  console.log(parseQuery);

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
      <ToListExercises />
    </>
  );
};

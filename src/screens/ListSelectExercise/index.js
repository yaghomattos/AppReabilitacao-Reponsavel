import React from 'react';
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

import Parse from 'parse/react-native.js';

import { Button } from '../../components/Button/index';

import Styles from '../../components/Styles';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

const parseQuery = new Parse.Query('SelectExercises');
parseQuery.descending('createdAt');

var exercise = '';

async function test(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('patient', patientPointer);
  const results = await parseQuery.find();

  exercise = results;
}

export const ListSelectExercises = (props) => {
  const navigation = useNavigation();

  const results = useParseQuery(parseQuery).results;

  test(props.route.params);

  const patient = props.route.params;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backView}>
            <Ionicons
              name="arrow-back"
              size={24}
              style={styles.back}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.header_text}>{'Exercícios selecionados'}</Text>
          </View>
        </View>
        <View style={styles.backgroundList}>
          <View style={styles.viewList}>
            <FlatList
              data={exercise}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <List.Item
                  style={styles.item}
                  title={item.get('exercise').get('name')}
                  titleNumberOfLines={1}
                  titleStyle={styles.itemTitle}
                  onPress={() => navigation.navigate('ExerciseSettings', item.id)}
                />
              )}
            />
          </View>
          <Button title="Selecionar Exercício" onPress="SelectExercises" props={patient} />
        </View>
      </View>
    </>
  );
};

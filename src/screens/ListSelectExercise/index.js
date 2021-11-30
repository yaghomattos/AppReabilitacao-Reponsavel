import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { Button } from '../../components/Button/index';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('SelectExercises');
parseQuery.descending('createdAt');

export const ListSelectExercises = (props) => {
  const navigation = useNavigation();

  const patient = props.route.params;

  const [exercise, setExercise] = useState('');

  useEffect(() => {
    async function Search(patientId) {
      var patientPointer = {
        __type: 'Pointer',
        className: 'Patient',
        objectId: patientId,
      };

      parseQuery.equalTo('patient', patientPointer);
      const results = await parseQuery.find();

      setExercise(results);
    }

    if (patient != '') Search(patient);
  }, [exercise]);

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backView}>
            <Ionicons
              name="arrow-back"
              size={24}
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.header_text}>{'Exercícios selecionados'}</Text>
            <Ionicons
              name="home"
              size={24}
              style={styles.icon}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
        <View style={styles.background}>
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
                  onPress={() =>
                    navigation.navigate('ExerciseSettings', item.id)
                  }
                  left={(props) => <List.Icon {...props} icon="movie-edit" />}
                />
              )}
            />
          </View>
          <Button
            title="Selecionar Exercício"
            onPress="SelectExercises"
            props={patient}
          />
        </View>
      </View>
    </>
  );
};

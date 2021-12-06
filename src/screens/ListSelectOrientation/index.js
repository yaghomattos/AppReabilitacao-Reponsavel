import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { Button } from '../../components/Button/index';
import { deleteSelectOrientations } from '../../components/SelectOrientations';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('SelectOrientations');
parseQuery.descending('createdAt');

export const ListSelectOrientations = (props) => {
  const navigation = useNavigation();

  const id = props.route.params[0];
  const examOrExercise = props.route.params[1];

  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    async function SearchExam() {
      var examPointer = {
        __type: 'Pointer',
        className: 'Exam',
        objectId: id,
      };

      parseQuery.equalTo('exam', examPointer);
      const results = await parseQuery.find();

      setOrientation(results);
    }

    async function SearchExercise() {
      var exercisePointer = {
        __type: 'Pointer',
        className: 'Exercise',
        objectId: id,
      };

      parseQuery.equalTo('exercise', exercisePointer);
      const results = await parseQuery.find();

      setOrientation(results);
    }

    if (examOrExercise == 'exam') SearchExam();
    else SearchExercise();
  }, []);

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  async function handleDelete(object_id) {
    deleteSelectOrientations(object_id);
  }

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
            <Text style={styles.header_text}>{'Orientações selecionadas'}</Text>
            <Ionicons
              name="home"
              size={24}
              style={styles.icon}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
        <View style={styles.backgroundList}>
          <View style={styles.viewList}>
            <FlatList
              data={orientation}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    width: 360,
                    height: item.get('orientation').get('text').length,
                    marginTop: 10,
                    borderRadius: 10,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#afafaf',
                  }}
                >
                  <List.Item
                    style={{
                      width: 320,
                      height: item.get('orientation').get('text').length,
                    }}
                    title={item.get('orientation').get('text')}
                    titleNumberOfLines={100}
                    titleStyle={styles.listItemTitle}
                  />
                  <Ionicons
                    name="trash"
                    size={24}
                    style={styles.deleteButton}
                    onPress={() => {
                      handleDelete(item.id);
                    }}
                  />
                </View>
              )}
            />
          </View>
          <Button
            title="Selecionar Orientações"
            onPress="SelectOrientations"
            props={[id, examOrExercise]}
          />
        </View>
      </View>
    </>
  );
};

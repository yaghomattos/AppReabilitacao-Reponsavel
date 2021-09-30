import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View, FlatList } from 'react-native';

import Parse from 'parse/react-native.js';

import { useNavigation } from '@react-navigation/native';
import { useParseQuery } from '@parse/react-native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { List, Divider } from 'react-native-paper';

const parseQuery = new Parse.Query('SelectExercises');
parseQuery.ascending('createdAt');

var exercise = '';
var totalExercise = 0;

async function search(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('patient', patientPointer);
  var results = await parseQuery.find();
  totalExercise = results.length;

  const query = new Parse.Query('SelectExercises');
  query.ascending('createdAt');
  query.equalTo('check', true);

  var result = await query.find();
  exercise = result;
}

export function Monitoring(props) {
  const navigation = useNavigation();

  const patientId = props.route.params;

  const results = useParseQuery(parseQuery).results;

  search(patientId);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.date}>{'21 de set, 2021'}</Text>
        </View>
        <View style={styles.today}>
          <Text style={styles.title}>{'Feito Hoje'}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.exerciseBox}>
          <Text style={styles.subTitle}>{'Exercícios:'}</Text>
          <View style={styles.exerciseContainer}>
            <FlatList
              data={exercise}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <List.Item
                  style={styles.item}
                  title={item.get('exercise').get('name')}
                  titleNumberOfLines={1}
                  titleStyle={styles.description}
                />
              )}
            />
          </View>
          <View>
            <Text style={styles.subTitle}>{'Quantidade:'}</Text>
            <View>
              <Text style={styles.feedback}> {exercise.length + ` de ${totalExercise} exercícios concluídos`}
              </Text>
            </View>
            <Text style={styles.subTitle}>{'Produtividade:'}</Text>
            <View>
              <Text style={styles.feedback}>{'Excelente'}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

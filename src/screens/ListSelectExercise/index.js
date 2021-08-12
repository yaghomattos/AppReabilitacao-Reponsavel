import React from 'react';
import { View, StyleSheet, FlatList, Text, Alert } from 'react-native';

import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

import Parse from 'parse/react-native.js';

import { Button } from '../../components/Button/index';

import Styles from '../../components/Styles';

const parseQuery = new Parse.Query('SelectExercises');
parseQuery.descending('createdAt');

var exercise = '';

async function test(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId
  }

  parseQuery.equalTo('patient', patientPointer);
  const results = await parseQuery.find();

  exercise = results;
}

export const ListSelectExercises = (props) => {
  const results = useParseQuery(parseQuery).results;

  test(props.route.params);

  const patient = props.route.params;

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
              title={item.get('exercise').get('name')}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
            />
          )}
        />
      </View>
      <Button title="+" onPress="SelectExercises" props={patient} />
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

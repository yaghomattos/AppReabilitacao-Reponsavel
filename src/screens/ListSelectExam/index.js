import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { Button } from '../../components/Button/index';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('SelectExams');
parseQuery.descending('createdAt');

var exam = '';

async function Search(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('patient', patientPointer);
  const results = await parseQuery.find();

  exam = results;
}

export const ListSelectExams = (props) => {
  const navigation = useNavigation();

  const results = useParseQuery(parseQuery).results;

  Parse.User._clearCache();

  const patient = props.route.params;

  Search(patient);

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
            <Text style={styles.header_text}>{'Testes selecionados'}</Text>
          </View>
        </View>
        <View style={styles.backgroundList}>
          <View style={styles.viewList}>
            <FlatList
              data={exam}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <List.Item
                  style={styles.item}
                  title={item.get('exam').get('name')}
                  titleNumberOfLines={1}
                  titleStyle={styles.itemTitle}
                  onPress={() =>
                    navigation.navigate('ExamSettings', item.get('exam').id)
                  }
                  left={(props) => <List.Icon {...props} icon="movie-edit" />}
                />
              )}
            />
          </View>
          <Button
            title="Selecionar Testes"
            onPress="SelectExams"
            props={patient}
          />
        </View>
      </View>
    </>
  );
};

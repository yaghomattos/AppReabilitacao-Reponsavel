import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { readPatient } from '../../components/Patient/index';
import { createSelectExam } from '../../components/SelectExams/index';
import { readExam } from '../../components/Exams/index';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('Exam');
parseQuery.ascending('createdAt');

export const SelectExams = (props) => {
  const navigation = useNavigation();

  const results = useParseQuery(parseQuery).results;

  Parse.User._clearCache();

  async function HandleCreateSelectedExam(examName) {
    console.log(props.route.params);

    var patient = await readPatient(props.route.params);
    var exam = await readExam(examName);

    var examPointer = {
      __type: 'Pointer',
      className: 'Exam',
      objectId: exam.id,
    };

    var patientPointer = {
      __type: 'Pointer',
      className: 'Patient',
      objectId: patient.id,
    };

    createSelectExam(patientPointer, examPointer);
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
          <Text style={styles.header_text}>{'Selecionar Exames'}</Text>
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
              onPress={() => HandleCreateSelectedExam(item.get('name'))}
            />
          )}
        />
      </View>
    </View>
  );
};

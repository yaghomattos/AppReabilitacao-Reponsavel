import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import DateTimePicker from '@react-native-community/datetimepicker';
import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const parseQueryExams = new Parse.Query('SelectExams');
parseQueryExams.ascending('createdAt');

const parseQuery = new Parse.Query('SelectExercises');
parseQuery.ascending('createdAt');

var exercise = '';
var totalExercise = 0;

var exam = '';
var totalExam = 0;

async function Search(patientId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  parseQuery.equalTo('patient', patientPointer);
  var resultPatient = await parseQuery.find();
  totalExercise = resultPatient.length;

  const query = new Parse.Query('SelectExercises');
  query.ascending('createdAt');
  query.equalTo('check', true);

  var result = await query.find();
  exercise = result;

  parseQueryExams.equalTo('patient', patientPointer);
  var resultPatientExam = await parseQueryExams.find();
  totalExam = resultPatientExam.length;

  const queryExam = new Parse.Query('SelectExams');
  queryExam.ascending('createdAt');
  queryExam.equalTo('check', true);

  var resultExam = await queryExam.find();
  exam = resultExam;
}

function CaseBad() {
  return 'Ruim';
}

function CaseOkay() {
  return 'Bom';
}

function CaseGreat() {
  return 'Excelente';
}

function Productivy(props) {
  const percent = props;
  if (percent <= 0.34) return <CaseBad />;
  else if (percent > 0.33 && percent <= 0.67) return <CaseOkay />;
  else return <CaseGreat />;
}

function CurrentDate() {
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();

  var monthName;
  monthName = new Array(
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'Maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  );
  return date + ' de ' + monthName[month] + ', ' + year;
}

export function Monitoring(props) {
  const navigation = useNavigation();

  const patientId = props.route.params;

  const currentDate = new Date();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const results = useParseQuery(parseQuery).results;
  const resultsExam = useParseQuery(parseQueryExams).results;
  Parse.User._clearCache();

  Search(patientId);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
        <TouchableHighlight
          style={styles.highlight}
          activeOpacity={0}
          onPress={() => {
            setShow(true);
          }}
        >
          <Text style={styles.date}>{CurrentDate()}</Text>
        </TouchableHighlight>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(date)}
            mode="date"
            display="calendar"
            maximumDate={currentDate}
            onChange={(date) => {
              setDate(date);
            }}
          />
        )}
      </View>
      <View style={styles.today}>
        <Text style={styles.title}>{'Feito Hoje'}</Text>
      </View>
      <Divider style={styles.divider} />
      <ScrollView horizontal={false}>
        <ScrollView horizontal={true}>
          <View style={styles.exerciseBox}>
            <Text style={styles.subTitle}>{'Exercícios:'}</Text>
            <View style={styles.exerciseContainer}>
              <FlatList
                nestedScrollEnabled={true}
                data={exercise}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item }) => (
                  <List.Item
                    title={item.get('exercise').get('name')}
                    titleNumberOfLines={1}
                    titleStyle={styles.description}
                    onPress={() =>
                      navigation.navigate('ViewForm', item.get('form'))
                    }
                  />
                )}
              />
            </View>
            <View>
              <Text style={styles.subTitle}>{'Quantidade:'}</Text>
              <View>
                <Text style={styles.feedback}>
                  {' '}
                  {exercise.length +
                    ` de ${totalExercise} exercícios concluídos`}
                </Text>
              </View>
              <Text style={styles.subTitle}>{'Produtividade:'}</Text>
              <View>
                <Text style={styles.feedback}>
                  {Productivy(exercise.length / totalExercise)}
                </Text>
              </View>
            </View>
            <Text style={styles.subTitle}>{'Exames:'}</Text>
            <View style={styles.exerciseContainer}>
              <FlatList
                nestedScrollEnabled
                data={exam}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item }) => (
                  <List.Item
                    title={item.get('exam').get('name')}
                    titleNumberOfLines={1}
                    titleStyle={styles.description}
                    onPress={() =>
                      navigation.navigate('ViewForm', item.get('form'))
                    }
                  />
                )}
              />
            </View>
            <View>
              <Text style={styles.subTitle}>{'Quantidade:'}</Text>
              <View>
                <Text style={styles.feedback}>
                  {' '}
                  {exam.length + ` de ${totalExam} exames concluídos`}
                </Text>
              </View>
              <Text style={styles.subTitle}>{'Produtividade:'}</Text>
              <View>
                <Text style={styles.feedback}>
                  {Productivy(exam.length / totalExam)}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

import PatientContext from '../components/patientContext';

import Parse from 'parse/react-native.js';

import Styles from '../components/Styles';

const parseQuery = new Parse.Query('Patient');
parseQuery.ascending('name');

export const ListPatients = () => {
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
    },
    listTitle: {
      fontSize: 22,
    },
  });

  return (
    <>
      <View style={Styles.login_header}>
        <Text style={Styles.login_header_text}>
          <Text style={Styles.login_header_text_bold}>
            {'AppReabilitação - '}
          </Text>
          {'Lista de Pacientes'}
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              title={item.get('name')}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              onPress={() => navigation.navigate('ListSelectExercises')}
            />
          )}
        />
      </View>
    </>
  );
};

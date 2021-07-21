import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

const parseQuery = new Parse.Query('Patient');
parseQuery.descending('name');

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
            onPress={() => navigation.navigate('ListPatientExercises')}
          />
        )}
      />
    </View>
  );
};

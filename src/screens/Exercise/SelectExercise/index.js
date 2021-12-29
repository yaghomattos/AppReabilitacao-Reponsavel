import { Ionicons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/core';
import Parse from 'parse/react-native.js';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectExercises } from '../../../components/CRUDs/SelectExercise/index';
import styles from './styles';

const parseQuery = new Parse.Query('Exercise');
parseQuery.ascending('createdAt');

export const SelectExercise = (props) => {
  const navigation = useNavigation();

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  async function HandleCreateSelectedExercise(exerciseId) {
    var participantId = props.route.params;

    createSelectExercises(participantId, exerciseId);
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
          <Text style={styles.header_text}>{'Selecionar Exercícios'}</Text>
        </View>
      </View>
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              style={{
                width: 350,
                height: item.get('description').lenght,
                marginBottom: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6f6f6f',
              }}
              title={item.get('name')}
              description={item.get('description')}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={10}
              onPress={() => HandleCreateSelectedExercise(item.id)}
            />
          )}
        />
      </View>
    </View>
  );
};
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectExercises } from '../../../components/CRUDs/SelectExercise/index';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectExercise = (props) => {
  const navigation = useNavigation();

  var participant = props.route.params;

  const [results, setResults] = useState('');

  useEffect(() => {
    var li = [];
    database
      .ref('exercise')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          li.push({
            name: child.val().name,
            description: child.val().description,
            video: child.val().video,
            preview: child.val().preview,
            id: child.key,
          });
        });
        setResults(li);
      });
  }, [results]);

  async function HandleCreateSelectedExercise(item) {
    var property = {
      participant: participant,
      exercise: item.id,
      name: item.name,
      description: item.description,
      video: item.video,
      preview: item.preview,
    };

    createSelectExercises(property);
  }

  return (
    <View style={styles.container}>
      <Header title="Selecionar Exercícios" />
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              style={{
                width: 350,
                height: item.description.lenght,
                marginBottom: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6f6f6f',
              }}
              title={item.name}
              description={item.description}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={10}
              onPress={() => HandleCreateSelectedExercise(item)}
            />
          )}
        />
      </View>
    </View>
  );
};

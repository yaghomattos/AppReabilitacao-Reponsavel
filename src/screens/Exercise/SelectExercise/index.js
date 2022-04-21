import React, { useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { List } from 'react-native-paper';
import { createSelectExercises } from '../../../components/CRUDs/SelectExercise/index';
import HeaderHome from '../../../components/HeaderHome';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectExercise = (props) => {
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
      <HeaderHome title="Selecionar Exercícios" />
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                onPress={() => HandleCreateSelectedExercise(item)}
              >
                <Image style={styles.image} source={{ uri: item.preview }} />
              </TouchableOpacity>

              <List.Item
                style={styles.item}
                title={item.name}
                description={item.description}
                titleNumberOfLines={3}
                titleStyle={styles.itemTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={10}
                onPress={() => HandleCreateSelectedExercise(item)}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

import React, { useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { List } from 'react-native-paper';
import { createSelectTests } from '../../../components/CRUDs/SelectTest/index';
import HeaderHome from '../../../components/HeaderHome';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectTest = (props) => {
  var participant = props.route.params;

  const [results, setResults] = useState('');

  useEffect(() => {
    var li = [];
    database
      .ref('test')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          li.push({
            name: child.val().name,
            description: child.val().description,
            video: child.val().video,
            preview: child.val().preview,
            reps: child.val().reps,
            timer: child.val().timer,
            id: child.key,
          });
        });
        setResults(li);
      });
  }, [results]);

  async function HandleCreateSelectedTest(item) {
    var property = {
      participant: participant,
      test: item.id,
      name: item.name,
      description: item.description,
      video: item.video,
      preview: item.preview,
      timer: item.timer,
      reps: item.reps,
    };

    createSelectTests(property);
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Avaliação" />
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity onPress={() => HandleCreateSelectedTest(item)}>
                <Image style={styles.image} source={{ uri: item.preview }} />
              </TouchableOpacity>
              <List.Item
                style={styles.item}
                title={item.name}
                titleNumberOfLines={3}
                titleStyle={styles.itemTitle}
                description={item.description}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={4}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

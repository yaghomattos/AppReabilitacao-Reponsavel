import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { List } from 'react-native-paper';
import { createSelectOrientations } from '../../../components/CRUDs/SelectOrientation/index';
import HeaderHome from '../../../components/HeaderHome';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectOrientation = (props) => {
  const [results, setResults] = useState([]);

  const testOrExerciseId = props.route.params.id;
  const className = props.route.params.className;

  useEffect(() => {
    var li = [];
    database
      .ref('orientation')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          li.push({
            text: child.val().text,
            id: child.key,
          });
        });
        setResults(li);
      });
  }, [results]);

  async function HandleCreateSelectedOrientation(text) {
    var props = {
      testOrExerciseId: testOrExerciseId,
      orientation: text,
      className: className,
    };

    createSelectOrientations(props);
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Selecionar Orientações" />
      <View style={styles.wrapper}>
        <View style={styles.viewList}>
          <FlatList
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <List.Item
                  style={styles.itemText}
                  title={item.text}
                  titleNumberOfLines={100}
                  titleStyle={styles.itemTitle}
                  onChe
                  onPress={() => HandleCreateSelectedOrientation(item.text)}
                />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

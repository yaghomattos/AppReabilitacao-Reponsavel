import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectOrientations } from '../../../components/CRUDs/SelectOrientation/index';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectOrientation = (props) => {
  const [orientation, setOrientation] = useState([]);
  const [results, setResults] = useState([]);

  var listSave = [];

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
      <Header title="Selecionar Orientações" />
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <>
              <List.Item
                style={{
                  width: 350,
                  height: item.text.length,
                  minHeight: 40,
                  marginBottom: 5,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#6f6f6f',
                }}
                title={item.text}
                titleNumberOfLines={100}
                titleStyle={styles.itemTitle}
                onChe
                onPress={() => HandleCreateSelectedOrientation(item.text)}
              />
            </>
          )}
        />
      </View>
    </View>
  );
};

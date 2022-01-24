import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
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

  async function SaveItem(text) {
    listSave.push(text);
    setOrientation(listSave);
  }

  async function HandleCreateSelectedOrientation(element) {
    var props = {
      testOrExerciseId: testOrExerciseId,
      orientation: element,
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
                onPress={() => SaveItem(item.text)}
              />
            </>
          )}
        />
      </View>
      <View style={styles.extra}>
        <View>
          {!orientation ? (
            <Text style={styles.warning}>{'Orientação não selecionada!'}</Text>
          ) : (
            <TouchableOpacity
              onPress={() =>
                orientation.forEach(HandleCreateSelectedOrientation)
              }
            >
              <View style={styles.button}>
                <Text style={styles.text_label}>{'Confirmar'}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

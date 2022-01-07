import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectOrientations } from '../../../components/CRUDs/SelectOrientation/index';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectOrientation = (props) => {
  const navigation = useNavigation();

  const [orientation, setOrientation] = useState('');
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

  async function SaveItem(text) {
    setOrientation(text);
  }

  async function HandleCreateSelectedOrientation() {
    var props = {
      testOrExerciseId: testOrExerciseId,
      orientation: orientation,
      className: className,
    };

    createSelectOrientations(props);
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
          <Text style={styles.header_text}>{'Selecionar Orientações'}</Text>
        </View>
      </View>
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
            <TouchableOpacity onPress={() => HandleCreateSelectedOrientation()}>
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

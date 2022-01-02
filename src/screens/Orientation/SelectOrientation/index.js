import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectOrientations } from '../../../components/CRUDs/SelectOrientation/index';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectOrientation = (props) => {
  //salvar a orientação e não o id da orientação na guia "orientation"
  const navigation = useNavigation();

  const [orientation, setOrientation] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getOrientations() {
      var li = [];
      database.ref('orientation').on('value', (snapshot) => {
        snapshot.forEach((child) => {
          li.push({
            text: child.val().text,
            id: child.key,
          });
        });
      });
      setResults(li);
    }

    getOrientations();
  }, []);

  const testOrExerciseId = props.route.params[0];
  const className = props.route.params[1];

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
                  marginBottom: 5,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#6f6f6f',
                }}
                title={item.text}
                titleNumberOfLines={100}
                titleStyle={styles.itemTitle}
                onPress={() => SaveItem(item.id)}
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

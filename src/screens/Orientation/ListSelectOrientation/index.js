import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import { deleteSelectOrientations } from '../../../components/CRUDs/SelectOrientation/index';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListSelectOrientation = (props) => {
  const navigation = useNavigation();

  const id = props.route.params.id;
  const testOrExercise = props.route.className;

  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    if (testOrExercise == 'test') {
      var li = [];
      database.ref('selectOrientation').on('value', (snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().test == id) {
            li.push({
              orientation: child.val().orientation,
              id: child.key,
            });
            console.log('id snapshot ? ', child.key);
          }
        });
        setOrientation(li);
      });
    } else {
      var li = [];
      database.ref('selectOrientation').on('value', (snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().exercise == id) {
            li.push({
              orientation: child.val().orientation,
            });
          }
        });
        setOrientation(li);
      });
    }
  }, []);

  async function handleDelete(object_id) {
    deleteSelectOrientations(object_id);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backView}>
            <Ionicons
              name="arrow-back"
              size={24}
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.header_text}>{'Orientações selecionadas'}</Text>
            <Ionicons
              name="home"
              size={24}
              style={styles.icon}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
        <View style={styles.backgroundList}>
          <View style={styles.viewList}>
            <FlatList
              data={orientation}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    width: 360,
                    height: item.orientation.length,
                    marginTop: 10,
                    borderRadius: 10,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#afafaf',
                  }}
                >
                  <List.Item
                    style={{
                      width: 320,
                      height: item.orientation.length,
                    }}
                    title={item.orientation}
                    titleNumberOfLines={100}
                    titleStyle={styles.listItemTitle}
                  />
                  <Ionicons
                    name="trash"
                    size={24}
                    style={styles.deleteButton}
                    onPress={() => {
                      handleDelete(item.id);
                    }}
                  />
                </View>
              )}
            />
          </View>
          <Button
            title="Selecionar Orientações"
            onPress="SelectOrientation"
            props={props.route.params}
          />
        </View>
      </View>
    </>
  );
};

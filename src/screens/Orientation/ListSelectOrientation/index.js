import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import { deleteSelectOrientations } from '../../../components/CRUDs/SelectOrientation/index';
import HeaderHome from '../../../components/HeaderHome';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListSelectOrientation = (props) => {
  const testOrExercise = props.route.className;

  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    var li = [];
    if (testOrExercise == 'test') {
      const id = props.route.params.test;
      database
        .ref('selectOrientation')
        .get()
        .then((snapshot) => {
          snapshot.forEach((child) => {
            if (child.val().test == id) {
              li.push({
                orientation: child.val().orientation,
                id: child.key,
              });
            }
          });
          setOrientation(li);
        });
    } else {
      const id = props.route.params.exercise;
      database
        .ref('selectOrientation')
        .get()
        .then((snapshot) => {
          snapshot.forEach((child) => {
            if (child.val().exercise == id) {
              li.push({
                orientation: child.val().orientation,
                id: child.key,
              });
            }
          });
          setOrientation(li);
        });
    }
  }, [orientation]);

  async function handleDelete(object_id) {
    deleteSelectOrientations(object_id);
  }

  return (
    <>
      <View style={styles.container}>
        <HeaderHome title="Orientações selecionadas" />
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
                    height: item.orientation.length * 1.2,
                    minHeight: 40,
                    marginTop: 10,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#afafaf',
                  }}
                >
                  <List.Item
                    style={{
                      width: 320,
                      height: item.orientation.length * 1.2,
                      minHeight: 40,
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

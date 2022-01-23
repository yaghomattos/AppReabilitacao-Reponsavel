import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import { deleteSelectExercises } from '../../../components/CRUDs/SelectExercise';
import HeaderHome from '../../../components/HeaderHome';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListSelectExercise = (props) => {
  const navigation = useNavigation();

  const participant = props.route.params;

  const [exercise, setExercise] = useState('');

  useEffect(() => {
    var li = [];
    database
      .ref('selectExercise')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().participant == participant) {
            li.push({
              exercise: child.val().exercise,
              name: child.val().name,
              id: child.key,
            });
          }
        });
        setExercise(li);
      });
  }, [exercise]);

  async function handleDelete(selectExercise) {
    deleteSelectExercises(selectExercise);
  }

  return (
    <>
      <View style={styles.container}>
        <HeaderHome title="Exercícios selecionados" />
        <View style={styles.background}>
          <View style={styles.viewList}>
            <FlatList
              data={exercise}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <List.Item
                    style={styles.item}
                    title={item.name}
                    titleNumberOfLines={1}
                    titleStyle={styles.itemTitle}
                  />
                  <Ionicons
                    name="build"
                    size={24}
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('ExerciseSettings', item);
                    }}
                  />
                  <Ionicons
                    name="trash"
                    size={24}
                    style={styles.button}
                    onPress={() => {
                      handleDelete(item.id);
                    }}
                  />
                </View>
              )}
            />
          </View>
          <Button
            title="Selecionar Exercício"
            onPress="SelectExercise"
            props={participant}
          />
        </View>
      </View>
    </>
  );
};

import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { List } from 'react-native-paper';
import { deleteSelectExercises } from '../../../components/CRUDs/SelectExercise';
import Header from '../../../components/Header';
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
              preview: child.val().preview,
              id: child.key,
              className: 'exercise',
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
    <View style={styles.container}>
      <Header title="Treinamento" />
      <View style={styles.background}>
        <View style={styles.viewList}>
          <FlatList
            data={exercise}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <List.Item
                  style={styles.item}
                  title={item.name}
                  titleNumberOfLines={1}
                  titleStyle={styles.itemTitle}
                  left={() => (
                    <Image
                      style={styles.image}
                      source={{ uri: item.preview }}
                    />
                  )}
                  onPress={() => {
                    navigation.navigate('ExerciseSettings', item);
                  }}
                />
                <Feather
                  name="trash-2"
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
      </View>
      <View style={styles.add}>
        <Ionicons
          name="add-outline"
          size={24}
          color={'#fefefe'}
          onPress={() => {
            navigation.navigate('SelectExercise', participant);
          }}
        />
      </View>
    </View>
  );
};

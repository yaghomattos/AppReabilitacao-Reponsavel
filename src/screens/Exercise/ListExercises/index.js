import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { List } from 'react-native-paper';
import { deleteExercise } from '../../../components/CRUDs/Exercise';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListExercises = () => {
  const navigation = useNavigation();

  const [result, setResults] = useState([]);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    var li = [];
    const onValueChange = database.ref('exercise').on('value', (snapshot) => {
      snapshot.forEach((child) => {
        li.push({
          name: child.val().name,
          description: child.val().description,
          preview: child.val().preview,
          id: child.key,
        });
      });

      if (refresh === null) setRefresh('');
      setResults(li);
    });

    return () => database.ref('exercise').off('value', onValueChange);
  }, []);

  async function handleDelete(exercise) {
    deleteExercise(exercise);
  }

  return (
    <View style={styles.container}>
      <Header title={'Exercícios'} />
      <View style={styles.background}>
        <View style={styles.viewList}>
          <FlatList
            data={result}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.preview ? item.preview : 'undefined',
                  }}
                />
                <List.Item
                  style={styles.item}
                  title={item.name}
                  titleNumberOfLines={5}
                  titleStyle={styles.itemTitle}
                />
                <Feather
                  name="trash-2"
                  size={24}
                  style={styles.button}
                  onPress={() => {
                    handleDelete(item);
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
            navigation.navigate('UploadExercise');
          }}
        />
      </View>
    </View>
  );
};

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { deleteExercise } from '../../../components/CRUDs/Exercise';
import HeaderHome from '../../../components/HeaderHome';
import { TabExercise } from '../../../components/TabExercise/index';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListExercises = () => {
  const navigation = useNavigation();

  const [result, setResults] = useState([]);

  useEffect(() => {
    var li = [];
    database
      .ref('exercise')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          li.push({
            name: child.val().name,
            description: child.val().description,
            preview: child.val().preview,
            id: child.key,
          });
        });
        setResults(li);
      });
  }, [result]);

  async function handleDelete(exercise) {
    deleteExercise(exercise);
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Exercícios" />
      <View style={styles.background}>
        <View style={styles.viewList}>
          <FlatList
            data={result}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <List.Item
                  style={styles.item}
                  title={item.name}
                  titleNumberOfLines={1}
                  titleStyle={styles.itemTitle}
                  left={() => (
                    <Image
                      style={{
                        width: '30%',
                        height: 60,
                      }}
                      source={{ uri: item.preview }}
                    />
                  )}
                />
                <Ionicons
                  name="trash"
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
      <TabExercise />
    </View>
  );
};

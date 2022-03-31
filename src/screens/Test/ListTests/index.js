import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { List } from 'react-native-paper';
import { deleteTest } from '../../../components/CRUDs/Test';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListTests = () => {
  const navigation = useNavigation();

  const [result, setResults] = useState([]);

  useEffect(() => {
    var li = [];
    database
      .ref('test')
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

  async function handleDelete(test) {
    deleteTest(test);
  }

  return (
    <View style={styles.container}>
      <Header title={'Testes'} />
      <View style={styles.background}>
        <View style={styles.viewList}>
          <FlatList
            data={result}
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
            navigation.navigate('UploadTest');
          }}
        />
      </View>
    </View>
  );
};

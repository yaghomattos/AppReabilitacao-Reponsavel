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
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      if (refresh != 0) setRefresh(refresh + 1);
    });

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
        setRefresh(li.length);
      });

    return focusHandler;
  }, [refresh, navigation]);

  async function handleDelete(test) {
    deleteTest(test);
    setRefresh(refresh - 1);
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
            navigation.navigate('UploadTest');
          }}
        />
      </View>
    </View>
  );
};

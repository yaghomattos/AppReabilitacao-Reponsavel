import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { List } from 'react-native-paper';
import { deleteSelectTests } from '../../../components/CRUDs/SelectTest';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListSelectTest = (props) => {
  const navigation = useNavigation();

  const participant = props.route.params;

  const [test, setTest] = useState([]);

  useEffect(() => {
    var li = [];
    database
      .ref('selectTest')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().participant == participant) {
            li.push({
              test: child.val().test,
              name: child.val().name,
              preview: child.val().preview,
              id: child.key,
              className: 'test',
            });
          }
        });
        setTest(li);
      });
  }, [test]);

  async function handleDelete(selectTest) {
    deleteSelectTests(selectTest);
  }

  return (
    <View style={styles.container}>
      <Header title={'Avaliação'} />
      <View style={styles.background}>
        <View style={styles.viewList}>
          <FlatList
            data={test}
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
                    navigation.navigate('TestSettings', item);
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
        <View style={styles.add}>
          <Ionicons
            name="add-outline"
            size={24}
            color={'#fefefe'}
            onPress={() => {
              navigation.navigate('SelectTest', participant);
            }}
          />
        </View>
      </View>
    </View>
  );
};

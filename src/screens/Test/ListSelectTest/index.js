import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import { deleteSelectTests } from '../../../components/CRUDs/SelectTest';
import HeaderHome from '../../../components/HeaderHome';
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
    <>
      <View style={styles.container}>
        <HeaderHome title="Testes selecionados" />
        <View style={styles.background}>
          <View style={styles.viewList}>
            <FlatList
              data={test}
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
                          width: '20%',
                          height: 50,
                          marginLeft: 10,
                        }}
                        source={{ uri: item.preview }}
                      />
                    )}
                  />

                  <Ionicons
                    name="build"
                    size={24}
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('TestSettings', item);
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
            title="Selecionar Testes"
            onPress="SelectTest"
            props={participant}
          />
        </View>
      </View>
    </>
  );
};

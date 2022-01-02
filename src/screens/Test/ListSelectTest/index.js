import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListSelectTest = (props) => {
  const navigation = useNavigation();

  const participant = props.route.params;

  const [test, setTest] = useState([]);

  useEffect(() => {
    var li = [];
    database.ref('selectTest').on('value', (snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().participant == participant) {
          li.push({
            test: child.val().test,
            name: child.val().name,
            id: child.key,
          });
        }
      });
      setTest(li);
    });
  }, []);

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
            <Text style={styles.header_text}>{'Testes selecionados'}</Text>
            <Ionicons
              name="home"
              size={24}
              style={styles.icon}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
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
                  />
                  <Ionicons
                    name="build"
                    size={24}
                    style={styles.icon}
                    onPress={() => {
                      navigation.navigate('TestSettings', item.test);
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

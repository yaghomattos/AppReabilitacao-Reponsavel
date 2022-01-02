import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectTests } from '../../../components/CRUDs/SelectTest/index';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectTest = (props) => {
  const navigation = useNavigation();

  var participant = props.route.params;

  const [results, setResults] = useState('');

  useEffect(() => {
    var li = [];
    database.ref('test').on('value', (snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().participant == participant) {
          li.push({
            name: child.val().name,
            description: child.val().description,
            id: child.key,
          });
        }
      });
      setResults(li);
    });
  }, []);

  async function HandleCreateSelectedTest(test, name) {
    console.log('name', name);
    var property = {
      participant: participant,
      test: test,
      name: name,
    };

    createSelectTests(property);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Selecionar Testes'}</Text>
        </View>
      </View>
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              style={{
                width: 350,
                height: item.description.lenght,
                marginBottom: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6f6f6f',
              }}
              title={item.name}
              description={item.description}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={100}
              onPress={() => HandleCreateSelectedTest(item.id, item.name)}
            />
          )}
        />
      </View>
    </View>
  );
};
